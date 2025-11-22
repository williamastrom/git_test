import { imgVector, imgVector1, imgVector2, img, img1, imgKeyboard16X16Dark5 } from "./svg-qbihf";

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

function Group2() {
  return (
    <div className="absolute contents left-[222px] top-[430px]">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[440.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">23.45</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[230px] text-nowrap top-[924px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[934.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">23.9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[935px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">ms</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[952px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[962.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">3.6</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[963px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s2</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[980px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[990.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">3.5</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[991px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">ms</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[230px] text-nowrap top-[1008px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[1018.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9.45</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[1019px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">mm</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[230px] text-nowrap top-[1036px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[1046.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">3.45</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[1047px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[230px] text-nowrap top-[1064px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[1074.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">2.45</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[1075px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[230px] top-[1092px]">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1102.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">3.45</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[222px] text-nowrap top-[1120px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[1130.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">23.45</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[1131px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">cm</p>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[214px] text-nowrap top-[1148px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[1158.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">213.45</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[1159px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[346px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[356.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[357px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[374px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[384.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[385px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[402px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[412.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[413px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">ms</p>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[238px] top-[811px]">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[821.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">7.2</p>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-[238px] top-[839px]">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[849.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">7.2</p>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents left-[238px] top-[867px]">
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[877.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">7.2</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[241px] text-nowrap top-[124px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[134.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">45</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[135px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">cm/s</p>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[241px] text-nowrap top-[168px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[178.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">45</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[179px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">cm/s</p>
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[241px] text-nowrap top-[212px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[222.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">15</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[223px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">cm/s</p>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[257px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[267.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">8</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[268px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">cm/s2</p>
      </div>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[301px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[311.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[312px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">ms</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[1791px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[1802px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[1801.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[1835px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[1846px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[1845.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[1880px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[1891px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[1890.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[1924px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[1935px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[1934.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[1968px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[1979px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[1978.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2012px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2023px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2022.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2040px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2051px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2050.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2068px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2079px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2078.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2096px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2107px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2106.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2124px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2135px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2134.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2152px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2163px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2162.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2180px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2191px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2190.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2208px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2219px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2218.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2236px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2247px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2246.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2264px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2275px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2274.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2292px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2303px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2302.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2320px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2331px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2330.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[238px] text-nowrap top-[2348px]">
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[2359px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[2358.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">1.4</p>
      </div>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[458px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[468.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[469px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">ms</p>
      </div>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[502px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[512.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[513px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">ms</p>
      </div>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[546px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[556.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[557px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">ms</p>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[590px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[600.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[601px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">ms</p>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[634px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[644.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[645px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">ms</p>
      </div>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[678px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[688.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[689px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">ms</p>
      </div>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[722px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[732.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[733px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">ms</p>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] left-[249px] text-nowrap top-[766px]">
      <div className="absolute flex flex-col justify-center left-[258px] text-[14px] text-right text-white top-[776.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] top-[777px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">ms</p>
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
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
/**
 * @figmaAssetKey 729a199e64266c908d738af6952fd86a27b7fbc3
 */
export default function MeasurementMenu() {
  return (
    <div className="relative size-full" data-name="Measurement menu">
      <div className="absolute bg-[#131f34] h-[3076px] left-0 top-0 w-[390px]" />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[16px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright />
        </div>
      </div>
      <Genericsymbolsangledown16x16dark />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[1176px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright1 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[1458px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright2 />
        </div>
      </div>
      <Commonangleright3 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[2376px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright4 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[2967px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright5 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[3336px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright6 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[3564px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright7 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[3767px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright8 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[3914px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright9 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[17px] top-[3974px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Commonangleright10 />
        </div>
      </div>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[13px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mitral valve
      </p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[896px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tricuspid Valve
      </p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[1173px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pulmonic
      </p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[1455px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Left Ventricle
      </p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[2373px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Right Ventricle
      </p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[2964px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Left Atrium
      </p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[3333px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Right Atrium
      </p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[3561px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Patient Characteristics
      </p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[3764px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pulmonary Vein
      </p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[3911px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hepatic Vein
      </p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[40px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[3971px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inferior Vena Cava
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[0px] text-[rgba(255,255,255,0.6)] text-nowrap top-[841px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="text-[12px]">cm</span>
        <span className="text-[7.74px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          2
        </span>
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[0px] text-[rgba(255,255,255,0.6)] text-nowrap top-[869px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="text-[12px]">cm</span>
        <span className="text-[7.74px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          2
        </span>
        <span className="text-[12px]">/m</span>
        <span className="text-[7.74px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          2
        </span>
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[41px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV VTI
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[69px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV PGmax
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[97px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV PGmean
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[124px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV Vmax
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[168px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV Vmean
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[212px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV Dec Slope
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[257px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV Dec Time
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[301px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV PHT
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[346px] w-[140px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV E Vel
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[374px] w-[140px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV A Vel
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[402px] w-[140px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV A Dur
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[811px] w-[140px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        E/E’ Ratio
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[839px] w-[140px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        MVA (VTI)
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[867px] w-[140px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        MVAI (VTI)
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[430px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        MV E/A Ratio
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[924px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        TV Dec Time
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[952px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        TV Dec Slope
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[980px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        TV PHT
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1008px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        TAPSE
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1036px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        TV E Vel
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1064px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        TV A Vel
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[1092px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        TV E/A Ratio
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1120px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        TV VTI
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1148px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        TV Vmax
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1201px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PA Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1229px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Estimated RAP
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1257px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PV Acc Time
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1285px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PV Acc Slope
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1484px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        IVSd
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1512px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        IVSs
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[1540px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LV Mass
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[1568px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVMI
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[1596px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LV FS
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1624px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVIDd
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1652px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVIDs
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1680px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVPWd
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1708px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVSWd
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1736px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVOT Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2404px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RV Basal Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2432px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RV Mid Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2460px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RVLd
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2488px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RV Wall Thickness
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2516px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RVIDd
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2544px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RVIDs
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2684px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RV ESA 4CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2572px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RV FAC
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2712px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RV EDA 4CH
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[2600px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RVSP
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2740px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RVOT Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2628px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RV S’
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2768px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RVOT Prox Diam
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[2656px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RV derived measu...
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2796px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RVOT Dist Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2824px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RVOT VTI
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2852px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RVOT Vmax
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2880px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RVOT Vmean
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2908px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RVOT PGmax
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2936px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RVOT PGmean
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[2995px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LAs Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3023px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LAd Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3079px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LAd Area 2CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3107px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LAs Area 2CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3135px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LAd Area 4CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3163px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LAs Area 4CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3191px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LA ESV 2CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3219px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LA ESV 4CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3247px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LA ESV BP
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[3303px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LA ESV BP index
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[3275px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LA ESV 4CH index
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3051px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LA Ant-Pos Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3364px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RA Minor Axis
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3392px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RA Major Axis
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3420px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RA ESV 2CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3505px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RA ESA 2CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3448px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RA ESV 4CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3532px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RA ESA 4CH
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[3476px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        RAVI
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3592px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Body Weight
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3620px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Body height
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] top-[3648px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        BSA
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3676px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Systolic Pressure
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3704px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Diastolic Pressure
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3732px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Heart Rate
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3795px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        P Vein S Vel
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3823px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        P Vein D Vel
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3851px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        P Vein A Vel
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3879px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        P Vein A Dur
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[3942px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        H Vein Diam
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[4002px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        IVC Diam
      </p>
      <p className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1764px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Simpson
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1313px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PV VTI
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1341px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PV Vmax
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1369px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PV Vmean
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1397px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PV PGmax
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] top-[1425px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PV PGmean
      </p>
      <Group2 />
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1211.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">19</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1239.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">5</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1267.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">99</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1295.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">3.1</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1494.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">79</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1522.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">65</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1550.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">112</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1578.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">99</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1606.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">32</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1634.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">49</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1662.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">41</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1690.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">9</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1718.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">10</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1746.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">21</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2414.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">31</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2442.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">25</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2470.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">45</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2498.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">5</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2526.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">25</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2554.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">31</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2694.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">8.2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2582.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">40</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2722.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">16.9</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2610.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">29</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2750.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">21</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2638.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">10.5</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2778.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">23</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2666.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">213.45</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2806.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">19</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2834.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">16.1</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2862.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">1.0</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2890.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">0.6</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2918.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">4</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[2946.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3005.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">4.4</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3033.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">3.9</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3089.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">26</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3117.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">20</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3145.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">17</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3173.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">19</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3201.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">11</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3229.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">12</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3257.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">11.5</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3313.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">14</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3285.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">13</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3061.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">3.2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3374.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">30</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3402.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">45</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3430.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">12</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[258px] text-[14px] text-right text-white top-[3516px] translate-x-[-100%] translate-y-[-50%] w-[44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5]">11</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3458.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">12</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3542.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">11</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3486.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">17</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3602.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">93.3</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3630.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">185</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3658.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">1.85</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3686.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">132</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3714.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">90</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3742.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">95</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3805.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">0.5</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3833.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">0.6</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3861.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">0.4</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3889.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">120</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[3952.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">213.45</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[4012.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">213.45</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1323.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">16.8</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1351.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">0.71</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1379.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">0.52</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1407.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">5</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[258px] text-[14px] text-nowrap text-right text-white top-[1435.5px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">3</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1212px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1240px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mmHg</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1268px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ms</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1296px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">m/s2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1495px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1523px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1551px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">g</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1579px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">g/m2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1607px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">%</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1635px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1663px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1691px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1719px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1747px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2415px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2443px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2471px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2499px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2527px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2555px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2695px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2583px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">%</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2723px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2611px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mmHg</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2751px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">m</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2639px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm/s</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2779px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2667px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2807px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2835px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2863px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2891px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2919px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mmHg</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2947px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mmHg</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3006px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3034px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3090px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3118px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3146px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3174px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3202px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ml</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3230px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ml</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3258px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ml</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3314px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ml/m2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3286px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ml/m2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3062px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3375px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3403px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3431px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ml</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3516px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ml</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3459px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ml</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3543px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ml</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3487px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ml/m2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3603px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">kg</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3631px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3659px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">m2</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3687px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mmHg</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3715px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mmHg</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3743px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">bpm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3806px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3834px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3862px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3890px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">ms</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[3953px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[4013px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1324px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">cm</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1352px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1380px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">m/s</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1408px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mmHg</p>
      </div>
      <div className="absolute flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1436px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">mmHg</p>
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[41px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        10.45
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[69px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        13.5
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[43px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        cm
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[71px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        L/min/m2
      </p>
      <Group14 />
      <Group15 />
      <Group16 />
      <Group26 />
      <Group30 />
      <Group31 />
      <Group />
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[427px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[921px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[949px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[977px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1005px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1033px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1061px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1089px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1117px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1145px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1198px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1226px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1254px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1282px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1481px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1509px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1537px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1565px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1593px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1621px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1649px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1677px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1705px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1733px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2401px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2429px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2457px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2485px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2513px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2541px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2681px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2569px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2709px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2597px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2737px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2625px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2765px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2653px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2793px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2821px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2849px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2877px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2905px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2933px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2992px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3020px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3076px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3104px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3132px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3160px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3188px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3216px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3244px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3300px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3272px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3048px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3361px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3389px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3417px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3501px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3445px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3529px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3473px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3589px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3617px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3645px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3673px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3701px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3729px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3792px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3820px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3848px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3876px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3939px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[3999px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1761px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1310px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1338px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1366px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1394px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[1422px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[343px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[371px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[399px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[808px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[836px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[864px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[94px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[66px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[38px] w-[390px]" />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[-19px] w-[390px]" />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[258px] text-[14px] text-nowrap text-right text-white top-[97px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        39
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[262px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[99px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        mmHg
      </p>
      <Group1 />
      <Group19 />
      <Group3 />
      <Group20 />
      <Group21 />
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
      <Group27 />
      <Group28 />
      <Group29 />
      <Group13 />
      <Group36 />
      <Group38 />
      <Group39 />
      <Group17 />
      <Group18 />
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[77px] text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1791px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVEF BP
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[95px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[1835px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVEDV BP
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[112px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[1880px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVEDV 4CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[129px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[1924px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVd Area 4CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[129px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[1968px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVLd 4CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[112px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[2012px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVEDV 2CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[129px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[2040px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVLd Area 2CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[129px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[2068px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVLd 2CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[95px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[2096px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVESV BP
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[112px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[2124px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVESV 4CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[129px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[2152px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVs Area 4CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[129px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[2180px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVLs 4CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[112px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[2208px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVESV 2CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[129px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[2236px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVs Area 2CH
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[129px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[2264px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVLs 2CH
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2292px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVEF 4CH
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2320px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVEF 2CH
      </p>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[2348px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        LVSV BP
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[77px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1811px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Average
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[97px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1855px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Average
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[113px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1900px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Average
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[129px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1944px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Average
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[129px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[1988px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Average
      </p>
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2009px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2037px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2065px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2093px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2121px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2149px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2177px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2205px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2233px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2261px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2289px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2317px] w-[390px]" />
      <Frame property1="multiple-default" className="absolute bg-[rgba(255,255,255,0)] h-[28px] left-0 top-[2345px] w-[390px]" />
      <Commonangledown />
      <Commonangledown1 />
      <Commonangledown2 />
      <Commonangledown3 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[36px] top-[2295px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Commonangledown4 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[36px] top-[2323px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Commonangledown5 />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[36px] top-[2351px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Commonangledown6 />
        </div>
      </div>
      <Commonangledown7 />
      <Commonangledown8 />
      <Commonangledown9 />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[145px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Average
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[189px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Average
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[233px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Average
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[278px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most recent
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[322px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most recent
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[458px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        A’ Lat
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[502px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        A’ Sept
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[546px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        S’
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[590px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        S’ Lat
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[634px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        S’ Sept
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[678px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        E’ Lat
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[722px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        E’ Sept
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[766px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        E’ Avg
      </p>
      <Group37 />
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
      <Group44 />
      <Group45 />
      <Group46 />
      <Frame className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[500px] w-[390px]" />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[479px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most recent
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[523px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most recent
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[567px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most recent
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[611px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most recent
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[655px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most recent
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[699px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Average
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[743px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Average
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[60px] text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[787px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most recent
      </p>
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[122px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[166px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[210px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[254px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[298px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[455px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[499px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[543px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[587px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[631px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[675px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[719px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[763px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[1788px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[1832px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[1876px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[1920px] w-[390px]" />
      <Frame1 className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 top-[1964px] w-[390px]" />
      <Imageannotatemeasure />
      <Imageannotatemeasure1 />
      <Imageannotatemeasure2 />
      <Imageannotatemeasure3 />
      <Imageannotatemeasure4 />
      <Imageannotatemeasure5 />
      <Imageannotatemeasure6 />
      <Imageannotatemeasure7 />
      <Imageannotatemeasure8 />
      <Imageannotatemeasure9 />
      <Imageannotatemeasure10 />
      <Imageannotatemeasure11 />
      <Imageannotatemeasure12 />
      <Imageannotatemeasure13 />
      <Imageannotatemeasure14 />
      <Imageannotatemeasure15 />
      <Imageannotatemeasure16 />
      <Imageannotatemeasure17 />
      <Imageannotatemeasure18 />
    </div>
  );
}