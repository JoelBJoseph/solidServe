import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ResetPassword2: NextPage = () => {
  const router = useRouter();

  const onClose24OutlineClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onButton01RegularButton01LaClick = useCallback(() => {
    router.push("/email-confirmation-for-staff");
  }, [router]);

  return (
    <div className="w-[30.11rem] rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[1.72rem] pb-[2.67rem] pr-[3.22rem] pl-[2.33rem] gap-[2.22rem] max-w-full text-center text-[1.78rem] text-gray-300 font-inter border-[2px] border-solid border-gray-500 mq700:gap-[1.11rem] mq700:pt-[1.11rem] mq700:pb-[1.72rem] mq700:pr-[1.61rem] mq700:pl-[1.17rem] mq700:box-border">
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="w-[16.56rem] flex flex-row items-start justify-between gap-[1.11rem]">
          <img
            className="h-[2.06rem] w-[2.06rem] relative overflow-hidden shrink-0 cursor-pointer"
            loading="lazy"
            alt=""
            src="/close--24--outline.svg"
            onClick={onClose24OutlineClick}
          />
          <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[7.78rem] h-[7.78rem] relative"
              loading="lazy"
              alt=""
              src="/mail.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.44rem] pr-[0rem] pl-[1rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.44rem] max-w-full">
          <h1 className="m-0 self-stretch h-[2.44rem] relative text-inherit leading-[2.44rem] font-bold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.44rem] mq950:text-[1.44rem] mq950:leading-[1.94rem]">
            Almost There!
          </h1>
          <div className="self-stretch h-[1.33rem] relative text-[0.89rem] leading-[1.33rem] text-slategray-400 inline-block">
            Check your email inbox and confirm your account
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1rem] box-border max-w-full text-[0.78rem] text-slategray-400">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.33rem] max-w-full">
          <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
          <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] inline-block">
            Didn’t receive any mail?
          </div>
          <button
            className="cursor-pointer py-[0.67rem] pr-[6.39rem] pl-[8.11rem] bg-light-text-color self-stretch rounded box-border flex flex-row items-center justify-center max-w-full z-[1] border-[1px] border-solid border-lavender-300 mq450:pl-[1.11rem] mq450:pr-[1.11rem] mq450:box-border"
            onClick={onButton01RegularButton01LaClick}
          >
            <div className="h-[2.67rem] w-[23.33rem] relative rounded hidden max-w-full" />
            <div className="h-[2.67rem] w-[23.33rem] relative rounded bg-light-text-color box-border hidden max-w-full border-[1px] border-solid border-lavender-300" />
            <div className="h-[1.33rem] w-[8.83rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-mediumslateblue text-left inline-block z-[2]">
              Resend Confirmation
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword2;
