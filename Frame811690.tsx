import svgPaths from "./svg-p2873ok3ez";

function Frame1() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] h-[4px] left-[13px] rounded-[4px] top-[47px] w-[183px]" />;
}

function Frame2() {
  return <div className="absolute bg-[rgba(255,255,255,0.9)] h-[4px] left-[13px] rounded-[4px] top-[47px] w-[88px]" />;
}

function Frame3() {
  return (
    <div className="absolute left-[95px] size-[20px] top-[39px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame 811693">
          <circle cx="10" cy="10" fill="var(--fill-0, #EBEDF0)" id="Ellipse 158" r="10" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[29px] left-[89px] top-[4px] w-[31px]">
      <div className="absolute bg-[#757575] h-[26px] left-0 rounded-[2px] top-0 w-[31px]">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
      <div className="absolute h-[2px] left-[14px] top-[27px] w-[4px]">
        <div className="absolute inset-[-75%_-90.53%_-106.07%_-90.53%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
            <path d={svgPaths.p63f2e00} fill="var(--fill-0, #757575)" id="Vector 83" stroke="var(--stroke-0, #757575)" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[9px] text-[12.75px] text-nowrap text-white top-[4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1x
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#030e1f] h-[77px] left-0 top-0 w-[210px]">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[17px] leading-[1.5] left-[13px] text-[10px] text-[rgba(255,255,255,0.6)] top-[18px] w-[72px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Playback speed
      </p>
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}