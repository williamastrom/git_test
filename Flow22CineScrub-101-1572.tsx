import svgPaths from "./svg-u835eskzak";
import imgUsImageParasternalLongAxisViewNormal from "figma:asset/d3c5a4d9e43d55e490a5b41db866d5ae84e208a2.png";
import imgCineloopplax1 from "figma:asset/99b8c1b1d2831be6ccbb579897d08e4b408f348f.png";
import imgCineloopplax80Hr1 from "figma:asset/d2066f78cda1f736f3774424edc7ca94247d6f4a.png";
import { imgVector, img, img1, img2, img3, img4, img5, img6, img7, img8 } from "./svg-7ffqd";

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
type FastShortTestProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

/**
 * @figmaAssetKey 21cedfa9816c06712f9f7583cb211e8427b8467a
 */
function FastShortTest({ className, property1 = "Default" }: FastShortTestProps) {
  if (property1 === "Variant2") {
    return (
      <div className={className} data-name="Property 1=Variant2">
        <div className="absolute bg-[rgba(255,255,255,0.6)] h-[3px] left-0 top-0 w-[483px]" />
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=Default">
      <div className="absolute bg-[rgba(255,255,255,0.6)] h-[3px] left-0 top-0 w-px" />
    </div>
  );
}
type ChipProps = {
  className?: string;
  showDelete?: boolean;
  text?: string;
  size?: "small" | "medium";
  color?: "default" | "blue" | "green" | "yellow" | "orange" | "red" | "cyan" | "purple";
  bold?: "no" | "yes";
  hover?: "no" | "yes";
};

/**
 * @figmaAssetKey 20118d20d5659820c046da6dff5493644bef5772
 */
function Chip({ className, showDelete = true, text = "Text", size = "small", color = "default", bold = "no", hover = "no" }: ChipProps) {
  if (size === "medium" && color === "default" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=default, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "default" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=default, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "default" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=default, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "default" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=default, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "default" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=default, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "default" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=default, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "default" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=default, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "blue" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=blue, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#74a4e3] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img2} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "blue" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=blue, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#74a4e3] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img2} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "blue" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=blue, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "blue" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=blue, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "blue" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=blue, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#74a4e3] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img2} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "blue" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=blue, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#74a4e3] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img2} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "blue" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=blue, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "blue" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=blue, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "green" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=green, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#90e19b] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img3} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "green" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=green, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#90e19b] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img3} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "green" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=green, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "green" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=green, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "green" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=green, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#90e19b] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img3} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "green" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=green, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#90e19b] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img3} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "green" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=green, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "green" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=green, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "yellow" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=yellow, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ffc738] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img4} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "yellow" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=yellow, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ffc738] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img4} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "yellow" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=yellow, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "yellow" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=yellow, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "yellow" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=yellow, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ffc738] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img4} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "yellow" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=yellow, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ffc738] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img4} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "yellow" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=yellow, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "yellow" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=yellow, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "orange" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=orange, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff9558] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img5} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "orange" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=orange, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff9558] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img5} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "orange" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=orange, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "orange" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=orange, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "orange" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=orange, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff9558] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img5} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "orange" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=orange, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff9558] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img5} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "orange" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=orange, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "orange" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=orange, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "red" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=red, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f82512] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img6} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "red" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=red, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f82512] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img6} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "red" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=red, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "red" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=red, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "red" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=red, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f82512] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img6} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "red" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=red, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f82512] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img6} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "red" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=red, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "red" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=red, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "cyan" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=cyan, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2fbcc6] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img7} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "cyan" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=cyan, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2fbcc6] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img7} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "cyan" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=cyan, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "cyan" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=cyan, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "cyan" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=cyan, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2fbcc6] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img7} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "cyan" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=cyan, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2fbcc6] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img7} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "cyan" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=cyan, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "cyan" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=cyan, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "purple" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=purple, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#bb5ad8] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img8} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "purple" && bold === "no" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=purple, bold=no, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#bb5ad8] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img8} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "purple" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=small, color=purple, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "purple" && bold === "yes" && hover === "no") {
    return (
      <div className={className} data-name="size=medium, color=purple, bold=yes, hover=no">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "purple" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=purple, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#bb5ad8] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img8} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "purple" && bold === "no" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=purple, bold=no, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#bb5ad8] text-[13px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img8} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "small" && color === "purple" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=small, color=purple, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (size === "medium" && color === "purple" && bold === "yes" && hover === "yes") {
    return (
      <div className={className} data-name="size=medium, color=purple, bold=yes, hover=yes">
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
        {showDelete && (
          <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
            <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={className} data-name="size=small, color=default, bold=no, hover=no">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      {showDelete && (
        <div className="box-border content-stretch flex gap-[10px] items-center opacity-60 overflow-clip pl-[3px] pr-0 py-[3px] relative shrink-0 size-[16px]" data-name="_chip close icon">
          <div className="relative shrink-0 size-[10.56px]" data-name="Vector">
            <img alt="" className="block max-w-none size-full" src={img} />
          </div>
        </div>
      )}
    </div>
  );
}

function Cells() {
  return (
    <div className="absolute h-[153px] left-[-19px] top-[-33px] w-[407px]" data-name="Cells">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 407 153">
        <g id="Cells" opacity="0.4">
          <g id="spacer" opacity="0.4"></g>
          <path d={svgPaths.p24719c00} fill="var(--fill-0, black)" id="Path 12" opacity="0.4" />
          <path d={svgPaths.p20437b00} fill="var(--fill-0, black)" id="Path 13" opacity="0.4" />
          <path d={svgPaths.p11741cf0} fill="var(--fill-0, black)" id="Path 14" opacity="0.4" />
          <path d={svgPaths.p32e97780} fill="var(--fill-0, black)" id="Path 15" opacity="0.4" />
          <path d={svgPaths.p73ae180} fill="var(--fill-0, black)" id="Path 16" opacity="0.4" />
          <path d={svgPaths.p3b72ba00} fill="var(--fill-0, black)" id="Path 17" opacity="0.4" />
          <path d={svgPaths.p1ad5f600} fill="var(--fill-0, black)" id="Path 18" opacity="0.4" />
          <path d={svgPaths.p19096a00} fill="var(--fill-0, black)" id="Path 19" opacity="0.4" />
          <path d={svgPaths.p1f9d0b70} fill="var(--fill-0, black)" id="Path 20" opacity="0.4" />
          <path d={svgPaths.p2c192a00} fill="var(--fill-0, black)" id="Path 21" opacity="0.4" />
          <path d={svgPaths.p10d5f7c0} fill="var(--fill-0, black)" id="Path 22" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[64px] left-[5px] top-[10px] w-[240px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 64">
        <g id="Logo">
          <g id="spacer"></g>
          <g id="base">
            <path d={svgPaths.p3e7d4e00} fill="var(--fill-0, #F7F9FC)" id="Path 1" />
            <path d={svgPaths.p2097db00} fill="var(--fill-0, #F7F9FC)" id="Path 2" />
            <path d={svgPaths.p259abb00} fill="var(--fill-0, #F7F9FC)" id="Path 3" />
            <path d={svgPaths.p1f49d380} fill="var(--fill-0, #F7F9FC)" id="Path 4" />
            <path d={svgPaths.p1f426480} fill="var(--fill-0, #F7F9FC)" id="Path 5" />
            <path d={svgPaths.p79e8c80} fill="var(--fill-0, #F7F9FC)" id="Path 6" />
          </g>
          <g id="accent">
            <path d={svgPaths.p12d72f80} fill="var(--fill-0, #566376)" id="Path 7" />
            <path d={svgPaths.p3a147b00} fill="var(--fill-0, #566376)" id="Path 8" />
            <path d={svgPaths.p27754400} fill="var(--fill-0, #566376)" id="Rectangle 2" />
            <path d={svgPaths.p2a50ac00} fill="var(--fill-0, #566376)" id="Rectangle 3" />
            <path d={svgPaths.p11f3c840} fill="var(--fill-0, #566376)" id="Path 9" />
            <path d={svgPaths.p4c35000} fill="var(--fill-0, #566376)" id="Rectangle 4" />
            <path d={svgPaths.p4f3ea00} fill="var(--fill-0, #566376)" id="Rectangle 5" />
            <path d={svgPaths.p485cc80} fill="var(--fill-0, #566376)" id="Path 10" />
            <path d={svgPaths.p8f01570} fill="var(--fill-0, #566376)" id="Path 11" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Branding() {
  return (
    <div className="absolute h-[112px] left-[4px] overflow-clip top-0 w-[388px]" data-name="Branding">
      <Cells />
      <Logo />
    </div>
  );
}

function PatientData() {
  return (
    <div className="absolute contents left-[calc(50%+42.5px)] top-[calc(50%-456px)] translate-x-[-50%] translate-y-[-50%]" data-name="Patient data">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-275px)] text-[14px] text-black text-nowrap top-[calc(50%-461px)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        8/14/1930
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-149px)] text-[14px] text-black text-nowrap top-[calc(50%-461px)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        90 years
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-23px)] text-[14px] text-black text-nowrap top-[calc(50%-461px)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Female
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+103px)] text-[14px] text-black text-nowrap top-[calc(50%-461px)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        HNI98BI4Z5AR8KP6 (DefaultMrnGroup)
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-275px)] text-[9px] text-[rgba(255,255,255,0.3)] text-nowrap top-[calc(50%-470px)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Born
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-149px)] text-[9px] text-[rgba(255,255,255,0.3)] text-nowrap top-[calc(50%-470px)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Current age
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-23px)] text-[9px] text-[rgba(255,255,255,0.3)] text-nowrap top-[calc(50%-470px)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sex
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+103px)] text-[9px] text-[rgba(255,255,255,0.3)] text-nowrap top-[calc(50%-470px)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Medical record number     `}</p>
      <div className="absolute h-[41px] left-[calc(50%-156.5px)] top-[calc(50%-456px)] translate-x-[-50%] translate-y-[-50%] w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 41">
            <path d="M0.5 0V41" id="Line 3" stroke="var(--stroke-0, white)" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[41px] left-[calc(50%-30.5px)] top-[calc(50%-456px)] translate-x-[-50%] translate-y-[-50%] w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 41">
            <path d="M0.5 0V41" id="Line 3" stroke="var(--stroke-0, white)" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[41px] left-[calc(50%+95.5px)] top-[calc(50%-456px)] translate-x-[-50%] translate-y-[-50%] w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 41">
            <path d="M0.5 0V41" id="Line 3" stroke="var(--stroke-0, white)" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PatientBanner() {
  return (
    <div className="absolute bottom-[89.63%] contents left-[4.38%] right-0 top-[5.18%]" data-name="PatientBanner">
      <div className="absolute h-[56px] left-[84px] right-0 top-[56px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1836 56">
          <path d={svgPaths.p635c680} fill="var(--fill-0, #F0F0F0)" id="Rectangle 8" />
        </svg>
      </div>
      <div className="absolute h-0 left-[84px] right-0 top-[111.5px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1836 1">
            <path d="M0 0.5H1836" id="Line 2" stroke="var(--stroke-0, white)" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[140px] text-[19.5px] text-black text-nowrap top-[calc(50%-469.5px)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Russell, Pauline
      </p>
      <PatientData />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute contents right-[166px] top-[calc(50%-512px)] translate-y-[-50%]" data-name="Search">
      <div className="absolute h-[32px] right-[166px] top-[calc(50%-512px)] translate-y-[-50%] w-[490px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 490 32">
          <path d={svgPaths.p15c3fe80} fill="var(--fill-0, white)" id="Rectangle 19" />
        </svg>
      </div>
      <div className="absolute right-[166px] size-[32px] top-[calc(50%-512px)] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p33e92800} fill="var(--fill-0, #566376)" id="Rectangle 20" />
        </svg>
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] right-[642px] text-[18px] text-[rgba(255,255,255,0.3)] text-nowrap top-[calc(50%-523px)] translate-x-[100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search for patient...
      </p>
    </div>
  );
}

function UserIcon() {
  return (
    <div className="absolute right-[118px] size-[24px] top-[calc(50%-512px)] translate-y-[-50%]" data-name="UserIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="UserIcon">
          <g id="spacer"></g>
          <g id="accent">
            <path d={svgPaths.p94c6f80} fill="var(--fill-0, white)" id="Path 37" />
          </g>
          <g id="base">
            <path d={svgPaths.p5e80380} fill="var(--fill-0, #96BDF1)" id="Path 38" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function UserMenu() {
  return (
    <div className="absolute contents right-[12px] top-[calc(50%-512px)] translate-y-[-50%]" data-name="UserMenu">
      <div className="absolute h-[56px] right-[12px] top-[calc(50%-512px)] translate-y-[-50%] w-[154px]" data-name="Spacer">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Spacer"></g>
        </svg>
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] right-[107px] text-[14px] text-nowrap text-white top-[calc(50%-522px)] translate-x-[100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        John Smith
      </p>
      <UserIcon />
    </div>
  );
}

function Base2() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="base">
          <path d={svgPaths.p1cab7f80} fill="var(--fill-0, #96BDF1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Accent2() {
  return (
    <div className="absolute inset-[29.17%_33.33%]" data-name="accent">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
        <g id="accent">
          <path d="M4 0H0V2H4V0Z" fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
          <path d="M8 4H0V6H8V4Z" fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_2" />
          <path d="M8 8H0V10H8V8Z" fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Accent3() {
  return (
    <div className="absolute inset-[7.34%_2.34%_24.01%_41.83%]" data-name="accent">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
        <g id="accent">
          <path d={svgPaths.p2c387200} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Base3() {
  return (
    <div className="absolute inset-[33.33%_37.5%_8.33%_8.33%]" data-name="base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="base">
          <path d={svgPaths.p35ba0100} fill="var(--fill-0, #FF7B30)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Base4() {
  return (
    <div className="absolute inset-[5.75%_17.82%_29.17%_17.82%]" data-name="base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="base">
          <path d={svgPaths.p181c2400} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Accent4() {
  return (
    <div className="absolute inset-[58.33%_8.33%_8.33%_8.33%]" data-name="accent">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 8">
        <g id="accent">
          <path d={svgPaths.p3eb64100} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UniViewMainToolbar() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[63px] w-[84px]" data-name="UniView main toolbar">
      <div className="relative shrink-0 w-full" data-name="Vertical menu button/select">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center px-[13px] py-[8px] relative w-full">
            <div className="relative shrink-0 size-[24px]" data-name="Icon">
              <div className="absolute inset-0" data-name="spacer">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="spacer"></g>
                </svg>
              </div>
              <div className="absolute bottom-[66.67%] left-[33.33%] right-[33.33%] top-0" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <path d={svgPaths.p171600} fill="var(--fill-0, #96BDF1)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[12.5%_12.5%_8.33%_12.5%]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
                  <path d={svgPaths.p13aeeb00} fill="var(--fill-0, #96BDF1)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Worklists
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Vertical menu button/select">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center px-[13px] py-[8px] relative w-full">
            <div className="relative shrink-0 size-[24px]" data-name="Icon">
              <div className="absolute inset-0" data-name="spacer">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="spacer"></g>
                </svg>
              </div>
              <Base2 />
              <Accent2 />
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Documents
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1d2532] relative shrink-0 w-full" data-name="Vertical menu button/select">
        <div aria-hidden="true" className="absolute border-[#679de4] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center px-[13px] py-[8px] relative w-full">
            <div className="relative shrink-0 size-[24px]" data-name="Icon">
              <div className="absolute inset-0" data-name="spacer">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="spacer"></g>
                </svg>
              </div>
              <Accent3 />
              <Base3 />
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Images
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Vertical menu button/select">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center px-[13px] py-[8px] relative w-full">
            <div className="relative shrink-0 size-[24px]" data-name="Icon">
              <div className="absolute inset-0" data-name="spacer">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="spacer"></g>
                </svg>
              </div>
              <Base4 />
              <Accent4 />
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Upload
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Base5() {
  return (
    <div className="absolute inset-[4.167%]" data-name="base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="base">
          <path d={svgPaths.p191b3b00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
          <path d={svgPaths.p309d3680} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_2" />
          <path d={svgPaths.p32405900} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_3" />
          <path d={svgPaths.p230c6400} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_4" />
          <path d={svgPaths.p35a5f980} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_5" />
          <path d={svgPaths.pa505c00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_6" />
          <path d={svgPaths.pfa44080} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_7" />
          <path d={svgPaths.p19368e00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_8" />
          <path d={svgPaths.p3032ee00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Accent5() {
  return (
    <div className="absolute inset-[41.33%_37.74%_37.7%_41.29%]" data-name="accent">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
        <g id="accent">
          <path d={svgPaths.p2b234d00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comparison() {
  return (
    <div className="absolute contents left-0 top-[326px]" data-name="Comparison">
      <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[326px] w-[55px]" data-name="Comparison">
        <div className="relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-0" data-name="spacer">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="spacer"></g>
            </svg>
          </div>
          <div className="absolute inset-[8.333%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p2cbdb670} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Layout
        </p>
      </div>
    </div>
  );
}

function NextSet() {
  return (
    <div className="absolute h-[47px] left-0 top-[921px] w-[55px]" data-name="Next set">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[5px] text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap top-[24px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Shortcuts
      </p>
      <div className="absolute inset-[12.77%_37.27%_55.32%_35.45%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <path d={svgPaths.p2579dfc0} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame811631() {
  return (
    <div className="absolute left-[19px] size-[17px] top-[7px]">
      <div className="absolute left-0 rounded-[1px] size-[17px] top-0">
        <div aria-hidden="true" className="absolute border-[#9ea3ab] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[1px]" />
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[12px] top-[8px] w-[5px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[5px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1.6px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
                <line id="Line 1037" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="1.6" x2="5" y1="0.8" y2="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-px top-[8px] w-[5px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[5px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1.6px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
                <line id="Line 1037" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="1.6" x2="5" y1="0.8" y2="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[9px] top-px w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "5", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[5px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1.6px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
                <line id="Line 1039" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="1.6" x2="5" y1="0.8" y2="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[8px] top-[11px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "5", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[5px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1.6px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
                <line id="Line 1040" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="1.6" x2="5" y1="0.8" y2="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[2px] overflow-clip size-[15px] top-px" data-name="Play">
        <div className="absolute inset-[14.66%_18.44%_14.69%_18.75%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11">
            <path d={svgPaths.p3681ef00} fill="var(--fill-0, #0D192D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.41%_27.76%_29.03%_35.29%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 8">
          <path d={svgPaths.p302bf900} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame811632() {
  return (
    <div className="absolute h-[47px] left-0 overflow-clip top-[515px] w-[55px]">
      <Frame811631 />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[16px] text-[10px] text-nowrap text-white top-[26px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Align
      </p>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="absolute bg-[#0d192d] h-[968px] left-[1864px] overflow-clip top-[112px] w-[56px]" data-name="Toolbar">
      <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[56px]" data-name="Expand collapse">
        <div className="absolute h-[60px] left-0 top-0 w-[4px]" data-name="Adornment" />
        <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
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
      </div>
      <div className="absolute h-0 left-[10px] top-[44px] w-[36px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="36" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[10px] top-[138px] w-[36px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="36" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-[0.5px] px-[15px] py-[10px] top-[44px] w-[55px]" data-name="Layout 1">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[20.56%_20.5%_20.56%_20.56%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.p173e66e0} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[1.56%_1.56%_76.56%_76.56%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <path d={svgPaths.p33077f0} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[76.56%_76.56%_1.56%_1.56%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <path d={svgPaths.p33077f0} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          tools
        </p>
      </div>
      <div className="absolute bg-[rgba(60,115,187,0.3)] box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-[0.5px] px-[15px] py-[10px] top-[91px] w-[55px]" data-name="Layout 5">
        <div aria-hidden="true" className="absolute border-[#679de4] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[17.38%_37.5%_37.5%_17.38%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path d={svgPaths.p2acaef0} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[20.13%] left-0 right-[81.25%] top-[61.13%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
              <path d={svgPaths.p3cbff000} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[81.25%] left-[61.13%] right-[20.13%] top-0" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
              <path d={svgPaths.p3cbff000} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[18.75%] left-1/2 right-0 top-[68.75%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
              <path d={svgPaths.p3eebc180} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-1/2 right-0 top-[87.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
              <path d={svgPaths.p3eebc180} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[37.5%] left-1/2 right-0 top-1/2" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
              <path d={svgPaths.p38da1700} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Measure
        </p>
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[138px] w-[55px]" data-name="Layout 2">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[4.17%_20.83%_79.17%_62.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
              <path d={svgPaths.p4897d00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[62.5%_79.17%_20.83%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
              <path d={svgPaths.p4897d00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[19.38%_36.05%_36.05%_19.39%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path d={svgPaths.p3230f500} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[64.58%_21.88%_14.58%_55.21%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <path d={svgPaths.p3b900600} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[2.08%] left-[33.33%] right-0 top-[52.08%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
              <path d={svgPaths.p3f603c00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Show all
        </p>
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[185px] w-[55px]" data-name="Layout 6">
        <div className="relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-0" data-name="spacer">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="spacer"></g>
            </svg>
          </div>
          <Base5 />
          <Accent5 />
        </div>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Adjust
        </p>
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[232px] w-[55px]" data-name="Layout 3">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[10.42%_70.83%_64.58%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <path d={svgPaths.pdab900} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[2.08%_8.33%_8.33%_16.67%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
              <path d={svgPaths.p20d85e00} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.3)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Reset view
        </p>
      </div>
      <div className="absolute h-0 left-[10px] top-[279px] w-[36px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="36" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[279px] w-[55px]" data-name="Layout 4">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[7.81%_1.63%_7.88%_1.33%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
              <path d={svgPaths.p29c06f70} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[21.88%_26.98%_33.38%_50.13%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 8">
              <path d={svgPaths.pffa02f0} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Compare
        </p>
      </div>
      <div className="absolute h-0 left-[10px] top-[326px] w-[36px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="36" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Comparison />
      <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[373px] w-[55px]" data-name="Previous set">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[4.17%_33.33%_29.17%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11">
              <path d={svgPaths.p5e60300} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-[47.96%] right-[2.03%] top-[47.42%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
              <path d={svgPaths.p18a8ad80} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.3)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Previous
        </p>
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-[0.5px] px-[15px] py-[10px] top-[420px] w-[55px]" data-name="Next set">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[4.17%_33.33%_29.17%_4.17%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11">
              <path d={svgPaths.p3abd0900} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-[47.95%] right-[2.05%] top-[47.92%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
              <path d={svgPaths.p321cb500} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Next
        </p>
      </div>
      <div className="absolute bg-[rgba(60,115,187,0.3)] box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[468px] w-[55px]" data-name="Next set">
        <div aria-hidden="true" className="absolute border-[#679de4] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute bottom-1/4 left-0 right-[31.25%] top-0" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
              <path d={svgPaths.p1c450d00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[62.51%_15.63%_12.48%_62.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <path d="M0 0V4.002L3.5 2.001L0 0Z" fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-[37.5%] right-0 top-[43.75%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
              <path d={svgPaths.p3d554900} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Cine
        </p>
      </div>
      <NextSet />
      <div className="absolute h-0 left-[10px] top-[468px] w-[36px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="36" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame811632 />
    </div>
  );
}

function ImageIcons() {
  return (
    <div className="content-stretch flex gap-px items-center justify-end relative shrink-0" data-name="Image icons">
      <div className="box-border content-stretch flex items-start p-[6px] relative shrink-0" data-name="Icon container">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="commands-navigation/pause.16x16.dark">
          <div className="absolute bottom-[18.75%] left-[56.25%] right-1/4 top-[18.75%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
              <path d="M3 0H0V10H3V0Z" fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[18.75%] left-1/4 right-[56.25%] top-[18.75%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
              <path d="M3 0H0V10H3V0Z" fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageFooter() {
  return (
    <div className="absolute box-border content-stretch flex h-[25px] items-center justify-between left-[6px] px-[6px] py-px top-[940px] w-[1104px]" data-name="Image footer">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2021-04-15 08:11:03
      </p>
      <ImageIcons />
    </div>
  );
}

function Divider() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[120px] items-start left-[232px] top-0" data-name="Divider">
      <div className="bg-[rgba(255,255,255,0.3)] h-[120px] shrink-0 w-px" data-name="Divider" />
    </div>
  );
}

function ShowHideButton() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-start left-[233px] pb-[2px] pt-[4px] px-[2px] top-0" data-name="Show hide button">
      <div className="box-border content-stretch flex gap-[6px] items-center p-[6px] relative shrink-0" data-name="Icon Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="image-annotate-measure/measurement-list-hide.16x16.dark">
          <div className="absolute inset-[17.38%_37.5%_43.44%_17.38%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
              <path d={svgPaths.p1565b400} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[20.13%] left-0 right-[82.5%] top-[61.13%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
              <path d={svgPaths.p154ee100} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[81.25%] left-[61.13%] right-[20.13%] top-0" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
              <path d={svgPaths.p3cbff000} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[40.75%_27.06%_17.19%_24.25%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
              <path d={svgPaths.p1c2b6700} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-[34.42%] right-0 top-[37.55%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10">
              <path d={svgPaths.p2852700} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultlistLvEf2ChBp() {
  return (
    <div className="absolute h-[120px] left-[838px] rounded-[2px] top-[7px] w-[265px]" data-name="Resultlist LV EF 2CH + BP">
      <div className="absolute bg-[#131f34] h-[120px] left-0 rounded-[2px] top-0 w-[265px]" />
      <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[28px] leading-[1.5] left-px text-nowrap top-[32px] w-[231px] whitespace-pre" data-name="Measurements results">
        <p className="absolute left-[44px] text-[14px] text-[rgba(255,255,255,0.9)] top-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          MV Vmax
        </p>
        <p className="absolute left-[189px] text-[14px] text-[rgba(255,255,255,0.9)] text-right top-[4px] translate-x-[-100%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          3.4
        </p>
        <p className="absolute left-[191px] text-[12px] text-[rgba(255,255,255,0.6)] top-[6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          ms
        </p>
      </div>
      <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[28px] leading-[1.5] left-px text-nowrap top-[4px] w-[231px] whitespace-pre" data-name="Measurements results">
        <p className="absolute left-[16px] text-[14px] text-[rgba(255,255,255,0.9)] top-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          1
        </p>
        <p className="absolute left-[44px] text-[14px] text-[rgba(255,255,255,0.9)] top-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          MV dec slope
        </p>
        <p className="absolute left-[189px] text-[14px] text-[rgba(255,255,255,0.9)] text-right top-[4px] translate-x-[-100%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          14
        </p>
        <p className="absolute left-[191px] text-[12px] text-[rgba(255,255,255,0.6)] top-[6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          m/s
        </p>
      </div>
      <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[28px] leading-[1.5] left-px text-nowrap top-[60px] w-[231px] whitespace-pre" data-name="Measurements results">
        <p className="absolute left-[44px] text-[14px] text-[rgba(255,255,255,0.9)] top-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          MV dec time
        </p>
        <p className="absolute left-[189px] text-[14px] text-[rgba(255,255,255,0.9)] text-right top-[4px] translate-x-[-100%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          3.39
        </p>
        <p className="absolute left-[191px] text-[12px] text-[rgba(255,255,255,0.6)] top-[6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          m/s²
        </p>
      </div>
      <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[28px] leading-[1.5] left-px text-nowrap top-[88px] w-[231px] whitespace-pre" data-name="Measurements results">
        <p className="absolute left-[44px] text-[14px] text-[rgba(255,255,255,0.9)] top-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          MV PHT
        </p>
        <p className="absolute left-[189px] text-[14px] text-[rgba(255,255,255,0.9)] text-right top-[4px] translate-x-[-100%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          3.39
        </p>
        <p className="absolute left-[191px] text-[12px] text-[rgba(255,255,255,0.6)] top-[6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          m/s²
        </p>
      </div>
      <Divider />
      <ShowHideButton />
    </div>
  );
}

function ImageFooter1() {
  return (
    <div className="absolute h-[28px] left-[2px] top-[440px] w-[744px]" data-name="Image footer">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[6px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[8px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2021-04-15 08:11:03
      </p>
    </div>
  );
}

function UsImage() {
  return <div className="absolute h-[454px] left-[2px] top-[2px] w-[551px]" data-name="Us-image" />;
}

function ImageFooter2() {
  return (
    <div className="absolute h-[28px] left-[2px] top-[435.6px] w-[745px]" data-name="Image footer">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[6px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[5.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2021-04-15 08:11:03
      </p>
    </div>
  );
}

function ImageContainer816() {
  return (
    <div className="absolute bg-black bottom-[-98.48%] left-0 right-0 top-[99.92%]" data-name="Image container 816">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <UsImage />
      <ImageFooter2 />
      <p className="[text-shadow:#000000_0.6px_0.6px_0px] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[8px] text-[12.75px] text-[rgba(255,255,255,0.9)] text-nowrap top-[26px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Peak
      </p>
      <p className="[text-shadow:#000000_0.6px_0.6px_0px] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[8px] text-[12.75px] text-[rgba(255,255,255,0.9)] text-nowrap top-[8px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PLAX
      </p>
      <div className="absolute inset-[0.78%_9.17%_7.96%_8.95%]" data-name="Us-image/parasternal long axis view normal">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[98.33%] left-0 max-w-none top-[0.6%] w-full" src={imgUsImageParasternalLongAxisViewNormal} />
        </div>
      </div>
      <div className="absolute bg-black h-[38px] left-[643px] top-[392.6px] w-[35px]" />
    </div>
  );
}

function Frame811644() {
  return (
    <div className="absolute h-[87px] left-[3px] overflow-clip top-[384px] w-[743px]">
      <div className="absolute bg-black h-[38px] left-[640px] top-[9px] w-[35px]" />
    </div>
  );
}

function InformationHide16X16Dark2() {
  return (
    <div className="absolute left-[713px] size-[16px] top-[10px]" data-name="information-hide.16x16.dark 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_101_2157)" id="information-hide.16x16.dark 2">
          <path d={svgPaths.p2830fa00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
          <path d={svgPaths.p31461f00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_2" />
          <path d={svgPaths.pc864800} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_101_2157">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageFooter3() {
  return (
    <div className="absolute bg-black h-[36px] left-[2px] top-[433px] w-[744px]" data-name="Image footer">
      <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[7px] p-[6px] top-[4px]" data-name="Icon button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="commands-navigation/pause.16x16.dark">
          <div className="absolute bottom-[18.75%] left-[56.25%] right-1/4 top-[18.75%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
              <path d="M3 0H0V10H3V0Z" fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[18.75%] left-1/4 right-[56.25%] top-[18.75%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
              <path d="M3 0H0V10H3V0Z" fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[57px] p-[6px] top-[4px] w-[22px]" data-name="Icon button">
        <div className="relative shrink-0 size-[16px]" data-name="common/angle-right">
          <div className="absolute inset-0" data-name="spacer">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="spacer"></g>
            </svg>
          </div>
          <div className="absolute inset-[13.84%_20.68%_13.84%_29.91%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
              <path d={svgPaths.pce6cc00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[35px] p-[6px] top-[4px] w-[22px]" data-name="Icon button">
        <div className="relative shrink-0 size-[16px]" data-name="common/angle-left">
          <div className="absolute inset-0" data-name="spacer">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="spacer"></g>
            </svg>
          </div>
          <div className="absolute inset-[13.84%_29.91%_13.84%_20.68%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
              <path d={svgPaths.p13a4eb80} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <FastShortTest className="absolute bg-[rgba(255,255,255,0.3)] h-[3px] left-[141px] top-[17px] w-[483px]" />
      <div className="absolute bg-[#568bd1] left-[244px] size-[3px] top-[17px]" />
      <div className="absolute bg-[#568bd1] left-[374px] size-[3px] top-[17px]" />
      <div className="absolute bg-[#568bd1] left-[504px] size-[3px] top-[17px]" />
      <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[649px] p-[6px] top-[4px]" data-name="Icon button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Size=16">
          <div className="absolute bottom-[6.25%] left-[12.5%] right-1/2 top-[6.25%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 14">
              <path d={svgPaths.p25b45400} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[56.25%_3.13%_6.25%_56.25%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 6">
              <path d={svgPaths.p39718b0} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[678px] p-[6px] top-[4px]" data-name="Icon button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Size=16">
          <div className="absolute bottom-[14.56%] left-0 right-0 top-[5.94%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 13">
              <path d={svgPaths.p30d84a80} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[707px] p-[6px] top-[4px]" data-name="Icon button" />
      <InformationHide16X16Dark2 />
    </div>
  );
}

function ImageContainer811() {
  return (
    <div className="absolute bg-black bottom-[49.64%] left-0 right-[50.09%] top-0" data-name="Image container 811">
      <div aria-hidden="true" className="absolute border-2 border-[#51c260] border-solid inset-0 pointer-events-none" />
      <ImageFooter1 />
      <ImageContainer816 />
      <div className="absolute h-[424px] left-[78px] top-[11px] w-[592px]" data-name="cineloopplax 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.12%] left-[-0.17%] max-w-none top-[-0.06%] w-[100.17%]" src={imgCineloopplax1} />
        </div>
      </div>
      <Chip showDelete={false} text="PLAX" className="absolute bg-[rgba(128,128,128,0.2)] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center left-[6px] overflow-clip px-[8px] py-0 rounded-[3px] top-[34px]" />
      <Chip showDelete={false} text="Baseline" className="absolute bg-[rgba(128,128,128,0.2)] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center left-[6px] overflow-clip px-[8px] py-0 rounded-[3px] top-[62px]" />
      <Chip showDelete={false} text="HR 88" className="absolute bg-[rgba(128,128,128,0.2)] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center left-[6px] overflow-clip px-[8px] py-0 rounded-[3px] top-[90px]" />
      <Chip showDelete={false} text="2021-04-15 08:11:03" className="absolute bg-[rgba(128,128,128,0.2)] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center left-[6px] overflow-clip px-[8px] py-0 rounded-[3px] top-[6px]" />
      <Frame811644 />
      <ImageFooter3 />
    </div>
  );
}

function ImageFooter4() {
  return (
    <div className="absolute h-[28px] left-0 top-[438px] w-[745px]" data-name="Image footer">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[5.65px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2021-04-15 08:11:03
      </p>
    </div>
  );
}

function UsImage1() {
  return (
    <div className="absolute h-[454px] left-[2.35px] top-[2px] w-[745px]" data-name="Us-image">
      <ImageFooter4 />
      <div className="absolute h-[426px] left-[68px] top-0 w-[610px]" data-name="cineloopplax80HR 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.05%] left-[-0.16%] max-w-none top-[-0.02%] w-[100.16%]" src={imgCineloopplax80Hr1} />
        </div>
      </div>
      <p className="[text-shadow:#000000_0.6px_0.6px_0px] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[5.65px] text-[12.75px] text-[rgba(255,255,255,0.9)] text-nowrap top-[24px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pre-Peak
      </p>
      <p className="[text-shadow:#000000_0.6px_0.6px_0px] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[5.65px] text-[12.75px] text-[rgba(255,255,255,0.9)] text-nowrap top-[6px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PLAX
      </p>
    </div>
  );
}

function UsImage2() {
  return <div className="absolute h-[454px] left-[2px] top-[2px] w-[551px]" data-name="Us-image" />;
}

function ImageIcons1() {
  return (
    <div className="absolute content-stretch flex gap-px items-center justify-end left-[711px] top-0" data-name="Image icons">
      <div className="box-border content-stretch flex items-start p-[6px] relative shrink-0" data-name="Icon container">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="image-cine-navigator/warning-fps.16x16.dark">
          <div className="absolute inset-[31.25%_-0.03%_3.13%_24.97%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector"></g>
            </svg>
          </div>
          <div className="absolute inset-[34.38%_3.1%_6.25%_28.16%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10">
              <path d={svgPaths.p3a703a00} fill="var(--fill-0, #FFC738)" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[32.25%] left-0 right-[32.38%] top-0" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
              <path d={svgPaths.p3b2d3240} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[12.5%] left-[56.25%] right-[31.25%] top-3/4" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
              <path d="M0 2H1H2V0H0V2Z" fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
          <div className="absolute bottom-[31.25%] left-[56.25%] right-[31.25%] top-1/2" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
              <path d="M2 0H0V3H2V0Z" fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageFooter5() {
  return (
    <div className="absolute h-[28px] left-[2.35px] top-[435.6px] w-[745px]" data-name="Image footer">
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[6px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2021-04-15 08:11:03
      </p>
      <ImageIcons1 />
    </div>
  );
}

function ImageContainer817() {
  return (
    <div className="absolute bg-black bottom-[-98.56%] left-0 right-0 top-full" data-name="Image container 817">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <UsImage2 />
      <ImageFooter5 />
      <p className="[text-shadow:#000000_0.6px_0.6px_0px] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[8px] text-[12.75px] text-[rgba(255,255,255,0.9)] text-nowrap top-[25.6px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recovery
      </p>
      <p className="[text-shadow:#000000_0.6px_0.6px_0px] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[8px] text-[12.75px] text-[rgba(255,255,255,0.9)] text-nowrap top-[7.6px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PLAX
      </p>
      <div className="absolute inset-[0.78%_9.09%_7.96%_8.88%]" data-name="Us-image/parasternal long axis view normal">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[98.33%] left-0 max-w-none top-[0.6%] w-full" src={imgUsImageParasternalLongAxisViewNormal} />
        </div>
      </div>
      <div className="absolute bg-black h-[38px] left-[643.35px] top-[392.6px] w-[35px]" />
    </div>
  );
}

function ImageContainer815() {
  return (
    <div className="absolute bg-black bottom-[49.64%] left-[49.91%] right-[0.27%] top-0" data-name="Image container 815">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <UsImage1 />
      <ImageContainer817 />
      <div className="absolute bg-black h-[38px] left-[643.35px] top-[393px] w-[35px]" />
    </div>
  );
}

function ImageContainer812() {
  return (
    <div className="absolute bg-black bottom-0 left-[5.63%] right-[2.92%] top-[13.33%]" data-name="Image container 811">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <ImageFooter />
      <div className="absolute flex h-0 items-center justify-center left-[7px] top-[490px] w-[2px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[2px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
                <line id="Line 439" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="2" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ResultlistLvEf2ChBp />
      <ImageContainer811 />
      <ImageContainer815 />
    </div>
  );
}

function Frame811680() {
  return (
    <div className="absolute bg-[#18253b] h-[936px] left-[84px] overflow-clip top-[144px] w-[24px]">
      <CommonAngleRight className="absolute left-[4px] size-[16px] top-[4px]" />
    </div>
  );
}

export default function Flow22CineScrub() {
  return (
    <div className="bg-white relative size-full" data-name="Flow 22 - Cine - Scrub">
      <div className="absolute h-[1080px] left-[3px] top-0 w-[81px]" data-name="SideBar">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 1080">
          <path d="M81 0H0V1080H81V0Z" fill="var(--fill-0, #071326)" id="SideBar" />
        </svg>
      </div>
      <div className="absolute h-[66px] left-[84px] right-0 top-0" data-name="AppBar">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1836 66">
          <path d="M1836 0H0V66H1836V0Z" fill="var(--fill-0, #071326)" id="AppBar" />
        </svg>
      </div>
      <div className="absolute h-[1080px] left-[2px] top-0 w-0" data-name="SideBarLine">
        <div className="absolute bottom-0 left-[-2px] right-[-2px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 1080">
            <path d="M2 0V1080" id="SideBarLine" stroke="var(--stroke-0, #1D2532)" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <Branding />
      <PatientBanner />
      <Search />
      <UserMenu />
      <UniViewMainToolbar />
      <Toolbar />
      <ImageContainer812 />
      <div className="absolute bg-[#19253a] h-[31px] left-[84px] top-[112px] w-[1780px]" />
      <div className="absolute bg-black h-px left-[84px] top-[143px] w-[1781px]" />
      <Current className="absolute left-[98px] overflow-clip size-[16px] top-[121px]" />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[164.5px] text-[14px] text-center text-nowrap text-white top-[117px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        3/09/2020
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[244px] text-[14px] text-center text-nowrap text-white top-[117px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        US
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[342.5px] text-[14px] text-center text-nowrap text-white top-[117px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        TTE - 12 months
      </p>
      <Frame811680 />
    </div>
  );
}