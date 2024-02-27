import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent3 from "../components/frame-component3";
import BadgeLightGreen from "../components/badge-light-green";
import FrameAvatarBadge from "../components/frame-avatar-badge";
import ChatBubble from "../components/chat-bubble";
import FrameZ from "../components/frame-z";
import FrameComponent from "../components/frame-component";

const Inbox: NextPage = () => {
  const [fieldTypeValue, setFieldTypeValue] = useState("");
  const [frameTextTypeValue, setFrameTextTypeValue] = useState("");
  const [titleText2Value, setTitleText2Value] = useState("");
  const [yourMessageTextValue, setYourMessageTextValue] = useState("");
  const router = useRouter();

  const onSolidServeTextClick = useCallback(() => {
    router.push("/c-staff");
  }, [router]);

  const onFrameClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onContainerClick = useCallback(() => {
    router.push("/c-staff");
  }, [router]);

  const onStatusContainer1Click = useCallback(() => {
    router.push("/inbox");
  }, [router]);

  const onContainer2Click = useCallback(() => {
    router.push("/all-customers");
  }, [router]);

  const onBadgeFrameClick = useCallback(() => {
    router.push("/settings");
  }, [router]);

  const onIconAlternateSignOutClick = useCallback(() => {
    router.push("/before-login");
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
      <main className="w-[78.89rem] flex flex-row items-start justify-start py-[0rem] pr-[1.11rem] pl-[0rem] box-border gap-[2.22rem] max-w-full mq950:gap-[1.11rem] mq950:pl-[1.11rem] mq950:box-border">
        <BadgeLightGreen
          iconTokens="/-icon-tokens1.svg"
          general01Icons02Common="/00-general--01-icons--02-common--32-list@2x.png"
          iconToolBox="/-icon-tool-box.svg"
          iconPlus="/-icon-plus.svg"
          icon="/icon@2x.png"
          general01Icons02Common1="/00-general--01-icons--02-common--01-settings-3@2x.png"
          general01Icons04Communic="24x24x-1044483807"
          general01Icons04Communic1="/chat@2x.png"
          general01Icons02Common2="/00-general--01-icons--02-common--03-users@2x.png"
          general01Icons02Common3="/00-general--01-icons--02-common--02-user-1@2x.png"
          general01Icons02Common4="/00-general--01-icons--02-common--01-settings-2@2x.png"
          general01Icons02Common5="/00-general--01-icons--02-common--01-settings-3@2x.png"
          iconAlternateSignOut="/-icon-alternate-sign-out.svg"
          sun24Outline="/sun--24--outline.svg"
          general01Icons04CommunPadding="24.5rem 1.83rem"
          iconAlternateSignOutBackgroundColor="#1e5eff"
          sun24OutlineColor="#fff"
          propBackgroundColor="#f5f6fa"
          propColor="#717899"
          onFrameClick={onFrameClick}
          onTagsContainerClick={onContainerClick}
          onIconTagMedium1Click={onStatusContainer1Click}
          onTagsContainer2Click={onContainer2Click}
          onTextClick={onBadgeFrameClick}
          onIconAlternateSignOutClick={onIconAlternateSignOutClick}
          nameDisplay="inline-block"
          nameDisplay1="inline-block"
          nameDisplay2="inline-block"
        />
        <section className="flex-1 flex flex-col items-start justify-start pt-[1.56rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_290px)] text-left text-[1.33rem] text-gray-300 font-inter mq950:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.56rem] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.11rem] mq450:flex-wrap">
              <h2 className="m-0 h-[2rem] w-[3.61rem] relative text-inherit leading-[2rem] font-bold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                Inbox
              </h2>
              <button className="cursor-pointer [border:none] py-[0.44rem] pr-[0.89rem] pl-[1.11rem] bg-mediumslateblue rounded flex flex-row items-start justify-start gap-[0.22rem] z-[1]">
                <div className="h-[2.22rem] w-[9.78rem] relative rounded hidden" />
                <div className="h-[2.22rem] w-[9.78rem] relative rounded bg-mediumslateblue hidden" />
                <div className="h-[1.33rem] w-[2.83rem] relative hidden" />
                <div className="h-[1.33rem] w-[1.33rem] relative z-[2]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                  <img
                    className="absolute h-[58.33%] w-[58.33%] top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                  />
                </div>
                <div className="h-[1.33rem] w-[6.22rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-light-text-color text-left inline-block z-[3]">
                  New Message
                </div>
              </button>
            </div>
            <div className="self-stretch rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] overflow-hidden flex flex-row items-start justify-start pt-[1.56rem] px-[0rem] pb-[0.89rem] box-border relative max-w-full [row-gap:20px] text-[0.78rem] mq950:flex-wrap mq950:pt-[1.11rem] mq950:pb-[1.11rem] mq950:box-border">
              <div className="h-[41.11rem] w-[61.67rem] relative rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] hidden max-w-full z-[0]" />
              <div className="w-[19.44rem] flex flex-col items-center justify-start gap-[2.67rem] min-w-[19.44rem] max-w-full mq450:gap-[1.33rem] mq450:min-w-full mq950:flex-1">
                <div className="w-[18.5rem] flex flex-col items-start justify-start py-[0rem] px-[1.11rem] box-border gap-[1.33rem] max-w-full text-[0.89rem]">
                  <b className="w-[6.39rem] h-[1.33rem] relative leading-[1.33rem] inline-block z-[1]">
                    Conversations
                  </b>
                  <div className="self-stretch flex flex-row items-end justify-end pt-[1.78rem] pb-[0rem] pr-[0.89rem] pl-[2.67rem] relative z-[1] text-[0.78rem] text-slategray-400 mq450:pl-[1.11rem] mq450:box-border">
                    <div className="h-full w-full absolute my-0 mx-[!important] right-[0rem] bottom-[-1.33rem] left-[0rem] rounded" />
                    <input
                      className="[outline:none] bg-light-text-color h-full w-full absolute my-0 mx-[!important] right-[0rem] bottom-[-1.33rem] left-[0rem] rounded box-border z-[1] border-[1px] border-solid border-lavender-200"
                      type="text"
                      value={fieldTypeValue}
                      onChange={(event) =>
                        setFieldTypeValue(event.target.value)
                      }
                    />
                    <input
                      className="[border:none] [outline:none] bg-[transparent] h-[0.44rem] flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border font-inter text-[0.89rem] text-lightsteelblue min-w-[7.61rem]"
                      placeholder="Search..."
                      type="text"
                      value={frameTextTypeValue}
                      onChange={(event) =>
                        setFrameTextTypeValue(event.target.value)
                      }
                    />
                    <img
                      className="h-[1.33rem] w-[1.33rem] absolute my-0 mx-[!important] bottom-[-0.89rem] left-[0.89rem] object-cover z-[2]"
                      alt=""
                    />
                    <div className="h-[1.11rem] w-[1.61rem] relative hidden z-[4]">
                      <div className="absolute top-[0rem] left-[0rem] leading-[1.11rem] inline-block h-full w-full">
                        Title
                      </div>
                    </div>
                  </div>
                </div>
                <FrameAvatarBadge
                  avatar="48x48x991300629"
                  avatar1="48x48x-117797541"
                  avatar2="48x48x1521530962"
                />
                <div className="w-[18.5rem] flex flex-row items-center justify-start py-[0rem] px-[1.11rem] box-border gap-[0.89rem] max-w-full">
                  <img
                    className="h-[2.67rem] w-[2.67rem] relative object-cover z-[1]"
                    alt=""
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.22rem]">
                    <div className="w-[11.89rem] flex flex-row items-start justify-between gap-[1.11rem]">
                      <div className="h-[1.11rem] w-[4.89rem] relative leading-[1.11rem] inline-block z-[1]">
                        Alisson Mack
                      </div>
                      <div className="h-[1.11rem] w-[3.67rem] relative leading-[1.11rem] text-lightsteelblue text-right inline-block z-[1]">
                        Yesterday
                      </div>
                    </div>
                    <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] text-slategray-400 inline-block z-[1]">
                      I want to complain about item
                    </div>
                  </div>
                </div>
                <div className="w-[18.5rem] flex flex-row items-center justify-start py-[0rem] px-[1.11rem] box-border gap-[0.89rem] max-w-full">
                  <img
                    className="h-[2.67rem] w-[2.67rem] relative object-cover z-[1]"
                    alt=""
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.22rem]">
                    <div className="w-[11.89rem] flex flex-row items-start justify-between gap-[1.11rem]">
                      <div className="h-[1.11rem] w-[4.44rem] relative leading-[1.11rem] inline-block z-[1]">
                        Jenny Lloyd
                      </div>
                      <div className="h-[1.11rem] w-[3.67rem] relative leading-[1.11rem] text-lightsteelblue text-right inline-block z-[1]">
                        Yesterday
                      </div>
                    </div>
                    <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] text-slategray-400 inline-block z-[1]">
                      I’m not sure if this is what I want
                    </div>
                  </div>
                </div>
                <div className="w-[18.5rem] flex flex-row items-center justify-start py-[0rem] px-[1.11rem] box-border gap-[0.89rem] max-w-full">
                  <img
                    className="h-[2.67rem] w-[2.67rem] relative object-cover z-[1]"
                    alt=""
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.22rem]">
                    <div className="w-[11.89rem] flex flex-row items-start justify-between gap-[1.11rem]">
                      <div className="h-[1.11rem] w-[5.56rem] relative leading-[1.11rem] inline-block z-[1]">
                        Andrew Larson
                      </div>
                      <div className="h-[1.11rem] w-[3.67rem] relative leading-[1.11rem] text-lightsteelblue text-right inline-block z-[1]">
                        Yesterday
                      </div>
                    </div>
                    <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] text-slategray-400 inline-block z-[1]">
                      Can you help me choose from t…
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-[0.06rem] absolute my-0 mx-[!important] top-[0rem] bottom-[0rem] left-[19.39rem] bg-lavender-100 z-[2]" />
              <div className="flex-1 flex flex-col items-center justify-start gap-[10.56rem] min-w-[27.44rem] max-w-full mq450:gap-[2.61rem] mq700:min-w-full mq950:gap-[5.28rem]">
                <div className="w-[41.33rem] flex flex-col items-end justify-start py-[0rem] px-[1.11rem] box-border gap-[1.56rem] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.33rem] max-w-full">
                    <div className="w-[36.67rem] flex flex-row items-start justify-between gap-[1.11rem] max-w-full mq450:flex-wrap">
                      <div className="w-[6.56rem] flex flex-row items-center justify-start gap-[0.22rem]">
                        <input
                          className="[border:none] [outline:none] inline-block font-inter text-[0.89rem] bg-[transparent] h-[1.33rem] flex-1 relative leading-[1.33rem] font-bold text-gray-300 text-left min-w-[3.28rem] z-[1]"
                          placeholder="Luis Pittman"
                          type="text"
                          value={titleText2Value}
                          onChange={(event) =>
                            setTitleText2Value(event.target.value)
                          }
                        />
                        <div className="h-[0.89rem] w-[0.89rem] relative rounded-[50%] bg-mediumseagreen-100 box-border z-[1] border-[0px] border-solid border-light-text-color" />
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[1.11rem]">
                        <img
                          className="h-[1.33rem] w-[1.33rem] relative object-cover min-h-[1.33rem] z-[1]"
                          alt=""
                        />
                        <img
                          className="h-[1.33rem] w-[1.33rem] relative object-cover min-h-[1.33rem] z-[1]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="self-stretch h-[0.06rem] relative bg-lavender-100 z-[1]" />
                  </div>
                  <ChatBubble
                    avatar="36x36x-856652562"
                    frameY="Hi, I wonder when if there is going to be anything new for spring?"
                    avatar1="12:24 AM"
                    propPadding="0.75rem 0.813rem 0.75rem 0.75rem"
                    propWidth="28.5rem"
                  />
                  <FrameZ avatar="36x36x-122659167" />
                  <ChatBubble
                    avatar="36x36x-856652562"
                    frameY="Sure, I want to know when the new spring collection for men is coming"
                    avatar1="12:35 AM"
                    propPadding="0.67rem"
                    propWidth="27.28rem"
                  />
                  <FrameComponent avatar="36x36x-122659167" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.89rem] max-w-full">
                  <div className="self-stretch h-[0.06rem] relative bg-lavender-100 z-[1]" />
                  <div className="w-[41.33rem] flex flex-row items-center justify-between py-[0rem] px-[1.11rem] box-border gap-[1.11rem] max-w-full mq450:flex-wrap">
                    <input
                      className="[border:none] [outline:none] font-inter text-[0.78rem] bg-[transparent] h-[2.22rem] w-[55.56rem] relative leading-[1.11rem] text-lightsteelblue text-left inline-block z-[1]"
                      placeholder="Your message…"
                      type="text"
                      value={yourMessageTextValue}
                      onChange={(event) =>
                        setYourMessageTextValue(event.target.value)
                      }
                    />
                    <div className="flex flex-row items-center justify-start gap-[1.11rem]">
                      <div className="h-[1.33rem] w-[1.33rem] relative z-[1]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <img
                          className="absolute h-[45.83%] w-[83.33%] top-[25%] right-[8.33%] bottom-[29.17%] left-[8.33%] max-w-full overflow-hidden max-h-full z-[1]"
                          alt=""
                        />
                      </div>
                      <button className="cursor-pointer [border:none] py-[0.44rem] pr-[0.94rem] pl-[1rem] bg-[transparent] flex flex-row items-center justify-center relative z-[1]">
                        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                          <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
                          <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-mediumslateblue z-[1]" />
                        </div>
                        <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.44rem] pl-[0rem] z-[2]">
                          <div className="flex flex-col items-start justify-end py-[0rem] px-[0rem]">
                            <div className="w-[1.89rem] h-[1.11rem] relative text-[0.78rem] leading-[1.11rem] font-inter text-light-text-color text-left inline-block whitespace-nowrap">
                              Send
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Inbox;
