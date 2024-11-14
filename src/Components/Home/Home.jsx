import copoAmarelo from "../../assets/images/copo-amarelo.png"
import { Principal } from "./style"


export default function Home() {
    return (
        <Principal>
            <section className="principalDaHome">
                <div className="texto-home">
                    <h1> Mais que Café</h1>
                    <h2>Isso é <span>Starbucks</span></h2>
                    <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                    <button>Saiba Mais</button>
                </div>
                <div className="copos-cores">
                    
                    <img src={copoAmarelo} alt="" />
                </div>
            </section>
        </Principal>
    )
}