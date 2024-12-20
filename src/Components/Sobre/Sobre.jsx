import loja from "../../assets/images/loja.png"
import { FundoSobre } from "./style"
import { TextoSobre } from "./style"

export default function Sobre() {
    return (
        <FundoSobre>
          <img src={loja} data-aos="fade-down" alt="Imagem da primeira loja Starbucks" />
          <TextoSobre>
          <h3>PREPARAÇÃO</h3>
           <h2>História</h2>
           <p>O Starbucks foi fundado em 1971, em Seattle, como uma loja de grãos de café de alta qualidade. Em 1982, Howard Schultz entrou para a empresa e, inspirado pelos cafés italianos, transformou o Starbucks em um lugar para socialização, o famoso "terceiro lugar". Ele comprou a empresa em 1987, levando à expansão mundial da marca. Hoje, o Starbucks é uma das maiores redes de café do mundo, conhecida por suas bebidas e ambiente acolhedor.</p>
           <button>SAIBA MAIS</button>
          </TextoSobre>
          
        </FundoSobre>
    )
}

