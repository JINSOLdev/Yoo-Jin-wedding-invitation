import { MainInfo } from './components/main-info';
import { DateOne } from './components/DateOne';
import { Lyrics } from './components/Lyrics';
import { GroomBride } from './components/GroomBride';
import { DateLocation } from './components/DateLocation';
import { ThanksTo } from './components/ThanksTo';
import { Contact } from './components/Contact';
import { Account } from './components/Account';
import { Calendar } from './components/Calendar';
import { Map } from './components/Map';
import { Transport } from './components/Transport';
import { Gallery } from './components/Gallery';

export default function Home() {
    return (
        <div className="container">
            <div className="text">THE WEDDING DAY</div>
            <img src={`/picture02.jpg`} className="picture"></img>
            <MainInfo />
            <Lyrics />
            <GroomBride />
            <DateLocation />
            <ThanksTo />
            <Contact />
            <Account />
            <Calendar />
            <Map />
            <Transport />
            <Gallery />
            <p className="rights">© 2024-04-06 Yoohwan, Jinsol</p>
        </div>
    );
}
