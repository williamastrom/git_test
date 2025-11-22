import svgPaths from "./svg-fjr20w0zzd";

function Frame() {
  return (
    <div className="absolute inset-0" data-name="Frame">
      <div className="absolute left-1/2 size-[14px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Secondary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path clipRule="evenodd" d={svgPaths.pdb8ae00} fill="var(--fill-0, white)" fillOpacity="0.6" fillRule="evenodd" id="Secondary" />
        </svg>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.9)] left-1/2 rounded-[4px] size-[8px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Primary" />
    </div>
  );
}

function IconPlaceholder() {
  return (
    <div className="absolute left-[15px] overflow-clip size-[16px] top-[11px]" data-name="icon placeholder">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-0" data-name="Frame">
      <div className="absolute left-1/2 size-[14px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Secondary">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path clipRule="evenodd" d={svgPaths.pdb8ae00} fill="var(--fill-0, white)" fillOpacity="0.6" fillRule="evenodd" id="Secondary" />
        </svg>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.9)] left-1/2 rounded-[4px] size-[8px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Primary" />
    </div>
  );
}

function IconPlaceholder1() {
  return (
    <div className="absolute left-[15px] overflow-clip size-[16px] top-[40px]" data-name="icon placeholder">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return <div className="absolute h-[28px] left-px top-[5px] w-[174px]" />;
}

function Frame4() {
  return <div className="absolute h-[28px] left-px top-[34px] w-[174px]" />;
}

export default function Frame2() {
  return (
    <div className="bg-[#030e1f] relative size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] left-[42px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[9px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Align speed sync
      </p>
      <p className="absolute font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] left-[42px] text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap top-[38px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Start-time sync
      </p>
      <IconPlaceholder />
      <IconPlaceholder1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}