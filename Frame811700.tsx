export default function Frame() {
  return (
    <div className="bg-[#071326] relative size-full">
      <div className="absolute h-0 left-[5px] top-[37px] w-[236px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
            <line id="Line 1059" stroke="var(--stroke-0, white)" strokeOpacity="0.15" x2="236" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[37px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[63px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Align speed sync
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[18px] text-[10px] text-[rgba(255,255,255,0.6)] text-nowrap top-[41px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Global synchronization
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[37px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[92px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Start-time sync
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[37px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[8px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Synchronize all cine controls
      </p>
    </div>
  );
}