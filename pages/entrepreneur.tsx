import type { NextPage } from "next";
import { useState } from "react";
import FrameFrameRectangle from "../components/frame-frame-rectangle";
import Card from "../components/card";
import ServiceToken from "../components/service-token";
import RecentTransactions from "../components/recent-transactions";

const Entrepreneur: NextPage = () => {
  const [searchTextValue, setSearchTextValue] = useState("");
  const [monthLabelsValue, setMonthLabelsValue] = useState("");
  const [monthLabels1Value, setMonthLabels1Value] = useState("");
  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <header className="self-stretch flex flex-row items-center justify-center relative max-w-full text-left text-[1.21rem] text-black font-gilroy">
        <div className="flex-1 flex flex-row items-center justify-between py-[0.89rem] pr-[1.56rem] pl-[16.22rem] box-border relative max-w-full gap-[1.11rem] mq450:pl-[1.11rem] mq450:box-border mq700:pl-[8.11rem] mq700:box-border">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)]" />
          <div className="h-[0rem] w-[0rem] relative hidden z-[1]">
            <img
              className="absolute w-[2.29rem] h-[2.11rem] hidden"
              alt=""
              src="/group.svg"
            />
            <div className="absolute top-[0.22rem] left-[2.94rem] leading-[1.72rem] font-extrabold hidden whitespace-nowrap">
              Modernize
            </div>
          </div>
          <div className="w-[5rem] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0.44rem] z-[1]">
            <img
              className="h-[1.33rem] w-[1.33rem] relative object-cover"
              loading="lazy"
              alt=""
              src="/00-general--01-icons--02-common--01-settings@2x.png"
            />
            <input
              className="[border:none] [outline:none] font-inter text-[0.78rem] bg-[transparent] h-[2.22rem] w-[55.56rem] relative leading-[1.11rem] text-slategray-400 text-left inline-block min-w-[55.56rem]"
              placeholder="Search..."
              type="text"
              value={searchTextValue}
              onChange={(event) => setSearchTextValue(event.target.value)}
            />
          </div>
          <div className="w-[16.28rem] flex flex-row items-start justify-start gap-[2rem] text-center text-[0.67rem] text-light-text-color font-inter mq450:gap-[1rem]">
            <div className="w-[4rem] flex flex-col items-start justify-start pt-[0.11rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch flex flex-row items-end justify-start gap-[1.11rem]">
                <img
                  className="h-[1.33rem] w-[1.33rem] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/chat@2x.png"
                />
                <div className="flex-1 flex flex-col items-end justify-start pt-[0rem] pb-[0.67rem] pr-[0rem] pl-[0.67rem] relative z-[1]">
                  <img
                    className="w-[1.33rem] h-[1.33rem] absolute my-0 mx-[!important] bottom-[0rem] left-[0rem] object-cover"
                    alt=""
                    src="/00-general--01-icons--02-common--01-settings-1@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-center justify-center relative z-[1]">
                    <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-mediumslateblue" />
                    <b className="h-[0.89rem] w-[0.44rem] relative leading-[0.89rem] inline-block z-[1]">
                      5
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-between gap-[1.11rem] z-[1] text-left text-[0.78rem] text-slategray-400">
              <div className="flex flex-row items-center justify-start gap-[0.67rem]">
                <img
                  className="h-[2rem] w-[2rem] relative object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
                <div className="h-[1.11rem] w-[2.17rem] relative leading-[1.11rem] inline-block whitespace-nowrap">
                  Name
                </div>
              </div>
              <div className="h-[1.33rem] w-[1.33rem] relative">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <img
                  className="absolute h-[29.17%] w-6/12 top-[37.5%] right-[25%] bottom-[33.33%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/color.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <h1 className="my-0 mx-[!important] h-[1.78rem] w-[9.11rem] absolute bottom-[0.94rem] left-[1.86rem] text-[1.67rem] tracking-[0.1px] leading-[1.78rem] font-bold font-h6 inline-block whitespace-nowrap z-[2]">
          solidServe
        </h1>
      </header>
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.11rem] pl-[0rem] box-border gap-[1.67rem] max-w-full mq700:pl-[1.11rem] mq700:box-border">
        <div className="w-[13.89rem] bg-ghostwhite shadow-[-1px_0px_0px_#d7dbec_inset] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[2.28rem] px-[0.89rem] pb-[19.94rem] box-border gap-[1.06rem] z-[2] mq700:hidden mq950:pt-[1.11rem] mq950:pb-[8.39rem] mq950:box-border mq975:pt-[1.5rem] mq975:pb-[12.94rem] mq975:box-border">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start">
            <div className="w-[12.11rem] rounded-19xl [background:linear-gradient(93.56deg,_#1fd286_42.68%,_#edfaf5)] shadow-[0px_2px_5px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-row items-center justify-end py-[0.67rem] pr-[0.89rem] pl-[3.11rem] box-border whitespace-nowrap">
              <div className="h-[2.44rem] w-[12.11rem] relative rounded bg-ghostwhite hidden" />
              <div className="h-[1.11rem] flex-1 relative text-[0.78rem] leading-[1.11rem] font-extrabold font-inter text-light-text-color text-left inline-block">
                New Transaction
              </div>
              <img
                className="h-[1.33rem] w-[1.33rem] relative object-cover hidden"
                alt=""
                src="/00-general--01-icons--02-common--32-list@2x.png"
              />
            </div>
            <img
              className="h-[0.71rem] w-[0.83rem] relative z-[1] ml-[-191px]"
              alt=""
              src="/-icon-plus.svg"
            />
          </button>
          <FrameFrameRectangle />
        </div>
        <section className="flex-1 flex flex-col items-start justify-start pt-[1.22rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_280px)] text-left text-[0.78rem] text-light-text-color font-inter mq700:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.33rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center gap-[1.33rem] mq700:flex-wrap">
              <div className="flex-1 rounded-md bg-mediumslateblue overflow-hidden flex flex-row items-center justify-center pt-[1.56rem] px-[0rem] pb-[1.44rem] box-border min-w-[10.28rem] z-[1]">
                <div className="h-[5.67rem] w-[15.83rem] relative rounded bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] hidden" />
                <div className="h-[5.67rem] w-[15.83rem] relative rounded-md bg-mediumslateblue hidden" />
                <div className="h-[2.67rem] flex-1 overflow-hidden flex flex-col items-center justify-start pt-[0rem] pb-[0.11rem] pr-[0.06rem] pl-[0.78rem] box-border gap-[0.89rem] z-[4]">
                  <div className="self-stretch flex flex-row items-end justify-start">
                    <div className="w-[7.06rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.11rem] box-border">
                      <div className="self-stretch h-[1.11rem] relative leading-[1.11rem] whitespace-pre-wrap inline-block">{`Total Revenue   `}</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-[0rem] px-[0rem] text-[1rem]">
                      <b className="w-[9.28rem] h-[1.56rem] relative leading-[1.56rem] inline-block">
                        $5.653 / $10.000
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.5rem] pl-[0.78rem]">
                    <div className="h-[0.44rem] flex-1 relative rounded bg-dodgerblue-100 z-[2]">
                      <div className="absolute top-[0rem] left-[0rem] rounded bg-dodgerblue-100 w-full h-full hidden z-[2]" />
                      <div className="absolute top-[0rem] left-[0rem] rounded bg-light-text-color w-[5.72rem] h-[0.44rem] z-[3]" />
                    </div>
                  </div>
                </div>
              </div>
              <Card
                creditsLeft="Attendance"
                prop="4 / 7"
                propWidth="10.563rem"
                propGap="0rem 0.75rem"
                propFlex="1"
                propWidth1="4.25rem"
                propWidth2="2.688rem"
              />
              <Card
                creditsLeft="Performance"
                prop="90%"
                propWidth="unset"
                propGap="0.72rem"
                propFlex="unset"
                propWidth1="3.06rem"
                propWidth2="10.72rem"
              />
              <div className="w-[11.39rem] rounded-md bg-mediumslateblue overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[1.72rem] px-[0.89rem] pb-[1.33rem] box-border gap-[0.39rem] z-[1]">
                <div className="w-[11.39rem] h-[5.67rem] relative rounded bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] hidden" />
                <div className="w-[11.39rem] h-[5.67rem] relative rounded-md bg-mediumslateblue hidden" />
                <div className="w-[4.17rem] h-[1.11rem] relative leading-[1.11rem] inline-block z-[2]">
                  Staff Name
                </div>
                <b className="w-[7.56rem] h-[1.11rem] relative text-[1.11rem] leading-[1.11rem] inline-block z-[2] mq450:text-[0.89rem] mq450:leading-[0.89rem]">
                  Joel B Joseph
                </b>
              </div>
            </div>
            <div className="w-[61.94rem] flex flex-row items-start justify-start py-[0rem] px-[0.67rem] box-border max-w-full text-[0.89rem] text-gray-300">
              <div className="flex-1 flex flex-col items-end justify-start gap-[1.06rem] max-w-full">
                <div className="self-stretch h-[0.11rem] relative box-border border-t-[2px] border-solid border-slategray-500" />
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.22rem] pl-[0rem] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[0.67rem] max-w-full">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0rem] pl-[0.28rem] box-border gap-[1.11rem] max-w-full">
                      <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.44rem] pl-[0rem] box-border min-w-[19.22rem] max-w-full mq450:min-w-full">
                        <div className="self-stretch rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] overflow-hidden flex flex-col items-center justify-start pt-[1.56rem] pb-[1.11rem] pr-[1.44rem] pl-[1.56rem] box-border gap-[1.33rem] max-w-full">
                          <div className="w-[3.99rem] h-[1.78rem] relative bg-light-text-color hidden" />
                          <div className="w-[3.99rem] h-[1.78rem] relative bg-light-text-color hidden" />
                          <div className="w-[3.99rem] h-[1.78rem] relative bg-light-text-color hidden" />
                          <div className="w-[3.99rem] h-[1.78rem] relative bg-light-text-color hidden" />
                          <div className="w-[2.22rem] h-[2.22rem] relative bg-light-text-color hidden" />
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="flex flex-col items-start justify-start gap-[0.44rem]">
                              <b className="w-[14.06rem] h-[1.33rem] relative leading-[1.33rem] inline-block">
                                Average Customer Transactions
                              </b>
                              <div className="flex flex-row items-start justify-start gap-[0.44rem] text-[0.78rem] text-slategray-400 mq450:flex-wrap">
                                <div className="h-[1.11rem] w-[4.17rem] relative leading-[1.11rem] inline-block">
                                  This Month
                                </div>
                                <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.67rem] pl-[0rem] text-right text-gray-300">
                                  <b className="w-[2.83rem] h-[1.11rem] relative leading-[1.11rem] inline-block whitespace-nowrap">
                                    $48.90
                                  </b>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[0.44rem]">
                                  <div className="h-[1.11rem] w-[5.78rem] relative leading-[1.11rem] inline-block">
                                    Previous Month
                                  </div>
                                  <b className="h-[1.11rem] w-[2.83rem] relative leading-[1.11rem] inline-block text-gray-300 text-right whitespace-nowrap">
                                    $48.90
                                  </b>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[0.67rem] max-w-full text-[0.67rem] text-lightsteelblue">
                            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                              <div className="self-stretch flex flex-row items-center justify-start gap-[0.28rem] max-w-full mq950:flex-wrap">
                                <div className="bg-light-text-color flex flex-row items-center justify-start py-[0.67rem] pr-[1.06rem] pl-[0rem] z-[5]">
                                  <div className="h-[2.22rem] w-[2.22rem] relative bg-light-text-color hidden" />
                                  <div className="h-[0.89rem] w-[1.17rem] relative leading-[0.89rem] inline-block whitespace-nowrap z-[6]">
                                    $80
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border min-w-[15.28rem] max-w-full">
                                  <div className="self-stretch h-[0.06rem] relative box-border border-[1px] border-dashed border-lavender-200" />
                                </div>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start gap-[0.11rem] max-w-full mq950:flex-wrap">
                                <div className="flex flex-col items-start justify-start">
                                  <div className="bg-light-text-color flex flex-row items-center justify-start py-[0.67rem] pr-[1.06rem] pl-[0rem] z-[4]">
                                    <div className="h-[2.22rem] w-[2.22rem] relative bg-light-text-color hidden" />
                                    <div className="h-[0.89rem] w-[1.17rem] relative leading-[0.89rem] inline-block whitespace-nowrap z-[5]">
                                      $60
                                    </div>
                                  </div>
                                  <div className="bg-light-text-color flex flex-row items-center justify-start py-[0.67rem] pr-[1.06rem] pl-[0rem] z-[3]">
                                    <div className="h-[2.22rem] w-[2.22rem] relative bg-light-text-color hidden" />
                                    <div className="h-[0.89rem] w-[1.17rem] relative leading-[0.89rem] inline-block whitespace-nowrap z-[4]">
                                      $40
                                    </div>
                                  </div>
                                  <div className="bg-light-text-color flex flex-row items-center justify-start py-[0.67rem] pr-[1.06rem] pl-[0rem] z-[2]">
                                    <div className="h-[2.22rem] w-[2.22rem] relative bg-light-text-color hidden" />
                                    <div className="h-[0.89rem] w-[1.17rem] relative leading-[0.89rem] inline-block whitespace-nowrap z-[3]">
                                      $20
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[6.67rem] flex-1 relative min-w-[15.39rem] max-w-full">
                                  <div className="absolute top-[1.11rem] left-[0.17rem] box-border w-[23.5rem] h-[0.06rem] border-[1px] border-dashed border-lavender-200" />
                                  <div className="absolute top-[0rem] left-[0rem] w-full h-full">
                                    <div className="absolute top-[3.33rem] left-[0rem] box-border w-[23.5rem] h-[0.06rem] border-[1px] border-dashed border-lavender-200" />
                                    <div className="absolute top-[5.56rem] left-[0rem] box-border w-[23.5rem] h-[0.06rem] border-[1px] border-dashed border-lavender-200" />
                                    <img
                                      className="absolute top-[0rem] left-[0rem] w-full h-full z-[1]"
                                      loading="lazy"
                                      alt=""
                                      src="/path-2.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-end justify-start gap-[0.22rem] max-w-full">
                              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.28rem] pl-[0rem] box-border max-w-full">
                                <div className="flex-1 flex flex-row items-center justify-start gap-[1.44rem] max-w-full mq950:flex-wrap">
                                  <div className="h-[0.89rem] w-[0.89rem] relative leading-[0.89rem] inline-block whitespace-nowrap z-[2] mq950:w-full mq950:h-[0.89rem]">
                                    $0
                                  </div>
                                  <div className="h-[0.06rem] flex-1 relative box-border min-w-[15.28rem] max-w-full border-[1px] border-dashed border-lavender-200" />
                                </div>
                              </div>
                              <div className="w-[22.61rem] flex flex-row items-center justify-between py-[0rem] pr-[0.17rem] pl-[0rem] box-border max-w-full gap-[1.11rem] text-center mq450:flex-wrap">
                                <div className="w-[1.61rem] flex flex-col items-start justify-start py-[0rem] pr-[0.22rem] pl-[0rem] box-border">
                                  <div className="self-stretch h-[0.89rem] relative leading-[0.89rem] inline-block z-[1]">
                                    4am
                                  </div>
                                </div>
                                <div className="h-[0.89rem] w-[1.39rem] relative leading-[0.89rem] inline-block shrink-0 z-[1]">
                                  8am
                                </div>
                                <div className="h-[0.89rem] w-[1.72rem] relative leading-[0.89rem] inline-block shrink-0 z-[1]">
                                  12pm
                                </div>
                                <div className="w-[10.67rem] flex flex-row items-center justify-start gap-[1.23rem]">
                                  <div className="h-[0.89rem] w-[1.44rem] relative leading-[0.89rem] inline-block shrink-0 z-[1]">
                                    4pm
                                  </div>
                                  <div className="flex-1 flex flex-row items-start justify-start">
                                    <button className="cursor-pointer [border:none] p-[0.44rem] bg-light-text-color flex-1 flex flex-row items-center justify-center hover:bg-gainsboro-100">
                                      <div className="h-[1.78rem] w-[3.99rem] relative bg-light-text-color hidden" />
                                      <div className="h-[0.89rem] w-[1.4rem] relative text-[0.67rem] leading-[0.89rem] font-inter text-lightsteelblue text-center inline-block z-[1]">
                                        8pm
                                      </div>
                                    </button>
                                    <button className="cursor-pointer [border:none] py-[0.44rem] px-[0.39rem] bg-light-text-color flex-1 flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-100">
                                      <div className="h-[1.78rem] w-[3.99rem] relative bg-light-text-color hidden" />
                                      <div className="h-[0.89rem] w-[2.06rem] relative text-[0.67rem] leading-[0.89rem] font-inter text-lightsteelblue text-center inline-block shrink-0 z-[1]">
                                        Jun 12
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ServiceToken
                        conversionRate="Conversion Rate"
                        other08Progress02Circular="/10-other08-progress02-circular03-75@2x.png"
                        prop="25%"
                        cart="Cart:"
                        checkout="Checkout:"
                        purchase="Purchase:"
                        nameTextTextFrame="35%"
                        checkoutMonthGoalFrame="29%"
                        purchaseLeftLineFrame="25%"
                        propFlex="unset"
                        propMinWidth="unset"
                        propWidth="14.17rem"
                        propHeight="19.33rem"
                        propHeight1="unset"
                        propFlex1="1"
                        propAlignSelf="stretch"
                        propFlexDirection="column"
                        propPadding="unset"
                        propMarginTop="-70px"
                        propMarginLeft="unset"
                      />
                      <ServiceToken
                        conversionRate="Sales Goal"
                        other08Progress02Circular="/10-other08-progress02-circular03-75-1@2x.png"
                        prop="75%"
                        cart="Sold for:"
                        checkout="Month goal:"
                        purchase="Left:"
                        nameTextTextFrame="$15.000"
                        checkoutMonthGoalFrame="$20.000"
                        purchaseLeftLineFrame="$5.000"
                        propFlex="unset"
                        propMinWidth="unset"
                        propWidth="14.17rem"
                        propHeight="unset"
                        propHeight1="unset"
                        propFlex1="unset"
                        propAlignSelf="unset"
                        propFlexDirection="row"
                        propPadding="0rem 1.94rem 0rem 0rem"
                        propMarginTop="unset"
                        propMarginLeft="-77px"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[1.33rem] max-w-full mq700:flex-wrap">
                      <div className="h-[21.44rem] flex-1 rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] overflow-hidden flex flex-col items-start justify-start pt-[1.89rem] px-[0.22rem] pb-[0rem] box-border gap-[1.44rem] min-w-[19.22rem] max-w-full mq450:h-auto mq450:min-w-full mq700:flex-1">
                        <div className="self-stretch h-[21.11rem] relative rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] hidden" />
                        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.22rem] pl-[1.39rem] box-border max-w-full">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[0.78rem] max-w-full mq700:flex-1">
                            <div className="w-[24.44rem] flex flex-row items-start justify-start gap-[0.22rem] max-w-full mq450:flex-wrap">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[0.44rem] min-w-[14.89rem] max-w-full">
                                <div className="self-stretch flex flex-row items-center justify-between gap-[1.11rem] mq450:flex-wrap">
                                  <b className="h-[1.33rem] w-[10.56rem] relative leading-[1.33rem] inline-block shrink-0 z-[1]">
                                    Customer Growth
                                  </b>
                                  <div className="h-[1.11rem] w-[5.28rem] relative text-[0.78rem] leading-[1.11rem] text-slategray-400 text-right inline-block z-[1]">
                                    Last 6 Months
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[1.11rem] text-[0.78rem] text-slategray-400 mq450:flex-wrap">
                                  <div className="flex flex-row items-center justify-start gap-[0.44rem]">
                                    <input
                                      className="m-0 h-[0.67rem] w-[0.67rem] relative rounded-sm bg-lavender-300 z-[1]"
                                      type="checkbox"
                                    />
                                    <div className="h-[1.11rem] w-[7.67rem] relative leading-[1.11rem] inline-block z-[1]">
                                      Returning customers
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-center justify-start gap-[0.44rem]">
                                    <input
                                      className="m-0 h-[0.67rem] w-[0.67rem] relative rounded-sm bg-mediumslateblue z-[1]"
                                      type="checkbox"
                                    />
                                    <div className="h-[1.11rem] w-[5.78rem] relative leading-[1.11rem] inline-block z-[1]">
                                      New customers
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[1.33rem] w-[1.33rem] relative opacity-[0.9] mix-blend-normal z-[1]">
                                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                                <img
                                  className="absolute h-[29.17%] w-6/12 top-[37.5%] right-[25%] bottom-[33.33%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                                  alt=""
                                  src="/color.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[0.67rem] text-lightsteelblue">
                              <div className="self-stretch flex flex-row items-center justify-start gap-[1.17rem] max-w-full mq950:flex-wrap">
                                <div className="h-[2.22rem] bg-light-text-color flex flex-row items-start justify-start pt-[0.06rem] pb-[1.22rem] pr-[0.67rem] pl-[0rem] box-border z-[1]">
                                  <div className="h-[2.2rem] w-[1.78rem] relative bg-light-text-color hidden" />
                                  <div className="h-[0.89rem] w-[1.11rem] relative leading-[0.89rem] inline-block whitespace-nowrap z-[2]">
                                    500
                                  </div>
                                </div>
                                <div className="h-[0.05rem] flex-1 relative box-border min-w-[15.94rem] max-w-full z-[1] border-[1px] border-dashed border-lavender-200" />
                              </div>
                              <div className="self-stretch flex flex-row items-center justify-start gap-[0.56rem] max-w-full mq950:flex-wrap">
                                <div className="h-[2.22rem] bg-light-text-color flex flex-row items-start justify-start pt-[0.33rem] pb-[0.94rem] pr-[1.17rem] pl-[0rem] box-border z-[2]">
                                  <div className="h-[2.2rem] w-[2.39rem] relative bg-light-text-color hidden" />
                                  <div className="h-[0.89rem] w-[1.22rem] relative leading-[0.89rem] inline-block whitespace-nowrap z-[3]">
                                    400
                                  </div>
                                </div>
                                <div className="h-[0.05rem] flex-1 relative box-border min-w-[15.94rem] max-w-full z-[1] border-[1px] border-dashed border-lavender-200" />
                              </div>
                              <div className="self-stretch flex flex-row items-center justify-start gap-[0.56rem] max-w-full mq950:flex-wrap">
                                <div className="h-[2.22rem] bg-light-text-color flex flex-row items-center justify-start pt-[0.56rem] pb-[0.72rem] pr-[1.17rem] pl-[0rem] box-border z-[1]">
                                  <div className="h-[2.2rem] w-[2.39rem] relative bg-light-text-color hidden" />
                                  <div className="h-[0.89rem] w-[1.22rem] relative leading-[0.89rem] inline-block whitespace-nowrap z-[2]">
                                    300
                                  </div>
                                </div>
                                <div className="h-[0.05rem] flex-1 relative box-border min-w-[15.94rem] max-w-full z-[1] border-[1px] border-dashed border-lavender-200" />
                              </div>
                              <div className="self-stretch flex flex-row items-center justify-start gap-[0.56rem] max-w-full mq950:flex-wrap">
                                <div className="h-[2.22rem] bg-light-text-color flex flex-row items-end justify-start pt-[0.83rem] pb-[0.44rem] pr-[1.22rem] pl-[0rem] box-border z-[2]">
                                  <div className="h-[2.2rem] w-[2.39rem] relative bg-light-text-color hidden" />
                                  <div className="h-[0.89rem] w-[1.17rem] relative leading-[0.89rem] inline-block whitespace-nowrap z-[3]">
                                    200
                                  </div>
                                </div>
                                <div className="h-[0.05rem] flex-1 relative box-border min-w-[15.94rem] max-w-full z-[1] border-[1px] border-dashed border-lavender-200" />
                              </div>
                              <div className="self-stretch flex flex-row items-center justify-start gap-[0.56rem] max-w-full mq950:flex-wrap">
                                <div className="h-[2.22rem] bg-light-text-color flex flex-row items-end justify-start pt-[1.06rem] pb-[0.22rem] pr-[1.33rem] pl-[0rem] box-border z-[1]">
                                  <div className="h-[2.2rem] w-[2.39rem] relative bg-light-text-color hidden" />
                                  <div className="h-[0.89rem] w-[1.06rem] relative leading-[0.89rem] inline-block whitespace-nowrap z-[2]">
                                    100
                                  </div>
                                </div>
                                <div className="h-[0.05rem] flex-1 relative box-border min-w-[15.94rem] max-w-full z-[1] border-[1px] border-dashed border-lavender-200" />
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start gap-[0.56rem] max-w-full mq950:flex-wrap">
                                <div className="h-[2.22rem] bg-light-text-color flex flex-row items-end justify-start pt-[1.28rem] pb-[0rem] pr-[2rem] pl-[0rem] box-border z-[1]">
                                  <div className="h-[2.2rem] w-[2.39rem] relative bg-light-text-color hidden" />
                                  <div className="h-[0.89rem] w-[0.39rem] relative leading-[0.89rem] inline-block whitespace-nowrap z-[2]">
                                    0
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] box-border min-w-[16rem] max-w-full text-center">
                                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.11rem] max-w-full">
                                    <div className="self-stretch h-[0.05rem] relative box-border z-[1] border-[1px] border-dashed border-lavender-200" />
                                    <div className="w-[23.22rem] flex flex-row items-start justify-start py-[0rem] pr-[0.22rem] pl-[0.17rem] box-border max-w-full">
                                      <div className="flex-1 flex flex-row items-end justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[0.39rem] max-w-full mq450:flex-wrap">
                                        <div className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border min-w-[13.06rem] max-w-full [row-gap:20px] mq450:flex-wrap">
                                          <div className="flex-[0.75] bg-light-text-color flex flex-row items-end justify-start pt-[0.83rem] pb-[0rem] pr-[1.72rem] pl-[0.78rem] box-border min-w-[3.94rem] max-w-[4rem] z-[1] mq450:flex-1">
                                            <div className="h-[1.65rem] w-[3.98rem] relative bg-light-text-color hidden" />
                                            <div className="h-[0.89rem] flex-1 relative leading-[0.89rem] inline-block z-[2]">
                                              Aug
                                            </div>
                                          </div>
                                          <input
                                            className="[border:none] [outline:none] bg-light-text-color h-[1.72rem] flex-1 flex flex-row items-end justify-start pt-[0.83rem] px-[1rem] pb-[0rem] box-border font-inter text-[0.67rem] text-lightsteelblue min-w-[3.94rem] max-w-[4rem] z-[1]"
                                            placeholder="Sep"
                                            type="text"
                                            value={monthLabelsValue}
                                            onChange={(event) =>
                                              setMonthLabelsValue(
                                                event.target.value,
                                              )
                                            }
                                          />
                                          <input
                                            className="[border:none] [outline:none] bg-light-text-color h-[1.72rem] flex-[0.8889] flex flex-row items-end justify-start pt-[0.83rem] px-[1.11rem] pb-[0rem] box-border font-inter text-[0.67rem] text-lightsteelblue min-w-[3.94rem] max-w-[4rem] z-[1] mq450:flex-1"
                                            placeholder="Oct"
                                            type="text"
                                            value={monthLabels1Value}
                                            onChange={(event) =>
                                              setMonthLabels1Value(
                                                event.target.value,
                                              )
                                            }
                                          />
                                          <div className="flex-[0.75] bg-light-text-color flex flex-row items-end justify-center pt-[0.83rem] pb-[0rem] pr-[1.33rem] pl-[1.17rem] box-border min-w-[3.94rem] max-w-[4rem] z-[1] mq450:flex-1">
                                            <div className="h-[1.65rem] w-[3.98rem] relative bg-light-text-color hidden" />
                                            <div className="h-[0.89rem] flex-1 relative leading-[0.89rem] inline-block z-[2]">
                                              Nov
                                            </div>
                                          </div>
                                          <div className="flex-[0.7778] bg-light-text-color flex flex-row items-end justify-center pt-[0.83rem] pb-[0rem] pr-[1.28rem] pl-[1.17rem] box-border min-w-[3.94rem] max-w-[4rem] z-[1] mq450:flex-1">
                                            <div className="h-[1.65rem] w-[3.98rem] relative bg-light-text-color hidden" />
                                            <div className="h-[0.89rem] flex-1 relative leading-[0.89rem] inline-block z-[2]">
                                              Dec
                                            </div>
                                          </div>
                                        </div>
                                        <div className="h-[0.89rem] w-[2.34rem] relative leading-[0.89rem] inline-block shrink-0 z-[1]">
                                          Jan
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[1.33rem] h-[10.78rem] hidden flex-row items-center justify-start gap-[0.44rem]">
                          <div className="self-stretch w-[0.44rem] relative rounded bg-lavender-300 hidden" />
                          <div className="h-[4.67rem] w-[0.44rem] relative rounded bg-mediumslateblue hidden" />
                        </div>
                        <div className="w-[1.33rem] h-[9.72rem] hidden flex-row items-center justify-start gap-[0.44rem]">
                          <div className="self-stretch w-[0.44rem] relative rounded bg-lavender-300 hidden" />
                          <div className="h-[6.28rem] w-[0.44rem] relative rounded bg-mediumslateblue hidden" />
                        </div>
                        <div className="w-[1.33rem] h-[10.44rem] hidden flex-row items-center justify-start gap-[0.44rem]">
                          <div className="self-stretch w-[0.44rem] relative rounded bg-lavender-300 hidden" />
                          <div className="h-[3.78rem] w-[0.44rem] relative rounded bg-mediumslateblue hidden" />
                        </div>
                        <div className="w-[1.33rem] h-[10.44rem] hidden flex-row items-center justify-start gap-[0.44rem]">
                          <div className="self-stretch w-[0.44rem] relative rounded bg-lavender-300 hidden" />
                          <div className="h-[2.94rem] w-[0.44rem] relative rounded bg-mediumslateblue hidden" />
                        </div>
                        <div className="h-[22rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[0.56rem]">
                          <div className="flex-1 flex flex-row items-center justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.44rem]">
                            <div className="self-stretch w-[0.44rem] relative rounded bg-lavender-300" />
                            <div className="h-[8.22rem] w-[0.44rem] relative rounded bg-mediumslateblue" />
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-[0rem] pr-[0.89rem] pl-[0rem] gap-[0.44rem]">
                            <div className="self-stretch w-[0.44rem] relative rounded bg-lavender-300" />
                            <div className="h-[3.78rem] w-[0.44rem] relative rounded bg-mediumslateblue hidden" />
                          </div>
                        </div>
                      </div>
                      <RecentTransactions
                        propAlignSelf="unset"
                        propFlex="0.9502"
                        propMinWidth="19.11rem"
                        propPadding="0rem 1.06rem 0rem 0rem"
                        propBackgroundColor="#e7e9f4"
                        propWidth="23.44rem"
                        propGap="1rem"
                        propPadding1="0rem 0.11rem 0rem 0rem"
                        propBackgroundColor1="#e7e9f4"
                        propWidth1="24.83rem"
                        propPadding2="0rem 0.17rem 0rem 0rem"
                        propGap1="1rem"
                        propBackgroundColor2="#e7e9f4"
                        propBackgroundColor3="#e7e9f4"
                        propWidth2="23.44rem"
                        propGap2="1rem"
                        propPadding3="0rem 0.11rem 0rem 0rem"
                        propBackgroundColor4="#e7e9f4"
                        propWidth3="24.83rem"
                        propPadding4="0rem 0.17rem 0rem 0rem"
                        propGap3="1rem"
                        propBackgroundColor5="#e7e9f4"
                        propBackgroundColor6="#e7e9f4"
                        propWidth4="23.44rem"
                        propGap4="1rem"
                        propPadding5="0rem 0.11rem 0rem 0rem"
                      />
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

export default Entrepreneur;
