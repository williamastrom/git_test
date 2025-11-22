import svgPaths from "./svg-0tdp05o16e";

/**
 * @figmaAssetKey 8360008b7a44c18c72535fa7eb3fcde9321cca4f
 */
function CommonClose({ className }: { className?: string }) {
  return (
    <div className={className} data-name="common/close">
      <div className="absolute inset-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="spacer"></g>
        </svg>
      </div>
      <div className="absolute inset-[17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p354ffc00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey ec67051336fd7ca7bba8acc84d6dc0000b3ce288
 */
function WidgetsControlPanelDown16X16Dark({ className }: { className?: string }) {
  return (
    <div className={className} data-name="widgets-control/panel-down.16x16.dark">
      <div className="absolute inset-[29.88%_13.8%_20.69%_13.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
          <path d={svgPaths.p3fc56d00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 4fc63863a8dd35e7161b3a03973a51577748294a
 */
function ImageNavigateSeriesPriorV216X16Dark({ className }: { className?: string }) {
  return (
    <div className={className} data-name="image-navigate/series-prior-v2.16x16.dark">
      <div className="absolute inset-0" data-name="spacer">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="spacer"></g>
        </svg>
      </div>
      <div className="absolute inset-[20.83%_29.16%_33.33%_47.92%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 8">
          <path d={svgPaths.p109adb80} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.33%_4.17%_8.33%_0.04%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
          <path d={svgPaths.pb260900} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[18px] left-[32px] top-[5px] w-[199px]">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[30px] text-[12px] text-nowrap text-white top-[9px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">1/16/2023</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[111px] text-[12px] text-nowrap text-white top-[9px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">US</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[149px] text-[12px] text-nowrap text-white top-[9px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">TTE</p>
      </div>
      <ImageNavigateSeriesPriorV216X16Dark className="absolute left-0 overflow-clip size-[16px] top-px" />
      <WidgetsControlPanelDown16X16Dark className="absolute left-[183px] overflow-clip size-[16px] top-px" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#253753] h-[27px] left-0 top-0 w-[894px]" />
      <Frame />
      <CommonClose className="absolute left-[872px] overflow-clip size-[16px] top-[5px]" />
    </div>
  );
}