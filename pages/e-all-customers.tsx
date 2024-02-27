import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent3 from "../components/frame-component3";
import ENavigation from "../components/e-navigation";

const EAllCustomers: NextPage = () => {
  const [text39Value, setText39Value] = useState("");
  const [fieldTypeValue, setFieldTypeValue] = useState("");
  const [fieldType1Value, setFieldType1Value] = useState("");
  const router = useRouter();

  const onSolidServeTextClick = useCallback(() => {
    router.push("/entrepreneur");
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
      <main className="w-[78.22rem] flex flex-row items-start justify-start py-[0rem] pr-[1.11rem] pl-[0rem] box-border gap-[3.94rem] max-w-full mq450:pl-[1.11rem] mq450:box-border mq700:gap-[1rem] mq950:gap-[1.94rem]">
        <ENavigation />
        <section className="flex-1 flex flex-col items-start justify-start pt-[2.72rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_321px)] text-left text-[0.89rem] text-slategray-400 font-inter mq450:pt-[1.78rem] mq450:box-border mq450:max-w-full mq950:pt-[1.17rem] mq950:box-border">
          <div className="self-stretch bg-ghostwhite overflow-hidden flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
            <div className="w-[44.22rem] flex flex-row items-start justify-start pt-[0.89rem] px-[0rem] pb-[0rem] box-border relative gap-[1.78rem] max-w-full mq700:flex-wrap mq700:gap-[0.89rem]">
              <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-600" />
              <div className="h-[0.06rem] w-full absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] bg-lavender-100 z-[1]" />
              <div className="h-[2.22rem] w-[4.67rem] relative hidden z-[2]">
                <div className="absolute w-full top-[calc(50%_+_18px)] right-[0rem] left-[0rem] bg-blueviolet h-[0.11rem]" />
                <div className="absolute top-[calc(50%_-_20px)] left-[0rem] leading-[1.33rem]">
                  From Europe
                </div>
              </div>
              <div className="w-[3.78rem] flex flex-row items-end justify-center pt-[2.11rem] px-[0rem] pb-[0rem] box-border relative z-[2]">
                <div className="h-[0.11rem] flex-1 relative bg-mediumslateblue" />
                <input
                  className="[border:none] [outline:none] font-inter text-[0.89rem] bg-[transparent] h-[1.33rem] w-[5.83rem] absolute my-0 mx-[!important] top-[0rem] right-[-2.06rem] leading-[1.33rem] text-mediumslateblue text-left inline-block"
                  placeholder="All Customers"
                  type="text"
                  value={text39Value}
                  onChange={(event) => setText39Value(event.target.value)}
                />
              </div>
              <div className="w-[5.11rem] flex flex-row items-end justify-center pt-[2.11rem] px-[0rem] pb-[0rem] box-border z-[2]">
                <div className="h-[0.11rem] flex-1 relative bg-blueviolet" />
                <div className="relative leading-[1.33rem] hidden">
                  New Customers
                </div>
              </div>
              <div className="w-[4.11rem] flex flex-row items-end justify-center pt-[2.11rem] px-[0rem] pb-[0rem] box-border z-[2]">
                <div className="h-[0.11rem] flex-1 relative bg-blueviolet" />
                <div className="relative leading-[1.33rem] hidden">
                  Returning Customers
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] pb-[0.89rem] px-[0rem] box-border max-w-full text-lightsteelblue">
              <div className="flex-1 flex flex-col items-end justify-start gap-[0.72rem] max-w-full">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[0.17rem] box-border max-w-full gap-[1.11rem] mq950:flex-wrap">
                  <div className="h-[2.17rem] w-[30.33rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border max-w-full mq700:h-auto">
                    <div className="mt-[-24px] self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border max-w-full">
                      <div className="mb-[-1px] self-stretch flex flex-row items-start justify-start gap-[0.89rem] max-w-full mq700:flex-wrap">
                        <div className="w-[10rem] flex flex-col items-center justify-end pt-[1.33rem] px-[0rem] pb-[0rem] box-border relative">
                          <div className="w-full h-[2.22rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0.02rem] left-[0rem] rounded" />
                          <input
                            className="[outline:none] bg-light-text-color self-stretch h-[2.22rem] relative rounded box-border min-w-[6rem] z-[1] border-[1px] border-solid border-lavender-200"
                            type="text"
                            value={fieldTypeValue}
                            onChange={(event) =>
                              setFieldTypeValue(event.target.value)
                            }
                          />
                          <div className="w-[1.33rem] h-[1.33rem] absolute my-0 mx-[!important] right-[0.44rem] bottom-[0.46rem] z-[2]">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                            <img
                              className="absolute h-[29.17%] w-6/12 top-[37.5%] right-[25%] bottom-[33.33%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                              alt=""
                              src="/color.svg"
                            />
                          </div>
                          <div className="w-[6.67rem] h-[1.33rem] relative hidden z-[3]">
                            <div className="absolute top-[0rem] left-[0rem] leading-[1.33rem] hidden w-[4.06rem]">
                              Filter
                            </div>
                          </div>
                          <div className="w-[1.61rem] h-[1.11rem] relative hidden z-[4] text-[0.78rem] text-slategray-400">
                            <div className="absolute top-[0rem] left-[0rem] leading-[1.11rem] inline-block w-full h-full">
                              Title
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center relative min-w-[12.61rem] max-w-full">
                          <div className="self-stretch flex flex-col items-center justify-end pt-[1.33rem] px-[0rem] pb-[0rem] relative">
                            <div className="self-stretch h-[2.22rem] relative rounded" />
                            <input
                              className="[outline:none] bg-light-text-color w-full h-[2.22rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0rem] left-[0rem] rounded box-border z-[1] border-[1px] border-solid border-lavender-200"
                              type="text"
                              value={fieldType1Value}
                              onChange={(event) =>
                                setFieldType1Value(event.target.value)
                              }
                            />
                            <div className="w-[15.89rem] h-[1.33rem] relative hidden z-[2]">
                              <div className="absolute top-[0rem] left-[0rem] leading-[1.33rem] hidden w-[4.06rem]">
                                Search...
                              </div>
                            </div>
                            <img
                              className="w-[1.33rem] h-[1.33rem] absolute my-0 mx-[!important] bottom-[0.44rem] left-[0.89rem] object-contain z-[2]"
                              loading="lazy"
                              alt=""
                              src="/00-general--01-icons--02-common--01-settings-3@2x.png"
                            />
                            <div className="w-[1.61rem] h-[1.11rem] relative hidden z-[4] text-[0.78rem] text-slategray-400">
                              <div className="absolute top-[0rem] left-[0rem] leading-[1.11rem] inline-block w-full h-full">
                                Title
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-[0.94rem] h-[0.94rem] absolute my-0 mx-[!important] right-[0.39rem] bottom-[0.61rem] z-[3]"
                            loading="lazy"
                            alt=""
                            src="/color-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[2.17rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                    <div className="mb-[-1px] flex flex-row items-start justify-start gap-[0.67rem]">
                      <img
                        className="h-[2.22rem] w-[2.22rem] relative object-contain min-h-[2.22rem]"
                        alt=""
                        src="/01-button03-icon-only02-medium03-white@2x.png"
                      />
                      <img
                        className="h-[2.22rem] w-[2.22rem] relative object-contain min-h-[2.22rem]"
                        alt=""
                        src="/01-button03-icon-only02-medium03-white-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.22rem] box-border max-w-full text-[0.78rem] text-slategray-400">
                  <div className="flex-1 bg-ghostwhite overflow-hidden flex flex-col items-start justify-start pt-[0.67rem] px-[0rem] pb-[0rem] box-border gap-[0.56rem] max-w-full">
                    <div className="self-stretch h-[2.44rem] relative bg-ghostwhite hidden" />
                    <div className="w-[52.61rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.11rem] mq950:flex-wrap">
                        <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                          <input
                            className="m-0 h-[1.11rem] w-[1.11rem] flex flex-row items-center justify-center z-[1]"
                            type="checkbox"
                          />
                          <div className="h-[1.11rem] w-[2.17rem] relative leading-[1.11rem] inline-block z-[1]">
                            Name
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[6.47rem] max-w-full mq700:flex-wrap mq700:gap-[3.22rem]">
                          <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.5rem] pl-[0rem]">
                            <div className="w-[3.17rem] h-[1.11rem] relative leading-[1.11rem] inline-block z-[1]">
                              Location
                            </div>
                          </div>
                          <div className="h-[1.11rem] w-[2.56rem] relative leading-[1.11rem] inline-block z-[1]">
                            Orders
                          </div>
                          <div className="h-[1.11rem] w-[2.17rem] relative leading-[1.11rem] inline-block z-[1]">
                            Spent
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[0.11rem] relative bg-lavender-100 z-[1]" />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[2.17rem] px-[0rem] pb-[0rem] box-border max-w-full ml-[-1067px] text-center text-[1.33rem] text-light-text-color">
                    <div className="self-stretch bg-ghostwhite overflow-hidden flex flex-col items-start justify-start pt-[0.67rem] px-[0rem] pb-[0rem] box-border gap-[0.5rem] max-w-full z-[2]">
                      <div className="w-[58.39rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.11rem] mq450:flex-wrap">
                          <div className="w-[18.67rem] flex flex-row items-center justify-start gap-[0.78rem] max-w-full mq700:flex-wrap">
                            <input
                              className="m-0 h-[1.11rem] w-[1.11rem] flex flex-row items-center justify-center"
                              type="checkbox"
                            />
                            <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.67rem] pl-[0rem]">
                              <div className="h-[2.67rem] w-[2.67rem] relative rounded-[50%] bg-lightsteelblue" />
                              <h2 className="m-0 h-[1.89rem] w-[1.33rem] relative text-inherit leading-[1.89rem] font-bold font-inherit inline-block z-[1] ml-[-36px] mq700:text-[1.06rem] mq700:leading-[1.5rem]">
                                W
                              </h2>
                            </div>
                            <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium text-gray-300 text-left inline-block min-w-[4.11rem]">
                              Walter Gibson
                            </div>
                          </div>
                          <div className="w-[28.11rem] flex flex-row items-start justify-start gap-[1.11rem] max-w-full text-left text-[0.78rem] text-gray-300 mq700:flex-wrap">
                            <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block min-w-[4.44rem]">
                              Sawaynchester
                            </div>
                            <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0">
                              5
                            </div>
                            <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                              $96.14
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-center text-[1.33rem] text-light-text-color">
                  <div className="w-[58.83rem] flex flex-row items-start justify-start py-[0rem] px-[0.67rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.11rem] mq450:flex-wrap">
                      <div className="w-[18.67rem] flex flex-row items-center justify-start gap-[0.78rem] max-w-full mq700:flex-wrap">
                        <input
                          className="m-0 h-[1.11rem] w-[1.11rem] flex flex-row items-center justify-center"
                          type="checkbox"
                        />
                        <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.67rem] pl-[0rem]">
                          <div className="h-[2.67rem] w-[2.67rem] relative rounded-[50%] bg-lightsteelblue" />
                          <h2 className="m-0 h-[1.89rem] w-[1.33rem] relative text-inherit leading-[1.89rem] font-bold font-inherit inline-block shrink-0 z-[1] ml-[-36px] mq700:text-[1.06rem] mq700:leading-[1.5rem]">
                            L
                          </h2>
                        </div>
                        <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium text-gray-300 text-left inline-block min-w-[4.89rem]">
                          Lenora Robinson
                        </div>
                      </div>
                      <div className="w-[28.11rem] flex flex-row items-start justify-start gap-[1.11rem] max-w-full text-left text-[0.78rem] text-gray-300 mq700:flex-wrap">
                        <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block min-w-[3.22rem]">
                          Kaydenville
                        </div>
                        <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0">
                          12
                        </div>
                        <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                          $22.18
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[0.67rem] max-w-full">
                    <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
                      <div className="w-[58.83rem] flex flex-row items-start justify-start py-[0rem] px-[0.67rem] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.11rem] mq450:flex-wrap">
                          <div className="w-[18.67rem] flex flex-row items-center justify-start gap-[0.78rem] max-w-full mq700:flex-wrap">
                            <input
                              className="m-0 h-[1.11rem] w-[1.11rem] flex flex-row items-center justify-center"
                              type="checkbox"
                            />
                            <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.67rem] pl-[0rem]">
                              <div className="h-[2.67rem] w-[2.67rem] relative rounded-[50%] bg-lightsteelblue" />
                              <h2 className="m-0 h-[1.89rem] w-[1.33rem] relative text-inherit leading-[1.89rem] font-bold font-inherit inline-block shrink-0 z-[1] ml-[-36px] mq700:text-[1.06rem] mq700:leading-[1.5rem]">
                                D
                              </h2>
                            </div>
                            <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium text-gray-300 text-left inline-block min-w-[3.06rem]">
                              Daisy Tran
                            </div>
                          </div>
                          <div className="w-[28.11rem] flex flex-row items-start justify-start gap-[1.11rem] max-w-full text-left text-[0.78rem] text-gray-300 mq700:flex-wrap">
                            <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block min-w-[4.11rem]">
                              East Freidaton
                            </div>
                            <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0">
                              6
                            </div>
                            <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                              $59.64
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-end justify-start gap-[0.67rem] max-w-full">
                        <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
                          <div className="w-[58.83rem] flex flex-row items-start justify-start py-[0rem] px-[0.67rem] box-border max-w-full">
                            <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.11rem] mq450:flex-wrap">
                              <div className="w-[18.67rem] flex flex-row items-center justify-start gap-[0.78rem] max-w-full mq700:flex-wrap">
                                <input
                                  className="m-0 h-[1.17rem] w-[1.11rem] flex flex-row items-center justify-center"
                                  type="checkbox"
                                />
                                <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.67rem] pl-[0rem]">
                                  <div className="h-[2.67rem] w-[2.67rem] relative rounded-[50%] bg-lightsteelblue" />
                                  <h2 className="m-0 h-[1.89rem] w-[1.33rem] relative text-inherit leading-[1.89rem] font-bold font-inherit inline-block shrink-0 z-[1] ml-[-36px] mq700:text-[1.06rem] mq700:leading-[1.5rem]">
                                    A
                                  </h2>
                                </div>
                                <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium text-gray-300 text-left inline-block min-w-[5.17rem]">
                                  Alejandro Holland
                                </div>
                              </div>
                              <div className="w-[28.11rem] flex flex-row items-start justify-start gap-[1.11rem] max-w-full text-left text-[0.78rem] text-gray-300 mq700:flex-wrap">
                                <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block min-w-[4.67rem]">
                                  South Marcellus
                                </div>
                                <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0">
                                  3
                                </div>
                                <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                                  $54.52
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[0.61rem] max-w-full">
                            <div className="self-stretch h-[0.06rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.22rem] box-border max-w-full">
                              <div className="self-stretch flex-1 relative bg-lavender-100 max-w-full" />
                            </div>
                            <div className="w-[58.83rem] flex flex-row items-start justify-start py-[0rem] px-[0.67rem] box-border max-w-full">
                              <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.11rem] mq450:flex-wrap">
                                <div className="w-[18.67rem] flex flex-row items-center justify-start gap-[0.78rem] max-w-full mq700:flex-wrap">
                                  <input
                                    className="m-0 h-[1.11rem] w-[1.11rem] flex flex-row items-center justify-center"
                                    type="checkbox"
                                  />
                                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.67rem] pl-[0rem]">
                                    <div className="h-[2.67rem] w-[2.67rem] relative rounded-[50%] bg-lightsteelblue" />
                                    <h2 className="m-0 h-[1.89rem] w-[1.33rem] relative text-inherit leading-[1.89rem] font-bold font-inherit inline-block shrink-0 z-[1] ml-[-36px] mq700:text-[1.06rem] mq700:leading-[1.5rem]">
                                      R
                                    </h2>
                                  </div>
                                  <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium text-gray-300 text-left inline-block min-w-[3.44rem]">
                                    Rose Foster
                                  </div>
                                </div>
                                <div className="w-[28.11rem] flex flex-row items-start justify-start gap-[1.11rem] max-w-full text-left text-[0.78rem] text-gray-300 mq700:flex-wrap">
                                  <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block min-w-[4.11rem]">
                                    South Olestad
                                  </div>
                                  <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0">
                                    15
                                  </div>
                                  <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                                    $45.8
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch h-[0.06rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.22rem] box-border max-w-full">
                              <div className="self-stretch flex-1 relative bg-lavender-100 max-w-full" />
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.22rem] box-border max-w-full">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
                                <div className="w-[58.39rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full">
                                  <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.11rem] mq450:flex-wrap">
                                    <div className="w-[18.67rem] flex flex-row items-center justify-start gap-[0.78rem] max-w-full mq700:flex-wrap">
                                      <input
                                        className="m-0 h-[1.11rem] w-[1.11rem] flex flex-row items-center justify-center"
                                        type="checkbox"
                                      />
                                      <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.67rem] pl-[0rem]">
                                        <div className="h-[2.67rem] w-[2.67rem] relative rounded-[50%] bg-lightsteelblue" />
                                        <h2 className="m-0 h-[1.89rem] w-[1.33rem] relative text-inherit leading-[1.89rem] font-bold font-inherit inline-block shrink-0 z-[1] ml-[-36px] mq700:text-[1.06rem] mq700:leading-[1.5rem]">
                                          O
                                        </h2>
                                      </div>
                                      <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium text-gray-300 text-left inline-block min-w-[4.94rem]">
                                        Ophelia Figueroa
                                      </div>
                                    </div>
                                    <div className="w-[28.11rem] flex flex-row items-start justify-start gap-[1.11rem] max-w-full text-left text-[0.78rem] text-gray-300 mq700:flex-wrap">
                                      <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block min-w-[3.33rem]">
                                        Dereckberg
                                      </div>
                                      <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0">
                                        12
                                      </div>
                                      <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                                        $85.78
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                              </div>
                            </div>
                            <div className="w-[58.83rem] flex flex-row items-start justify-start py-[0rem] px-[0.67rem] box-border max-w-full">
                              <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.11rem] mq450:flex-wrap">
                                <div className="w-[18.67rem] flex flex-row items-center justify-start gap-[0.78rem] max-w-full mq700:flex-wrap">
                                  <input
                                    className="m-0 h-[1.11rem] w-[1.11rem] flex flex-row items-center justify-center"
                                    type="checkbox"
                                  />
                                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.67rem] pl-[0rem]">
                                    <div className="h-[2.67rem] w-[2.67rem] relative rounded-[50%] bg-lightsteelblue" />
                                    <h2 className="m-0 h-[1.89rem] w-[1.33rem] relative text-inherit leading-[1.89rem] font-bold font-inherit inline-block z-[1] ml-[-36px] mq700:text-[1.06rem] mq700:leading-[1.5rem]">
                                      W
                                    </h2>
                                  </div>
                                  <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium text-gray-300 text-left inline-block min-w-[4.83rem]">
                                    Wayne Reynolds
                                  </div>
                                </div>
                                <div className="w-[28.11rem] flex flex-row items-start justify-start gap-[1.11rem] max-w-full text-left text-[0.78rem] text-gray-300 mq700:flex-wrap">
                                  <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block min-w-[3.78rem]">
                                    Franeckiview
                                  </div>
                                  <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0">
                                    3
                                  </div>
                                  <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                                    $63.65
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch h-[0.06rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.22rem] box-border max-w-full">
                              <div className="self-stretch flex-1 relative bg-lavender-100 max-w-full" />
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.22rem] box-border max-w-full">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
                                <div className="w-[58.39rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full">
                                  <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.11rem] mq450:flex-wrap">
                                    <div className="w-[18.67rem] flex flex-row items-center justify-start gap-[0.78rem] max-w-full mq700:flex-wrap">
                                      <input
                                        className="m-0 h-[1.11rem] w-[1.11rem] flex flex-row items-center justify-center"
                                        type="checkbox"
                                      />
                                      <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.67rem] pl-[0rem]">
                                        <div className="h-[2.67rem] w-[2.67rem] relative rounded-[50%] bg-lightsteelblue" />
                                        <h2 className="m-0 h-[1.89rem] w-[1.33rem] relative text-inherit leading-[1.89rem] font-bold font-inherit inline-block shrink-0 z-[1] ml-[-36px] mq700:text-[1.06rem] mq700:leading-[1.5rem]">
                                          D
                                        </h2>
                                      </div>
                                      <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium text-gray-300 text-left inline-block min-w-[3.72rem]">
                                        Don Sanders
                                      </div>
                                    </div>
                                    <div className="w-[28.11rem] flex flex-row items-start justify-start gap-[1.11rem] max-w-full text-left text-[0.78rem] text-gray-300 mq700:flex-wrap">
                                      <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block min-w-[4rem]">
                                        Port Kathryne
                                      </div>
                                      <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0">
                                        7
                                      </div>
                                      <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                                        $13.39
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
                              <div className="w-[58.39rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full">
                                <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.11rem] mq450:flex-wrap">
                                  <div className="w-[18.67rem] flex flex-row items-center justify-start gap-[0.78rem] max-w-full">
                                    <input
                                      className="m-0 h-[1.11rem] w-[1.11rem] flex flex-row items-center justify-center"
                                      type="checkbox"
                                    />
                                    <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.67rem] pl-[0rem]">
                                      <div className="h-[2.67rem] w-[2.67rem] relative rounded-[50%] bg-lightsteelblue" />
                                      <h2 className="m-0 h-[1.89rem] w-[1.33rem] relative text-inherit leading-[1.89rem] font-bold font-inherit inline-block shrink-0 z-[1] ml-[-36px] mq700:text-[1.06rem] mq700:leading-[1.5rem]">
                                        A
                                      </h2>
                                    </div>
                                    <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-medium text-gray-300 text-left inline-block">
                                      Adrian Wallace
                                    </div>
                                  </div>
                                  <div className="w-[28.11rem] flex flex-row items-start justify-start gap-[1.11rem] max-w-full text-left text-[0.78rem] text-gray-300 mq700:flex-wrap">
                                    <div className="h-[1.11rem] flex-1 relative leading-[1.11rem] inline-block min-w-[3.94rem]">
                                      McGlynntown
                                    </div>
                                    <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0">
                                      14
                                    </div>
                                    <div className="h-[1.11rem] w-[7.87rem] relative leading-[1.11rem] inline-block shrink-0 whitespace-nowrap">
                                      $80.80
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch h-[0.06rem] relative bg-lavender-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="w-[54.22rem] flex flex-row items-start justify-start py-[0rem] px-[0.44rem] box-border max-w-full text-center text-[0.89rem] text-slategray-400 font-inter">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.11rem] mq950:flex-wrap">
                <div className="w-[21.33rem] flex flex-col items-start justify-start pt-[0.33rem] px-[0rem] pb-[0rem] box-border max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0.67rem] mq700:flex-wrap">
                    <div className="flex flex-row items-center justify-center p-[0.33rem] relative">
                      <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-light-text-color" />
                      <div className="h-[1.33rem] w-[1.33rem] relative z-[1]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        <img
                          className="absolute h-3/6 w-[62.5%] top-[25%] right-[20.83%] bottom-[25%] left-[16.67%] max-w-full overflow-hidden max-h-full z-[1]"
                          loading="lazy"
                          alt=""
                          src="/color-3.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start min-w-[15.67rem]">
                      <div className="flex-1 flex flex-row items-center justify-center p-[0.33rem] relative">
                        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-gray-600" />
                        <div className="h-[1.33rem] flex-1 relative leading-[1.33rem] inline-block z-[1]">
                          1
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-center p-[0.33rem] relative text-mediumslateblue">
                        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-aliceblue-100" />
                        <div className="h-[1.33rem] flex-1 relative leading-[1.33rem] inline-block z-[1]">
                          2
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-center p-[0.33rem] relative">
                        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-gray-600" />
                        <div className="h-[1.33rem] flex-1 relative leading-[1.33rem] inline-block z-[1]">
                          3
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-center p-[0.33rem] relative">
                        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-gray-600" />
                        <div className="h-[1.33rem] flex-1 relative leading-[1.33rem] inline-block z-[1]">
                          4
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-center p-[0.33rem] relative">
                        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-gray-600" />
                        <div className="h-[1.33rem] flex-1 relative leading-[1.33rem] inline-block z-[1]">
                          5
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-center p-[0.33rem] relative">
                        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-gray-600" />
                        <div className="h-[1.33rem] flex-1 relative leading-[1.33rem] inline-block z-[1]">
                          6
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-center p-[0.33rem] relative">
                        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-gray-600" />
                        <div className="h-[1.33rem] flex-1 relative leading-[1.33rem] inline-block z-[1]">
                          ...
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-center p-[0.33rem] relative">
                        <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-gray-600" />
                        <div className="h-[1.33rem] flex-1 relative leading-[1.33rem] inline-block z-[1]">
                          24
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-[2rem] w-[2rem] relative object-contain min-h-[2rem]"
                      loading="lazy"
                      alt=""
                      src="/arrow@2x.png"
                    />
                  </div>
                </div>
                <div className="h-[1.33rem] w-[4.83rem] relative leading-[1.33rem] text-right inline-block">
                  154 Results
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EAllCustomers;
