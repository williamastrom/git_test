import svgPaths from "./svg-t40sj0amx0";

export default function Chip() {
  return (
    <div className="bg-[rgba(128,128,128,0.2)] relative rounded-[3px] size-full" data-name="chip">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-0 relative size-full">
          <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Baseline 4CH (2)
          </p>
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p354ffc00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}