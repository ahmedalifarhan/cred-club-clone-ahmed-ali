import React from "react";
import "../styles/_footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq-section">
          {/* FAQ Item 1 */}
          <div className="faq-item">
            <h3 className="faq-question">how can I add my cards on CRED?</h3>
            <p className="faq-answer">
              CRED automatically detects credit cards linked to your account. If
              your cards are not detected, just tap the 'credit cards' icon,
              click 'add a card', fill in the details, and you're good to go.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="faq-item">
            <h3 className="faq-question">
              can I manage all my credit cards on CRED?
            </h3>
            <p className="faq-answer">
              yes. CRED supports cards from major Indian banks like HDFC, ICICI,
              SBI, Axis, Kotak, and AMEX. track spends, monitor EMIs, spot
              hidden charges, and keep an eye on reward points. all in one
              place. you also get timely bill payment reminders for your cards.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
