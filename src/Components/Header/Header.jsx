import {Link} from "react-router-dom"

export default function Header() {
    return(
        <header>
            <img src="" alt="Logo da L`Oreal" />
            <nav>
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>Novidades</Link>
                    </li>
                    <li>
                        <Link>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}