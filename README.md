/* global React */
function Profile() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="eyebrow">01 — Engineer</div>
        <div className="profile">
          <aside>
            <div className="profile-photo">
              <img src="assets/ryuzaki-portrait.jpg" alt="龍崎 一" />
            </div>
            <div className="profile-name">龍崎 一</div>
            <div className="profile-name-en">Ryuzaki Hajime ・ Canaria Records</div>
            <div className="profile-tags">
              <span className="tag">Producer</span>
              <span className="tag">Composer</span>
              <span className="tag">Mix Engineer</span>
            </div>
          </aside>

          <div className="profile-body">
            <div className="profile-block">
              <h3>現役のコンポーザー／プロデューサー</h3>
              <p>ボーカル・白井舞とのユニット「Losstime Life」で活動中。ワンマンライブの開催、定期的なフルアルバムリリースなど、現役アーティストとして第一線で音楽を続けています。</p>
            </div>
            <div className="profile-block">
              <h3>ハードウェア ＋ プラグインのハイブリッド</h3>
              <p>アウトボードと最新プラグインを組み合わせ、温かみと解像度を両立したサウンドを仕上げます。商業スタジオと同じ環境・同じ手触りで。</p>
            </div>
            <div className="profile-block">
              <h3>同じ人がずっと担当する安心感</h3>
              <p>毎回違うMIX師に頼んで、サウンドの方向性がバラバラ——というお悩みはもう不要です。</p>
            </div>

            <div className="pull">
              単なる「MIX作業」じゃなくて、<strong>あなたのチャンネル全体の音の世界観を、一緒に育てていく</strong>仕事です。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Profile });
