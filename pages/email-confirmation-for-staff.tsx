import type { NextPage } from "next";
import ResetPassword from "../components/reset-password";

const EmailConfirmationForStaff: NextPage = () => {
  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-center justify-start pt-[2.89rem] pb-[14rem] pr-[25rem] pl-[3.06rem] box-border gap-[8.17rem] tracking-[normal] text-left text-[2.67rem] text-black font-roboto-flex mq450:gap-[2.06rem] mq450:pr-[1.11rem] mq450:box-border mq950:gap-[4.06rem] mq950:pl-[1.5rem] mq950:pr-[12.5rem] mq950:box-border">
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="w-[13.17rem] flex flex-col items-end justify-start gap-[0.67rem]">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.17rem] pl-[0rem]">
            <h1 className="m-0 h-[1.11rem] flex-1 relative text-inherit leading-[1.11rem] font-normal font-inherit inline-block mq450:text-[1.61rem] mq450:leading-[0.67rem] mq950:text-[2.11rem] mq950:leading-[0.89rem]">
              smartServe
            </h1>
          </div>
          <div className="w-[10.39rem] h-[1.11rem] relative text-[1.11rem] leading-[1.11rem] inline-block mq450:text-[0.89rem] mq450:leading-[0.89rem]">
            For Akshaya eCenters
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-end max-w-full">
        <ResetPassword />
      </section>
    </div>
  );
};

export default EmailConfirmationForStaff;
