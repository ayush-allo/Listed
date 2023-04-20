import React from 'react'
import Styles from '../styles/SignIn.module.css'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
function SignUp(props) {

  const handleGoogle = (e) => {
    e.preventDefault();
    signIn();
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <div className={Styles.title}>
          Sign Up
        </div>
        <div className={Styles.title_desc}>
          Sign up to create your account
        </div>
        <div className={Styles.buttons}>
          <div className={Styles.google} onClick={handleGoogle}>
            <Image src="/google.svg" alt="google" width={14} height={14} />
            <span>Sign in With Google</span>
          </div>
          <div className={Styles.apple}>
            <Image src="/apple.svg" alt="apple" width={14} height={14} />
            <span>Sign in With Apple</span>
          </div>
        </div>
        <div className={Styles.form}>
          <div className={Styles.inputCont}>
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className={Styles.inputCont}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className={Styles.submit}>
            <button>Create account</button>
          </div>
        </div>
        <span className={Styles.changePage}>Already have an account?&nbsp;<a href="#" onClick={() => props.changeView()}>Sign In here</a>
        </span>
      </div>
    </div>
  )
}

export default SignUp