import svgPaths from "./svg-ny344ghbjo";

function Frame() {
  return (
    <div className="absolute left-[19px] size-[17px] top-[7px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Frame 811631">
          <g id="Rectangle 2048">
            <mask fill="white" id="path-1-inside-1_19_3245">
              <rect height="17" rx="1" width="17" />
            </mask>
            <rect height="17" mask="url(#path-1-inside-1_19_3245)" rx="1" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="3.2" width="17" />
          </g>
          <line id="Line 1037" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="1.6" x1="17" x2="12" y1="8.8" y2="8.8" />
          <line id="Line 1038" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="1.6" x1="6" x2="1" y1="8.8" y2="8.8" />
          <line id="Line 1039" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="1.6" x1="8.2" x2="8.2" y1="6" y2="1" />
          <line id="Line 1040" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="1.6" x1="8.8" x2="8.8" y1="11" y2="16" />
          <g id="Play">
            <path d={svgPaths.p2a2bbf00} fill="var(--fill-0, #0D192D)" id="Vector" />
          </g>
          <path d={svgPaths.p35e24800} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Frame />
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] left-[16px] text-[10px] text-nowrap text-white top-[26px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Align
      </p>
    </div>
  );
}