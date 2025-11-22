import { useState, useEffect, useCallback, useMemo, memo, useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, RotateCcw, AlertTriangle } from 'lucide-react';
import { Button } from './components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from './components/ui/context-menu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { ToolbarButton, ToolbarDivider } from './components/ToolbarButton';
import { CineController } from './components/CinePlaybackBar';
import { ToolsMenu } from './components/ToolsMenu';
import { MeasurementsPanel } from './components/MeasurementsPanel';
import { MeasurementsResultsList } from './components/MeasurementsResultsList';
import { toast, Toaster } from 'sonner@2.0.3';
import UserIcon from './imports/UserIcon';
import svgPaths from "./imports/svg-2o2ns1dvn3";
import filterSvgPaths from "./imports/svg-f23qkx2bl7";
import alignSvgPaths from "./imports/svg-ny344ghbjo";
import syncIconPaths from "./imports/svg-fjr20w0zzd";
import worklistSvgPaths from "./imports/svg-q8vsonkn9p";
import documentsSvgPaths from "./imports/svg-lxtqnvzdld";
import imagesSvgPaths from "./imports/svg-79am2m4uwh";
import currentIconPaths from "./imports/svg-flzyj1voli";
import priorExamSvgPaths from "./imports/svg-0tdp05o16e";

// Import echocardiogram images from Figma
import imgCineloopplax1 from "figma:asset/99b8c1b1d2831be6ccbb579897d08e4b408f348f.png";
import imgCineloopplax80Hr1 from "figma:asset/d2066f78cda1f736f3774424edc7ca94247d6f4a.png";
import imgUsImage from "figma:asset/865df8ba6dbb8a96261ee5c5a0bac26b684255ef.png";
import imgUsImage1 from "figma:asset/b914d795ced2bed02ffe05dcae8b0107b1e6f037.png";
import imgUsImage2 from "figma:asset/59e110eb34b469cf414173fe3c34e7a6d0d80ea3.png";
import imgUsImage3 from "figma:asset/f47dac9d4d844d8a4400bc8cda6ac344344e3ba5.png";
import imgUsImage4 from "figma:asset/e195809c0653ec871fb3be93523dad4b6de5a9d7.png";
import imgUsImage5 from "figma:asset/d13d3b7c86de29a3f56e6e776ebcfb3dcc5f492b.png";
import imgUsImage6 from "figma:asset/7d647be17a689ef77bec8e3cae7cfeb02f63a9a7.png";
import imgUsImage7 from "figma:asset/424b98d95c5c3a52633afee59b7d899d688cfe1f.png";
import img4CH1 from "figma:asset/45951bd5f78825eb08e126695d6cc47eb46d0c55.png";
import img4CH2 from "figma:asset/2933a3b677d2ef94e1bbc0e3692a9f2623576399.png";
import img2CH1 from "figma:asset/fa074ff30a6a15f6926eef4e52636b39bb7ba063.png";
import img2CH2 from "figma:asset/aef074c039185b0bb9cdf859e5874a3797fa9fec.png";
import imgPSAX1 from "figma:asset/d566bd5edf79ad9b176cfe1a798c0b9acda40823.png";
import imgPSAX2 from "figma:asset/ad3abd116ef1f73fcf5e8295d0187fd87190a514.png";
import img4CH1111 from "figma:asset/750288f48b04ce1a6c795c68fb86fdd85a161fea.png";
import img4CH121212 from "figma:asset/85fb457f13b3a1958b0df3d8a8cf9ca4c72b0bb3.png";

type GridLayout = '1x1' | '2x2' | '3x3' | '3x4' | '4x4';

interface CineLoopData {
  id: string;
  image: string;
  label: string;
  timestamp: string;
  tags: string[];
  view: string;
  stage: string;
}

interface Measurement {
  id: string;
  imageId: string; // ID of the image this measurement belongs to
  startPoint: { x: number; y: number };
  endPoint: { x: number; y: number };
  distance: number;
  label?: string;
}

// Stress echo images with stage/view/tags
const stressCineLoops: CineLoopData[] = [
  { id: '1', image: imgCineloopplax80Hr1, label: 'PLAX', timestamp: '08:11', tags: ['PLAX', 'Baseline', 'HR 88'], view: 'PLAX', stage: 'Baseline' },
  { id: '2', image: img4CH1, label: '4CH', timestamp: '08:20', tags: ['4CH', 'Peak', 'HR 152'], view: '4CH', stage: 'Peak' },
  { id: '3', image: imgUsImage2, label: 'PLAX', timestamp: '08:17', tags: ['PLAX', 'Pre-Peak', 'HR 108'], view: 'PLAX', stage: 'Pre-Peak' },
  { id: '4', image: img2CH1, label: '2CH', timestamp: '08:25', tags: ['2CH', 'Recovery', 'HR 78'], view: '2CH', stage: 'Recovery' },
  { id: '5', image: imgCineloopplax80Hr1, label: 'PLAX', timestamp: '08:12', tags: ['PLAX', 'Baseline', 'HR 75'], view: 'PLAX', stage: 'Baseline' },
  { id: '6', image: img4CH1, label: '4CH', timestamp: '08:21', tags: ['4CH', 'Peak', 'HR 147'], view: '4CH', stage: 'Peak' },
  { id: '7', image: img2CH1, label: '2CH', timestamp: '08:18', tags: ['2CH', 'Pre-Peak', 'HR 115'], view: '2CH', stage: 'Pre-Peak' },
  { id: '8', image: imgUsImage7, label: 'CW', timestamp: '08:26', tags: ['CW', 'Recovery', 'HR 82'], view: 'CW', stage: 'Recovery' },
  { id: '9', image: img4CH1111, label: '4CH', timestamp: '08:13', tags: ['4CH', 'Baseline', 'HR 73'], view: '4CH', stage: 'Baseline' },
  { id: '10', image: img2CH2, label: '2CH', timestamp: '08:22', tags: ['2CH', 'Peak', 'HR 158'], view: '2CH', stage: 'Peak' },
  { id: '11', image: imgCineloopplax80Hr1, label: 'PLAX', timestamp: '08:14', tags: ['PLAX', 'Baseline', 'HR 79'], view: 'PLAX', stage: 'Baseline' },
  { id: '12', image: imgCineloopplax1, label: 'PLAX', timestamp: '08:23', tags: ['PLAX', 'Peak', 'HR 80'], view: 'PLAX', stage: 'Peak' },
  { id: '13', image: img4CH2, label: '4CH', timestamp: '08:27', tags: ['4CH', 'Recovery', 'HR 85'], view: '4CH', stage: 'Recovery' },
  { id: '14', image: img2CH2, label: '2CH', timestamp: '08:15', tags: ['2CH', 'Baseline', 'HR 71'], view: '2CH', stage: 'Baseline' },
  { id: '15', image: img4CH2, label: '4CH', timestamp: '08:19', tags: ['4CH', 'Pre-Peak', 'HR 112'], view: '4CH', stage: 'Pre-Peak' },
  { id: '16', image: imgUsImage3, label: 'PLAX', timestamp: '08:28', tags: ['PLAX', 'Recovery', 'HR 76'], view: 'PLAX', stage: 'Recovery' },
  { id: '17', image: imgPSAX1, label: 'PSAX', timestamp: '08:16', tags: ['PSAX', 'Baseline', 'HR 84'], view: 'PSAX', stage: 'Baseline' },
  { id: '18', image: imgPSAX2, label: 'PSAX', timestamp: '08:24', tags: ['PSAX', 'Peak', 'HR 143'], view: 'PSAX', stage: 'Peak' },
  { id: '19', image: img4CH121212, label: '4CH', timestamp: '08:09', tags: ['4CH', 'Baseline', 'HR 82'], view: '4CH', stage: 'Baseline' },
  { id: '20', image: img4CH2, label: '4CH', timestamp: '08:10', tags: ['4CH', 'Baseline', 'HR 87'], view: '4CH', stage: 'Baseline' },
  { id: '21', image: imgCineloopplax1, label: 'PLAX', timestamp: '08:17:09', tags: ['PLAX', 'Pre-Peak', 'HR 105'], view: 'PLAX', stage: 'Pre-Peak' },
];

// Prior exam data for comparison (from 2021-04-05)
const priorExamCineLoops: CineLoopData[] = [
  { id: 'p1', image: imgUsImage, label: 'PLAX', timestamp: '10:05', tags: ['PLAX', 'Baseline', 'HR 82'], view: 'PLAX', stage: 'Baseline' },
  { id: 'p2', image: img4CH2, label: '4CH', timestamp: '10:12', tags: ['4CH', 'Peak', 'HR 145'], view: '4CH', stage: 'Peak' },
  { id: 'p3', image: imgUsImage1, label: 'PLAX', timestamp: '10:08', tags: ['PLAX', 'Pre-Peak', 'HR 102'], view: 'PLAX', stage: 'Pre-Peak' },
  { id: 'p4', image: img2CH2, label: '2CH', timestamp: '10:18', tags: ['2CH', 'Recovery', 'HR 74'], view: '2CH', stage: 'Recovery' },
  { id: 'p5', image: imgCineloopplax1, label: 'PLAX', timestamp: '10:06', tags: ['PLAX', 'Baseline', 'HR 78'], view: 'PLAX', stage: 'Baseline' },
  { id: 'p6', image: img4CH1, label: '4CH', timestamp: '10:13', tags: ['4CH', 'Peak', 'HR 150'], view: '4CH', stage: 'Peak' },
  { id: 'p7', image: img2CH1, label: '2CH', timestamp: '10:09', tags: ['2CH', 'Pre-Peak', 'HR 108'], view: '2CH', stage: 'Pre-Peak' },
  { id: 'p8', image: imgUsImage3, label: 'CW', timestamp: '10:19', tags: ['CW', 'Recovery', 'HR 80'], view: 'CW', stage: 'Recovery' },
  { id: 'p9', image: img4CH121212, label: '4CH', timestamp: '10:07', tags: ['4CH', 'Baseline', 'HR 76'], view: '4CH', stage: 'Baseline' },
  { id: 'p10', image: img2CH1, label: '2CH', timestamp: '10:14', tags: ['2CH', 'Peak', 'HR 155'], view: '2CH', stage: 'Peak' },
  { id: 'p11', image: imgCineloopplax80Hr1, label: 'PLAX', timestamp: '10:10', tags: ['PLAX', 'Pre-Peak', 'HR 110'], view: 'PLAX', stage: 'Pre-Peak' },
  { id: 'p12', image: imgUsImage2, label: 'PLAX', timestamp: '10:15', tags: ['PLAX', 'Peak', 'HR 148'], view: 'PLAX', stage: 'Peak' },
  { id: 'p13', image: img4CH2, label: '4CH', timestamp: '10:20', tags: ['4CH', 'Recovery', 'HR 83'], view: '4CH', stage: 'Recovery' },
  { id: 'p14', image: img2CH2, label: '2CH', timestamp: '10:11', tags: ['2CH', 'Baseline', 'HR 75'], view: '2CH', stage: 'Baseline' },
  { id: 'p15', image: img4CH1, label: '4CH', timestamp: '10:16', tags: ['4CH', 'Recovery', 'HR 86'], view: '4CH', stage: 'Recovery' },
  { id: 'p16', image: imgUsImage4, label: 'PLAX', timestamp: '10:21', tags: ['PLAX', 'Recovery', 'HR 79'], view: 'PLAX', stage: 'Recovery' },
  { id: 'p17', image: imgPSAX1, label: 'PSAX', timestamp: '10:17', tags: ['PSAX', 'Baseline', 'HR 81'], view: 'PSAX', stage: 'Baseline' },
  { id: 'p18', image: imgPSAX2, label: 'PSAX', timestamp: '10:22', tags: ['PSAX', 'Peak', 'HR 142'], view: 'PSAX', stage: 'Peak' },
  { id: 'p19', image: img4CH1111, label: '4CH', timestamp: '10:23', tags: ['4CH', 'Baseline', 'HR 84'], view: '4CH', stage: 'Baseline' },
  { id: 'p20', image: img4CH2, label: '4CH', timestamp: '10:24', tags: ['4CH', 'Baseline', 'HR 88'], view: '4CH', stage: 'Baseline' },
  { id: 'p21', image: imgUsImage5, label: 'PLAX', timestamp: '10:25', tags: ['PLAX', 'Pre-Peak', 'HR 106'], view: 'PLAX', stage: 'Pre-Peak' },
  { id: 'p22', image: imgUsImage6, label: '2CH', timestamp: '10:26', tags: ['2CH', 'Recovery', 'HR 77'], view: '2CH', stage: 'Recovery' },
];

// Non-stress images without stage/view/tags (no chips will show)
const nonStressCineLoops: CineLoopData[] = [
  { id: 'ns1', image: imgUsImage, label: 'Echo', timestamp: '09:05', tags: [], view: '', stage: '' },
  { id: 'ns2', image: imgUsImage1, label: 'Echo', timestamp: '09:08', tags: [], view: '', stage: '' },
  { id: 'ns3', image: imgUsImage3, label: 'Echo', timestamp: '09:12', tags: [], view: '', stage: '' },
  { id: 'ns4', image: imgUsImage4, label: 'Echo', timestamp: '09:15', tags: [], view: '', stage: '' },
  { id: 'ns5', image: imgUsImage5, label: 'Echo', timestamp: '09:18', tags: [], view: '', stage: '' },
  { id: 'ns6', image: imgUsImage6, label: 'Echo', timestamp: '09:21', tags: [], view: '', stage: '' },
  { id: 'ns7', image: img2CH1, label: 'Echo', timestamp: '09:24', tags: [], view: '', stage: '' },
  { id: 'ns8', image: img2CH2, label: 'Echo', timestamp: '09:27', tags: [], view: '', stage: '' },
  { id: 'ns9', image: imgPSAX1, label: 'Echo', timestamp: '09:30', tags: [], view: '', stage: '' },
  { id: 'ns10', image: imgPSAX2, label: 'Echo', timestamp: '09:33', tags: [], view: '', stage: '' },
  { id: 'ns11', image: imgUsImage2, label: 'Echo', timestamp: '09:36', tags: [], view: '', stage: '' },
  { id: 'ns12', image: imgCineloopplax1, label: 'Echo', timestamp: '09:39', tags: [], view: '', stage: '' },
  { id: 'ns13', image: img4CH1, label: 'Echo', timestamp: '09:42', tags: [], view: '', stage: '' },
  { id: 'ns14', image: img4CH2, label: 'Echo', timestamp: '09:45', tags: [], view: '', stage: '' },
  { id: 'ns15', image: imgCineloopplax80Hr1, label: 'Echo', timestamp: '09:48', tags: [], view: '', stage: '' },
  { id: 'ns16', image: imgUsImage7, label: 'Echo', timestamp: '09:51', tags: [], view: '', stage: '' },
];

