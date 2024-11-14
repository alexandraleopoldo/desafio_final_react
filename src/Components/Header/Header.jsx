import {Link} from "react-router-dom"
import logo from "../../assets/images/logomarca.png"
import { HeaderStyle } from "./style"

export default function Header() {
    return(
        <HeaderStyle>
           <section className="caixaHeader"> 
                <img src={logo} alt="Logo do Starbucks" />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/novidades">Novidades</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        </ul>
                </nav>
            </section>
        </HeaderStyle>
    )
}