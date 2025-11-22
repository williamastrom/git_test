import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import svgPaths from "../imports/svg-bz65yla899";
import ImageAnnotateMeasure from "../imports/ImageAnnotateMeasure";
import { MeasurementIconMenu } from "./MeasurementIconMenu";

interface MeasurementItem {
  label: string;
  value?: string | number;
  unit?: string;
  subtext?: string;
  isItalic?: boolean;
}

interface MeasurementCategory {
  name: string;
  items: MeasurementItem[];
}

const measurementCategories: MeasurementCategory[] = [
  {
    name: "Aorta",
    items: [
      { label: "Ao Ann Diam", value: 29, unit: "mm" },
      { label: "Ao STJ diam", value: 25, unit: "mm" },
      { label: "Ao SoV Diam", value: 42, unit: "mm" },
      { label: "Ao Asc Diam", value: 30, unit: "mm" },
      { label: "Ao Arch Diam", value: 25, unit: "mm" },
      { label: "Ao Desc Diam", value: 27, unit: "mm" },
      { label: "Ao Dec Vmax", value: 29, unit: "m/s" },
    ]
  },
  {
    name: "Aortic Valve",
    items: [
      { label: "AV Dec Time", value: 29, unit: "ms" },
      { label: "AV Dec Slope", value: 3.5, unit: "m/s2" },
      { label: "AV PHT", value: 340, unit: "ms" },
      { label: "AV Acc Time", value: 84, unit: "ms" },
      { label: "AV VTI", value: 21.12, unit: "cm" },
      { label: "AV Vmax", value: 1.5, unit: "m/s" },
      { label: "AV Vmean", value: 1.2, unit: "m/s" },
      { label: "AV PGmax", value: 13.5, unit: "mmHg" },
      { label: "AV PGmean", value: 9.9, unit: "mmHg" },
      { label: "LVOT VTI", value: 21.4, unit: "cm" },
      { label: "LVOT Vmax", value: 1.4, unit: "m/s", subtext: "Most recent" },
      { label: "LVOT Vmean", value: 1.1, unit: "m/s" },
      { label: "LVOT PGmax", value: 12.6, unit: "m/s" },
      { label: "LVOT PGmean", value: 11.1, unit: "m/s" },
      { label: "LVOT SV", value: 79.3, unit: "ml", isItalic: true, subtext: "Average" },
      { label: "IVRT", value: 60, unit: "ms" },
      { label: "AVA (VTI)", value: 1.5, unit: "cm²", isItalic: true },
      { label: "AVAI (VTI)", value: 0.6, unit: "cm²/m²", isItalic: true },
    ]
  },
  {
    name: "Mitral valve",
    items: [
      { label: "MV VTI", value: 10.45, unit: "cm" },
      { label: "MV PGmax", value: 13.5, unit: "L/min/m2" },
      { label: "MV PGmean", value: 39, unit: "mmHg" },
      { label: "MV Vmax", value: 45, unit: "cm/s", subtext: "Average" },
      { label: "MV Vmean", value: 45, unit: "cm/s", subtext: "Average" },
      { label: "MV Dec Slope", value: 15, unit: "cm/s", subtext: "Average" },
      { label: "MV Dec Time", value: 8, unit: "cm/s2", subtext: "Most recent" },
      { label: "MV PHT", value: 9, unit: "ms", subtext: "Most recent" },
      { label: "MV E Vel", value: 9, unit: "m/s" },
      { label: "MV A Vel", value: 9, unit: "m/s" },
      { label: "MV A Dur", value: 9, unit: "ms" },
      { label: "MV E/A Ratio", value: 23.45, isItalic: true },
      { label: "A' Lat", value: 9, unit: "ms", subtext: "Most recent" },
      { label: "A' Sept", value: 9, unit: "ms", subtext: "Most recent" },
      { label: "S'", value: 9, unit: "ms", subtext: "Most recent" },
      { label: "S' Lat", value: 9, unit: "ms", subtext: "Most recent" },
      { label: "S' Sept", value: 9, unit: "ms", subtext: "Most recent" },
      { label: "E' Lat", value: 9, unit: "ms", subtext: "Average" },
      { label: "E' Sept", value: 9, unit: "ms", subtext: "Average" },
      { label: "E' Avg", value: 9, unit: "ms", subtext: "Most recent" },
      { label: "E/E' Ratio", value: 7.2, isItalic: true },
      { label: "MVA (VTI)", value: 7.2, unit: "cm²", isItalic: true },
      { label: "MVAI (VTI)", value: 7.2, unit: "cm²/m²", isItalic: true },
    ]
  },
  {
    name: "Tricuspid Valve",
    items: [
      { label: "TV Dec Time", value: 23.9, unit: "ms" },
      { label: "TV Dec Slope", value: 3.6, unit: "m/s2" },
      { label: "TV PHT", value: 3.5, unit: "ms" },
      { label: "TAPSE", value: 9.45, unit: "mm" },
      { label: "TV E Vel", value: 3.45, unit: "m/s" },
      { label: "TV A Vel", value: 2.45, unit: "m/s" },
      { label: "TV E/A Ratio", value: 3.45, isItalic: true },
      { label: "TV VTI", value: 23.45, unit: "cm" },
      { label: "TV Vmax", value: 213.45, unit: "m/s" },
    ]
  },
  {
    name: "Pulmonic",
    items: [
      { label: "PA Diam", value: 19, unit: "mm" },
      { label: "Estimated RAP", value: 5, unit: "mmHg" },
      { label: "PV Acc Time", value: 99, unit: "ms" },
      { label: "PV Acc Slope", value: 3.1, unit: "m/s2" },
      { label: "PV VTI", value: 16.8, unit: "cm" },
      { label: "PV Vmax", value: 0.71, unit: "m/s" },
      { label: "PV Vmean", value: 0.52, unit: "m/s" },
      { label: "PV PGmax", value: 5, unit: "mmHg" },
      { label: "PV PGmean", value: 3, unit: "mmHg" },
    ]
  },
  {
    name: "Left Ventricle",
    items: [
      { label: "IVSd", value: 79, unit: "mm" },
      { label: "IVSs", value: 65, unit: "mm" },
      { label: "LV Mass", value: 112, unit: "g", isItalic: true },
      { label: "LVMI", value: 99, unit: "g/m2", isItalic: true },
      { label: "LV FS", value: 32, unit: "%", isItalic: true },
      { label: "LVIDd", value: 49, unit: "mm" },
      { label: "LVIDs", value: 41, unit: "mm" },
      { label: "LVPWd", value: 9, unit: "mm" },
      { label: "LVSWd", value: 10, unit: "mm" },
      { label: "LVOT Diam", value: 21, unit: "mm" },
    ]
  },
  {
    name: "Simpson",
    items: [
      { label: "LVEF BP", value: 1.4, unit: "m/s", isItalic: true, subtext: "Average" },
      { label: "LVEDV BP", value: 1.4, unit: "m/s", subtext: "Average" },
      { label: "LVEDV 4CH", value: 1.4, unit: "m/s", subtext: "Average" },
      { label: "LVd Area 4CH", value: 1.4, unit: "m/s", subtext: "Average" },
      { label: "LVLd 4CH", value: 1.4, unit: "m/s", subtext: "Average" },
      { label: "LVEDV 2CH", value: 1.4, unit: "m/s" },
      { label: "LVLd Area 2CH", value: 1.4, unit: "m/s" },
      { label: "LVLd 2CH", value: 1.4, unit: "m/s" },
      { label: "LVESV BP", value: 1.4, unit: "m/s" },
      { label: "LVESV 4CH", value: 1.4, unit: "m/s" },
      { label: "LVs Area 4CH", value: 1.4, unit: "m/s" },
      { label: "LVLs 4CH", value: 1.4, unit: "m/s" },
      { label: "LVESV 2CH", value: 1.4, unit: "m/s" },
      { label: "LVs Area 2CH", value: 1.4, unit: "m/s" },
      { label: "LVLs 2CH", value: 1.4, unit: "m/s" },
      { label: "LVEF 4CH", value: 1.4, unit: "m/s", isItalic: true },
      { label: "LVEF 2CH", value: 1.4, unit: "m/s", isItalic: true },
      { label: "LVSV BP", value: 1.4, unit: "m/s", isItalic: true },
    ]
  },
  {
    name: "Right Ventricle",
    items: [
      { label: "RV Basal Diam", value: 31, unit: "mm" },
      { label: "RV Mid Diam", value: 25, unit: "mm" },
      { label: "RVLd", value: 45, unit: "mm" },
      { label: "RV Wall Thickness", value: 5, unit: "mm" },
      { label: "RVIDd", value: 25, unit: "mm" },
      { label: "RVIDs", value: 31, unit: "mm" },
      { label: "RV FAC", value: 40, unit: "%" },
      { label: "RVSP", value: 29, unit: "mmHg", isItalic: true },
      { label: "RV S'", value: 10.5, unit: "cm/s" },
      { label: "RV derived measu...", value: 213.45, unit: "mm", isItalic: true },
      { label: "RV ESA 4CH", value: 8.2, unit: "cm2" },
      { label: "RV EDA 4CH", value: 16.9, unit: "cm2" },
      { label: "RVOT Diam", value: 21, unit: "m" },
      { label: "RVOT Prox Diam", value: 23, unit: "mm" },
      { label: "RVOT Dist Diam", value: 19, unit: "mm" },
      { label: "RVOT VTI", value: 16.1, unit: "cm" },
      { label: "RVOT Vmax", value: 1.0, unit: "m/s" },
      { label: "RVOT Vmean", value: 0.6, unit: "m/s" },
      { label: "RVOT PGmax", value: 4, unit: "mmHg" },
      { label: "RVOT PGmean", value: 2, unit: "mmHg" },
    ]
  },
  {
    name: "Left Atrium",
    items: [
      { label: "LAs Diam", value: 4.4, unit: "cm" },
      { label: "LAd Diam", value: 3.9, unit: "cm" },
      { label: "LA Ant-Pos Diam", value: 3.2, unit: "cm" },
      { label: "LAd Area 2CH", value: 26, unit: "cm2" },
      { label: "LAs Area 2CH", value: 20, unit: "cm2" },
      { label: "LAd Area 4CH", value: 17, unit: "cm2" },
      { label: "LAs Area 4CH", value: 19, unit: "cm2" },
      { label: "LA ESV 2CH", value: 11, unit: "ml" },
      { label: "LA ESV 4CH", value: 12, unit: "ml" },
      { label: "LA ESV BP", value: 11.5, unit: "ml" },
      { label: "LA ESV 4CH index", value: 13, unit: "ml/m2", isItalic: true },
      { label: "LA ESV BP index", value: 14, unit: "ml/m2", isItalic: true },
    ]
  },
  {
    name: "Right Atrium",
    items: [
      { label: "RA Minor Axis", value: 30, unit: "mm" },
      { label: "RA Major Axis", value: 45, unit: "mm" },
      { label: "RA ESV 2CH", value: 12, unit: "ml" },
      { label: "RA ESV 4CH", value: 12, unit: "ml" },
      { label: "RAVI", value: 17, unit: "ml/m2", isItalic: true },
      { label: "RA ESA 2CH", value: 11, unit: "ml" },
      { label: "RA ESA 4CH", value: 11, unit: "ml" },
    ]
  },
  {
    name: "Patient Characteristics",
    items: [
      { label: "Body Weight", value: 93.3, unit: "kg" },
      { label: "Body height", value: 185, unit: "cm" },
      { label: "BSA", value: 1.85, unit: "m2", isItalic: true },
      { label: "Systolic Pressure", value: 132, unit: "mmHg" },
      { label: "Diastolic Pressure", value: 90, unit: "mmHg" },
      { label: "Heart Rate", value: 95, unit: "bpm" },
    ]
  },
  {
    name: "Pulmonary Vein",
    items: [
      { label: "P Vein S Vel", value: 0.5, unit: "m/s" },
      { label: "P Vein D Vel", value: 0.6, unit: "m/s" },
      { label: "P Vein A Vel", value: 0.4, unit: "m/s" },
      { label: "P Vein A Dur", value: 120, unit: "ms" },
    ]
  },
  {
    name: "Hepatic Vein",
    items: [
      { label: "H Vein Diam", value: 213.45, unit: "mm" },
    ]
  },
  {
    name: "Inferior Vena Cava",
    items: [
      { label: "IVC Diam", value: 213.45, unit: "mm" },
    ]
  }
];

