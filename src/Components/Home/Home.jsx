import copoAmarelo from "../../assets/images/copo-amarelo.png"
import { Principal } from "./style"
import mAmarelo from "../../assets/images/mini-amarelo.png"
import mVermelho from "../../assets/images/mini-vermelho.png"
import mBranco from "../../assets/images/mini-branco.png"
import { useState } from "react"


export default function Home() {
    return (
        <Principal>
            <section className="principalDaHome">
                <div className="texto-home">
                    <h1> Mais que Café</h1>
                    <h2>Isso é <span>Starbucks</span></h2>
                    <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                    <button>Saiba Mais</button>
                    <figure className="copinhos">
                        <img src={mAmarelo} alt="Copo pequeno amarelo com macchiato do Starbucks" />
                        <img src={mVermelho} alt="Copo pequeno vermelho com macchiato do Starbucks" />
                        <img src={mBranco} alt="Copo pequeno branco com  macchiato do Starbucks" />
                    </figure>
                </div>
            </section>
            <section className="bolas-cores">
                <img src={copoAmarelo} alt="Copo grande amarelo com macchiato do Starbucks" />

            </section>
        </Principal>
    )
}