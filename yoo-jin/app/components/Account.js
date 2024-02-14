'use client';

import { useState } from 'react';

export function Account() {
    const [isClicked, setIsClicked] = useState(false);
    const [acc_w, setAccW] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);

    const groom_m = '';
    const groom_w = '';
    const bride_m = '';
    const bride_w = '';

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

    const copyInfo = (event) => {
        const buttonId = event.target.id;

        const t = document.createElement('textarea');
        document.body.appendChild(t);

        if (buttonId === 'groom_m') {
            t.value = groom_m;
        } else if (buttonId === 'groom_w') {
            t.value = groom_w;
        } else if (buttonId === 'bride_m') {
            t.value = bride_m;
        } else {
            t.value = bride_w;
        }

        t.select();
        document.execCommand('copy');
        alert('복사되었습니다');
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
                                    {currentAccount === 'acc_m' && (
                                        <div>
                                            <li>신랑측</li>
                                            <div className="divide"></div>
                                            <div className="account-row">
                                                <div className="account-row-column-text">
                                                    <li>(계좌)</li>
                                                    <li>(예금주)</li>
                                                </div>
                                                <button className="btn-copy" onClick={copyInfo} id="groom_m">
                                                    복사하기
                                                </button>
                                            </div>
                                            <div className="padding"></div>
                                            <div className="account-row">
                                                <div className="account-row-column-text">
                                                    <li>(계좌)</li>
                                                    <li>(예금주)</li>
                                                </div>
                                                <button className="btn-copy" onClick={copyInfo} id="bride_m">
                                                    복사하기
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {currentAccount === 'acc_w' && (
                                        <div>
                                            <li>신부측</li>
                                            <div className="divide"></div>
                                            <div className="account-row">
                                                <div className="account-row-column-text">
                                                    <li>(계좌)</li>
                                                    <li>(예금주)</li>
                                                </div>
                                                <button className="btn-copy" onClick={copyInfo} id="groom_w">
                                                    복사하기
                                                </button>
                                            </div>
                                            <div className="padding"></div>
                                            <div className="account-row">
                                                <div className="account-row-column-text">
                                                    <li>(계좌)</li>
                                                    <li>(예금주)</li>
                                                </div>
                                                <button className="btn-copy" onClick={copyInfo} id="bride_w">
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
