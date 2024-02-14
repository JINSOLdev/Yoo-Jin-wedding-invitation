"use client";

import { useState } from "react";
// 일반적으로 export default를 사용하는 것이 좋음.
// export와 export default의 차이점에 대해서 알아보고 사용하는 것이 중요함.
// export default를 사용하면 import할 때 중괄호를 사용하지 않아도 되고 하나의 모듈만 export 되기 때문에 컴포넌트를 사용할 때에는 export default를 사용하는 것이 좋음.
export function Account() {
  const [isClicked, setIsClicked] = useState(false);
  const [acc_w, setAccW] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  // 변하지 않는 값은 initial단계에서 선언해줘도 되지만, 이 곳에 생성하게 되면 리렌더링 될 때마다 계속해서 생성되기 때문에 비효율적임.
  const groom_m = "";
  const groom_w = "";
  const bride_m = "";
  const bride_w = "";

  const handleAccount = (event) => {
    setIsClicked(!isClicked);
    // 이런식으로 하는 것보다 {id} = event.target으로 하는 것이 더 가독성이 좋고 최신문법임.
    const id = event.target.id;
    if (id === "acc_w") {
      setAccW(true);
      setCurrentAccount("acc_w");
    } else {
      setAccW(false);
      setCurrentAccount("acc_m");
    }
  };

  const copyInfo = (event) => {
    const buttonId = event.target.id;

    // 이런식의 식별자는 클린코드에서 지양하는 방식임.
    // 이런식의 식별자를 사용하게 되면 유지보수가 어려워지고 가독성이 떨어지기 때문에 식별자를 사용할 때에는 의미있는 이름을 사용하는 것이 좋음.
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    //if문보다 switch문을 사용하는 것이 더 가독성과 시간복잡도 면에서 좋음.
    if (buttonId === "groom_m") {
      t.value = groom_m;
    } else if (buttonId === "groom_w") {
      t.value = groom_w;
    } else if (buttonId === "bride_m") {
      t.value = bride_m;
    } else {
      t.value = bride_w;
    }

    t.select();
    // 이런식으로 document.execCommand를 사용하는 것은 더이상 권장되지 않음.
    // 어쩔 수 없이 사용할 수 밖에 없는 경우에는 document가 정의되지 않았다는 에러가 발생할 수 있기 때문에 document에 대한 예외처리를 해야함.
    document.execCommand("copy");
    alert("복사되었습니다");
    document.body.removeChild(t);
  };

  const handleConfirm = () => {
    setIsClicked(false); // 모달 숨기기
  };

  return (
    <div className="wrapper">
      {isClicked && (
        <div className="modal-wrap">
          <div className="modal-box">
            <div className="modal-content">
              <div className="modal-context-m">
                <ul>
                  {currentAccount === "acc_m" && (
                    <div>
                      <li>신랑측</li>
                      <div className="divide"></div>
                      <div className="account-row">
                        <div className="account-row-column-text">
                          <li>(계좌)</li>
                          <li>(예금주)</li>
                        </div>
                        <button
                          className="btn-copy"
                          onClick={copyInfo}
                          id="groom_m"
                        >
                          복사하기
                        </button>
                      </div>
                      <div className="padding"></div>
                      <div className="account-row">
                        <div className="account-row-column-text">
                          <li>(계좌)</li>
                          <li>(예금주)</li>
                        </div>
                        <button
                          className="btn-copy"
                          onClick={copyInfo}
                          id="bride_m"
                        >
                          복사하기
                        </button>
                      </div>
                    </div>
                  )}
                  {currentAccount === "acc_w" && (
                    <div>
                      <li>신부측</li>
                      <div className="divide"></div>
                      <div className="account-row">
                        <div className="account-row-column-text">
                          <li>(계좌)</li>
                          <li>(예금주)</li>
                        </div>
                        <button
                          className="btn-copy"
                          onClick={copyInfo}
                          id="groom_w"
                        >
                          복사하기
                        </button>
                      </div>
                      <div className="padding"></div>
                      <div className="account-row">
                        <div className="account-row-column-text">
                          <li>(계좌)</li>
                          <li>(예금주)</li>
                        </div>
                        <button
                          className="btn-copy"
                          onClick={copyInfo}
                          id="bride_w"
                        >
                          복사하기
                        </button>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            </div>
            <div className="modal-button">
              <button className="btn-confirm" onClick={handleConfirm}>
                확인
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="account-info">
        <p>마음 전하실 곳</p>
        <button className="acc-btn1" onClick={handleAccount} id="acc_m">
          신랑측 계좌번호 보기
        </button>
        <button className="acc-btn2" onClick={handleAccount} id="acc_w">
          신부측 계좌번호 보기
        </button>
      </div>
      <div className="divide-line"></div>
    </div>
  );
}
