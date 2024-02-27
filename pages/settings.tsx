import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent3 from "../components/frame-component3";
import FrameDropdown from "../components/frame-dropdown";
import FrameComponent2 from "../components/frame-component2";
import InputRegularInputMediumFoc from "../components/input-regular-input-medium-foc";
import FrameComponent1 from "../components/frame-component1";
import Input01RegularInput02Medi1 from "../components/input01-regular-input02-medi1";
import Dropdown01RegularDropdown from "../components/dropdown01-regular-dropdown";

const Settings: NextPage = () => {
  const [textValue, setTextValue] = useState("");
  const [fieldTypeValue, setFieldTypeValue] = useState("");
  const [fieldType1Value, setFieldType1Value] = useState("");
  const router = useRouter();

  const onSolidServeTextClick = useCallback(() => {
    router.push("/c-staff");
  }, [router]);

  const onFrameClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onArrowFocusContainerClick = useCallback(() => {
    router.push("/c-staff");
  }, [router]);

  const onNameFieldContainer1Click = useCallback(() => {
    router.push("/inbox");
  }, [router]);

  const onArrowFocusContainer2Click = useCallback(() => {
    router.push("/all-customers");
  }, [router]);

  const onDropdownArrowColorClick = useCallback(() => {
    router.push("/settings");
  }, [router]);

  const onIconAlternateSignOutClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onTypeContainer1Click = useCallback(() => {
    // Please sync "settings notifications" to the project
  }, []);

  const onTypeContainer2Click = useCallback(() => {
    router.push("/profile-view");
  }, [router]);

  const onTypeClick = useCallback(() => {
    router.push("/profile-view");
  }, [router]);

  const onButton01RegularButton02Me1Click = useCallback(() => {
    router.push("/profile-view");
  }, [router]);

  const onButton01RegularButton02MeClick = useCallback(() => {
    router.push("/profile-view");
  }, [router]);

  const onButton01RegularButton02Me12Click = useCallback(() => {
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
        onSolidServeTextClick={onSolidServeTextClick}
      />
      <main className="w-[78.89rem] flex flex-row items-start justify-start py-[0rem] pr-[1.11rem] pl-[0rem] box-border gap-[2.22rem] max-w-full mq700:gap-[1.11rem] mq700:pl-[1.11rem] mq700:box-border">
        <FrameDropdown
          iconTokens="/-icon-tokens1.svg"
          general01Icons02Common="/00-general--01-icons--02-common--32-list@2x.png"
          iconToolBox="/-icon-tool-box.svg"
          iconPlus="/-icon-plus.svg"
          icon="/icon@2x.png"
          general01Icons02Common1="/00-general--01-icons--02-common--01-settings-3@2x.png"
          general01Icons04Communic="/chat@2x.png"
          general01Icons04Communic1="/chat@2x.png"
          general01Icons02Common2="/00-general--01-icons--02-common--03-users@2x.png"
          general01Icons02Common3="/00-general--01-icons--02-common--02-user@2x.png"
          general01Icons02Common4="/00-general--01-icons--02-common--01-settings-2@2x.png"
          general01Icons02Common5="/00-general--01-icons--02-common--01-settings-3@2x.png"
          iconAlternateSignOut="/-icon-alternate-sign-out.svg"
          sun24Outline="/sun--24--outline.svg"
          onFrameClick={onFrameClick}
          onArrowFocusContainerClick={onArrowFocusContainerClick}
          onNameFieldContainer1Click={onNameFieldContainer1Click}
          onArrowFocusContainer2Click={onArrowFocusContainer2Click}
          onDropdownArrowColorClick={onDropdownArrowColorClick}
          onIconAlternateSignOutClick={onIconAlternateSignOutClick}
        />
        <section className="flex-1 flex flex-col items-start justify-start pt-[1.44rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_290px)] mq700:max-w-full">
          <form className="m-0 self-stretch flex flex-col items-end justify-start gap-[1.61rem] max-w-full">
            <div className="self-stretch flex flex-row items-end justify-between gap-[1.11rem] mq450:flex-wrap">
              <h2 className="m-0 h-[2rem] w-[5.5rem] relative text-[1.33rem] leading-[2rem] font-bold font-inter text-gray-300 text-left inline-block mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                Settings
              </h2>
              <div className="w-[11.06rem] flex flex-row items-start justify-start gap-[0.67rem]">
                <div className="flex-1 flex flex-row items-center justify-start py-[0rem] pr-[1.33rem] pl-[0rem] relative">
                  <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
                  <div
                    className="h-[2.22rem] w-[5.61rem] relative rounded bg-light-text-color box-border cursor-pointer z-[1] border-[1px] border-solid border-lavender-300"
                    onClick={onTypeClick}
                  />
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0rem] z-[2] ml-[-76px]">
                    <div className="h-[1.33rem] w-[2.94rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-mediumslateblue text-left inline-block whitespace-nowrap">
                      Cancel
                    </div>
                  </div>
                </div>
                <div
                  className="h-[2.22rem] w-[4.78rem] flex flex-row items-center justify-center p-[0.44rem] box-border relative cursor-pointer"
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
            <div className="self-stretch rounded-md [background:linear-gradient(#f5f6fa,_#f5f6fa),_#f5f6fa] shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] overflow-hidden flex flex-col items-center justify-start pt-[0.67rem] px-[0.67rem] pb-[2.22rem] box-border gap-[1.33rem] max-w-full mq700:pt-[1.11rem] mq700:pb-[1.44rem] mq700:box-border">
              <FrameComponent2
                onTypeContainer1Click={onTypeContainer1Click}
                onTypeContainer2Click={onTypeContainer2Click}
              />
              <InputRegularInputMediumFoc
                propPadding="1.75rem 1.25rem 1.75rem 1.438rem"
                propPadding1="0.5rem"
                propPadding2="0rem 1rem"
              />
              <div className="w-[28.61rem] h-[2.22rem] relative rounded hidden max-w-full" />
              <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0.89rem] pb-[0.89rem] box-border gap-[1.33rem] max-w-full">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.33rem] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start relative gap-[0.22rem] min-w-[18.61rem] max-w-full">
                    <div className="w-[1.61rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border">
                      <div className="h-[1.11rem] w-[4rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-slategray-400 text-left inline-block whitespace-nowrap shrink-0">
                        First Name
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
                    <div className="w-[26.83rem] h-[1.33rem] relative hidden max-w-full z-[2]">
                      <div className="absolute top-[0rem] left-[0rem] text-[0.89rem] leading-[1.33rem] font-inter text-lightsteelblue text-left hidden w-[4.06rem]">{`Input `}</div>
                    </div>
                    <div className="self-stretch h-[2.22rem] relative rounded" />
                  </div>
                  <FrameComponent1 titleText="Last Name" />
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.33rem] max-w-full">
                  <Input01RegularInput02Medi1
                    titleText="Email Address"
                    inputText=" Email"
                  />
                  <FrameComponent1 titleText="Phone Number" />
                </div>
              </div>
              <div className="w-[28.61rem] h-[2.22rem] relative rounded hidden max-w-full" />
              <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.89rem] box-border gap-[1.44rem] max-w-full">
                <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.22rem]">
                  <b className="self-stretch h-[1.33rem] relative text-[0.89rem] leading-[1.33rem] inline-block font-inter text-gray-300 text-left">
                    Regional Settings
                  </b>
                  <div className="self-stretch h-[1.11rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-slategray-400 text-left inline-block">
                    Set your language and timezone
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.33rem] max-w-full">
                  <Dropdown01RegularDropdown
                    titleText="Language"
                    inputText="English"
                    color="/color.svg"
                    propWidth="4.563rem"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start relative gap-[0.22rem] min-w-[18.61rem] max-w-full">
                    <div className="w-full h-[2.22rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
                    <div className="w-[1.61rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border">
                      <div className="h-[1.11rem] w-[3.61rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-slategray-400 text-left inline-block whitespace-nowrap shrink-0">
                        Timezone
                      </div>
                    </div>
                    <div className="w-[1.33rem] h-[1.33rem] absolute my-0 mx-[!important] right-[0.44rem] bottom-[0.44rem] z-[2]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                      <img
                        className="absolute h-[29.17%] w-6/12 top-[37.5%] right-[25%] bottom-[33.33%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                        alt=""
                        src="/color.svg"
                      />
                    </div>
                    <div className="w-[25.28rem] h-[1.33rem] relative hidden max-w-full z-[3]">
                      <div className="absolute top-[0rem] left-[0rem] text-[0.89rem] leading-[1.33rem] font-inter text-gray-300 text-left hidden whitespace-nowrap">
                        GMT +02:00
                      </div>
                    </div>
                    <input
                      className="[outline:none] bg-light-text-color self-stretch h-[2.22rem] relative rounded box-border min-w-[13.89rem] z-[1] border-[1px] border-solid border-lavender-200"
                      type="text"
                      value={fieldType1Value}
                      onChange={(event) =>
                        setFieldType1Value(event.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[0.06rem] relative bg-lavender-300" />
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.06rem] pl-[1.11rem] gap-[0.67rem]">
              <button
                className="cursor-pointer [border:none] py-[0.44rem] pr-[1.33rem] pl-[1.39rem] bg-[transparent] h-[2.22rem] w-[5.61rem] flex flex-row items-center justify-center box-border relative"
                onClick={onButton01RegularButton02MeClick}
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
                className="cursor-pointer [border:none] p-[0.44rem] bg-[transparent] h-[2.22rem] w-[4.78rem] flex flex-row items-center justify-center box-border relative"
                onClick={onButton01RegularButton02Me12Click}
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
          </form>
        </section>
      </main>
    </div>
  );
};

export default Settings;
