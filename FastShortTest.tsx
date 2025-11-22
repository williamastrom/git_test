type FastShortTestProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

/**
 * @figmaAssetKey 21cedfa9816c06712f9f7583cb211e8427b8467a
 */
function FastShortTest({ className, property1 = "Default" }: FastShortTestProps) {
  if (property1 === "Variant2") {
    return (
      <div className={className} data-name="Property 1=Variant2">
        <div className="absolute bg-[rgba(255,255,255,0.6)] h-[3px] left-0 top-0 w-[483px]" />
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=Default">
      <div className="absolute bg-[rgba(255,255,255,0.6)] h-[3px] left-0 top-0 w-px" />
    </div>
  );
}

export default function FastShortTest1() {
  return <FastShortTest className="bg-[rgba(255,255,255,0.3)] relative size-full" />;
}