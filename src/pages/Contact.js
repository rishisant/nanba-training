import React from "react";

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">難波泰世の連絡先</h2>
                <p className="contact-message">難波泰世の連絡先を載せていきます。連絡してください！</p>
                
                <div className="contact-info">
                    <p><span className="label">Phone:</span> 0120-134-567</p>
                    <p><span className="label">Email:</span> <a href="mailto:namba@sainta.co.jp">namba@sainta.co.jp</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
