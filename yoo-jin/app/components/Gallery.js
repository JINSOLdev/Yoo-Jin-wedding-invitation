"use client";

import next from "next";

export function Gallery() {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const carousel = document.querySelector(".carousel");

  let index = 0;

  prevButton.addEventListener("click", () => {
    if (index === 0) return;
    index -= 1;

    carousel.style.transform = `translate3d(-${500 * index}px, 0, 0)`;
  });

  nextButton.addEventListener("click", () => {
    if (index === 2) return;
    index += 1;

    carousel.style.transform = `translate3d(-${500 * index}px, 0, 0)`;
  });

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
