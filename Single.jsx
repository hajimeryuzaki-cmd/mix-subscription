/* global React */
function SingleHero() {
  return (
    <section className="hero" id="top">
      <img className="hero-mark" src="assets/mark.png" alt="" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="monitor-tag">One-off Service ・ 単発依頼</div>
        <h1 className="hero-title">
          1曲だけ、しっかり<br/>
          <span className="soft">プロ品質で</span>仕上げる。
        </h1>
        <p className="hero-lede">
          継続契約なしで1曲単位でご利用いただける単発MIXプラン。<br/>
          サブスクと同じ機材・同じエンジニアで、品質はそのままに。
        </p>
        <div className="hero-cta">
          <a href="#single-pricing" className="btn btn-primary btn-lg">プランを見る</a>
          <a href="index.html#pricing" className="btn btn-outline btn-lg">月額サブスクと比較する</a>
        </div>
      </div>
    </section>
  );
}

function SinglePricing() {
  const plans = [
    {
      title: "単発 ・ MIX",
      amount: 7000,
      sub: "ベーシックMIX 1曲",
      items: [
        "音量バランス調整",
        "EQ・コンプによる音作り",
        "空間系エフェクト処理",
        "マスタリング",
        "3トラックまで込み",
      ],
      note: "※ ピッチ・タイミング補正は含まれません",
    },
    {
      title: "単発 ・ ピッチ補正込み",
      amount: 9000,
      tag: "RECOMMENDED",
      featured: true,
      sub: "ベーシックMIX + ピッチ補正 1曲",
      items: [
        "上記MIXプランの全内容",
        "ピッチ・タイミング補正（手作業）",
        "歌い出しから細かなニュアンスまで丁寧に",
        "3トラックまで込み",
      ],
      note: "迷ったらこちら。仕上がりの完成度が一段上がります。",
    },
    {
      title: "単発 ・ フルパッケージ",
      amount: 10500,
      sub: "MIX + ピッチ補正 + ハモリ生成 1曲",
      items: [
        "ピッチ補正込みプランの全内容",
        "ハーモニートラックの生成＆MIX",
        "コーラスワークも含めて完パケ仕上げ",
        "3トラックまで込み（生成ハモリは別カウント外）",
      ],
      note: "ハモリも含めてお任せしたい方向けの全部入り。",
    },
  ];

  return (
    <section className="section" id="single-pricing">
      <div className="wrap">
        <div className="eyebrow">01 — Pricing</div>
        <div className="head">
          <h2>単発依頼 ・ 3プラン</h2>
          <p>必要な範囲だけ、1曲単位でお選びいただけます。</p>
        </div>

        <div className="price-grid">
          {plans.map((p, i) => (
            <div key={i} className={`price ${p.featured ? "price-featured" : ""}`}>
              {p.tag && <span className="price-tag">{p.tag}</span>}
              <div className="price-title">{p.title}</div>
              <div className="price-num">¥{p.amount.toLocaleString()}<span>/曲（税込）</span></div>
              <div className="price-sub">{p.sub}</div>
              <ul className="price-list">{p.items.map((f,j) => <li key={j}>{f}</li>)}</ul>
              <div className="price-note">{p.note}</div>
              <a href="#single-contact" className={`btn ${p.featured ? "btn-primary" : "btn-outline"}`} style={{width:"100%", justifyContent:"center"}}>このプランで依頼する</a>
            </div>
          ))}
        </div>

        {/* 追加料金の補足 */}
        <div style={{marginTop: "var(--s-7)", maxWidth: 720}}>
          <div className="opt-row">
            <div><h4>追加トラック</h4><p>4トラック目以降、1本ごと（main01・main02・ハモリ等は別カウント）</p></div>
            <div className="opt-price">+¥1,000<span>/トラック</span></div>
          </div>
          <div className="opt-row">
            <div><h4>お急ぎ納品（5日以内）</h4><p>通常納期より短縮してお届け</p></div>
            <div className="opt-price">+¥2,000<span>/曲</span></div>
          </div>
        </div>

        {/* トラックカウントの説明 */}
        <div className="notice" style={{marginTop: "var(--s-6)"}}>
          <span className="notice-title">About Track Count</span>
          「1トラック」は別ファイル単位でカウントします。たとえば <strong>main01 / main02 / ハモリ上 / ハモリ下</strong> のように送られた場合、合計4トラックです。
        </div>
      </div>
    </section>
  );
}

function SingleUpgradeNotice() {
  return (
    <section className="section" id="upgrade" style={{background: "var(--paper-soft)"}}>
      <div className="wrap-n">
        <div className="eyebrow">02 — Upgrade Bonus</div>
        <div className="notice">
          <span className="notice-title">First-month Discount</span>
          <strong>単発依頼から30日以内のサブスク移行で、初月¥1,000オフ。</strong><br/>
          まず単発で音の相性を確かめてから、月額プランへスムーズに移行できます。<br/>
          単発依頼時の控えメールをお持ちの方が対象です。
        </div>
        <div style={{marginTop: "var(--s-6)", textAlign: "center"}}>
          <a href="index.html#pricing" className="btn btn-outline">月額サブスクのプランを見る →</a>
        </div>
      </div>
    </section>
  );
}

function SingleContact() {
  return (
    <section className="section contact" id="single-contact">
      <div className="wrap-n">
        <div className="eyebrow" style={{justifyContent:"center"}}>03 — Contact</div>
        <h2>まずはお気軽に、<br/>お声がけください。</h2>
        <p>ご依頼の前にご相談だけでもOKです。<br/>音源の状態や仕上げの方向性について、事前に擦り合わせができます。</p>
        <div className="contact-cta">
          <a className="btn btn-primary btn-lg" href="#">Stripeで申し込む →</a>
          <a className="btn btn-outline btn-lg" href="index.html#consult">まず相談する</a>
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

function Single() {
  return (
    <>
      <SingleHero />
      <hr className="divider" />
      <SinglePricing />
      <SingleUpgradeNotice />
      <hr className="divider" />
      <SingleContact />
    </>
  );
}

Object.assign(window, { Single, SingleHero, SinglePricing, SingleUpgradeNotice, SingleContact });
