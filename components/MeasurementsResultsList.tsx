import { useState } from 'react';
import { ChevronDown, ChevronUp, List } from 'lucide-react';

interface Measurement {
  id: string;
  imageId: string;
  startPoint: { x: number; y: number };
  endPoint: { x: number; y: number };
  distance: number;
  label?: string;
}

interface MeasurementsResultsListProps {
  measurements: Measurement[];
  onSelectMeasurement: (index: number | null) => void;
  selectedMeasurementIndex: number | null;
}

export function MeasurementsResultsList({
  measurements,
  onSelectMeasurement,
  selectedMeasurementIndex,
}: MeasurementsResultsListProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  if (measurements.length === 0) {
    return null;
  }

  if (!isExpanded) {
    return (
      <div
        className="absolute right-[16px] top-[16px] z-10 size-[28px] rounded-[2px] bg-[#131f34] border border-[rgba(255,255,255,0.15)] flex items-center justify-center cursor-pointer hover:bg-[#1a2943] transition-colors"
        onClick={() => setIsExpanded(true)}
      >
        <List className="size-[14px] text-white/90" />
      </div>
    );
  }

  return (
    <div className="absolute right-[16px] top-[16px] z-10 rounded-[2px] bg-[#131f34] border border-[rgba(255,255,255,0.15)] min-w-[235px]">
      {/* Header */}
      <div className="h-[38px] flex items-center justify-between px-3 border-b border-[rgba(255,255,255,0.15)]">
        <span className="text-white/90 text-[12px] font-['Open_Sans',sans-serif]">
          Results
        </span>
        <button
          onClick={() => setIsExpanded(false)}
          className="size-[16px] flex items-center justify-center hover:bg-white/10 rounded transition-colors"
        >
          <ChevronDown className="size-[14px] text-white/60" />
        </button>
      </div>

      {/* Measurements List */}
      <div className="max-h-[300px] overflow-y-auto">
        {measurements.map((measurement, index) => (
          <div
            key={measurement.id}
            onClick={() => onSelectMeasurement(index)}
            className={`h-[26px] flex items-center justify-between px-3 cursor-pointer transition-colors ${
              selectedMeasurementIndex === index
                ? 'bg-[#28374F]'
                : 'hover:bg-[#28374F]/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-[12px] font-['Open_Sans',sans-serif] w-[12px]">
                {index + 1}
              </span>
              <span className="text-white/90 text-[12px] font-['Open_Sans',sans-serif]">
                {measurement.label || 'Distance'}
              </span>
            </div>
            <span className="text-white/90 text-[12px] font-['Open_Sans',sans-serif]">
              {measurement.distance.toFixed(2)} mm
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
