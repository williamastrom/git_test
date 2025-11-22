import { imgVector, imgVector1, imgVector2, img, img1, imgKeyboard16X16Dark5 } from "./svg-c76ul";

/**
 * @figmaAssetKey 040e45ac6b60a9b43f6d2fbbe2703556fa3a201d
 */
function WidgetsControlMenuTricolon16X16Dark({ className }: { className?: string }) {
  return (
    <div className={className} data-name="widgets-control/menu-tricolon.16x16.dark">
      <div className="absolute inset-[68.56%_39.69%_10.81%_39.69%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute inset-[39.69%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector1} />
      </div>
      <div className="absolute inset-[10.81%_39.69%_68.56%_39.69%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector2} />
      </div>
    </div>
  );
}
type Frame1Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

/**
 * @figmaAssetKey 11fb5e564b332db2f8c0f19cdf9dbfb59291fc4a
 */
function Frame1({ className, property1 = "Default" }: Frame1Props) {
  if (property1 === "Variant2") {
    return (
      <div className={className} data-name="Property 1=Variant2">
        <WidgetsControlMenuTricolon16X16Dark className="absolute left-[360px] overflow-clip size-[16px] top-[14px]" />
      </div>
    );
  }
  return <div className={className} data-name="Property 1=Default" />;
}
type FrameProps = {
  className?: string;
  property1?: "SEV-Default" | "SEV-hover" | "Variant3" | "Variant4" | "Variant5" | "multiple-default" | "multiple-hover" | "Variant8" | "multiple-select" | "SEV-select";
};

/**
 * @figmaAssetKey 4b949ff26326084511d7e83e9c17214dbd0a847c
 */
