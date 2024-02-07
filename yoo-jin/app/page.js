export default function Home() {
    return (
        <div className="container">
            <div className="text">THE WEDDING DAY</div>
            <img src={``} className="picture"></img>
            <div className="intro">
                신랑,신부 <br></br>
                결혼합니다<br></br>
                </div>
            <div className="date01">날짜와 장소</div>
            <hr></hr>
            <div className="lyrics">노래가사 or 문구</div>
            <p className="groomBride">신랑,신부</p>
            <div className="dateLocation">날짜와 장소</div>
            <hr></hr>
            <div className="thanksTo">인사말</div>
            <hr></hr>
            <div className="contact">연락처
                <div className="phone">전화아이콘</div>
                <div className="message">메시지아이콘</div>
            </div>
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
            <p className="rights">© 2024-04-06 Yoo-hwan, Jinsol</p>
        </div>
    );
}
