import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameLine from "./frame-line";
import LineRectangle from "./line-rectangle";

const Navigation: NextPage = () => {
  const router = useRouter();

  const onContainer1Click = useCallback(() => {
    router.push("/inbox");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/settings");
  }, [router]);

  const onFrameClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onContainerClick = useCallback(() => {
    router.push("/c-staff");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/all-customers");
  }, [router]);

  const onIconAlternateSignOutClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  return (
    <div className="w-full my-0 mx-[!important] absolute h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-ghostwhite shadow-[-1px_0px_0px_#d7dbec_inset] overflow-hidden flex flex-col items-center justify-start pt-[1.61rem] px-[0.89rem] pb-[24.67rem] box-border gap-[0.5rem] text-left text-[0.78rem] text-slategray-100 font-inter">
      <img
        className="w-[1.06rem] h-[0.93rem] absolute my-0 mx-[!important] top-[12.38rem] left-[1.89rem] z-[2]"
        loading="lazy"
        alt=""
        src="/-icon-tokens1.svg"
      />
      <button className="cursor-pointer [border:none] py-[0.67rem] pr-[0.89rem] pl-[3.11rem] bg-[transparent] self-stretch rounded-19xl [background:linear-gradient(93.56deg,_#1fd286_42.68%,_#edfaf5)] shadow-[0px_2px_5px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-end whitespace-nowrap">
        <div className="h-[2.44rem] w-[12.11rem] relative rounded bg-ghostwhite hidden" />
        <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-extrabold font-inter text-light-text-color text-left inline-block">
          New Transaction
        </div>
        <img
          className="h-[1.33rem] w-[1.33rem] relative object-cover hidden"
          alt=""
          src="/00-general--01-icons--02-common--32-list@2x.png"
        />
      </button>
      <img
        className="w-[1.5rem] h-[1.52rem] absolute my-0 mx-[!important] top-[7.32rem] left-[1.72rem] z-[1]"
        alt=""
        src="/-icon-tool-box.svg"
      />
      <img
        className="w-[0.83rem] h-[0.71rem] absolute my-0 mx-[!important] top-[2.47rem] left-[2.39rem] z-[1]"
        alt=""
        src="/-icon-plus.svg"
      />
      <div
        className="w-[8.83rem] h-[1.33rem] hidden cursor-pointer z-[4]"
        onClick={onFrameClick}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[0.61rem]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div
            className="self-stretch bg-ghostwhite flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.72rem] cursor-pointer"
            onClick={onContainerClick}
          >
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src="/icon@2x.png"
            />
            <div className="h-[1.11rem] w-[2.22rem] relative leading-[1.11rem] font-medium inline-block z-[1]">
              Home
            </div>
          </div>
          <FrameLine
            propDisplay="inline-block"
            propDisplay1="inline-block"
            onHeaderFrameContainer1Click={onContainer1Click}
          />
          <div className="self-stretch flex flex-row items-center justify-start py-[0.67rem] px-[3rem] relative">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <div className="h-[1.11rem] w-[2.28rem] relative leading-[1.11rem] font-medium inline-block z-[1]">
              Token
            </div>
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover hidden z-[2]"
              alt=""
              src="/chat@2x.png"
            />
          </div>
          <button
            className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-mediumslateblue self-stretch flex flex-row items-center justify-start relative gap-[0.72rem] hover:bg-dodgerblue-200"
            onClick={onButton1Click}
          >
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-mediumblue" />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src="/00-general--01-icons--02-common--03-users@2x.png"
            />
            <div className="h-[1.11rem] w-[4.11rem] relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-light-text-color text-left inline-block z-[1]">
              Customers
            </div>
          </button>
        </div>
        <div className="w-[10.89rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.28rem] box-border text-[0.67rem] text-lightsteelblue">
          <div className="h-[0.89rem] flex-1 relative leading-[0.89rem] inline-block">
            Settings
          </div>
        </div>
        <LineRectangle
          propPadding="0rem 0rem 0.44rem"
          onColumnOneClick={onButtonClick}
          nameDisplay="inline-block"
          nameDisplay1="inline-block"
        />
        <div className="w-[10.11rem] flex flex-row items-start justify-start py-[0rem] pr-[1.39rem] pl-[0rem] box-border">
          <div className="flex-1 flex flex-row items-center justify-start gap-[1rem]">
            <img
              className="h-[0.89rem] w-[1.11rem] relative cursor-pointer"
              loading="lazy"
              alt=""
              src="/-icon-alternate-sign-out.svg"
              onClick={onIconAlternateSignOutClick}
            />
            <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block z-[1]">
              Log Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