const Partition = memo(function Partition({ 
  isActive, 
  onClick, 
  cineLoop, 
  isPlaying, 
  onPlayPause, 
  currentFrame, 
  onFrameChange,
  showCineController,
  playbackMode,
  onPlaybackModeChange,
  chipsHidden,
  onToggleChips,
  playbackSpeed,
  onPlaybackSpeedChange,
  customRange,
  onCustomRangeChange,
  panPosition,
  onPanChange,
  adjustMode,
  brightness,
  contrast,
  onAdjustmentChange,
  hasWarning,
  showTimeline,
  isSyncActive,
  onSyncToggle,
  isInSyncGroup,
  onToggleSyncGroup,
  syncMode,
  onSyncModeChange,
  onClearSyncGroups,
  onToggleAllSync,
  activeBorderColor = '#51c260',
  activeTool,
  measurements,
  onMeasurementComplete,
  selectedMeasurementIndex,
  onSelectMeasurement,
  onDeleteMeasurement,
  onUpdateMeasurement,
  isDrawingMeasurement,
  measurementStartPoint
}: { 
  isActive: boolean; 
  onClick: () => void; 
  cineLoop?: CineLoopData; 
  isPlaying: boolean; 
  onPlayPause: () => void; 
  currentFrame: number; 
  onFrameChange: (frame: number) => void;
  showCineController: boolean;
  playbackMode: number;
  onPlaybackModeChange: () => void;
  chipsHidden: boolean;
  onToggleChips: () => void;
  playbackSpeed: number;
  onPlaybackSpeedChange: (speed: number) => void;
  customRange: { start: number; end: number } | null;
  onCustomRangeChange: (start: number, end: number) => void;
  panPosition: { x: number; y: number };
  onPanChange: (x: number, y: number) => void;
  adjustMode: boolean;
  brightness: number;
  contrast: number;
  onAdjustmentChange: (brightness: number, contrast: number) => void;
  hasWarning: boolean;
  showTimeline: boolean;
  isSyncActive: boolean;
  onSyncToggle: () => void;
  isInSyncGroup: boolean;
  onToggleSyncGroup: () => void;
  syncMode: 'speed' | 'start-time' | 'all-controls' | null;
  onSyncModeChange: (mode: 'speed' | 'start-time' | 'all-controls' | null) => void;
  onClearSyncGroups: () => void;
  onToggleAllSync: (enabled: boolean) => void;
  activeBorderColor?: string;
  activeTool: string | null;
  measurements: Measurement[];
  onMeasurementComplete: (measurement: Omit<Measurement, 'id'>) => void;
  selectedMeasurementIndex: number | null;
  onSelectMeasurement: (index: number | null) => void;
  onDeleteMeasurement: (index: number) => void;
  onUpdateMeasurement: (index: number, startPoint: { x: number; y: number }, endPoint: { x: number; y: number }) => void;
  isDrawingMeasurement: boolean;
  measurementStartPoint: { x: number; y: number } | null;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [isAdjusting, setIsAdjusting] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [adjustStart, setAdjustStart] = useState({ x: 0, y: 0 });
  const [tempBrightness, setTempBrightness] = useState(brightness);
  const [tempContrast, setTempContrast] = useState(contrast);
  const [hasDragged, setHasDragged] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isDraggingPoint, setIsDraggingPoint] = useState<{ measurementIndex: number; point: 'start' | 'end' } | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // All images have 50 frames
  const totalFrames = 50;
  
  // Calculate default playback speed based on stage tags
  const getDefaultSpeed = () => {
    if (!cineLoop) return 1.0;
    const hasPeakTag = cineLoop.tags.includes('Peak');
    const hasPrePeakTag = cineLoop.tags.includes('Pre-Peak');
    
    if (hasPeakTag) return 4.0;
    if (hasPrePeakTag) return 2.5;
    return 1.0;
  };
  
  const defaultSpeed = getDefaultSpeed();
  
  // Calculate playback range based on mode
  const getPlaybackRange = () => {
    // Use custom range if set
    if (customRange) {
      return customRange;
    }
    
    // ECG marker positions at 5%, 50%, and 95%
    // Note: end is inclusive (the last frame to display)
    switch (playbackMode) {
      case 1: // First ECG segment: 5% to 50%
        return { start: Math.floor(totalFrames * 0.05), end: Math.floor(totalFrames * 0.50) - 1 };
      case 2: // Second ECG segment: 50% to 95%
        return { start: Math.floor(totalFrames * 0.50), end: Math.floor(totalFrames * 0.95) - 1 };
      default: // Full range (mode 0, ECG inactive)
        return { start: 0, end: totalFrames - 1 };
    }
  };
  
  const { start: startFrame, end: endFrame } = getPlaybackRange();
  
  // Playback effect when playing
  useEffect(() => {
    if (!isPlaying) return;

    // At 1x speed, 100 frames should take 3 seconds (3000ms)
    // So each frame takes 3000ms / 100 = 30ms at 1x speed
    const baseInterval = 30; // ms per frame at 1x speed
    const interval = baseInterval / playbackSpeed;
    
    const animate = () => {
      // In start-time sync mode, stop at the end and wait for all partitions to sync
      if (syncMode === 'start-time' && currentFrame >= endFrame) {
        // Don't advance - stay at the end frame until App-level sync resets all
        return;
      }
      
      // Loop within the playback range
      const nextFrame = currentFrame + 1;
      
      if (nextFrame > endFrame) {
        // In start-time sync mode, stop at end instead of looping
        if (syncMode === 'start-time') {
          onFrameChange(endFrame);
        } else {
          // Normal mode: loop back to start of range
          onFrameChange(startFrame);
        }
      } else if (nextFrame < startFrame) {
        onFrameChange(startFrame); // Ensure we're in range
      } else {
        onFrameChange(nextFrame);
      }
    };

    const timer = setInterval(animate, interval);
    return () => clearInterval(timer);
  }, [isPlaying, currentFrame, onFrameChange, startFrame, endFrame, playbackSpeed, syncMode]);

  // Handle panning with right-click drag
  const handleMouseDown = (e: React.MouseEvent) => {
    // Reset hasDragged at the start of any new interaction
    setHasDragged(false);
    
    if (adjustMode && e.button === 0 && cineLoop) { // Left click in adjust mode
      e.preventDefault();
      e.stopPropagation();
      setIsAdjusting(true);
      setAdjustStart({ x: e.clientX, y: e.clientY });
      setTempBrightness(brightness);
      setTempContrast(contrast);
    } else if (e.button === 2) { // Right click
      e.preventDefault();
      setIsPanning(true);
      setPanStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingPoint) {
      handlePointDrag(e);
    } else if (isAdjusting) {
      const deltaX = e.clientX - adjustStart.x;
      const deltaY = e.clientY - adjustStart.y;
      
      // Check if there's been significant movement (more than 3 pixels)
      if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
        setHasDragged(true);
      }
      
      // Horizontal movement affects brightness (400px = 1.0 change)
      // Range: 0.5 to 2.0
      const brightnessDelta = deltaX / 400;
      const newBrightness = Math.max(0.5, Math.min(2, brightness + brightnessDelta));
      setTempBrightness(newBrightness);
      
      // Vertical movement affects contrast (down = increase, up = decrease)
      // Range: 0.5 to 2.0
      const contrastDelta = deltaY / 400;
      const newContrast = Math.max(0.5, Math.min(2, contrast + contrastDelta));
      setTempContrast(newContrast);
    } else if (isPanning) {
      const newX = e.clientX - panStart.x;
      const newY = e.clientY - panStart.y;
      
      // Check if there's been significant movement (more than 3 pixels)
      const deltaX = Math.abs(newX - panPosition.x);
      const deltaY = Math.abs(newY - panPosition.y);
      
      if (deltaX > 3 || deltaY > 3) {
        setHasDragged(true);
      }
      
      onPanChange(newX, newY);
    }
  };

  const handleMouseUp = () => {
    if (isDraggingPoint) {
      handlePointDragEnd();
    } else if (isAdjusting) {
      // Apply the adjustment
      onAdjustmentChange(tempBrightness, tempContrast);
      setIsAdjusting(false);
    }
    setIsPanning(false);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    // Only prevent context menu if user actually dragged
    if (hasDragged) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingPoint) {
        handlePointDragEnd();
      } else if (isAdjusting) {
        // Apply the adjustment
        onAdjustmentChange(tempBrightness, tempContrast);
        setIsAdjusting(false);
      }
      setIsPanning(false);
    };

    if (isPanning || isAdjusting || isDraggingPoint) {
      window.addEventListener('mouseup', handleGlobalMouseUp);
      return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }
  }, [isPanning, isAdjusting, isDraggingPoint, tempBrightness, tempContrast, onAdjustmentChange]);

  const handlePartitionClick = () => {
    // Don't trigger onClick if we just finished adjusting or if Distance tool is active
    if (!hasDragged && !adjustMode && activeTool !== 'Distance') {
      // Deselect any selected measurement when clicking on the partition
      if (selectedMeasurementIndex !== null) {
        onSelectMeasurement(null);
      } else if (isActive) {
        // If partition is already active, toggle play/pause
        onPlayPause();
      } else {
        // If partition is not active, select it
        onClick();
      }
    }
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If we're not panning, adjusting, or dragging, and we didn't click on a measurement element
    if (!adjustMode && !isPanning && !hasDragged && !isDraggingPoint) {
      // If Distance tool is active and partition is active, create measurement
      if (activeTool === 'Distance' && isActive) {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        // Always call onMeasurementComplete - it will handle both first and second clicks
        onMeasurementComplete({
          startPoint: { x: 0, y: 0 }, // Will be set by App component if this is the second click
          endPoint: { x, y },
          distance: 0 // Will be calculated by App component
        });
      } else if (selectedMeasurementIndex !== null) {
        // If a measurement is selected, deselect it when clicking outside
        e.stopPropagation();
        onSelectMeasurement(null);
      }
    }
  };

  const handlePointDragStart = (e: React.MouseEvent, measurementIndex: number, point: 'start' | 'end') => {
    e.stopPropagation();
    setIsDraggingPoint({ measurementIndex, point });
    setHasDragged(false);
  };

  const handlePointDrag = (e: React.MouseEvent) => {
    if (!isDraggingPoint || !imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    
    // Check if there's been significant movement
    if (!hasDragged) {
      const measurement = measurements[isDraggingPoint.measurementIndex];
      const currentPoint = isDraggingPoint.point === 'start' ? measurement.startPoint : measurement.endPoint;
      const deltaX = Math.abs(x - currentPoint.x);
      const deltaY = Math.abs(y - currentPoint.y);
      
      if (deltaX > 0.5 || deltaY > 0.5) {
        setHasDragged(true);
      }
    }
    
    const measurement = measurements[isDraggingPoint.measurementIndex];
    const newStartPoint = isDraggingPoint.point === 'start' ? { x, y } : measurement.startPoint;
    const newEndPoint = isDraggingPoint.point === 'end' ? { x, y } : measurement.endPoint;
    
    onUpdateMeasurement(isDraggingPoint.measurementIndex, newStartPoint, newEndPoint);
  };

  const handlePointDragEnd = () => {
    setIsDraggingPoint(null);
  };

  return (
    <div 
      className={`relative bg-black border-2 ${isPanning ? 'cursor-grabbing' : isAdjusting ? 'cursor-grabbing' : adjustMode ? 'cursor-crosshair' : activeTool === 'Distance' && isActive ? 'cursor-crosshair' : 'cursor-pointer'} flex flex-col h-full w-full overflow-hidden select-none`}
      style={{
        borderColor: isActive ? activeBorderColor : 'rgba(255, 255, 255, 0.1)'
      }}
      onClick={handlePartitionClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onContextMenu={handleContextMenu}
    >
      {cineLoop ? (
        <>
          {/* Image area */}
          <div 
            ref={imageRef}
            className="relative flex-1 min-h-0 overflow-hidden"
            onClick={handleImageClick}
            onMouseMove={(e) => {
              if (isDrawingMeasurement && activeTool === 'Distance') {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setMousePos({ x, y });
              }
            }}
            onMouseLeave={() => setMousePos(null)}
          >
            <img 
              src={cineLoop.image} 
              alt={cineLoop.label}
              className="w-full h-full object-contain"
              style={{
                filter: `brightness(${(0.95 + (Math.sin(currentFrame * 0.1) * 0.10)) * (isAdjusting ? tempBrightness : brightness)}) contrast(${(1 + (Math.cos(currentFrame * 0.08) * 0.08)) * (isAdjusting ? tempContrast : contrast)})`,
                transform: `translate(${panPosition.x}px, ${panPosition.y}px)`,
                pointerEvents: 'none'
              }}
            />
            {!chipsHidden && (
              <div className="absolute left-[2px] top-[2px] flex flex-col gap-0 items-start pointer-events-none">
                {/* Timestamp chip */}
                <div className="bg-black/10 px-2 py-1 rounded text-white text-sm">
                  2021-04-15 {cineLoop.timestamp}:03
                </div>
                {/* Tag chips */}
                {cineLoop.tags.map((tag, idx) => (
                  <div key={idx} className="bg-black/10 px-2 py-1 rounded text-white text-sm">
                    {tag}
                  </div>
                ))}
              </div>
            )}

            {/* Adjustment indicator overlay */}
            {isAdjusting && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="bg-black/80 px-4 py-3 rounded-lg border border-white/20">
                  <div className="text-white text-sm space-y-1">
                    <div>Brightness: {tempBrightness.toFixed(2)}</div>
                    <div>Contrast: {tempContrast.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Measurements overlay */}
            {(measurements.length > 0 || (isDrawingMeasurement && measurementStartPoint && mousePos)) && (
              <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <filter id="measurement-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="1" dy="1" stdDeviation="0" floodColor="black" floodOpacity="1"/>
                  </filter>
                </defs>
                
                {/* Preview line while drawing */}
                {isDrawingMeasurement && measurementStartPoint && mousePos && (
                  <g filter="url(#measurement-shadow)">
                    <line
                      x1={`${measurementStartPoint.x}%`}
                      y1={`${measurementStartPoint.y}%`}
                      x2={`${mousePos.x}%`}
                      y2={`${mousePos.y}%`}
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <rect
                      x={`${measurementStartPoint.x}%`}
                      y={`${measurementStartPoint.y}%`}
                      width="8"
                      height="8"
                      transform={`translate(-4, -4)`}
                      fill="white"
                    />
                  </g>
                )}
                
                {measurements.map((measurement, index) => {
                  const isSelected = selectedMeasurementIndex === index;
                  const midX = (measurement.startPoint.x + measurement.endPoint.x) / 2;
                  const midY = (measurement.startPoint.y + measurement.endPoint.y) / 2;
                  
                  return (
                    <g key={measurement.id} filter="url(#measurement-shadow)">
                      {/* Main line */}
                      <line
                        x1={`${measurement.startPoint.x}%`}
                        y1={`${measurement.startPoint.y}%`}
                        x2={`${measurement.endPoint.x}%`}
                        y2={`${measurement.endPoint.y}%`}
                        stroke="white"
                        strokeWidth="2"
                        className="pointer-events-auto cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectMeasurement(index);
                        }}
                      />
                      {/* Start point square */}
                      <rect
                        x={`${measurement.startPoint.x}%`}
                        y={`${measurement.startPoint.y}%`}
                        width={isSelected ? "12" : "8"}
                        height={isSelected ? "12" : "8"}
                        transform={isSelected ? `translate(-6, -6)` : `translate(-4, -4)`}
                        fill="white"
                        stroke={isSelected ? 'rgba(255, 255, 255, 0.5)' : 'none'}
                        strokeWidth={isSelected ? '2' : '0'}
                        className={`pointer-events-auto ${isSelected ? 'cursor-move' : 'cursor-pointer'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!isSelected) {
                            onSelectMeasurement(index);
                          }
                        }}
                        onMouseDown={(e) => {
                          if (isSelected) {
                            handlePointDragStart(e as any, index, 'start');
                          }
                        }}
                      />
                      {/* End point square */}
                      <rect
                        x={`${measurement.endPoint.x}%`}
                        y={`${measurement.endPoint.y}%`}
                        width={isSelected ? "12" : "8"}
                        height={isSelected ? "12" : "8"}
                        transform={isSelected ? `translate(-6, -6)` : `translate(-4, -4)`}
                        fill="white"
                        stroke={isSelected ? 'rgba(255, 255, 255, 0.5)' : 'none'}
                        strokeWidth={isSelected ? '2' : '0'}
                        className={`pointer-events-auto ${isSelected ? 'cursor-move' : 'cursor-pointer'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!isSelected) {
                            onSelectMeasurement(index);
                          }
                        }}
                        onMouseDown={(e) => {
                          if (isSelected) {
                            handlePointDragStart(e as any, index, 'end');
                          }
                        }}
                      />
                      {/* Distance label */}
                      <text
                        x={`${midX}%`}
                        y={`${midY}%`}
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                        textAnchor="middle"
                        dy="-8"
                        className="pointer-events-none"
                        style={{ textShadow: '0 0 3px black, 0 0 3px black' }}
                      >
                        {measurement.distance.toFixed(1)} px
                      </text>
                    </g>
                  );
                })}
              </svg>
            )}
            
            {/* Measurements Results List */}
            <MeasurementsResultsList
              measurements={measurements}
              onSelectMeasurement={onSelectMeasurement}
              selectedMeasurementIndex={selectedMeasurementIndex}
            />
          </div>
          
          {/* Cine controller area - shown when cineLoop exists */}
          {cineLoop && (
            <div className="shrink-0">
              <CineController
                isPlaying={isPlaying}
                onPlayPause={onPlayPause}
                currentFrame={currentFrame}
                totalFrames={totalFrames}
                onFrameChange={onFrameChange}
                isActive={isActive}
                isHovering={isHovering}
                playbackMode={playbackMode}
                onPlaybackModeChange={onPlaybackModeChange}
                onToggleChips={onToggleChips}
                chipsHidden={chipsHidden}
                playbackSpeed={playbackSpeed}
                onPlaybackSpeedChange={onPlaybackSpeedChange}
                defaultSpeed={defaultSpeed}
                isCWImage={cineLoop?.tags.includes('CW')}
                customRange={customRange}
                onCustomRangeChange={onCustomRangeChange}
                brightness={brightness}
                contrast={contrast}
                hasWarning={hasWarning}
                showTimeline={showTimeline}
                isSyncActive={isSyncActive}
                onSyncToggle={onSyncToggle}
                isInSyncGroup={isInSyncGroup}
                onToggleSyncGroup={onToggleSyncGroup}
                syncMode={syncMode}
                onSyncModeChange={onSyncModeChange}
                onClearSyncGroups={onClearSyncGroups}
                onToggleAllSync={onToggleAllSync}
              />
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white/30">
          Empty
        </div>
      )}
    </div>
  );
});

