import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Box from "../components/box";
import BadgeLightGreen from "../components/badge-light-green";
import AvatarFrameNameText from "../components/avatar-frame-name-text";
import NameFrames from "../components/name-frames";
import Tags from "../components/tags";

const ProfileView: NextPage = () => {
  const [fieldTypeValue, setFieldTypeValue] = useState("");
  const router = useRouter();

  const onSolidServeTextClick = useCallback(() => {
    router.push("/c-staff");
  }, [router]);

  const onFrameClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onTagsContainerClick = useCallback(() => {
    router.push("/c-staff");
  }, [router]);

  const onIconTagMedium1Click = useCallback(() => {
    router.push("/inbox");
  }, [router]);

  const onTagsContainer2Click = useCallback(() => {
    router.push("/all-customers");
  }, [router]);

  const onTextClick = useCallback(() => {
    router.push("/settings");
  }, [router]);

  const onIconAlternateSignOutClick = useCallback(() => {
    router.push("/before-login");
  }, [router]);

  const onButton01RegularButton02Me1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='customerInfoContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Box onSolidServeTextClick={onSolidServeTextClick} />
      <main className="w-[78.67rem] flex flex-row items-start justify-start py-[0rem] pr-[1.11rem] pl-[0rem] box-border gap-[1.17rem] max-w-full mq950:pl-[1.11rem] mq950:box-border">
        <BadgeLightGreen
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
          general01Icons04CommunPadding="27.438rem 2rem"
          iconAlternateSignOutBackgroundColor="#f5f6fa"
          sun24OutlineColor="#717899"
          propBackgroundColor="#1e5eff"
          propColor="#fff"
          onFrameClick={onFrameClick}
          onTagsContainerClick={onTagsContainerClick}
          onIconTagMedium1Click={onIconTagMedium1Click}
          onTagsContainer2Click={onTagsContainer2Click}
          onTextClick={onTextClick}
          onIconAlternateSignOutClick={onIconAlternateSignOutClick}
        />
        <section className="flex-1 flex flex-col items-start justify-start pt-[2.17rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_271px)] text-left text-[1.33rem] text-gray-300 font-inter mq950:max-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[1.56rem] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-between py-[0rem] pr-[0rem] pl-[0.83rem] gap-[1.11rem] mq700:flex-wrap">
              <h2 className="m-0 h-[2rem] w-[14.39rem] relative text-inherit leading-[2rem] font-bold font-inherit inline-block mq450:text-[1.06rem] mq450:leading-[1.61rem]">
                Customer Information
              </h2>
              <div className="flex flex-row items-start justify-start gap-[0.67rem]">
                <button className="cursor-pointer [border:none] p-[0.44rem] bg-[transparent] flex flex-row items-center justify-center relative">
                  <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                    <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
                    <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-light-text-color box-border z-[1] border-[1px] border-solid border-lavender-300" />
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.89rem] z-[2]">
                    <div className="h-[1.33rem] w-[2.94rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-mediumslateblue text-left inline-block">
                      Cancel
                    </div>
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-[0.44rem] bg-[transparent] flex flex-row items-center justify-center relative"
                  onClick={onButton01RegularButton02Me1Click}
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
            <div className="self-stretch flex flex-row items-start justify-start gap-[2.5rem] max-w-full text-[0.89rem] mq700:gap-[1.22rem] mq950:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.11rem] px-[0rem] pb-[0rem] box-border max-w-full mq700:min-w-full">
                <div className="self-stretch flex flex-col items-center justify-start gap-[1.11rem] max-w-full">
                  <div
                    className="self-stretch rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] overflow-hidden flex flex-col items-center justify-start p-[1.56rem] box-border gap-[1.56rem] max-w-full mq450:pt-[1.11rem] mq450:pb-[1.11rem] mq450:box-border"
                    data-scroll-to="customerInfoContainer"
                  >
                    <AvatarFrameNameText />
                    <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                    <div className="self-stretch h-[8rem] flex flex-col items-start justify-start gap-[1.33rem] max-w-full">
                      <b className="w-[7.11rem] h-[1.33rem] relative leading-[1.33rem] inline-block">
                        Customer Notes
                      </b>
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start relative gap-[0.22rem] max-w-full text-[0.78rem] text-slategray-400">
                        <div className="w-[1.61rem] flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border">
                          <div className="h-[1.11rem] w-[2.22rem] relative leading-[1.11rem] inline-block whitespace-nowrap shrink-0">
                            Notes
                          </div>
                        </div>
                        <input
                          className="[outline:none] bg-light-text-color w-full h-[4rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded box-border z-[1] border-[1px] border-solid border-lavender-200"
                          type="text"
                          value={fieldTypeValue}
                          onChange={(event) =>
                            setFieldTypeValue(event.target.value)
                          }
                        />
                        <div className="w-[35.67rem] h-[2.67rem] relative hidden max-w-full z-[2] text-[0.89rem] text-lightsteelblue">
                          <div className="absolute top-[0rem] left-[0rem] leading-[1.33rem] hidden">
                            Add notes about customer
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.89rem] pl-[0.67rem] box-border max-w-full text-[0.78rem]">
                    <div className="flex-1 rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] flex flex-col items-start justify-start pt-[1.39rem] pb-[1.89rem] pr-[1.44rem] pl-[1.67rem] box-border gap-[0.72rem] max-w-full mq450:pt-[1.11rem] mq450:pb-[1.22rem] mq450:box-border">
                      <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.17rem] text-[0.89rem]">
                        <b className="h-[1.33rem] w-[7.56rem] relative leading-[1.33rem] inline-block">
                          Customer Orders
                        </b>
                      </div>
                      <div className="self-stretch bg-light-text-color overflow-hidden flex flex-col items-start justify-start pt-[0.67rem] px-[0rem] pb-[0rem] box-border gap-[0.56rem] max-w-full text-slategray-400">
                        <div className="self-stretch h-[2.44rem] relative bg-light-text-color hidden" />
                        <div className="w-[29.17rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[1rem] max-w-full mq700:flex-wrap">
                            <div className="flex-1 flex flex-col items-start justify-start min-w-[5.5rem]">
                              <div className="w-[2.11rem] h-[1.11rem] relative leading-[1.11rem] inline-block z-[1]">
                                Order
                              </div>
                            </div>
                            <div className="w-[7.44rem] flex flex-col items-start justify-start">
                              <div className="w-[1.78rem] h-[1.11rem] relative leading-[1.11rem] inline-block z-[1]">
                                Date
                              </div>
                            </div>
                            <div className="h-[1.11rem] w-[7.46rem] relative leading-[1.11rem] inline-block shrink-0 z-[1]">
                              Order Status
                            </div>
                            <div className="h-[1.11rem] w-[1.89rem] relative leading-[1.11rem] inline-block z-[1]">
                              Price
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-[0.11rem] relative bg-lavender-100 z-[1]" />
                      </div>
                      <div className="w-[35rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[0.72rem] max-w-full mq700:flex-wrap">
                          <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block min-w-[2.78rem]">
                            #23534D
                          </div>
                          <div className="w-[7.83rem] flex flex-col items-start justify-start py-[0rem] pr-[0.39rem] pl-[0rem] box-border">
                            <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] inline-block whitespace-nowrap">
                              May 25, 3:12 PM
                            </div>
                          </div>
                          <div className="w-[7.78rem] flex flex-col items-start justify-start text-center text-slategray-400">
                            <div className="rounded bg-lavender-100 flex flex-row items-center justify-center py-[0.11rem] pr-[0.28rem] pl-[0.44rem]">
                              <div className="h-[1.11rem] w-[3rem] relative leading-[1.11rem] inline-block">
                                Pending
                              </div>
                            </div>
                          </div>
                          <div className="h-[1.11rem] w-[7.46rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                            $29.74
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                      <div className="w-[35rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[0.72rem] max-w-full mq700:flex-wrap">
                          <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] font-medium inline-block min-w-[2.5rem]">
                            #12512B
                          </div>
                          <div className="w-[7.83rem] flex flex-col items-start justify-start py-[0rem] pr-[0.39rem] pl-[0rem] box-border">
                            <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] inline-block whitespace-nowrap">
                              May 10, 2:00 PM
                            </div>
                          </div>
                          <div className="w-[7.78rem] flex flex-col items-start justify-start text-center text-mediumseagreen-200">
                            <div className="rounded bg-paleturquoise flex flex-row items-center justify-center py-[0.11rem] pr-[0.22rem] pl-[0.44rem]">
                              <div className="h-[1.11rem] w-[4.06rem] relative leading-[1.11rem] inline-block">
                                Completed
                              </div>
                            </div>
                          </div>
                          <div className="h-[1.11rem] w-[7.46rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                            $23.06
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                      <div className="w-[34.94rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[0.72rem] max-w-full mq700:flex-wrap">
                          <div className="h-[1.11rem] w-[8.89rem] relative leading-[1.11rem] font-medium inline-block shrink-0">
                            #23534D
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-[0rem] pr-[3rem] pl-[0rem] box-border gap-[1.11rem] min-w-[10.56rem] mq450:flex-wrap mq450:pr-[1.11rem] mq450:box-border">
                            <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block min-w-[4.83rem] whitespace-nowrap">
                              April 18, 8:00 AM
                            </div>
                            <div className="rounded bg-paleturquoise flex flex-row items-center justify-center py-[0.11rem] pr-[0.22rem] pl-[0.44rem] text-center text-mediumseagreen-200">
                              <div className="h-[1.11rem] w-[4.06rem] relative leading-[1.11rem] inline-block">
                                Completed
                              </div>
                            </div>
                          </div>
                          <div className="h-[1.11rem] w-[7.46rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                            $29.74
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                      <div className="w-[34.94rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[0.72rem] max-w-full mq700:flex-wrap">
                          <div className="h-[1.11rem] w-[8.89rem] relative leading-[1.11rem] font-medium inline-block shrink-0">
                            #76543E
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-[0rem] pr-[3rem] pl-[0rem] box-border gap-[1.11rem] min-w-[10.56rem] mq450:flex-wrap mq450:pr-[1.11rem] mq450:box-border">
                            <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block min-w-[4.83rem] whitespace-nowrap">
                              April 12, 8:00 AM
                            </div>
                            <div className="rounded bg-paleturquoise flex flex-row items-center justify-center py-[0.11rem] pr-[0.22rem] pl-[0.44rem] text-center text-mediumseagreen-200">
                              <div className="h-[1.11rem] w-[4.06rem] relative leading-[1.11rem] inline-block">
                                Completed
                              </div>
                            </div>
                          </div>
                          <div className="h-[1.11rem] w-[7.46rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                            $23.06
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                      <div className="w-[34.94rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[0.72rem] max-w-full mq700:flex-wrap">
                          <div className="h-[1.11rem] w-[8.89rem] relative leading-[1.11rem] font-medium inline-block shrink-0">
                            #51323C
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-[0rem] pr-[3rem] pl-[0rem] box-border gap-[1.11rem] min-w-[10.56rem] mq450:flex-wrap mq450:pr-[1.11rem] mq450:box-border">
                            <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block min-w-[4.78rem] whitespace-nowrap">
                              April 10, 4:12 PM
                            </div>
                            <div className="rounded bg-paleturquoise flex flex-row items-center justify-center py-[0.11rem] pr-[0.22rem] pl-[0.44rem] text-center text-mediumseagreen-200">
                              <div className="h-[1.11rem] w-[4.06rem] relative leading-[1.11rem] inline-block">
                                Completed
                              </div>
                            </div>
                          </div>
                          <div className="h-[1.11rem] w-[7.46rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                            $23.06
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[19.44rem] flex flex-col items-start justify-start gap-[1.67rem] min-w-[19.44rem] max-w-full mq450:min-w-full mq950:flex-1">
                <NameFrames />
                <Tags />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileView;
