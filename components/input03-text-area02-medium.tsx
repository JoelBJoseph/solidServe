import type { NextPage } from "next";
import { useState } from "react";

const Input03TextArea02Medium: NextPage = () => {
  const [fieldTypeValue, setFieldTypeValue] = useState("");
  return (
    <div className="self-stretch flex flex-col items-start justify-start relative gap-[0.22rem] max-w-full text-left text-[0.78rem] text-slategray-400 font-inter">
      <div className="w-full h-[4rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
      <div className="w-[1.61rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border">
        <div className="h-[1.11rem] w-[2.22rem] relative leading-[1.11rem] inline-block whitespace-nowrap shrink-0">
          Notes
        </div>
      </div>
      <div className="w-[35.67rem] h-[2.67rem] relative hidden max-w-full z-[2] text-[0.89rem] text-lightsteelblue">
        <div className="absolute top-[0rem] left-[0rem] leading-[1.33rem] hidden">
          Add notes about customer
        </div>
      </div>
      <input
        className="[outline:none] bg-light-text-color self-stretch h-[4rem] relative rounded box-border min-w-[13.89rem] z-[1] border-[1px] border-solid border-lavender-200"
        type="text"
        value={fieldTypeValue}
        onChange={(event) => setFieldTypeValue(event.target.value)}
      />
    </div>
  );
};

export default Input03TextArea02Medium;
