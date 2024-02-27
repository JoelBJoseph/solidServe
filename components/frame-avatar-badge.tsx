import type { NextPage } from "next";

type FrameAvatarBadgeType = {
  avatar?: string;
  avatar1?: string;
  avatar2?: string;
};

const FrameAvatarBadge: NextPage<FrameAvatarBadgeType> = ({
  avatar,
  avatar1,
  avatar2,
}) => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[1.33rem] max-w-full text-left text-[0.78rem] text-gray-300 font-inter">
      <div className="w-[18.5rem] flex flex-row items-center justify-start py-[0rem] px-[1.11rem] box-border gap-[0.89rem] max-w-full">
        <img
          className="h-[2.67rem] w-[2.67rem] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={avatar}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.22rem]">
          <div className="flex flex-row items-center justify-start gap-[0.5rem]">
            <b className="h-[1.11rem] w-[5.61rem] relative leading-[1.11rem] inline-block z-[1]">
              Tom Anderson
            </b>
            <div className="w-[1.67rem] flex flex-col items-start justify-start py-[0rem] pr-[0.78rem] pl-[0rem] box-border text-center text-[0.67rem] text-light-text-color">
              <div className="self-stretch flex flex-row items-center justify-center relative z-[1]">
                <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-mediumslateblue" />
                <b className="h-[0.89rem] w-[0.44rem] relative leading-[0.89rem] inline-block z-[1]">
                  8
                </b>
              </div>
            </div>
            <div className="h-[1.11rem] w-[4.44rem] relative leading-[1.11rem] text-lightsteelblue text-right inline-block shrink-0 whitespace-nowrap z-[1]">
              12:24 AM
            </div>
          </div>
          <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] text-slategray-400 inline-block z-[1]">
            Hello, I’m interested in this item...
          </div>
        </div>
      </div>
      <div className="self-stretch bg-aliceblue-100 flex flex-row items-center justify-start py-[1.33rem] pr-[1.61rem] pl-[1.56rem] box-border gap-[0.89rem] max-w-full z-[1]">
        <div className="h-[5.33rem] w-[19.44rem] relative bg-aliceblue-100 hidden max-w-full" />
        <img
          className="h-[2.67rem] w-[2.67rem] relative object-cover z-[2]"
          loading="lazy"
          alt=""
          src={avatar1}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.22rem]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.11rem]">
            <div className="flex flex-row items-center justify-start gap-[0.44rem]">
              <b className="h-[1.11rem] w-[4.72rem] relative leading-[1.11rem] inline-block z-[2]">
                Luis Pittman
              </b>
              <div className="w-[0.89rem] flex flex-row items-center justify-center relative z-[2] text-center text-[0.67rem] text-light-text-color">
                <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-mediumslateblue" />
                <b className="h-[0.89rem] w-[0.44rem] relative leading-[0.89rem] inline-block z-[1]">
                  5
                </b>
              </div>
            </div>
            <div className="h-[1.11rem] w-[4.44rem] relative leading-[1.11rem] text-lightsteelblue text-right inline-block shrink-0 whitespace-nowrap z-[2]">
              10:50 AM
            </div>
          </div>
          <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] text-slategray-400 inline-block z-[2]">
            Hi, can I ask if there is anything...
          </div>
        </div>
      </div>
      <div className="w-[18.5rem] flex flex-row items-center justify-start py-[0rem] px-[1.11rem] box-border gap-[0.89rem] max-w-full">
        <img
          className="h-[2.67rem] w-[2.67rem] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={avatar2}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.22rem]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.11rem]">
            <div className="h-[1.11rem] w-[4.89rem] relative leading-[1.11rem] inline-block z-[1]">
              Barry George
            </div>
            <div className="h-[1.11rem] w-[4.44rem] relative leading-[1.11rem] text-lightsteelblue text-right inline-block shrink-0 whitespace-nowrap z-[1]">
              09:54 AM
            </div>
          </div>
          <div className="w-[12.72rem] h-[1.11rem] relative leading-[1.11rem] text-slategray-400 inline-block z-[1]">
            Is there any chance to get a refu...
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameAvatarBadge;
