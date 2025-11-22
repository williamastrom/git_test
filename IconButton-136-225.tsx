import { imgVector, imgVector1 } from "./svg-mh2xq";

/**
 * @figmaAssetKey 7d81877d684e5032f5ba5ca159d7484c4918feca
 */
function ImageViewImageSync({ className }: { className?: string }) {
  return (
    <div className={className} data-name="image-view/image-sync">
      <div className="absolute bottom-[29.17%] left-[33.33%] right-0 top-[29.17%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute bottom-[29.17%] left-0 right-[33.33%] top-[29.17%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector1} />
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey d2865ce0f54676e6e80dad14686854823872ffb2
 */
export default function IconButton() {
  return (
    <div className="relative size-full" data-name="Icon button">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] items-center p-[6px] relative size-full">
          <ImageViewImageSync className="overflow-clip relative shrink-0 size-[24px]" />
        </div>
      </div>
    </div>
  );
}