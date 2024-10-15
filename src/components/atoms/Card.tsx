import React, { useState, useEffect } from 'react';

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
        <div>
            <div>
                <img src={imageSrc} alt={name} />
            </div>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                {description}
            </div>
        </div>
    );
}