function Thumbnail({ 
  cineLoop, 
  isSelected, 
  isDisplayed,
  onClick,
  borderColor = '#51c260'
}: { 
  cineLoop: CineLoopData; 
  isSelected: boolean;
  isDisplayed: boolean;
  onClick: () => void;
  borderColor?: string;
}) {
  // Selected (active partition) gets solid border
  // Displayed (in grid but not active) gets 30% transparent border
  // Neither gets transparent border
  const getBorderColor = () => {
    if (isSelected) return borderColor;
    if (isDisplayed) return `${borderColor}4D`; // 30% opacity in hex
    return 'transparent';
  };

  const getBackgroundColor = () => {
    if (!isSelected) return '';
    // Convert hex to rgba with 30% opacity
    const hex = borderColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 0.3)`;
  };
  
  return (
    <div 
      className={`cursor-pointer self-start ${isSelected ? 'p-[5px]' : 'p-1'}`}
      style={{
        backgroundColor: isSelected ? getBackgroundColor() : 'transparent'
      }}
      onClick={onClick}
    >
      <div 
        className="bg-black border-2 overflow-hidden"
        style={{
          borderColor: getBorderColor()
        }}
      >
        <img 
          src={cineLoop.image} 
          alt={cineLoop.label}
          className="w-full h-20 object-contain"
        />
        <div className="bg-black px-1.5 py-0.5 flex items-center justify-between">
          <span className="text-white/60 text-xs">{cineLoop.timestamp}</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const thumbnailRefs = useMemo(() => ({} as Record<number, HTMLDivElement | null>), []);
  const prevCineLoopIds = useRef<Record<number, string | null>>({});
  const prevAllAtEnd = useRef<boolean>(false);
  const [gridLayout, setGridLayout] = useState<GridLayout>('2x2');
  const [activePartition, setActivePartition] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // Tracks the starting index of images shown in grid
  const [playingStates, setPlayingStates] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true, 3: true });
  const [framePositions, setFramePositions] = useState<Record<number, number>>({});
  const [playbackModes, setPlaybackModes] = useState<Record<number, number>>({}); // 0 = full, 1 = first ECG segment (5%-50%), 2 = second ECG segment (50%-95%)
  const [customRanges, setCustomRanges] = useState<Record<number, { start: number; end: number } | null>>({});
  const [cineEnabled, setCineEnabled] = useState(true);
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [selectedViews, setSelectedViews] = useState<string[]>([]);
  const [chipsHidden, setChipsHidden] = useState<Record<number, boolean>>({});
  const [playbackSpeeds, setPlaybackSpeeds] = useState<Record<number, number>>({});
  const [hiddenImages, setHiddenImages] = useState<Record<string, CineLoopData>>({});
  const [imageType, setImageType] = useState<'All' | 'Stress'>('Stress');
  const [syncMode, setSyncMode] = useState<'speed' | 'start-time' | 'all-controls' | null>(null);
  const [panPositions, setPanPositions] = useState<Record<number, { x: number; y: number }>>({});
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [toolsMenuOpen, setToolsMenuOpen] = useState(false);
  const [measurementsPanelOpen, setMeasurementsPanelOpen] = useState(false);
  const [syncMenuOpen, setSyncMenuOpen] = useState(false);
  const [adjustMode, setAdjustMode] = useState(false);
  const [imageAdjustments, setImageAdjustments] = useState<Record<number, { brightness: number; contrast: number }>>({});
  const [warningPartition, setWarningPartition] = useState<number | null>(null);
  const [syncStates, setSyncStates] = useState<Record<number, boolean>>({});
  const [syncGroupStates, setSyncGroupStates] = useState<Record<number, boolean>>({});
  const [compareMode, setCompareMode] = useState(false);
  const [priorExamDropdownOpen, setPriorExamDropdownOpen] = useState(false);
  const [priorExamPageIndex, setPriorExamPageIndex] = useState(0);
  const [priorExamActivePartition, setPriorExamActivePartition] = useState(0);
  const [priorFilterExpanded, setPriorFilterExpanded] = useState(false);
  const [priorSelectedStages, setPriorSelectedStages] = useState<string[]>([]);
  const [priorSelectedViews, setPriorSelectedViews] = useState<string[]>([]);
  const [priorImageType, setPriorImageType] = useState<'All' | 'Stress'>('Stress');
  const [priorPanelCollapsed, setPriorPanelCollapsed] = useState(false);
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [measurements, setMeasurements] = useState<Record<number, Measurement[]>>({});
  const [currentMeasurement, setCurrentMeasurement] = useState<{ partitionIndex: number; startPoint: { x: number; y: number } } | null>(null);
  const [selectedMeasurement, setSelectedMeasurement] = useState<{ partitionIndex: number; measurementIndex: number } | null>(null);
  const [pendingMeasurementLabel, setPendingMeasurementLabel] = useState<string | null>(null);
  
  // Store measurements for the measurements panel (keyed by label)
  interface PanelMeasurement {
    value: number;
    unit: string;
    date: string;
    time: string;
    imageId: string;
  }
  const [panelMeasurements, setPanelMeasurements] = useState<Record<string, PanelMeasurement[]>>({});

  const getGridDimensions = (layout: GridLayout): [number, number] => {
    switch (layout) {
      case '1x1': return [1, 1];
      case '2x2': return [2, 2];
      case '3x3': return [3, 3];
      case '3x4': return [3, 4];
      case '4x4': return [4, 4];
      default: return [2, 2];
    }
  };

  const [rows, cols] = getGridDimensions(gridLayout);
  const totalPartitions = rows * cols;

  // Select which dataset to use based on image type
  const cineLoops = imageType === 'All' ? nonStressCineLoops : stressCineLoops;

  // Total count of images in the exam (no filters, no hidden exclusion)
  const totalExamCount = cineLoops.length;

  // Filter cine loops based on selected stage and view, and exclude hidden images
  // Note: For Non-stress images, stage/view filters are ignored since they don't have those properties
  const filteredCineLoops = cineLoops
    .filter((loop) => {
      // For Non-stress images, ignore stage/view filters (they don't have these properties)
      const shouldApplyFilters = imageType === 'Stress';
      
      const stageMatch = !shouldApplyFilters || !selectedStages.length || loop.tags.some(tag => selectedStages.some(stage => tag.toLowerCase() === stage.toLowerCase()));
      const viewMatch = !shouldApplyFilters || !selectedViews.length || loop.tags.some(tag => selectedViews.some(view => tag.toLowerCase() === view.toLowerCase()));
      const notHidden = !hiddenImages[loop.id];
      return stageMatch && viewMatch && notHidden;
    })
    .sort((a, b) => {
      // Sort by timestamp (earliest first)
      return a.timestamp.localeCompare(b.timestamp);
    });

  // Filter prior exam cine loops based on selected stage and view
  const priorCineLoops = priorImageType === 'All' ? nonStressCineLoops : priorExamCineLoops;
  const filteredPriorCineLoops = priorCineLoops
    .filter((loop) => {
      // For Non-stress images, ignore stage/view filters (they don't have these properties)
      const shouldApplyFilters = priorImageType === 'Stress';
      
      const stageMatch = !shouldApplyFilters || !priorSelectedStages.length || loop.tags.some(tag => priorSelectedStages.some(stage => tag.toLowerCase() === stage.toLowerCase()));
      const viewMatch = !shouldApplyFilters || !priorSelectedViews.length || loop.tags.some(tag => priorSelectedViews.some(view => tag.toLowerCase() === view.toLowerCase()));
      return stageMatch && viewMatch;
    })
    .sort((a, b) => {
      // Sort by timestamp (earliest first)
      return a.timestamp.localeCompare(b.timestamp);
    });

  const handleThumbnailClick = (index: number) => {
    // Calculate which page this image belongs to
    const pageIndex = Math.floor(index / totalPartitions) * totalPartitions;
    setCurrentPageIndex(pageIndex);
    // Set active partition to the position within that page
    setActivePartition(index % totalPartitions);
  };

  const handlePriorThumbnailClick = (index: number) => {
    // Calculate which page this image belongs to
    const pageIndex = Math.floor(index / totalPartitions) * totalPartitions;
    setPriorExamPageIndex(pageIndex);
    // Set active partition to the position within that page
    setPriorExamActivePartition(index % totalPartitions);
  };

  const handlePriorPartitionClick = useCallback((partitionIndex: number) => {
    setPriorExamActivePartition(partitionIndex);
  }, []);

  const handlePlayPause = useCallback((partitionIndex: number) => {
    setPlayingStates(prev => {
      // If this partition has sync enabled, apply to all partitions with sync enabled
      if (syncStates[partitionIndex]) {
        const newStates = { ...prev };
        const newPlayingState = !prev[partitionIndex];
        // Apply to all partitions that have sync enabled
        Object.keys(syncStates).forEach(key => {
          const idx = parseInt(key);
          if (syncStates[idx]) {
            newStates[idx] = newPlayingState;
          }
        });
        return newStates;
      }
      return {
        ...prev,
        [partitionIndex]: !prev[partitionIndex]
      };
    });
  }, [syncStates]);

  const handleFrameChange = useCallback((partitionIndex: number, frame: number) => {
    setFramePositions(prev => {
      // If this partition has sync enabled, apply to all partitions with sync enabled
      if (syncStates[partitionIndex]) {
        const newStates = { ...prev };
        // Apply to all partitions that have sync enabled
        Object.keys(syncStates).forEach(key => {
          const idx = parseInt(key);
          if (syncStates[idx]) {
            newStates[idx] = frame;
          }
        });
        return newStates;
      }
      return {
        ...prev,
        [partitionIndex]: frame
      };
    });
  }, [syncStates]);

  const handlePlaybackModeChange = useCallback((partitionIndex: number) => {
    setPlaybackModes(prev => {
      const currentMode = prev[partitionIndex] || 0;
      const nextMode = (currentMode + 1) % 3; // Cycle through 0, 1, 2
      
      // If this partition has sync enabled, apply to all partitions with sync enabled
      if (syncStates[partitionIndex]) {
        const newStates = { ...prev };
        Object.keys(syncStates).forEach(key => {
          const idx = parseInt(key);
          if (syncStates[idx]) {
            newStates[idx] = nextMode;
          }
        });
        return newStates;
      }
      
      return {
        ...prev,
        [partitionIndex]: nextMode
      };
    });
    
    // Reset custom range when mode changes
    setCustomRanges(prev => {
      // If this partition has sync enabled, clear custom ranges for all with sync enabled
      if (syncStates[partitionIndex]) {
        const newRanges = { ...prev };
        Object.keys(syncStates).forEach(key => {
          const idx = parseInt(key);
          if (syncStates[idx]) {
            newRanges[idx] = null;
          }
        });
        return newRanges;
      }
      
      return {
        ...prev,
        [partitionIndex]: null
      };
    });
  }, [syncStates]);

  const handleCustomRangeChange = useCallback((partitionIndex: number, start: number, end: number) => {
    setCustomRanges(prev => ({
      ...prev,
      [partitionIndex]: { start, end }
    }));
  }, []);

  const handlePlaybackSpeedChange = useCallback((partitionIndex: number, speed: number) => {
    setPlaybackSpeeds(prev => {
      // If this partition has sync enabled, apply to all partitions with sync enabled
      if (syncStates[partitionIndex]) {
        const newStates = { ...prev };
        // Apply to all partitions that have sync enabled
        Object.keys(syncStates).forEach(key => {
          const idx = parseInt(key);
          if (syncStates[idx]) {
            newStates[idx] = speed;
          }
        });
        return newStates;
      }
      
      return {
        ...prev,
        [partitionIndex]: speed
      };
    });
  }, [syncStates]);

  const handleSyncToggle = useCallback((partitionIndex: number) => {
    // If "Synchronize all images on the exam" is active, clear it when toggling individual sync
    if (syncMode === 'all-controls') {
      setSyncMode(null);
    }
    
    setSyncStates(prev => ({
      ...prev,
      [partitionIndex]: !prev[partitionIndex]
    }));
  }, [syncMode]);

  const handleToggleSyncGroup = useCallback((partitionIndex: number) => {
    setSyncGroupStates(prev => {
      const newState = !prev[partitionIndex];
      // If enabling sync group, disable "Synchronize all images on the exam"
      if (newState && syncMode === 'all-controls') {
        setSyncMode(null);
        // Also deactivate all sync buttons
        setSyncStates({});
      }
      return {
        ...prev,
        [partitionIndex]: newState
      };
    });
  }, [syncMode]);

  const handleClearSyncGroups = useCallback(() => {
    // Clear sync groups
    setSyncGroupStates({});
    
    // Reset sync mode (clears start-time sync)
    setSyncMode(null);
    
    // Clear all individual sync states
    setSyncStates({});
    
    // Reset playback speeds to default based on stage tags
    const speedUpdates: Record<number, number> = {};
    for (let i = 0; i < totalPartitions; i++) {
      const cineIndex = currentPageIndex + i;
      if (cineIndex < filteredCineLoops.length) {
        const cineLoop = filteredCineLoops[cineIndex];
        const hasPeakTag = cineLoop.tags.includes('Peak');
        const hasPrePeakTag = cineLoop.tags.includes('Pre-Peak');
        let defaultSpeed = 1.0;
        
        if (hasPeakTag) {
          defaultSpeed = 4.0;
        } else if (hasPrePeakTag) {
          defaultSpeed = 2.5;
        }
        
        speedUpdates[i] = defaultSpeed;
      }
    }
    setPlaybackSpeeds(speedUpdates);
  }, [filteredCineLoops, currentPageIndex, totalPartitions]);

  const handleToggleAllSync = useCallback((enabled: boolean) => {
    setSyncStates(prev => {
      const newStates: Record<number, boolean> = {};
      for (let i = 0; i < totalPartitions; i++) {
        newStates[i] = enabled;
      }
      return newStates;
    });
  }, [totalPartitions]);

  const handleToggleChips = useCallback((partitionIndex: number) => {
    setChipsHidden(prev => {
      const newValue = !prev[partitionIndex];
      
      // If this partition has sync enabled, apply to all partitions with sync enabled
      if (syncStates[partitionIndex]) {
        const newStates = { ...prev };
        Object.keys(syncStates).forEach(key => {
          const idx = parseInt(key);
          if (syncStates[idx]) {
            newStates[idx] = newValue;
          }
        });
        return newStates;
      }
      
      return {
        ...prev,
        [partitionIndex]: newValue
      };
    });
  }, [syncStates]);

  const handlePanChange = useCallback((partitionIndex: number, x: number, y: number) => {
    setPanPositions(prev => ({
      ...prev,
      [partitionIndex]: { x, y }
    }));
  }, []);

  const handleAdjustmentChange = useCallback((partitionIndex: number, brightness: number, contrast: number) => {
    setImageAdjustments(prev => ({
      ...prev,
      [partitionIndex]: { brightness, contrast }
    }));
  }, []);

  const handleMeasurementComplete = useCallback((partitionIndex: number, measurement: Omit<Measurement, 'id'>, imageId: string) => {
    if (currentMeasurement) {
      // Calculate distance between start and end points
      const dx = measurement.endPoint.x - currentMeasurement.startPoint.x;
      const dy = measurement.endPoint.y - currentMeasurement.startPoint.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const newMeasurement: Measurement = {
        id: `${Date.now()}-${Math.random()}`,
        imageId: imageId,
        startPoint: currentMeasurement.startPoint,
        endPoint: measurement.endPoint,
        distance,
        label: pendingMeasurementLabel || undefined
      };
      
      setMeasurements(prev => ({
        ...prev,
        [partitionIndex]: [...(prev[partitionIndex] || []), newMeasurement]
      }));
      
      // If there's a label, also add to panel measurements
      if (pendingMeasurementLabel) {
        const now = new Date();
        const panelMeasurement: PanelMeasurement = {
          value: Math.round(distance * 0.1), // Convert pixels to mm (rough conversion)
          unit: 'mm',
          date: now.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
          time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
          imageId: imageId
        };
        
        setPanelMeasurements(prev => ({
          ...prev,
          [pendingMeasurementLabel]: [...(prev[pendingMeasurementLabel] || []), panelMeasurement]
        }));
      }
      
      setCurrentMeasurement(null);
      setPendingMeasurementLabel(null);
      // Deactivate the Distance tool after completing a measurement
      setActiveTool(null);
    } else {
      // This is the first point
      setCurrentMeasurement({
        partitionIndex,
        startPoint: measurement.endPoint // Use endPoint as startPoint for first click
      });
    }
  }, [currentMeasurement, pendingMeasurementLabel]);

  const handleSelectMeasurement = useCallback((partitionIndex: number, measurementIndex: number | null) => {
    if (measurementIndex === null) {
      setSelectedMeasurement(null);
    } else {
      setSelectedMeasurement({ partitionIndex, measurementIndex });
    }
  }, []);

  const handleDeleteMeasurement = useCallback((partitionIndex: number, measurementIndex: number) => {
    // Get the measurement being deleted to check if it has a label
    const measurementToDelete = measurements[partitionIndex]?.[measurementIndex];
    
    setMeasurements(prev => {
      const partitionMeasurements = prev[partitionIndex] || [];
      return {
        ...prev,
        [partitionIndex]: partitionMeasurements.filter((_, idx) => idx !== measurementIndex)
      };
    });
    
    // If the measurement has a label, also remove the corresponding entry from panelMeasurements
    if (measurementToDelete?.label) {
      const label = measurementToDelete.label;
      const distanceInMm = Math.round(measurementToDelete.distance * 0.1);
      
      setPanelMeasurements(prev => {
        const labelMeasurements = prev[label] || [];
        
        // Find and remove the first matching measurement (by distance value)
        const indexToRemove = labelMeasurements.findIndex(m => m.value === distanceInMm);
        
        if (indexToRemove !== -1) {
          const updatedMeasurements = labelMeasurements.filter((_, idx) => idx !== indexToRemove);
          
          // If no measurements left, remove the key entirely
          if (updatedMeasurements.length === 0) {
            const { [label]: _, ...rest } = prev;
            return rest;
          }
          
          return {
            ...prev,
            [label]: updatedMeasurements
          };
        }
        
        return prev;
      });
    }
    
    setSelectedMeasurement(null);
  }, [measurements]);

  const handleDeletePanelMeasurement = useCallback((label: string, index: number) => {
    // Get the panel measurement being deleted to find the matching image measurement
    const panelMeasurementToDelete = panelMeasurements[label]?.[index];
    
    setPanelMeasurements(prev => {
      const labelMeasurements = prev[label] || [];
      const updatedMeasurements = labelMeasurements.filter((_, idx) => idx !== index);
      
      // If no measurements left, remove the key entirely
      if (updatedMeasurements.length === 0) {
        const { [label]: _, ...rest } = prev;
        return rest;
      }
      
      return {
        ...prev,
        [label]: updatedMeasurements
      };
    });
    
    // Also remove the corresponding measurement from the image
    if (panelMeasurementToDelete) {
      const distanceValue = panelMeasurementToDelete.value;
      
      // Search through all partitions to find the matching measurement
      setMeasurements(prev => {
        const newMeasurements = { ...prev };
        let found = false;
        
        // Iterate through all partitions
        for (const partitionIndex in newMeasurements) {
          if (found) break;
          
          const partitionMeasurements = newMeasurements[partitionIndex] || [];
          
          // Find the measurement that matches the label and distance value
          const measurementIndex = partitionMeasurements.findIndex(m => {
            if (m.label !== label) return false;
            const measurementDistanceInMm = Math.round(m.distance * 0.1);
            return measurementDistanceInMm === distanceValue;
          });
          
          if (measurementIndex !== -1) {
            // Remove this measurement
            newMeasurements[partitionIndex] = partitionMeasurements.filter((_, idx) => idx !== measurementIndex);
            found = true;
          }
        }
        
        return newMeasurements;
      });
    }
  }, [panelMeasurements]);

  const handleUpdateMeasurement = useCallback((partitionIndex: number, measurementIndex: number, startPoint: { x: number; y: number }, endPoint: { x: number; y: number }) => {
    setMeasurements(prev => {
      const partitionMeasurements = prev[partitionIndex] || [];
      const updatedMeasurements = [...partitionMeasurements];
      
      // Calculate new distance
      const dx = endPoint.x - startPoint.x;
      const dy = endPoint.y - startPoint.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      updatedMeasurements[measurementIndex] = {
        ...updatedMeasurements[measurementIndex],
        startPoint,
        endPoint,
        distance
      };
      
      return {
        ...prev,
        [partitionIndex]: updatedMeasurements
      };
    });
  }, []);

  // Navigate to a measurement by imageId
  const handleNavigateToMeasurement = useCallback((imageId: string) => {
    // Find the image in the full dataset (no filters applied)
    const targetImage = cineLoops.find(loop => loop.id === imageId);
    
    if (!targetImage) {
      console.warn('Image not found:', imageId);
      toast.error('Image not found');
      return;
    }
    
    // Find the image index in filteredCineLoops
    let imageIndex = filteredCineLoops.findIndex(loop => loop.id === imageId);
    
    // If image is not in filtered results, we need to adjust filters
    if (imageIndex === -1) {
      // Store previous filter state
      const previousFilters = {
        selectedStages: [...selectedStages],
        selectedViews: [...selectedViews],
        imageType: imageType
      };
      
      const changedFilters: string[] = [];
      
      // Check if we need to adjust image type
      if (imageType === 'Stress' && targetImage.stage === '') {
        // Image is non-stress but we're showing stress images
        setImageType('All');
        changedFilters.push('Image Type changed to "All"');
      } else if (imageType === 'All' && targetImage.stage !== '' && !nonStressCineLoops.find(loop => loop.id === imageId)) {
        // Image is stress but we're showing all images (shouldn't happen, but just in case)
        setImageType('Stress');
        changedFilters.push('Image Type changed to "Stress"');
      }
      
      // Check if we need to adjust stage filter
      if (imageType === 'Stress' && selectedStages.length > 0 && targetImage.stage) {
        const hasStageMatch = targetImage.tags.some(tag => 
          selectedStages.some(stage => tag.toLowerCase() === stage.toLowerCase())
        );
        if (!hasStageMatch) {
          // Add the target image's stage to the filter
          setSelectedStages([...selectedStages, targetImage.stage]);
          changedFilters.push(`Stage "${targetImage.stage}" added to filter`);
        }
      }
      
      // Check if we need to adjust view filter
      if (imageType === 'Stress' && selectedViews.length > 0 && targetImage.view) {
        const hasViewMatch = targetImage.tags.some(tag => 
          selectedViews.some(view => tag.toLowerCase() === view.toLowerCase())
        );
        if (!hasViewMatch) {
          // Add the target image's view to the filter
          setSelectedViews([...selectedViews, targetImage.view]);
          changedFilters.push(`View "${targetImage.view}" added to filter`);
        }
      }
      
      // Show toast notification
      if (changedFilters.length > 0) {
        const message = changedFilters.length === 1 
          ? changedFilters[0]
          : `Filter adjusted: ${changedFilters.join(', ')}`;
        
        toast(message, {
          duration: 8000,
          action: {
            label: 'Close',
            onClick: () => {}
          }
        });
      }
      
      // Wait for next tick to allow state updates to complete
      setTimeout(() => {
        // Recalculate filtered loops with new filters
        const newFilteredLoops = cineLoops
          .filter((loop) => {
            const shouldApplyFilters = imageType === 'Stress' || (targetImage.stage === '' && previousFilters.imageType !== imageType);
            const stageMatch = !shouldApplyFilters || !selectedStages.length || 
              loop.tags.some(tag => [...selectedStages, targetImage.stage].some(stage => tag.toLowerCase() === stage.toLowerCase()));
            const viewMatch = !shouldApplyFilters || !selectedViews.length || 
              loop.tags.some(tag => [...selectedViews, targetImage.view].some(view => tag.toLowerCase() === view.toLowerCase()));
            const notHidden = !hiddenImages[loop.id];
            return stageMatch && viewMatch && notHidden;
          })
          .sort((a, b) => a.timestamp.localeCompare(b.timestamp));
        
        // Find the image in the new filtered results
        const newImageIndex = newFilteredLoops.findIndex(loop => loop.id === imageId);
        
        if (newImageIndex !== -1) {
          const targetPageIndex = Math.floor(newImageIndex / totalPartitions) * totalPartitions;
          const targetPartition = newImageIndex % totalPartitions;
          
          setCurrentPageIndex(targetPageIndex);
          setActivePartition(targetPartition);
        }
      }, 50);
      
      return;
    }
    
    // Image is already in filtered results, navigate normally
    const targetPageIndex = Math.floor(imageIndex / totalPartitions) * totalPartitions;
    const targetPartition = imageIndex % totalPartitions;
    
    setCurrentPageIndex(targetPageIndex);
    setActivePartition(targetPartition);
  }, [filteredCineLoops, totalPartitions, cineLoops, imageType, selectedStages, selectedViews, hiddenImages, nonStressCineLoops]);

  // Handle keyboard delete for selected measurement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' && selectedMeasurement) {
        handleDeleteMeasurement(selectedMeasurement.partitionIndex, selectedMeasurement.measurementIndex);
      }
      // Escape key to deactivate tool
      if (e.key === 'Escape') {
        setActiveTool(null);
        setCurrentMeasurement(null);
        setSelectedMeasurement(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMeasurement, handleDeleteMeasurement]);

  // Align all playback speeds to the slowest when "Align speed sync" is activated
  useEffect(() => {
    if (syncMode === 'speed') {
      // Calculate which partitions have images currently displayed
      const currentDisplayedLoops = Array.from({ length: totalPartitions }, (_, i) => {
        const cineIndex = currentPageIndex + i;
        return cineIndex < filteredCineLoops.length ? filteredCineLoops[cineIndex] : null;
      });
      
      // Find the minimum playback speed across partitions that have images
      const speeds: number[] = [];
      currentDisplayedLoops.forEach((loop, i) => {
        if (loop) {
          speeds.push(playbackSpeeds[i] || 1);
        }
      });
      
      if (speeds.length > 0) {
        const minSpeed = Math.min(...speeds);
        
        // Set all partitions with images to the minimum speed
        const newSpeeds: Record<number, number> = {};
        currentDisplayedLoops.forEach((loop, i) => {
          if (loop) {
            newSpeeds[i] = minSpeed;
          }
        });
        setPlaybackSpeeds(newSpeeds);
      }
      
      // Immediately turn off the mode after aligning (one-time action)
      setSyncMode(null);
    }
  }, [syncMode, totalPartitions, currentPageIndex, filteredCineLoops, playbackSpeeds]);

  // Get cine loops to display in current grid (sequential from currentPageIndex)
  const displayedCineLoops = Array.from({ length: totalPartitions }, (_, i) => {
    const cineIndex = currentPageIndex + i;
    return cineIndex < filteredCineLoops.length ? filteredCineLoops[cineIndex] : null;
  });

  // Get cine loops to display in prior exam grid (sequential from priorExamPageIndex)
  const displayedPriorCineLoops = Array.from({ length: totalPartitions }, (_, i) => {
    const cineIndex = priorExamPageIndex + i;
    return cineIndex < filteredPriorCineLoops.length ? filteredPriorCineLoops[cineIndex] : null;
  });

  // Set default playback speed based on stage tags
  useEffect(() => {
    const speedUpdates: Record<number, number> = {};
    let hasChanges = false;
    
    displayedCineLoops.forEach((cineLoop, index) => {
      const currentId = cineLoop?.id || null;
      const previousId = prevCineLoopIds.current[index];
      
      // If a new image is loaded into this partition (or first time loading)
      if (currentId !== previousId) {
        prevCineLoopIds.current[index] = currentId;
        
        if (cineLoop) {
          const hasPeakTag = cineLoop.tags.includes('Peak');
          const hasPrePeakTag = cineLoop.tags.includes('Pre-Peak');
          let defaultSpeed = 1.0;
          
          if (hasPeakTag) {
            defaultSpeed = 4.0;
          } else if (hasPrePeakTag) {
            defaultSpeed = 2.5;
          }
          
          speedUpdates[index] = defaultSpeed;
          hasChanges = true;
        }
      }
    });
    
    // Only update state if there are actual changes
    if (hasChanges) {
      setPlaybackSpeeds(prev => ({
        ...prev,
        ...speedUpdates
      }));
    }
  }, [displayedCineLoops]);

  // Reset or clamp currentPageIndex when filters, layout, or image type changes
  useEffect(() => {
    const maxStartIndex = Math.max(0, filteredCineLoops.length - totalPartitions);
    setCurrentPageIndex(prev => {
      if (prev > maxStartIndex) {
        return Math.floor(maxStartIndex / totalPartitions) * totalPartitions;
      }
      return prev;
    });
  }, [filteredCineLoops.length, totalPartitions]);

  // Reset to first page when switching image types or when filters are applied
  useEffect(() => {
    setCurrentPageIndex(0);
    setActivePartition(0);
  }, [imageType, selectedStages.length, selectedViews.length]);

  // Reset prior exam page index when layout changes or compare mode is toggled
  useEffect(() => {
    setPriorExamPageIndex(0);
  }, [totalPartitions, compareMode]);

  // Start-time sync - restart all partitions when the last one reaches its end
  useEffect(() => {
    if (syncMode !== 'start-time') {
      prevAllAtEnd.current = false;
      return;
    }

    // Helper function to get the playback range for a partition
    const getPartitionRange = (partitionIndex: number) => {
      const loop = displayedCineLoops[partitionIndex];
      if (!loop) return { start: 0, end: 0 };
      
      // All images have 50 frames
      const totalFrames = 50;
      
      const customRange = customRanges[partitionIndex];
      if (customRange) {
        // Custom range is already in frame numbers, not percentages
        return customRange;
      }
      
      const mode = playbackModes[partitionIndex] || 0;
      switch (mode) {
        case 1: // First ECG segment: 5% to 50%
          return { 
            start: Math.floor(totalFrames * 0.05), 
            end: Math.floor(totalFrames * 0.50) - 1
          };
        case 2: // Second ECG segment: 50% to 95%
          return { 
            start: Math.floor(totalFrames * 0.50), 
            end: Math.floor(totalFrames * 0.95) - 1
          };
        default: // Full range
          return { start: 0, end: totalFrames - 1 };
      }
    };

    // Check if all visible partitions have reached their end
    let allAtEnd = true;
    let anyPartitions = false;

    displayedCineLoops.forEach((loop, index) => {
      if (!loop) return;
      
      anyPartitions = true;
      const range = getPartitionRange(index);
      const currentFrame = framePositions[index] ?? range.start;
      
      // A partition is "at end" when it has reached or passed its end frame
      if (currentFrame < range.end) {
        allAtEnd = false;
      }
    });

    // When all partitions have reached their end (meaning the last/slowest one just finished)
    if (allAtEnd && anyPartitions) {
      // Only trigger the restart if we weren't already at end (prevent repeated resets)
      if (!prevAllAtEnd.current) {
        const newFramePositions: Record<number, number> = {};
        displayedCineLoops.forEach((loop, index) => {
          if (loop) {
            const range = getPartitionRange(index);
            newFramePositions[index] = range.start;
          }
        });
        
        if (Object.keys(newFramePositions).length > 0) {
          setFramePositions(prev => ({
            ...prev,
            ...newFramePositions
          }));
        }
        
        // Mark that we've completed a sync cycle
        prevAllAtEnd.current = true;
      }
    } else {
      // Not all at end yet - reset the flag so we can detect the next sync point
      prevAllAtEnd.current = false;
    }
  }, [syncMode, framePositions, displayedCineLoops, customRanges, playbackModes]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Layout shortcuts - number keys 1-4
      if (e.key === '1') {
        e.preventDefault();
        setGridLayout('1x1');
      }
      else if (e.key === '2') {
        e.preventDefault();
        setGridLayout('2x2');
      }
      else if (e.key === '3') {
        e.preventDefault();
        setGridLayout('3x3');
      }
      else if (e.key === '4') {
        e.preventDefault();
        setGridLayout('4x4');
      }
      // Page Down or Down Arrow - next page
      else if (e.key === 'PageDown' || (e.key === 'ArrowDown' && e.ctrlKey)) {
        e.preventDefault();
        const nextPageIndex = Math.min(
          currentPageIndex + totalPartitions,
          Math.max(0, filteredCineLoops.length - totalPartitions)
        );
        if (nextPageIndex !== currentPageIndex) {
          setCurrentPageIndex(nextPageIndex);
          setActivePartition(0);
        }
      }
      // Page Up or Up Arrow - previous page
      else if (e.key === 'PageUp' || (e.key === 'ArrowUp' && e.ctrlKey)) {
        e.preventDefault();
        const prevPageIndex = Math.max(0, currentPageIndex - totalPartitions);
        if (prevPageIndex !== currentPageIndex) {
          setCurrentPageIndex(prevPageIndex);
          setActivePartition(0);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageIndex, totalPartitions, filteredCineLoops.length]);

  // Mouse wheel navigation for partitions
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMouseOverLayout, setIsMouseOverLayout] = useState(false);
  
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only handle wheel events if mouse is over the layout
      if (!isMouseOverLayout) return;
      
      // Debounce wheel events to prevent over-scrolling
      if (wheelTimeoutRef.current) return;
      
      wheelTimeoutRef.current = setTimeout(() => {
        wheelTimeoutRef.current = null;
      }, 150); // 150ms debounce
      
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;
      
      // Get the absolute index of the currently selected image
      const currentImageIndex = currentPageIndex + activePartition;
      
      // Check if we're at the boundaries
      const isAtLastImage = currentImageIndex >= filteredCineLoops.length - 1;
      const isAtFirstImage = currentImageIndex <= 0;
      
      // Don't process wheel events if we're at the boundaries
      if ((scrollingDown && isAtLastImage) || (scrollingUp && isAtFirstImage)) {
        return;
      }
      
      // For 1x1 layout, move one image at a time
      if (gridLayout === '1x1') {
        if (scrollingDown) {
          const nextImageIndex = Math.min(currentImageIndex + 1, filteredCineLoops.length - 1);
          if (nextImageIndex !== currentImageIndex) {
            e.preventDefault();
            setCurrentPageIndex(nextImageIndex);
            setActivePartition(0);
          }
        } else if (scrollingUp) {
          const prevImageIndex = Math.max(currentImageIndex - 1, 0);
          if (prevImageIndex !== currentImageIndex) {
            e.preventDefault();
            setCurrentPageIndex(prevImageIndex);
            setActivePartition(0);
          }
        }
        return;
      }
      
      // For 2x2 layout, navigate based on thumbnail grid (advance by 2)
      if (gridLayout === '2x2') {
        const THUMBNAIL_COLS = 2;
        if (scrollingDown) {
          // Move down one row in the thumbnail grid (2 positions)
          const nextImageIndex = Math.min(currentImageIndex + THUMBNAIL_COLS, filteredCineLoops.length - 1);
          if (nextImageIndex !== currentImageIndex) {
            e.preventDefault();
            // Calculate which page and partition the next image should be displayed in
            const newPageIndex = Math.floor(nextImageIndex / totalPartitions) * totalPartitions;
            const newPartition = nextImageIndex % totalPartitions;
            setCurrentPageIndex(newPageIndex);
            setActivePartition(newPartition);
          }
        } else if (scrollingUp) {
          // Move up one row in the thumbnail grid (2 positions)
          const prevImageIndex = Math.max(currentImageIndex - THUMBNAIL_COLS, 0);
          if (prevImageIndex !== currentImageIndex) {
            e.preventDefault();
            // Calculate which page and partition the previous image should be displayed in
            const newPageIndex = Math.floor(prevImageIndex / totalPartitions) * totalPartitions;
            const newPartition = prevImageIndex % totalPartitions;
            setCurrentPageIndex(newPageIndex);
            setActivePartition(newPartition);
          }
        }
        return;
      }
      
      // For 3x3, 3x4, and 4x4 layouts, navigate based on layout columns
      if (scrollingDown) {
        // Move down one row in the viewing grid (advance by number of columns)
        const nextImageIndex = Math.min(currentImageIndex + cols, filteredCineLoops.length - 1);
        if (nextImageIndex !== currentImageIndex) {
          e.preventDefault();
          // Calculate which page and partition the next image should be displayed in
          const newPageIndex = Math.floor(nextImageIndex / totalPartitions) * totalPartitions;
          const newPartition = nextImageIndex % totalPartitions;
          setCurrentPageIndex(newPageIndex);
          setActivePartition(newPartition);
        }
      } else if (scrollingUp) {
        // Move up one row in the viewing grid (advance by number of columns)
        const prevImageIndex = Math.max(currentImageIndex - cols, 0);
        if (prevImageIndex !== currentImageIndex) {
          e.preventDefault();
          // Calculate which page and partition the previous image should be displayed in
          const newPageIndex = Math.floor(prevImageIndex / totalPartitions) * totalPartitions;
          const newPartition = prevImageIndex % totalPartitions;
          setCurrentPageIndex(newPageIndex);
          setActivePartition(newPartition);
        }
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
        wheelTimeoutRef.current = null;
      }
    };
  }, [activePartition, currentPageIndex, rows, cols, totalPartitions, filteredCineLoops.length, gridLayout, isMouseOverLayout]);

  // Auto-scroll thumbnail panel to keep the selected image visible
  useEffect(() => {
    const selectedIndex = currentPageIndex + activePartition;
    const thumbnailElement = thumbnailRefs[selectedIndex];
    if (thumbnailElement) {
      thumbnailElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [currentPageIndex, activePartition]);

  // Calculate active filter count - only applies to Stress images
  const activeFilterCount = selectedStages.length + selectedViews.length;
  const hiddenCount = Object.values(hiddenImages).filter(Boolean).length;
  const isFiltering = activeFilterCount > 0 && imageType === 'Stress';
  const hasHiddenOrFiltered = isFiltering || hiddenCount > 0;

  // Calculate active filter count for prior exam
  const priorActiveFilterCount = priorSelectedStages.length + priorSelectedViews.length;
  const priorIsFiltering = priorActiveFilterCount > 0 && priorImageType === 'Stress';
  const priorTotalExamCount = priorCineLoops.length;

  // Handle partition click - only updates active partition, not selected thumbnail
  const handlePartitionClick = useCallback((partitionIndex: number) => {
    setActivePartition(partitionIndex);
  }, []);

  // Create stable callback references for each partition to prevent unnecessary re-renders
  const partitionCallbacks = useMemo(() => {
    return Array.from({ length: totalPartitions }, (_, index) => {
      const cineLoop = displayedCineLoops[index];
      return {
        onClick: () => handlePartitionClick(index),
        onPlayPause: () => handlePlayPause(index),
        onFrameChange: (frame: number) => handleFrameChange(index, frame),
        onPlaybackModeChange: () => handlePlaybackModeChange(index),
        onToggleChips: () => handleToggleChips(index),
        onPlaybackSpeedChange: (speed: number) => handlePlaybackSpeedChange(index, speed),
        onCustomRangeChange: (start: number, end: number) => handleCustomRangeChange(index, start, end),
        onSyncToggle: () => handleSyncToggle(index),
        onToggleSyncGroup: () => handleToggleSyncGroup(index),
        onPanChange: (x: number, y: number) => handlePanChange(index, x, y),
        onAdjustmentChange: (brightness: number, contrast: number) => handleAdjustmentChange(index, brightness, contrast),
        onMeasurementComplete: (measurement: Omit<Measurement, 'id'>) => cineLoop && handleMeasurementComplete(index, measurement, cineLoop.id),
        onSelectMeasurement: (measurementIndex: number | null) => handleSelectMeasurement(index, measurementIndex),
        onDeleteMeasurement: (measurementIndex: number) => handleDeleteMeasurement(index, measurementIndex),
        onUpdateMeasurement: (measurementIndex: number, startPoint: { x: number; y: number }, endPoint: { x: number; y: number }) => handleUpdateMeasurement(index, measurementIndex, startPoint, endPoint),
      };
    });
  }, [totalPartitions, displayedCineLoops, handlePartitionClick, handlePlayPause, handleFrameChange, handlePlaybackModeChange, handleToggleChips, handlePlaybackSpeedChange, handleCustomRangeChange, handleSyncToggle, handleToggleSyncGroup, handlePanChange, handleAdjustmentChange, handleMeasurementComplete, handleSelectMeasurement, handleDeleteMeasurement, handleUpdateMeasurement]);

  return (
    <div className="h-screen bg-[#0d192d] flex">
      {/* Left Sidebar - Full Height */}
      <div className="w-[84px] bg-[#071326] flex flex-col items-center py-4 gap-2 border-r-2 border-[#1d2532]">
        <div className="text-white/90 text-xs px-2 py-1">UniView</div>
        
        {/* Worklists Button */}
        <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="box-border content-stretch flex flex-col gap-[4px] items-center p-[4px]">
            <div className="overflow-clip relative shrink-0 size-[18px]">
              <div className="absolute bottom-[66.67%] left-[33.33%] right-[33.33%] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                  <path d={worklistSvgPaths.p171600} fill="white" fillOpacity="0.9" />
                </svg>
              </div>
              <div className="absolute inset-[12.5%_12.5%_8.33%_12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
                  <path d={worklistSvgPaths.p13aeeb00} fill="white" fillOpacity="0.9" />
                </svg>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] text-[11px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Worklists
            </p>
          </div>
        </div>

        {/* Documents Button */}
        <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="box-border content-stretch flex flex-col gap-[4px] items-center p-[4px]">
            <div className="overflow-clip relative shrink-0 size-[18px]">
              <div className="absolute inset-[8.33%_16.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                  <path d={documentsSvgPaths.p1cab7f80} fill="white" fillOpacity="0.9" />
                </svg>
              </div>
              <div className="absolute bottom-[62.5%] left-[33.33%] right-1/2 top-[29.17%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
                  <path d="M4 0H0V2H4V0Z" fill="white" fillOpacity="0.6" />
                </svg>
              </div>
              <div className="absolute inset-[45.83%_33.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
                  <path d="M8 0H0V2H8V0Z" fill="white" fillOpacity="0.6" />
                </svg>
              </div>
              <div className="absolute inset-[62.5%_33.33%_29.17%_33.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
                  <path d="M8 0H0V2H8V0Z" fill="white" fillOpacity="0.6" />
                </svg>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] text-[11px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Documents
            </p>
          </div>
        </div>

        {/* Images Button */}
        <div className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
          <div className="box-border content-stretch flex flex-col gap-[4px] items-center p-[4px]">
            <div className="overflow-clip relative shrink-0 size-[18px]">
              <div className="absolute inset-[7.34%_2.34%_24.01%_41.83%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
                  <path d={imagesSvgPaths.p2c387200} fill="white" fillOpacity="0.6" />
                </svg>
              </div>
              <div className="absolute inset-[33.33%_37.5%_8.33%_8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
                  <path d={imagesSvgPaths.p35ba0100} fill="white" fillOpacity="0.9" />
                </svg>
              </div>
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] text-[11px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Images
            </p>
          </div>
        </div>

        <div className="flex-1" />
      </div>

      {/* Right Side Container - Headers and Content */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Patient Demographics Bar - spans to right edge */}
        <div className="h-14 bg-[#071326] border-b border-[#1d2532] flex items-center justify-between px-4">
          <div className="text-white">
            <span className="mr-4">Russell, Pauline</span>
            <span className="text-white/60 text-sm">8/14/1930 • 90 years • Female</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6">
              <UserIcon />
            </div>
            <span className="text-white text-sm">John Smith</span>
          </div>
        </div>

        {/* Exam Info Bars Container */}
        <div className="h-[27px] border-b border-black flex" style={{ marginRight: '55px' }}>
          {/* Current Exam Info Bar */}
          <div 
            className="bg-[#19253a] flex items-center px-4 gap-4"
            style={{ width: compareMode ? '50%' : '100%' }}
          >
            {/* Current Exam Icon */}
            <div className="overflow-clip relative size-4 shrink-0">
              <div className="absolute bottom-[12.5%] left-1/4 right-[12.5%] top-[12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
                  <path d={currentIconPaths.p2cd42200} fill="#51C260" />
                </svg>
              </div>
            </div>
            <span className="text-white text-[12px]">1/16/2023</span>
            <span className="text-white text-[12px]">US</span>
            <span className="text-white text-[12px]">TTE - Current</span>
          </div>

          {/* Prior Exam Info Bar - shown when compare mode is active */}
          {compareMode && (
            <div className="w-1/2 bg-[#253753] flex items-center justify-between px-4 relative">
              <div className="flex items-center gap-4">
                {/* Prior Icon */}
                <div className="relative size-4 shrink-0">
                  <div className="absolute inset-[20.83%_29.16%_33.33%_47.92%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 8">
                      <path d={priorExamSvgPaths.p109adb80} fill="white" fillOpacity="0.9" />
                    </svg>
                  </div>
                  <div className="absolute inset-[8.33%_4.17%_8.33%_0.04%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
                      <path d={priorExamSvgPaths.pb260900} fill="white" fillOpacity="0.9" />
                    </svg>
                  </div>
                </div>
                
                <span className="text-white text-[12px]">2021-04-05</span>
                <span className="text-white text-[12px]">US</span>
                <span className="text-white text-[12px]">TTE</span>
                
                {/* Dropdown Trigger */}
                <Popover open={priorExamDropdownOpen} onOpenChange={setPriorExamDropdownOpen}>
                  <PopoverTrigger asChild>
                    <button className="relative size-4 shrink-0 hover:opacity-80">
                      <div className="absolute inset-[29.88%_13.8%_20.69%_13.8%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
                          <path d={priorExamSvgPaths.p3fc56d00} fill="white" fillOpacity="0.9" />
                        </svg>
                      </div>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" align="start" className="w-[200px] bg-[#19253a] border-white/20 rounded-none p-0">
                    <div className="flex flex-col">
                      <button className="px-4 py-2 text-left text-white text-sm hover:bg-white/10 transition-colors">
                        2021-04-05 TTE
                      </button>
                      <button className="px-4 py-2 text-left text-white text-sm hover:bg-white/10 transition-colors">
                        2020-11-15 TTE
                      </button>
                      <button className="px-4 py-2 text-left text-white text-sm hover:bg-white/10 transition-colors">
                        2020-06-22 TTE
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              
              {/* Close Button */}
              <button 
                className="relative size-4 shrink-0 hover:opacity-80"
                onClick={() => setCompareMode(false)}
              >
                <div className="absolute inset-[17%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                    <path d={priorExamSvgPaths.p354ffc00} fill="white" fillOpacity="0.9" />
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Main Content Area - Thumbnails, Grid, and Toolbar */}
        <div className="flex flex-1 min-h-0">
          {/* Thumbnail Panel - Collapsed State */}
          {leftPanelCollapsed ? (
            <div className="w-[24px] bg-[#18253b] flex flex-col items-center pt-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-white/10"
                onClick={() => setLeftPanelCollapsed(false)}
              >
                <ChevronRight className="size-4" />
              </Button>
              <div className="mt-[14px]">
                <p 
                  className="font-['Open_Sans:Regular',sans-serif] font-normal text-sm text-white/90 whitespace-nowrap" 
                  style={{ 
                    fontVariationSettings: "'wdth' 100",
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)'
                  }}
                >
                  {hasHiddenOrFiltered ? `Showing ${filteredCineLoops.length} of ${totalExamCount} images` : `${totalExamCount} images in examination`}
                </p>
              </div>
            </div>
          ) : (
            /* Thumbnail Panel - Expanded State */
            <div className="w-[280px] bg-[#19253a] flex flex-col">
        {/* Toolbar */}
        <div className="h-11 bg-[#19253a] flex items-center px-2 justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-white/90 text-[14px]">
              {hasHiddenOrFiltered ? `Showing ${filteredCineLoops.length} of ${totalExamCount} images` : `${totalExamCount} images in examination`}
            </span>
            {isFiltering && (
              <span className="text-[10px] text-white/60 mt-0.5">
                {[...selectedStages, ...selectedViews].join(', ')}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className={`h-7 w-7 text-white hover:bg-white/10 relative rounded-none ${filterExpanded ? 'bg-[#679de4]/30 border-b-[3px] border-[#679de4] border-t-0 border-l-0 border-r-0' : ''}`}
              onClick={() => setFilterExpanded(!filterExpanded)}
            >
              <svg className="size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={filterSvgPaths.p24261200} fill="white" fillOpacity="0.9" />
                <path d={filterSvgPaths.p27b05400} fill="white" fillOpacity="0.6" />
              </svg>
              {isFiltering && (
                <div className="absolute -top-1 -right-1 size-4 bg-[#679de4] rounded-full flex items-center justify-center text-[10px] text-white">
                  {activeFilterCount}
                </div>
              )}
            </Button>
            <div className="h-5 w-px bg-white/30" />
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 text-white hover:bg-white/10"
              onClick={() => setLeftPanelCollapsed(true)}
            >
              <ChevronLeft className="size-4" />
            </Button>
          </div>
        </div>

        {/* Filter Panel - Expandable */}
        {filterExpanded && (
          <div className="bg-[#19253a] border-b border-white/15 px-3.5 pb-3.5 pt-2.5">
            {/* Image Type Toggle */}
            <div className={imageType === 'All' ? 'mb-0' : 'mb-4'}>
              <div className="content-stretch flex flex-col gap-[9px] items-start relative w-full">
                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18.328px] relative shrink-0 text-xs text-[rgba(255,255,255,0.6)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Image type
                </p>
                <div className="h-[35px] relative rounded-[2px] shrink-0 w-full">
                  <div className="size-full">
                    <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start p-px relative w-full">
                      <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full">
                        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
                          <button
                            onClick={() => setImageType('All')}
                            className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0"
                          >
                            <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[4px] py-0 relative shrink-0">
                              <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-sm text-[rgba(255,255,255,0.9)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Non-stress
                              </p>
                            </div>
                            {imageType === 'All' && (
                              <div aria-hidden="true" className="absolute border-[#679de4] border-[0px_0px_3px] border-solid inset-0 pointer-events-none" />
                            )}
                          </button>
                          <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                            <button
                              onClick={() => setImageType('Stress')}
                              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full"
                            >
                              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0">
                                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-sm text-[rgba(255,255,255,0.9)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Stress
                                </p>
                              </div>
                              {imageType === 'Stress' && (
                                <div aria-hidden="true" className="absolute border-[#679de4] border-[0px_0px_3px] border-solid inset-0 pointer-events-none" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View, Stage, and Clear filter - Only shown when Stress is selected */}
            {imageType === 'Stress' && (
              <>
                {/* View */}
                <div className="mb-4">
                  <p className="text-white/60 text-xs mb-2">View</p>
                  <div className="grid grid-cols-3 gap-2">
                    {['4CH', '2CH', 'PLAX', 'PSAX', 'CW'].map((view) => (
                      <button
                        key={view}
                        onClick={() => setSelectedViews(selectedViews.includes(view) ? selectedViews.filter(v => v !== view) : [...selectedViews, view])}
                        className={`relative rounded-[3px] px-2 h-[35px] text-white/90 text-sm text-center hover:bg-white/10 transition-colors ${
                          selectedViews.includes(view) ? 'bg-[rgba(103,157,228,0.3)]' : 'bg-[rgba(255,255,255,0.1)]'
                        }`}
                      >
                        {selectedViews.includes(view) && (
                          <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#679de4] rounded-b-[3px]" />
                        )}
                        <span className="relative">{view}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stage */}
                <div className="mb-3">
                  <p className="text-white/60 text-xs mb-2">Stage</p>
                  <div className="grid grid-cols-3 gap-2">
                    {['Baseline', 'Pre-Peak', 'Peak', 'Recovery'].map((stage) => (
                      <button
                        key={stage}
                        onClick={() => setSelectedStages(selectedStages.includes(stage) ? selectedStages.filter(s => s !== stage) : [...selectedStages, stage])}
                        className={`relative rounded-[3px] px-2 h-[35px] text-white/90 text-sm text-center hover:bg-white/10 transition-colors ${
                          selectedStages.includes(stage) ? 'bg-[rgba(103,157,228,0.3)]' : 'bg-[rgba(255,255,255,0.1)]'
                        }`}
                      >
                        {selectedStages.includes(stage) && (
                          <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#679de4] rounded-b-[3px]" />
                        )}
                        <span className="relative">{stage}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear filter */}
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setSelectedStages([]);
                      setSelectedViews([]);
                    }}
                    className="flex items-center gap-1.5 px-1.5 py-1 hover:bg-white/10 rounded transition-colors"
                  >
                    <svg className="size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g clipPath="url(#clip0_filter_clear)">
                        <path d="M10 0H0V1H10V0Z" fill="white" fillOpacity="0.6" />
                        <path d={filterSvgPaths.p4637680} fill="white" fillOpacity="0.6" />
                        <path d={filterSvgPaths.p3611e300} fill="white" fillOpacity="0.9" />
                        <path d={filterSvgPaths.p3ee0e900} fill="white" fillOpacity="0.9" />
                      </g>
                      <defs>
                        <clipPath id="clip0_filter_clear">
                          <rect fill="white" height="16" width="16" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-white/90 text-sm">Clear filters</span>
                  </button>
                </div>
              </>
            )}


          </div>
        )}

        {/* Thumbnails */}
        <div className="flex-1 overflow-y-auto p-0.5 pt-2 grid grid-cols-2 gap-0.5 custom-scrollbar content-start">
          {filteredCineLoops.map((loop, index) => {
            // Check if this thumbnail is currently displayed in the grid
            const isDisplayedInGrid = index >= currentPageIndex && index < currentPageIndex + totalPartitions;
            // Check if this is the selected/active image
            const isActiveImage = index === currentPageIndex + activePartition;
            
            return (
              <div key={loop.id} ref={(el) => { thumbnailRefs[index] = el; }}>
                <Thumbnail
                  cineLoop={loop}
                  isSelected={isActiveImage}
                  isDisplayed={isDisplayedInGrid}
                  onClick={() => handleThumbnailClick(index)}
                />
              </div>
            );
          })}
        </div>

        {/* Hidden Images Accordion - Sticky at bottom */}
        {Object.keys(hiddenImages).length > 0 && (
          <div className="sticky bottom-0 bg-[#131f34] border-t border-[rgba(255,255,255,0.15)]">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="hidden-images" className="border-none">
                <AccordionTrigger className="px-3 py-2 hover:no-underline hover:bg-white/5 [&>svg]:rotate-180 [&[data-state=open]>svg]:rotate-0">
                  <div className="flex items-center justify-between w-full pr-2">
                    <p className="font-['Open_Sans:Regular',sans-serif] font-normal text-xs text-white/60 text-[14px]">
                      Hidden images ({Object.keys(hiddenImages).length})
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-2">
                  <div className="max-h-[293px] overflow-y-auto px-2 custom-scrollbar">
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(hiddenImages).map(([cineLoopId, cineLoopData]) => (
                        <div 
                          key={cineLoopId}
                          className="relative bg-black border-2 border-neutral-700 overflow-hidden group"
                        >
                          {/* Dimmed thumbnail */}
                          <div className="relative">
                            <img 
                              src={cineLoopData.image} 
                              alt={cineLoopData.label}
                              className="w-full h-20 object-contain"
                            />
                            <div className="bg-black px-1.5 py-0.5 flex items-center justify-between">
                              <span className="text-white/60 text-xs">{cineLoopData.timestamp}</span>
                            </div>
                            {/* Gray overlay for dimming effect */}
                            <div className="absolute inset-0 bg-[rgba(188,188,188,0.2)] pointer-events-none" />
                          </div>
                          
                          {/* Overlay with stage and view labels */}
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5 pointer-events-none">
                            {cineLoopData.stage && (
                              <div className="px-1.5 py-0.5 text-white text-[12px] [text-shadow:#000000_0.6px_0.6px_0px]">
                                {cineLoopData.stage}
                              </div>
                            )}
                            {cineLoopData.view && (
                              <div className="px-1.5 py-0.5 text-white text-[10px] [text-shadow:#000000_0.6px_0.6px_0px]">
                                {cineLoopData.view}
                              </div>
                            )}
                          </div>
                          
                          {/* Undo button - visible on hover */}
                          <button
                            className="absolute bottom-1 right-1 size-6 bg-black/60 hover:bg-white/5 rounded flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                            onClick={() => {
                              setHiddenImages(prev => {
                                const newHidden = { ...prev };
                                delete newHidden[cineLoopId];
                                return newHidden;
                              });
                            }}
                            title="Undo hide"
                          >
                            <RotateCcw className="size-4 text-white" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>
          )}

      {/* Main Content */}
      <div className={`flex ${compareMode ? 'flex-row' : 'flex-col'} flex-1 min-h-0`}>
        {/* Current Exam Grid Layout */}
        <div 
          className={`${compareMode ? 'w-1/2' : 'flex-1'} bg-[#0d192d] min-h-0 overflow-auto custom-scrollbar flex flex-col`}
          onMouseEnter={() => setIsMouseOverLayout(true)}
          onMouseLeave={() => setIsMouseOverLayout(false)}
          onWheel={(e) => {
            // Only handle pagination if not scrolling within the container
            const target = e.currentTarget;
            const isAtTop = target.scrollTop === 0;
            const isAtBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 1;
            
            // If we can scroll within the container, let it scroll naturally
            if (!(isAtTop && e.deltaY < 0) && !(isAtBottom && e.deltaY > 0)) {
              return;
            }
            
            // Check if we're at the boundaries of available images
            const currentImageIndex = currentPageIndex + activePartition;
            const isAtLastImage = currentImageIndex >= filteredCineLoops.length - 1;
            const isAtFirstImage = currentPageIndex === 0;
            
            // Don't navigate past boundaries
            if ((e.deltaY > 0 && isAtLastImage) || (e.deltaY < 0 && isAtFirstImage)) {
              return;
            }
            
            // Otherwise, handle page navigation
            e.preventDefault();
            
            if (e.deltaY > 0 && isAtBottom) {
              // Scroll down - next page
              const nextPageIndex = Math.min(
                currentPageIndex + totalPartitions,
                Math.max(0, filteredCineLoops.length - totalPartitions)
              );
              if (nextPageIndex !== currentPageIndex) {
                setCurrentPageIndex(nextPageIndex);
                setActivePartition(0);
              }
            } else if (e.deltaY < 0 && isAtTop) {
              // Scroll up - previous page
              const prevPageIndex = Math.max(0, currentPageIndex - totalPartitions);
              if (prevPageIndex !== currentPageIndex) {
                setCurrentPageIndex(prevPageIndex);
                setActivePartition(0);
              }
            }
          }}
        >
          <div 
            className="w-full grid"
            style={{
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: cineEnabled 
                ? `repeat(${rows}, minmax(400px, calc((100vh - 88px) / ${rows})))`
                : `repeat(${rows}, minmax(300px, calc((100vh - 88px) / ${rows})))`,
              gap: '0'
            }}
          >
            {displayedCineLoops.map((cineLoop, index) => (
              <ContextMenu key={index}>
                <ContextMenuTrigger asChild>
                  <div className="h-full w-full">
                    <Partition
                      cineLoop={cineLoop}
                      isActive={activePartition === index}
                      onClick={partitionCallbacks[index].onClick}
                      isPlaying={playingStates[index] || false}
                      onPlayPause={partitionCallbacks[index].onPlayPause}
                      currentFrame={framePositions[index] || 0}
                      onFrameChange={partitionCallbacks[index].onFrameChange}
                      showCineController={cineEnabled}
                      showTimeline={cineEnabled}
                      playbackMode={playbackModes[index] || 0}
                      onPlaybackModeChange={partitionCallbacks[index].onPlaybackModeChange}
                      chipsHidden={chipsHidden[index] || false}
                      onToggleChips={partitionCallbacks[index].onToggleChips}
                      playbackSpeed={playbackSpeeds[index] || 1}
                      onPlaybackSpeedChange={partitionCallbacks[index].onPlaybackSpeedChange}
                      customRange={customRanges[index] || null}
                      onCustomRangeChange={partitionCallbacks[index].onCustomRangeChange}
                      panPosition={panPositions[index] || { x: 0, y: 0 }}
                      onPanChange={partitionCallbacks[index].onPanChange}
                      adjustMode={adjustMode}
                      brightness={imageAdjustments[index]?.brightness ?? 1}
                      contrast={imageAdjustments[index]?.contrast ?? 1}
                      onAdjustmentChange={partitionCallbacks[index].onAdjustmentChange}
                      hasWarning={warningPartition === index}
                      isSyncActive={syncStates[index] || false}
                      onSyncToggle={partitionCallbacks[index].onSyncToggle}
                      isInSyncGroup={syncGroupStates[index] || false}
                      onToggleSyncGroup={partitionCallbacks[index].onToggleSyncGroup}
                      syncMode={syncMode}
                      onSyncModeChange={setSyncMode}
                      onClearSyncGroups={handleClearSyncGroups}
                      onToggleAllSync={handleToggleAllSync}
                      activeTool={activeTool}
                      measurements={(measurements[index] || []).filter(m => m.imageId === cineLoop?.id)}
                      onMeasurementComplete={(measurement) => cineLoop && handleMeasurementComplete(index, measurement, cineLoop.id)}
                      selectedMeasurementIndex={selectedMeasurement?.partitionIndex === index ? selectedMeasurement.measurementIndex : null}
                      onSelectMeasurement={(measurementIndex) => handleSelectMeasurement(index, measurementIndex)}
                      onDeleteMeasurement={(measurementIndex) => handleDeleteMeasurement(index, measurementIndex)}
                      onUpdateMeasurement={(measurementIndex, startPoint, endPoint) => handleUpdateMeasurement(index, measurementIndex, startPoint, endPoint)}
                      isDrawingMeasurement={currentMeasurement?.partitionIndex === index}
                      measurementStartPoint={currentMeasurement?.partitionIndex === index ? currentMeasurement.startPoint : null}
                    />
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent 
                  className="bg-[#010916] border border-[rgba(255,255,255,0.1)] p-0 min-w-[242px]"
                >
                  <ContextMenuItem
                    className="text-white hover:bg-[#28374F] focus:bg-[#28374F] focus:text-white px-[26px] py-[11px] cursor-pointer rounded-none"
                    onClick={() => {
                      if (cineLoop) {
                        if (hiddenImages[cineLoop.id]) {
                          // Unhide the image
                          setHiddenImages(prev => {
                            const newHidden = { ...prev };
                            delete newHidden[cineLoop.id];
                            return newHidden;
                          });
                        } else {
                          // Hide the image and save its data
                          setHiddenImages(prev => ({ ...prev, [cineLoop.id]: cineLoop }));
                        }
                      }
                    }}
                  >
                    {cineLoop && hiddenImages[cineLoop.id] ? 'Show image' : 'Hide image'}
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            ))}
          </div>
        </div>

        {/* Prior Exam Grid Layout - shown when compare mode is active */}
        {compareMode && (
          <div 
            className="w-1/2 bg-[#0d192d] min-h-0 overflow-auto custom-scrollbar flex flex-col border-l border-white/10"
            onMouseEnter={() => setIsMouseOverLayout(true)}
            onMouseLeave={() => setIsMouseOverLayout(false)}
            onWheel={(e) => {
              // Only handle pagination if not scrolling within the container
              const target = e.currentTarget;
              const isAtTop = target.scrollTop === 0;
              const isAtBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 1;
              
              // If we can scroll within the container, let it scroll naturally
              if (!(isAtTop && e.deltaY < 0) && !(isAtBottom && e.deltaY > 0)) {
                return;
              }
              
              // Check if we're at the boundaries of available images
              const lastPriorImageIndex = filteredPriorCineLoops.length - 1;
              const isAtLastImage = priorExamPageIndex + totalPartitions > lastPriorImageIndex;
              const isAtFirstImage = priorExamPageIndex === 0;
              
              // Don't navigate past boundaries
              if ((e.deltaY > 0 && isAtLastImage) || (e.deltaY < 0 && isAtFirstImage)) {
                return;
              }
              
              // Otherwise, handle page navigation
              e.preventDefault();
              
              if (e.deltaY > 0 && isAtBottom) {
                // Scroll down - next page
                const nextPageIndex = Math.min(
                  priorExamPageIndex + totalPartitions,
                  Math.max(0, filteredPriorCineLoops.length - totalPartitions)
                );
                if (nextPageIndex !== priorExamPageIndex) {
                  setPriorExamPageIndex(nextPageIndex);
                }
              } else if (e.deltaY < 0 && isAtTop) {
                // Scroll up - previous page
                const prevPageIndex = Math.max(0, priorExamPageIndex - totalPartitions);
                if (prevPageIndex !== priorExamPageIndex) {
                  setPriorExamPageIndex(prevPageIndex);
                }
              }
            }}
          >
            <div 
              className="w-full grid flex-1"
              style={{
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridTemplateRows: cineEnabled 
                  ? `repeat(${rows}, minmax(400px, calc((100vh - 88px) / ${rows})))`
                  : `repeat(${rows}, minmax(300px, calc((100vh - 88px) / ${rows})))`,
                gap: '0'
              }}
            >
              {displayedPriorCineLoops.map((cineLoop, index) => (
                <ContextMenu key={index}>
                  <ContextMenuTrigger asChild>
                    <div className="h-full w-full">
                      <Partition
                        cineLoop={cineLoop}
                        isActive={index === priorExamActivePartition}
                        onClick={() => handlePriorPartitionClick(index)}
                        isPlaying={false}
                        onPlayPause={() => {}}
                        currentFrame={0}
                        onFrameChange={() => {}}
                        showCineController={cineEnabled}
                        showTimeline={cineEnabled}
                        playbackMode={0}
                        onPlaybackModeChange={() => {}}
                        chipsHidden={false}
                        onToggleChips={() => {}}
                        playbackSpeed={1}
                        onPlaybackSpeedChange={() => {}}
                        customRange={null}
                        onCustomRangeChange={() => {}}
                        panPosition={{ x: 0, y: 0 }}
                        onPanChange={() => {}}
                        adjustMode={false}
                        brightness={1}
                        contrast={1}
                        onAdjustmentChange={() => {}}
                        hasWarning={false}
                        isSyncActive={false}
                        onSyncToggle={() => {}}
                        isInSyncGroup={false}
                        onToggleSyncGroup={() => {}}
                        syncMode={null}
                        onSyncModeChange={() => {}}
                        onClearSyncGroups={() => {}}
                        onToggleAllSync={() => {}}
                        activeBorderColor="#3c73bb"
                        activeTool={null}
                        measurements={[]}
                        onMeasurementComplete={() => {}}
                        selectedMeasurementIndex={null}
                        onSelectMeasurement={() => {}}
                        onDeleteMeasurement={() => {}}
                        onUpdateMeasurement={() => {}}
                        isDrawingMeasurement={false}
                        measurementStartPoint={null}
                      />
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent 
                    className="bg-[#010916] border border-[rgba(255,255,255,0.1)] p-0 min-w-[242px]"
                  >
                    <ContextMenuItem
                      className="text-white hover:bg-[#28374F] focus:bg-[#28374F] focus:text-white px-[26px] py-[11px] cursor-pointer rounded-none"
                      onClick={() => {
                        console.log('Hide comparison image:', cineLoop.id);
                      }}
                    >
                      Hide image
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Measurements Panel */}
      {measurementsPanelOpen && (
        <MeasurementsPanel 
          panelMeasurements={panelMeasurements}
          onMeasurementItemClick={(label: string) => {
            setActiveTool('Distance');
            setPendingMeasurementLabel(label);
          }}
          onDeletePanelMeasurement={handleDeletePanelMeasurement}
          activeMeasurementLabel={pendingMeasurementLabel}
          onNavigateToMeasurement={handleNavigateToMeasurement}
        />
      )}

      {/* Comparison Thumbnail Panel - shown when compare mode is active */}
      {compareMode && (
        priorPanelCollapsed ? (
          /* Prior Panel - Collapsed State */
          <div className="w-[24px] bg-[#18253b] flex flex-col items-center pt-1 border-l border-white/10">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-white/10"
              onClick={() => setPriorPanelCollapsed(false)}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <div className="mt-[14px]">
              <p 
                className="font-['Open_Sans:Regular',sans-serif] font-normal text-xs text-white/90 whitespace-nowrap" 
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)'
                }}
              >
                {priorIsFiltering ? `Showing ${filteredPriorCineLoops.length} of ${priorTotalExamCount} images` : `${priorTotalExamCount} images in examination`}
              </p>
            </div>
          </div>
        ) : (
          /* Prior Panel - Expanded State */
          <div className="w-[280px] bg-[#19253a] flex flex-col border-l border-white/10">
            {/* Header */}
            <div className="h-11 bg-[#19253a] flex items-center px-2 justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-white/90 text-[14px]">
                {priorIsFiltering ? `Showing ${filteredPriorCineLoops.length} of ${priorTotalExamCount} images` : `${priorTotalExamCount} images in examination`}
              </span>
              {priorIsFiltering && (
                <span className="text-[10px] text-white/60 mt-0.5">
                  {[...priorSelectedStages, ...priorSelectedViews].join(', ')}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-7 w-7 text-white hover:bg-white/10 relative rounded-none ${priorFilterExpanded ? 'bg-[#679de4]/30 border-b-[3px] border-[#679de4] border-t-0 border-l-0 border-r-0' : ''}`}
                onClick={() => setPriorFilterExpanded(!priorFilterExpanded)}
              >
                <svg className="size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={filterSvgPaths.p24261200} fill="white" fillOpacity="0.9" />
                  <path d={filterSvgPaths.p27b05400} fill="white" fillOpacity="0.6" />
                </svg>
                {priorIsFiltering && (
                  <div className="absolute -top-1 -right-1 size-4 bg-[#679de4] rounded-full flex items-center justify-center text-[10px] text-white">
                    {priorActiveFilterCount}
                  </div>
                )}
              </Button>
              <div className="h-5 w-px bg-white/30" />
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 text-white hover:bg-white/10"
                onClick={() => setPriorPanelCollapsed(true)}
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* Filter Panel - Expandable */}
          {priorFilterExpanded && (
            <div className="bg-[#19253a] border-b border-white/15 px-3.5 pb-3.5 pt-2.5">
              {/* Image Type Toggle */}
              <div className={priorImageType === 'All' ? 'mb-0' : 'mb-4'}>
                <div className="content-stretch flex flex-col gap-[9px] items-start relative w-full">
                  <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[18.328px] relative shrink-0 text-xs text-[rgba(255,255,255,0.6)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Image type
                  </p>
                  <div className="h-[35px] relative rounded-[2px] shrink-0 w-full">
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-start p-px relative w-full">
                        <div className="basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px relative rounded-[1px] shrink-0 w-full">
                          <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
                            <button
                              onClick={() => setPriorImageType('All')}
                              className="basis-0 content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0"
                            >
                              <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[4px] py-0 relative shrink-0">
                                <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-sm text-[rgba(255,255,255,0.9)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Non-stress
                                </p>
                              </div>
                              {priorImageType === 'All' && (
                                <div aria-hidden="true" className="absolute border-[#679de4] border-[0px_0px_3px] border-solid inset-0 pointer-events-none" />
                              )}
                            </button>
                            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                              <button
                                onClick={() => setPriorImageType('Stress')}
                                className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full"
                              >
                                <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative shrink-0">
                                  <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-sm text-[rgba(255,255,255,0.9)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    Stress
                                  </p>
                                </div>
                                {priorImageType === 'Stress' && (
                                  <div aria-hidden="true" className="absolute border-[#679de4] border-[0px_0px_3px] border-solid inset-0 pointer-events-none" />
                                )}
                              </button>
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage, View, and Clear filter - Only shown when Stress is selected */}
              {priorImageType === 'Stress' && (
                <>
                  {/* Stage */}
                  <div className="mb-4">
                    <p className="text-white/60 text-xs mb-2">Stage</p>
                    <div className="grid grid-cols-3 gap-2">
                      {['Baseline', 'Pre-Peak', 'Peak', 'Recovery'].map((stage) => (
                        <button
                          key={stage}
                          onClick={() => setPriorSelectedStages(priorSelectedStages.includes(stage) ? priorSelectedStages.filter(s => s !== stage) : [...priorSelectedStages, stage])}
                          className={`relative rounded-[3px] px-2 h-[35px] text-white/90 text-sm text-center hover:bg-white/10 transition-colors ${
                            priorSelectedStages.includes(stage) ? 'bg-[rgba(103,157,228,0.3)]' : 'bg-[rgba(255,255,255,0.1)]'
                          }`}
                        >
                          {priorSelectedStages.includes(stage) && (
                            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#679de4] rounded-b-[3px]" />
                          )}
                          <span className="relative">{stage}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* View */}
                  <div className="mb-3">
                    <p className="text-white/60 text-xs mb-2">View</p>
                    <div className="grid grid-cols-3 gap-2">
                      {['4CH', '2CH', 'PLAX', 'PSAX', 'CW'].map((view) => (
                        <button
                          key={view}
                          onClick={() => setPriorSelectedViews(priorSelectedViews.includes(view) ? priorSelectedViews.filter(v => v !== view) : [...priorSelectedViews, view])}
                          className={`relative rounded-[3px] px-2 h-[35px] text-white/90 text-sm text-center hover:bg-white/10 transition-colors ${
                            priorSelectedViews.includes(view) ? 'bg-[rgba(103,157,228,0.3)]' : 'bg-[rgba(255,255,255,0.1)]'
                          }`}
                        >
                          {priorSelectedViews.includes(view) && (
                            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#679de4] rounded-b-[3px]" />
                          )}
                          <span className="relative">{view}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Clear filter */}
                  <div className="pt-3">
                    <button
                      onClick={() => {
                        setPriorSelectedStages([]);
                        setPriorSelectedViews([]);
                      }}
                      className="flex items-center gap-1.5 px-1.5 py-1 hover:bg-white/10 rounded transition-colors"
                    >
                      <svg className="size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g clipPath="url(#clip0_filter_clear_prior)">
                          <path d="M10 0H0V1H10V0Z" fill="white" fillOpacity="0.6" />
                          <path d={filterSvgPaths.p4637680} fill="white" fillOpacity="0.6" />
                          <path d={filterSvgPaths.p3611e300} fill="white" fillOpacity="0.9" />
                          <path d={filterSvgPaths.p3ee0e900} fill="white" fillOpacity="0.9" />
                        </g>
                        <defs>
                          <clipPath id="clip0_filter_clear_prior">
                            <rect fill="white" height="16" width="16" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-white/90 text-sm">Clear filters</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

            {/* Thumbnails */}
            <div className="flex-1 overflow-y-auto p-0.5 pt-2 grid grid-cols-2 gap-0.5 custom-scrollbar content-start">
              {filteredPriorCineLoops.map((loop, index) => {
                // Check if this thumbnail is currently displayed in the grid
                const isDisplayedInGrid = index >= priorExamPageIndex && index < priorExamPageIndex + totalPartitions;
                // Check if this is the selected/active image
                const isActiveImage = index === priorExamPageIndex + priorExamActivePartition;
                
                return (
                  <div key={loop.id}>
                    <Thumbnail
                      cineLoop={loop}
                      isSelected={isActiveImage}
                      isDisplayed={isDisplayedInGrid}
                      onClick={() => handlePriorThumbnailClick(index)}
                      borderColor="#3c73bb"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )
      )}

      {/* Right Toolbar */}
      <div className="w-[55px] bg-[#0d192d] border-l border-white/10 flex flex-col pb-4">
        {/* Tools */}
        <Popover open={toolsMenuOpen} onOpenChange={setToolsMenuOpen}>
          <PopoverTrigger asChild>
            <div>
              <ToolbarButton
                icon={
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g clipPath="url(#clip0_1_3546)">
                      <path d={svgPaths.p70f00} fill="white" fillOpacity="0.6" />
                      <path d={svgPaths.p3e29a000} fill="white" fillOpacity="0.9" />
                      <path d={svgPaths.p3098d80} fill="white" fillOpacity="0.9" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3546">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                label="tools"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent 
            side="left" 
            align="start" 
            className="p-0 border-0 w-auto rounded-none"
            sideOffset={8}
          >
            <ToolsMenu onItemClick={(tool) => {
              console.log('Selected tool:', tool);
              setActiveTool(tool);
              setToolsMenuOpen(false);
            }} />
          </PopoverContent>
        </Popover>
        
        <ToolbarDivider />
        
        {/* Measure */}
        <div onClick={() => setMeasurementsPanelOpen(!measurementsPanelOpen)}>
          <ToolbarButton
            icon={
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_1_3570)">
                  <path d={svgPaths.p1fa8fd00} fill="white" fillOpacity="0.6" />
                  <path d={svgPaths.p3571cd80} fill="white" fillOpacity="0.6" />
                  <path d={svgPaths.p12be5200} fill="white" fillOpacity="0.6" />
                  <path d={svgPaths.p30e51770} fill="white" fillOpacity="0.9" />
                  <path d={svgPaths.p1942ee00} fill="white" fillOpacity="0.9" />
                  <path d={svgPaths.p610cc00} fill="white" fillOpacity="0.9" />
                </g>
                <defs>
                  <clipPath id="clip0_1_3570">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
            }
            label="Measure"
            active={measurementsPanelOpen}
          />
        </div>
        
        {/* Show all */}
        <ToolbarButton
          icon={
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g clipPath="url(#clip0_1_3559)">
                <path d={svgPaths.pb51a180} fill="white" fillOpacity="0.6" />
                <path d={svgPaths.p3f408400} fill="white" fillOpacity="0.6" />
                <path d={svgPaths.p3af75700} fill="white" fillOpacity="0.6" />
                <path d={svgPaths.p1ccf6a80} fill="white" fillOpacity="0.9" />
                <path d={svgPaths.p25f5f1f0} fill="white" fillOpacity="0.9" />
              </g>
              <defs>
                <clipPath id="clip0_1_3559">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
          }
          label="Show all"
        />
        
        {/* Adjust */}
        <div onClick={() => setAdjustMode(!adjustMode)}>
          <ToolbarButton
            icon={
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <g id="base">
                    <path d={svgPaths.p23187600} fill="white" fillOpacity="0.6" />
                    <path d={svgPaths.p2b30e500} fill="white" fillOpacity="0.9" />
                    <path d={svgPaths.p21aa0700} fill="white" fillOpacity="0.9" />
                    <path d={svgPaths.p20e1a640} fill="white" fillOpacity="0.9" />
                    <path d={svgPaths.p2be91e00} fill="white" fillOpacity="0.9" />
                    <path d={svgPaths.p2a42bd00} fill="white" fillOpacity="0.9" />
                    <path d={svgPaths.p68c7b80} fill="white" fillOpacity="0.9" />
                    <path d={svgPaths.p796ec00} fill="white" fillOpacity="0.9" />
                    <path d={svgPaths.p354f3780} fill="white" fillOpacity="0.9" />
                  </g>
                  <g id="accent">
                    <path d={svgPaths.p149acf80} fill="white" fillOpacity="0.6" />
                  </g>
                </g>
              </svg>
            }
            label="Adjust"
            active={adjustMode}
          />
        </div>
        
        {/* Reset view */}
        <ToolbarButton
          icon={
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g>
                <path d={svgPaths.pd239e80} fill="white" fillOpacity="0.3" />
                <path d={svgPaths.pf15e000} fill="white" fillOpacity="0.3" />
              </g>
            </svg>
          }
          label="Reset view"
          onClick={() => {
            // Reset pan positions
            setPanPositions({});
            // Reset brightness/contrast adjustments
            setImageAdjustments({});
          }}
        />
        
        <ToolbarDivider />
        
        {/* Compare */}
        <div onClick={() => setCompareMode(!compareMode)}>
          <ToolbarButton
            icon={
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <path d={svgPaths.pb5b3e00} fill="white" fillOpacity="0.9" />
                  <path d={svgPaths.p14509e80} fill="white" fillOpacity="0.6" />
                </g>
              </svg>
            }
            label="Compare"
            active={compareMode}
          />
        </div>
        
        <ToolbarDivider />
        
        {/* Layout with Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <div>
              <ToolbarButton
                icon={
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g>
                      <path d={svgPaths.p3b8f8280} fill="white" fillOpacity="0.9" />
                    </g>
                  </svg>
                }
                label="Layout"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent side="left" className="w-40 bg-[#19253a] border-white/20 rounded-none">
            <div className="grid gap-1">
              <Button
                variant={gridLayout === '1x1' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setGridLayout('1x1')}
                className="justify-start text-white hover:bg-white/10"
              >
                1×1
              </Button>
              <Button
                variant={gridLayout === '2x2' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setGridLayout('2x2')}
                className="justify-start text-white hover:bg-white/10"
              >
                2×2
              </Button>
              <Button
                variant={gridLayout === '3x3' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setGridLayout('3x3')}
                className="justify-start text-white hover:bg-white/10"
              >
                3×3
              </Button>
              <Button
                variant={gridLayout === '3x4' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setGridLayout('3x4')}
                className="justify-start text-white hover:bg-white/10"
              >
                3×4
              </Button>
              <Button
                variant={gridLayout === '4x4' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setGridLayout('4x4')}
                className="justify-start text-white hover:bg-white/10"
              >
                4×4
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        
        {/* Previous */}
        <ToolbarButton
          icon={
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g clipPath="url(#clip0_1_3542)">
                <path d={svgPaths.p3ea62e70} fill="white" fillOpacity="0.3" />
                <path d={svgPaths.p34b5d000} fill="white" fillOpacity="0.3" />
              </g>
              <defs>
                <clipPath id="clip0_1_3542">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
          }
          label="Previous"
          disabled
        />
        
        {/* Next */}
        <ToolbarButton
          icon={
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g clipPath="url(#clip0_1_3551)">
                <path d={svgPaths.p157b9d40} fill="white" fillOpacity="0.9" />
                <path d={svgPaths.p8fc30c0} fill="white" fillOpacity="0.6" />
              </g>
              <defs>
                <clipPath id="clip0_1_3551">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
          }
          label="Next"
        />
        
        {/* Cine */}
        <ToolbarButton
          icon={
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g clipPath="url(#clip0_1_3529)">
                <path d={svgPaths.p1c450d00} fill="white" fillOpacity="0.9" />
                <path d={svgPaths.p32e4e600} fill="white" fillOpacity="0.6" />
                <path d={svgPaths.p3448a480} fill="white" fillOpacity="0.9" />
              </g>
              <defs>
                <clipPath id="clip0_1_3529">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
          }
          label="Cine"
          active={cineEnabled}
          onClick={() => setCineEnabled(!cineEnabled)}
        />
        
        {/* Align with Popover */}
        <Popover open={syncMenuOpen} onOpenChange={setSyncMenuOpen}>
          <PopoverTrigger asChild>
            <div>
              <ToolbarButton
                icon={
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                    <g>
                      <mask fill="white" id="path-1-inside-1_align">
                        <rect height="17" rx="1" width="17" />
                      </mask>
                      <rect height="17" mask="url(#path-1-inside-1_align)" rx="1" stroke="white" strokeOpacity="0.6" strokeWidth="3.2" width="17" />
                      <line stroke="white" strokeOpacity="0.6" strokeWidth="1.6" x1="17" x2="12" y1="8.8" y2="8.8" />
                      <line stroke="white" strokeOpacity="0.6" strokeWidth="1.6" x1="6" x2="1" y1="8.8" y2="8.8" />
                      <line stroke="white" strokeOpacity="0.6" strokeWidth="1.6" x1="8.2" x2="8.2" y1="6" y2="1" />
                      <line stroke="white" strokeOpacity="0.6" strokeWidth="1.6" x1="8.8" x2="8.8" y1="11" y2="16" />
                      <path d={alignSvgPaths.p2a2bbf00} fill="#0D192D" />
                      <path d={alignSvgPaths.p35e24800} fill="white" fillOpacity="0.9" />
                    </g>
                  </svg>
                }
                label="Sync"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent side="left" className="w-[220px] p-0 bg-[#030e1f] border-white/20 rounded-none">
            <div className="relative py-1">
              {/* Align speed sync */}
              <button 
                onClick={() => {
                  setSyncMode('speed');
                  setSyncMenuOpen(false);
                }}
                className="relative w-full h-[28px] flex items-center px-[11px] transition-colors hover:bg-white/5"
              >
                <div className="size-4 mr-[11px] relative flex items-center justify-center">
                  <svg className="size-[14px]" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path clipRule="evenodd" d={syncIconPaths.pdb8ae00} fill="white" fillOpacity="0.6" fillRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90 text-sm">Align speed sync</span>
              </button>
              
              {/* Start-time sync */}
              <button 
                onClick={() => {
                  setSyncMode('start-time');
                  setSyncMenuOpen(false);
                }}
                className="relative w-full h-[28px] flex items-center px-[11px] transition-colors hover:bg-white/5"
              >
                <div className="size-4 mr-[11px] relative flex items-center justify-center">
                  <svg className="size-[14px]" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path clipRule="evenodd" d={syncIconPaths.pdb8ae00} fill="white" fillOpacity="0.6" fillRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90 text-sm">Start-time sync</span>
              </button>
              
              {/* Horizontal divider */}
              <div className="mx-[5px] my-[2px] h-px bg-[rgba(255,255,255,0.15)]" />
              
              {/* Clear synchronization */}
              <button 
                onClick={() => {
                  handleClearSyncGroups();
                  setSyncMenuOpen(false);
                }}
                className="relative w-full h-[28px] flex items-center px-[11px] transition-colors hover:bg-white/5"
              >
                <div className="size-4 mr-[11px] relative flex items-center justify-center">
                  <svg className="size-[14px]" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path clipRule="evenodd" d={syncIconPaths.pdb8ae00} fill="white" fillOpacity="0.6" fillRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90 text-sm">Clear synchronization</span>
              </button>
            </div>
          </PopoverContent>
        </Popover>
        
        <ToolbarDivider />
        
        {/* Warning */}
        <div onClick={() => {
          if (warningPartition === activePartition) {
            setWarningPartition(null);
          } else {
            setWarningPartition(activePartition);
          }
        }}>
          <ToolbarButton
            icon={<AlertTriangle className="w-full h-full" strokeWidth={1.5} />}
            label="Warning"
            active={warningPartition === activePartition}
          />
        </div>
      </div>
        </div>
      </div>
      
      {/* Toast notifications */}
      <Toaster 
        position="bottom-center"
        theme="light"
        toastOptions={{
          style: {
            background: '#EBEDF0',
            border: 'none',
            borderRadius: '3px',
            boxShadow: '0px 1px 18px 0px rgba(0,0,0,0.12), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 3px 5px 0px rgba(0,0,0,0.2)',
            color: 'rgba(0, 0, 0, 0.9)',
            padding: '6px 8px 6px 16px',
            fontSize: '14px',
            fontFamily: "'Open Sans', sans-serif",
          },
          actionButtonStyle: {
            background: '#3c73bb',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '0 8px',
            height: '26px',
            fontSize: '12px',
            fontWeight: 600,
            fontFamily: "'Open Sans', sans-serif",
          },
        }}
      />
    </div>
  );
}