import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Input01RegularInput01Larg from "./input01-regular-input01-larg";
import CreateAccountBtn from "./create-account-btn";

const CreateAccount: NextPage = () => {
  const router = useRouter();

  const onClose24OutlineClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onSignInTextClick = useCallback(() => {
    router.push("/staff-login");
  }, [router]);

  return (
    <div className="w-[30.11rem] rounded-md [background:linear-gradient(#fff,_#fff),_#fff] shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[2.33rem] pb-[5.78rem] pr-[3.17rem] pl-[2.39rem] gap-[2.22rem] max-w-full text-center text-[0.78rem] text-slategray-400 font-inter border-[2px] border-solid border-gray-500 mq700:gap-[1.11rem] mq700:pt-[1.5rem] mq700:pb-[3.78rem] mq700:pr-[1.56rem] mq700:pl-[1.17rem] mq700:box-border">
      <div className="w-[23.33rem] h-[0.06rem] relative bg-lavender-300 hidden max-w-full" />
      <div className="relative leading-[1.11rem] hidden">
        Or create an account using:
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.67rem] max-w-full text-[1.78rem] text-gray-300">
        <img
          className="w-[2.06rem] h-[2.06rem] relative overflow-hidden shrink-0 cursor-pointer"
          loading="lazy"
          alt=""
          src="/close--24--outline.svg"
          onClick={onClose24OutlineClick}
        />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1rem] box-border max-w-full">
          <div className="flex-1 flex flex-col items-center justify-start gap-[0.44rem] max-w-full">
            <h1 className="m-0 self-stretch h-[2.44rem] relative text-inherit leading-[2.44rem] font-bold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.44rem] mq950:text-[1.44rem] mq950:leading-[1.94rem]">
              Create Account for Staff
            </h1>
            <div className="flex flex-row items-start justify-start gap-[0.33rem] text-[0.89rem] text-slategray-400">
              <div className="h-[1.33rem] w-[7.61rem] relative leading-[1.33rem] inline-block">
                Have an Account?
              </div>
              <div
                className="h-[1.33rem] w-[2.89rem] relative leading-[1.33rem] text-mediumslateblue inline-block cursor-pointer"
                onClick={onSignInTextClick}
              >
                Sign In
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.94rem] box-border max-w-full">
        <form className="m-0 flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[1.33rem] max-w-full">
          <Input01RegularInput01Larg
            titleText="Email"
            inputText="Enter Email Address"
          />
          <Input01RegularInput01Larg
            titleText="Password"
            inputText="Input text"
            propWidth="1.61rem"
            propDisplay="inline-block"
            propWidth1="4.06rem"
          />
          <CreateAccountBtn />
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.22rem]">
            <div className="self-stretch h-[1.11rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-slategray-400 text-center inline-block">
              By creating account, you agree to our
            </div>
            <div className="self-stretch h-[1.11rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-mediumslateblue text-center inline-block">
              Terms of Service
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
