import styles from './styles.module.scss'
import IgniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt="Ignite logo" />
            <h1>React Feed</h1>
        </header>
    )
}