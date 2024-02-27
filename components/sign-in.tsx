import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Input01RegularInput01Larg from "./input01-regular-input01-larg";
import Continuewithphonenumberbtn from "./continuewithphonenumberbtn";

const SignIn: NextPage = () => {
  const router = useRouter();

  const onCloseBtnIconClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onSignInBtnClick = useCallback(() => {
    router.push("/entrepreneur");
  }, [router]);

  const onForgotYourPasswordClick = useCallback(() => {
    router.push("/password-reset-for-staff");
  }, [router]);

  return (
    <div className="w-[30.11rem] rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[1.61rem] pb-[3.28rem] pr-[3.22rem] pl-[1.94rem] gap-[2rem] max-w-full text-center text-[1.78rem] text-gray-300 font-inter border-[2px] border-solid border-gray-500 mq700:gap-[1rem] mq700:pr-[1.61rem] mq700:box-border mq950:pt-[1.11rem] mq950:pb-[2.11rem] mq950:box-border">
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.39rem] pl-[0rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.89rem] max-w-full">
          <img
            className="w-[2.06rem] h-[2.06rem] relative overflow-hidden shrink-0 cursor-pointer"
            loading="lazy"
            alt=""
            src="/close--24--outline.svg"
            onClick={onCloseBtnIconClick}
          />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1rem] box-border max-w-full">
            <h1 className="m-0 h-[2.44rem] flex-1 relative text-inherit leading-[2.44rem] font-bold font-inherit inline-block max-w-full mq450:text-[1.06rem] mq450:leading-[1.44rem] mq950:text-[1.44rem] mq950:leading-[1.94rem]">
              Sign In for Enterpreneur
            </h1>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.39rem] box-border max-w-full">
        <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[1.33rem] max-w-full">
          <Input01RegularInput01Larg
            titleText="Email"
            inputText="Enter Email Address"
            propWidth="unset"
            propDisplay="inline-block"
            propWidth1="unset"
          />
          <Input01RegularInput01Larg
            titleText="Password"
            inputText="Enter Password"
            propWidth="1.61rem"
            propDisplay="inline-block"
            propWidth1="unset"
          />
          <button
            className="cursor-pointer [border:none] py-[0.67rem] pr-[0.06rem] pl-[0rem] bg-[transparent] self-stretch flex flex-row items-center justify-center relative"
            onClick={onSignInBtnClick}
          >
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
              <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
              <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-mediumslateblue z-[1]" />
            </div>
            <div className="w-[12rem] flex flex-row items-center justify-center py-[0rem] pr-[1.17rem] pl-[1.11rem] box-border z-[2]">
              <div className="h-[1.33rem] w-[2.83rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-light-text-color text-left inline-block">
                Sign in
              </div>
            </div>
          </button>
          <div
            className="w-[23.33rem] h-[1.11rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-mediumslateblue text-center inline-block cursor-pointer"
            onClick={onForgotYourPasswordClick}
          >
            Forgot your password?
          </div>
          <div className="self-stretch h-[0.06rem] relative bg-lavender-300" />
          <div className="self-stretch h-[1.11rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-slategray-400 text-center inline-block">
            Or sign in using:
          </div>
        </form>
      </div>
      <Continuewithphonenumberbtn
        propDisplay="inline-block"
        propDisplay1="inline-block"
      />
    </div>
  );
};

export default SignIn;
