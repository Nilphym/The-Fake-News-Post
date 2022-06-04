import { Carousel } from 'react-bootstrap';
import jedrzejRatajczak from '../../assets/images/authors/jedrzejRatajczak.jpg';
import justynaGladysz from '../../assets/images/authors/justynaGladysz.jpg';
import personPlaceholder from '../../assets/images/authors/personPlaceholder.jpg';

import styles from './Authors.module.scss';

export const Authors = (): JSX.Element => {
  return (
    <div style={{ padding: '4rem 0' }}>
      <h3 className={styles.header}>WANTED</h3>
      <h4 style={{ paddingBottom: '1rem' }} className={styles.header}>
        DEAD OR ALIVE
      </h4>
      <Carousel fade>
        <Carousel.Item interval={5000}>
          <div className={styles['Authors-img-container']}>
            <img
              className={'d-block image ' + styles['Authors-img']}
              src={jedrzejRatajczak}
              alt='Jędrzej Ratajczak'
            />
          </div>
          <Carousel.Caption>
            <h3 className={styles['Authors-caption']}>Jędrzej Ratajczak</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className={styles['Authors-img-container']}>
            <img
              className={'d-block image ' + styles['Authors-img']}
              src={justynaGladysz}
              alt='Justyna Gładysz'
            />
          </div>
          <Carousel.Caption>
            <h3 className={styles['Authors-caption']}>Justyna Gładysz</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className={styles['Authors-img-container']}>
            <img
              className={'d-block image ' + styles['Authors-img']}
              src={personPlaceholder}
              alt='Maciej Opaliński'
            />
          </div>
          <Carousel.Caption>
            <h3 className={styles['Authors-caption']}>Maciej Opaliński</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className={styles['Authors-img-container']}>
            <img
              className={'d-block image ' + styles['Authors-img']}
              src={personPlaceholder}
              alt='Dawid Żłobecki'
            />
          </div>
          <Carousel.Caption>
            <h3 className={styles['Authors-caption']}>Dawid Żłobecki</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <div className={styles['Authors-img-container']}>
            <img
              className={'d-block image ' + styles['Authors-img']}
              src={personPlaceholder}
              alt='Konrad Trawczyński'
            />
          </div>
          <Carousel.Caption>
            <h3 className={styles['Authors-caption']}>Konrad Trawczyński</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
