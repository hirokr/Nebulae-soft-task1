const HomeCard = () => {
  return (
    <section className='flex absolute w-full -z-0 top-0 h-[46rem] bg-[#20004a] justify-start items-center pl-20'>
      <div className="wide:pl-20">
        <p className="mb-2 font-bold text-[1.4rem] wide:text-3xl">Premium Web Design Agency</p>
        <div className="wide:w-[56rem]">
        <h1 className="mb-2 font-extrabold text-[3.2rem] wide:text-8xl">We Grow Brands Online</h1>
        </div>
        <p className="mb-2 font-bold text-[1.4rem] wide:leading-relaxed">Custom Websites, Branding & Digital Marketing</p>

        <button className="button relative overflow-hidden px-8 py-4 wide:px-12 wide:py-8 border-none font-bold tracking-widest uppercase text-[#2f3f83] bg-white transition-all duration-1000 text-[15px] wide: text-xl wide:mt-4 hover:text-white"> Request a Quote</button>
      </div>
    </section>
  );
};

export default HomeCard;
