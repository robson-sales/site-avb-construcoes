import { useEffect } from 'react';
import casa from '../../assets/images/casa01.jpg';

import './style.css';

export default function QuemSomos() {
  useEffect(() => {
    document.title = 'AVB Construções | Quem Somos';
  }, []);

  return (
    <>
      <div className="qs-container">
        <div className="qs-img">
          <img src={casa} alt="Casa construída pela AVB Construções" />
        </div>
        <div className="qs-txt">
          <h2>Nossa história</h2>
          <h4>Construindo sonhos, realizando histórias</h4>
          <p>
            A AVB Construções é uma empresa com 12 anos de experiência no
            mercado da construção civil. Durante esse tempo, entregamos centenas
            de casas e apartamentos com projetos modernos, acabamento de
            qualidade e preços acessíveis. Nossa equipe é formada por
            profissionais altamente qualificados e comprometidos em garantir a
            satisfação dos nossos clientes.
          </p>

          <p>
            Temos empreendimentos em várias cidades de São Paulo, incluindo
            Santana de Parnaíba, Osasco, Alphaville e, mais recentemente, em
            Mairinque. Desde o início do projeto até a entrega das chaves,
            trabalhamos de forma incansável para oferecer um serviço de
            excelência, priorizando a transparência, a qualidade e a segurança
            em todas as etapas do processo.
          </p>

          <p>
            Acreditamos que a construção de um imóvel é muito mais do que
            simplesmente erguer paredes. Por isso, estamos comprometidos em
            construir sonhos e torná-los realidade para nossos clientes. Se você
            está procurando uma empresa séria, comprometida e experiente para
            realizar o seu sonho da casa própria, a AVB Construções é a escolha
            certa. Conte conosco para fazer parte da sua história.
          </p>
        </div>
      </div>
    </>
  );
}
