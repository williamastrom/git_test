import { useState } from "react";
import { X } from "lucide-react";
import svgPaths from "../imports/svg-m0x1ie0hvw";

interface MeasurementData {
  value: number;
  unit: string;
  imageId: string;
}

interface MeasurementIconMenuProps {
  measurements: MeasurementData[];
  selectedIndex: number | null;
  onSelectMeasurement: (index: number) => void;
  method?: "average" | "mostRecent" | null;
  onMethodChange?: (method: "average" | "mostRecent") => void;
  onDeleteMeasurement?: (index: number) => void;
  onNavigateToMeasurement?: (imageId: string) => void;
}

function RadioButtonIcon({ selected }: { selected: boolean }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_radio_button)">
          <path d={svgPaths.p3c62eff0} fill="black" fillOpacity="0.5" />
          {selected && <path d={svgPaths.p121c4800} fill="white" fillOpacity="0.9" />}
          <path d={svgPaths.p1b94b000} fill="white" fillOpacity="0.6" />
        </g>
        <defs>
          <clipPath id="clip0_radio_button">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageViewCrosshair() {
  return (
    <div className="inset-[21.43%] absolute">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_crosshair)">
          <path d={svgPaths.p914b880} fill="white" fillOpacity="0.6" />
          <path d={svgPaths.p39866880} fill="white" fillOpacity="0.6" />
        </g>
        <defs>
          <clipPath id="clip0_crosshair">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function MeasurementIconMenu({ 
  measurements, 
  selectedIndex, 
  onSelectMeasurement,
  method: controlledMethod,
  onMethodChange,
  onDeleteMeasurement,
  onNavigateToMeasurement 
}: MeasurementIconMenuProps) {
  const [localMethod, setLocalMethod] = useState<"average" | "mostRecent" | null>(null);
  const method = controlledMethod !== undefined ? controlledMethod : localMethod;

  // Don't show the menu if there are no measurements
  if (measurements.length === 0) {
    return (
      <div className="w-[220px] bg-[#030e1f] rounded-[2px] border border-[rgba(255,255,255,0.15)] p-4">
        <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[rgba(255,255,255,0.6)] text-center">
          No measurements yet
        </p>
      </div>
    );
  }

  return (
    <div className="w-[220px] bg-[#030e1f] rounded-[2px] border border-[rgba(255,255,255,0.15)] p-0">
      {/* Measurements List */}
      <div className="pt-[5px]">
        {measurements.map((measurement, index) => (
          <div
            key={index}
            className={`h-[40px] flex items-center pl-[18px] pr-[12px] cursor-pointer transition-colors hover:bg-white/5 relative ${
              selectedIndex === index ? 'bg-[rgba(60,115,187,0.3)]' : ''
            }`}
            onClick={() => onSelectMeasurement(index)}
          >
            {/* Left adornment when selected */}
            {selectedIndex === index && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#679de4]" />
            )}
            {/* Value and Unit */}
            <div className="flex items-center gap-1 flex-1">
              <span 
                className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[rgba(255,255,255,0.9)]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {measurement.value}
              </span>
              <span 
                className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[rgba(255,255,255,0.6)]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {measurement.unit}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1 ml-auto">
              {/* Crosshair Button */}
              <button
                className="size-[28px] rounded-[3px] hover:bg-white/10 transition-colors relative"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onNavigateToMeasurement) {
                    onNavigateToMeasurement(measurement.imageId);
                  }
                }}
              >
                <ImageViewCrosshair />
              </button>

              {/* Divider */}
              <div className="w-px h-[16px] bg-[rgba(255,255,255,0.15)]" />

              {/* Delete Button */}
              <button
                className="size-[28px] rounded-[3px] hover:bg-white/10 transition-colors flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onDeleteMeasurement) {
                    onDeleteMeasurement(index);
                  }
                }}
              >
                <X className="size-4" strokeWidth={1.5} color="rgba(255,255,255,0.6)" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-[rgba(255,255,255,0.15)] mx-[6px] my-[10px]" />

      {/* Method Section */}
      <div className="px-[18px] pb-[18px]">
        <p 
          className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[rgba(255,255,255,0.6)] mb-3"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Method
        </p>

        {/* Radio Options */}
        <div className="space-y-[9px]">
          <button
            className="flex items-center gap-2 hover:bg-white/5 w-full py-1 px-0 transition-colors"
            onClick={() => {
              if (onMethodChange) {
                onMethodChange("average");
              } else {
                setLocalMethod("average");
              }
            }}
          >
            <RadioButtonIcon selected={method === "average"} />
            <p 
              className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[rgba(255,255,255,0.9)]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Average
            </p>
          </button>

          <button
            className="flex items-center gap-2 hover:bg-white/5 w-full py-1 px-0 transition-colors"
            onClick={() => {
              if (onMethodChange) {
                onMethodChange("mostRecent");
              } else {
                setLocalMethod("mostRecent");
              }
            }}
          >
            <RadioButtonIcon selected={method === "mostRecent"} />
            <p 
              className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[rgba(255,255,255,0.9)]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Most recent
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
