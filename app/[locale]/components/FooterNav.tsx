export function FooterNav() {
  const year = new Date().getFullYear();
  return (
    <div className="relative w-full">
      <footer className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-t px-4 backdrop-blur md:px-6">
        <div className="container mx-auto flex max-w-screen-2xl flex-col gap-2 py-4">
          <h1 className="text-5xl font-black">Ottric</h1>
          <p>
            &copy; {year} <b>&bull; Ottric &bull;</b> Patcharapon Tappakwan
          </p>
        </div>
      </footer>
    </div>
  );
}
