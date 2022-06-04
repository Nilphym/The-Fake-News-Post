import { Carousel } from 'react-bootstrap';
// @ts-ignore
import jedrzejRatajczak from '../../assets/images/authors/jedrzejRatajczak.jpg';
// @ts-ignore
import justynaGladysz from '../../assets/images/authors/justynaGladysz.jpg';
// @ts-ignore
import personPlaceholder from '../../assets/images/authors/personPlaceholder.jpg';

import styles from './Authors.module.scss';

export const Authors = (): JSX.Element => {
    return (
        <>
            <h2>AUTHORS</h2>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <div className={styles['Authors-img']}>
                        <img
                            className='d-block w-50 image'
                            src={jedrzejRatajczak}
                            alt='Jędrzej Ratajczak'
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className={styles['Authors-caption']}>
                            Jędrzej Ratajczak
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div className={styles['Authors-img']}>
                        <img
                            className='d-block w-50 image'
                            src={justynaGladysz}
                            alt='Justyna Gładysz'
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className={styles['Authors-caption']}>
                            Justyna Gładysz
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div className={styles['Authors-img']}>
                        <img
                            className='d-block w-50 image'
                            src={personPlaceholder}
                            alt='Maciej Opaliński'
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className={styles['Authors-caption']}>
                            Maciej Opaliński
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div className={styles['Authors-img']}>
                        <img
                            className='d-block w-50 image'
                            src={personPlaceholder}
                            alt='Dawid Żłobecki'
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className={styles['Authors-caption']}>
                            Dawid Żłobecki
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div className={styles['Authors-img']}>
                        <img
                            className='d-block w-50 image'
                            src={personPlaceholder}
                            alt='Konrad Trawczyński'
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className={styles['Authors-caption']}>
                            Konrad Trawczyński
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};
