import type { NextPage } from "next";
import { useCallback } from "react";
import Home from "../components/home";
import { useRouter } from "next/router";
import Services from "../components/services";
import Access from "../components/access";
import AgreeToTermContainer from "../components/agree-to-term-container";
import ContactDiv from "../components/contact-div";
import InfoDiv from "../components/info-div";
import AppDiv from "../components/app-div";

const BeforeLogin: NextPage = () => {
  const router = useRouter();

  const onLearnMoreBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='services']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSignupBtnClick = useCallback(() => {
    router.push("/staff-create-account");
  }, [router]);

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
    <div className="w-full relative flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2rem] box-border tracking-[normal]">
      <Home />
      <section
        className="self-stretch bg-ghostwhite overflow-hidden flex flex-row items-start justify-center pt-[8.78rem] pb-[6.89rem] pr-[5.39rem] pl-[4.17rem] box-border gap-[0.61rem] max-w-full text-left text-[3.06rem] text-black font-h6 mq450:pt-[3.72rem] mq450:pb-[2.94rem] mq450:pr-[2.67rem] mq450:pl-[2.06rem] mq450:box-border mq700:pt-[5.72rem] mq700:pb-[4.5rem] mq700:box-border mq950:pr-[1.11rem] mq950:box-border mq975:flex-wrap"
        data-scroll-to="about"
      >
        <div className="w-[34.39rem] flex flex-col items-start justify-start pt-[3.22rem] px-[0rem] pb-[0rem] box-border min-w-[34.39rem] max-w-full mq450:pt-[2.11rem] mq450:box-border mq700:min-w-full mq975:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[3.5rem] max-w-full mq450:gap-[1.72rem] mq950:gap-[0.89rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.78rem] max-w-full mq450:gap-[0.89rem]">
              <h1 className="m-0 self-stretch h-[14.89rem] relative text-inherit font-bold font-inherit inline-block mq450:text-[2.44rem] mq950:text-[1.83rem]">
                Simplify government management with our user-friendly
                application
              </h1>
              <h2 className="m-0 w-[32.67rem] h-[6.22rem] relative text-[1.39rem] font-light font-inherit inline-block shrink-0 max-w-full mq950:text-[1.11rem]">
                Experience the ease and efficiency of managing government
                services with our user interface government Akshya Center
                management application.
              </h2>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.56rem]">
              <button
                className="cursor-pointer [border:none] py-[0.83rem] pr-[1.78rem] pl-[2rem] bg-primary-color rounded-18xl overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-steelblue"
                onClick={onLearnMoreBtnClick}
              >
                <b className="h-[1.22rem] w-[4.94rem] relative text-[0.78rem] tracking-[0.2px] leading-[1.22rem] inline-block font-h6 text-light-text-color text-center">
                  Learn More
                </b>
              </button>
              <button
                className="cursor-pointer py-[0.83rem] pr-[1.72rem] pl-[1.94rem] bg-[transparent] rounded-18xl overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200"
                onClick={onSignupBtnClick}
              >
                <b className="h-[1.22rem] w-[3.5rem] relative text-[0.78rem] tracking-[0.2px] leading-[1.22rem] inline-block font-h6 text-black text-center">
                  Sign Up
                </b>
              </button>
            </div>
          </div>
        </div>
        <img
          className="h-[41.22rem] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover min-w-[23.06rem] mq450:min-w-full"
          loading="lazy"
          alt=""
          src="/queue@2x.png"
        />
      </section>
      <Services />
      <section
        className="self-stretch bg-ghostwhite overflow-hidden flex flex-row items-start justify-start pt-[8.78rem] pb-[6.89rem] pr-[5.39rem] pl-[4.17rem] box-border gap-[0.61rem] max-w-full text-left text-[3.06rem] text-black font-h6 mq450:pt-[3.72rem] mq450:pb-[2.94rem] mq450:pr-[2.67rem] mq450:pl-[2.06rem] mq450:box-border mq700:pt-[5.72rem] mq700:pb-[4.5rem] mq700:box-border mq950:pr-[1.11rem] mq950:box-border mq975:flex-wrap"
        data-scroll-to="teams"
      >
        <div className="w-[34.39rem] flex flex-col items-start justify-start pt-[5.06rem] px-[0rem] pb-[0rem] box-border min-w-[34.39rem] max-w-full mq450:pt-[3.28rem] mq450:box-border mq700:min-w-full mq975:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.78rem] max-w-full mq450:gap-[1.39rem]">
            <h1 className="m-0 self-stretch h-[10.5rem] relative text-inherit font-bold font-inherit inline-block shrink-0 mq450:text-[2.44rem] mq950:text-[1.83rem]">
              Experience the Future of Digital Government
            </h1>
            <h2 className="m-0 w-[32.67rem] h-[6.22rem] relative text-[1.39rem] font-light font-inherit inline-block shrink-0 max-w-full mq950:text-[1.11rem]">
              Our user-friendly government Akshya Center management application
              brings convenience, reduces paperwork, and ensures faster
              processing times for all.
            </h2>
            <div className="flex flex-row items-start justify-start gap-[0.56rem]">
              <button
                className="cursor-pointer [border:none] py-[0.83rem] pr-[1.78rem] pl-[2rem] bg-primary-color rounded-18xl overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-steelblue"
                onClick={onButtonbtnprimaryColorbtnRClick}
              >
                <b className="h-[1.22rem] w-[4.94rem] relative text-[0.78rem] tracking-[0.2px] leading-[1.22rem] inline-block font-h6 text-light-text-color text-center">
                  Learn More
                </b>
              </button>
              <button
                className="cursor-pointer py-[0.83rem] pr-[1.72rem] pl-[1.94rem] bg-[transparent] rounded-18xl overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200"
                onClick={onButtonbtnprimaryColorbtnOClick}
              >
                <b className="h-[1.22rem] w-[3.5rem] relative text-[0.78rem] tracking-[0.2px] leading-[1.22rem] inline-block font-h6 text-black text-center">
                  Sign Up
                </b>
              </button>
            </div>
          </div>
        </div>
        <img
          className="h-[41.22rem] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover min-w-[23.06rem] mq450:min-w-full"
          loading="lazy"
          alt=""
          src="/rectangle-7@2x.png"
        />
      </section>
      <Access />
      <AgreeToTermContainer />
      <section className="self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-start max-w-full">
        <ContactDiv />
        <InfoDiv />
        <AppDiv />
      </section>
    </div>
  );
};

export default BeforeLogin;
