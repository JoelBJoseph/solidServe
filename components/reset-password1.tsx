import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import HelpText from "./help-text";

const ResetPassword1: NextPage = () => {
  const [fieldTypeValue, setFieldTypeValue] = useState("");
  const router = useRouter();

  const onClose24OutlineClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onButton01RegularButton01LaClick = useCallback(() => {
    router.push("/email-confirmation-for-staff");
  }, [router]);

  const onButton01RegularButton01La1Click = useCallback(() => {
    router.push("/staff-login");
  }, [router]);

  return (
    <div className="w-[30.11rem] rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[1.67rem] pb-[2.67rem] pr-[3.22rem] pl-[2.06rem] gap-[2.22rem] max-w-full text-center text-[0.78rem] text-slategray-400 font-inter border-[2px] border-solid border-gray-500 mq700:gap-[1.11rem] mq700:pt-[1.11rem] mq700:pr-[1.61rem] mq700:pb-[1.72rem] mq700:box-border">
      <HelpText
        passwordReset="Password Reset"
        weWillHelpYouRes="We Will Help You Reset your Password"
        onClose24OutlineClick={onClose24OutlineClick}
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.44rem] pr-[0rem] pl-[1.28rem] box-border max-w-full text-left">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.33rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start relative gap-[0.22rem] max-w-full">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0rem]">
              <div className="h-[1.11rem] w-[2rem] relative leading-[1.11rem] inline-block whitespace-nowrap">
                Email
              </div>
            </div>
            <input
              className="[outline:none] bg-light-text-color w-full h-[2.67rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded box-border z-[1] border-[1px] border-solid border-lavender-200"
              type="text"
              value={fieldTypeValue}
              onChange={(event) => setFieldTypeValue(event.target.value)}
            />
            <div className="w-[21.56rem] h-[1.33rem] relative hidden max-w-full z-[2] text-[0.89rem] text-lightsteelblue">
              <div className="absolute top-[0rem] left-[0rem] leading-[1.33rem] hidden">
                Enter Email Address
              </div>
            </div>
            <div className="self-stretch h-[2.67rem] relative rounded" />
          </div>
          <button
            className="cursor-pointer [border:none] py-[0.67rem] pr-[1.22rem] pl-[1.11rem] bg-mediumslateblue self-stretch rounded flex flex-row items-center justify-center box-border max-w-full z-[1]"
            onClick={onButton01RegularButton01LaClick}
          >
            <div className="h-[2.67rem] w-[23.33rem] relative rounded hidden max-w-full" />
            <div className="h-[2.67rem] w-[23.33rem] relative rounded bg-mediumslateblue hidden max-w-full" />
            <div className="h-[1.33rem] w-[6.78rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-light-text-color text-left inline-block z-[2]">
              Reset Password
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.28rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-center justify-start gap-[1.33rem] max-w-full">
          <div className="self-stretch h-[0.06rem] relative bg-lavender-300" />
          <div className="w-[10rem] h-[1.11rem] relative leading-[1.11rem] inline-block">
            Remember your password?
          </div>
          <button
            className="cursor-pointer p-[0.67rem] bg-light-text-color w-[23.33rem] h-[2.67rem] rounded box-border flex flex-row items-center justify-center max-w-full z-[1] border-[1px] border-solid border-lavender-300"
            onClick={onButton01RegularButton01La1Click}
          >
            <div className="h-[2.67rem] w-[23.33rem] relative rounded hidden max-w-full" />
            <div className="h-[2.67rem] w-[23.33rem] relative rounded bg-light-text-color box-border hidden max-w-full border-[1px] border-solid border-lavender-300" />
            <div className="flex flex-row items-center justify-center py-[0rem] pr-[2.89rem] pl-[2.83rem] z-[2]">
              <div className="h-[1.33rem] w-[6.28rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-mediumslateblue text-left inline-block z-[3]">
                Back to Sign In
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword1;
