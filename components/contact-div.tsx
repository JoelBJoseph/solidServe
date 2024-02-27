import type { NextPage } from "next";

const ContactDiv: NextPage = () => {
  return (
    <div className="self-stretch bg-ghostwhite overflow-hidden flex flex-col items-center justify-center max-w-full text-left text-[1.33rem] text-text-color font-h6 mq450:gap-[1.11rem]">
      <div className="w-[60.56rem] overflow-hidden flex flex-col items-start justify-start py-[2.22rem] px-[1.11rem] box-border max-w-full">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-between max-w-full gap-[1.11rem] mq700:flex-wrap">
          <div className="w-[28.28rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[0.56rem] max-w-full">
            <h2 className="m-0 w-[25.22rem] h-[1.78rem] relative text-inherit tracking-[0.1px] leading-[1.78rem] font-bold font-inherit inline-block max-w-full mq950:text-[1.06rem] mq950:leading-[1.44rem]">
              Consulting Agency For Your Business
            </h2>
            <div className="w-[15.17rem] h-[1.11rem] relative text-[0.78rem] tracking-[0.2px] leading-[1.11rem] font-medium text-second-text-color inline-block">
              the quick fox jumps over the lazy dog
            </div>
          </div>
          <div className="w-[13.11rem] overflow-hidden shrink-0 flex flex-col items-center justify-start">
            <button className="cursor-pointer [border:none] py-[0.83rem] pr-[2rem] pl-[2.22rem] bg-primary-color rounded-8xs overflow-hidden flex flex-col items-center justify-start whitespace-nowrap hover:bg-steelblue">
              <b className="w-[4.67rem] h-[1.22rem] relative text-[0.78rem] tracking-[0.2px] leading-[1.22rem] inline-block font-h6 text-light-text-color text-center">
                Contact Us
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDiv;
