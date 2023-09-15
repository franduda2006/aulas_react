import { List } from "@phosphor-icons/react"

function Header() {
  return (
    <header>
        <div className="mobili">
            <div className="menu_lego">
                <button>
                  <List size={22} />
                </button>
                <h1>Logo</h1>
            </div>
        </div>
    </header>
  )
}

export default Header