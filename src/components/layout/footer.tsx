export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Personal Canvas. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Crafted with care and <span className="text-primary">&hearts;</span>.
        </p>
      </div>
    </footer>
  );
}
