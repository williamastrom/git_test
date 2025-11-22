import svgPaths from "./svg-flzyj1voli";
import { imgVector } from "./svg-pnitg";
type CurrentProps = {
  className?: string;
  size?: "16" | "24";
};

/**
 * @figmaAssetKey 8a1ecfb06eed4651812cefe7e452f2408758fbbe
 */
function Current({ className, size = "16" }: CurrentProps) {
  if (size === "24") {
    return (
      <div className={className} data-name="Size=24">
        <div className="absolute bottom-[14.58%] left-1/4 right-[16.67%] top-[14.58%]" data-name="Vector">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Size=16">
      <div className="absolute bottom-[12.5%] left-1/4 right-[12.5%] top-[12.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
          <path d={svgPaths.p2cd42200} fill="var(--fill-0, #51C260)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame811669() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#19253a] h-[31px] left-0 top-0 w-[1390px]" />
      <Current className="absolute left-[14px] overflow-clip size-[16px] top-[9px]" />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[80.5px] text-[14px] text-center text-nowrap text-white top-[5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        3/09/2020
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[160px] text-[14px] text-center text-nowrap text-white top-[5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        US
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258.5px] text-[14px] text-center text-nowrap text-white top-[5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        TTE - 12 months
      </p>
    </div>
  );
}