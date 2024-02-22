import MainInfo from './components/main-info';
import MainText from './components/main-text';
import Greeting from './components/Greeting';
import Contact from './components/Contact';
import Account from './components/Account';
import Calendar from './components/Calendar';
import Map from './components/Map';
import Transport from './components/Transport';
import Gallery from './components/Gallery';
import Notice from './components/Notice';

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function Home() {
    return (
        <div className="container">
            <div className="text">THE WEDDING DAY</div>
            <img src={`/picture02.jpg`} className="picture"></img>
            <MainInfo />
            <MainText />
            <Greeting />
            <Calendar />
            <Map />
            <Transport />
            <Account />
            <Contact />
            <Gallery />
            <br></br>
            <Notice />
            <p className="rights">© 2024-04-06 Yoohwan, Jinsol</p>
        </div>
    );
}
