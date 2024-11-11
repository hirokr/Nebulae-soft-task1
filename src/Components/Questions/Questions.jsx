"use client";
import { useState } from "react";
import SingleQuestion from "./[SingleQuestions]/SingleQuestion";
import styles from "./Questions.module.css";

const Questions = () => {
  const [show, setShow] = useState(-1);
  const handleShow = (seq) => {
    if (seq === show) {
      setShow(-1);
    } else {
      setShow(seq);
    }
  };
  return (
    <div className='p-10 bg-white flex flex-col justify-center items-center  '>
      <h1 className='text-finding_sec_bold text-2xl font-semibold mb-8'>
        Frequently Asked Question
      </h1>
      <div className='w-full flex flex-col wide:px-[18rem]'>
        <SingleQuestion
          prop={{
            order: "01",
            question:
              "What is the difference between web design and web development?",
            sol: "Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices. Both are essential for creating a successful, user-friendly website.",
            show,
            handleShow,
          }}
        />
        <SingleQuestion
          prop={{
            order: "02",
            question:
              "What is the difference between web design and web development ?",
            sol: "Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices. Both are essential for creating a successful, user-friendly website.",
            show,
            handleShow,
          }}
        />
        <SingleQuestion
          prop={{
            order: "03",
            question:
              "What is the difference between web design and web development ?",
            sol: "Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices. Both are essential for creating a successful, user-friendly website.",
            show,
            handleShow,
          }}
        />
        <SingleQuestion
          prop={{
            order: "04",
            question:
              "What is the difference between web design and web development ?",
            sol: "Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices. Both are essential for creating a successful, user-friendly website.",
            show,
            handleShow,
          }}
        />
      </div>
    </div>
  );
};

export default Questions;
