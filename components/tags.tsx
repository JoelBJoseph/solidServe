import type { NextPage } from "next";
import { useState } from "react";

const Tags: NextPage = () => {
  const [fieldTypeValue, setFieldTypeValue] = useState("");
  return (
    <div className="self-stretch rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] overflow-hidden flex flex-col items-center justify-start p-[1.56rem] gap-[1.22rem] text-left text-[0.89rem] text-gray-300 font-inter">
      <div className="self-stretch flex flex-row items-start justify-start">
        <b className="h-[1.33rem] w-[2.11rem] relative leading-[1.33rem] inline-block">
          Tags
        </b>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start relative gap-[0.22rem] text-[0.78rem] text-slategray-400">
        <div className="w-[1.61rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border">
          <div className="h-[1.11rem] w-[3.5rem] relative leading-[1.11rem] inline-block whitespace-nowrap shrink-0">
            Add Tags
          </div>
        </div>
        <input
          className="[outline:none] bg-light-text-color w-full h-[2.22rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded box-border z-[1] border-[1px] border-solid border-lavender-200"
          type="text"
          value={fieldTypeValue}
          onChange={(event) => setFieldTypeValue(event.target.value)}
        />
        <div className="w-[14.56rem] h-[1.33rem] relative hidden z-[2] text-[0.89rem] text-lightsteelblue">
          <div className="absolute top-[0rem] left-[0rem] leading-[1.33rem] hidden">
            Enter tag name
          </div>
        </div>
        <div className="self-stretch h-[2.22rem] relative rounded" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="flex flex-row items-start justify-start gap-[0.44rem]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-start py-[0.11rem] pr-[0.44rem] pl-[0.67rem] relative gap-[0.06rem]">
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-lavender-100" />
              <div className="h-[1.11rem] w-[5.17rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-slategray-400 text-left inline-block z-[1]">
                Vip Customer
              </div>
              <div className="h-[1.33rem] w-[1.33rem] relative z-[1]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <img
                  className="absolute h-[41.67%] w-[41.67%] top-[29.17%] right-[29.17%] bottom-[29.17%] left-[29.17%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/color-1.svg"
                />
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-start py-[0.11rem] pr-[0.44rem] pl-[0.67rem] relative gap-[0.22rem]">
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-lavender-100" />
              <div className="h-[1.11rem] w-[2.61rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-slategray-400 text-left inline-block z-[1]">
                Europe
              </div>
              <div className="h-[1.33rem] w-[1.33rem] relative z-[1]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <img
                  className="absolute h-[41.67%] w-[41.67%] top-[29.17%] right-[29.17%] bottom-[29.17%] left-[29.17%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/color-1.svg"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tags;
