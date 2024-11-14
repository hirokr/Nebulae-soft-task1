import Image from "next/image";

const DownloadGuid = () => {
  return (
    <div className='text-finding_all_text text-xl leading-normal pl-16 wide:pl-32 pr-10 h-[80rem] wide:h-[60rem] w-full wide:w-full mt-11 wide:flex flex-row-reverse justify-between items-center delay-300'>
      <div className='h-[30rem] w-[60%] wide:h-[40rem] relative'>
        <Image
          src='/PNG/downloadBook.png'
          alt='h'
          layout='fill'
          
        />
      </div>
      <div>
        <h3 className='text-[#00b9ff] text-xl wide:text-2xl font-bold'>
          DIGITAL TRENDS GUIDE
        </h3>
        <h1 className='text-4xl wide:text-[3.5rem] font-bold '>
          <span className='bg-gradient-to-r from-[#178dfb] to-[#8044e9] inline-block mr-2 text-transparent bg-clip-text'>
            Download
          </span>
          Our <br /> 2024 Guide To Growing Brands Online
        </h1>
        <div className='w-[60%] wide:w-[41.20rem] items-center border-2 p-1 border-blue-400 bg-white mt-10'>
          <form action='#' className='items-center justify-between flex'>
            <input
              className='w-full h-full  pl-2 wide:pl-10 bg-transparent focus:outline-none'
              type='email'
              placeholder='Enter Your Email'
              required
            />
            <button type='submit' className='flex justify-end items-center'>
              <span className='bg-blue-500 h-10 wide:h-[5rem] items-center justify-center flex px-5  text-white font-bold'>
                Download
              </span>
              <span className='bg-blue-400 h-10 w-10 wide:h-[5rem] wide:w-[4rem] flex justify-center items-center'>
                <Image
                  className='fill-white'
                  src='/SVG/down.svg'
                  alt='h'
                  width={20}
                  height={20}
                />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DownloadGuid;
