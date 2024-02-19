// br, div, img는 children이 없는 컴포넌트이므로, 닫는 태그가 필요 없음.
// 중복되는 코드가 있는데 이걸 줄여보셈. 지금 아버지 어머니 이 부분이 다 중복된 코드임.
// 크게는 양가 부모님 연락처를 나누고, 그 안에 아버지와 어머니 연락처를 나누는 식으로 나눌 수 있음.
// 연락처 하는 컴포넌트, 그 연락처 두개를 묶어서 양가 부모님으로 스타일링하는 컴포넌트
export default function Contact() {
  return (
    <div className="contact">
      <br />
      <p className="num">연락처</p>
      <br />
      <div className="contact-box">
        <div className="grooms">
          <p>신랑측</p>
          <div className="grooms-contact">
            <div>
              <p>아버지 신희찬</p>
              <div className="buttons parents">
                <div className="contact-1-call">
                  <a href="tel:010-8258-0870">
                    <div className="icon">
                      <img src="/phone.svg" />
                    </div>
                  </a>
                </div>
                <div className="contact-1-msg">
                  <a href="sms:010-8258-0870">
                    <div className="icon">
                      <img src="/envelope.svg" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p>어머니 정수희</p>
              <div className="buttons parents">
                <div className="contact-1-call">
                  <a href="tel:010-9590-2541">
                    <div className="icon">
                      <img src="/phone.svg" />
                    </div>
                  </a>
                </div>
                <div className="contact-1-msg">
                  <a href="sms:010-9590-2541">
                    <div className="icon">
                      <img src="/envelope.svg" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="brides">
          <p>신부측</p>
          <div className="grooms-contact">
            <div>
              <p>아버지 김명섭</p>
              <div className="buttons parents">
                <div className="contact-1-call">
                  <a href="tel:010-4797-2691">
                    <div className="icon">
                      <img src="/phone.svg" />
                    </div>
                  </a>
                </div>
                <div className="contact-1-msg">
                  <a href="sms:010-4797-2691">
                    <div className="icon">
                      {/* svg는 인라인으로 넣는 것이 성능상 좋음. */}
                      <img src="/envelope.svg" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p>어머니 정순애</p>
              <div className="buttons parents">
                <div className="contact-1-call">
                  <a href="tel:010-6243-2693">
                    <div className="icon">
                      <img src="/phone.svg" />
                    </div>
                  </a>
                </div>
                <div className="contact-1-msg">
                  <a href="sms:010-6243-2693">
                    <div className="icon">
                      <img src="/envelope.svg" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <br />
        <div className="divide-line" />
      </div>
    </div>
  );
}
