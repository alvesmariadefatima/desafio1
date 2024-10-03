import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white mx-auto text-center p-5">
            <div className="flex justify-between items-center">
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-pink-500 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Centraliza os links */}
            <div className={`md:flex ${isOpen ? 'block' : 'hidden'} flex-col md:flex-row mt-5 md:mt-0 justify-center`}>
                <a className="text-base text-pink-500 px-3 py-2" href="#home">Home</a>
                <a className="text-base text-pink-500 px-3 py-2" href="#habilidades">Habilidades</a>
                <a className="text-base text-pink-500 px-3 py-2" href="#projetos">Projetos</a>
                <a className="text-base text-pink-500 px-3 py-2" href="#contato">Contato</a>
            </div>
        </nav>
    );
}

export default Navbar;