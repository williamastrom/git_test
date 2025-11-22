import { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Slider } from './ui/slider';
import svgPaths from '../imports/svg-gfk14sauft';
import ecgPaths from '../imports/svg-5ts7n8v2j1';
import echoTimePaths from '../imports/svg-fu2w3p7bwx';
import infoPaths from '../imports/svg-nita330o8z';
import { imgVector, imgVector1 } from '../imports/svg-mh2xq';
import StartMarker from '../imports/StartMarker-72-76';
import EndMarker from '../imports/EndMarker-72-80';
import WindowLevelChip from '../imports/Frame811666';
import WarningChip from '../imports/Group1003';
import tooltipSvgPaths from '../imports/svg-p2873ok3ez';
import resetSvgPaths from '../imports/svg-6i5164pk6g';

interface CineControllerProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  currentFrame: number;
  totalFrames: number;
  onFrameChange: (frame: number) => void;
  isActive: boolean;
  isHovering: boolean;
  playbackMode: number;
  onPlaybackModeChange: () => void;
  onToggleChips: () => void;
  chipsHidden: boolean;
  playbackSpeed: number;
  onPlaybackSpeedChange: (speed: number) => void;
  defaultSpeed?: number;
  isCWImage?: boolean;
  customRange: { start: number; end: number } | null;
  onCustomRangeChange: (start: number, end: number) => void;
  brightness?: number;
  contrast?: number;
  hasWarning?: boolean;
  showTimeline?: boolean;
  isSyncActive?: boolean;
  onSyncToggle?: () => void;
  isInSyncGroup?: boolean;
  onToggleSyncGroup?: () => void;
  syncMode?: 'speed' | 'start-time' | 'all-controls' | null;
  onSyncModeChange?: (mode: 'speed' | 'start-time' | 'all-controls' | null) => void;
  onClearSyncGroups?: () => void;
  onToggleAllSync?: (enabled: boolean) => void;
}