// Stress Echo measurement categories organized by stages
const stressEchoCategories: MeasurementCategory[] = [
  {
    name: "Baseline",
    items: []
  },
  {
    name: "Baseline > Aorta",
    items: [
      { label: "Ao Ann Diam Baseline", value: 29, unit: "mm" },
      { label: "Ao STJ diam Baseline", value: 25, unit: "mm" },
      { label: "Ao SoV Diam Baseline", value: 42, unit: "mm" },
      { label: "Ao Asc Diam Baseline" },
      { label: "Ao Arch Diam Baseline" },
      { label: "Ao Desc Diam Baseline" },
      { label: "Ao Dec Vmax Baseline" },
    ]
  },
  {
    name: "Baseline > Aortic Valve",
    items: [
      { label: "LVOT VTI Baseline", value: 21.4, unit: "cm" },
      { label: "LVOT Vmax Baseline", value: 1.4, unit: "m/s" },
      { label: "LVOT Vmean Baseline", value: 1.1, unit: "m/s" },
      { label: "LVOT PGmax Baseline", value: 12.6, unit: "m/s" },
      { label: "LVOT PGmean Baseline", value: 11.1, unit: "m/s" },
      { label: "LVOT SV Baseline", value: 79.3, unit: "ml", isItalic: true },
      { label: "IVRT Baseline", value: 60, unit: "ms" },
      { label: "AVA (VTI) Baseline", value: 1.5, unit: "cm²", isItalic: true },
      { label: "AVAI (VTI) Baseline", value: 0.6, unit: "cm²/m²", isItalic: true },
    ]
  },
  {
    name: "Baseline > Mitral valve",
    items: []
  },
  {
    name: "Baseline > Tricuspid Valve",
    items: []
  },
  {
    name: "Baseline > Pulmonic",
    items: []
  },
  {
    name: "Baseline > Left Ventricle",
    items: []
  },
  {
    name: "Pre Peak",
    items: []
  },
  {
    name: "Peak",
    items: []
  },
  {
    name: "Peak > Aorta",
    items: [
      { label: "Ao Ann Diam Peak", value: 29, unit: "mm" },
      { label: "Ao STJ diam Peak", value: 25, unit: "mm" },
      { label: "Ao SoV Diam Peak", value: 42, unit: "mm" },
      { label: "Ao Asc Diam Peak" },
      { label: "Ao Arch Diam Peak" },
      { label: "Ao Desc Diam Peak" },
      { label: "Ao Dec Vmax Peak" },
    ]
  },
  {
    name: "Peak > Aortic Valve",
    items: []
  },
  {
    name: "Peak > Mitral Valve",
    items: []
  },
  {
    name: "Peak > Tricuspid Valve",
    items: []
  },
  {
    name: "Peak > Pulmonic",
    items: []
  },
  {
    name: "Peak > Left Ventricle",
    items: []
  },
  {
    name: "Post",
    items: []
  },
];

