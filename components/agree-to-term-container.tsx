import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const AgreeToTermContainer: NextPage = () => {
  const router = useRouter();

  const onSignupBtnClick = useCallback(() => {
    router.push("/staff-create-account");
  }, [router]);

  return (
    <section
      className="self-stretch flex flex-col items-start justify-start pt-[9.39rem] px-[4.06rem] pb-[9.83rem] box-border gap-[1.22rem] bg-[url('/agreetotermcontainer@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[3.06rem] text-light-text-color font-h6 mq450:pt-[6.11rem] mq450:pb-[6.39rem] mq450:box-border mq975:pl-[2rem] mq975:pr-[2rem] mq975:box-border"
      data-scroll-to="agreeToTermContainer"
    >
      <div className="w-[67.72rem] flex flex-col items-start justify-start gap-[0.44rem] max-w-full">
        <h1 className="m-0 self-stretch h-[5.94rem] relative text-inherit tracking-[0.2px] leading-[1.22rem] font-bold font-inherit inline-block mq450:text-[2.44rem] mq450:leading-[1rem] mq950:text-[1.83rem] mq950:leading-[0.72rem]">
          <p className="m-0">{`Stay Updated with Government `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Initiatives</p>
        </h1>
        <div className="flex flex-col items-start justify-start gap-[1rem] max-w-full text-[0.89rem]">
          <b className="w-[38.89rem] h-[1.22rem] relative tracking-[0.2px] leading-[1.22rem] inline-block">
            Subscribe to receive news and updates about the government's digital
            initiatives.
          </b>
          <div className="w-[28.06rem] flex flex-row flex-wrap items-center justify-start gap-[1.33rem] max-w-full text-lightsteelblue font-inter">
            <div className="h-[2.44rem] flex-1 relative rounded-8xs bg-light-text-color min-w-[12.67rem] max-w-full">
              <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-light-text-color w-full h-full hidden" />
              <div className="absolute top-[0.56rem] left-[0.61rem] w-[18.89rem] h-[1.33rem] hidden">
                <div className="absolute top-[0rem] left-[0rem] leading-[1.33rem] hidden">
                  Enter Email Address
                </div>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-[0.83rem] pr-[1.78rem] pl-[2rem] bg-light-text-color rounded-sm overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-100"
              onClick={onSignupBtnClick}
            >
              <b className="h-[1.22rem] w-[3.44rem] relative text-[0.78rem] tracking-[0.2px] leading-[1.22rem] inline-block font-h6 text-black text-center">
                Sign up
              </b>
            </button>
          </div>
        </div>
      </div>
      <b className="w-[28.5rem] h-[1.22rem] relative text-[0.89rem] tracking-[0.2px] leading-[1.22rem] inline-block max-w-full">
        By clicking Sign Up, you agree to our Terms and Conditions.
      </b>
    </section>
  );
};

export default AgreeToTermContainer;
