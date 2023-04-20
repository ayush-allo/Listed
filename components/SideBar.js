import React from 'react'
import Styles from '@/styles/SideBar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function SideBar(props) {
    return (
        <div className={props.show ? `${Styles.show}` : `${Styles.SideBarCont}`}>
            <div className={Styles.SideBar}>
                <div>
                    <div className={Styles.title}>Board.</div>
                    <ul className={Styles.navlinks}>
                        <li><NavLink href="/DashBoard"><span><img src="/dashboard.svg" alt="DashBoard" /></span>Dashboard</NavLink></li>
                        <li><NavLink href="/Transaction"><span><img src="/transactions1.svg" alt="Transactions" /></span>Transactions</NavLink></li>
                        <li><NavLink href="/Schedule"><span><img src="/schedules.svg" alt="schedules" /></span>Schedules</NavLink></li>
                        <li><NavLink href="/Users"><span><img src="/users.svg" alt="users" /></span>Users</NavLink></li>
                        <li><NavLink href="/Settings"><span><img src="/settings.svg" alt="settings" /></span>Settings</NavLink></li>
                    </ul>
                </div>
                <ul className={Styles.help}>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    let selected = pathname.split('/').pop();
    let active = `/${selected}` === href;

    return (
        <Link style={active ? { fontWeight: 700 } : {}} href={href}>{children}</Link>
    )
}
export default SideBar