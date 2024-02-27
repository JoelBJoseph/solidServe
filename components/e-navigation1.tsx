import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties } from "react";

type ENavigation1Type = {
  sun24Outline?: string;
  iconTokens?: string;
  general01Icons02Common?: string;
  iconToolBox?: string;
  iconPlus?: string;
  general01Icons02Common1?: string;
  general01Icons02Common2?: string;
  general01Icons04Communic?: string;
  general01Icons04Communic1?: string;
  general01Icons02Common3?: string;
  general01Icons02Common4?: string;
  general01Icons02Common5?: string;
  walletAlt?: string;
  moneyFill?: string;
  general01Icons02Common6?: string;
  general01Icons02Common7?: string;
  general01Icons02Common8?: string;
  iconAlternateSignOut?: string;

  /** Style props */
  nameBackgroundColor?: CSSProperties["backgroundColor"];
  typeColor?: CSSProperties["color"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  nameDisplay?: CSSProperties["display"];
  nameDisplay1?: CSSProperties["display"];
  nameDisplay2?: CSSProperties["display"];
  nameDisplay3?: CSSProperties["display"];

  /** Action props */
  onInstanceFrameContainerClick?: () => void;
  onNameFieldContainer1Click?: () => void;
  onInstanceFrameContainer2Click?: () => void;
  onProfileImageFrameClick?: () => void;
  onIconAlternateSignOutClick?: () => void;
  onFrameDropdownFieldTypeClick?: () => void;
};

const ENavigation1: NextPage<ENavigation1Type> = ({
  sun24Outline,
  iconTokens,
  general01Icons02Common,
  iconToolBox,
  iconPlus,
  general01Icons02Common1,
  general01Icons02Common2,
  general01Icons04Communic,
  general01Icons04Communic1,
  general01Icons02Common3,
  general01Icons02Common4,
  general01Icons02Common5,
  walletAlt,
  moneyFill,
  general01Icons02Common6,
  general01Icons02Common7,
  general01Icons02Common8,
  iconAlternateSignOut,
  nameBackgroundColor,
  typeColor,
  propBackgroundColor,
  propColor,
  onInstanceFrameContainerClick,
  onNameFieldContainer1Click,
  onInstanceFrameContainer2Click,
  onProfileImageFrameClick,
  onIconAlternateSignOutClick,
  onFrameDropdownFieldTypeClick,
  nameDisplay,
  nameDisplay1,
  nameDisplay2,
  nameDisplay3,
}) => {
  const [nameText4Value, setNameText4Value] = useState("");
  const type3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: nameBackgroundColor,
    };
  }, [nameBackgroundColor]);

  const name10Style: CSSProperties = useMemo(() => {
    return {
      color: typeColor,
    };
  }, [typeColor]);

  const type4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const name11Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      display: nameDisplay2,
    };
  }, [propColor, nameDisplay2]);

  const name12Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay,
    };
  }, [nameDisplay]);

  const name13Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay1,
    };
  }, [nameDisplay1]);

  const name14Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay3,
    };
  }, [nameDisplay3]);

  return (
    <div className="w-[13.89rem] bg-ghostwhite shadow-[-1px_0px_0px_#d7dbec_inset] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[2.28rem] px-[0.89rem] pb-[19.83rem] box-border relative gap-[0.67rem] text-left text-[0.78rem] text-slategray-100 font-inter mq700:hidden mq950:pt-[1.11rem] mq950:pb-[8.39rem] mq950:box-border mq975:pt-[1.5rem] mq975:pb-[12.89rem] mq975:box-border">
      <img
        className="w-[1.33rem] h-[1.33rem] absolute my-0 mx-[!important] bottom-[21.94rem] left-[1.78rem] overflow-hidden shrink-0 z-[2]"
        alt=""
        src={sun24Outline}
      />
      <img
        className="w-[1.22rem] h-[0.83rem] absolute my-0 mx-[!important] top-[13.83rem] left-[1.78rem] z-[2]"
        loading="lazy"
        alt=""
        src={iconTokens}
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.39rem]">
        <button className="cursor-pointer [border:none] py-[0.67rem] pr-[0.89rem] pl-[3.11rem] bg-[transparent] flex-1 rounded-19xl [background:linear-gradient(93.56deg,_#1fd286_42.68%,_#edfaf5)] shadow-[0px_2px_5px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-end whitespace-nowrap">
          <div className="h-[2.44rem] w-[12.11rem] relative rounded bg-ghostwhite hidden" />
          <div
            className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-extrabold font-inter text-light-text-color text-left inline-block"
            style={name12Style}
          >
            New Transaction
          </div>
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover hidden"
            alt=""
            src={general01Icons02Common}
          />
        </button>
      </div>
      <img
        className="w-[1.5rem] h-[1.52rem] absolute my-0 mx-[!important] top-[8.49rem] left-[1.72rem] z-[1]"
        alt=""
        src={iconToolBox}
      />
      <img
        className="w-[0.83rem] h-[0.71rem] absolute my-0 mx-[!important] top-[3.13rem] left-[2.39rem] z-[1]"
        loading="lazy"
        alt=""
        src={iconPlus}
      />
      <div className="self-stretch flex flex-col items-center justify-start">
        <div
          className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.78rem] cursor-pointer text-slategray-200"
          onClick={onInstanceFrameContainerClick}
        >
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
            alt=""
            src={general01Icons02Common1}
          />
          <div className="h-[1.11rem] w-[4.89rem] relative leading-[1.11rem] font-medium inline-block z-[1]">
            Entrepreneur
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] gap-[0.89rem]">
            <div className="h-[2.44rem] w-[12.11rem] relative rounded bg-ghostwhite hidden" />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover"
              alt=""
              src={general01Icons02Common2}
            />
            <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block">
              Training Kit
            </div>
          </div>
          <div
            className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.78rem] cursor-pointer z-[1] mt-[-2px]"
            onClick={onNameFieldContainer1Click}
          >
            <div
              className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite"
              style={type3Style}
            />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src={general01Icons04Communic}
            />
            <div
              className="h-[1.11rem] w-[2.06rem] relative leading-[1.11rem] font-medium inline-block z-[1]"
              style={name10Style}
            >
              Inbox
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[0.67rem] px-[3rem] relative">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <div className="h-[1.11rem] w-[2.28rem] relative leading-[1.11rem] font-medium inline-block z-[1]">
            Token
          </div>
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover hidden z-[2]"
            alt=""
            src={general01Icons04Communic1}
          />
        </div>
        <div
          className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.72rem] cursor-pointer"
          onClick={onInstanceFrameContainer2Click}
        >
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
            alt=""
            src={general01Icons02Common3}
          />
          <div className="h-[1.11rem] w-[4.11rem] relative leading-[1.11rem] font-medium inline-block z-[1]">
            Customers
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.72rem] z-[2]">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
            alt=""
            src={general01Icons02Common4}
          />
          <div className="h-[1.11rem] w-[5.44rem] relative leading-[1.11rem] font-medium inline-block z-[1]">
            Compensation
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[0.67rem] pr-[0.89rem] pl-[3.11rem] bg-[transparent] self-stretch flex flex-row items-center justify-end relative whitespace-nowrap z-[3]">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <div
            className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]"
            style={name13Style}
          >
            Wallet Manager
          </div>
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover hidden z-[2]"
            alt=""
            src={general01Icons02Common5}
          />
        </button>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.61rem] pl-[0.89rem] text-[0.67rem] text-lightsteelblue">
          <div className="h-[0.89rem] flex-1 relative leading-[0.89rem] inline-block">
            Settings
          </div>
        </div>
      </div>
      <img
        className="w-[1.33rem] h-[1.33rem] absolute my-0 mx-[!important] top-[20.89rem] left-[1.78rem] z-[4]"
        loading="lazy"
        alt=""
        src={walletAlt}
      />
      <img
        className="w-[1.33rem] h-[1.33rem] absolute my-0 mx-[!important] top-[18.44rem] left-[1.78rem] object-cover z-[3]"
        loading="lazy"
        alt=""
        src={moneyFill}
      />
      <div className="self-stretch flex flex-col items-end justify-start gap-[0.28rem]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <button
            className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-[transparent] self-stretch flex flex-row items-center justify-start relative gap-[0.89rem] whitespace-nowrap"
            onClick={onProfileImageFrameClick}
          >
            <div
              className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-mediumslateblue"
              style={type4Style}
            />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src={general01Icons02Common6}
            />
            <div
              className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-light-text-color text-left inline-block z-[1]"
              style={name11Style}
            >
              Personal Settings
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-ghostwhite self-stretch flex flex-row items-center justify-start relative gap-[0.89rem] whitespace-nowrap hover:bg-gainsboro-200">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src={general01Icons02Common7}
            />
            <div
              className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]"
              style={name14Style}
            >
              Global Settings
            </div>
          </button>
          <div className="self-stretch bg-ghostwhite flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.89rem]">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src={general01Icons02Common8}
            />
            <input
              className="[border:none] [outline:none] font-medium font-inter text-[0.78rem] bg-[transparent] h-[1.11rem] flex-1 relative leading-[1.11rem] text-slategray-100 text-left inline-block min-w-[4.89rem] z-[1]"
              placeholder="Dark Mode"
              type="text"
              value={nameText4Value}
              onChange={(event) => setNameText4Value(event.target.value)}
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
              onClick={onFrameDropdownFieldTypeClick}
            >
              <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block">
                Log Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ENavigation1;
