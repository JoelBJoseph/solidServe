import type { NextPage } from "next";
import { useState } from "react";

type Input01RegularInput02MediType = {
  titlePlaceholder?: string;
  inputText?: string;
};

const Input01RegularInput02Medi: NextPage<Input01RegularInput02MediType> = ({
  titlePlaceholder,
  inputText,
}) => {
  const [titleValue, setTitleValue] = useState("");
  return (
    <div className="flex-1 flex flex-col items-start justify-start relative gap-[0.22rem] min-w-[18.61rem] max-w-full text-left text-[0.89rem] text-lightsteelblue font-inter">
      <div className="w-full h-[2.22rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
      <input
        className="[border:none] [outline:none] bg-slategray-400 w-[1.61rem] h-[1.11rem] flex flex-row items-start justify-start font-inter text-[0.78rem] text-slategray-400"
        placeholder={titlePlaceholder}
        type="text"
        value={titleValue}
        onChange={(event) => setTitleValue(event.target.value)}
      />
      <div className="w-[26.83rem] h-[1.33rem] relative hidden max-w-full z-[2]">
        <div className="absolute top-[0rem] left-[0rem] leading-[1.33rem] hidden w-[4.06rem]">
          {inputText}
        </div>
      </div>
      <div className="self-stretch h-[2.22rem] relative rounded bg-light-text-color box-border z-[1] border-[1px] border-solid border-lavender-200" />
    </div>
  );
};

export default Input01RegularInput02Medi;
