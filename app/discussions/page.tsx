import React from 'react'
import ChatRooms from '../../components/reader/ChatRooms'

export default function DiscussionsPage(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Discussion Rooms</h1>
      <ChatRooms />
    </div>
  )
}
