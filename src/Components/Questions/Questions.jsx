import SingleQuestion from './[SingleQuestions]/SingleQuestion';
import styles from './Questions.module.css';

const Questions = () =>{
  return(
    <div className= {styles.container}>
      <SingleQuestion prop = {{order:"01", question:"What is the difference between web design and web development", sol:"Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices. Both are essential for creating a successful, user-friendly website.", show:false }}/>
      <SingleQuestion prop = {{order:"02", question:"What is the difference between web design and web development", sol:"Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices. Both are essential for creating a successful, user-friendly website.", show:false }}/>
      <SingleQuestion prop = {{order:"03", question:"What is the difference between web design and web development", sol:"Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices. Both are essential for creating a successful, user-friendly website.", show:false }}/>
      <SingleQuestion prop = {{order:"04", question:"What is the difference between web design and web development", sol:"Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices. Both are essential for creating a successful, user-friendly website.", show:true }}/>
    </div>
  )
}


export default Questions