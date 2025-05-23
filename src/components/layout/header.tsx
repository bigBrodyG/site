import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Briefcase, Milestone, MessageSquare, Sparkles } from 'lucide-react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} passHref>
    <Button variant="ghost" className="text-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base">
      {children}
    </Button>
  </Link>
);

export default function Header() {
  const navItems = [
    { href: "#projects", label: "Projects", icon: <Briefcase className="mr-2 h-4 w-4 sm:hidden" /> },
    { href: "#timeline", label: "Timeline", icon: <Milestone className="mr-2 h-4 w-4 sm:hidden" /> },
    { href: "#contact", label: "Contact", icon: <MessageSquare className="mr-2 h-4 w-4 sm:hidden" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer group">
            <Sparkles className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
            <span className="ml-2 text-xl font-semibold text-primary hover:text-accent transition-colors duration-300">
              Personal Canvas
            </span>
          </div>
        </Link>
        
        <nav className="hidden sm:flex items-center space-x-2">
          {navItems.map(item => <NavLink key={item.href} href={item.href}>{item.label}</NavLink>)}
        </nav>

        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map(item => (
                  <Link key={item.href} href={item.href} passHref>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                       {item.icon} {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
