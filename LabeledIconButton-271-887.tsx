import svgPaths from "./svg-6i5164pk6g";

function Reset() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Reset">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Reset">
          <path d={svgPaths.p3fe0b00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
          <path d={svgPaths.p3a9c8250} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function LabeledIconButton() {
  return (
    <div className="relative size-full" data-name="Labeled icon button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center p-[6px] relative size-full">
          <Reset />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Reset to default
          </p>
        </div>
      </div>
    </div>
  );
}