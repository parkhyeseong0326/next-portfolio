import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
    return(
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <Link href="/" className={styles.nav_logo}>
                    <Image src='/Logo.jpg' width={64} height={64}></Image>
                    <span>portfolio</span>
                </Link>
                <div className={styles.navmenu}>
                    <ul className={styles.navlist}>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about-me'>Projects</Link></li>
                        <li><Link href='/404'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}