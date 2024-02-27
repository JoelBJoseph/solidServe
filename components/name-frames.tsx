import type { NextPage } from "next";

const NameFrames: NextPage = () => {
  return (
    <div className="self-stretch rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] overflow-hidden flex flex-col items-center justify-start pt-[1.56rem] px-[1.11rem] pb-[1.11rem] gap-[1.11rem] text-left text-[0.78rem] text-lightsteelblue font-inter mq450:pt-[1.11rem] mq450:box-border">
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0.44rem] pb-[0.22rem] gap-[1.33rem] text-[0.89rem] text-gray-300">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.33rem]">
          <b className="w-[4.17rem] h-[1.33rem] relative leading-[1.33rem] inline-block">
            Overview
          </b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.39rem] text-[0.78rem] text-lightsteelblue">
            <div className="w-[3.06rem] h-[1.11rem] relative leading-[1.11rem] inline-block">
              Address
            </div>
            <div className="self-stretch h-[4.44rem] relative leading-[1.11rem] text-slategray-400 inline-block">
              <p className="m-0">831 Wilhelmine Glen</p>
              <p className="m-0">40583-2293</p>
              <p className="m-0">{`South Lelastad `}</p>
              <p className="m-0">Ireland</p>
            </div>
          </div>
        </div>
        <div className="h-[1.33rem] w-[1.67rem] relative leading-[1.33rem] text-mediumslateblue text-right inline-block">
          Edit
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0.44rem] pb-[0.22rem]">
        <div className="w-[13.33rem] flex flex-col items-start justify-start gap-[0.22rem]">
          <div className="w-[5.22rem] h-[1.11rem] relative leading-[1.11rem] inline-block">
            Email Address
          </div>
          <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] text-slategray-400 inline-block whitespace-nowrap">
            lenora_rob@yahoo.com
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0.44rem] pb-[0.44rem]">
        <div className="w-[13.33rem] flex flex-col items-start justify-start gap-[0.22rem]">
          <div className="w-[2.33rem] h-[1.11rem] relative leading-[1.11rem] inline-block">
            Phone
          </div>
          <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] text-slategray-400 inline-block">
            636-458-4820
          </div>
        </div>
      </div>
      <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.44rem] text-crimson">
        <div className="h-[1.11rem] w-[6.22rem] relative leading-[1.11rem] inline-block">
          Delete Customer
        </div>
      </div>
    </div>
  );
};

export default NameFrames;
