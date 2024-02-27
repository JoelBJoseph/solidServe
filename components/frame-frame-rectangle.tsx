import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";

const FrameFrameRectangle: NextPage = () => {
  const [nameText8Value, setNameText8Value] = useState("");
  const router = useRouter();

  const onNameTextTextOtherBadgeLigClick = useCallback(() => {
    router.push("/entrepreneur");
  }, [router]);

  const onFrameLegendContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNameTextTextOtherBadgeLig1Click = useCallback(() => {
    router.push("/e-all-customers");
  }, [router]);

  const onFrameRecentTransactionsClick = useCallback(() => {
    router.push("/e-settings");
  }, [router]);

  const onIconAlternateSignOutClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.39rem] text-left text-[0.78rem] text-slategray-100 font-inter">
      <div className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.28rem]">
        <button
          className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-[transparent] self-stretch flex flex-row items-center justify-start relative gap-[0.78rem]"
          onClick={onNameTextTextOtherBadgeLigClick}
        >
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-mediumslateblue" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
            alt=""
            src="/00-general--01-icons--02-common--02-user@2x.png"
          />
          <div className="h-[1.11rem] w-[4.89rem] relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-light-text-color text-left inline-block z-[1]">
            Entrepreneur
          </div>
        </button>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-center justify-center relative">
            <div className="flex-1 flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] gap-[0.89rem]">
              <div className="h-[2.44rem] w-[12.11rem] relative rounded bg-ghostwhite hidden" />
              <img
                className="h-[1.33rem] w-[1.33rem] relative object-cover"
                loading="lazy"
                alt=""
                src="/00-general--01-icons--02-common--01-settings-3@2x.png"
              />
              <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block">
                Training Kit
              </div>
            </div>
            <img
              className="h-[1.52rem] w-[1.5rem] absolute my-0 mx-[!important] top-[0.27rem] left-[0.83rem] z-[1]"
              alt=""
              src="/-icon-tool-box.svg"
            />
          </div>
          <div
            className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.78rem] cursor-pointer z-[1] mt-[-2px]"
            onClick={onFrameLegendContainerClick}
          >
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src="/chat@2x.png"
            />
            <div className="h-[1.11rem] w-[2.06rem] relative leading-[1.11rem] font-medium inline-block z-[1]">
              Inbox
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="w-[12.11rem] flex flex-row items-center justify-start py-[0.67rem] px-[3rem] box-border relative">
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
          <img
            className="h-[0.83rem] w-[1.22rem] relative z-[2] ml-[-202px]"
            alt=""
            src="/-icon-tokens.svg"
          />
        </div>
        <div
          className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.72rem] cursor-pointer"
          onClick={onNameTextTextOtherBadgeLig1Click}
        >
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
            alt=""
            src="/00-general--01-icons--02-common--03-users@2x.png"
          />
          <div className="h-[1.11rem] w-[4.11rem] relative leading-[1.11rem] font-medium inline-block z-[1]">
            Customers
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="w-[12.11rem] flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] box-border relative gap-[0.72rem] z-[2]">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src="/00-general--01-icons--02-common--01-settings-3@2x.png"
            />
            <div className="h-[1.11rem] w-[5.44rem] relative leading-[1.11rem] font-medium inline-block z-[1]">
              Compensation
            </div>
          </div>
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[3] ml-[-202px]"
            alt=""
            src="/money-fill@2x.png"
          />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start">
          <div className="w-[12.11rem] flex flex-row items-center justify-end py-[0.67rem] pr-[0.89rem] pl-[3.11rem] box-border relative whitespace-nowrap z-[3]">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]">
              Wallet Manager
            </div>
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover hidden z-[2]"
              alt=""
              src="/00-general--01-icons--02-common--03-users@2x.png"
            />
          </div>
          <img
            className="h-[1.33rem] w-[1.33rem] relative z-[4] ml-[-202px]"
            alt=""
            src="/wallet-alt.svg"
          />
        </button>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.61rem] pl-[0.89rem] text-[0.67rem] text-lightsteelblue">
          <div className="h-[0.89rem] flex-1 relative leading-[0.89rem] inline-block">
            Settings
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <button
          className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-[transparent] self-stretch flex flex-row items-center justify-start relative gap-[0.89rem] whitespace-nowrap"
          onClick={onFrameRecentTransactionsClick}
        >
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
            alt=""
            src="/00-general--01-icons--02-common--02-user-1@2x.png"
          />
          <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]">
            Personal Settings
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-ghostwhite self-stretch flex flex-row items-center justify-start relative gap-[0.89rem] whitespace-nowrap hover:bg-gainsboro-200">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
            alt=""
            src="/00-general--01-icons--02-common--01-settings-2@2x.png"
          />
          <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-slategray-100 text-left inline-block z-[1]">
            Global Settings
          </div>
        </button>
        <div className="self-stretch flex flex-row items-center justify-center relative">
          <div className="flex-1 bg-ghostwhite flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.89rem]">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src="/00-general--01-icons--02-common--01-settings-3@2x.png"
            />
            <input
              className="[border:none] [outline:none] font-medium font-inter text-[0.78rem] bg-[transparent] h-[1.11rem] flex-1 relative leading-[1.11rem] text-slategray-100 text-left inline-block min-w-[4.89rem] z-[1]"
              placeholder="Dark Mode"
              type="text"
              value={nameText8Value}
              onChange={(event) => setNameText8Value(event.target.value)}
            />
          </div>
          <img
            className="h-[1.33rem] w-[1.33rem] absolute my-0 mx-[!important] bottom-[0.5rem] left-[0.89rem] overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/sun--24--outline.svg"
          />
        </div>
      </div>
      <div className="w-[10.72rem] flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border">
        <div className="flex-1 flex flex-row items-center justify-start gap-[1rem]">
          <img
            className="h-[0.89rem] w-[1.11rem] relative cursor-pointer"
            loading="lazy"
            alt=""
            src="/-icon-alternate-sign-out.svg"
            onClick={onIconAlternateSignOutClick}
          />
          <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block">
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameFrameRectangle;
