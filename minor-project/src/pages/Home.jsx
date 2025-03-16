import React, { useState } from 'react';

function Home(){
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div>
            <header className="p-4 flex justify-between">
                <a href="" className="flex item-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 -rotate-90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                    <span className="font-bold text-xl">TravelEase</span>
                </a>


                <div className="flex item-center gap-1">
                    <div className="flex items-center gap-2 relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full pr-10"
                            aria-label="Search destinations and experiences"
                        />
                        <button
                            type="button"
                            className="absolute right-2 text-gray-500 hover:text-blue-600 focus:outline-none"
                            onClick={() => handleSearch(searchQuery)}
                            aria-label="Perform search"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                            </svg>
                        </button>
                    </div>

                    
                </div>
                
            </header>
        </div>
    );
}

export default Home;