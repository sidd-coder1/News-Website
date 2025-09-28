"use client"
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd'
import { useState } from 'react'

const initial = {
  todo: [ {id:'t1', content: 'Interview source'}, {id:'t2', content: 'Draft outline'} ],
  doing: [ {id:'t3', content: 'Write first section'} ],
  done: [ {id:'t4', content: 'Collect images'} ]
}

export default function TasksPanel(){
  const [columns, setColumns] = useState(initial)
  function onDragEnd(result: DropResult){
    const { source, destination } = result
    if(!destination) return
    const sourceCol = [...(columns as any)[source.droppableId]]
    const [moved] = sourceCol.splice(source.index, 1)
    const destCol = [...(columns as any)[destination.droppableId]]
    destCol.splice(destination.index, 0, moved)
    setColumns({ ...(columns as any), [source.droppableId]: sourceCol, [destination.droppableId]: destCol })
  }
  return (
    <section className="card p-4">
      <h2 className="font-semibold mb-3">Tasks</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3 gap-3">
          {['todo','doing','done'].map(col => (
            <Droppable droppableId={col} key={col}>
              {(provided)=> (
                <div ref={provided.innerRef} {...provided.droppableProps} className="bg-muted rounded p-2 min-h-[200px]">
                  <div className="font-medium capitalize mb-2">{col}</div>
                  {(columns as any)[col].map((item:any, index:number)=> (
                    <Draggable draggableId={item.id} index={index} key={item.id}>
                      {(prov)=> (
                        <div ref={prov.innerRef} {...prov.draggableProps} {...prov.dragHandleProps} className="card p-2 mb-2">
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </section>
  )
}
