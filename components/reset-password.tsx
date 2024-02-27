import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HelpText from "./help-text";
import Input01RegularInput01Larg from "./input01-regular-input01-larg";

const ResetPassword: NextPage = () => {
  const router = useRouter();

  const onClose24OutlineClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onButton01RegularButton01LaClick = useCallback(() => {
    router.push("/registration-complete-for-staf");
  }, [router]);

  const onTypeClick = useCallback(() => {
    router.push("/password-reset-for-staff");
  }, [router]);

  return (
    <div className="w-[30.11rem] rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[1.67rem] pb-[2.67rem] pr-[3.22rem] pl-[2.06rem] gap-[2.22rem] max-w-full text-center text-[0.78rem] text-slategray-400 font-inter border-[2px] border-solid border-gray-500 mq700:gap-[1.11rem] mq700:pt-[1.11rem] mq700:pr-[1.61rem] mq700:pb-[1.72rem] mq700:box-border">
      <HelpText
        passwordReset="Confirm Email"
        weWillHelpYouRes="Check Your Email and Enter Confirmation Code"
        onClose24OutlineClick={onClose24OutlineClick}
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.44rem] pr-[0rem] pl-[1.28rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.33rem] max-w-full">
          <Input01RegularInput01Larg
            titleText="Confirmation Code"
            inputText="Enter Code"
            propWidth="1.61rem"
            propDisplay="inline-block"
            propWidth1="unset"
          />
          <button
            className="cursor-pointer [border:none] py-[0.67rem] pr-[1.56rem] pl-[1.11rem] bg-mediumslateblue self-stretch rounded flex flex-row items-center justify-center box-border max-w-full z-[1]"
            onClick={onButton01RegularButton01LaClick}
          >
            <div className="h-[2.67rem] w-[23.33rem] relative rounded hidden max-w-full" />
            <div className="h-[2.67rem] w-[23.33rem] relative rounded bg-mediumslateblue hidden max-w-full" />
            <div className="h-[1.33rem] w-[5.83rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-light-text-color text-left inline-block z-[2]">
              Confirm Email
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.28rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-center justify-start gap-[1.33rem] max-w-full">
          <div className="self-stretch h-[0.06rem] relative bg-lavender-300" />
          <div className="w-[10.44rem] h-[1.11rem] relative leading-[1.11rem] inline-block">
            Haven’t received your code?
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[2.67rem] relative">
            <div className="absolute w-full top-[calc(50%_-_24px)] right-[0%] left-[0%] rounded h-full hidden" />
            <div
              className="absolute w-full top-[calc(50%_-_24px)] right-[0%] left-[0%] rounded bg-light-text-color box-border h-full cursor-pointer z-[1] border-[1px] border-solid border-lavender-300"
              onClick={onTypeClick}
            />
            <div className="absolute top-[0.67rem] left-[8.67rem] text-[0.89rem] leading-[1.33rem] font-inter text-mediumslateblue text-left z-[2]">
              Resend Code
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
