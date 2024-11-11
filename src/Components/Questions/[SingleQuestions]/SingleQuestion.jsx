import Image from "next/image";

const SingleQuestion = ({ prop }) => {
  const { order, question, sol, show, handleShow } = prop;
  const index = Number(order);
  console.log(index);
  return (
    <div className='' onClick={() => handleShow(index)}>
      <div className=' flex justify-between items-center'>
        <div className="flex gap-3 text-[1.8rem]">
        <h1 className='text-finding_sec_bold font-bold'>{order}</h1>
        <h2 className={` ${show === index ? "text-finding_sec_bold" : "text-black" } font-bold`}>{question}</h2>
        </div>
        <div>
        {show === index ? (
          <Image className='scale-y-[-1]' src='/SVG/down.svg' height={10} width={20} alt='j' />
        ) : (
          <div >
            <Image src='/SVG/down.svg' height={10} width={20} alt='j' />
          </div>
        )}
        </div>
      </div>
      <div className="text-finding_all_text pl-8 text-[1.2rem] mt-2 wide:mt-6">{show === index && sol}</div>
      <div className="h-[1px] w-full bg-finding_sec_bold my-5"></div>
    </div>
  );
};

export default SingleQuestion;
