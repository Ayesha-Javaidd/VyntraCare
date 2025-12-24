export default function Header() {
  return (
    <header className="h-16 border-b border-border bg-white/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8">
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
          Admin Portal
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
          <span className="text-xs font-semibold text-foreground">AD</span>
        </div>
      </div>
    </header>
  )
}