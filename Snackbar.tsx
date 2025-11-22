function ActionButton() {
  return (
    <div className="bg-[#3c73bb] box-border content-stretch flex gap-[10px] h-[26px] items-center justify-center px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="_action button">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Close
      </p>
    </div>
  );
}

export default function Snackbar() {
  return (
    <div className="bg-white relative rounded-[3px] shadow-[0px_1px_18px_0px_rgba(0,0,0,0.12),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_3px_5px_0px_rgba(0,0,0,0.2)] size-full" data-name="Snackbar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center pl-[16px] pr-[8px] py-[6px] relative size-full">
          <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[14px] text-[rgba(0,0,0,0.9)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Snack bar message
          </p>
          <ActionButton />
        </div>
      </div>
    </div>
  );
}