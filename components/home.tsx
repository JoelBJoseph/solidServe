import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const onStaffLoginBtnClick = useCallback(() => {
    router.push("/enterpreneur-login");
  }, [router]);

  const onSiteNameContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='backgroundImageContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLearnMoreBtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='services']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSignupBtnClick = useCallback(() => {
    router.push("/staff-create-account");
  }, [router]);

  const onHomeNavBtnContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='familyPhotoImage']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutNavBtnContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='about']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesNavBtnContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='services']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTeamNavBtnContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='teams']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactNavBtnContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='agreeToTermContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onStaffLoginBtn1Click = useCallback(() => {
    router.push("/staff-login");
  }, [router]);

  return (
    <section className="self-stretch h-[45.5rem] bg-gray-100 overflow-hidden shrink-0 flex flex-row items-center justify-center max-w-full text-left text-[1.78rem] text-light-text-color font-h6 mq450:gap-[1.11rem]">
      <div
        className="self-stretch flex-1 bg-gray-400 flex flex-row items-center justify-center relative max-w-full"
        data-scroll-to="backgroundImageContainer"
      >
        <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-[2.78rem] px-[10.06rem] box-border relative max-w-full mq450:pl-[2.5rem] mq450:pr-[2.5rem] mq450:box-border mq950:pl-[1.11rem] mq950:pr-[1.11rem] mq950:box-border mq975:pl-[5rem] mq975:pr-[5rem] mq975:box-border">
          <div className="w-full my-0 mx-[!important] absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start max-w-full h-full">
            <img
              className="h-[45.28rem] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/familyphoto@2x.png"
              data-scroll-to="familyPhotoImage"
            />
            <button
              className="cursor-pointer [border:none] py-[1.11rem] pr-[1.33rem] pl-[1.61rem] bg-primary-color my-0 mx-[!important] absolute top-[2.94rem] right-[7.17rem] rounded-md overflow-hidden flex flex-row items-center justify-center whitespace-nowrap z-[2] hover:bg-steelblue"
              onClick={onStaffLoginBtnClick}
            >
              <b className="h-[0.83rem] w-[3.72rem] relative text-[0.89rem] leading-[0.83rem] inline-block font-h6 text-light-text-color text-center">
                E Login
              </b>
            </button>
            <div
              className="my-0 mx-[!important] absolute top-[2.83rem] left-[8.83rem] overflow-hidden flex flex-row items-center justify-center py-[0.72rem] px-[0rem] cursor-pointer z-[1]"
              onClick={onSiteNameContainerClick}
            >
              <div className="w-[11.06rem] flex flex-col items-start justify-start py-[0rem] px-[0rem] box-border">
                <h1 className="m-0 w-[11.61rem] h-[1.78rem] relative text-inherit tracking-[0.1px] leading-[1.78rem] font-bold font-inherit inline-block mq450:text-[1.44rem] mq450:leading-[1.44rem] mq950:text-[1.06rem] mq950:leading-[1.06rem]">
                  solidServe
                </h1>
              </div>
            </div>
            <div className="w-[58.11rem] my-0 mx-[!important] absolute top-[5.78rem] left-[calc(50%_-_523px)] flex flex-col items-center justify-start py-[4.44rem] px-[0rem] box-border max-w-full z-[3] text-center text-[3.22rem]">
              <div className="w-[38.94rem] overflow-hidden flex flex-col items-center justify-start max-w-full">
                <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[2.22rem] px-[0.06rem] gap-[2.22rem]">
                  <h1 className="m-0 self-stretch h-[8.89rem] relative text-inherit tracking-[0.2px] leading-[4.44rem] font-extrabold font-inherit inline-block mq450:text-[2.56rem] mq450:leading-[3.56rem] mq950:text-[1.94rem] mq950:leading-[2.67rem]">
                    Connect. Serve. Innovate.
                  </h1>
                  <h3 className="m-0 self-stretch h-[4.94rem] relative text-[1.11rem] tracking-[0.2px] leading-[1.67rem] font-medium font-inherit inline-block mq950:text-[0.89rem] mq950:leading-[1.33rem]">
                    Empower your community with our user-friendly government
                    Akshya Center management application. Streamline processes,
                    enhance citizen engagement, and deliver efficient services.
                  </h3>
                  <div className="flex flex-row items-start justify-start gap-[0.56rem]">
                    <button
                      className="cursor-pointer [border:none] py-[0.83rem] pr-[1.78rem] pl-[2rem] bg-primary-color rounded-18xl overflow-hidden flex flex-col items-center justify-start whitespace-nowrap hover:bg-steelblue"
                      onClick={onLearnMoreBtnClick}
                    >
                      <b className="w-[4.94rem] h-[1.22rem] relative text-[0.78rem] tracking-[0.2px] leading-[1.22rem] inline-block font-h6 text-light-text-color text-center">
                        Learn More
                      </b>
                    </button>
                    <button
                      className="cursor-pointer py-[0.83rem] pr-[1.67rem] pl-[2rem] bg-[transparent] rounded-18xl overflow-hidden flex flex-col items-center justify-start whitespace-nowrap border-[1px] border-solid border-light-text-color hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100"
                      onClick={onSignupBtnClick}
                    >
                      <b className="w-[3.5rem] h-[1.22rem] relative text-[0.78rem] tracking-[0.2px] leading-[1.22rem] inline-block font-h6 text-light-text-color text-center">
                        Sign Up
                      </b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[3.22rem] w-[49.5rem] overflow-hidden shrink-0 flex flex-row items-center justify-end py-[0.17rem] px-[0rem] box-border max-w-full z-[1] text-center text-[0.89rem] mq450:w-[5.39rem] mq450:gap-[4.89rem] mq950:gap-[2.44rem]">
            <div className="h-[3rem] w-[44.11rem] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[1.17rem] max-w-full mq450:hidden">
              <div
                className="h-[2.56rem] w-[5rem] flex flex-col items-center justify-center cursor-pointer"
                onClick={onHomeNavBtnContainerClick}
              >
                <div className="self-stretch h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                  Home
                </div>
              </div>
              <div
                className="h-[2.61rem] w-[5.11rem] flex flex-col items-center justify-center cursor-pointer"
                onClick={onAboutNavBtnContainerClick}
              >
                <div className="self-stretch h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                  About
                </div>
              </div>
              <div
                className="h-[2.61rem] flex flex-col items-center justify-center cursor-pointer"
                onClick={onServicesNavBtnContainerClick}
              >
                <div className="w-[4.44rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                  Services
                </div>
              </div>
              <div
                className="h-[3.11rem] w-[4.56rem] flex flex-col items-center justify-center cursor-pointer"
                onClick={onTeamNavBtnContainerClick}
              >
                <div className="self-stretch h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                  Team
                </div>
              </div>
              <div
                className="h-[2.83rem] w-[5.11rem] flex flex-col items-center justify-center cursor-pointer"
                onClick={onContactNavBtnContainerClick}
              >
                <div className="self-stretch h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                  Contact
                </div>
              </div>
              <div className="h-[2.89rem] w-[15.17rem]" />
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] py-[1.11rem] pr-[0.44rem] pl-[0.78rem] bg-primary-color my-0 mx-[!important] absolute top-[3rem] right-[14.56rem] rounded-md overflow-hidden flex flex-row items-center justify-end whitespace-nowrap z-[2] hover:bg-steelblue"
          onClick={onStaffLoginBtn1Click}
        >
          <b className="h-[0.83rem] w-[5.44rem] relative text-[0.89rem] leading-[0.83rem] inline-block font-h6 text-light-text-color text-center">
            Staff Login
          </b>
        </button>
      </div>
    </section>
  );
};

export default Home;
