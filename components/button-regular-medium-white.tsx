import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";

const ButtonRegularMediumWhite: NextPage = () => {
  const [nameText4Value, setNameText4Value] = useState("");
  const [nameText5Value, setNameText5Value] = useState("");
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.67rem] text-left text-[0.67rem] text-lightsteelblue font-inter">
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.61rem] pl-[0.89rem]">
        <div className="h-[0.89rem] flex-1 relative leading-[0.89rem] inline-block">
          Settings
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <button className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-[transparent] self-stretch flex flex-row items-center justify-start relative gap-[0.89rem] whitespace-nowrap">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-mediumslateblue" />
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
            alt=""
            src="/00-general--01-icons--02-common--02-user@2x.png"
          />
          <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium font-inter text-light-text-color text-left inline-block z-[1]">
            Personal Settings
          </div>
        </button>
        <div className="self-stretch flex flex-col items-start justify-start">
          <button className="cursor-pointer [border:none] py-[0.56rem] px-[0.89rem] bg-ghostwhite self-stretch flex flex-row items-center justify-start relative gap-[0.89rem] whitespace-nowrap hover:bg-gainsboro-200">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src="/00-general--01-icons--02-common--01-settings-2@2x.png"
            />
            <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-inter text-slategray-400 text-left inline-block z-[1]">
              Global Settings
            </div>
          </button>
          <div className="self-stretch flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.89rem] z-[2] mt-[-1px]">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src="/00-general--01-icons--02-common--02-user-1@2x.png"
            />
            <input
              className="[border:none] [outline:none] font-medium font-inter text-[0.78rem] bg-[transparent] h-[1.11rem] flex-1 relative leading-[1.11rem] text-slategray-300 text-left inline-block min-w-[4.89rem] z-[1]"
              placeholder="Staff login"
              type="text"
              value={nameText4Value}
              onChange={(event) => setNameText4Value(event.target.value)}
            />
          </div>
        </div>
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
              value={nameText5Value}
              onChange={(event) => setNameText5Value(event.target.value)}
            />
          </div>
          <img
            className="h-[1.33rem] w-[1.33rem] absolute my-0 mx-[!important] bottom-[0.44rem] left-[0.94rem] overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/sun--24--outline.svg"
          />
        </div>
      </div>
      <div className="w-[10.61rem] flex flex-row items-start justify-start py-[0rem] px-[0.89rem] box-border text-[0.78rem] text-slategray-400">
        <div
          className="flex-1 flex flex-row items-center justify-start gap-[0.89rem] cursor-pointer"
          onClick={onFrameContainerClick}
        >
          <img
            className="h-[1.33rem] w-[1.33rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/profile--24--outline.svg"
          />
          <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block">
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonRegularMediumWhite;
