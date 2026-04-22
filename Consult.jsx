/* global React */
function Consult() {
  const items = [
    { n: "a", t: "マイク・機材の選定", d: "予算とジャンルから、失敗しない組合せを一緒に。" },
    { n: "b", t: "オーディオI/F・DAW設定", d: "ゲイン、サンプルレート、モニタリング。基本から丁寧に。" },
    { n: "c", t: "収録時のコツ", d: "立ち位置、ポップ対策、テイク選び。MIX前の録り音を底上げ。" },
    { n: "d", t: "お部屋の音環境", d: "吸音、デッド化、反射の考え方を、写真ベースで。" },
  ];
  return (
    <section className="section" id="consult" style={{background: "var(--paper-soft)"}}>
      <div className="wrap-n">
        <div className="eyebrow">02 — Consultation</div>
        <div className="head">
          <h2>
            MIXだけじゃなくて、<br />
            機材や収録のこと、<br />
            なんでも聞いてください。
          </h2>
          <p>「このマイクで大丈夫？」「部屋鳴りが気になる」——そんな疑問こそ、仕上がりを左右します。サブスク加入中の方は、相談を追加料金なしでおつけしています。</p>
        </div>

        <div className="consult-grid">
          {items.map((it) => (
            <div className="consult-item" key={it.n}>
              <div className="consult-num">{it.n.toUpperCase()}</div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>

        <div className="consult-how">
          <span><strong>相談方法</strong>X（旧Twitter）DM ・ Discord ・ メール</span>
          <span><strong>形式</strong>テキストでも通話でも</span>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Consult });
