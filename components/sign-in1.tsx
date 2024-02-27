import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Continuewithphonenumberbtn from "./continuewithphonenumberbtn";

const SignIn1: NextPage = () => {
  const [fieldTypeValue, setFieldTypeValue] = useState("");
  const [fieldType1Value, setFieldType1Value] = useState("");
  const router = useRouter();

  const onCloseBtnIconClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onCreateAnAccountClick = useCallback(() => {
    router.push("/staff-create-account");
  }, [router]);

  const onSignInBtnClick = useCallback(() => {
    router.push("/c-staff");
  }, [router]);

  const onForgotYourPasswordClick = useCallback(() => {
    router.push("/password-reset-for-staff");
  }, [router]);

  return (
    <form className="m-0 w-[30.11rem] rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[1.61rem] pb-[3.28rem] pr-[3.22rem] pl-[1.94rem] gap-[1rem] max-w-full border-[2px] border-solid border-gray-500 mq700:pr-[1.61rem] mq700:box-border mq950:pt-[1.11rem] mq950:pb-[2.11rem] mq950:box-border">
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.39rem] pl-[0rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.22rem] max-w-full">
          <img
            className="w-[2.06rem] h-[2.06rem] relative overflow-hidden shrink-0 cursor-pointer"
            loading="lazy"
            alt=""
            src="/close--24--outline.svg"
            onClick={onCloseBtnIconClick}
          />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1rem] box-border max-w-full">
            <div className="flex-1 flex flex-col items-center justify-start gap-[0.44rem] max-w-full">
              <h1 className="m-0 self-stretch h-[2.44rem] relative text-[1.78rem] leading-[2.44rem] font-bold font-inter text-gray-300 text-center inline-block mq450:text-[1.06rem] mq450:leading-[1.44rem] mq950:text-[1.44rem] mq950:leading-[1.94rem]">
                Sign In for Staff
              </h1>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.5rem]">
                <div className="flex flex-row items-start justify-center gap-[0.28rem] mq450:flex-wrap">
                  <div className="h-[1.33rem] w-[5.28rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-slategray-400 text-center inline-block">
                    New to this?
                  </div>
                  <div
                    className="h-[1.33rem] w-[7.83rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-mediumslateblue text-center inline-block cursor-pointer"
                    onClick={onCreateAnAccountClick}
                  >
                    Create an Account
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.33rem] pr-[0rem] pl-[1.39rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start relative gap-[0.22rem] max-w-full">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0rem]">
            <div className="h-[1.11rem] w-[2rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-slategray-400 text-left inline-block whitespace-nowrap">
              Email
            </div>
          </div>
          <input
            className="[outline:none] bg-light-text-color w-full h-[2.67rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded box-border z-[1] border-[1px] border-solid border-lavender-200"
            type="text"
            value={fieldTypeValue}
            onChange={(event) => setFieldTypeValue(event.target.value)}
          />
          <div className="w-[21.56rem] h-[1.33rem] relative hidden max-w-full z-[2]">
            <div className="absolute top-[0rem] left-[0rem] text-[0.89rem] leading-[1.33rem] font-inter text-lightsteelblue text-left hidden">
              Enter Email Address
            </div>
          </div>
          <div className="self-stretch h-[2.67rem] relative rounded" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.44rem] pr-[0rem] pl-[1.39rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start relative gap-[0.22rem] max-w-full">
          <div className="w-[1.61rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border">
            <div className="h-[1.11rem] w-[3.61rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-slategray-400 text-left inline-block whitespace-nowrap shrink-0">
              Password
            </div>
          </div>
          <input
            className="[outline:none] bg-light-text-color w-full h-[2.67rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded box-border z-[1] border-[1px] border-solid border-lavender-200"
            type="text"
            value={fieldType1Value}
            onChange={(event) => setFieldType1Value(event.target.value)}
          />
          <div className="w-[21.56rem] h-[1.33rem] relative hidden max-w-full z-[2]">
            <div className="absolute top-[0rem] left-[0rem] text-[0.89rem] leading-[1.33rem] font-inter text-lightsteelblue text-left hidden">
              Enter Password
            </div>
          </div>
          <div className="self-stretch h-[2.67rem] relative rounded" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.33rem] pr-[0rem] pl-[1.39rem] box-border max-w-full">
        <button
          className="cursor-pointer [border:none] p-[0.67rem] bg-[transparent] h-[2.67rem] w-[23.33rem] flex flex-row items-center justify-center box-border relative max-w-full"
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
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.33rem] pr-[0rem] pl-[1.39rem] box-border max-w-full">
        <div
          className="h-[1.11rem] w-[23.33rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-mediumslateblue text-center inline-block max-w-full cursor-pointer"
          onClick={onForgotYourPasswordClick}
        >
          Forgot your password?
        </div>
      </div>
      <div className="self-stretch h-[0.39rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.33rem] pr-[0rem] pl-[1.39rem] box-border max-w-full">
        <div className="self-stretch flex-1 relative bg-lavender-300 max-w-full" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.94rem] pr-[0rem] pl-[1.39rem] box-border max-w-full">
        <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-inter text-slategray-400 text-center inline-block max-w-full">
          Or sign in using:
        </div>
      </div>
      <Continuewithphonenumberbtn />
    </form>
  );
};

export default SignIn1;
