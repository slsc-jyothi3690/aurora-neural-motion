const labels = [
  { t: "LLM", c: "top-[8%] left-[12%]", d: "0s" },
  { t: "TEST", c: "top-[18%] right-[4%]", d: "1.2s" },
  { t: "TRACE", c: "bottom-[16%] left-[2%]", d: "2.4s" },
  { t: "AUTOMATE", c: "bottom-[6%] right-[12%]", d: "3.6s" },
];

export function AICore() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[500px]" aria-hidden>
      {[0, 2, 4].map((d) => (
        <span key={d} className="ripple h-[60%] w-[60%]" style={{ ["--delay" as string]: `${d}s` }} />
      ))}
      <div className="orbit spin-slow h-[96%] w-[96%] border-dashed"><span className="orbit-dot" /><span className="orbit-dot !top-1/2 !-left-1 !ml-0" style={{ background: "var(--violet)" }} /></div>
      <div className="absolute inset-0" style={{ transform: "rotateX(62deg) rotateZ(-20deg)" }}>
        <div className="orbit spin-mid h-[82%] w-[82%] border-violet/40">
          <span className="orbit-dot" style={{ background: "var(--violet)", boxShadow: "0 0 14px var(--violet)" }} />
          <span className="orbit-dot !top-auto -bottom-1" />
        </div>
      </div>
      <div className="orbit spin-fast h-[62%] w-[62%] border-cyan/30"><span className="orbit-dot" /><span className="orbit-dot !top-auto -bottom-1" style={{ background: "var(--sky)" }} /></div>
      <div className="absolute inset-0 m-auto h-[36%] w-[36%] rounded-full core-orb" />
      <div className="absolute inset-0 m-auto h-[46%] w-[46%] rounded-full border border-violet/30 spin-mid" style={{ borderStyle: "dotted" }} />

      {labels.map((l) => (
        <span key={l.t} className={`float-y absolute ${l.c} glass rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-cyan sm:text-xs`} style={{ ["--delay" as string]: l.d }}>
          {l.t}
        </span>
      ))}
      <div className="float-y glass absolute -left-2 top-1/2 hidden px-3 py-2 font-mono text-[10px] text-muted-foreground sm:block" style={{ ["--delay" as string]: "1.8s" }}>
        <span className="text-violet">prompt</span> → response
      </div>
      <div className="float-y glass absolute -right-2 top-[42%] hidden px-3 py-2 font-mono text-[10px] text-muted-foreground sm:block" style={{ ["--delay" as string]: "3s" }}>
        validate <span className="text-cyan">✓</span>
      </div>
    </div>
  );
}
