import UsersPanel from '@/components/admin/UsersPanel'
import EditorialQueue from '@/components/admin/EditorialQueue'
import AnalyticsPanel from '@/components/admin/AnalyticsPanel'
import AuditLog from '@/components/admin/AuditLog'
import Moderation from '@/components/admin/Moderation'

export default function AdminPage(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <UsersPanel />
          <EditorialQueue />
          <AuditLog />
        </div>
        <div className="space-y-6">
          <AnalyticsPanel />
          <Moderation />
        </div>
      </div>
    </div>
  )
}
