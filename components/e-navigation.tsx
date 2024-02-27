import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import FrameLine from "./frame-line";
import LineDivider from "./line-divider";

const ENavigation: NextPage = () => {
  const [nameText20Value, setNameText20Value] = useState("");
  const router = useRouter();

  const onContainer1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameAvatarGroupClick = useCallback(() => {
    router.push("/e-settings");
  }, [router]);

  const onIconAlternateSignOutClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onNumberBGNumberGroupClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onContainerClick = useCallback(() => {
    router.push("/entrepreneur");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/e-all-customers");
  }, [router]);

  return (
    <div className="w-[13.89rem] bg-ghostwhite shadow-[-1px_0px_0px_#d7dbec_inset] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[2.28rem] px-[0.89rem] pb-[19.83rem] box-border relative gap-[0.67rem] text-left text-[0.78rem] text-slategray-200 font-inter mq450:hidden mq950:pt-[1.11rem] mq950:pb-[8.39rem] mq950:box-border mq975:pt-[1.5rem] mq975:pb-[12.89rem] mq975:box-border">
      <img
        className="w-[1.33rem] h-[1.33rem] absolute my-0 mx-[!important] bottom-[21.94rem] left-[1.78rem] overflow-hidden shrink-0 z-[2]"
        alt=""
        src="/sun--24--outline.svg"
      />
      <img
        className="w-[1.22rem] h-[0.83rem] absolute my-0 mx-[!important] top-[13.83rem] left-[1.78rem] z-[2]"
        loading="lazy"
        alt=""
        src="/-icon-tokens.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.39rem]">
        <button className="cursor-pointer [border:none] py-[0.67rem] pr-[0.89rem] pl-[3.11rem] bg-[transparent] flex-1 rounded-19xl [background:linear-gradient(93.56deg,_#1fd286_42.68%,_#edfaf5)] shadow-[0px_2px_5px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-end whitespace-nowrap">
          <div className="h-[2.44rem] w-[12.11rem] relative rounded bg-ghostwhite hidden" />
          <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-extrabold font-inter text-light-text-color text-left inline-block">
            New Transaction
          </div>
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-contain hidden"
            alt=""
            src="/00-general--01-icons--02-common--32-list@2x.png"
          />
        </button>
      </div>
      <img
        className="w-[1.5rem] h-[1.52rem] absolute my-0 mx-[!important] top-[8.49rem] left-[1.72rem] z-[1]"
        alt=""
        src="/-icon-tool-box.svg"
      />
      <img
        className="w-[0.83rem] h-[0.71rem] absolute my-0 mx-[!important] top-[3.13rem] left-[2.39rem] z-[1]"
        alt=""
        src="/-icon-plus.svg"
      />
      <div className="self-stretch flex flex-col items-center justify-start">
        <div
          className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.78rem] cursor-pointer"
          onClick={onContainerClick}
        >
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-contain z-[1]"
            alt=""
            src="/00-general--01-icons--02-common--02-user@2x.png"
          />
          <div className="h-[1.11rem] w-[4.89rem] relative leading-[1.11rem] font-medium inline-block z-[1]">
            Entrepreneur
          </div>
        </div>
        <FrameLine
          propDisplay="inline-block"
          propDisplay1="inline-block"
          onHeaderFrameContainer1Click={onContainer1Click}
        />
        <div className="self-stretch flex flex-row items-center justify-start py-[0.67rem] px-[3rem] relative text-slategray-100">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <div className="h-[1.11rem] w-[2.28rem] relative leading-[1.11rem] font-medium inline-block z-[1]">
            Token
          </div>
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-contain hidden z-[2]"
            alt=""
            src="/chat@2x.png"
          />
        </div>
        <button
          className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-[transparent] self-stretch flex flex-row items-center justify-start relative gap-[0.72rem]"
          onClick={onButton1Click}
        >
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-mediumslateblue" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-contain z-[1]"
            alt=""
            src="/00-general--01-icons--02-common--03-users@2x.png"
          />
          <div className="h-[1.11rem] w-[4.11rem] relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-light-text-color text-left inline-block z-[1]">
            Customers
          </div>
        </button>
        <div className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.89rem] z-[2]">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-contain z-[1]"
            alt=""
            src="/00-general--01-icons--02-common--01-settings-3@2x.png"
          />
          <input
            className="[border:none] [outline:none] font-medium font-inter text-[0.78rem] bg-[transparent] h-[1.11rem] w-[5.28rem] relative leading-[1.11rem] text-slategray-100 text-left inline-block shrink-0 z-[1]"
            placeholder="Compensation"
            type="text"
            value={nameText20Value}
            onChange={(event) => setNameText20Value(event.target.value)}
          />
        </div>
        <button className="cursor-pointer [border:none] py-[0.67rem] pr-[0.89rem] pl-[3.11rem] bg-[transparent] self-stretch flex flex-row items-center justify-end relative whitespace-nowrap z-[3]">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]">
            Wallet Manager
          </div>
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-contain hidden z-[2]"
            alt=""
            src="/00-general--01-icons--02-common--03-users@2x.png"
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
        src="/wallet-alt.svg"
      />
      <img
        className="w-[1.33rem] h-[1.33rem] absolute my-0 mx-[!important] top-[18.44rem] left-[1.78rem] object-contain z-[3]"
        loading="lazy"
        alt=""
        src="/money-fill@2x.png"
      />
      <LineDivider
        general01Icons02Common="/00-general--01-icons--02-common--02-user-1@2x.png"
        general01Icons02Common1="/00-general--01-icons--02-common--01-settings-2@2x.png"
        general01Icons02Common2="/00-general--01-icons--02-common--01-settings-3@2x.png"
        iconAlternateSignOut="/-icon-alternate-sign-out.svg"
        propBackgroundColor="#f5f6fa"
        propColor="#717899"
        propDisplay="inline-block"
        onFrameAvatarGroupClick={onFrameAvatarGroupClick}
        onIconAlternateSignOutClick={onIconAlternateSignOutClick}
        onNumberBGNumberGroupClick={onNumberBGNumberGroupClick}
      />
    </div>
  );
};

export default ENavigation;
