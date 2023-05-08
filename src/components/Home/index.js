import { useEffect } from 'react';
import './style.css';

export default function Home() {
  const title = 'AVB Construções | Realize seu sonho da casa própria';
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <div className="container">
        <div className="box-full">
          <div className="box-img-001">
            <div className="home-title">
              <h1>Bem-vindo à AVB Construções</h1>
              <h2>Realizando o sonho da casa própria</h2>
              <p>
                Há mais de uma década, nossa empresa tem se destacado no mercado
                da construção civil, entregando imóveis com qualidade, segurança
                e comprometimento.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="box-white">
          <div className="box-w-img">
            <div className="box-img-002"></div>
          </div>
          <div className="box-w-text">
            <h1>Saia já do aluguel</h1>
            <h2>Use seu FGTS</h2>
            <p>
              Chegou a sua oportunidade de realizar o sonho da casa própria!
              Conheça as nossas charmosas casas prontas para morar. Com
              acabamento de alta qualidade, ambientes amplos e bem iluminados,
              nossas casas oferecem todo o conforto e praticidade que sua
              família precisa. Use seu FGTS e parcele a entrada para tornar a
              compra ainda mais acessível. Não perca mais tempo pagando aluguel
              e invista no seu futuro! Venha conhecer nossas casas e comece uma
              nova fase da sua vida!
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box-white">
          <div className="box-w-img">
            <div className="box-img-003"></div>
          </div>
          <div className="box-w-text">
            <h1>Casas prontas para morar</h1>
            <h2>Conforto para sua familia</h2>
            <ul>
              <li>Sala</li>
              <li>Cozinha</li>
              <li>Banheiro</li>
              <li>2 quartos</li>
              <li>1 ou 2 vagas de garagem</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
