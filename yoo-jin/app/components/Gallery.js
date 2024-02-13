'use client';

import { useEffect, useState } from 'react';

export function Gallery() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const prevButton = document.querySelector('.carousel-wrapper .prev');
        const nextButton = document.querySelector('.carousel-wrapper .next');
        const carousel = document.querySelector('.carousel-wrapper .carousel');

        const handlePrevClick = () => {
            console.log('Previous button clicked');
            if (index === 0) return;
            setIndex((prevIndex) => prevIndex - 1);
            carousel.style.transform = `translateX(-${800 * (index - 1)}px)`; // 이전 버튼 클릭 시 carousel 이동
        };

        const handleNextClick = () => {
            console.log('Next button clicked');
            if (index === 2) return;
            setIndex((prevIndex) => prevIndex + 1);
            carousel.style.transform = `translateX(-${800 * (index + 1)}px)`; // 다음 버튼 클릭 시 carousel 이동
        };

        prevButton.addEventListener('click', handlePrevClick);
        nextButton.addEventListener('click', handleNextClick);

        return () => {
            prevButton.removeEventListener('click', handlePrevClick);
            nextButton.removeEventListener('click', handleNextClick);
        };
    }, [index]);

    return (
        <div className="carousel-wrapper">
          <p>Gallery</p>
            <div className="carousel">
                <img src={`./picture01.jpg`} />
                <img src={`./picture02.jpg`} />
                <img src={`./picture03.jpg`}/>
            </div>
            <button className="prev" type="button">
                prev
            </button>
            <button className="next" type="button">
                next
            </button>
        </div>
    );
}
