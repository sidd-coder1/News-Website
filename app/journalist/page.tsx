import EditorPanel from '@/components/journalist/EditorPanel'
import TasksPanel from '@/components/journalist/TasksPanel'
import PerformancePanel from '@/components/journalist/PerformancePanel'

export default function JournalistPage(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Journalist Workspace</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <EditorPanel />
          <PerformancePanel />
        </div>
        <div className="space-y-6">
          <TasksPanel />
        </div>
      </div>
    </div>
  )
}
