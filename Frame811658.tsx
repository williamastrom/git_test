export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#030e1f] h-[226px] left-0 top-0 w-[161px]">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      </div>
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal h-[17px] leading-[1.5] left-[19px] text-[10px] text-[rgba(255,255,255,0.6)] top-[10px] w-[72px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Playback speed
      </p>
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] left-[19px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[75px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.5 x
      </p>
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] left-[19px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[105px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.75 x
      </p>
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] left-[19px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[135px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`1x `}</p>
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] left-[19px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[165px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.25 x
      </p>
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] left-[19px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[195px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.5 x
      </p>
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[4px] left-[13px] rounded-[4px] top-[49px] w-[141px]" />
      <div className="absolute bg-[rgba(255,255,255,0.9)] h-[4px] left-[13px] rounded-[4px] top-[49px] w-[71px]" />
      <div className="absolute left-[74px] size-[20px] top-[41px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, #EBEDF0)" id="Ellipse 158" r="10" />
        </svg>
      </div>
    </div>
  );
}