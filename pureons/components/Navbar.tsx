import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold text-foreground tracking-tight">
            PURE<span className="text-primary">ons</span>
          </a>

          <div className="flex items-center gap-4">
            <a href="#services" className="text-sm text-text-sub hover:text-foreground transition-colors hidden sm:block">
              Services
            </a>
            <a href="#features" className="text-sm text-text-sub hover:text-foreground transition-colors hidden sm:block">
              Features
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
