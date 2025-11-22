import svgPaths from "./svg-fu2w3p7bwx";

function IconButton() {
  return <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-0 p-[6px] top-0" data-name="Icon button" />;
}

function ImageAnnotateMeasureEchoTime16X16Dark() {
  return (
    <div className="absolute left-[6px] size-[16px] top-[6px]" data-name="image-annotate-measure/echo-time.16x16.dark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3766)" id="image-annotate-measure/echo-time.16x16.dark">
          <path d={svgPaths.p21fef680} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
          <path d={svgPaths.pdcd300} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p11a44a00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_3766">
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
      <ImageAnnotateMeasureEchoTime16X16Dark />
    </div>
  );
}