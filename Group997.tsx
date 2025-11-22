import svgPaths from "./svg-nita330o8z";

function IconButton() {
  return <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-0 p-[6px] top-0" data-name="Icon button" />;
}

function InformationHide16X16Dark() {
  return (
    <div className="absolute left-[6px] size-[16px] top-[6px]" data-name="information-hide.16x16.dark 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3790)" id="information-hide.16x16.dark 2">
          <path d={svgPaths.p2830fa00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
          <path d={svgPaths.p1ec00380} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_2" />
          <path d={svgPaths.p33b6d580} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_3790">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <IconButton />
      <InformationHide16X16Dark />
    </div>
  );
}