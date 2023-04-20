import React, { useEffect } from 'react'
import Styles from '../styles/SignIn.module.css'
import Image from 'next/image'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

function SignIn(props) {
  const { data: session } = useSession();
  const router = useRouter();
  const handleGoogle = (e) => {
    e.preventDefault()
    signIn()
  }
  useEffect(() => {
    if (session) {
      router.push('/DashBoard')
    }
  })
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <div className={Styles.title}>
          Sign In
        </div>
        <div className={Styles.title_desc}>
          Sign in to your account
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
          <div className={Styles.forgot}>
            <a href="#">Forgot Password?</a>
          </div>
          <div className={Styles.submit}>
            <button>Sign In</button>
          </div>
        </div>
        <span className={Styles.changePage}>Don't have an account?&nbsp;
          <a href="#" onClick={() => props.changeView()}>Register here</a>
        </span>
      </div>
    </div>
  )
}

export default SignIn