"use client";

import { useEffect } from "react";

export function Gallery() {
  useEffect(() => {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const carousel = document.querySelector(".carousel");

    let index = 0;

    const prevButtonClickHandler = () => {
      if (index === 0) return;
      index -= 1;

      carousel.style.transform = `translate3d(-${500 * index}px, 0, 0)`;
    };

    const nextButtonClickHandler = () => {
      if (index === 2) return;
      index += 1;

      carousel.style.transform = `translate3d(-${500 * index}px, 0, 0)`;
    };

    if (prevButton && nextButton && carousel) {
      prevButton.addEventListener("click", prevButtonClickHandler);
      nextButton.addEventListener("click", nextButtonClickHandler);
    }

    // clean up event listeners
    return () => {
      if (prevButton && nextButton) {
        prevButton.removeEventListener("click", prevButtonClickHandler);
        nextButton.removeEventListener("click", nextButtonClickHandler);
      }
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <img src={`./picture01.jpg`} />
        <img src={`./picture01.jpg`} />
        <img src={`./picture01.jpg`} />
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
