import svgPaths from "./svg-79am2m4uwh";

export default function LabeledIconButton() {
  return (
    <div className="relative size-full" data-name="Labeled icon button">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-center p-[9px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24">
            <div className="absolute inset-[7.34%_2.34%_24.01%_41.83%]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
                <path d={svgPaths.p2c387200} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[33.33%_37.5%_8.33%_8.33%]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
                <path d={svgPaths.p35ba0100} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Images
          </p>
        </div>
      </div>
    </div>
  );
}