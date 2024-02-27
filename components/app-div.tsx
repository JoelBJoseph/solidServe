import type { NextPage } from "next";

const AppDiv: NextPage = () => {
  return (
    <footer className="self-stretch bg-ghostwhite overflow-hidden flex flex-col items-center justify-center max-w-full text-left text-[0.78rem] text-second-text-color font-h6 mq450:gap-[1.11rem]">
      <div className="w-[60.56rem] overflow-hidden flex flex-col items-start justify-start py-[1.39rem] pr-[1.17rem] pl-[1.11rem] box-border max-w-full">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-between max-w-full gap-[1.11rem] mq700:flex-wrap">
          <div className="w-[33.33rem] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-full">
            <div className="w-[20.44rem] h-[1.33rem] relative tracking-[0.2px] leading-[1.33rem] font-semibold inline-block max-w-full">{`Made With Love By Figmaland All Right Reserved `}</div>
          </div>
          <div className="w-[13.11rem] overflow-hidden shrink-0 flex flex-col items-center justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center gap-[1.11rem]">
              <img
                className="h-[1.33rem] w-[1.33rem] relative overflow-hidden shrink-0 min-h-[1.33rem]"
                loading="lazy"
                alt=""
                src="/antdesignfacebookfilled.svg"
              />
              <img
                className="h-[1.33rem] w-[1.33rem] relative overflow-hidden shrink-0 min-h-[1.33rem]"
                loading="lazy"
                alt=""
                src="/antdesigninstagramoutlined.svg"
              />
              <img
                className="h-[1.1rem] w-[1.33rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/antdesigntwitteroutlined.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppDiv;
