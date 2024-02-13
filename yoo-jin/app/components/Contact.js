export function Contact() {
    return (
        <div className="contact">
            <span>연락처</span>
            <div className="contactSections">
                <div className="contactGroom">
                    신랑측
                    <div style={{ backgroundColor: 'aliceblue', marginTop: '60px' }}>
                        <div>아빠</div>
                        <div>엄마</div>
                    </div>
                </div>
                <div className="contactBride">
                    신부측
                    <div style={{ backgroundColor: 'aliceblue', marginTop: '60px' }}>
                        <div>아빠</div>
                        <div>엄마</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
