import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties } from "react";

type FrameDropdownType = {
  iconTokens?: string;
  general01Icons02Common?: string;
  iconToolBox?: string;
  iconPlus?: string;
  icon?: string;
  general01Icons02Common1?: string;
  general01Icons04Communic?: string;
  general01Icons04Communic1?: string;
  general01Icons02Common2?: string;
  general01Icons02Common3?: string;
  general01Icons02Common4?: string;
  general01Icons02Common5?: string;
  iconAlternateSignOut?: string;
  sun24Outline?: string;

  /** Style props */
  nameDisplay?: CSSProperties["display"];
  nameDisplay1?: CSSProperties["display"];
  nameDisplay2?: CSSProperties["display"];
  nameDisplay3?: CSSProperties["display"];
  nameDisplay4?: CSSProperties["display"];
  nameDisplay5?: CSSProperties["display"];
  categoryDisplay?: CSSProperties["display"];
  nameDisplay6?: CSSProperties["display"];
  nameDisplay7?: CSSProperties["display"];
  nameDisplay8?: CSSProperties["display"];

  /** Action props */
  onFrameClick?: () => void;
  onArrowFocusContainerClick?: () => void;
  onNameFieldContainer1Click?: () => void;
  onArrowFocusContainer2Click?: () => void;
  onDropdownArrowColorClick?: () => void;
  onIconAlternateSignOutClick?: () => void;
};

