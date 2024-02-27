import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type CardType = {
  creditsLeft?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
};

const Card: NextPage<CardType> = ({
  creditsLeft,
  prop,
  propWidth,
  propGap,
  propFlex,
  propWidth1,
  propWidth2,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
    };
  }, [propWidth, propGap]);

  const creditsLeftStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className="flex-[0.8175] rounded-md bg-mediumslateblue overflow-hidden flex flex-row items-center justify-center pt-[1.56rem] px-[1.44rem] pb-[1.44rem] box-border min-w-[10.28rem] z-[1] text-left text-[0.78rem] text-light-text-color font-inter mq450:flex-1">
      <div className="h-[5.67rem] w-[15.83rem] relative rounded bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] hidden" />
      <div className="h-[5.67rem] w-[15.83rem] relative rounded-md bg-mediumslateblue hidden" />
      <div className="h-[2.67rem] flex-1 overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0.11rem] pb-[0.11rem] box-border gap-[0.78rem] z-[4]">
        <div
          className="w-[9.39rem] flex flex-row items-center justify-start gap-[0.67rem]"
          style={frameDivStyle}
        >
          <div
            className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block"
            style={creditsLeftStyle}
          >
            {creditsLeft}
          </div>
          <b
            className="h-[1.56rem] w-[3.78rem] relative text-[1.11rem] leading-[1.56rem] inline-block shrink-0 mq450:text-[0.89rem] mq450:leading-[1.22rem]"
            style={bStyle}
          >
            {prop}
          </b>
        </div>
        <div className="self-stretch h-[0.44rem] relative rounded bg-dodgerblue-100 z-[2]">
          <div className="absolute top-[0rem] left-[0rem] rounded bg-dodgerblue-100 w-full h-full hidden z-[2]" />
          <div
            className="absolute top-[0rem] left-[0rem] rounded bg-light-text-color w-[2.39rem] h-[0.44rem] z-[3]"
            style={frameStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
