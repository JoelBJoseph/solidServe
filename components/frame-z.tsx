import type { NextPage } from "next";
import { useState } from "react";

type FrameZType = {
  avatar?: string;
};

const FrameZ: NextPage<FrameZType> = ({ avatar }) => {
  const [avatarValue, setAvatarValue] = useState("");
  return (
    <div className="w-[19.39rem] flex flex-col items-end justify-start gap-[0.44rem] max-w-full text-right text-[0.67rem] text-lightsteelblue font-inter">
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.89rem] mq450:flex-wrap">
        <input
          className="[border:none] [outline:none] bg-lavender-100 h-[2.44rem] flex-1 rounded flex flex-row items-center justify-center py-[0.67rem] pr-[0.67rem] pl-[0.61rem] box-border font-inter text-[0.78rem] text-gray-300 min-w-[10.72rem] z-[1]"
          placeholder="Hi Luis, can you please be more specific?"
          type="text"
          value={avatarValue}
          onChange={(event) => setAvatarValue(event.target.value)}
        />
        <img
          className="h-[2rem] w-[2rem] relative object-cover z-[1]"
          alt=""
          src={avatar}
        />
      </div>
      <div className="w-[10.22rem] flex flex-row items-start justify-start py-[0rem] px-[2.89rem] box-border">
        <div className="h-[0.89rem] flex-1 relative leading-[0.89rem] inline-block whitespace-nowrap z-[1]">
          12:31 AM
        </div>
      </div>
    </div>
  );
};

export default FrameZ;
