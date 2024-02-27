import type { NextPage } from "next";
import SignIn from "../components/sign-in";

const EnterpreneurLogin: NextPage = () => {
  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-center justify-start pt-[3rem] pb-[8.28rem] pr-[24.83rem] pl-[2.67rem] box-border gap-[2.44rem] tracking-[normal] text-left text-[2.67rem] text-black font-roboto-flex mq450:pr-[1.11rem] mq450:box-border mq950:gap-[1.22rem] mq950:pl-[1.33rem] mq950:pr-[12.39rem] mq950:box-border">
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="w-[13.17rem] flex flex-col items-end justify-start gap-[0.67rem]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <h1 className="m-0 h-[1.11rem] w-[10.78rem] relative text-inherit leading-[1.11rem] font-normal font-inherit inline-block mq450:text-[1.61rem] mq450:leading-[0.67rem] mq950:text-[2.11rem] mq950:leading-[0.89rem]">
              solidServe
            </h1>
          </div>
          <h3 className="m-0 w-[10.39rem] h-[1.11rem] relative text-[1.11rem] leading-[1.11rem] font-normal font-inherit inline-block mq450:text-[0.89rem] mq450:leading-[0.89rem]">
            For Akshaya eCenters
          </h3>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-end max-w-full">
        <SignIn />
      </section>
    </div>
  );
};

export default EnterpreneurLogin;
