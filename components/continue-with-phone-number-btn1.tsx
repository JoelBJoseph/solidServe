import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ContinueWithPhoneNumberBtn1Type = {
  /** Style props */
  propDisplay?: CSSProperties["display"];
};

const ContinueWithPhoneNumberBtn1: NextPage<
  ContinueWithPhoneNumberBtn1Type
> = ({ propDisplay }) => {
  const continueWithPhoneStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-[0.67rem] pr-[2.83rem] pl-[6.22rem] relative gap-[0.56rem] text-left text-[0.89rem] text-mediumslateblue font-inter mq450:pl-[1.11rem] mq450:pr-[1.11rem] mq450:box-border">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
        <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
        <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-light-text-color box-border z-[1] border-[1px] border-solid border-lavender-300" />
      </div>
      <input
        className="m-0 h-[1.33rem] w-[1.33rem] relative overflow-hidden shrink-0 z-[2]"
        type="checkbox"
      />
      <div
        className="h-[1.33rem] w-[12.39rem] relative leading-[1.33rem] inline-block z-[2]"
        style={continueWithPhoneStyle}
      >
        Continue with Phone Number
      </div>
    </div>
  );
};

export default ContinueWithPhoneNumberBtn1;
