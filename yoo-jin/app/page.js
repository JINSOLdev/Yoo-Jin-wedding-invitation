import { MainInfo } from "./components/main-info";
import { MainText } from "./components/main-text";
import { Greeting } from "./components/Greeting";
import { Contact } from "./components/Contact";
import { Account } from "./components/Account";
import { Calendar } from "./components/Calendar";
import { Map } from "./components/Map";
import { Transport } from "./components/Transport";
import { Gallery } from "./components/Gallery";
// 프론트 작업을 할때에 기본적인 부분은 시맨틱 요소로 구성하는 습관을 들이는 것이 좋음.
// 그리고 reset.css를 사용하여 기본적인 스타일을 초기화하는 것이 좋음.
// reset.css는 각자 쓰는 부분을 레퍼런스로 갖고 있는데 찾아보던가 아니면 직접 만들어서 사용하는 것이 좋음.(필요하면 요청하면 보내드릴 수 있음.)

// 디렉토링을 할때에 src를 root로 두고 그 안에 components, pages, styles, utils 등을 두는 것이 좋다고 생각함.(구분이 쉬움)

// 닫는 요소에 대해서 알아보고 <img/>와 같이 children 노드가 필요없을 경우 바로 닫는 요소를 사용하는 것이 가독성에 좋음.
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
      <p className="rights">© 2024-04-06 Yoohwan, Jinsol</p>
    </div>
  );
}