export function CineController({ 
  isPlaying, 
  onPlayPause, 
  currentFrame, 
  totalFrames, 
  onFrameChange,
  isActive,
  isHovering,
  playbackMode,
  onPlaybackModeChange,
  onToggleChips,
  chipsHidden,
  playbackSpeed,
  onPlaybackSpeedChange,
  defaultSpeed = 1.0,
  isCWImage = false,
  customRange,
  onCustomRangeChange,
  brightness = 1,
  contrast = 1,
  hasWarning = false,
  showTimeline = true,
  isSyncActive = false,
  onSyncToggle,
  isInSyncGroup = false,
  onToggleSyncGroup,
  syncMode = null,
  onSyncModeChange,
  onClearSyncGroups,
  onToggleAllSync
}: CineControllerProps) {
  const [isHoveringTimeline, setIsHoveringTimeline] = useState(false);
  const [isHoveringECG, setIsHoveringECG] = useState(false);
  const [isSpeedPopoverOpen, setIsSpeedPopoverOpen] = useState(false);
  const [isSyncMenuOpen, setIsSyncMenuOpen] = useState(false);
  const [isDraggingStart, setIsDraggingStart] = useState(false);
  const [isDraggingEnd, setIsDraggingEnd] = useState(false);
  const [isHoveringSpeedSlider, setIsHoveringSpeedSlider] = useState(false);
  const [isDraggingSpeedSlider, setIsDraggingSpeedSlider] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Calculate start and end frames based on playback mode
  const getPlaybackRange = () => {
    // If custom range is set, use that
    if (customRange) {
      return customRange;
    }
    
    // ECG marker positions at 5%, 50%, and 95%
    switch (playbackMode) {
      case 1: // First ECG segment: 5% to 50%
        return { start: Math.floor(totalFrames * 0.05), end: Math.floor(totalFrames * 0.50) };
      case 2: // Second ECG segment: 50% to 95%
        return { start: Math.floor(totalFrames * 0.50), end: Math.floor(totalFrames * 0.95) };
      default: // Full range (mode 0, ECG inactive)
        return { start: 0, end: totalFrames };
    }
  };
  
  const { start: startFrame, end: endFrame } = getPlaybackRange();
  
  // Calculate progress within the active range
  const rangeSize = endFrame - startFrame;
  const progressWithinRange = Math.max(0, Math.min(rangeSize, currentFrame - startFrame));
  const progressPercentage = ((startFrame + progressWithinRange) / totalFrames) * 100;
  const startPercentage = (startFrame / totalFrames) * 100;
  const endPercentage = (endFrame / totalFrames) * 100;
  
  // Determine if icons should be white (active or hovering partition)
  const iconOpacityClass = (isActive || isHovering) ? '' : 'opacity-30';

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newFrame = Math.round(percentage * totalFrames);
    onFrameChange(Math.max(0, Math.min(totalFrames, newFrame)));
  };

  const handleStartMarkerMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDraggingStart(true);
    
    // Initialize custom range if not set
    if (!customRange) {
      onCustomRangeChange(startFrame, endFrame);
    }
  };

  const handleEndMarkerMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDraggingEnd(true);
    
    // Initialize custom range if not set
    if (!customRange) {
      onCustomRangeChange(startFrame, endFrame);
    }
  };

  // Handle mouse move and mouse up for dragging
  useEffect(() => {
    if (!isDraggingStart && !isDraggingEnd) return;

    const handleMarkerDrag = (e: MouseEvent, isStart: boolean) => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      const newFrame = Math.round(percentage * totalFrames);
      
      const currentStart = customRange?.start ?? startFrame;
      const currentEnd = customRange?.end ?? endFrame;
      
      if (isStart) {
        // Ensure start doesn't go past end
        const maxStart = currentEnd - 1;
        const newStart = Math.min(newFrame, maxStart);
        onCustomRangeChange(newStart, currentEnd);
      } else {
        // Ensure end doesn't go before start
        const minEnd = currentStart + 1;
        const newEnd = Math.max(newFrame, minEnd);
        onCustomRangeChange(currentStart, newEnd);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingStart) {
        handleMarkerDrag(e, true);
      } else if (isDraggingEnd) {
        handleMarkerDrag(e, false);
      }
    };

    const handleMouseUp = () => {
      setIsDraggingStart(false);
      setIsDraggingEnd(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingStart, isDraggingEnd, customRange, startFrame, endFrame, totalFrames, onCustomRangeChange]);

  // Handle global mouse up for speed slider
  useEffect(() => {
    if (!isDraggingSpeedSlider) return;

    const handleMouseUp = () => {
      setIsDraggingSpeedSlider(false);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('pointerup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('pointerup', handleMouseUp);
    };
  }, [isDraggingSpeedSlider]);

  return (
    <div className="bg-black z-10" onClick={(e) => e.stopPropagation()}>
      {/* Timeline at top - always rendered to maintain height, but content hidden for CW images or when showTimeline is false */}
      {!isCWImage && (
        <div 
          className="relative h-4 bg-black cursor-pointer group/timeline px-2"
          onMouseEnter={() => setIsHoveringTimeline(true)}
          onMouseLeave={() => setIsHoveringTimeline(false)}
          ref={timelineRef}
        >
          <div className={showTimeline ? 'opacity-100' : 'opacity-0'} style={{ transition: 'none' }}>
            {/* Progress bar background */}
            <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-[2px] group-hover/timeline:h-[4px] transition-all duration-150 bg-white/20" onClick={handleTimelineClick}>
                {/* ECG section dividers - blue vertical markers at 1/3 intervals */}
                <div 
                  className={`absolute w-[2px] bg-[#568bd1] pointer-events-none transition-all duration-150 ${isHoveringECG ? 'h-[10px] -top-[4px]' : 'top-0 h-full'}`}
                  style={{ left: '5%' }} 
                />
                <div 
                  className={`absolute w-[2px] bg-[#568bd1] pointer-events-none transition-all duration-150 ${isHoveringECG ? 'h-[10px] -top-[4px]' : 'top-0 h-full'}`}
                  style={{ left: '50%' }} 
                />
                <div 
                  className={`absolute w-[2px] bg-[#568bd1] pointer-events-none transition-all duration-150 ${isHoveringECG ? 'h-[10px] -top-[4px]' : 'top-0 h-full'}`}
                  style={{ left: '95%' }} 
                />
                
                {/* Progress - watched portion */}
                <div 
                  className="absolute left-0 top-0 h-full bg-[#808080]"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              
              {/* Inactive range overlays - before start marker */}
              <div 
                className="absolute left-2 top-1/2 -translate-y-1/2 h-[3px] group-hover/timeline:h-[5px] bg-black/70 pointer-events-none transition-all duration-150"
                style={{ width: `calc(${startPercentage}% - 8px)` }}
              />
              
              {/* Inactive range overlays - after end marker */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 h-[3px] group-hover/timeline:h-[5px] bg-black/70 pointer-events-none transition-all duration-150"
                style={{ 
                  left: `calc(${endPercentage}% + 8px)`,
                  right: '8px'
                }}
              />
              
              {/* Current position indicator - visible on hover */}
              {isHoveringTimeline && (
                <div 
                  className="absolute size-[14px] rounded-full bg-[#D9D9D9] shadow-lg pointer-events-none"
                  style={{ 
                    left: `calc(8px + (100% - 16px) * ${progressPercentage / 100})`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              )}

              {/* Start marker - visible on hover */}
              {(isHoveringTimeline) && (
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 h-4 w-[7px] cursor-ew-resize z-10 ${isDraggingStart ? '' : 'transition-all duration-200'}`}
                  style={{ left: `calc(8px + (100% - 16px) * ${startPercentage / 100})`, marginLeft: '-2.5px' }}
                  onMouseDown={handleStartMarkerMouseDown}
                >
                  <StartMarker />
                </div>
              )}

              {/* End marker - visible on hover */}
              {(isHoveringTimeline) && (
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 h-4 w-[7px] cursor-ew-resize z-10 ${isDraggingEnd ? '' : 'transition-all duration-200'}`}
                  style={{ left: `calc(8px + (100% - 16px) * ${endPercentage / 100})`, marginLeft: '-2.5px' }}
                  onMouseDown={handleEndMarkerMouseDown}
                >
                  <EndMarker />
                </div>
              )}
            </div>
        </div>
      )}

      {/* Controls */}
      <div className={`flex items-center px-2 pt-0 pb-[3px] ${isCWImage ? 'justify-end' : 'justify-between'}`}>
        {/* Left side - Play/Pause and Frame stepping - hidden for CW images */}
        {!isCWImage && (
          <div className="flex items-center gap-0.5">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-white hover:bg-white/10 rounded-none"
            onClick={(e) => {
              e.stopPropagation();
              onPlayPause();
            }}
          >
            {isPlaying ? (
              <svg className={`size-4 transition-opacity ${iconOpacityClass}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d="M12 3H9V13H12V3Z" fill="white" fillOpacity="0.9" />
                <path d="M7 3H4V13H7V3Z" fill="white" fillOpacity="0.9" />
              </svg>
            ) : (
              <Play className={`size-4 transition-opacity ${iconOpacityClass}`} fill="white" />
            )}
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-white hover:bg-white/10 rounded-none"
            onClick={(e) => {
              e.stopPropagation();
              // Pause if playing
              if (isPlaying) {
                onPlayPause();
              }
              // Step one frame backwards
              onFrameChange(Math.max(0, currentFrame - 1));
            }}
          >
            <svg className={`size-4 transition-opacity ${iconOpacityClass}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.pd89d80} fill="white" fillOpacity="0.9" />
            </svg>
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-white hover:bg-white/10 rounded-none"
            onClick={(e) => {
              e.stopPropagation();
              // Pause if playing
              if (isPlaying) {
                onPlayPause();
              }
              // Step one frame forward
              onFrameChange(Math.min(totalFrames, currentFrame + 1));
            }}
          >
            <svg className={`size-4 transition-opacity ${iconOpacityClass}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p40bcf80} fill="white" fillOpacity="0.9" />
            </svg>
          </Button>

          {!isPlaying && (
            <span className={`text-white/60 text-xs ml-2 transition-opacity ${iconOpacityClass}`}>
              {currentFrame}/{totalFrames}
            </span>
          )}
          </div>
        )}

        {/* Right side - Speed, ECG, Info buttons */}
        <div className="flex items-center gap-0.5">
          {/* Brightness/Contrast adjusted indicator - shown when adjusted */}
          {(brightness !== 1 || contrast !== 1) && !isCWImage && (
            <>
              {/* Window/Level chip */}
              <div className="relative h-6 w-6">
                <WindowLevelChip />
              </div>
              {/* Divider - only show if warning is not present */}
              {!hasWarning && <div className="h-5 w-px bg-white/20 mx-0.5" />}
            </>
          )}

          {/* Warning chip - shown when warning is active */}
          {hasWarning && !isCWImage && (
            <>
              {/* Warning chip */}
              <div className="relative h-6 w-6">
                <WarningChip />
              </div>
              {/* Divider */}
              <div className="h-5 w-px bg-white/20 mx-0.5" />
            </>
          )}

          {/* Sync split button - hidden for CW images */}
          {!isCWImage && (
            <div className="flex h-7">
              {/* Main sync button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-7 w-7 text-white hover:bg-white/10 rounded-none relative ${isSyncActive ? 'bg-[#679de4]/30' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onSyncToggle?.();
                }}
              >
                <div className={`size-4 relative transition-opacity ${iconOpacityClass}`}>
                  <div className="absolute bottom-[29.17%] left-[33.33%] right-0 top-[29.17%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                  <div className="absolute bottom-[29.17%] left-0 right-[33.33%] top-[29.17%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1} />
                  </div>
                </div>
                {isSyncActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#679de4]" />
                )}
              </Button>
              
              {/* Divider */}
              <div className="h-4 w-px self-center bg-white/20" />
              
              {/* Dropdown menu button */}
              <Popover open={isSyncMenuOpen} onOpenChange={setIsSyncMenuOpen}>
                <PopoverTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-4 text-white hover:bg-white/10 rounded-none px-0"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <ChevronDown className={`size-3 transition-opacity ${iconOpacityClass}`} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent 
                  className="w-auto min-w-[290px] p-0 bg-[#071326] border-[rgba(255,255,255,0.15)] rounded-none" 
                  align="start"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-col py-1">
                    {/* Add this image to sync group */}
                    <button
                      className={`w-full h-[28px] px-[37px] text-left text-[rgba(255,255,255,0.9)] text-[14px] hover:bg-[#28374F] transition-colors flex items-center whitespace-nowrap relative ${isSyncActive ? 'bg-[#679de4]/30' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSyncToggle?.();
                        setIsSyncMenuOpen(false);
                      }}
                    >
                      {isSyncActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#679de4]" />
                      )}
                      <span>Include in sync group</span>
                    </button>
                    
                    {/* Synchronize all cine controls */}
                    <button
                      className={`w-full h-[28px] px-[37px] text-left text-[rgba(255,255,255,0.9)] text-[14px] hover:bg-[#28374F] transition-colors flex items-center whitespace-nowrap relative ${syncMode === 'all-controls' ? 'bg-[#679de4]/30' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (syncMode === 'all-controls') {
                          // Toggling off: clear sync mode and deactivate all sync buttons
                          onSyncModeChange?.(null);
                          onToggleAllSync?.(false);
                        } else {
                          // Toggling on: set sync mode and activate all sync buttons
                          onClearSyncGroups?.();
                          onSyncModeChange?.('all-controls');
                          onToggleAllSync?.(true);
                        }
                        setIsSyncMenuOpen(false);
                      }}
                    >
                      {syncMode === 'all-controls' && (
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#679de4]" />
                      )}
                      <span>Synchronize all images on the exam</span>
                    </button>
                    
                    {/* Subheader */}
                    <div className="px-[18px] py-1 text-[10px] text-[rgba(255,255,255,0.6)]">
                      Global synchronization
                    </div>
                    
                    {/* Align speed sync */}
                    <button
                      className="w-full h-[28px] px-[37px] text-left text-[rgba(255,255,255,0.9)] text-[14px] hover:bg-[#28374F] transition-colors flex items-center whitespace-nowrap"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSyncModeChange?.('speed');
                        setIsSyncMenuOpen(false);
                      }}
                    >
                      <span>Align speed sync</span>
                    </button>
                    
                    {/* Start-time sync */}
                    <button
                      className="w-full h-[28px] px-[37px] text-left text-[rgba(255,255,255,0.9)] text-[14px] hover:bg-[#28374F] transition-colors flex items-center whitespace-nowrap"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSyncModeChange?.('start-time');
                        setIsSyncMenuOpen(false);
                      }}
                    >
                      <span>Start-time sync</span>
                    </button>
                    
                    {/* Horizontal divider */}
                    <div className="mx-[5px] my-[2px] h-px bg-[rgba(255,255,255,0.15)]" />
                    
                    {/* Clear synchronization */}
                    <button
                      className="w-full h-[28px] px-[37px] text-left text-[rgba(255,255,255,0.9)] text-[14px] hover:bg-[#28374F] transition-colors flex items-center whitespace-nowrap"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClearSyncGroups?.();
                        setIsSyncMenuOpen(false);
                      }}
                    >
                      <span>Clear synchronization</span>
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )}

          {/* Playback speed button with popover - hidden for CW images */}
          {!isCWImage && (
            <Popover open={isSpeedPopoverOpen} onOpenChange={setIsSpeedPopoverOpen}>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 text-white hover:bg-white/10 rounded-none"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
              >
                <svg className={`size-4 transition-opacity ${iconOpacityClass}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g clipPath="url(#clip0_echo_time)">
                    <path d={echoTimePaths.p21fef680} fill="white" fillOpacity="0.9" />
                    <path d={echoTimePaths.pdcd300} fill="black" />
                    <path d={echoTimePaths.p11a44a00} fill="white" fillOpacity="0.6" />
                  </g>
                  <defs>
                    <clipPath id="clip0_echo_time">
                      <rect fill="white" height="16" width="16" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent 
              side="top" 
              align="center"
              className="w-[210px] p-0 bg-[#030e1f] border border-white/20 shadow-xl rounded-none"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onMouseUp={(e) => e.stopPropagation()}
              sideOffset={8}
            >
              <div className="p-[13px]" onClick={(e) => e.stopPropagation()}>
                {/* Title */}
                <p className="text-white/60 mb-4" style={{ fontSize: '10px', lineHeight: '1.5' }}>Playback speed</p>
                
                {/* Slider with Tooltip */}
                <div className="relative px-0 mb-6">
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsHoveringSpeedSlider(true)}
                    onMouseLeave={() => setIsHoveringSpeedSlider(false)}
                  >
                    {/* Custom tooltip that follows the thumb */}
                    {(isHoveringSpeedSlider || isDraggingSpeedSlider) && (
                      <div 
                        className="absolute -top-10 pointer-events-none transition-all duration-75 z-50"
                        style={{
                          left: `calc(${((playbackSpeed - 0.5) / (4 - 0.5)) * 100}% - 21px)`
                        }}
                      >
                        <div className="bg-[#757575] border border-[#757575] px-2 py-1 rounded relative">
                          <p className="text-white text-[12.75px] whitespace-nowrap">{playbackSpeed.toFixed(1)}x</p>
                          <div className="absolute left-1/2 -translate-x-1/2 -bottom-[5px]">
                            <svg className="block" width="12" height="6" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
                              <path d={tooltipSvgPaths.p63f2e00} fill="#757575" stroke="#757575" strokeWidth="3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <Slider
                      value={[playbackSpeed]}
                      onValueChange={(values) => {
                        onPlaybackSpeedChange(values[0]);
                      }}
                      min={0.5}
                      max={4}
                      step={0.1}
                      className="w-full [&_[data-slot=slider-track]]:h-[4px] [&_[data-slot=slider-track]]:bg-white/30 [&_[data-slot=slider-range]]:bg-white/90 [&_[data-slot=slider-thumb]]:size-3 [&_[data-slot=slider-thumb]]:bg-[#EBEDF0] [&_[data-slot=slider-thumb]]:border-0 [&_[data-slot=slider-thumb]]:shadow-none [&_[data-slot=slider-thumb]]:ring-0 hover:[&_[data-slot=slider-thumb]]:ring-0"
                      onClick={(e) => e.stopPropagation()}
                      onPointerDown={(e) => {
                        e.stopPropagation();
                        setIsDraggingSpeedSlider(true);
                      }}
                    />
                  </div>
                </div>
                
                {/* Reset to default button */}
                <button
                  className="flex items-center gap-[6px] p-[6px] hover:bg-white/5 transition-colors cursor-pointer w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlaybackSpeedChange(defaultSpeed);
                  }}
                >
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={resetSvgPaths.p3fe0b00} fill="white" fillOpacity="0.9" />
                      <path d={resetSvgPaths.p3a9c8250} fill="white" fillOpacity="0.9" />
                    </svg>
                  </div>
                  <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Reset to default
                  </p>
                </button>
              </div>
            </PopoverContent>
            </Popover>
          )}

          {/* ECG waveform button - hidden for CW images */}
          {!isCWImage && (
            <Button 
              variant="ghost" 
              size="icon" 
              className={`h-7 w-7 text-white hover:bg-white/10 rounded-none relative ${playbackMode > 0 ? 'bg-[#679de4]/30' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onPlaybackModeChange();
              }}
              onMouseEnter={() => setIsHoveringECG(true)}
              onMouseLeave={() => setIsHoveringECG(false)}
            >
              <svg className={`size-4 transition-opacity ${iconOpacityClass}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={ecgPaths.p37e96400} fill="white" fillOpacity="0.9" />
              </svg>
              {playbackMode > 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#679de4]" />
              )}
            </Button>
          )}

          {/* Info button - toggles chips visibility */}
          <Button 
            variant="ghost" 
            size="icon" 
            className={`h-7 w-7 text-white hover:bg-white/10 rounded-none relative ${chipsHidden ? 'bg-[#679de4]/30' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleChips();
            }}
          >
            <svg className={`size-4 transition-opacity ${iconOpacityClass}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g clipPath="url(#clip0_info)">
                <path d={infoPaths.p2830fa00} fill="white" fillOpacity="0.6" />
                <path d={infoPaths.p1ec00380} fill="white" fillOpacity="0.9" />
                <path d={infoPaths.p33b6d580} fill="white" fillOpacity="0.9" />
              </g>
              <defs>
                <clipPath id="clip0_info">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
            {chipsHidden && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#679de4]" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}