import svgPaths from "./svg-5brzk6qf0y";

function Accent() {
  return (
    <div className="absolute contents right-[7.63px] top-[calc(50%-2.474px)] translate-y-[-50%]" data-name="accent">
      <div className="absolute h-[16.45px] right-[7.63px] top-[calc(50%-2.474px)] translate-y-[-50%] w-[8.7px]" data-name="Path 37">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 17">
          <path d={svgPaths.p4e90c80} fill="var(--fill-0, white)" id="Path 37" />
        </svg>
      </div>
    </div>
  );
}

function Base() {
  return (
    <div className="absolute contents right-[3px] top-[calc(50%+6.599px)] translate-y-[-50%]" data-name="base">
      <div className="absolute h-[7.761px] right-[3px] top-[calc(50%+6.599px)] translate-y-[-50%] w-[18px]" data-name="Path 38">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 8">
          <path d={svgPaths.p37ce8700} fill="var(--fill-0, #96BDF1)" id="Path 38" />
        </svg>
      </div>
    </div>
  );
}

export default function UserIcon() {
  return (
    <div className="relative size-full" data-name="UserIcon">
      <div className="absolute right-0 size-[24px] top-1/2 translate-y-[-50%]" data-name="spacer">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="spacer"></g>
        </svg>
      </div>
      <Accent />
      <Base />
    </div>
  );
}