const Navbar = () => {
  return (
    <nav className='flex justify-between items-center relative h-[80px] w-fil py-3 '>
      <h1 className='text-blue-500 text-2xl font-bold uppercase '>Nebuale-soft</h1>
      <div className='flex gap-10'>
        <button className='btn hover:drop-shadow-lg'>Request a Quote</button>
        <div>menu</div>
      </div>
    </nav>
  );
};

export default Navbar;
