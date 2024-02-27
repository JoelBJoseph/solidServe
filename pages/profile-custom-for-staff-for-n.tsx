import type { NextPage } from "next";
import { useState, useCallback } from "react";
import FrameComponent3 from "../components/frame-component3";
import ButtonRegularMediumWhite from "../components/button-regular-medium-white";
import { useRouter } from "next/router";
import FrameComponent2 from "../components/frame-component2";
import Input01RegularInput02Medi from "../components/input01-regular-input02-medi";
import Dropdown01RegularDropdown from "../components/dropdown01-regular-dropdown";

const ProfileCustomForStaffForN: NextPage = () => {
  const [nameText6Value, setNameText6Value] = useState("");
  const [textValue, setTextValue] = useState("");
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  const [fieldTypeValue, setFieldTypeValue] = useState("");
  const router = useRouter();

  const onButton01RegularButton02MeClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onButton01RegularButton02Me1Click = useCallback(() => {
    router.push("/profile-view");
  }, [router]);

  const onButton01RegularButton02Me12Click = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onButton01RegularButton02Me2Click = useCallback(() => {
    router.push("/profile-view");
  }, [router]);

  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <FrameComponent3
        group="/group.svg"
        general01Icons02Common="/00-general--01-icons--02-common--01-settings@2x.png"
        chat="/chat@2x.png"
        general01Icons02Common1="/00-general--01-icons--02-common--01-settings-1@2x.png"
        avatar="/avatar@2x.png"
        color="/color.svg"
      />
      <main className="w-[78.83rem] flex flex-row items-start justify-start py-[0rem] pr-[1.11rem] pl-[0rem] box-border max-w-full mq700:pl-[1.11rem] mq700:box-border">
        <div className="w-[13.89rem] bg-ghostwhite shadow-[-1px_0px_0px_#d7dbec_inset] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[1.11rem] px-[0.89rem] pb-[30.56rem] box-border gap-[5.67rem] mq450:gap-[2.83rem] mq700:hidden mq950:pb-[12.89rem] mq950:box-border mq975:pb-[19.83rem] mq975:box-border">
          <div className="self-stretch bg-ghostwhite flex flex-row items-center justify-start py-[0.56rem] px-[0.89rem] relative gap-[0.89rem]">
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-ghostwhite" />
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
              alt=""
              src="/icon@2x.png"
            />
            <input
              className="[border:none] [outline:none] font-inter text-[0.78rem] bg-[transparent] h-[1.11rem] w-[2.06rem] relative leading-[1.11rem] text-slategray-400 text-left inline-block shrink-0 z-[1]"
              placeholder="Home"
              type="text"
              value={nameText6Value}
              onChange={(event) => setNameText6Value(event.target.value)}
            />
          </div>
          <ButtonRegularMediumWhite />
        </div>
        <section className="flex-1 flex flex-col items-start justify-start pt-[1.56rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_250px)] text-left text-[1.33rem] text-gray-300 font-inter mq700:max-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[1.56rem] max-w-full">
            <div className="w-[62.83rem] flex flex-row items-center justify-between py-[0rem] pr-[0rem] pl-[1.11rem] box-border gap-[1.11rem] max-w-full mq450:flex-wrap">
              <h2 className="m-0 h-[2rem] w-[5.5rem] relative text-inherit leading-[2rem] font-bold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                Settings
              </h2>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] gap-[0.67rem] text-[0.89rem] text-mediumslateblue">
                <div
                  className="flex flex-row items-center justify-center py-[0.44rem] pr-[1.33rem] pl-[1.39rem] relative cursor-pointer"
                  onClick={onButton01RegularButton02MeClick}
                >
                  <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                    <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
                    <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-light-text-color box-border z-[1] border-[1px] border-solid border-lavender-300" />
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0rem] z-[2]">
                    <div className="h-[1.33rem] w-[2.94rem] relative leading-[1.33rem] inline-block whitespace-nowrap">
                      Cancel
                    </div>
                  </div>
                </div>
                <div
                  className="w-[4.78rem] flex flex-row items-center justify-center p-[0.44rem] box-border relative cursor-pointer"
                  onClick={onButton01RegularButton02Me1Click}
                >
                  <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                    <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
                    <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-mediumslateblue z-[1]" />
                  </div>
                  <input
                    className="[border:none] [outline:none] bg-[transparent] h-[1.33rem] flex-1 flex flex-row items-center justify-start py-[0rem] pr-[0.67rem] pl-[0.44rem] box-border font-inter text-[0.89rem] text-light-text-color min-w-[2.33rem] z-[2]"
                    placeholder="Save"
                    type="text"
                    value={textValue}
                    onChange={(event) => setTextValue(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2.17rem] pl-[0rem] box-border max-w-full text-[0.89rem]">
              <div className="flex-1 rounded-md [background:linear-gradient(#f5f6fa,_#f5f6fa),_#f5f6fa] shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] overflow-hidden flex flex-col items-center justify-start pt-[0.67rem] px-[0.67rem] pb-[2.22rem] box-border gap-[1.33rem] max-w-full mq700:pt-[1.11rem] mq700:pb-[1.44rem] mq700:box-border">
                <FrameComponent2
                  propDisplay="inline-block"
                  propDisplay1="inline-block"
                  propDisplay2="inline-block"
                  propDisplay3="inline-block"
                />
                <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0.89rem] pl-[0.83rem] box-border gap-[1.33rem] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.22rem]">
                    <b className="self-stretch h-[1.33rem] relative leading-[1.33rem] inline-block">
                      Profile Details
                    </b>
                    <div className="self-stretch h-[1.11rem] relative text-[0.78rem] leading-[1.11rem] text-slategray-400 inline-block">
                      Enter your profile information
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.22rem] max-w-full text-[0.78rem] text-slategray-400">
                    <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] inline-block">
                      Profile Image
                    </div>
                    <div className="self-stretch rounded bg-light-text-color box-border flex flex-col items-center justify-start py-[1.56rem] pr-[1.11rem] pl-[1.22rem] gap-[0.67rem] max-w-full text-center border-[1px] border-dashed border-lightsteelblue">
                      <div className="w-[58.56rem] h-[7.11rem] relative rounded bg-light-text-color box-border hidden max-w-full border-[1px] border-dashed border-lightsteelblue" />
                      <button className="cursor-pointer [border:none] p-[0.44rem] bg-[transparent] flex flex-row items-center justify-center relative z-[1]">
                        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                          <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
                          <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-light-text-color box-border z-[1] border-[1px] border-solid border-lavender-300" />
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.89rem] z-[2]">
                          <div className="h-[1.33rem] w-[3.44rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-mediumslateblue text-left inline-block whitespace-nowrap">
                            Add File
                          </div>
                        </div>
                      </button>
                      <div className="w-[8.06rem] h-[1.11rem] relative leading-[1.11rem] inline-block z-[1]">
                        Or drag and drop files
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[28.61rem] h-[2.22rem] relative rounded hidden max-w-full" />
                <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0.89rem] pb-[0.89rem] box-border gap-[1.33rem] max-w-full text-[0.78rem] text-slategray-400">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.33rem] max-w-full">
                    <Input01RegularInput02Medi
                      titlePlaceholder="First Name"
                      inputText="Input "
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[0.22rem] min-w-[18.61rem] max-w-full">
                      <div className="w-[1.61rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border">
                        <div className="h-[1.11rem] w-[3.94rem] relative leading-[1.11rem] inline-block whitespace-nowrap shrink-0">
                          Last Name
                        </div>
                      </div>
                      <input
                        className="[outline:none] bg-light-text-color self-stretch h-[2.22rem] relative rounded box-border min-w-[13.89rem] z-[1] border-[1px] border-solid border-lavender-200"
                        type="text"
                        value={frameInputValue}
                        onChange={(event) =>
                          setFrameInputValue(event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.33rem] max-w-full">
                    <Input01RegularInput02Medi
                      titlePlaceholder="Email Address"
                      inputText=" Email"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[0.22rem] min-w-[18.61rem] max-w-full">
                      <div className="w-[1.61rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border">
                        <div className="h-[1.11rem] w-[5.5rem] relative leading-[1.11rem] inline-block whitespace-nowrap shrink-0">
                          Phone Number
                        </div>
                      </div>
                      <input
                        className="[outline:none] bg-light-text-color self-stretch h-[2.22rem] relative rounded box-border min-w-[13.89rem] z-[1] border-[1px] border-solid border-lavender-200"
                        type="text"
                        value={frameInput1Value}
                        onChange={(event) =>
                          setFrameInput1Value(event.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[28.61rem] h-[2.22rem] relative rounded hidden max-w-full" />
                <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.89rem] box-border gap-[1.44rem] max-w-full">
                  <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.22rem]">
                    <b className="self-stretch h-[1.33rem] relative leading-[1.33rem] inline-block">
                      Regional Settings
                    </b>
                    <div className="self-stretch h-[1.11rem] relative text-[0.78rem] leading-[1.11rem] text-slategray-400 inline-block">
                      Set your language and timezone
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.33rem] max-w-full text-[0.78rem] text-slategray-400">
                    <Dropdown01RegularDropdown
                      titleText="Language"
                      inputText="English"
                      color="/color.svg"
                      propDisplay="inline-block"
                      propWidth="4.06rem"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start relative gap-[0.22rem] min-w-[18.61rem] max-w-full">
                      <div className="w-[1.61rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border">
                        <div className="h-[1.11rem] w-[3.61rem] relative leading-[1.11rem] inline-block whitespace-nowrap shrink-0">
                          Timezone
                        </div>
                      </div>
                      <input
                        className="[outline:none] bg-light-text-color w-full h-[2.22rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded box-border z-[1] border-[1px] border-solid border-lavender-200"
                        type="text"
                        value={fieldTypeValue}
                        onChange={(event) =>
                          setFieldTypeValue(event.target.value)
                        }
                      />
                      <div className="w-[1.33rem] h-[1.33rem] absolute my-0 mx-[!important] right-[0.44rem] bottom-[0.44rem] z-[2]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <img
                          className="absolute h-[29.17%] w-6/12 top-[37.5%] right-[25%] bottom-[33.33%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                          alt=""
                          src="/color.svg"
                        />
                      </div>
                      <div className="w-[25.28rem] h-[1.33rem] relative hidden max-w-full z-[3] text-[0.89rem] text-gray-300">
                        <div className="absolute top-[0rem] left-[0rem] leading-[1.33rem] hidden whitespace-nowrap">
                          GMT +02:00
                        </div>
                      </div>
                      <div className="self-stretch h-[2.22rem] relative rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[62.78rem] h-[0.06rem] relative bg-lavender-300 max-w-full" />
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.06rem] pl-[1.11rem] gap-[0.67rem]">
              <button
                className="cursor-pointer [border:none] py-[0.44rem] pr-[1.33rem] pl-[1.39rem] bg-[transparent] flex flex-row items-center justify-center relative"
                onClick={onButton01RegularButton02Me12Click}
              >
                <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                  <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
                  <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-light-text-color box-border z-[1] border-[1px] border-solid border-lavender-300" />
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] px-[0rem] z-[2]">
                  <div className="h-[1.33rem] w-[2.94rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-mediumslateblue text-left inline-block whitespace-nowrap">
                    Cancel
                  </div>
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] p-[0.44rem] bg-[transparent] flex flex-row items-center justify-center relative"
                onClick={onButton01RegularButton02Me2Click}
              >
                <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                  <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
                  <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-mediumslateblue z-[1]" />
                </div>
                <div className="flex flex-row items-center justify-start py-[0rem] pr-[1.39rem] pl-[0.67rem] z-[2]">
                  <div className="flex flex-col items-start justify-end py-[0rem] px-[0rem]">
                    <div className="w-[2.06rem] h-[1.33rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-light-text-color text-left inline-block whitespace-nowrap">
                      Save
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileCustomForStaffForN;
