const HomeCard = () => {
  return (
    <section className='flex absolute w-full -z-0 top-0 h-[46rem] bg-[#20004a] justify-start items-center pl-20'>
      <div>
        <p className="mb-2 font-bold text-[1.4rem]">Premium Web Design Agency</p>
        <h1 className="mb-2 font-extrabold text-[3.2rem]">We Grow Brands Online</h1>
        <p className="mb-2 font-bold text-[1.4rem]">Custom Websites, Branding & Digital Marketing</p>

        <button className="button relative overflow-hidden px-8 py-4 border-none font-bold tracking-widest uppercase text-[#2f3f83] bg-white transition-all duration-1000 text-[15px] hover:text-white"> Request a Quote</button>
      </div>
    </section>
  );
};

export default HomeCard;
