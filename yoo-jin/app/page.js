import { Intro } from './components/Intro';
import { DateOne } from './components/DateOne';
import { Lyrics } from './components/Lyrics';
import { GroomBride } from './components/GroomBride';
import { DateLocation } from './components/DateLocation';
import { ThanksTo } from './components/ThanksTo';
import { Contact } from './components/Contact';
import { Account } from './components/Account';
import { DateTwo } from './components/DateTwo';
import { Map } from './components/Map';
import { Transport } from './components/Transport';
import { Gallery } from './components/Gallery';

export default function Home() {
    return (
        <div className="container">
            <div className="text">THE WEDDING DAY</div>
            <img src={`/picture02.jpg`} className="picture"></img>
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
            <Map />
            <hr></hr>
            <Transport />
            <hr></hr>
            <Gallery />
            <p className="rights">© 2024-04-06 Yoohwan, Jinsol</p>
        </div>
    );
}
