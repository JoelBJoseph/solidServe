import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties } from "react";

type LineRectangleType = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
  nameDisplay?: CSSProperties["display"];
  nameDisplay1?: CSSProperties["display"];

  /** Action props */
  onColumnOneClick?: () => void;
};

const LineRectangle: NextPage<LineRectangleType> = ({
  propPadding,
  onColumnOneClick,
  nameDisplay,
  nameDisplay1,
}) => {
  const [nameText8Value, setNameText8Value] = useState("");
  const lineRectangleStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const name8Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay,
    };
  }, [nameDisplay]);

  const name9Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay1,
    };
  }, [nameDisplay1]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1rem]"
      style={lineRectangleStyle}
    >
      <button
        className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-[transparent] self-stretch flex flex-row items-center justify-start relative gap-[0.89rem] whitespace-nowrap"
        onClick={onColumnOneClick}
      >
        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
        <img
          className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
          alt=""
          src="/00-general--01-icons--02-common--02-user-1@2x.png"
        />
        <div
          className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]"
          style={name8Style}
        >
          Personal Settings
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-ghostwhite self-stretch flex flex-row items-center justify-start relative gap-[0.89rem] whitespace-nowrap hover:bg-gainsboro-200">
        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
        <img
          className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
          alt=""
          src="/00-general--01-icons--02-common--01-settings-2@2x.png"
        />
        <div
          className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]"
          style={name9Style}
        >
          Global Settings
        </div>
      </button>
      <div className="self-stretch bg-ghostwhite flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.89rem]">
        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
        <img
          className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
          alt=""
          src="/00-general--01-icons--02-common--01-settings-3@2x.png"
        />
        <input
          className="[border:none] [outline:none] font-medium font-inter text-[0.78rem] bg-[transparent] h-[1.11rem] flex-1 relative leading-[1.11rem] text-slategray-100 text-left inline-block min-w-[4.89rem] z-[1]"
          placeholder="Dark Mode"
          type="text"
          value={nameText8Value}
          onChange={(event) => setNameText8Value(event.target.value)}
        />
      </div>
    </div>
  );
};

export default LineRectangle;
