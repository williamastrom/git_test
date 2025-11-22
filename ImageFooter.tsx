import svgPaths from "./svg-wicvpihfms";

function IconButton() {
  return <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[651px] p-[6px] top-[5px]" data-name="Icon button" />;
}

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

function IconButton1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[680px] p-[6px] top-[5px]" data-name="Icon button">
      <Ecg />
    </div>
  );
}

function IconButton2() {
  return <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[709px] p-[6px] top-[5px]" data-name="Icon button" />;
}

function InformationHide16X16Dark() {
  return (
    <div className="absolute left-[715px] size-[16px] top-[11px]" data-name="information-hide.16x16.dark 2">
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

function CommandsNavigationPause16X16Dark() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="commands-navigation/pause.16x16.dark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="commands-navigation/pause.16x16.dark">
          <path d="M12 3H9V13H12V3Z" fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
          <path d="M7 3H4V13H7V3Z" fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[9px] p-[6px] top-[5px]" data-name="Icon button">
      <CommandsNavigationPause16X16Dark />
    </div>
  );
}

function CommonAngleRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="common/angle-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="common/angle-right">
          <g id="spacer"></g>
          <path d={svgPaths.p40bcf80} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[59px] p-[6px] top-[5px] w-[22px]" data-name="Icon button">
      <CommonAngleRight />
    </div>
  );
}

function CommonAngleLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="common/angle-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="common/angle-left">
          <g id="spacer"></g>
          <path d={svgPaths.pd89d80} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[37px] p-[6px] top-[5px] w-[22px]" data-name="Icon button">
      <CommonAngleLeft />
    </div>
  );
}

function ImageCineNavigatorWarningFps16X16Dark() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="image-cine-navigator/warning-fps.16x16.dark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3779)" id="image-cine-navigator/warning-fps.16x16.dark">
          <g id="Vector"></g>
          <path d={svgPaths.p1cb32230} fill="var(--fill-0, #FFC738)" id="Vector_2" />
          <path d={svgPaths.p3b2d3240} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_3" />
          <path d="M9 14H10H11V12H9V14Z" fill="var(--fill-0, black)" id="Vector_4" />
          <path d="M11 8H9V11H11V8Z" fill="var(--fill-0, black)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_3779">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="box-border content-stretch flex items-start p-[6px] relative shrink-0" data-name="Icon container">
      <ImageCineNavigatorWarningFps16X16Dark />
    </div>
  );
}

function ImageIcons() {
  return (
    <div className="absolute content-stretch flex gap-px items-center justify-end left-[614px] top-[5px]" data-name="Image icons">
      <IconContainer />
    </div>
  );
}

function ImageAnnotateMeasureEchoTime16X16Dark() {
  return (
    <div className="absolute left-[657px] size-[16px] top-[11px]" data-name="image-annotate-measure/echo-time.16x16.dark">
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

function SlowLong() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] content-stretch flex gap-[10px] h-[3px] items-center left-[9px] top-0 w-[728px]" data-name="Slow - long">
      <div className="bg-[rgba(255,255,255,0.6)] h-[3px] shrink-0 w-px" />
    </div>
  );
}

export default function ImageFooter() {
  return (
    <div className="bg-black relative size-full" data-name="Image footer">
      <IconButton />
      <IconButton1 />
      <IconButton2 />
      <InformationHide16X16Dark />
      <IconButton3 />
      <IconButton4 />
      <IconButton5 />
      <div className="absolute bg-black h-[4px] left-[737px] top-0 w-[7px]" />
      <div className="absolute bg-black h-[4px] left-0 top-0 w-[9px]" />
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] left-[89px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[10px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        21/90
      </p>
      <ImageIcons />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[646px] top-[10px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[20px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Line 1050" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ImageAnnotateMeasureEchoTime16X16Dark />
      <SlowLong />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[114px] top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "3", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[3px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                <line id="Line 1029" stroke="var(--stroke-0, #568BD1)" strokeWidth="2" x2="3" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[271px] top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "3", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[3px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                <line id="Line 1029" stroke="var(--stroke-0, #568BD1)" strokeWidth="2" x2="3" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[494px] top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "3", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[3px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                <line id="Line 1029" stroke="var(--stroke-0, #568BD1)" strokeWidth="2" x2="3" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}