const FrameDropdown: NextPage<FrameDropdownType> = ({
  iconTokens,
  general01Icons02Common,
  iconToolBox,
  iconPlus,
  icon,
  general01Icons02Common1,
  general01Icons04Communic,
  general01Icons04Communic1,
  general01Icons02Common2,
  general01Icons02Common3,
  general01Icons02Common4,
  general01Icons02Common5,
  iconAlternateSignOut,
  sun24Outline,
  onFrameClick,
  onArrowFocusContainerClick,
  onNameFieldContainer1Click,
  onArrowFocusContainer2Click,
  onDropdownArrowColorClick,
  onIconAlternateSignOutClick,
  nameDisplay,
  nameDisplay1,
  nameDisplay2,
  nameDisplay3,
  nameDisplay4,
  nameDisplay5,
  categoryDisplay,
  nameDisplay6,
  nameDisplay7,
  nameDisplay8,
}) => {
  const [nameText4Value, setNameText4Value] = useState("");
  const name15Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay,
    };
  }, [nameDisplay]);

  const name16Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay1,
    };
  }, [nameDisplay1]);

  const name17Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay2,
    };
  }, [nameDisplay2]);

  const name18Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay3,
    };
  }, [nameDisplay3]);

  const name19Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay4,
    };
  }, [nameDisplay4]);

  const name20Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay5,
    };
  }, [nameDisplay5]);

  const categoryStyle: CSSProperties = useMemo(() => {
    return {
      display: categoryDisplay,
    };
  }, [categoryDisplay]);

  const name21Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay6,
    };
  }, [nameDisplay6]);

  const name22Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay7,
    };
  }, [nameDisplay7]);

  const name23Style: CSSProperties = useMemo(() => {
    return {
      display: nameDisplay8,
    };
  }, [nameDisplay8]);

  return (
    <div className="h-[53.11rem] w-[13.89rem] flex flex-col items-start justify-start py-[24.39rem] px-[1.78rem] box-border relative mq450:pt-[10.28rem] mq450:pb-[10.28rem] mq450:box-border mq700:hidden mq700:pt-[15.83rem] mq700:pb-[15.83rem] mq700:box-border">
      <form className="my-0 mx-[!important] w-full absolute h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-ghostwhite shadow-[-1px_0px_0px_#d7dbec_inset] overflow-hidden flex flex-col items-center justify-start pt-[1.61rem] px-[0.89rem] pb-[24.67rem] box-border gap-[0.5rem]">
        <img
          className="w-[1.06rem] h-[0.93rem] absolute my-0 mx-[!important] top-[12.38rem] left-[1.89rem] z-[2]"
          loading="lazy"
          alt=""
          src={iconTokens}
        />
        <button className="cursor-pointer [border:none] py-[0.67rem] pr-[0.89rem] pl-[3.11rem] bg-[transparent] self-stretch rounded-19xl [background:linear-gradient(93.56deg,_#1fd286_42.68%,_#edfaf5)] shadow-[0px_2px_5px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-end whitespace-nowrap">
          <div className="h-[2.44rem] w-[12.11rem] relative rounded bg-ghostwhite hidden" />
          <div
            className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-extrabold font-inter text-light-text-color text-left inline-block"
            style={name15Style}
          >
            New Transaction
          </div>
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover hidden"
            alt=""
            src={general01Icons02Common}
          />
        </button>
        <img
          className="w-[1.5rem] h-[1.52rem] absolute my-0 mx-[!important] top-[7.32rem] left-[1.72rem] z-[1]"
          alt=""
          src={iconToolBox}
        />
        <img
          className="w-[0.83rem] h-[0.71rem] absolute my-0 mx-[!important] top-[2.47rem] left-[2.39rem] z-[1]"
          loading="lazy"
          alt=""
          src={iconPlus}
        />
        <div
          className="w-[8.83rem] h-[1.33rem] hidden cursor-pointer z-[4]"
          onClick={onFrameClick}
        />
        <div className="self-stretch flex flex-col items-center justify-start gap-[0.61rem]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div
              className="self-stretch bg-ghostwhite flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.72rem] cursor-pointer"
              onClick={onArrowFocusContainerClick}
            >
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
              <img
                className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
                alt=""
                src={icon}
              />
              <div
                className="h-[1.11rem] w-[2.22rem] relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]"
                style={name16Style}
              >
                Home
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] gap-[0.89rem]">
                <div className="h-[2.44rem] w-[12.11rem] relative rounded bg-ghostwhite hidden" />
                <img
                  className="h-[1.33rem] w-[1.33rem] relative object-cover"
                  alt=""
                  src={general01Icons02Common1}
                />
                <div
                  className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block"
                  style={name17Style}
                >
                  Training Kit
                </div>
              </div>
              <div
                className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.78rem] cursor-pointer z-[1] mt-[-2px]"
                onClick={onNameFieldContainer1Click}
              >
                <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
                <img
                  className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
                  alt=""
                  src={general01Icons04Communic}
                />
                <div
                  className="h-[1.11rem] w-[2.06rem] relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]"
                  style={name18Style}
                >
                  Inbox
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-[0.67rem] px-[3rem] relative">
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
              <div
                className="h-[1.11rem] w-[2.28rem] relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]"
                style={name19Style}
              >
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
              onClick={onArrowFocusContainer2Click}
            >
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
              <img
                className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
                alt=""
                src={general01Icons02Common2}
              />
              <div
                className="h-[1.11rem] w-[4.11rem] relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]"
                style={name20Style}
              >
                Customers
              </div>
            </div>
          </div>
          <div className="w-[10.89rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.28rem] box-border">
            <div
              className="h-[0.89rem] flex-1 relative text-[0.67rem] leading-[0.89rem] font-inter text-lightsteelblue text-left inline-block"
              style={categoryStyle}
            >
              Settings
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.44rem]">
            <button
              className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-[transparent] w-[12.11rem] h-[2.44rem] flex flex-row items-center justify-start box-border relative gap-[0.89rem] whitespace-nowrap"
              onClick={onDropdownArrowColorClick}
            >
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-mediumslateblue" />
              <img
                className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
                alt=""
                src={general01Icons02Common3}
              />
              <div
                className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-light-text-color text-left inline-block z-[1]"
                style={name21Style}
              >
                Personal Settings
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-ghostwhite self-stretch flex flex-row items-center justify-start relative gap-[0.89rem] whitespace-nowrap hover:bg-gainsboro-200">
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
              <img
                className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
                alt=""
                src={general01Icons02Common4}
              />
              <div
                className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]"
                style={name22Style}
              >
                Global Settings
              </div>
            </button>
            <div className="self-stretch bg-ghostwhite flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.89rem]">
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
              <img
                className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
                alt=""
                src={general01Icons02Common5}
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
          <div className="w-[10.11rem] flex flex-row items-start justify-start py-[0rem] pr-[1.39rem] pl-[0rem] box-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-[1rem]">
              <img
                className="h-[0.89rem] w-[1.11rem] relative cursor-pointer"
                loading="lazy"
                alt=""
                src={iconAlternateSignOut}
                onClick={onIconAlternateSignOutClick}
              />
              <div
                className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]"
                style={name23Style}
              >
                Log Out
              </div>
            </div>
          </div>
        </div>
      </form>
      <img
        className="w-[1.33rem] h-[1.33rem] relative overflow-hidden shrink-0 z-[3]"
        loading="lazy"
        alt=""
        src={sun24Outline}
      />
    </div>
  );
};

export default FrameDropdown;
