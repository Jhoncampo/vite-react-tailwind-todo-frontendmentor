import React, { useEffect, useState } from 'react'
import IconMoon from './icons/IconMoon';
import IconSun from './icons/IconSun';

const initialStateDarkMode = localStorage.getItem('theme') === 'dark'

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode)

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    },[darkMode ])

  return (
      <header className="container mx-auto px-4 pt-8">
          <div className="container flex justify-between">
              <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">
                  Todo
              </h1>
              <button onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <IconSun /> : <IconMoon />}
              </button>
          </div>
      </header>
  );
}

export default Header