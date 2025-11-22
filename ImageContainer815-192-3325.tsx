import imgUsImageParasternalLongAxisViewNormal from "figma:asset/d3c5a4d9e43d55e490a5b41db866d5ae84e208a2.png";

function UsImage() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <div className="absolute inset-0" data-name="Us-image/parasternal long axis view normal">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImageParasternalLongAxisViewNormal} />
      </div>
      <div className="absolute bg-[rgba(217,217,217,0)] bottom-[-6.61%] left-[-0.48%] right-0 top-[-0.23%]">
        <div aria-hidden="true" className="absolute border-2 border-[#3c73bb] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ImageFooter() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Image footer">
      <div className="flex flex-row items-center size-full">
        <div className="h-[28px] w-full" />
      </div>
    </div>
  );
}

export default function ImageContainer() {
  return (
    <div className="bg-black relative size-full" data-name="Image container 815">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[2px] relative size-full">
          <UsImage />
          <ImageFooter />
        </div>
      </div>
    </div>
  );
}