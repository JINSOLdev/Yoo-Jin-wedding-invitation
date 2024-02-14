"use client";

import { useState } from "react";

export function Calendar() {
  // 여기에서 상태값이 왜 필요한지? 불필요한 상태값은 불필요한 리렌더링과 불필요한 UI 버그를 가져옴.
  const [days, setDays] = useState([
    { name: "Sun", style: "sun" },
    { name: "Mon", style: null },
    { name: "Tue", style: null },
    { name: "Wed", style: null },
    { name: "Thu", style: null },
    { name: "Fri", style: null },
    { name: "Sat", style: null },
  ]);
  const [week1, setWeek1] = useState([
    { date: 31, style: "sun" },
    { date: 1, style: null },
    { date: 2, style: null },
    { date: 3, style: null },
    { date: 4, style: null },
    { date: 5, style: null },
    { date: 6, style: "num6" },
  ]);
  const [week2, setWeek2] = useState([
    { date: 7, style: "sun" },
    { date: 8, style: null },
    { date: 9, style: null },
    { date: 10, style: null },
    { date: 11, style: null },
    { date: 12, style: null },
    { date: 13, style: null },
  ]);
  const [week3, setWeek3] = useState([
    { date: 14, style: "sun" },
    { date: 15, style: null },
    { date: 16, style: null },
    { date: 17, style: null },
    { date: 18, style: null },
    { date: 19, style: null },
    { date: 20, style: null },
  ]);
  const [week4, setWeek4] = useState([
    { date: 21, style: "sun" },
    { date: 22, style: null },
    { date: 23, style: null },
    { date: 24, style: null },
    { date: 25, style: null },
    { date: 26, style: null },
    { date: 27, style: null },
  ]);
  const [week5, setWeek5] = useState([
    { date: 28, style: "sun" },
    { date: 29, style: null },
    { date: 30, style: null },
    { date: null, style: null },
    { date: null, style: null },
    { date: null, style: null },
    { date: null, style: null },
  ]);

  const getDate = () => {
    let count = new Date().getTime();
    // console.log(count + '메롱');
    let dday = new Date("April 6, 2024 0:00:00").getTime();
    // console.log(dday + '히히');
    let gap = dday - count;
    // console.log(gap + '어머나');
    if (gap < 0) {
      return `${Math.abs(
        Math.ceil(gap / (1000 * 60 * 60 * 24))
      )}일 지났습니다.`;
    } else {
      return `${Math.ceil(gap / (1000 * 60 * 60 * 24))}일 남았습니다.`;
    }
  };
  return (
    <div className="calendar">
      <div className="title">
        <p>2024.04.06</p>
        <div className="desc">토요일 오전 11시</div>
      </div>
      <div className="divide-line"></div>

      <div className="day-row">
        {days.map((day, index) => (
          <div key={index} className={day.style}>
            {day.name}
          </div>
        ))}
      </div>

      <div className="date-column">
        <div className="week1">
          {week1.map((week, index) => (
            <div key={index} className={week.style} id={week.id}>
              {week.date}
              {week.date === 6 ? <div id="Dday"></div> : null}
            </div>
          ))}
        </div>

        <div className="week2">
          {week2.map((week, index) => (
            <div key={index} className={week.style}>
              {week.date}
            </div>
          ))}
        </div>

        <div className="week3">
          {week3.map((week, index) => (
            <div key={index} className={week.style}>
              {week.date}
            </div>
          ))}
        </div>

        <div className="week4">
          {week4.map((week, index) => (
            <div key={index} className={week.style}>
              {week.date}
            </div>
          ))}
        </div>

        <div className="week5">
          {week5.map((week, index) => (
            <div key={index} className={week.style}>
              {week.date}
            </div>
          ))}
        </div>
      </div>

      <div className="divide-line"></div>
      <div className="counting">
        유환 <span>♥</span> 진솔의 결혼식이 {getDate()}
      </div>
      <div className="divide-line"></div>
    </div>
  );
}
