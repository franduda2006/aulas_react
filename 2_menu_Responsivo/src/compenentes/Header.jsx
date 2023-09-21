import { List } from "@phosphor-icons/react"

import styles from "./Header.module.css"

function Header() {
  return (
    <header>
        <div className="mobili">
            <div className={styles.menu_logo}>
                <button>
                  <List size={32} />
                </button>
                <h1>Logo</h1>
            </div>
           <div className={styles.opcoes}>
            <nav>
            <a href="">Inìcio</a>
            <a href="">aplicativo</a>
            <a href="">Componentes</a>
            <a href="">Artigos</a>
            <a href="">Criadores</a>
           </nav>
          </div>
           
        </div>
    </header>
  )
}

export default Header