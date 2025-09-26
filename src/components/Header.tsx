import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TI</span>
          </div>
          <span className="font-bold text-lg text-foreground">OLIT Solutions</span>
        </div>
        
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;