import svgPaths from "./svg-pfg9wqaiqf";
import imgUsImage from "figma:asset/865df8ba6dbb8a96261ee5c5a0bac26b684255ef.png";
import imgUsImage1 from "figma:asset/b914d795ced2bed02ffe05dcae8b0107b1e6f037.png";
import imgUsImage2 from "figma:asset/59e110eb34b469cf414173fe3c34e7a6d0d80ea3.png";
import imgUsImage3 from "figma:asset/f47dac9d4d844d8a4400bc8cda6ac344344e3ba5.png";
import imgUsImage4 from "figma:asset/e195809c0653ec871fb3be93523dad4b6de5a9d7.png";
import imgApicalFiveChamberView1 from "figma:asset/354c2eb9446fc7d13d56a410a13e8652c917d9e6.png";
import imgUsImage5 from "figma:asset/d13d3b7c86de29a3f56e6e776ebcfb3dcc5f492b.png";
import imgUsImage6 from "figma:asset/7d647be17a689ef77bec8e3cae7cfeb02f63a9a7.png";
import imgUsImage7 from "figma:asset/424b98d95c5c3a52633afee59b7d899d688cfe1f.png";

function CommonAngleLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="common/angle-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="common/angle-left">
          <g id="spacer"></g>
          <path d={svgPaths.pd89d80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="absolute box-border content-stretch flex gap-[6px] items-center left-[252px] p-[6px] top-0" data-name="Icon Button">
      <CommonAngleLeft />
    </div>
  );
}

function Filter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Filter">
          <path d={svgPaths.p24261200} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector" />
          <path d={svgPaths.p27b05400} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[6px] items-center left-[215px] p-[6px] top-0" data-name="Icon button">
      <Filter />
    </div>
  );
}

function ThumbnailToolbar() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Thumbnail Toolbar">
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] left-[8px] text-[12px] text-[rgba(255,255,255,0.9)] text-nowrap top-[5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        22 images in examination
      </p>
      <IconButton />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[247px] top-[4px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[20px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Line 1025" stroke="var(--stroke-0, white)" strokeOpacity="0.3" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <IconButton1 />
    </div>
  );
}

function UsImage() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage} />
    </div>
  );
}

function TimeStamp() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:11
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <div aria-hidden="true" className="absolute border-2 border-[#51c260] border-solid inset-0 pointer-events-none" />
      <UsImage />
      <TimeStamp />
    </div>
  );
}

function Thumbnail22() {
  return (
    <div className="bg-[rgba(81,194,96,0.3)] box-border content-stretch flex flex-col items-center justify-center pb-[2.5px] pl-[5px] pr-[2.5px] pt-[5px] relative shrink-0" data-name="Thumbnail 0811">
      <Thumbnail />
    </div>
  );
}

function UsImage1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage1} />
    </div>
  );
}

function TimeStamp1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:12
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail1() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage1 />
      <TimeStamp1 />
    </div>
  );
}

function Thumbnail23() {
  return (
    <div className="bg-[rgba(81,194,96,0.3)] box-border content-stretch flex flex-col items-center justify-center pb-[2.5px] pl-[2.5px] pr-[5px] pt-[5px] relative shrink-0" data-name="Thumbnail 0812">
      <Thumbnail1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 01">
      <Thumbnail22 />
      <Thumbnail23 />
    </div>
  );
}

function UsImage2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage2} />
    </div>
  );
}

function TimeStamp2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:13
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail2() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage2 />
      <TimeStamp2 />
    </div>
  );
}

function Thumbnail24() {
  return (
    <div className="bg-[rgba(81,194,96,0.3)] box-border content-stretch flex flex-col items-center justify-center pb-[5px] pl-[5px] pr-[2.5px] pt-[2.5px] relative shrink-0" data-name="Thumbnail 0813">
      <Thumbnail2 />
    </div>
  );
}

function UsImage3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage3} />
    </div>
  );
}

function TimeStamp3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:14
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail3() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage3 />
      <TimeStamp3 />
    </div>
  );
}

function Thumbnail25() {
  return (
    <div className="bg-[rgba(81,194,96,0.3)] box-border content-stretch flex flex-col items-center justify-center pb-[5px] pl-[2.5px] pr-[5px] pt-[2.5px] relative shrink-0" data-name="Thumbnail 0814">
      <Thumbnail3 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 02">
      <Thumbnail24 />
      <Thumbnail25 />
    </div>
  );
}

function UsImage4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:15
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail4() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage4 />
      <TimeStamp4 />
    </div>
  );
}

function Thumbnail26() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pb-[2.5px] pl-[5px] pr-[2.5px] pt-[2px] relative shrink-0" data-name="Thumbnail 0815">
      <Thumbnail4 />
    </div>
  );
}

function UsImage5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <div className="absolute bottom-0 left-[0.57%] right-[0.57%] top-0" data-name="apical five chamber view 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgApicalFiveChamberView1} />
      </div>
    </div>
  );
}

function TimeStamp5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:16
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail5() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage5 />
      <TimeStamp5 />
    </div>
  );
}

function Thumbnail27() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pb-[2.5px] pl-[2.5px] pr-[5px] pt-[2px] relative shrink-0" data-name="Thumbnail 0816">
      <Thumbnail5 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 03">
      <Thumbnail26 />
      <Thumbnail27 />
    </div>
  );
}

function UsImage6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage5} />
    </div>
  );
}

function TimeStamp6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:17
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail6() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage6 />
      <TimeStamp6 />
    </div>
  );
}

