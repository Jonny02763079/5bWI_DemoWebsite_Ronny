import { useState, useEffect } from 'react';
import styles from './Card.module.css'

type Props = {
    name: string;
    description: string;
    url: string;
};

export default function Card({ name, description, url }: Props) {
    const [imageSrc, setImageSrc] = useState<string>('');

    const loadImg = async () => {
        const res = await fetch(url);
        if (res.ok) {
            setImageSrc(url);
        }
    };

    useEffect(() => {
        loadImg();
    }, [url]);

    return (
        <div className={styles["mainContainer"]}>
            <div className={styles['imageContainer']}>
                <img src={imageSrc} alt={name} />
            </div>
            <div className={styles['nameContainer']}>
                <h1>{name}</h1>
            </div>
            <div className={styles['descriptionContainer']}>
                {description}
            </div>
        </div>
    );
}
