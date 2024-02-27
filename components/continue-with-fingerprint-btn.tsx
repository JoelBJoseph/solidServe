import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ContinueWithFingerprintBtnType = {
  /** Style props */
  propDisplay?: CSSProperties["display"];
};

const ContinueWithFingerprintBtn: NextPage<ContinueWithFingerprintBtnType> = ({
  propDisplay,
}) => {
  const textTypeStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className="self-stretch flex flex-row items-start justify-center py-[0.67rem] pr-[1.11rem] pl-[2.89rem] relative gap-[0.67rem] text-left text-[0.89rem] text-mediumslateblue font-inter mq450:pl-[1.11rem] mq450:box-border">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
        <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
        <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-light-text-color box-border z-[1] border-[1px] border-solid border-lavender-300" />
      </div>
      <div className="h-[1.33rem] w-[4.39rem] my-0 mx-[!important] absolute top-[calc(50%_-_12px)] left-[9.44rem] overflow-hidden shrink-0 flex flex-col items-end justify-center z-[2]">
        <div className="w-[2.83rem] h-[1.33rem] relative hidden" />
      </div>
      <img
        className="h-[1.33rem] w-[1.33rem] relative min-h-[1.33rem] z-[2]"
        loading="lazy"
        alt=""
        src="/00-general--01-icons--11-social--02-facebook.svg"
      />
      <div
        className="h-[1.33rem] w-[10.67rem] relative leading-[1.33rem] inline-block z-[3]"
        style={textTypeStyle}
      >
        Continue with Fingerprint
      </div>
    </div>
  );
};

export default ContinueWithFingerprintBtn;
