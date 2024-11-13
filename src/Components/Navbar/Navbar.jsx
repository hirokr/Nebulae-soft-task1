"use client";

import { useEffect, useState } from "react";
import Menu from "../menu/Menu";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {

  }, [isChecked]);
  return (
    <div>
      <nav className='flex justify-between items-center relative h-[80px] w-fil py-3 wide:px-10 '>
        <h1 className='text-white text-[2rem] font-extrabold uppercase '>
          Nebuale-soft
        </h1>
        <div className='flex gap-10 justify-center items-center'>
          <button className='btn text-xl hover:drop-shadow-2xl'>
            Request a Quote
          </button>
          <div className='flex gap-1 justify-center items-center'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              id='checkbox'
            />
            <label htmlFor='checkbox' className={`toggle `}>
              <div className='bars' id='bar1'></div>
              <div className='bars' id='bar2'></div>
              <div className='bars' id='bar3'></div>
            </label>
            <h1 className={` transition delay-150 duration-300 ease-in-out text-2xl uppercase font-bold ${isChecked? "hidden wide:hidden sm:hidden " : "hidden wide:block sm:block "} ml-5`}>Menu</h1>
          </div>
        </div>
      </nav>
      <div className='transition delay-150 duration-300 ease-in-out text-black'>
        {isChecked && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
