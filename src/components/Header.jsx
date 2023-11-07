import React from 'react'
import IconMoon from './icons/IconMoon';

const Header = () => {
  return (
      <header className="container mx-auto px-4 pt-8">
          <div className="container flex justify-between">
              <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">
                  Todo
              </h1>
              <button>
                  <IconMoon />
              </button>
          </div>
      </header>
  );
}

export default Header