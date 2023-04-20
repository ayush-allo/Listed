import React from 'react'
import Styles from '@/styles/DashBoard.module.css'
import SideBar from '@/components/SideBar'
import NavBar from '@/components/NavBar'

function Schedule() {
  return (
    <div className={Styles.container}>
            <SideBar />
            <div className={Styles.content}>
                <NavBar title="Schedules"/>
            </div>
    </div>
  )
}

export default Schedule