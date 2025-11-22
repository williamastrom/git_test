import svgPaths from "./svg-ainoycwnkh";

/**
 * @figmaAssetKey 00a82fd56eec1eee6304f71c422bd827ed1eb2e0
 */
function DataStatusUnsupportedDataWarning({ className }: { className?: string }) {
  return (
    <div className={className} data-name="data-status/unsupported-data-warning">
      <div className="absolute bottom-[3.13%] left-[25.04%] right-0 top-[31.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <div className="absolute inset-[34.38%_3.1%_6.25%_28.16%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10">
          <path d={svgPaths.p205bab00} fill="var(--fill-0, #FFC738)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[31.25%] left-[56.25%] right-[31.25%] top-1/2" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
          <path d="M0 0V0.5V2V3H2V1V0H0Z" fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[12.5%] left-[56.25%] right-[31.25%] top-3/4" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d="M0 0V2H1H2V0H1H0Z" fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[37.5%] left-0 right-[31.25%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10">
          <path d={svgPaths.p11ef7e00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[43.75%] top-[12.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 2">
          <path d="M7 0H0V2H7V0Z" fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Chip() {
  return <div className="absolute bg-[rgba(255,199,56,0.2)] left-0 rounded-[3px] size-[24px] top-0" data-name="chip" />;
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Chip />
      <DataStatusUnsupportedDataWarning className="absolute left-[4px] overflow-clip size-[16px] top-[4px]" />
    </div>
  );
}