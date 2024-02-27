import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties } from "react";

type LineDividerType = {
  general01Icons02Common?: string;
  general01Icons02Common1?: string;
  general01Icons02Common2?: string;
  iconAlternateSignOut?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];

  /** Action props */
  onFrameAvatarGroupClick?: () => void;
  onIconAlternateSignOutClick?: () => void;
  onNumberBGNumberGroupClick?: () => void;
};

const LineDivider: NextPage<LineDividerType> = ({
  general01Icons02Common,
  general01Icons02Common1,
  general01Icons02Common2,
  iconAlternateSignOut,
  propBackgroundColor,
  propColor,
  propDisplay,
  onFrameAvatarGroupClick,
  onIconAlternateSignOutClick,
  onNumberBGNumberGroupClick,
}) => {
  const [nameText12Value, setNameText12Value] = useState("");
  const typeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const nameStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const name1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[0.28rem] text-left text-[0.78rem] text-slategray-100 font-inter">
      <div className="self-stretch flex flex-col items-start justify-start">
        <button
          className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-[transparent] self-stretch flex flex-row items-center justify-start relative gap-[0.89rem] whitespace-nowrap"
          onClick={onFrameAvatarGroupClick}
        >
          <div
            className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite"
            style={typeStyle}
          />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
            alt=""
            src={general01Icons02Common}
          />
          <div
            className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]"
            style={nameStyle}
          >
            Personal Settings
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-ghostwhite self-stretch flex flex-row items-center justify-start relative gap-[0.89rem] whitespace-nowrap hover:bg-gainsboro-200">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
            alt=""
            src={general01Icons02Common1}
          />
          <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]">
            Global Settings
          </div>
        </button>
        <div className="self-stretch bg-ghostwhite flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.89rem]">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
            alt=""
            src={general01Icons02Common2}
          />
          <input
            className="[border:none] [outline:none] font-medium font-inter text-[0.78rem] bg-[transparent] h-[1.11rem] flex-1 relative leading-[1.11rem] text-slategray-100 text-left inline-block min-w-[4.89rem] z-[1]"
            placeholder="Dark Mode"
            type="text"
            value={nameText12Value}
            onChange={(event) => setNameText12Value(event.target.value)}
          />
        </div>
      </div>
      <div className="w-[11.28rem] flex flex-row items-start justify-start py-[0rem] px-[0.17rem] box-border">
        <div className="flex-1 flex flex-row items-center justify-start gap-[1rem]">
          <img
            className="h-[0.89rem] w-[1.11rem] relative cursor-pointer"
            loading="lazy"
            alt=""
            src={iconAlternateSignOut}
            onClick={onIconAlternateSignOutClick}
          />
          <div
            className="flex-1 flex flex-row items-center justify-start py-[0.11rem] pr-[2.22rem] pl-[0rem] cursor-pointer"
            onClick={onNumberBGNumberGroupClick}
          >
            <div
              className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block"
              style={name1Style}
            >
              Log Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineDivider;
