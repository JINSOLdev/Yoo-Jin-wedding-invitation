'use client';

import { useState, useRef } from 'react';

export default function Gallery() {
    const [startX, setStartX] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [draggingIndex, setDraggingIndex] = useState(0);
    const carouselRef = useRef(null);
    const numImages = 5; // 등록된 이미지의 개수

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].pageX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX;
        const diff = x - startX;
        const newIndex = draggingIndex - Math.round(diff / 100);
        const newIndexClamped = Math.min(Math.max(newIndex, 0), numImages - 1); // 새로운 인덱스를 0부터 numImages - 1까지로 제한
        carouselRef.current.style.transform = `translateX(-${newIndexClamped * 100}%)`;
        setDraggingIndex(newIndexClamped);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="carousel-wrapper">
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>갤러리</p>
            <br />
            <br />
            <div className="carousel" ref={carouselRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                <img src={`./picture01.jpg`} />
                <img src={`./picture02.jpg`} />
                <img src={`./picture03.jpg`} />
                <img src={`./picture04.jpg`} />
                <img src={`./picture05.jpg`} />
            </div>
            <div className="divide-line"></div>
        </div>
    );
}
