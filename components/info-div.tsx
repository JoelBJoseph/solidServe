import type { NextPage } from "next";

const InfoDiv: NextPage = () => {
  return (
    <div className="self-stretch bg-ghostwhite overflow-hidden flex flex-col items-center justify-start max-w-full text-left text-[0.89rem] text-text-color font-h6 mq450:gap-[1.11rem]">
      <div className="overflow-hidden flex flex-col items-start justify-start py-[2.78rem] pr-[1.61rem] pl-[1.11rem] box-border max-w-full">
        <div className="w-[57.83rem] overflow-x-auto flex flex-row items-start justify-start gap-[1.67rem] max-w-full">
          <div className="w-[8.22rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[1.11rem]">
            <b className="w-[6.89rem] h-[1.33rem] relative tracking-[0.1px] leading-[1.33rem] inline-block">
              Company Info
            </b>
            <div className="flex flex-col items-start justify-start gap-[0.56rem] text-[0.78rem] text-second-text-color">
              <div className="w-[4rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                About Us
              </div>
              <div className="w-[2.83rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                Carrier
              </div>
              <div className="w-[5.72rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                We are hiring
              </div>
              <div className="w-[1.94rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                Blog
              </div>
            </div>
          </div>
          <div className="w-[8.44rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[1.11rem]">
            <b className="w-[2.61rem] h-[1.33rem] relative tracking-[0.1px] leading-[1.33rem] inline-block">
              Legal
            </b>
            <div className="flex flex-col items-start justify-start gap-[0.56rem] text-[0.78rem] text-second-text-color">
              <div className="w-[4rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                About Us
              </div>
              <div className="w-[2.83rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                Carrier
              </div>
              <div className="w-[5.72rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                We are hiring
              </div>
              <div className="w-[1.94rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                Blog
              </div>
            </div>
          </div>
          <div className="overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[1.11rem]">
            <b className="w-[4.11rem] h-[1.33rem] relative tracking-[0.1px] leading-[1.33rem] inline-block">
              Features
            </b>
            <div className="flex flex-col items-start justify-start gap-[0.56rem] text-[0.78rem] text-second-text-color">
              <div className="w-[8.28rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                Business Marketing
              </div>
              <div className="w-[5.67rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                User Analytic
              </div>
              <div className="w-[4rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                Live Chat
              </div>
              <div className="w-[7.83rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                Unlimited Support
              </div>
            </div>
          </div>
          <div className="overflow-hidden shrink-0 flex flex-col items-start justify-start py-[0rem] pr-[2.17rem] pl-[0rem] gap-[1.11rem]">
            <b className="w-[4.89rem] h-[1.33rem] relative tracking-[0.1px] leading-[1.33rem] inline-block">
              Resources
            </b>
            <div className="flex flex-col items-start justify-start gap-[0.56rem] text-[0.78rem] text-second-text-color">
              <div className="w-[5.94rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">{`IOS & Android`}</div>
              <div className="w-[6.28rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                Watch a Demo
              </div>
              <div className="w-[4.44rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                Customers
              </div>
              <div className="w-[1.44rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                API
              </div>
            </div>
          </div>
          <div className="w-[17.83rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[1.11rem]">
            <b className="w-[5.94rem] h-[1.33rem] relative tracking-[0.1px] leading-[1.33rem] inline-block">
              Get In Touch
            </b>
            <div className="w-[13.28rem] flex flex-col items-center justify-start gap-[0.56rem] text-[0.78rem] text-second-text-color">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[0.56rem]">
                <img
                  className="h-[1.33rem] w-[1.33rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/bxbxphone.svg"
                />
                <div className="h-[1.63rem] flex-1 relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                  (480) 555-0103
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[0.56rem]">
                <img
                  className="h-[1.67rem] w-[1.33rem] relative overflow-hidden shrink-0 min-h-[1.67rem]"
                  loading="lazy"
                  alt=""
                  src="/bxbxmap.svg"
                />
                <div className="h-[1.63rem] flex-1 relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[0.56rem]">
                <img
                  className="h-[1.44rem] w-[1.33rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/carbonsendalt.svg"
                />
                <div className="h-[1.63rem] flex-1 relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block whitespace-nowrap">
                  debra.holt@example.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDiv;
