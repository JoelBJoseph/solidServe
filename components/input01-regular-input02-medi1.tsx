import type { NextPage } from "next";
import { useState } from "react";

type Input01RegularInput02Medi1Type = {
  titleText?: string;
  inputText?: string;
};

const Input01RegularInput02Medi1: NextPage<Input01RegularInput02Medi1Type> = ({
  titleText,
  inputText,
}) => {
  const [fieldTypeValue, setFieldTypeValue] = useState("");
  return (
    <div className="flex-1 flex flex-col items-start justify-start relative gap-[0.22rem] min-w-[18.61rem] max-w-full text-left text-[0.78rem] text-slategray-400 font-inter">
      <div className="w-full h-[2.22rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
      <div className="w-[1.61rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border">
        <div className="h-[1.11rem] w-[5.22rem] relative leading-[1.11rem] inline-block whitespace-nowrap shrink-0">
          {titleText}
        </div>
      </div>
      <div className="w-[26.83rem] h-[1.33rem] relative hidden max-w-full z-[2] text-[0.89rem] text-lightsteelblue">
        <div className="absolute top-[0rem] left-[0rem] leading-[1.33rem] hidden w-[4.06rem]">
          {inputText}
        </div>
      </div>
      <input
        className="[outline:none] bg-light-text-color self-stretch h-[2.22rem] relative rounded box-border min-w-[13.89rem] z-[1] border-[1px] border-solid border-lavender-200"
        type="text"
        value={fieldTypeValue}
        onChange={(event) => setFieldTypeValue(event.target.value)}
      />
    </div>
  );
};

export default Input01RegularInput02Medi1;
