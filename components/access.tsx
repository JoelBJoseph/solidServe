import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Access: NextPage = () => {
  const router = useRouter();

  const onButtonbtnprimaryColorbtnRClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='services']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonbtnprimaryColorbtnOClick = useCallback(() => {
    router.push("/staff-create-account");
  }, [router]);

  return (
    <section className="self-stretch bg-ghostwhite overflow-hidden flex flex-row items-start justify-between pt-[5.5rem] pb-[6.72rem] pr-[5.67rem] pl-[4.33rem] box-border max-w-full gap-[1.11rem] text-center text-[2.22rem] text-black font-h6 mq450:pl-[2.17rem] mq450:pr-[2.83rem] mq450:box-border mq950:pr-[1.11rem] mq950:box-border mq975:flex-wrap">
      <div className="w-[45.94rem] flex flex-col items-start justify-start pt-[1.22rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.89rem] max-w-full">
          <h1 className="m-0 w-[45.94rem] h-[1.22rem] relative text-inherit tracking-[0.2px] leading-[1.22rem] font-bold font-inherit inline-block mq450:text-[1.78rem] mq450:leading-[1rem] mq950:text-[1.33rem] mq950:leading-[0.72rem]">
            Access Government Services with Ease
          </h1>
          <div className="w-[21.06rem] h-[1.22rem] relative text-[0.89rem] tracking-[0.2px] leading-[1.22rem] inline-block max-w-full">
            Sign up or log in to explore our digital services
          </div>
        </div>
      </div>
      <div className="h-[2.89rem] w-[16.56rem] relative">
        <button
          className="cursor-pointer [border:none] py-[0.83rem] pr-[1.78rem] pl-[2rem] bg-primary-color absolute top-[0rem] left-[0rem] rounded-18xl overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-steelblue"
          onClick={onButtonbtnprimaryColorbtnRClick}
        >
          <b className="h-[1.22rem] w-[4.94rem] relative text-[0.78rem] tracking-[0.2px] leading-[1.22rem] inline-block font-h6 text-light-text-color text-center">
            Learn More
          </b>
        </button>
        <button
          className="cursor-pointer py-[0.83rem] pr-[1.72rem] pl-[1.94rem] bg-[transparent] absolute top-[0rem] left-[9.28rem] rounded-18xl overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200"
          onClick={onButtonbtnprimaryColorbtnOClick}
        >
          <b className="h-[1.22rem] w-[3.5rem] relative text-[0.78rem] tracking-[0.2px] leading-[1.22rem] inline-block font-h6 text-black text-center">
            Sign Up
          </b>
        </button>
      </div>
    </section>
  );
};

export default Access;
