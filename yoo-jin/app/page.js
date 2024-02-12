import { Intro } from "./components/Intro";
import { DateOne } from "./components/dateOne";
import { Lyrics } from "./components/Lyrics";
import { GroomBride } from "./components/GroomBride";
import { DateLocation } from "./components/DateLocation";
import { ThanksTo } from "./components/ThanksTo";
import { Contact } from "./components/Contact";
import { Account } from "./components/Account";
import { DateTwo } from "./components/DateTwo";
import { Location } from "./components/Location";
import { Transport } from "./components/Transport";
import { Gallery } from "./components/Gallery";

export default function Home() {
  return (
    <div className="container">
      <div className="text">THE WEDDING DAY</div>
      <img src={`/picture01.jpg`} className="picture"></img>
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
      <Account />
      <hr></hr>
      <DateTwo />
      <hr></hr>
      <Location />
      <hr></hr>
      <Transport />
      <hr></hr>
      <Gallery />
      <p className="rights">© 2024-04-06 Yoohwan, Jinsol</p>
    </div>
  );
}
