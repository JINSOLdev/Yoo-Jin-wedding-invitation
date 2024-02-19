"use client";

import { useState } from "react";

// 이렇게 하드코딩하는 것들은 컴포넌트 밖으로 빼는 것이 좋다.
const groom_m = "기업 486-009145-01-084";
const groom_w = "우리 39908019266";
const bride_m = "신한 624-12-222160";
const bride_w = "우리 414-032004-12-001";
export default function Account() {
  const [isClicked, setIsClicked] = useState(false);
  const [acc_w, setAccW] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);

  const handleAccount = (event) => {
    setIsClicked(!isClicked);
    const id = event.target.id;
    if (id === "acc_w") {
      setAccW(true);
      setCurrentAccount("acc_w");
    } else {
      setAccW(false);
      setCurrentAccount("acc_m");
    }
  };

  const copyInfo = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("복사되었습니다.");
      })
      .catch((err) => {
        console.error("복사 실패: ", err);
      });
  };

  const handleConfirm = () => {
    setIsClicked(false);
  };
  // 컴포넌트가 리액트다운 방식으로 작성되어 있지 않음. 재사용성을 고려한 부분이 없다. 중복되는 하드코딩이 많음.
  // 여기도 나눠서 컴포넌트로 만들어서 재사용성을 높이는 것이 좋음.
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
                          <li>아버지 신희찬</li>
                          <li>{groom_m}</li>
                        </div>
                        <button
                          className="btn-copy"
                          onClick={() => copyInfo(groom_m)}
                        >
                          복사하기
                        </button>
                      </div>
                      <div className="padding"></div>
                      <div className="account-row">
                        <div className="account-row-column-text">
                          <li>어머니 정수희</li>
                          <li>{groom_w}</li>
                        </div>
                        <button
                          className="btn-copy"
                          onClick={() => copyInfo(groom_w)}
                        >
                          복사하기
                        </button>
                      </div>
                    </div>
                  )}
                </ul>
                <ul>
                  {currentAccount === "acc_w" && (
                    <div>
                      <li>신부측</li>
                      <div className="divide"></div>
                      <div className="account-row">
                        <div className="account-row-column-text">
                          <li>아버지 김명섭</li>
                          <li>{bride_m}</li>
                        </div>
                        <button
                          className="btn-copy"
                          onClick={() => copyInfo(bride_m)}
                        >
                          복사하기
                        </button>
                      </div>
                      <div className="padding"></div>
                      <div className="account-row">
                        <div className="account-row-column-text">
                          <li>어머니 정순애</li>
                          <li>{bride_w}</li>
                        </div>
                        <button
                          className="btn-copy"
                          onClick={() => copyInfo(bride_w)}
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
        <br />
        <button className="acc-btn1" onClick={handleAccount} id="acc_m">
          신랑측 계좌번호 보기
        </button>
        <button className="acc-btn2" onClick={handleAccount} id="acc_w">
          신부측 계좌번호 보기
        </button>
      </div>
      <div className="divide-line" />
    </div>
  );
}
