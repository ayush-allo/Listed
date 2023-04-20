import React, { useEffect, useState } from 'react'
import Styles from '@/styles/NavBar.module.css'
import {useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

function NavBar(props) {
    const [click, setClick] = useState(false);
    const router = useRouter();
    const { data: session, status } = useSession()
    
    const loading = status === "loading"
    const handleClick = () => {
        setClick(true)
    }
    const handleLogOut = (e) => {
        e.preventDefault();
        signOut();
        router.push('/')
    }
    useEffect(() => {
        if (status != "loading" && !session) {
            router.push('/')
        }
    }, [loading])
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('#details')) {
                return;
            }
            setClick(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
    }, []);
  return (
    <div className={Styles.firstCont}>
                    <div className={Styles.contentTitle}>{props.title}
                    <span className={Styles.menu} onClick={props.showSideBar}><img src="/menu.svg" alt="menu" /></span>
                    </div>
                    <div className={Styles.searchCont}>
                        <div className={Styles.search}><input type="text" placeholder='Search...' /><button><img src="/search.svg" alt="search" /></button></div>
                        <div className={Styles.notification}><img src="/notification.svg" alt="notification" /></div>
                        {session && <div className={Styles.avatar} onClick={handleClick}><img src={session.user.image} alt="avatar" /></div>}
                        {session && click && <div className={Styles.details} id='details'>
                            <div className={Styles.detailsCont}>
                                <img src={session.user.image} alt="avatar" />
                                <div>
                                    <div className={Styles.name}>{session.user.name}</div>
                                    <div className={Styles.email}>{session.user.email}</div>
                                </div>
                            </div>
                            <button onClick={handleLogOut}>Log Out</button>
                        </div>}
                    </div>
                </div>
  )
}

export default NavBar