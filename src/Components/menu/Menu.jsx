const Menu = () => {
  return (
    <div className='absolute h-[35rem] wide:h-[45rem] w-full right-0 bg-gradient-to-tr from-[#5c0477] to-[#2559af]
    flex flex-col justify-center items-center gap-10'>
      <ul className="text-white text-2xl font-bold">
        <li className="my-5 tracking-wide hover:text-finding_sec_bold transition duration-300">SERVICES </li>
        <li className="my-5 tracking-wide hover:text-finding_sec_bold transition duration-300">CASE STUDIES</li>
        <li className="my-5 tracking-wide hover:text-finding_sec_bold transition duration-300">WORK BY INDUSTRY</li>
        <li className="my-5 tracking-wide hover:text-finding_sec_bold transition duration-300">DIGITAL TRENDS</li>
        <li className="my-5 tracking-wide hover:text-finding_sec_bold transition duration-300">ABOUT</li>
        <li className="my-5 tracking-wide hover:text-finding_sec_bold transition duration-300">CONTACT</li>
      </ul>
      <button className="button relative overflow-hidden px-8 py-4 wide:px-12 wide:py-8 border-none font-bold tracking-widest uppercase text-[#2f3f83] bg-white transition-all duration-1000 text-[15px] wide: text-xl wide:mt-4 hover:text-white"> Request a Quote</button>
    </div>
  );
};

export default Menu;
