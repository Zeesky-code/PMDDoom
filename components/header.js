import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
    return(
        <div className={styles.nav}>
            <h1>PMDDoom</h1>
            <ul className={styles.links}>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Resources</Link>
            </li>
            </ul>

        </div>
    )
}