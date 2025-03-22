import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-[#7dd3fc] shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
            TravelEase
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {['Destinations', 'Experiences', 'Inspirations', 'Trip Finder','About Us'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/90 hover:text-white font-medium text-sm 
                             transition-colors relative pb-1 hover:after:w-full after:content-[''] 
                             after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                             after:bg-white after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

       
      </nav>
    </header>
  );
};

export default Header;
