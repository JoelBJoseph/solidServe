import type { NextPage } from "next";
import { useCallback } from "react";
import PeopleIconContainer from "./people-icon-container";
import { useRouter } from "next/router";

const Services: NextPage = () => {
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

  return (
    <section
      className="self-stretch bg-ghostwhite overflow-hidden flex flex-col items-center justify-start pt-[11.22rem] pb-[7.61rem] pr-[4.72rem] pl-[4.17rem] box-border gap-[5.39rem] max-w-full text-left text-[3.06rem] text-black font-h6 mq450:gap-[2.67rem] mq450:pt-[4.72rem] mq450:pb-[3.22rem] mq450:pr-[2.33rem] mq450:pl-[2.06rem] mq450:box-border mq700:pt-[7.28rem] mq700:pb-[4.94rem] mq700:box-border mq950:gap-[1.33rem] mq950:pr-[1.11rem] mq950:box-border"
      data-scroll-to="services"
    >
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.67rem] pl-[0rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[3.39rem] max-w-full mq450:gap-[1.67rem] mq950:gap-[0.83rem] mq975:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.78rem] px-[0rem] pb-[0rem] box-border min-w-[22.33rem] max-w-full mq450:min-w-full">
            <h1 className="m-0 self-stretch h-[14.89rem] relative text-inherit font-bold font-inherit inline-block mq450:text-[2.44rem] mq950:text-[1.83rem]">
              Enhance Your Government Experience with Our Platform
            </h1>
          </div>
          <h3 className="m-0 h-[7.94rem] w-[32.67rem] relative text-[1.11rem] font-light font-inherit inline-block shrink-0 min-w-[32.67rem] max-w-full mq700:min-w-full mq950:text-[0.89rem] mq975:flex-1">
            Our user interface government akshya center management application
            provides a range of additional features to improve your digital
            government experience. From robust security measures to multilingual
            support, and 24/7 access to government services, our platform is
            designed to meet your needs.
          </h3>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[3.56rem] max-w-full text-center text-[1.44rem] mq450:gap-[1.78rem] mq950:gap-[0.89rem]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.11rem] mq975:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[5.22rem] px-[0rem] pb-[0rem] box-border relative gap-[1.67rem] min-w-[19.89rem] max-w-full mq450:min-w-full mq975:flex-1">
            <h2 className="m-0 w-[19.89rem] h-[1.22rem] relative text-inherit tracking-[0.2px] leading-[1.22rem] font-bold font-inherit inline-block mq950:text-[1.17rem] mq950:leading-[1rem]">
              Robust Security Measures
            </h2>
            <div className="w-[19.39rem] h-[1.22rem] relative text-[0.89rem] tracking-[0.2px] leading-[1.22rem] inline-block max-w-full">
              Protecting your data and ensuring privacy.
            </div>
            <img
              className="w-[3.33rem] h-[3.33rem] absolute my-0 mx-[!important] top-[0rem] left-[7.56rem] object-contain"
              loading="lazy"
              alt=""
              src="/security-icon@2x.png"
            />
          </div>
          <div className="w-[43.56rem] flex flex-row items-end justify-start gap-[3.61rem] min-w-[43.56rem] max-w-full mq450:flex-wrap mq450:gap-[1.78rem] mq700:min-w-full mq950:gap-[0.89rem] mq975:flex-1">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.78rem] min-w-[13.67rem] max-w-full mq950:gap-[0.89rem]">
              <div className="w-[16rem] flex flex-row items-start justify-center py-[0rem] px-[1.11rem] box-border">
                <PeopleIconContainer />
              </div>
              <h2 className="m-0 w-[15.89rem] h-[1.22rem] relative text-inherit tracking-[0.2px] leading-[1.22rem] font-bold font-inherit inline-block mq950:text-[1.17rem] mq950:leading-[1rem]">
                Multilingual Support
              </h2>
              <div className="w-[21rem] h-[2.44rem] relative text-[0.89rem] tracking-[0.2px] leading-[1.22rem] text-left inline-block">
                <p className="m-0">{`Access government services in your preferred `}</p>
                <p className="m-0">language.</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1.33rem] min-w-[18.94rem] max-w-full text-left mq450:flex-1 mq450:min-w-full">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[4.17rem]">
                <img
                  className="h-[3.28rem] w-[3.28rem] relative overflow-hidden shrink-0 object-contain"
                  loading="lazy"
                  alt=""
                  src="/clockcontainer@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[1.06rem]">
                <h2 className="m-0 w-[17.22rem] h-[2.44rem] relative text-inherit tracking-[0.2px] leading-[1.22rem] font-bold font-inherit inline-block mq950:text-[1.17rem] mq950:leading-[1rem]">
                  <p className="m-0">{`24/7 Access to `}</p>
                  <p className="m-0">Government Services</p>
                </h2>
                <div className="w-[18.94rem] h-[2.44rem] relative text-[0.89rem] tracking-[0.2px] leading-[1.22rem] inline-block">
                  <p className="m-0">Conveniently access government services</p>
                  <p className="m-0">anytime, anywhere.</p>
                </div>
              </div>
            </div>
          </div>
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
    </section>
  );
};

export default Services;
