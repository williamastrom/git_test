export default function Frame() {
  return (
    <div className="bg-[#071326] relative size-full">
      <div className="absolute h-[105px] left-0 top-0 w-[218px]">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute h-0 left-[5px] top-[69px] w-[207px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
            <line id="Line 1059" stroke="var(--stroke-0, white)" strokeOpacity="0.15" x2="207" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[22px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[11px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Align speed sync
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[22px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[40px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Start-time sync
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[22px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[75px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Synchronize all cine controls
      </p>
    </div>
  );
}