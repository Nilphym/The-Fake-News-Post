import { Carousel } from 'react-bootstrap';

import jedrzejRatajczak from '../../assets/images/authors/jedrzejRatajczak.jpg';
import justynaGladysz from '../../assets/images/authors/justynaGladysz.jpg';
import personPlaceholder from '../../assets/images/authors/personPlaceholder.jpg';
import styles from './Authors.module.scss';

export const Authors = () => {
  const authors = [
    { src: jedrzejRatajczak, name: 'Jędrzej Ratajczak' },
    { src: justynaGladysz, name: 'Justyna Gładysz' },
    { src: personPlaceholder, name: 'Maciej Opaliński' },
    { src: personPlaceholder, name: 'Dawid Żłobecki' },
    { src: personPlaceholder, name: 'Konrad Trawczyński' },
  ];

  return (
    <div style={{ padding: '4rem 0' }}>
      <h3 className={styles.header}>WANTED</h3>
      <h4 style={{ paddingBottom: '1rem' }} className={styles.header}>
        DEAD OR ALIVE
      </h4>
      <Carousel fade>
        {authors.map(({ src, name }) => (
          <Carousel.Item key={name} interval={5000}>
            <div className={styles['Authors-img-container']}>
              <img
                className={'d-block image ' + styles['Authors-img']}
                src={src}
                alt={name}
              />
            </div>
            <Carousel.Caption>
              <h3 className={styles['Authors-caption']}>{name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
