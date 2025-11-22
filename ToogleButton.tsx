function Text() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        All
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Stress
      </p>
    </div>
  );
}

function ButtonArea() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="button area">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <div className="basis-0 content-stretch flex grow h-full items-center justify-between min-h-px min-w-px overflow-clip relative shrink-0" data-name="_toggle button button">
          <Text />
        </div>
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="_toggle button button">
          <div className="content-stretch flex items-center justify-between overflow-clip relative rounded-[inherit] size-full">
            <div className="bg-[rgba(255,255,255,0.3)] h-full shrink-0 w-px" data-name="divider" />
            <Text1 />
            <div className="bg-[rgba(255,255,255,0.3)] h-full shrink-0 w-px" data-name="divider" />
          </div>
          <div aria-hidden="true" className="absolute border-[#679de4] border-[0px_0px_3px] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Frame289() {
  return (
    <div className="h-[28px] relative rounded-[2px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start p-px relative w-full">
          <ButtonArea />
        </div>
      </div>
    </div>
  );
}

export default function ToogleButton() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative size-full" data-name="Toogle button">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18.328px] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.6)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Image type
      </p>
      <Frame289 />
    </div>
  );
}