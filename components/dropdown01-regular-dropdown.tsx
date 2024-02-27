import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Dropdown01RegularDropdownType = {
  titleText?: string;
  inputText?: string;
  color?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propWidth?: CSSProperties["width"];
};

const Dropdown01RegularDropdown: NextPage<Dropdown01RegularDropdownType> = ({
  titleText,
  inputText,
  color,
  propDisplay,
  propWidth,
}) => {
  const titleTextStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const inputTextStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start relative gap-[0.22rem] min-w-[18.61rem] max-w-full text-left text-[0.78rem] text-slategray-400 font-inter">
      <div className="w-full h-[2.22rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
      <div className="w-[1.61rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border">
        <div
          className="h-[1.11rem] w-[3.67rem] relative leading-[1.11rem] inline-block whitespace-nowrap shrink-0"
          style={titleTextStyle}
        >
          {titleText}
        </div>
      </div>
      <div className="w-[25.28rem] h-[1.33rem] relative hidden max-w-full z-[2] text-[0.89rem] text-gray-300">
        <div
          className="absolute top-[0rem] left-[0rem] leading-[1.33rem] hidden w-[4.06rem]"
          style={inputTextStyle}
        >
          {inputText}
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[0.44rem] pl-[0rem] box-border max-w-full [row-gap:20px] mq950:flex-wrap">
        <div className="h-[2.22rem] flex-1 relative rounded bg-light-text-color box-border min-w-[18.61rem] max-w-full z-[1] border-[1px] border-solid border-lavender-200" />
        <div className="h-[1.33rem] w-[1.33rem] relative z-[2] ml-[-32px] mq450:ml-0">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
          <img
            className="absolute h-[29.17%] w-6/12 top-[37.5%] right-[25%] bottom-[33.33%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src={color}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdown01RegularDropdown;
