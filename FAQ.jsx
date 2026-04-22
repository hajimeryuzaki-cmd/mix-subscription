/* global React */
function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap-n">
        <div className="eyebrow" style={{justifyContent:"center"}}>07 — Contact</div>
        <h2>まずはお気軽に、<br/>お声がけください。</h2>
        <p>モニター枠には限りがあります。ご興味のある方はお早めに。<br/>Stripeでお申込み済みの方は、そのまま納品までスムーズに進められます。</p>
        <div className="contact-cta">
          <a className="btn btn-primary btn-lg" href="#">Stripeで申し込む →</a>
          <a className="btn btn-outline btn-lg" href="#consult">まず相談する</a>
        </div>
        <div className="contact-alt">
          または{" "}
          <a href="https://x.com/ryuzakihajime" target="_blank" rel="noopener noreferrer">X</a> ・{" "}
          <a href="https://www.instagram.com/ryuzaki_hajime/" target="_blank" rel="noopener noreferrer">Instagram</a> ・{" "}
          <a href="#">Discord</a> ・{" "}
          <a href="#">メール</a> からも。
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const linkStyle = { color: "var(--fg-mute)", textDecoration: "none" };
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <a href="index.html#top" className="footer-logo">
          <img src="assets/mark.png" alt="" />
          <span>Canaria Records</span>
        </a>
        <div className="footer-meta">
          <p style={{ margin: "0 0 4px", fontFamily: "var(--font-en)" }}>
            © 2026 Canaria Records. All rights reserved.
          </p>
          <p style={{ margin: "0 0 4px" }}>
            <a href="https://www.losstime-life.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              losstime-life.com
            </a>
          </p>
          <p style={{ margin: 0 }}>
            <a href="tokushoho.html" style={linkStyle}>特定商取引法に基づく表記</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Contact, Footer });
