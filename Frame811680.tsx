import svgPaths from "./svg-47yf6agjmh";

/**
 * @figmaAssetKey 0e3bf57966862e2e0f6fb79091be76eaddd42e0f
 */
function CommonAngleRight({ className }: { className?: string }) {
  return (
    <div className={className} data-name="common/angle-right">
      <div className="absolute inset-0" data-name="spacer">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="spacer"></g>
        </svg>
      </div>
      <div className="absolute inset-[13.84%_20.68%_13.84%_29.91%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
          <path d={svgPaths.pce6cc00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame811680() {
  return (
    <div className="bg-[#18253b] relative size-full">
      <CommonAngleRight className="absolute left-[4px] size-[16px] top-[4px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[3px] top-[103px] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "136.078125", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative text-[12px] text-[rgba(255,255,255,0.9)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5] whitespace-pre">21 images in examination</p>
          </div>
        </div>
      </div>
    </div>
  );
}