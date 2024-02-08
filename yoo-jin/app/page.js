import { Intro } from "./components/Intro";
import { DateOne } from "./components/dateOne";
import { Lyrics } from "./components/Lyrics";
import { GroomBride } from "./components/GroomBride";
import { DateLocation } from "./components/DateLocation";
import { ThanksTo } from "./components/ThanksTo";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="container">
      <div className="text">THE WEDDING DAY</div>
      <img src={``} className="picture"></img>
      <Intro />
      <DateOne />
      <hr></hr>
      <Lyrics />
      <GroomBride />
      <DateLocation />
      <hr></hr>
      <ThanksTo />
      <hr></hr>
      <Contact />
      <hr></hr>
      <div className="account">마음전하실곳</div>
      <hr></hr>
      <div className="date02">
        날짜<br></br>
        달력<br></br>
        <br></br>
        <div id="calendar">4월</div>
      </div>
      <hr></hr>
      <div className="location">장소(구글지도 장소 표시)</div>
      <hr></hr>
      <div className="transport">교통(주차안내, 지하철, 버스)</div>
      <p className="rights">© 2024-04-06 Yoohwan, Jinsol</p>
    </div>
  );
}