interface PanelMeasurement {
  value: number;
  unit: string;
  date: string;
  time: string;
  imageId: string;
}

interface MeasurementsPanelProps {
  onMeasurementItemClick?: (label: string) => void;
  panelMeasurements?: Record<string, PanelMeasurement[]>;
  onDeletePanelMeasurement?: (label: string, index: number) => void;
  activeMeasurementLabel?: string | null;
  onNavigateToMeasurement?: (imageId: string) => void;
}

export function MeasurementsPanel({ onMeasurementItemClick, panelMeasurements = {}, onDeletePanelMeasurement, activeMeasurementLabel, onNavigateToMeasurement }: MeasurementsPanelProps) {
  const [selectedView, setSelectedView] = useState<string>("standard-tte");
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [openMenuKey, setOpenMenuKey] = useState<string | null>(null);
  // Track selected measurement index for each item: key is "categoryName:itemLabel", value is index
  const [selectedMeasurements, setSelectedMeasurements] = useState<Map<string, number>>(new Map());
  // Track method for each item: key is "categoryName:itemLabel", value is "average" | "mostRecent"
  const [measurementMethods, setMeasurementMethods] = useState<Map<string, "average" | "mostRecent">>(new Map());

  const toggleSection = (sectionName: string) => {
    setOpenSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const toggleItem = (categoryName: string, itemLabel: string) => {
    const itemKey = `${categoryName}:${itemLabel}`;
    
    // If clicking on a measurement item that can be measured (items with "Diam" or "AV VTI"), activate the distance tool
    if (onMeasurementItemClick && (itemLabel.toLowerCase().includes("diam") || itemLabel === "AV VTI")) {
      onMeasurementItemClick(itemLabel);
      // Don't toggle the selection state for items that can be measured
      // The selection will be controlled by activeMeasurementLabel
      return;
    }
    
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemKey)) {
        newSet.delete(itemKey);
      } else {
        newSet.add(itemKey);
      }
      return newSet;
    });
  };

  const isItemSelected = (categoryName: string, itemLabel: string) => {
    // For measurable items (items with "Diam" or "AV VTI"), only show selected if it's the active measurement label
    if (itemLabel.toLowerCase().includes("diam") || itemLabel === "AV VTI") {
      return itemLabel === activeMeasurementLabel;
    }
    
    // For other items, use the selectedItems set
    return selectedItems.has(`${categoryName}:${itemLabel}`);
  };

  const isMenuOpen = (categoryName: string, itemLabel: string) => {
    return openMenuKey === `${categoryName}:${itemLabel}`;
  };

  const getSelectedMeasurementIndex = (categoryName: string, itemLabel: string) => {
    return selectedMeasurements.get(`${categoryName}:${itemLabel}`) ?? null;
  };

  const handleSelectMeasurement = (categoryName: string, itemLabel: string, index: number) => {
    const itemKey = `${categoryName}:${itemLabel}`;
    setSelectedMeasurements(prev => {
      const newMap = new Map(prev);
      newMap.set(itemKey, index);
      return newMap;
    });
    
    // When a specific measurement is selected, clear the method selection
    setMeasurementMethods(prev => {
      const newMap = new Map(prev);
      newMap.delete(itemKey);
      return newMap;
    });
  };

  const handleMethodChange = (categoryName: string, itemLabel: string, method: "average" | "mostRecent") => {
    const itemKey = `${categoryName}:${itemLabel}`;
    setMeasurementMethods(prev => {
      const newMap = new Map(prev);
      newMap.set(itemKey, method);
      return newMap;
    });
    
    // If average is selected, clear the selected measurement index
    if (method === "average") {
      setSelectedMeasurements(prev => {
        const newMap = new Map(prev);
        newMap.delete(itemKey);
        return newMap;
      });
    }
  };

  const getMeasurementMethod = (categoryName: string, itemLabel: string): "average" | "mostRecent" | null => {
    return measurementMethods.get(`${categoryName}:${itemLabel}`) ?? null;
  };

  // Get measurements for a specific item
  const getItemMeasurements = (itemLabel: string): { value: number; unit: string; imageId: string }[] => {
    const measurements = panelMeasurements[itemLabel] || [];
    return measurements.map(m => ({ value: m.value, unit: m.unit, imageId: m.imageId }));
  };

  // Get the displayed value for an item (either selected measurement, average, or default value)
  const getDisplayValue = (category: MeasurementCategory, item: MeasurementItem) => {
    // Only apply for items with measurement menu (items with "Diam" in their name or "AV VTI")
    if (item.label.toLowerCase().includes("diam") || item.label === "AV VTI") {
      const itemMeasurements = getItemMeasurements(item.label);
      
      // If no measurements exist, return empty (no value/unit to display)
      if (itemMeasurements.length === 0) {
        return { value: undefined, unit: undefined };
      }
      
      const method = getMeasurementMethod(category.name, item.label);
      
      if (method === "average") {
        // Calculate average of all measurements
        const sum = itemMeasurements.reduce((acc, m) => acc + m.value, 0);
        const average = sum / itemMeasurements.length;
        return { 
          value: Number(average.toFixed(1)), 
          unit: itemMeasurements[0].unit 
        };
      }
      
      const selectedIndex = getSelectedMeasurementIndex(category.name, item.label);
      if (selectedIndex !== null && selectedIndex < itemMeasurements.length) {
        return itemMeasurements[selectedIndex];
      }
      
      // If method is "mostRecent" or no selection, show the most recent (last) measurement
      if (method === "mostRecent" || selectedIndex === null) {
        return itemMeasurements[itemMeasurements.length - 1];
      }
    }
    
    return { value: item.value, unit: item.unit };
  };

  return (
    <div className="w-[390px] h-full bg-[#131f34] border-l border-white/30 flex flex-col">
      {/* Header */}
      <div className="border-b border-white/30 px-[17px] flex flex-col gap-3 py-4">
        <div className="flex items-center justify-between">
          <h2 
            className="font-['Open_Sans:Light',sans-serif] font-light text-[21px] text-[rgba(255,255,255,0.9)]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Measurements
          </h2>
          <Button 
            className="bg-[#3c73bb] hover:bg-[#2d5a92] h-auto px-2 py-1.5 gap-2 rounded"
          >
            <div className="size-4" data-name="commands-messaging/send.16x16.light">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
                <path d={svgPaths.p27c99400} fill="white" />
              </svg>
            </div>
            <span 
              className="font-['Open_Sans:SemiBold',sans-serif] font-semibold text-[12px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Send
            </span>
          </Button>
        </div>
        
        {/* Dropdown */}
        <div className="w-full">
          <Select value={selectedView} onValueChange={setSelectedView}>
            <SelectTrigger className="w-full h-[28px] bg-[rgba(0,0,0,0.5)] border-[rgba(255,255,255,0.3)] text-[rgba(255,255,255,0.9)] text-[14px] font-['Open_Sans:Regular',sans-serif]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#071326] border-[rgba(255,255,255,0.3)]">
              <SelectItem value="standard-tte" className="text-[rgba(255,255,255,0.9)] focus:bg-white/10">
                Standard TTE
              </SelectItem>
              <SelectItem value="stress-echo" className="text-[rgba(255,255,255,0.9)] focus:bg-white/10">
                Stress Echo
              </SelectItem>
              <SelectItem value="tee" className="text-[rgba(255,255,255,0.9)] focus:bg-white/10">
                TEE
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Content Area - Tree View */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {(selectedView === "stress-echo" ? stressEchoCategories : measurementCategories)
          .filter((category) => {
            // If it's a child category (contains '>'), only show if parent is open
            if (category.name.includes('>')) {
              const parentName = category.name.split('>')[0].trim();
              return openSections.includes(parentName);
            }
            // Always show parent categories
            return true;
          })
          .map((category) => (
          <Collapsible
            key={category.name}
            open={openSections.includes(category.name)}
            onOpenChange={() => toggleSection(category.name)}
          >
            {/* Category Header */}
            <CollapsibleTrigger 
              className="w-full flex items-center gap-2 h-[28px] hover:bg-white/5 transition-colors"
              style={{
                paddingLeft: category.name.includes('>') ? '56px' : '17px'
              }}
            >
              <ChevronRight 
                className={`size-4 text-white/90 transition-transform ${
                  openSections.includes(category.name) ? 'rotate-90' : ''
                }`}
              />
              <span 
                className="font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[rgba(255,255,255,0.9)]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {category.name.includes('>') ? category.name.split('>')[1].trim() : category.name}
              </span>
            </CollapsibleTrigger>

            {/* Category Items */}
            <CollapsibleContent>
              {category.items.map((item, index) => {
                const selected = isItemSelected(category.name, item.label);
                return (
                  <div key={index}>
                    <div 
                      className={`h-[28px] flex items-center justify-between pr-[17px] hover:bg-white/5 transition-colors cursor-pointer relative ${
                        selected ? 'bg-[rgba(60,115,187,0.3)]' : ''
                      }`}
                      onClick={() => toggleItem(category.name, item.label)}
                    >
                      {/* Left adornment when selected */}
                      {selected && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#679de4]" />
                      )}
                      
                      <div 
                        className="flex items-center gap-2 flex-1"
                        style={{
                          paddingLeft: category.name.includes('>') ? '96px' : '60px'
                        }}
                      >
                        <span 
                          className={`text-[14px] ${
                            item.isItalic 
                              ? "font-['Open_Sans:Italic',sans-serif] italic text-[rgba(255,255,255,0.6)]"
                              : "font-['Open_Sans:Regular',sans-serif] text-[rgba(255,255,255,0.9)]"
                          }`}
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {item.label}
                        </span>
                        <div className="flex items-center gap-3 ml-auto">
                          {(() => {
                            const displayValue = getDisplayValue(category, item);
                            if (displayValue.value !== undefined) {
                              return (
                                <div className="flex items-center gap-1">
                                  <span 
                                    className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-white"
                                    style={{ fontVariationSettings: "'wdth' 100" }}
                                  >
                                    {displayValue.value}
                                  </span>
                                  {displayValue.unit && (
                                    <span 
                                      className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[rgba(255,255,255,0.6)]"
                                      style={{ fontVariationSettings: "'wdth' 100" }}
                                      dangerouslySetInnerHTML={{ __html: displayValue.unit.replace('²', '<sup>2</sup>') }}
                                    />
                                  )}
                                </div>
                              );
                            }
                            if (displayValue.value === undefined && displayValue.unit) {
                              return (
                                <span 
                                  className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[rgba(255,255,255,0.6)]"
                                  style={{ fontVariationSettings: "'wdth' 100" }}
                                  dangerouslySetInnerHTML={{ __html: displayValue.unit.replace('²', '<sup>2</sup>') }}
                                />
                              );
                            }
                            return null;
                          })()}
                          {/* Icon column - only show for items with "Diam" in their name or "AV VTI" AND have measurements */}
                          {(item.label.toLowerCase().includes("diam") || item.label === "AV VTI") && 
                           panelMeasurements[item.label] && 
                           panelMeasurements[item.label].length > 0 ? (
                            <Popover 
                              open={isMenuOpen(category.name, item.label)}
                              onOpenChange={(open) => {
                                setOpenMenuKey(open ? `${category.name}:${item.label}` : null);
                              }}
                            >
                              <PopoverTrigger asChild>
                                <button
                                  className={`relative w-6 h-6 flex items-center justify-center rounded-[2px] transition-colors hover:bg-white/10 ${
                                    isMenuOpen(category.name, item.label) ? 'bg-[rgba(103,157,228,0.3)]' : ''
                                  }`}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <div className="w-4 h-4">
                                    <ImageAnnotateMeasure />
                                  </div>
                                </button>
                              </PopoverTrigger>
                              <PopoverContent 
                                className="w-auto p-0 border-0 bg-transparent shadow-none"
                                side="bottom"
                                align="end"
                                sideOffset={4}
                              >
                                <MeasurementIconMenu 
                                  measurements={getItemMeasurements(item.label)}
                                  selectedIndex={getSelectedMeasurementIndex(category.name, item.label)}
                                  onSelectMeasurement={(index) => handleSelectMeasurement(category.name, item.label, index)}
                                  method={getMeasurementMethod(category.name, item.label)}
                                  onMethodChange={(method) => handleMethodChange(category.name, item.label, method)}
                                  onDeleteMeasurement={(index) => {
                                    if (onDeletePanelMeasurement) {
                                      onDeletePanelMeasurement(item.label, index);
                                    }
                                  }}
                                  onNavigateToMeasurement={onNavigateToMeasurement}
                                />
                              </PopoverContent>
                            </Popover>
                          ) : (
                            /* Empty space for alignment when no icon or no measurements */
                            <div className="w-6" />
                          )}
                        </div>
                      </div>
                    </div>
                    {item.subtext && (
                      <div className="h-[22px] flex items-center px-[60px]">
                        <span 
                          className="font-['Open_Sans:Regular',sans-serif] text-[12px] text-[rgba(255,255,255,0.6)]"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          {item.subtext}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
