import styles from './Header.module.css'

function Header () {
    return(
        <header className={styles.header}>
            <span>GIF Motors</span>
            <nav>
                <a href="">Home</a>
                <a href="">Serviços</a>
                <a href="">Contato</a>
                <a href="">Sobre Nós</a>
            </nav>
        </header>

    )
}

export default Header
