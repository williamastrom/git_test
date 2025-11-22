import { ReactNode } from 'react';

interface ToolbarButtonProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function ToolbarButton({ icon, label, active = false, disabled = false, onClick }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative box-border flex flex-col gap-[2px] h-[47px] items-center justify-center w-[55px] px-[15px] py-[10px]
        ${active ? 'bg-[rgba(60,115,187,0.3)]' : ''}
        ${disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:bg-white/5'}
      `}
    >
      {active && (
        <div 
          aria-hidden="true" 
          className="absolute border-[#679de4] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" 
        />
      )}
      <div className="relative shrink-0 size-[16px]">
        {icon}
      </div>
      <p 
        className={`font-['Open_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[10px] text-nowrap whitespace-pre ${
          disabled ? 'text-[rgba(255,255,255,0.3)]' : 'text-[rgba(255,255,255,0.9)]'
        }`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </p>
    </button>
  );
}

export function ToolbarDivider() {
  return (
    <div className="h-0 w-[36px] mx-auto">
      <div className="h-[1px] bg-white/30" />
    </div>
  );
}
