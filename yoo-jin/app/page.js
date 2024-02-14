import { MainInfo } from './components/main-info';
import { MainText } from './components/main-text';
import { Greeting } from './components/Greeting';
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
            <MainText />
            <Greeting />
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
