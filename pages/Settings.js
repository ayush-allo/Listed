import React from 'react'
import Styles from '@/styles/DashBoard.module.css'
import SideBar from '@/components/SideBar'
import NavBar from '@/components/NavBar'

function Setttings() {
  return (
    <div className={Styles.container}>
            <SideBar />
            <div className={Styles.content}>
                <NavBar title="Settings"/>
            </div>
    </div>
  )
}

export default Setttings