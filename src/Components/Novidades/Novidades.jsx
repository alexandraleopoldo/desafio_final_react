import cafe from "../../assets/images/cafe-grao.png"
import { FundoNovidades } from "./style"


export default function Novidades() {
    return (
        <FundoNovidades>
           <div className="textos-novidades">
                <h3>CAFÉS ESPECIAIS</h3>
                <h2>Níveis de Torra</h2>
                <p>Os níveis de torra do café são:

                    Torra Clara: realça o sabor original do grão, com notas frutadas e acidez mais alta; é comum em cafés especiais.
   
                    Torra Média: equilibra acidez e amargor, oferecendo um sabor mais encorpado com notas de caramelo e chocolate; é a preferida por muitos consumidores.

                    Torra Escura: proporciona um sabor mais amargo e encorpado, com notas de chocolate amargo e nozes, e acidez bem baixa; comum em cafés intensos.

                    Cada nível altera o sabor, aroma e intensidade da bebida, sendo escolhido conforme a sua preferência.
                </p>
                <button>Saiba Mais</button>
           </div>
           <div className="caixa-imagem-cafe">
                <img src={cafe} alt="" />
           </div>
        </FundoNovidades>
    )
}