export default function Header() {
  return (
    <header className="fixed top-3 left-0 w-full z-50 grid grid-cols-3 gap-1 pointer-events-none px-10">

      {/* Left side (Logo + Links) */}
      <div className="col-span-3 md:col-span-2 flex items-center gap-5 pointer-events-auto">
        <div className="flex items-center">
          <svg className="logo reveal" width="46" height="46" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="52"
              y="40"
              width="152"
              height="28"
              rx="14"
              fill="var(--fg)"
            />
            <path
              d="M108 68H154L136 112H176L100 216L118 144H92L108 68Z"
              fill="var(--fg)"
            />
          </svg>
        </div>
        <nav className="hidden md:flex gap-1 font-medium rounded-full p-1 bg-muted text-sm text-fg">
          <a href="#" className="hover:opacity-70 transition-opacity bg-primary text-primary-fg p-2.5 px-4 rounded-full">Home</a>
          <a href="#" className="hover:opacity-70 transition-opacity p-2.5 px-4 rounded-full">Course</a>
          <a href="#" className="hover:opacity-70 transition-opacity p-2.5 px-4 rounded-full">About</a>
          <a href="#" className="hover:opacity-70 transition-opacity p-2.5 px-4 rounded-full">Contact</a>
        </nav>
        <div className="w-9 hidden md:block"></div> {/* Spacer for symmetry */}
      </div>

      {/* Right side (Bag + Apply) */}
      <div className="col-span-3 md:col-span-1 hidden md:flex justify-end items-center gap-3 pointer-events-auto">
        <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center  text-primary-fg hover:bg-gray-50 transition-colors">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
        <button className="bg-primary text-primary-fg px-6 py-3.5 rounded-full font-medium text-sm transition-colors">
          APPLY NOW
        </button>
      </div>

    </header>
  );
}
