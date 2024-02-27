import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type RecentTransactionsType = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propPadding1?: CSSProperties["padding"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propWidth1?: CSSProperties["width"];
  propPadding2?: CSSProperties["padding"];
  propGap1?: CSSProperties["gap"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propBackgroundColor3?: CSSProperties["backgroundColor"];
  propWidth2?: CSSProperties["width"];
  propGap2?: CSSProperties["gap"];
  propPadding3?: CSSProperties["padding"];
  propBackgroundColor4?: CSSProperties["backgroundColor"];
  propWidth3?: CSSProperties["width"];
  propPadding4?: CSSProperties["padding"];
  propGap3?: CSSProperties["gap"];
  propBackgroundColor5?: CSSProperties["backgroundColor"];
  propBackgroundColor6?: CSSProperties["backgroundColor"];
  propWidth4?: CSSProperties["width"];
  propGap4?: CSSProperties["gap"];
  propPadding5?: CSSProperties["padding"];
};

const RecentTransactions: NextPage<RecentTransactionsType> = ({
  propAlignSelf,
  propFlex,
  propMinWidth,
  propPadding,
  propBackgroundColor,
  propWidth,
  propGap,
  propPadding1,
  propBackgroundColor1,
  propWidth1,
  propPadding2,
  propGap1,
  propBackgroundColor2,
  propBackgroundColor3,
  propWidth2,
  propGap2,
  propPadding3,
  propBackgroundColor4,
  propWidth3,
  propPadding4,
  propGap3,
  propBackgroundColor5,
  propBackgroundColor6,
  propWidth4,
  propGap4,
  propPadding5,
}) => {
  const recentTransactionsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  const badgeBadgeBadgeBadgeBadgeStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const lineStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameLineFrameLineStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      padding: propPadding1,
    };
  }, [propGap, propPadding1]);

  const line1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const frameLineFrameLine1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
      gap: propGap1,
    };
  }, [propPadding2, propGap1]);

  const other03Badge01Light02SmaStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const line2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const frameLineFrameLine2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap2,
      padding: propPadding3,
    };
  }, [propGap2, propPadding3]);

  const line3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor4,
    };
  }, [propBackgroundColor4]);

  const frameLineFrameLine3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding4,
      gap: propGap3,
    };
  }, [propPadding4, propGap3]);

  const other03Badge01Light02Sma1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor5,
    };
  }, [propBackgroundColor5]);

  const line4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor6,
    };
  }, [propBackgroundColor6]);

  const frameLineFrameLine4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap4,
      padding: propPadding5,
    };
  }, [propGap4, propPadding5]);

  return (
    <div
      className="self-stretch rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] overflow-hidden flex flex-col items-center justify-start pt-[1.56rem] px-[0.94rem] pb-[0.94rem] box-border gap-[1.11rem] max-w-full text-left text-[0.89rem] text-gray-300 font-inter mq450:pt-[1.11rem] mq450:pb-[1.11rem] mq450:box-border"
      style={recentTransactionsStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.61rem]">
        <b className="h-[1.33rem] w-[9rem] relative leading-[1.33rem] inline-block">
          Recent Transactions
        </b>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.61rem] box-border gap-[0.72rem] max-w-full text-[0.78rem]">
        <div className="self-stretch bg-light-text-color overflow-hidden flex flex-col items-start justify-start pt-[0.67rem] px-[0rem] pb-[0rem] box-border gap-[0.56rem] max-w-full text-slategray-400">
          <div className="self-stretch h-[2.44rem] relative bg-light-text-color hidden" />
          <div className="w-[23.22rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.11rem] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.22rem] pl-[0rem]">
                <div className="w-[2.17rem] h-[1.11rem] relative leading-[1.11rem] inline-block z-[1]">
                  Name
                </div>
              </div>
              <div
                className="flex flex-col items-start justify-start py-[0rem] pr-[1rem] pl-[0rem]"
                style={badgeBadgeBadgeBadgeBadgeStyle}
              >
                <div className="w-[1.78rem] h-[1.11rem] relative leading-[1.11rem] inline-block z-[1]">
                  Date
                </div>
              </div>
              <div className="h-[1.11rem] w-[2.89rem] relative leading-[1.11rem] inline-block z-[1]">
                Amount
              </div>
              <div className="h-[1.11rem] w-[2.39rem] relative leading-[1.11rem] inline-block z-[1]">
                Status
              </div>
            </div>
          </div>
          <div
            className="self-stretch h-[0.11rem] relative bg-ghostwhite z-[1]"
            style={lineStyle}
          />
        </div>
        <div
          className="w-[23.5rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full"
          style={frameLineFrameLineStyle}
        >
          <div
            className="flex-1 flex flex-row items-center justify-start gap-[1.06rem] max-w-full mq450:flex-wrap"
            style={frameDiv2Style}
          >
            <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block min-w-[2.89rem]">
              Jessica S.
            </div>
            <div className="h-[1.11rem] w-[5.44rem] relative leading-[1.11rem] inline-block shrink-0">
              24.05.2020
            </div>
            <div className="h-[1.11rem] w-[5.44rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
              $124.97
            </div>
            <div className="w-[2.44rem] rounded bg-paleturquoise flex flex-row items-center justify-center p-[0.11rem] box-border text-center text-mediumseagreen-200">
              <div className="h-[1.11rem] w-[1.61rem] relative leading-[1.11rem] inline-block">
                Paid
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch h-[0.06rem] relative bg-ghostwhite"
          style={line1Style}
        />
        <div
          className="w-[24.89rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full"
          style={frameLineFrameLine1Style}
        >
          <div
            className="flex-1 flex flex-row items-center justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[1.06rem] max-w-full mq450:flex-wrap"
            style={frameDiv3Style}
          >
            <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block min-w-[3rem]">
              Andrew S.
            </div>
            <div className="h-[1.11rem] w-[5.44rem] relative leading-[1.11rem] inline-block shrink-0">
              23.05.2020
            </div>
            <div className="h-[1.11rem] w-[5.44rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
              $55.42
            </div>
            <div
              className="rounded bg-ghostwhite flex flex-row items-center justify-center py-[0.11rem] pr-[0.39rem] pl-[0.44rem] text-center text-slategray-400"
              style={other03Badge01Light02SmaStyle}
            >
              <div className="h-[1.11rem] w-[3rem] relative leading-[1.11rem] inline-block whitespace-nowrap">
                Pending
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch h-[0.06rem] relative bg-ghostwhite"
          style={line2Style}
        />
        <div
          className="w-[23.5rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full"
          style={frameLineFrameLine2Style}
        >
          <div
            className="flex-1 flex flex-row items-center justify-start gap-[1.06rem] max-w-full mq450:flex-wrap"
            style={frameDiv4Style}
          >
            <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block min-w-[2.28rem]">
              Kevin S.
            </div>
            <div className="h-[1.11rem] w-[5.44rem] relative leading-[1.11rem] inline-block shrink-0">
              23.05.2020
            </div>
            <div className="h-[1.11rem] w-[5.44rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
              $89.90
            </div>
            <div className="w-[2.44rem] rounded bg-paleturquoise flex flex-row items-center justify-center p-[0.11rem] box-border text-center text-mediumseagreen-200">
              <div className="h-[1.11rem] w-[1.61rem] relative leading-[1.11rem] inline-block">
                Paid
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch h-[0.06rem] relative bg-ghostwhite"
          style={line3Style}
        />
        <div
          className="w-[24.89rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full"
          style={frameLineFrameLine3Style}
        >
          <div
            className="flex-1 flex flex-row items-center justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[1.06rem] max-w-full mq450:flex-wrap"
            style={frameDiv5Style}
          >
            <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block min-w-[2.06rem]">
              Jack S.
            </div>
            <div className="h-[1.11rem] w-[5.44rem] relative leading-[1.11rem] inline-block shrink-0">
              22.05.2020
            </div>
            <div className="h-[1.11rem] w-[5.44rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
              $144.94
            </div>
            <div
              className="rounded bg-ghostwhite flex flex-row items-center justify-center py-[0.11rem] pr-[0.39rem] pl-[0.44rem] text-center text-slategray-400"
              style={other03Badge01Light02Sma1Style}
            >
              <div className="h-[1.11rem] w-[3rem] relative leading-[1.11rem] inline-block whitespace-nowrap">
                Pending
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch h-[0.06rem] relative bg-ghostwhite"
          style={line4Style}
        />
        <div
          className="w-[23.5rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full"
          style={frameLineFrameLine4Style}
        >
          <div
            className="flex-1 flex flex-row items-center justify-start gap-[1.06rem] max-w-full mq450:flex-wrap"
            style={frameDiv6Style}
          >
            <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block min-w-[2.61rem]">
              Arthur S.
            </div>
            <div className="h-[1.11rem] w-[5.44rem] relative leading-[1.11rem] inline-block shrink-0">
              22.05.2020
            </div>
            <div className="h-[1.11rem] w-[5.44rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
              $70.52
            </div>
            <div className="w-[2.44rem] rounded bg-paleturquoise flex flex-row items-center justify-center p-[0.11rem] box-border text-center text-mediumseagreen-200">
              <div className="h-[1.11rem] w-[1.61rem] relative leading-[1.11rem] inline-block">
                Paid
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
