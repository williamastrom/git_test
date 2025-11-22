import svgPaths from "./svg-2o2ns1dvn3";

function Icon() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <g id="spacer"></g>
          <path d={svgPaths.p40bcf80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ExpandCollapse() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[56px]" data-name="Expand collapse">
      <div className="absolute h-[60px] left-0 top-0 w-[4px]" data-name="Adornment" />
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3546)" id="Icon">
          <path d={svgPaths.p70f00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
          <path d={svgPaths.p3e29a000} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_2" />
          <path d={svgPaths.p3098d80} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_3546">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Layout() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-[0.5px] px-[15px] py-[10px] top-[44px] w-[55px]" data-name="Layout 1">
      <Icon1 />
      <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        tools
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3570)" id="Icon">
          <path d={svgPaths.p1fa8fd00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
          <path d={svgPaths.p3571cd80} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_2" />
          <path d={svgPaths.p12be5200} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_3" />
          <path d={svgPaths.p30e51770} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_4" />
          <path d={svgPaths.p1942ee00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_5" />
          <path d={svgPaths.p610cc00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_1_3570">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Layout4() {
  return (
    <div className="absolute bg-[rgba(60,115,187,0.3)] box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-[0.5px] px-[15px] py-[10px] top-[91px] w-[55px]" data-name="Layout 5">
      <div aria-hidden="true" className="absolute border-[#679de4] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <Icon2 />
      <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Measure
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3559)" id="Icon">
          <path d={svgPaths.pb51a180} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
          <path d={svgPaths.p3f408400} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_2" />
          <path d={svgPaths.p3af75700} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_3" />
          <path d={svgPaths.p1ccf6a80} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_4" />
          <path d={svgPaths.p25f5f1f0} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_3559">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Layout1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[138px] w-[55px]" data-name="Layout 2">
      <Icon3 />
      <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Show all
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <g id="spacer"></g>
          <g id="base">
            <path d={svgPaths.p23187600} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
            <path d={svgPaths.p2b30e500} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_2" />
            <path d={svgPaths.p21aa0700} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_3" />
            <path d={svgPaths.p20e1a640} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_4" />
            <path d={svgPaths.p2be91e00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_5" />
            <path d={svgPaths.p2a42bd00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_6" />
            <path d={svgPaths.p68c7b80} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_7" />
            <path d={svgPaths.p796ec00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_8" />
            <path d={svgPaths.p354f3780} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_9" />
          </g>
          <g id="accent">
            <path d={svgPaths.p149acf80} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_10" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Layout5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[185px] w-[55px]" data-name="Layout 6">
      <Icon4 />
      <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Adjust
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pd239e80} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector" />
          <path d={svgPaths.pf15e000} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Layout2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[232px] w-[55px]" data-name="Layout 3">
      <Icon5 />
      <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.3)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reset view
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pb5b3e00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
          <path d={svgPaths.p14509e80} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Layout3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[279px] w-[55px]" data-name="Layout 4">
      <Icon6 />
      <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Compare
      </p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <g id="spacer"></g>
          <path d={svgPaths.p3b8f8280} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Comparison() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[326px] w-[55px]" data-name="Comparison">
      <Icon7 />
      <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Layout
      </p>
    </div>
  );
}

function Comparison1() {
  return (
    <div className="absolute contents left-0 top-[326px]" data-name="Comparison">
      <Comparison />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3542)" id="Icon">
          <path d={svgPaths.p3ea62e70} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector" />
          <path d={svgPaths.p34b5d000} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_3542">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PreviousSet() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[373px] w-[55px]" data-name="Previous set">
      <Icon8 />
      <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.3)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Previous
      </p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3551)" id="Icon">
          <path d={svgPaths.p157b9d40} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
          <path d={svgPaths.p8fc30c0} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_3551">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NextSet() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-[0.5px] px-[15px] py-[10px] top-[420px] w-[55px]" data-name="Next set">
      <Icon9 />
      <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Next
      </p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3529)" id="Icon">
          <path d={svgPaths.p1c450d00} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
          <path d={svgPaths.p32e4e600} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_2" />
          <path d={svgPaths.p3448a480} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_3529">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NextSet1() {
  return (
    <div className="absolute bg-[rgba(60,115,187,0.3)] box-border content-stretch flex flex-col gap-[2px] h-[47px] items-center justify-center left-0 px-[15px] py-[10px] top-[468px] w-[55px]" data-name="Next set">
      <div aria-hidden="true" className="absolute border-[#679de4] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <Icon10 />
      <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cine
      </p>
    </div>
  );
}

function NextSet2() {
  return (
    <div className="absolute h-[47px] left-0 top-[921px] w-[55px]" data-name="Next set">
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] left-[5px] text-[10px] text-[rgba(255,255,255,0.9)] text-nowrap top-[24px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Shortcuts
      </p>
      <div className="absolute inset-[12.77%_37.27%_55.32%_35.45%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <path d={svgPaths.p2579dfc0} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[19px] size-[17px] top-[7px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Frame 811631">
          <g id="Rectangle 2048">
            <mask fill="white" id="path-1-inside-1_1_3578">
              <rect height="17" rx="1" width="17" />
            </mask>
            <rect height="17" mask="url(#path-1-inside-1_1_3578)" rx="1" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="3.2" width="17" />
          </g>
          <line id="Line 1037" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="1.6" x1="17" x2="12" y1="8.8" y2="8.8" />
          <line id="Line 1038" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="1.6" x1="6" x2="1" y1="8.8" y2="8.8" />
          <line id="Line 1039" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="1.6" x1="8.2" x2="8.2" y1="6" y2="1" />
          <line id="Line 1040" stroke="var(--stroke-0, #9EA3AB)" strokeWidth="1.6" x1="8.8" x2="8.8" y1="11" y2="16" />
          <g id="Play">
            <path d={svgPaths.p2a2bbf00} fill="var(--fill-0, #0D192D)" id="Vector" />
          </g>
          <path d={svgPaths.p35e24800} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[47px] left-0 overflow-clip top-[515px] w-[55px]">
      <Frame />
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] left-[16px] text-[10px] text-nowrap text-white top-[26px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Align
      </p>
    </div>
  );
}

export default function Toolbar() {
  return (
    <div className="bg-[#0d192d] relative size-full" data-name="Toolbar">
      <ExpandCollapse />
      <div className="absolute h-0 left-[10px] top-[44px] w-[36px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="36" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[10px] top-[138px] w-[36px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="36" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Layout />
      <Layout4 />
      <Layout1 />
      <Layout5 />
      <Layout2 />
      <div className="absolute h-0 left-[10px] top-[279px] w-[36px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="36" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Layout3 />
      <div className="absolute h-0 left-[10px] top-[326px] w-[36px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="36" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Comparison1 />
      <PreviousSet />
      <NextSet />
      <NextSet1 />
      <NextSet2 />
      <div className="absolute h-0 left-[10px] top-[468px] w-[36px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="36" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}