import svgPaths from "./svg-5ts7n8v2j1";

function Ecg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Ecg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Ecg">
          <path d={svgPaths.p37e96400} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function IconButton() {
  return (
    <div className="relative size-full" data-name="Icon button">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-center p-[6px] relative size-full">
          <Ecg />
        </div>
      </div>
    </div>
  );
}