function Thumbnail28() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0817">
      <Thumbnail6 />
    </div>
  );
}

function UsImage7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage6} />
    </div>
  );
}

function TimeStamp7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:18
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail7() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage7 />
      <TimeStamp7 />
    </div>
  );
}

function Thumbnail29() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0818">
      <Thumbnail7 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 04">
      <Thumbnail28 />
      <Thumbnail29 />
    </div>
  );
}

function UsImage8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:19
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail8() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage8 />
      <TimeStamp8 />
    </div>
  );
}

function Thumbnail30() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0819">
      <Thumbnail8 />
    </div>
  );
}

function UsImage9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage7} />
    </div>
  );
}

function TimeStamp9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:20
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail9() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage9 />
      <TimeStamp9 />
    </div>
  );
}

function Thumbnail31() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0820">
      <Thumbnail9 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 05">
      <Thumbnail30 />
      <Thumbnail31 />
    </div>
  );
}

function UsImage10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp10() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:21
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail10() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage10 />
      <TimeStamp10 />
    </div>
  );
}

function Thumbnail32() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0821">
      <Thumbnail10 />
    </div>
  );
}

function UsImage11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp11() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:22
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail11() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage11 />
      <TimeStamp11 />
    </div>
  );
}

function Thumbnail33() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0822">
      <Thumbnail11 />
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 06">
      <Thumbnail32 />
      <Thumbnail33 />
    </div>
  );
}

function UsImage12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp12() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:23
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail12() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage12 />
      <TimeStamp12 />
    </div>
  );
}

function Thumbnail34() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0823">
      <Thumbnail12 />
    </div>
  );
}

function UsImage13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:24
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail13() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage13 />
      <TimeStamp13 />
    </div>
  );
}

function Thumbnail35() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0824">
      <Thumbnail13 />
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 07">
      <Thumbnail34 />
      <Thumbnail35 />
    </div>
  );
}

function UsImage14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:25
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail14() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage14 />
      <TimeStamp14 />
    </div>
  );
}

function Thumbnail36() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0825">
      <Thumbnail14 />
    </div>
  );
}

function UsImage15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp15() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:26
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail15() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage15 />
      <TimeStamp15 />
    </div>
  );
}

function Thumbnail37() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0826">
      <Thumbnail15 />
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 08">
      <Thumbnail36 />
      <Thumbnail37 />
    </div>
  );
}

function UsImage16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp16() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:27
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail16() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage16 />
      <TimeStamp16 />
    </div>
  );
}

function Thumbnail38() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0827">
      <Thumbnail16 />
    </div>
  );
}

function UsImage17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp17() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:28
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail17() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage17 />
      <TimeStamp17 />
    </div>
  );
}

function Thumbnail39() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0828">
      <Thumbnail17 />
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 09">
      <Thumbnail38 />
      <Thumbnail39 />
    </div>
  );
}

function UsImage18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp18() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:29
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail18() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage18 />
      <TimeStamp18 />
    </div>
  );
}

function Thumbnail40() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0829">
      <Thumbnail18 />
    </div>
  );
}

function UsImage19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp19() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:30
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail19() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage19 />
      <TimeStamp19 />
    </div>
  );
}

function Thumbnail41() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0830">
      <Thumbnail19 />
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 10">
      <Thumbnail40 />
      <Thumbnail41 />
    </div>
  );
}

function UsImage20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp20() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:31
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail20() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage20 />
      <TimeStamp20 />
    </div>
  );
}

function Thumbnail42() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0831">
      <Thumbnail20 />
    </div>
  );
}

function UsImage21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgUsImage4} />
    </div>
  );
}

function TimeStamp21() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            08:32
          </p>
          <div className="h-[8px] shrink-0 w-px" data-name="Placeholder" />
        </div>
      </div>
    </div>
  );
}

function Thumbnail21() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col h-[115px] items-start p-[2px] relative shrink-0 w-[127px]" data-name="Thumbnail">
      <UsImage21 />
      <TimeStamp21 />
    </div>
  );
}

function Thumbnail43() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0832">
      <Thumbnail21 />
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 11">
      <Thumbnail42 />
      <Thumbnail43 />
    </div>
  );
}

function ThumbnailsList() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[940px] items-center min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0" data-name="Thumbnails list">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
    </div>
  );
}

function Scrollbar() {
  return (
    <div className="h-[525px] relative shrink-0 w-[5px]" data-name="_Scrollbar">
      <div className="absolute bg-[#c6c8ca] inset-0 rounded-[999px]" data-name="Scrollbar indicator" />
    </div>
  );
}

function ScrollbarFrame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[940px] items-start justify-center p-[5px] relative shrink-0 w-[15px]" data-name="Scrollbar frame">
      <Scrollbar />
    </div>
  );
}

function ThumbnailAndScrollbar() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Thumbnail and scrollbar">
      <ThumbnailsList />
      <ScrollbarFrame />
    </div>
  );
}

function ThumbnailFooter() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Thumbnail footer">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[25px] items-center justify-between pl-[5px] pr-0 py-0 relative w-full">
          <p className="font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            No more images.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ThumbnailsWithToolbar() {
  return (
    <div className="bg-[#19253a] content-stretch flex flex-col items-start relative size-full" data-name="Thumbnails with toolbar">
      <ThumbnailToolbar />
      <ThumbnailAndScrollbar />
      <ThumbnailFooter />
    </div>
  );
}