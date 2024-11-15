import copoAmarelo from "../../assets/images/copo-amarelo.png"
import copoVermelho from "../../assets/images/copo-vermelho.png"
import copoBranco from "../../assets/images/copo-branco.png"
import mAmarelo from "../../assets/images/mini-amarelo.png"
import mVermelho from "../../assets/images/mini-vermelho.png"
import mBranco from "../../assets/images/mini-branco.png"
import { useState } from "react"
import { SectionHome } from "./style"


export default function Home() {
    let corVerde = "fundo-verde"
    let corVermelha = "fundo-vermelho"
    let corAmarela = "fundo-amarelo"

    const [corFundo, setCorFundo] = useState(corVerde);
    const [imagem, setImagem] = useState(copoAmarelo);

    function clicarAmarelo() {
            setCorFundo(corVerde)
            setImagem(copoAmarelo)
    }

    function clicarVermelho() {
            setCorFundo(corVermelha)
            setImagem(copoVermelho)
            
        }

    function clicarBranco() {
            setCorFundo(corAmarela)
            setImagem(copoBranco)
            
        }
    
    return (
        <SectionHome>
            <div className="principalDaHome">
                <div className="texto-home" >
                    <h1> Mais que Café</h1>
                    <h2>Isso é <span>Starbucks</span></h2>
                    <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                    <button>Saiba Mais</button>
                </div>
                <figure className="copinhos">
                        <img src={mAmarelo}  onClick={clicarAmarelo}  alt="Copo pequeno amarelo com macchiato do Starbucks" />
                        <img src={mVermelho} onClick={clicarVermelho}  alt="Copo pequeno vermelho com macchiato do Starbucks" />
                        <img src={mBranco} onClick={clicarBranco}   alt="Copo pequeno branco com  macchiato do Starbucks" />
                </figure>
          </div>
          <div className={`${corFundo} bolas-cores`} >
                <img src={imagem} alt="Copo grande amarelo com macchiato do Starbucks" />
          </div>
        </SectionHome>
       
    )
}