import type { NextPage } from "next";
import { useState } from "react";

type FrameComponent1Type = {
  titleText?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ titleText }) => {
  const [frameInputValue, setFrameInputValue] = useState("");
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[0.22rem] min-w-[18.61rem] max-w-full text-left text-[0.78rem] text-slategray-400 font-inter">
      <div className="w-[1.61rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border">
        <div className="h-[1.11rem] w-[3.94rem] relative leading-[1.11rem] inline-block whitespace-nowrap shrink-0">
          {titleText}
        </div>
      </div>
      <input
        className="[outline:none] bg-light-text-color self-stretch h-[2.22rem] relative rounded box-border min-w-[13.89rem] z-[1] border-[1px] border-solid border-lavender-200"
        type="text"
        value={frameInputValue}
        onChange={(event) => setFrameInputValue(event.target.value)}
      />
    </div>
  );
};

export default FrameComponent1;
