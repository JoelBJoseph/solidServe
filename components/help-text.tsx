import type { NextPage } from "next";

type HelpTextType = {
  passwordReset?: string;
  weWillHelpYouRes?: string;

  /** Action props */
  onClose24OutlineClick?: () => void;
};

const HelpText: NextPage<HelpTextType> = ({
  passwordReset,
  weWillHelpYouRes,
  onClose24OutlineClick,
}) => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[0.44rem] max-w-full text-center text-[1.78rem] text-gray-300 font-inter">
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
        <img
          className="h-[2.06rem] w-[2.06rem] relative overflow-hidden shrink-0 cursor-pointer"
          loading="lazy"
          alt=""
          src="/close--24--outline.svg"
          onClick={onClose24OutlineClick}
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] box-border min-w-[15.17rem] max-w-full ml-[-14px] mq450:ml-0">
          <h1 className="m-0 self-stretch h-[2.44rem] relative text-inherit leading-[2.44rem] font-bold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.44rem] mq950:text-[1.44rem] mq950:leading-[1.94rem]">
            {passwordReset}
          </h1>
        </div>
      </div>
      <div className="w-[23.33rem] h-[1.33rem] relative text-[0.89rem] leading-[1.33rem] text-slategray-400 inline-block max-w-full">
        {weWillHelpYouRes}
      </div>
    </div>
  );
};

export default HelpText;
