export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-6 text-sm text-slate-500 dark:border-slate-800">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} PulsePress. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a className="hover:underline" href="#">Privacy</a>
          <a className="hover:underline" href="#">Terms</a>
          <a className="hover:underline" href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
