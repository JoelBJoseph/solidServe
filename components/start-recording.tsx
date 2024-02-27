import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameLine from "./frame-line";
import LineRectangle from "./line-rectangle";

const StartRecording: NextPage = () => {
  const router = useRouter();

  const onHeaderFrameContainer1Click = useCallback(() => {
    router.push("/inbox");
  }, [router]);

  const onColumnOneClick = useCallback(() => {
    router.push("/settings");
  }, [router]);

  const onConversionRateFrameClick = useCallback(() => {
    router.push("/c-staff");
  }, [router]);

  const onRecentTransactionsFrame1Click = useCallback(() => {
    router.push("/all-customers");
  }, [router]);

  const onFrameClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onIconAlternateSignOutClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  return (
    <div className="w-[13.89rem] flex flex-col items-center justify-start pt-[1.11rem] px-[0.89rem] pb-[27.33rem] box-border relative gap-[20.89rem] text-left text-[0.78rem] text-light-text-color font-inter mq450:gap-[10.44rem] mq700:pb-[11.56rem] mq700:box-border mq950:hidden mq950:pb-[17.78rem] mq950:box-border">
      <form className="my-0 mx-[!important] w-full absolute h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-ghostwhite shadow-[-1px_0px_0px_#d7dbec_inset] overflow-hidden flex flex-col items-center justify-start pt-[4.56rem] px-[0.89rem] pb-[24.67rem] box-border gap-[0.06rem] z-[3]">
        <button
          className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-ghostwhite self-stretch flex flex-row items-center justify-start relative gap-[0.72rem] hover:bg-gainsboro-200"
          onClick={onConversionRateFrameClick}
        >
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-mediumslateblue" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
            alt=""
            src="/icon@2x.png"
          />
          <div className="h-[1.11rem] w-[2.22rem] relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-light-text-color text-left inline-block z-[1]">
            Home
          </div>
        </button>
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.56rem]">
          <FrameLine
            onHeaderFrameContainer1Click={onHeaderFrameContainer1Click}
          />
          <div className="self-stretch flex flex-row items-center justify-start py-[0.67rem] px-[3rem] relative">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <div className="h-[1.11rem] w-[2.28rem] relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]">
              Token
            </div>
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover hidden z-[2]"
              alt=""
              src="/chat@2x.png"
            />
          </div>
          <div
            className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.72rem] cursor-pointer"
            onClick={onRecentTransactionsFrame1Click}
          >
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src="/00-general--01-icons--02-common--03-users@2x.png"
            />
            <div className="h-[1.11rem] w-[4.11rem] relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]">
              Customers
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.61rem] pr-[0.61rem] pl-[0.89rem]">
          <div className="h-[0.89rem] flex-1 relative text-[0.67rem] leading-[0.89rem] font-inter text-lightsteelblue text-left inline-block">
            Settings
          </div>
        </div>
        <LineRectangle
          propPadding="0rem 0rem 1.125rem"
          onColumnOneClick={onColumnOneClick}
        />
        <img
          className="w-[1.06rem] h-[0.93rem] absolute my-0 mx-[!important] top-[12.38rem] left-[1.89rem] z-[2]"
          alt=""
          src="/-icon-tokens1.svg"
        />
        <div className="self-stretch h-[2.44rem] relative rounded-19xl [background:linear-gradient(93.56deg,_#1fd286_42.68%,_#edfaf5)] shadow-[0px_2px_5px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 hidden whitespace-nowrap z-[5]">
          <div className="absolute h-full w-full top-[0%] right-[0rem] bottom-[0%] left-[0rem] rounded bg-ghostwhite hidden" />
          <div className="absolute w-[calc(100%_-_72px)] top-[0.67rem] left-[3.11rem] text-[0.78rem] leading-[1.11rem] font-extrabold font-inter text-light-text-color text-left inline-block">
            New Transaction
          </div>
          <img
            className="absolute top-[0.56rem] left-[0.89rem] w-[1.33rem] h-[1.33rem] object-cover hidden"
            alt=""
            src="/00-general--01-icons--02-common--32-list@2x.png"
          />
        </div>
        <img
          className="w-[1.5rem] h-[1.52rem] absolute my-0 mx-[!important] top-[7.32rem] left-[1.72rem] z-[1]"
          alt=""
          src="/-icon-tool-box.svg"
        />
        <img
          className="w-[0.83rem] h-[0.71rem] relative hidden z-[7]"
          alt=""
          src="/-icon-plus.svg"
        />
        <div
          className="w-[8.83rem] h-[1.33rem] hidden cursor-pointer z-[8]"
          onClick={onFrameClick}
        />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2.39rem] pl-[1rem]">
          <div className="flex-1 flex flex-row items-center justify-start gap-[1rem]">
            <img
              className="h-[0.89rem] w-[1.11rem] relative cursor-pointer"
              loading="lazy"
              alt=""
              src="/-icon-alternate-sign-out.svg"
              onClick={onIconAlternateSignOutClick}
            />
            <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]">
              Log Out
            </div>
          </div>
        </div>
      </form>
      <div className="self-stretch flex flex-row items-center justify-center relative">
        <div className="flex-1 rounded-19xl [background:linear-gradient(93.56deg,_#1fd286_42.68%,_#edfaf5)] shadow-[0px_2px_5px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-end py-[0.67rem] pr-[0.89rem] pl-[3.11rem] whitespace-nowrap z-[4]">
          <div className="h-[2.44rem] w-[12.11rem] relative rounded bg-ghostwhite hidden" />
          <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-extrabold inline-block">
            New Transaction
          </div>
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover hidden"
            alt=""
            src="/00-general--01-icons--02-common--32-list@2x.png"
          />
        </div>
        <img
          className="h-[0.71rem] w-[0.83rem] absolute my-0 mx-[!important] top-[0.83rem] left-[1.5rem] z-[5]"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.89rem]">
        <img
          className="h-[1.33rem] w-[1.33rem] relative overflow-hidden shrink-0 z-[4]"
          loading="lazy"
          alt=""
          src="/sun--24--outline.svg"
        />
      </div>
    </div>
  );
};

export default StartRecording;
