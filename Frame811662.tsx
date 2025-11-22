import img from "figma:asset/865df8ba6dbb8a96261ee5c5a0bac26b684255ef.png";
import img1 from "figma:asset/b914d795ced2bed02ffe05dcae8b0107b1e6f037.png";
import img2 from "figma:asset/59e110eb34b469cf414173fe3c34e7a6d0d80ea3.png";
import img3 from "figma:asset/f47dac9d4d844d8a4400bc8cda6ac344344e3ba5.png";
import img4 from "figma:asset/e195809c0653ec871fb3be93523dad4b6de5a9d7.png";
import img5 from "figma:asset/354c2eb9446fc7d13d56a410a13e8652c917d9e6.png";
import img6 from "figma:asset/d13d3b7c86de29a3f56e6e776ebcfb3dcc5f492b.png";
import img7 from "figma:asset/7d647be17a689ef77bec8e3cae7cfeb02f63a9a7.png";
import img8 from "figma:asset/424b98d95c5c3a52633afee59b7d899d688cfe1f.png";

function TimeStamp() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img} />
      </div>
      <TimeStamp />
    </div>
  );
}

function TimeStamp1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img1} />
      </div>
      <TimeStamp1 />
    </div>
  );
}

function Row01() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 01">
      <div className="bg-[rgba(81,194,96,0.3)] box-border content-stretch flex flex-col items-center justify-center pb-[2.5px] pl-[5px] pr-[2.5px] pt-[5px] relative shrink-0" data-name="Thumbnail 0811">
        <Thumbnail />
      </div>
      <div className="bg-[rgba(81,194,96,0.3)] box-border content-stretch flex flex-col items-center justify-center pb-[2.5px] pl-[2.5px] pr-[5px] pt-[5px] relative shrink-0" data-name="Thumbnail 0812">
        <Thumbnail1 />
      </div>
    </div>
  );
}

function TimeStamp2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img2} />
      </div>
      <TimeStamp2 />
    </div>
  );
}

function TimeStamp3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img3} />
      </div>
      <TimeStamp3 />
    </div>
  );
}

function Row02() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 02">
      <div className="bg-[rgba(81,194,96,0.3)] box-border content-stretch flex flex-col items-center justify-center pb-[5px] pl-[5px] pr-[2.5px] pt-[2.5px] relative shrink-0" data-name="Thumbnail 0813">
        <Thumbnail2 />
      </div>
      <div className="bg-[rgba(81,194,96,0.3)] box-border content-stretch flex flex-col items-center justify-center pb-[5px] pl-[2.5px] pr-[5px] pt-[2.5px] relative shrink-0" data-name="Thumbnail 0814">
        <Thumbnail3 />
      </div>
    </div>
  );
}

function TimeStamp4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp4 />
    </div>
  );
}

function TimeStamp5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <div className="absolute bottom-0 left-[0.57%] right-[0.57%] top-0" data-name="apical five chamber view 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img5} />
        </div>
      </div>
      <TimeStamp5 />
    </div>
  );
}

function Row03() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 03">
      <div className="box-border content-stretch flex flex-col items-center justify-center pb-[2.5px] pl-[5px] pr-[2.5px] pt-[2px] relative shrink-0" data-name="Thumbnail 0815">
        <Thumbnail4 />
      </div>
      <div className="box-border content-stretch flex flex-col items-center justify-center pb-[2.5px] pl-[2.5px] pr-[5px] pt-[2px] relative shrink-0" data-name="Thumbnail 0816">
        <Thumbnail5 />
      </div>
    </div>
  );
}

function TimeStamp6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img6} />
      </div>
      <TimeStamp6 />
    </div>
  );
}

function TimeStamp7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img7} />
      </div>
      <TimeStamp7 />
    </div>
  );
}

function Row04() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 04">
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0817">
        <Thumbnail6 />
      </div>
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0818">
        <Thumbnail7 />
      </div>
    </div>
  );
}

function TimeStamp8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp8 />
    </div>
  );
}

function TimeStamp9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img8} />
      </div>
      <TimeStamp9 />
    </div>
  );
}

function Row05() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 05">
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0819">
        <Thumbnail8 />
      </div>
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0820">
        <Thumbnail9 />
      </div>
    </div>
  );
}

function TimeStamp10() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp10 />
    </div>
  );
}

function TimeStamp11() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp11 />
    </div>
  );
}

function Row06() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 06">
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0821">
        <Thumbnail10 />
      </div>
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0822">
        <Thumbnail11 />
      </div>
    </div>
  );
}

function TimeStamp12() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp12 />
    </div>
  );
}

function TimeStamp13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp13 />
    </div>
  );
}

function Row07() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 07">
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0823">
        <Thumbnail12 />
      </div>
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0824">
        <Thumbnail13 />
      </div>
    </div>
  );
}

function TimeStamp14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp14 />
    </div>
  );
}

function TimeStamp15() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp15 />
    </div>
  );
}

function Row08() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 08">
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0825">
        <Thumbnail14 />
      </div>
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0826">
        <Thumbnail15 />
      </div>
    </div>
  );
}

function TimeStamp16() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp16 />
    </div>
  );
}

function TimeStamp17() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp17 />
    </div>
  );
}

function Row09() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 09">
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0827">
        <Thumbnail16 />
      </div>
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0828">
        <Thumbnail17 />
      </div>
    </div>
  );
}

function TimeStamp18() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp18 />
    </div>
  );
}

function TimeStamp19() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp19 />
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 10">
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0829">
        <Thumbnail18 />
      </div>
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0830">
        <Thumbnail19 />
      </div>
    </div>
  );
}

function TimeStamp20() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp20 />
    </div>
  );
}

function TimeStamp21() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Time stamp">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[6px] py-px relative w-full">
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Us-image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={img4} />
      </div>
      <TimeStamp21 />
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 11">
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[5px] pr-[2.5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0831">
        <Thumbnail20 />
      </div>
      <div className="box-border content-stretch flex flex-col items-center justify-center pl-[2.5px] pr-[5px] py-[2.5px] relative shrink-0" data-name="Thumbnail 0832">
        <Thumbnail21 />
      </div>
    </div>
  );
}

function ThumbnailsList() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[940px] items-center min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0" data-name="Thumbnails list">
      <Row01 />
      <Row02 />
      <Row03 />
      <Row04 />
      <Row05 />
      <Row06 />
      <Row07 />
      <Row08 />
      <Row09 />
      <Row10 />
      <Row11 />
    </div>
  );
}

function ThumbnailAndScrollbar() {
  return (
    <div className="absolute content-stretch flex h-[496px] items-start left-0 top-[21px] w-[265px]" data-name="Thumbnail and scrollbar">
      <ThumbnailsList />
    </div>
  );
}

export default function Frame811662() {
  return (
    <div className="bg-[#18253b] relative size-full">
      <div className="absolute bg-[rgba(0,0,0,0.5)] box-border content-stretch flex flex-col gap-[3px] items-center left-[404px] pb-0 pt-[5px] px-0 top-[119px] w-[70px]" data-name="Toggle button">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none" />
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          30
        </p>
        <div className="bg-[#679de4] h-[4px] opacity-0 shrink-0 w-full" data-name="Adornment" />
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[14px] top-[5px] w-[251px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[251px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 251 1">
                <line id="Line 1038" stroke="var(--stroke-0, white)" strokeOpacity="0.15" x2="251" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#c6c8ca] h-[317px] left-[270px] rounded-[11px] top-0 w-[5px]" />
      <ThumbnailAndScrollbar />
    </div>
  );
}