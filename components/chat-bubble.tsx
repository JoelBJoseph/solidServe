import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ChatBubbleType = {
  avatar?: string;
  frameY?: string;
  avatar1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const ChatBubble: NextPage<ChatBubbleType> = ({
  avatar,
  frameY,
  avatar1,
  propPadding,
  propWidth,
}) => {
  const textStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-[0.78rem] text-light-text-color font-inter">
      <div className="flex flex-row items-start justify-start gap-[0.89rem] max-w-full mq700:flex-wrap">
        <img
          className="h-[2rem] w-[2rem] relative object-cover z-[1]"
          alt=""
          src={avatar}
        />
        <div className="flex flex-col items-start justify-start gap-[0.44rem] max-w-full">
          <div
            className="rounded bg-mediumslateblue flex flex-row items-center justify-center py-[0.67rem] pr-[0.72rem] pl-[0.67rem] box-border whitespace-nowrap max-w-full z-[1]"
            style={textStyle}
          >
            <div
              className="h-[2.44rem] w-[25.33rem] relative rounded bg-mediumslateblue hidden max-w-full"
              style={rectangleStyle}
            />
            <div className="h-[1.11rem] w-[23.94rem] relative leading-[1.11rem] inline-block z-[2]">
              {frameY}
            </div>
          </div>
          <div className="w-[4.44rem] h-[0.89rem] relative text-[0.67rem] leading-[0.89rem] text-lightsteelblue inline-block whitespace-nowrap z-[1]">
            {avatar1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
