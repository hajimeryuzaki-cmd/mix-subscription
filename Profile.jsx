/* global React */
function PriceCard({ title, amount, features, note, cta, featured, tag }) {
  return (
    <div className={`price ${featured ? "price-featured" : ""}`}>
      {tag && <span className="price-tag">{tag}</span>}
      <div className="price-title">{title}</div>
      <div className="price-num">¥{amount.toLocaleString()}<span>/月（税込）</span></div>
      <div className="price-sub">{features.sub}</div>
      <ul className="price-list">{features.items.map((f,i) => <li key={i}>{f}</li>)}</ul>
      <div className="price-note">{note}</div>
      <a href="#contact" className={`btn ${featured ? "btn-primary" : "btn-outline"}`} style={{width:"100%", justifyContent:"center"}}>{cta}</a>
    </div>
  );
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="eyebrow">03 — Pricing</div>
        <div className="head">
          <h2>月額サブスクリプション</h2>
          <p>モニター期間中の特別価格。正式リリース前の今だけの料金です。</p>
        </div>

        <div className="price-grid">
          <PriceCard
            title="ピッチ補正込みMIX ・ 1曲プラン"
            amount={3000}
            features={{
              sub: "フルコーラス 1曲 / 月",
              items: [
                "音量バランス調整",
                "EQ・コンプによる音作り",
                "空間系エフェクト処理",
                "ピッチ・タイミング補正",
                "マスタリング",
                "1曲あたり5トラックまで込み",
                "機材・収録の相談つき",
              ],
            }}
            note="※ 6トラック目以降は追加料金（+¥1,000/トラック）／コーラス・ハモリ生成は別途オプション"
            cta="このプランで始める"
          />
          <PriceCard
            title="ピッチ補正込みMIX ・ 2曲プラン"
            amount={5000}
            tag="RECOMMENDED"
            featured
            features={{
              sub: "フルコーラス 2曲 / 月",
              items: [
                "1曲プランの全内容 × 2曲",
                "1曲あたり ¥2,500 でさらにお得",
                "コンスタントに投稿する方に",
                "ピッチ・タイミング補正込み",
                "1曲あたり5トラックまで込み",
                "機材・収録の相談つき",
              ],
            }}
            note="※ 6トラック目以降は追加料金（+¥1,000/トラック）／コーラス・ハモリ生成は別途オプション"
            cta="このプランで始める"
          />
        </div>

        {/* 単発ページへの導線 */}
        <div className="single-link-card">
          <div>
            <h4>1曲だけ試したい方へ</h4>
            <p>継続前にまず音質を確認したい、特定の1曲だけ依頼したい方は単発依頼もご利用いただけます。</p>
          </div>
          <a href="single.html" className="btn btn-outline">単発依頼を見る →</a>
        </div>

        {/* 移行割引のお知らせ */}
        <div className="notice" style={{marginTop: "var(--s-6)"}}>
          <span className="notice-title">First-month Discount</span>
          <strong>単発依頼から30日以内のサブスク移行で、初月¥1,000オフ。</strong><br/>
          まずは単発で音の相性を確かめてからサブスクに進めます。
        </div>

        {/* 追加オプション */}
        <div style={{marginTop: "var(--s-9)"}}>
          <div className="head" style={{marginBottom: "var(--s-5)"}}>
            <h2 style={{fontSize:"var(--fs-lg)"}}>追加オプション</h2>
            <p style={{fontSize: "var(--fs-sm)"}}>都度払い、1曲あたりの追加料金です。</p>
          </div>
          <div style={{maxWidth: 720}}>
            <div className="opt-row">
              <div><h4>追加トラック</h4><p>1曲あたり6トラック目以降、1本ごと（main01・main02・ハモリ等は別カウント）</p></div>
              <div className="opt-price">+¥1,000<span>/トラック</span></div>
            </div>
            <div className="opt-row">
              <div><h4>ハモリ生成＆MIX</h4><p>ハーモニートラックの生成とMIXを追加</p></div>
              <div className="opt-price">+¥1,500<span>/曲</span></div>
            </div>
            <div className="opt-row">
              <div><h4>お急ぎ納品（5日以内）</h4><p>通常納期より短縮してお届け</p></div>
              <div className="opt-price">+¥2,000<span>/曲</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Pricing });
