import svgPaths from "./svg-bz65yla899";
import { img, img1, img2 } from "./svg-nml7x";
type TextFieldSelectProps = {
  className?: string;
  showLabel?: boolean;
  label?: string;
  text?: string;
  filled?: boolean;
  size?: "small" | "medium";
  state?: "idle" | "hover" | "focus" | "disabled" | "read only" | "open";
  error?: "no" | "yes";
};

/**
 * @figmaAssetKey 5273d866427b02f0f9d6dced55981a8429ff0339
 */
function TextFieldSelect({ className, showLabel = true, label = "Label", text = "Text", filled = true, size = "small", state = "idle", error = "no" }: TextFieldSelectProps) {
  if (size === "medium" && state === "idle" && error === "no") {
    return (
      <div className={className} data-name="Size=medium, State=idle, Error=no">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.6)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[35px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
                            <path d={svgPaths.p20d34372} fill="var(--fill-0, white)" fillOpacity="0.4" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && state === "idle" && error === "yes") {
    return (
      <div className={className} data-name="Size=small, State=idle, Error=yes">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f95041] text-[12.75px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[28px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border border-[rgba(248,37,18,0.5)] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
                            <path d={svgPaths.p20d34372} fill="var(--fill-0, white)" fillOpacity="0.4" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#f82512] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && state === "idle" && error === "yes") {
    return (
      <div className={className} data-name="Size=medium, State=idle, Error=yes">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f95041] text-[12.75px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[35px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border border-[rgba(248,37,18,0.5)] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
                            <path d={svgPaths.p20d34372} fill="var(--fill-0, white)" fillOpacity="0.4" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#f82512] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && state === "hover" && error === "no") {
    return (
      <div className={className} data-name="Size=small, State=hover, Error=no">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.6)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[28px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border border-[rgba(103,157,228,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(169,202,246,0.5)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && state === "hover" && error === "no") {
    return (
      <div className={className} data-name="Size=medium, State=hover, Error=no">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.6)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[35px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border border-[rgba(103,157,228,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(169,202,246,0.5)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && state === "hover" && error === "yes") {
    return (
      <div className={className} data-name="Size=small, State=hover, Error=yes">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f95041] text-[12.75px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[28px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-2 border-[rgba(248,37,18,0.7)] border-solid inset-[-2px] pointer-events-none rounded-[4px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#f82512] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && state === "hover" && error === "yes") {
    return (
      <div className={className} data-name="Size=medium, State=hover, Error=yes">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f95041] text-[12.75px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[35px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-2 border-[rgba(248,37,18,0.7)] border-solid inset-[-2px] pointer-events-none rounded-[4px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#f82512] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && state === "focus" && error === "no") {
    return (
      <div className={className} data-name="Size=small, State=focus, Error=no">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.6)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[28px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-4 border-[rgba(103,157,228,0.3)] border-solid inset-[-4px] pointer-events-none rounded-[6px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(169,202,246,0.7)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && state === "focus" && error === "no") {
    return (
      <div className={className} data-name="Size=medium, State=focus, Error=no">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.6)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[35px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-4 border-[rgba(103,157,228,0.3)] border-solid inset-[-4px] pointer-events-none rounded-[6px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(169,202,246,0.7)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && state === "focus" && error === "yes") {
    return (
      <div className={className} data-name="Size=small, State=focus, Error=yes">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f95041] text-[12.75px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[28px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-4 border-[rgba(248,37,18,0.7)] border-solid inset-[-4px] pointer-events-none rounded-[6px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#f82512] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && state === "focus" && error === "yes") {
    return (
      <div className={className} data-name="Size=medium, State=focus, Error=yes">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f95041] text-[12.75px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[35px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-4 border-[rgba(248,37,18,0.7)] border-solid inset-[-4px] pointer-events-none rounded-[6px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#f82512] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && state === "disabled" && error === "no") {
    return (
      <div className={className} data-name="Size=small, State=disabled, Error=no">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.3)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[28px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.1)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.3)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && state === "disabled" && error === "no") {
    return (
      <div className={className} data-name="Size=medium, State=disabled, Error=no">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.3)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[35px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.1)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.3)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && state === "disabled" && error === "yes") {
    return (
      <div className={className} data-name="Size=small, State=disabled, Error=yes">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.3)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[28px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.1)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.3)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#f82512] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && state === "disabled" && error === "yes") {
    return (
      <div className={className} data-name="Size=medium, State=disabled, Error=yes">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.3)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[35px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.1)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.3)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                      <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#f82512] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && state === "read only" && error === "no") {
    return (
      <div className={className} data-name="Size=small, State=read only, Error=no">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.6)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start px-0 py-px relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div className="basis-0 box-border content-stretch flex grow items-center min-h-px min-w-px overflow-clip px-0 py-[12px] relative rounded-[1px] shrink-0 w-full" data-name="text box">
            {filled && (
              <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                {text}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && state === "read only" && error === "no") {
    return (
      <div className={className} data-name="Size=medium, State=read only, Error=no">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.6)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start px-0 py-px relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div className="basis-0 box-border content-stretch flex grow items-center min-h-px min-w-px overflow-clip px-0 py-[12px] relative rounded-[1px] shrink-0 w-full" data-name="text box">
            {filled && (
              <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                {text}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && state === "read only" && error === "yes") {
    return (
      <div className={className} data-name="Size=small, State=read only, Error=yes">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f95041] text-[12.75px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start px-0 py-px relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div className="basis-0 box-border content-stretch flex grow items-center min-h-px min-w-px overflow-clip px-0 py-[12px] relative rounded-[1px] shrink-0 w-full" data-name="text box">
            {filled && (
              <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f95041] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                {text}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && state === "read only" && error === "yes") {
    return (
      <div className={className} data-name="Size=medium, State=read only, Error=yes">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f95041] text-[12.75px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start px-0 py-px relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div className="basis-0 box-border content-stretch flex grow items-center min-h-px min-w-px overflow-clip px-0 py-[12px] relative rounded-[1px] shrink-0 w-full" data-name="text box">
            {filled && (
              <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f95041] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                {text}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && state === "open" && error === "no") {
    return (
      <div className={className} data-name="Size=small, State=open, Error=no">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.6)] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[28px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-4 border-[rgba(103,157,228,0.3)] border-solid inset-[-4px] pointer-events-none rounded-[6px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle up">
                      <div className="absolute inset-[20.68%_13.83%_29.91%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(169,202,246,0.7)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute box-border content-stretch flex flex-col items-start left-0 overflow-clip px-0 py-[6px] right-0 shadow-[0px_3px_14px_2px_rgba(0,0,0,0.12),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_5px_5px_-3px_rgba(0,0,0,0.2)] top-[46px]" data-name="Dropdown list" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), linear-gradient(90deg, rgb(7, 19, 38) 0%, rgb(7, 19, 38) 100%)" }}>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 1
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 2
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 3
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 4
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 5
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 6
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && state === "open" && error === "no") {
    return (
      <div className={className} data-name="Size=medium, State=open, Error=no">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.6)] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[35px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-4 border-[rgba(103,157,228,0.3)] border-solid inset-[-4px] pointer-events-none rounded-[6px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle up">
                      <div className="absolute inset-[20.68%_13.83%_29.91%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(169,202,246,0.7)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute box-border content-stretch flex flex-col items-start left-0 overflow-clip px-0 py-[6px] right-0 shadow-[0px_3px_14px_2px_rgba(0,0,0,0.12),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_5px_5px_-3px_rgba(0,0,0,0.2)] top-[57px]" data-name="Dropdown list" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), linear-gradient(90deg, rgb(7, 19, 38) 0%, rgb(7, 19, 38) 100%)" }}>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 1
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 2
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 3
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 4
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 5
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 6
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "small" && state === "open" && error === "yes") {
    return (
      <div className={className} data-name="Size=small, State=open, Error=yes">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#f95041] text-[12.75px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[28px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-4 border-[rgba(248,37,18,0.7)] border-solid inset-[-4px] pointer-events-none rounded-[6px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle up">
                      <div className="absolute inset-[20.68%_13.83%_29.91%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#f82512] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute box-border content-stretch flex flex-col items-start left-0 overflow-clip px-0 py-[6px] right-0 shadow-[0px_3px_14px_2px_rgba(0,0,0,0.12),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_5px_5px_-3px_rgba(0,0,0,0.2)] top-[46px]" data-name="Dropdown list" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), linear-gradient(90deg, rgb(7, 19, 38) 0%, rgb(7, 19, 38) 100%)" }}>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 1
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 2
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 3
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 4
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 5
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 6
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "medium" && state === "open" && error === "yes") {
    return (
      <div className={className} data-name="Size=medium, State=open, Error=yes">
        {showLabel && (
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#f95041] text-[12.75px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {label}
          </p>
        )}
        <div className="h-[35px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-4 border-[rgba(248,37,18,0.7)] border-solid inset-[-4px] pointer-events-none rounded-[6px]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start p-px relative w-full">
              <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                    {filled && (
                      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {text}
                      </p>
                    )}
                    <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle up">
                      <div className="absolute inset-[20.68%_13.83%_29.91%_13.84%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <img alt="" className="block max-w-none size-full" src={img2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#f82512] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute box-border content-stretch flex flex-col items-start left-0 overflow-clip px-0 py-[6px] right-0 shadow-[0px_3px_14px_2px_rgba(0,0,0,0.12),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_5px_5px_-3px_rgba(0,0,0,0.2)] top-[57px]" data-name="Dropdown list" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), linear-gradient(90deg, rgb(7, 19, 38) 0%, rgb(7, 19, 38) 100%)" }}>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 1
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 2
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 3
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 4
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 5
                </p>
              </div>
            </div>
          </div>
          <div className="h-[38px] relative shrink-0 w-full" data-name="_dropdown list row">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[38px] items-center pl-[17px] pr-[3px] py-[12px] relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Option 6
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Size=small, State=idle, Error=no">
      {showLabel && (
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12.75px] text-[rgba(255,255,255,0.6)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          {label}
        </p>
      )}
      <div className="h-[28px] relative rounded-[2px] shrink-0 w-full" data-name="Container">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] h-[28px] items-start p-px relative w-full">
            <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full" data-name="text box">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[12px] relative size-full">
                  {filled && (
                    <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {text}
                    </p>
                  )}
                  <div className="overflow-clip relative shrink-0 size-[12px]" data-name="angle down">
                    <div className="absolute inset-[29.91%_13.83%_20.68%_13.84%]" data-name="Vector">
                      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
                          <path d={svgPaths.p20d34372} fill="var(--fill-0, white)" fillOpacity="0.4" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FramSec() {
  return (
    <div className="absolute h-[877px] left-0 overflow-x-clip overflow-y-auto top-[91px] w-[390px]" data-name="Fram sec">
      <div className="absolute bg-[#131f34] h-[923px] left-0 top-0 w-[390px]" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#131f34] h-[91px] left-0 top-0 w-[390px]">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      </div>
      <TextFieldSelect showLabel={false} text="Standard TTE " className="absolute content-stretch flex flex-col gap-[9px] items-start left-[19px] top-[51px] w-[357px]" />
      <div className="absolute flex flex-col font-['Open_Sans:Light',sans-serif] font-light justify-center leading-[0] left-[17px] text-[21px] text-[rgba(255,255,255,0.9)] text-nowrap top-[21px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre">Measurements</p>
      </div>
      <FramSec />
      <div className="absolute bg-[#3c73bb] box-border content-stretch flex gap-[8px] items-center justify-center left-[307px] px-[8px] py-[5px] rounded-[4px] top-[10px]" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="commands-messaging/send.16x16.light">
          <div className="absolute inset-[4.88%_6.25%_4.88%_12.5%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
                <path d={svgPaths.p27c99400} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Send
        </p>
      </div>
    </div>
  );
}