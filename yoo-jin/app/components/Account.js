'use client';

import { useState } from 'react';

export default function Account() {
    const [isClicked, setIsClicked] = useState(false);
    const [acc_w, setAccW] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);
    const groom_m = '농협 123-456789-12-345';
    const groom_w = '농협 987-654321-98-765';
    const bride_m = '우리 123-456789-12-345';
    const bride_w = '우리 987-654321-98-765';

    const handleAccount = (event) => {
        setIsClicked(!isClicked);
        const id = event.target.id;
        if (id === 'acc_w') {
            setAccW(true);
            setCurrentAccount('acc_w');
        } else {
            setAccW(false);
            setCurrentAccount('acc_m');
        }
    };

    const copyInfo = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                alert('복사되었습니다.');
            })
            .catch((err) => {
                console.error('복사 실패: ', err);
            });
    };

    const handleConfirm = () => {
        setIsClicked(false);
    };

    return (
        <div className="wrapper">
            {isClicked && (
                <div className="modal-wrap">
                    <div className="modal-box">
                        <div className="modal-content">
                            <div className="modal-context-m">
                                <ul>
                                    {currentAccount === 'acc_m' && (
                                        <div>
                                            <li>신랑측</li>
                                            <div className="divide"></div>
                                            <div className="account-row">
                                                <div className="account-row-column-text">
                                                    <li>아버지 신희찬</li>
                                                    <li>{groom_m}</li>
                                                </div>
                                                <button className="btn-copy" onClick={() => copyInfo(groom_m)}>
                                                    복사하기
                                                </button>
                                            </div>
                                            <div className="padding"></div>
                                            <div className="account-row">
                                                <div className="account-row-column-text">
                                                    <li>어머니 정수희</li>
                                                    <li>{groom_w}</li>
                                                </div>
                                                <button className="btn-copy" onClick={() => copyInfo(groom_w)}>
                                                    복사하기
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </ul>
                                <ul>
                                    {currentAccount === 'acc_w' && (
                                        <div>
                                            <li>신부측</li>
                                            <div className="divide"></div>
                                            <div className="account-row">
                                                <div className="account-row-column-text">
                                                    <li>아버지 김명섭</li>
                                                    <li>{bride_m}</li>
                                                </div>
                                                <button className="btn-copy" onClick={() => copyInfo(bride_m)}>
                                                    복사하기
                                                </button>
                                            </div>
                                            <div className="padding"></div>
                                            <div className="account-row">
                                                <div className="account-row-column-text">
                                                    <li>어머니 정순애</li>
                                                    <li>{bride_w}</li>
                                                </div>
                                                <button className="btn-copy" onClick={() => copyInfo(bride_w)}>
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
