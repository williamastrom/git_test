import { imgSpacer, imgBase, imgAccent } from "./svg-p01ph";

/**
 * @figmaAssetKey 848a6b0fff2311d13a9f88e6f3808472f6f6a1e7
 */
function ImageViewImageWindowLevel({ className }: { className?: string }) {
  return (
    <div className={className} data-name="image-view/image-window-level">
      <div className="absolute inset-0" data-name="spacer">
        <img alt="" className="block max-w-none size-full" src={imgSpacer} />
      </div>
      <div className="absolute inset-[4.167%]" data-name="base">
        <img alt="" className="block max-w-none size-full" src={imgBase} />
      </div>
      <div className="absolute inset-[41.33%_37.74%_37.7%_41.29%]" data-name="accent">
        <img alt="" className="block max-w-none size-full" src={imgAccent} />
      </div>
    </div>
  );
}

function Chip() {
  return <div className="absolute bg-[rgba(60,115,187,0.2)] left-0 rounded-[3px] size-[24px] top-0" data-name="chip" />;
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Chip />
      <ImageViewImageWindowLevel className="absolute left-[4px] size-[16px] top-[4px]" />
    </div>
  );
}