function Frame({ className, property1 = "SEV-Default" }: FrameProps) {
  if (property1 === "multiple-default") {
    return <div className={className} data-name="Property 1=multiple-default" />;
  }
  if (property1 === "multiple-hover") {
    return (
      <div className={className} data-name="Property 1=multiple-hover">
        <Widgetscontrolmenutricolon16x16light />
        <button className="absolute block cursor-pointer h-[28px] left-0 overflow-visible top-0 w-[248px]">
          <div className="absolute bg-[rgba(217,217,217,0)] h-[28px] left-0 top-0 w-[248px]" />
        </button>
      </div>
    );
  }
  if (property1 === "multiple-select") {
    return (
      <button className={className} data-name="Property 1=multiple-select">
        <div className="absolute h-[28px] left-0 top-0 w-[248px]">
          <div className="absolute bg-[rgba(217,217,217,0)] h-[28px] left-0 top-0 w-[248px]" />
        </div>
        <div className="absolute bg-[#568bd1] h-[28px] left-0 top-0 w-[4px]" />
      </button>
    );
  }
  if (property1 === "SEV-hover") {
    return (
      <div className={className} data-name="Property 1=SEV-hover">
        <Widgetscontrolmenutricolon16x16light1 />
        <Imageviewcrosshair16x16light />
        <button className="absolute block cursor-pointer h-[28px] left-0 top-0 w-[250px]" />
      </div>
    );
  }
  if (property1 === "SEV-select") {
    return (
      <div className={className} data-name="Property 1=SEV-select">
        <button className="absolute block cursor-pointer h-[28px] left-0 overflow-clip top-0 w-[250px]">
          <div className="absolute bg-[#568bd1] h-[28px] left-0 top-0 w-[4px]" />
        </button>
      </div>
    );
  }
  if (property1 === "Variant5") {
    return (
      <div className={className} data-name="Property 1=Variant5">
        <Widgetscontrolmenutricolon16x16light2 />
        <div className="absolute bg-[rgba(103,157,228,0.3)] left-[332px] rounded-[3px] size-[24px] top-[2px]" />
        <Imageviewcrosshair16x16light1 />
      </div>
    );
  }
  if (property1 === "Variant3") {
    return (
      <div className={className} data-name="Property 1=Variant3">
        <button className="absolute bg-[rgba(103,157,228,0.3)] block cursor-pointer left-[356px] rounded-[3px] size-[24px] top-[2px]" />
        <Widgetscontrolmenutricolon16x16light3 />
        <Imageviewcrosshair16x16light2 />
      </div>
    );
  }
  if (property1 === "Variant8") {
    return (
      <div className={className} data-name="Property 1=Variant8">
        <div className="absolute bg-[rgba(103,157,228,0.3)] left-[356px] rounded-[3px] size-[24px] top-[2px]" />
        <Widgetscontrolmenutricolon16x16light4 />
      </div>
    );
  }
  if (property1 === "Variant4") {
    return (
      <div className={className} data-name="Property 1=Variant4">
        <button className="absolute bg-[rgba(103,157,228,0.3)] block cursor-pointer left-[356px] rounded-[3px] size-[24px] top-[2px]" />
        <Widgetscontrolmenutricolon16x16light5 />
        <div className="absolute h-[35px] left-[190px] top-[26px] w-[190px]">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
          <div className="absolute contents left-0 top-0">
            <div className="absolute bg-[#030e1f] h-[35px] left-0 top-0 w-[190px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
            </div>
            <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[48px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[7px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Add manual input
            </p>
          </div>
          <div className="absolute left-[15px] size-[16px] top-[10px]" data-name="keyboard.16x16.dark 5">
            <img alt="" className="block max-w-none size-full" src={imgKeyboard16X16Dark5} />
          </div>
        </div>
        <Imageviewcrosshair16x16light3 />
      </div>
    );
  }
  return <div className={className} data-name="Property 1=SEV-Default" />;
}

function Group3() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[553px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[563.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[564px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[598px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[609px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[608.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.1</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[230px] text-nowrap top-[626px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[637px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[636.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">12.6</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[230px] text-nowrap top-[654px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[665px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[664.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">11.1</p>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
export default function MeasurementMenu() {
  return (
    <div className="relative size-full" data-name="Measurement menu">
      <div className="absolute bg-[#131f34] h-[923px] left-0 top-0 w-[390px]" />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[553px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVOT Vmax
      </p>
      <Group3 />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[574px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most recent
      </p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[249px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[23px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright1 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[814px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright2 />
        </div>
      </div>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[246px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aortic Valve
      </p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[20px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Aorta `}</p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[811px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mitral valve
      </p>
      <div className="absolute bg-[#d9d9d9] h-[218px] left-[384px] rounded-[14px] top-[16px] w-[4px]" />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[388px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        cm
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[416px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        m/s
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[444px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        m/s
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[472px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        mmHg
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[500px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        mmHg
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[528px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        cm
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[728px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        ms
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[0px] text-[rgba(255,255,255,0.6)] text-nowrap top-[756px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="text-[12px]">cm</span>
        <span className="text-[7.74px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          2
        </span>
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[0px] text-[rgba(255,255,255,0.6)] text-nowrap top-[784px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="text-[12px]">cm</span>
        <span className="text-[7.74px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          2
        </span>
        <span className="text-[12px]">/m</span>
        <span className="text-[7.74px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          2
        </span>
      </p>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[692px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ml</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[341px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ms</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[369px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ms</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[313px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">m/s2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[285px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ms</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[59px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[87px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[115px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[143px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[171px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[199px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[227px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">m/s</p>
      </div>
      <Group />
      <Group1 />
      <Group2 />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[839px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV VTI
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[867px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV PGmax
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[895px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV PGmean
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[274px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AV Dec Time
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[48px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ao Ann Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[76px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ao STJ diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[104px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ao SoV Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[132px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ao Asc Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[160px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ao Arch Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[188px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ao Desc Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[216px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ao Dec Vmax
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[302px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AV Dec Slope
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[330px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AV PHT
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[358px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AV Acc Time
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[386px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AV VTI
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[414px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AV Vmax
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[442px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AV Vmean
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[470px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AV PGmax
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[498px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AV PGmean
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[526px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVOT VTI
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[681px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVOT SV
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[726px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        IVRT
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[754px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AVA (VTI)
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[782px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AVAI (VTI)
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[598px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVOT Vmean
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[626px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVOT PGmax
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[654px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVOT PGmean
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[386px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        21.12
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[414px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.5
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[442px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.2
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[470px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        13.5
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[498px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        9.9
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[526px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        21.4
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[726px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        60
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[754px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.5
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[782px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.6
      </p>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[691.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">79.3</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[340.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">340</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[368.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">84</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[312.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">3.5</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[284.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">29</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[58.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">29</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[86.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">25</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[114.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">42</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[142.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">30</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[170.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">25</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[198.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">27</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[226.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">29</p>
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[839px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        10.45
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[867px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        13.5
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[841px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        cm
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[869px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        L/min/m2
      </p>
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[892px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[864px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[836px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[595px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[623px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[651px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[723px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[751px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[779px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[523px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[383px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[411px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[439px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[467px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[495px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[327px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[355px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[299px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[271px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[45px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[73px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[101px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[129px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[157px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[185px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[213px] w-[390px]" />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[897px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        mmHg
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[702px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Average
      </p>
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[551px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[679px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[920px] w-[390px]" />
      <Imageannotatemeasure />
      <Imageannotatemeasure1 />
    </div>
  );
}