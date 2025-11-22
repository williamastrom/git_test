import svgPaths from "./svg-1ns4h8083x";

function ImageAnnotateMeasure() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="image-annotate-measure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_259_704)" id="image-annotate-measure/annotation-folder.24x24.dark">
          <path d={svgPaths.pb51a180} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
          <path d={svgPaths.p3f408400} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_2" />
          <path d={svgPaths.p1c087800} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_3" />
          <path d={svgPaths.p22adf680} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_4" />
          <path d={svgPaths.p1fef8140} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_5" />
          <path d={svgPaths.pcc57c50} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_259_704">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[rgba(103,157,228,0.3)] left-0 rounded-[2px] size-[24px] top-0" />
      <ImageAnnotateMeasure />
    </div>
  );
}