import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type InputRegularInputMediumFocType = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const InputRegularInputMediumFoc: NextPage<InputRegularInputMediumFocType> = ({
  propPadding,
  propPadding1,
  propPadding2,
  propWidth,
}) => {
  const buttonRegularButtonMediumWStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const button01RegularButton02MeStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const text3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
      width: propWidth,
    };
  }, [propPadding2, propWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.89rem] box-border gap-[1.33rem] max-w-full text-left text-[0.89rem] text-gray-300 font-inter">
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.22rem]">
        <b className="self-stretch h-[1.33rem] relative leading-[1.33rem] inline-block">
          Profile Details
        </b>
        <div className="self-stretch h-[1.11rem] relative text-[0.78rem] leading-[1.11rem] text-slategray-400 inline-block">
          Enter your profile information
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.22rem] max-w-full text-[0.78rem] text-slategray-400">
        <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] inline-block">
          Profile Image
        </div>
        <div
          className="self-stretch rounded bg-light-text-color box-border flex flex-col items-center justify-start py-[1.56rem] pr-[1.11rem] pl-[1.28rem] gap-[0.67rem] max-w-full text-center border-[1px] border-dashed border-lightsteelblue"
          style={buttonRegularButtonMediumWStyle}
        >
          <div className="w-[58.56rem] h-[7.11rem] relative rounded bg-light-text-color box-border hidden max-w-full border-[1px] border-dashed border-lightsteelblue" />
          <button
            className="cursor-pointer [border:none] p-[0.44rem] bg-[transparent] flex flex-row items-center justify-center relative z-[1]"
            style={button01RegularButton02MeStyle}
          >
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
              <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
              <button className="cursor-pointer p-0 bg-light-text-color absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded box-border z-[1] border-[1px] border-solid border-lavender-300" />
            </div>
            <div
              className="flex flex-row items-start justify-start py-[0rem] px-[0.89rem] z-[2]"
              style={text3Style}
            >
              <div className="h-[1.33rem] w-[3.44rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-mediumslateblue text-left inline-block whitespace-nowrap">
                Add File
              </div>
            </div>
          </button>
          <div className="w-[8.06rem] h-[1.11rem] relative leading-[1.11rem] inline-block z-[1]">
            Or drag and drop files
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputRegularInputMediumFoc;
