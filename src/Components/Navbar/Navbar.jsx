const Navbar = () => {
  return (
    <nav className='flex justify-between items-center relative h-[80px] w-fil py-3 '>
      <h1 className='text-blue-500 text-2xl font-bold uppercase '>
        Nebuale-soft
      </h1>
      <div className='flex gap-10 justify-center items-center'>
        <button className='btn text-xl hover:drop-shadow-2xl'>
          Request a Quote
        </button>
        <div>
          <input type='checkbox' id='checkbox' />
          <label for='checkbox' class='toggle'>
            <div className='bars' id='bar1'></div>
            <div className='bars' id='bar2'></div>
            <div className='bars' id='bar3'></div>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
