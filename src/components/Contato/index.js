import { useEffect } from 'react';
import { BsWhatsapp, BsMailbox, BsInstagram } from 'react-icons/bs';
import 'react-gallery-carousel/dist/index.css';
import CarrosselContato from './Carrossel';
import './style.css';

export default function Contato() {
  useEffect(() => {
    document.title = 'AVB Construções | Contato';
  }, []);

  return (
    <>
      <div className="contact-container">
        <div className="contact-img">
          <CarrosselContato />
        </div>
        <div className="contact-txt">
          <h2>Contato</h2>
          <p>
            <strong>
              Realize o sonho de ter sua casa própria com a AVB. <br />
              Estamos ansiosos por seu contato!
            </strong>
          </p>
          <div className="contact-social">
            <p>Nossas redes sociais:</p>
            <a
              href="https://www.instagram.com/avbempreendimentos/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link para nosso Instagram"
            >
              <BsInstagram />
            </a>
          </div>
          <div className="contact-data">
            <div className="contact-item">
              <div className="contact-ico">
                <BsWhatsapp style={{ color: 'green' }} />
              </div>
              <div className="contact-info">
                <a
                  href="https://api.whatsapp.com/send?phone=5511947593065"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link para nosso WhatsApp"
                >
                  (11) 94759-3065
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-ico">
                <BsMailbox />
              </div>
              <div className="contact-info">
                <a href="avbconstrucoes@gmail.com">avbconstrucoes@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
