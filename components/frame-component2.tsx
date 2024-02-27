import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FrameComponent2Type = {
  /** Style props */
  propDisplay?: CSSProperties["display"];
  propDisplay1?: CSSProperties["display"];
  propDisplay2?: CSSProperties["display"];
  propDisplay3?: CSSProperties["display"];

  /** Action props */
  onTypeContainer1Click?: () => void;
  onTypeContainer2Click?: () => void;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  propDisplay,
  propDisplay1,
  propDisplay2,
  propDisplay3,
  onTypeContainer1Click,
  onTypeContainer2Click,
}) => {
  const buttonRegularButtonStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const rectangle1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0.89rem] pb-[0.22rem] box-border max-w-full text-left text-[0.89rem] text-slategray-400 font-inter">
      <div className="flex-1 overflow-x-auto flex flex-row items-start justify-start pt-[0.89rem] px-[0rem] pb-[0rem] box-border relative gap-[1.78rem] max-w-full mq450:gap-[0.89rem]">
        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-600" />
        <div className="h-[0.06rem] w-full absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] bg-lavender-100 z-[1]" />
        <div className="w-[3.78rem] shrink-0 flex flex-col items-start justify-start gap-[0.78rem] z-[2] text-mediumslateblue">
          <div
            className="w-[2.72rem] h-[1.33rem] relative leading-[1.33rem] inline-block"
            style={buttonRegularButtonStyle}
          >
            Profile
          </div>
          <div className="self-stretch h-[0.11rem] relative bg-mediumslateblue" />
        </div>
        <div
          className="h-[2.22rem] w-[5.11rem] shrink-0 flex flex-col items-start justify-start gap-[0.78rem] cursor-pointer z-[2]"
          onClick={onTypeContainer1Click}
        >
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0rem]">
            <div
              className="h-[1.33rem] w-[5.33rem] relative leading-[1.33rem] inline-block whitespace-nowrap"
              style={rectangle1Style}
            >
              Notifications
            </div>
          </div>
          <div className="self-stretch h-[0.11rem] relative bg-blueviolet" />
        </div>
        <div
          className="h-[2.22rem] w-[4.11rem] shrink-0 flex flex-col items-start justify-start gap-[0.78rem] cursor-pointer z-[2]"
          onClick={onTypeContainer2Click}
        >
          <div
            className="w-[3.5rem] h-[1.33rem] relative leading-[1.33rem] inline-block"
            style={text1Style}
          >
            Account
          </div>
          <div className="self-stretch h-[0.11rem] relative bg-blueviolet" />
        </div>
        <div className="w-[4.67rem] shrink-0 flex flex-col items-start justify-start gap-[0.78rem] z-[2]">
          <div
            className="w-[3.5rem] h-[1.33rem] relative leading-[1.33rem] inline-block"
            style={text2Style}
          >
            Security
          </div>
          <div className="self-stretch h-[0.11rem] relative bg-blueviolet" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
