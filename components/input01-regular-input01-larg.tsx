import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties } from "react";

type Input01RegularInput01LargType = {
  titleText?: string;
  inputText?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propWidth1?: CSSProperties["width"];
};

const Input01RegularInput01Larg: NextPage<Input01RegularInput01LargType> = ({
  titleText,
  inputText,
  propWidth,
  propDisplay,
  propWidth1,
}) => {
  const [fieldTypeValue, setFieldTypeValue] = useState("");
  const titleStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const titleText1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const inputText1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start relative gap-[0.22rem] max-w-full text-left text-[0.78rem] text-slategray-400 font-inter">
      <div className="w-full h-[2.67rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
      <div
        className="flex flex-row items-start justify-start py-[0rem] px-[0rem]"
        style={titleStyle}
      >
        <div
          className="h-[1.11rem] w-[2rem] relative leading-[1.11rem] inline-block whitespace-nowrap"
          style={titleText1Style}
        >
          {titleText}
        </div>
      </div>
      <div className="w-[21.56rem] h-[1.33rem] relative hidden max-w-full z-[2] text-[0.89rem] text-lightsteelblue">
        <div
          className="absolute top-[0rem] left-[0rem] leading-[1.33rem] hidden"
          style={inputText1Style}
        >
          {inputText}
        </div>
      </div>
      <input
        className="[outline:none] bg-light-text-color self-stretch h-[2.67rem] relative rounded box-border min-w-[13.89rem] z-[1] border-[1px] border-solid border-lavender-200"
        type="text"
        value={fieldTypeValue}
        onChange={(event) => setFieldTypeValue(event.target.value)}
      />
    </div>
  );
};

export default Input01RegularInput01Larg;
