import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import escritorio1 from '../../assets/images/casa01.jpg';
import escritorio2 from '../../assets/images/casa02.jpg';
import escritorio3 from '../../assets/images/casa03.jpg';

export default function CarrosselContato() {
  const altTxt = 'Realize seu sonho';
  const images = [
    { src: escritorio1, alt: altTxt },
    { src: escritorio2, alt: altTxt },
    { src: escritorio3, alt: altTxt },
  ];

  return (
    <Carousel
      images={images}
      isAutoPlaying={true}
      autoPlayInterval={3000}
      hasThumbnails={false}
      hasSizeButton={false}
      hasIndexBoard={false}
    />
  );
}
