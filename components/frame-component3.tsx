import type { NextPage } from "next";

type FrameComponent3Type = {
  group?: string;
  general01Icons02Common?: string;
  chat?: string;
  general01Icons02Common1?: string;
  avatar?: string;
  color?: string;

  /** Action props */
  onSolidServeTextClick?: () => void;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  group,
  general01Icons02Common,
  chat,
  general01Icons02Common1,
  avatar,
  color,
  onSolidServeTextClick,
}) => {
  return (
    <header className="self-stretch flex flex-row items-center justify-center relative max-w-full text-left text-[1.21rem] text-black font-inter">
      <div className="flex-1 flex flex-row items-center justify-between py-[0.89rem] pr-[1.56rem] pl-[16.22rem] box-border relative max-w-full gap-[1.11rem] mq450:pl-[1.11rem] mq450:box-border mq700:pl-[8.11rem] mq700:box-border">
        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)]" />
        <div className="h-[0rem] w-[0rem] relative hidden z-[1] font-gilroy">
          <img
            className="absolute w-[2.29rem] h-[2.11rem] hidden"
            alt=""
            src={group}
          />
          <div className="absolute top-[0.22rem] left-[2.94rem] leading-[1.72rem] font-extrabold hidden whitespace-nowrap">
            Modernize
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[0.44rem] z-[1] text-[0.78rem] text-slategray-400">
          <img
            className="h-[1.33rem] w-[1.33rem] relative object-cover"
            loading="lazy"
            alt=""
            src={general01Icons02Common}
          />
          <div className="h-[1.11rem] w-[3.22rem] relative leading-[1.11rem] inline-block">
            Search...
          </div>
        </div>
        <div className="w-[16.28rem] flex flex-row items-start justify-start gap-[2rem] text-center text-[0.67rem] text-light-text-color mq450:gap-[1rem]">
          <div className="w-[4rem] flex flex-col items-start justify-start pt-[0.11rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch flex flex-row items-end justify-start gap-[1.11rem]">
              <img
                className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src={chat}
              />
              <div className="flex-1 flex flex-col items-end justify-start pt-[0rem] pb-[0.67rem] pr-[0rem] pl-[0.67rem] relative z-[1]">
                <img
                  className="w-[1.33rem] h-[1.33rem] absolute my-0 mx-[!important] bottom-[0rem] left-[0rem] object-cover"
                  alt=""
                  src={general01Icons02Common1}
                />
                <div className="self-stretch flex flex-row items-center justify-center relative z-[1]">
                  <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-mediumslateblue" />
                  <b className="h-[0.89rem] w-[0.44rem] relative leading-[0.89rem] inline-block z-[1]">
                    5
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between gap-[1.11rem] z-[1] text-left text-[0.78rem] text-slategray-400">
            <div className="flex flex-row items-center justify-start gap-[0.67rem]">
              <img
                className="h-[2rem] w-[2rem] relative object-cover"
                alt=""
                src={avatar}
              />
              <div className="h-[1.11rem] w-[2.17rem] relative leading-[1.11rem] inline-block">
                Name
              </div>
            </div>
            <div className="h-[1.33rem] w-[1.33rem] relative">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <img
                className="absolute h-[29.17%] w-6/12 top-[37.5%] right-[25%] bottom-[33.33%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src={color}
              />
            </div>
          </div>
        </div>
      </div>
      <h1
        className="my-0 mx-[!important] h-[1.78rem] w-[9.11rem] absolute bottom-[0.94rem] left-[1.86rem] text-[1.67rem] tracking-[0.1px] leading-[1.78rem] font-bold font-h6 inline-block whitespace-nowrap cursor-pointer z-[2]"
        onClick={onSolidServeTextClick}
      >
        solidServe
      </h1>
    </header>
  );
};

export default FrameComponent3;
