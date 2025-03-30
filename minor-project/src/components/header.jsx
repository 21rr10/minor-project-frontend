import React, { useEffect, useState } from "react";

const Avatar = ({ name }) => {
  return (
    <div className="w-10 h-10 bg-[#00e5ff] text-white rounded-full flex items-center justify-center shadow-md">
      <span className="font-medium text-lg">{name[0]}</span>
    </div>
  );
};

const Header = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedName = localStorage.getItem("userName");

    if (token && storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <header className="sticky top-0 bg-black/80 text-white shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-[#00e5ff] bg-clip-text text-transparent">
            TravelEase
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {["Destinations", "Experiences", "Inspirations", "Trip Finder", "About Us"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/90 hover:text-[#00e5ff] font-medium text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Avatar (only if logged in) */}
          <div className="flex items-center gap-4">
            {userName && <Avatar name={userName} />}

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
