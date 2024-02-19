'use client';

import { useEffect, useState } from 'react';

export default function Gallery() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // 이런식으로 document.querySelector를 사용하면 리액트의 가상돔과 실제 돔이 일치하지 않아서 문제가 생길 수 있음.
        // 제어 컴포넌트와 비제어 컴포넌트를 이해하고 사용하는 것이 중요함.
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
            if (index === 4) return;
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

    // img와 접근성에 대해서 공부하고 접근성을 올려주기 위한 작업은 기본적으로 해야함.
    // next.js의 최신버전을 사용하는데 img 태그를 사용하는 건 next/image를 사용하여 최적화하는 것에 대해서 알아보고 적용하면 좋을 듯.
    return (
        <div className="carousel-wrapper">
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>갤러리</p>
            <br></br>
            <br></br>
            <div className="carousel">
                <img src={`./picture01.jpg`} />
                <img src={`./picture02.jpg`} />
                <img src={`./picture03.jpg`} />
                <img src={`./picture04.jpg`} />
                <img src={`./picture05.jpg`} />
            </div>
            <div className="btn">
                <button className="prev" type="button">
                    이전
                </button>
                <button className="next" type="button">
                    다음
                </button>
            </div>
        </div>
    );
}
