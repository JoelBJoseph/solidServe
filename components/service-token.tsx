import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ServiceTokenType = {
  conversionRate?: string;
  other08Progress02Circular?: string;
  prop?: string;
  cart?: string;
  checkout?: string;
  purchase?: string;
  nameTextTextFrame?: string;
  checkoutMonthGoalFrame?: string;
  purchaseLeftLineFrame?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propFlex1?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propPadding?: CSSProperties["padding"];
  propMarginTop?: CSSProperties["marginTop"];
  propMarginLeft?: CSSProperties["marginLeft"];
};

const ServiceToken: NextPage<ServiceTokenType> = ({
  conversionRate,
  other08Progress02Circular,
  prop,
  cart,
  checkout,
  purchase,
  nameTextTextFrame,
  checkoutMonthGoalFrame,
  purchaseLeftLineFrame,
  propFlex,
  propMinWidth,
  propWidth,
  propHeight,
  propHeight1,
  propFlex1,
  propAlignSelf,
  propFlexDirection,
  propPadding,
  propMarginTop,
  propMarginLeft,
}) => {
  const serviceTokenStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
      height: propHeight,
    };
  }, [propFlex, propMinWidth, propWidth, propHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      flex: propFlex1,
    };
  }, [propHeight1, propFlex1]);

  const otherProgressCircleStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flexDirection: propFlexDirection,
      padding: propPadding,
    };
  }, [propAlignSelf, propFlexDirection, propPadding]);

  const b1Style: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
      marginLeft: propMarginLeft,
    };
  }, [propMarginTop, propMarginLeft]);

  return (
    <div
      className="flex-1 rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] overflow-hidden flex flex-col items-center justify-start p-[1.56rem] box-border gap-[2.22rem] min-w-[9.22rem] text-left text-[0.89rem] text-gray-300 font-inter mq450:gap-[1.11rem]"
      style={serviceTokenStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start">
        <b className="h-[1.33rem] w-[6.5rem] relative leading-[1.33rem] inline-block">
          {conversionRate}
        </b>
      </div>
      <div
        className="h-[6.22rem] flex flex-row items-start justify-start py-[0rem] pr-[0.17rem] pl-[0rem] box-border text-center text-[1.11rem]"
        style={frameDiv1Style}
      >
        <div
          className="self-stretch flex flex-col items-center justify-start"
          style={otherProgressCircleStyle}
        >
          <img
            className="w-[6.22rem] h-[6.22rem] relative object-cover"
            loading="lazy"
            alt=""
            src={other08Progress02Circular}
          />
          <b
            className="w-[2.39rem] h-[1.56rem] relative leading-[1.56rem] inline-block z-[1] mt-[-70px] mq450:text-[0.89rem] mq450:leading-[1.22rem]"
            style={b1Style}
          >
            {prop}
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.11rem] text-[0.78rem] text-slategray-400">
        <div className="flex flex-col items-start justify-start gap-[0.44rem]">
          <div className="w-[1.83rem] h-[1.11rem] relative leading-[1.11rem] inline-block">
            {cart}
          </div>
          <div className="w-[3.78rem] h-[1.11rem] relative leading-[1.11rem] inline-block">
            {checkout}
          </div>
          <div className="w-[3.67rem] h-[1.11rem] relative leading-[1.11rem] inline-block">
            {purchase}
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-[0.44rem] text-right text-gray-300">
          <b className="w-[1.72rem] h-[1.11rem] relative leading-[1.11rem] inline-block">
            {nameTextTextFrame}
          </b>
          <b className="w-[1.72rem] h-[1.11rem] relative leading-[1.11rem] inline-block">
            {checkoutMonthGoalFrame}
          </b>
          <b className="w-[1.67rem] h-[1.11rem] relative leading-[1.11rem] inline-block">
            {purchaseLeftLineFrame}
          </b>
        </div>
      </div>
    </div>
  );
};

export default ServiceToken;
