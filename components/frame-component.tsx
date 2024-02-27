import type { NextPage } from "next";

type FrameComponentType = {
  avatar?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ avatar }) => {
  return (
    <div className="w-[30.67rem] flex flex-col items-end justify-start gap-[0.44rem] max-w-full text-left text-[0.78rem] text-gray-300 font-inter">
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.89rem] max-w-full mq700:flex-wrap">
        <div className="flex-1 rounded bg-lavender-100 flex flex-row items-center justify-center p-[0.67rem] box-border max-w-full z-[1]">
          <div className="h-[3.56rem] w-[27.78rem] relative rounded bg-lavender-100 hidden max-w-full" />
          <div className="h-[2.22rem] flex-1 relative leading-[1.11rem] inline-block max-w-full z-[2]">
            Thank you for taking interest in our upcoming products. You can have
            a look at the upcoming colection in our blog post.
          </div>
        </div>
        <img
          className="h-[2rem] w-[2rem] relative object-cover z-[1]"
          alt=""
          src={avatar}
        />
      </div>
      <div className="w-[10.22rem] flex flex-row items-start justify-start py-[0rem] px-[2.89rem] box-border text-right text-[0.67rem] text-lightsteelblue">
        <div className="h-[0.89rem] flex-1 relative leading-[0.89rem] inline-block whitespace-nowrap z-[1]">
          12:45 AM
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
