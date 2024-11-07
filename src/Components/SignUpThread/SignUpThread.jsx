import styles from './SignUpThread.module.css';

const SignUpThread = () =>{
  return(
    <div className= {styles.container}>
      <h1>Sign Up To Get The Latest Digital Trends</h1>
      <form>
        <input type="email" placeholder='Enter You Email'/>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}


export default SignUpThread