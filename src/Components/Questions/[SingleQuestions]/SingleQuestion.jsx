import Image from "next/image";

const SingleQuestion = ({ prop }) => {
  const { order, question, sol, show } = prop;
  return (
    <div className=''>
      <div>
        <h1>{order}</h1>
        <h2>{question}</h2>
        {show ? <Image src='/SVG/down.svg' height={10} width={10} alt='j' /> : <Image src='/SVG/down.svg' height={10} width={10} alt='j' />}
      </div>
      {show && sol }
    </div>
  );
};

export default SingleQuestion;
