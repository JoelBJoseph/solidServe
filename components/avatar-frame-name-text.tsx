import type { NextPage } from "next";

const AvatarFrameNameText: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.67rem] box-border max-w-full gap-[1.11rem] text-center text-[1.78rem] text-light-text-color font-inter mq700:flex-wrap">
      <div className="w-[18.33rem] flex flex-row items-start justify-start gap-[1rem] max-w-full mq450:flex-wrap">
        <div className="h-[4rem] w-[4rem] flex flex-row items-center justify-start py-[0rem] pr-[0.67rem] pl-[0rem] box-border">
          <div className="self-stretch flex-1 relative rounded-[50%] bg-lightsteelblue" />
          <h1 className="m-0 h-[2.44rem] w-[2.67rem] relative text-inherit leading-[2.44rem] font-bold font-inherit inline-block shrink-0 z-[1] ml-[-60px] mq450:text-[1.06rem] mq450:leading-[1.44rem] mq950:text-[1.44rem] mq950:leading-[1.94rem]">
            L
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.44rem] min-w-[8.67rem] text-left text-[0.89rem] text-gray-300">
          <b className="self-stretch h-[1.33rem] relative leading-[1.33rem] inline-block">
            Joel B Joseph
          </b>
          <div className="self-stretch h-[3.33rem] relative text-[0.78rem] leading-[1.11rem] text-slategray-400 inline-block">
            <p className="m-0">Ireland</p>
            <p className="m-0">5 Orders</p>
            <p className="m-0">Customer for 2 years</p>
          </div>
        </div>
      </div>
      <div className="w-[6.67rem] flex flex-col items-start justify-start pt-[0.67rem] px-[0rem] pb-[0rem] box-border">
        <img
          className="self-stretch h-[1.33rem] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/10-other04-star-rating02-four-and-half@2x.png"
        />
      </div>
    </div>
  );
};

export default AvatarFrameNameText;
