import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FrameLineType = {
  /** Style props */
  propDisplay?: CSSProperties["display"];
  propDisplay1?: CSSProperties["display"];

  /** Action props */
  onHeaderFrameContainer1Click?: () => void;
};

const FrameLine: NextPage<FrameLineType> = ({
  propDisplay,
  propDisplay1,
  onHeaderFrameContainer1Click,
}) => {
  const name6Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const name7Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-[0.78rem] text-slategray-100 font-inter">
      <div className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] gap-[0.89rem]">
        <div className="h-[2.44rem] w-[12.11rem] relative rounded bg-ghostwhite hidden" />
        <img
          className="h-[1.33rem] w-[1.33rem] relative object-cover"
          alt=""
          src="/00-general--01-icons--02-common--01-settings-3@2x.png"
        />
        <div
          className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block"
          style={name6Style}
        >
          Training Kit
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.78rem] cursor-pointer z-[1] mt-[-2px]"
        onClick={onHeaderFrameContainer1Click}
      >
        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
        <img
          className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
          alt=""
          src="/chat@2x.png"
        />
        <div
          className="h-[1.11rem] w-[2.06rem] relative leading-[1.11rem] font-medium inline-block z-[1]"
          style={name7Style}
        >
          Inbox
        </div>
      </div>
    </div>
  );
};

export default FrameLine;
