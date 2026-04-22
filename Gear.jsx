/* global React */
function Gear() {
  const groups = [
    { label: "DAW", items: [
      { name: "Steinberg Cubase 14" },
      { name: "Fender Studio Pro" },
    ]},
    { label: "Outboard — Hardware", items: [
      { name: "Avalon Design V5", desc: "Mic Pre / DI" },
      { name: "FMR Audio RNC1773E", desc: "Compressor" },
      { name: "Klark Teknik EQP-KT", desc: "Tube EQ" },
    ]},
    { label: "Plugins", items: [
      { name: "Universal Audio UAD-2", desc: "1176 / LA-2A" },
      { name: "SSL Native", desc: "Channel / Bus Comp" },
      { name: "Oeksound Soothe2", desc: "Resonance" },
      { name: "Soundtheory Gullfoss", desc: "Intelligent EQ" },
      { name: "iZotope Ozone 12", desc: "Mastering" },
      { name: "Soundtoys / Valhalla / Weiss", desc: "+ more" },
    ]},
  ];
  return (
    <section className="section" id="gear" style={{background: "var(--paper-soft)"}}>
      <div className="wrap">
        <div className="eyebrow">04 — Studio</div>
        <div className="head">
          <h2>使用機材</h2>
          <p>ハードウェアの温かみと、最新プラグインの解像度。</p>
        </div>
        <div className="gear-grid">
          {groups.map((g, i) => (
            <div key={i}>
              <div className="gear-label">{g.label}</div>
              {g.items.map((it, j) => (
                <div className="gear-item" key={j}>
                  <span className="gear-name">{it.name}</span>
                  {it.desc && <span className="gear-desc">{it.desc}</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Gear });
