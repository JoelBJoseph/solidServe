import type { NextPage } from "next";
import { useCallback } from "react";
import FrameWithText from "../components/frame-with-text";
import StartRecording from "../components/start-recording";
import { useRouter } from "next/router";
import ServiceToken from "../components/service-token";
import RecentTransactions from "../components/recent-transactions";

const CStaff: NextPage = () => {
  const router = useRouter();

  const onCardClick = useCallback(() => {
    router.push("/inbox");
  }, [router]);

  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <FrameWithText />
      <img className="w-[9.67rem] h-[0.94rem] relative hidden" alt="" />
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.11rem] pl-[0rem] box-border gap-[1.22rem] max-w-full mq950:pl-[1.11rem] mq950:box-border">
        <StartRecording />
        <section className="flex-1 flex flex-col items-start justify-start pt-[1.39rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_272px)] text-left text-[0.78rem] text-light-text-color font-inter mq950:max-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[0.67rem] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[1.11rem] box-border gap-[1rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.11rem] mq950:flex-wrap">
                <div className="w-[32.78rem] flex flex-col items-start justify-start pt-[0.17rem] px-[0rem] pb-[0rem] box-border min-w-[32.78rem] max-w-full mq700:min-w-full mq950:flex-1">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[1.11rem] mq700:flex-wrap">
                    <div className="flex-1 rounded-md bg-mediumslateblue overflow-hidden flex flex-row items-center justify-center p-[1.5rem] box-border min-w-[10.28rem] z-[1]">
                      <div className="h-[5.67rem] w-[15.83rem] relative rounded bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] hidden" />
                      <div className="h-[5.67rem] w-[15.83rem] relative rounded-md bg-mediumslateblue hidden" />
                      <div className="h-[2.67rem] flex-1 overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0.06rem] pb-[0.06rem] box-border gap-[0.89rem] z-[4]">
                        <div className="flex flex-row items-center justify-start gap-[0.72rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.11rem] px-[0rem] pb-[0rem]">
                            <div className="w-[5.61rem] h-[1.11rem] relative leading-[1.11rem] font-semibold inline-block">
                              February 2024
                            </div>
                          </div>
                          <b className="h-[1.56rem] w-[5.06rem] relative text-[1.11rem] leading-[1.56rem] inline-block shrink-0 mq450:text-[0.89rem] mq450:leading-[1.22rem]">
                            25 / 29
                          </b>
                        </div>
                        <div className="self-stretch h-[0.44rem] relative rounded bg-dodgerblue-100 z-[2]">
                          <div className="absolute top-[0rem] left-[0rem] rounded bg-dodgerblue-100 w-full h-full hidden z-[2]" />
                          <div className="absolute top-[0rem] left-[0rem] rounded bg-light-text-color w-[2.39rem] h-[0.44rem] z-[3]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 rounded-md bg-mediumslateblue overflow-hidden flex flex-row items-center justify-center p-[1.5rem] box-border min-w-[10.28rem] z-[1]">
                      <div className="h-[5.67rem] w-[15.83rem] relative rounded bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] hidden" />
                      <div className="h-[5.67rem] w-[15.83rem] relative rounded-md bg-mediumslateblue hidden" />
                      <div className="h-[2.67rem] flex-1 overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0.06rem] pb-[0.06rem] box-border gap-[0.83rem] z-[4]">
                        <div className="flex flex-row items-center justify-start gap-[0.72rem]">
                          <div className="h-[1.11rem] w-[4.89rem] relative leading-[1.11rem] font-semibold inline-block">
                            Performance
                          </div>
                          <b className="h-[1.56rem] w-[3.06rem] relative text-[1.11rem] leading-[1.56rem] inline-block shrink-0 mq450:text-[0.89rem] mq450:leading-[1.22rem]">
                            90%
                          </b>
                        </div>
                        <div className="self-stretch h-[0.44rem] relative rounded bg-dodgerblue-100 z-[2]">
                          <div className="absolute top-[0rem] left-[0rem] rounded bg-dodgerblue-100 w-full h-full hidden z-[2]" />
                          <div className="absolute top-[0rem] left-[0rem] rounded bg-light-text-color w-[10.72rem] h-[0.44rem] z-[3]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[12.28rem] rounded-md bg-mediumslateblue overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[0.67rem] pb-[2rem] pr-[0.61rem] pl-[1rem] box-border gap-[0.78rem] min-w-[12.28rem] z-[1] mq950:flex-1">
                  <div className="w-[12.28rem] h-[5.67rem] relative rounded bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] hidden" />
                  <div className="w-[12.28rem] h-[5.67rem] relative rounded-md bg-mediumslateblue hidden" />
                  <div className="w-[4.55rem] h-[1.11rem] relative leading-[1.11rem] font-semibold inline-block z-[2]">{`Staff `}</div>
                  <div className="self-stretch h-[1.11rem] relative text-[1.39rem] leading-[1.11rem] font-semibold inline-block z-[2] mq450:text-[1.11rem] mq450:leading-[0.89rem]">
                    Joel B Joseph
                  </div>
                </div>
              </div>
              <div className="w-[60.67rem] h-[0rem] flex flex-row items-start justify-start py-[0rem] pr-[0.11rem] pl-[0.22rem] box-border max-w-full">
                <div className="h-[0.11rem] flex-1 relative box-border max-w-full border-t-[2px] border-solid border-slategray-500" />
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.72rem] max-w-full text-gray-200 font-h6">
              <div className="w-[18.22rem] flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0rem] box-border max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.83rem] max-w-full mq450:gap-[0.89rem]">
                  <div className="self-stretch h-[27.89rem] rounded-md [background:linear-gradient(180.14deg,_#fff,_rgba(254,_246,_246,_0))] overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[0.72rem] px-[0rem] pb-[0rem] box-border gap-[1.5rem]">
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.28rem] pl-[0.56rem]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[1.06rem]">
                        <b className="w-[4.5rem] h-[1.33rem] relative text-[0.89rem] leading-[1.33rem] inline-block font-inter text-gray-300">
                          Messages
                        </b>
                        <div className="self-stretch h-[2.67rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.56rem] pr-[0.17rem] pl-[0.28rem] box-border">
                          <div className="h-[2.17rem] flex-1 flex flex-row items-start justify-start gap-[0.56rem]">
                            <div className="h-[1.81rem] w-[2.26rem] relative">
                              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-mistyrose w-full h-full" />
                              <img
                                className="absolute top-[0.18rem] left-[0.27rem] w-[1.93rem] h-[1.54rem] object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/personmattew-skin-tonewhite-posture20-like@2x.png"
                              />
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                              <div className="self-stretch flex-1 flex flex-row items-end justify-between gap-[1.11rem]">
                                <div className="h-[1.19rem] w-[5.26rem] relative tracking-[-0.76px] font-semibold inline-block shrink-0">
                                  Matheus
                                </div>
                                <div className="h-[0.91rem] w-[2.01rem] relative tracking-[-0.4px] text-black inline-block whitespace-nowrap">
                                  08:39
                                </div>
                              </div>
                              <div className="h-[0.89rem] flex flex-row items-center justify-start gap-[1.89rem] text-[0.72rem] text-darkslategray-100">
                                <div className="h-[0.91rem] w-[9.68rem] relative tracking-[-0.4px] inline-block">
                                  Bora jogar aquele Genshin?
                                </div>
                                <img
                                  className="h-[0.63rem] w-[1.09rem] relative"
                                  alt=""
                                  src="/-icon-double-tick.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-[2.56rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.44rem] pr-[0.11rem] pl-[0.33rem] box-border">
                          <div className="h-[2.17rem] flex-1 flex flex-row items-start justify-start gap-[0.67rem]">
                            <div className="h-[1.8rem] w-[2.25rem] relative">
                              <div className="absolute top-[0.02rem] left-[0.02rem] rounded-[50%] bg-whitesmoke w-full h-full" />
                              <img
                                className="absolute h-[85.49%] w-[85.43%] top-[5.86%] right-[6.91%] bottom-[8.64%] left-[7.65%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/1-22@2x.png"
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start">
                              <div className="self-stretch flex flex-row items-end justify-between gap-[1.11rem]">
                                <div className="h-[1.2rem] w-[3.89rem] relative tracking-[-0.76px] font-semibold inline-block shrink-0">
                                  Roberta
                                </div>
                                <div className="h-[0.91rem] w-[2.01rem] relative tracking-[-0.4px] text-black inline-block whitespace-nowrap">
                                  07:14
                                </div>
                              </div>
                              <div className="w-[12.56rem] h-[0.89rem] flex flex-row items-start justify-start gap-[1.61rem] text-[0.72rem] text-darkslategray-100">
                                <div className="h-[0.91rem] flex-1 relative tracking-[-0.39px] inline-block z-[1]">
                                  Baixa o kwai com o meu código, por...
                                </div>
                                <img
                                  className="h-[0.63rem] w-[1.09rem] relative"
                                  alt=""
                                  src="/-icon-double-tick-1.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.56rem] pr-[0rem] pl-[0.33rem]">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[0.61rem]">
                            <div className="h-[1.81rem] w-[2.25rem] relative">
                              <div className="absolute top-[-0.01rem] left-[0.02rem] rounded-[50%] bg-honeydew-200 w-full h-full" />
                              <img
                                className="absolute h-[85.23%] w-[85.43%] top-[9.54%] right-[5.43%] bottom-[5.23%] left-[9.14%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/27-18@2x.png"
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start pt-[0.11rem] px-[0rem] pb-[0rem]">
                              <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.11rem]">
                                  <div className="flex-1 flex flex-row items-end justify-between gap-[1.11rem]">
                                    <div className="h-[1.21rem] w-[4.24rem] relative tracking-[-0.76px] font-semibold inline-block shrink-0">
                                      Ângela
                                    </div>
                                    <div className="h-[0.91rem] w-[2.01rem] relative tracking-[-0.4px] text-black inline-block shrink-0 whitespace-nowrap">
                                      12:39
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[0.89rem] flex flex-row items-start justify-start gap-[1.94rem] text-[0.72rem] text-darkslategray-100">
                                  <div className="h-[0.91rem] w-[9.68rem] relative tracking-[-0.4px] inline-block">
                                    Bora jogar aquele Genshin?
                                  </div>
                                  <img
                                    className="h-[0.63rem] w-[1.09rem] relative"
                                    alt=""
                                    src="/-icon-double-tick-2.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.17rem] pl-[0.39rem]">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[0.5rem]">
                            <div className="h-[1.73rem] w-[2.25rem] relative">
                              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-lightcyan w-full h-full" />
                              <img
                                className="absolute h-[85.21%] w-[85.43%] top-[7.72%] right-[6.42%] bottom-[7.07%] left-[8.15%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/23-19@2x.png"
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem]">
                              <div className="self-stretch flex flex-row items-end justify-between gap-[1.11rem]">
                                <div className="h-[1.21rem] w-[4.24rem] relative tracking-[-0.76px] font-semibold inline-block shrink-0">
                                  Bruna
                                </div>
                                <div className="h-[0.91rem] w-[2.01rem] relative tracking-[-0.4px] text-black inline-block whitespace-nowrap">
                                  04:22
                                </div>
                              </div>
                              <div className="h-[0.89rem] flex flex-row items-start justify-start gap-[1.94rem] text-[0.72rem] text-darkslategray-100">
                                <div className="h-[0.91rem] w-[9.68rem] relative tracking-[-0.4px] inline-block">
                                  Bora jogar aquele Genshin?
                                </div>
                                <img
                                  className="h-[0.63rem] w-[1.09rem] relative"
                                  alt=""
                                  src="/-icon-double-tick-3.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[2.38rem] h-[2.28rem] relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/searchbtn.svg"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.22rem] pr-[1.11rem] pl-[0.89rem]">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[0.61rem]">
                        <div className="h-[1.81rem] w-[2.25rem] relative">
                          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-thistle w-full h-full" />
                          <img
                            className="absolute top-[0.2rem] left-[0.15rem] w-[1.92rem] h-[1.54rem] object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src="/personjohn-skin-tonewhite-posture11-party@2x.png"
                          />
                        </div>
                        <div className="h-[2.11rem] flex flex-col items-start justify-start py-[0rem] pr-[1.06rem] pl-[0rem] box-border gap-[0.06rem]">
                          <div className="w-[4.44rem] flex flex-row items-start justify-start py-[0rem] px-[0.11rem] box-border">
                            <div className="h-[1.21rem] flex-1 relative tracking-[-0.76px] font-semibold inline-block shrink-0">
                              Pedro
                            </div>
                          </div>
                          <div className="w-[9.68rem] h-[0.91rem] relative text-[0.72rem] tracking-[-0.4px] text-darkslategray-100 inline-block">
                            Bora jogar aquele Genshin?
                          </div>
                        </div>
                        <div className="h-[1.94rem] w-[2rem] flex flex-col items-start justify-start pt-[0.33rem] px-[0rem] pb-[0rem] box-border text-black">
                          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[0.06rem]">
                            <div className="self-stretch h-[0.91rem] relative tracking-[-0.4px] inline-block whitespace-nowrap">
                              01:01
                            </div>
                            <div className="h-[0.61rem] flex flex-row items-start justify-start py-[0rem] pr-[0.56rem] pl-[0.33rem] box-border">
                              <img
                                className="h-[0.63rem] w-[1.09rem] relative"
                                alt=""
                                src="/-icon-double-tick-4.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[18.22rem] h-[1.11rem] flex flex-row items-start justify-start pt-[0rem] pb-[1.11rem] pr-[1.33rem] pl-[0.94rem] box-border max-h-[1.39rem] lg:pb-[63.83rem] lg:box-border mq700:pb-[41.5rem] mq700:box-border">
                      <div className="flex-1 flex flex-col items-center justify-start gap-[1.56rem]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
                          <div className="h-[1.73rem] w-[2.25rem] relative">
                            <div className="absolute top-[-0.02rem] left-[0.01rem] rounded-[50%] bg-honeydew-100 w-full h-full" />
                            <img
                              className="absolute h-[85.21%] w-[85.43%] top-[11.74%] right-[10.12%] bottom-[3.05%] left-[4.44%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                              loading="lazy"
                              alt=""
                              src="/5-29@2x.png"
                            />
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem]">
                            <div className="self-stretch flex flex-row items-end justify-between gap-[1.11rem]">
                              <div className="h-[1.21rem] w-[4.24rem] relative tracking-[-0.76px] font-semibold inline-block shrink-0">
                                Maicon
                              </div>
                              <div className="h-[0.91rem] w-[2.01rem] relative tracking-[-0.4px] text-black inline-block whitespace-nowrap">
                                23:59
                              </div>
                            </div>
                            <div className="h-[0.89rem] flex flex-row items-start justify-start gap-[1.94rem] text-[0.72rem] text-darkslategray-100">
                              <div className="h-[0.91rem] w-[9.68rem] relative tracking-[-0.4px] inline-block">
                                Bora jogar aquele Genshin?
                              </div>
                              <img
                                className="h-[0.63rem] w-[1.09rem] relative"
                                alt=""
                                src="/-icon-double-tick-5.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-[7.33rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.17rem] box-border">
                          <button className="cursor-pointer [border:none] py-[0rem] pr-[0.83rem] pl-[0rem] bg-[transparent] flex-1 flex flex-row items-center justify-start">
                            <div
                              className="h-[2rem] flex-1 relative rounded-11xl bg-mediumslateblue cursor-pointer"
                              onClick={onCardClick}
                            />
                            <b className="h-[1.06rem] w-[5.22rem] relative text-[0.89rem] inline-block font-inter text-light-text-color text-left z-[1] ml-[-109px]">
                              Open Inbox
                            </b>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-[-3.44rem] h-[-99.22rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.11rem] box-border">
                      <div className="mb-[-1792px] h-[0rem] w-[12.56rem] relative">
                        <div className="absolute top-[-0.33rem] left-[0.28rem] rounded-[259.68px] bg-gray-200 w-[12rem] h-[0.33rem] hidden" />
                        <div className="absolute top-[0rem] left-[0rem] box-border w-full h-full border-t-[5px] border-solid border-black" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[9.89rem] rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[2.44rem] pr-[2.33rem] pl-[1.56rem] box-border gap-[1.89rem] max-w-full text-[0.89rem] text-gray-300 font-inter mq450:gap-[0.94rem] mq450:pr-[1.11rem] mq450:box-border">
                    <div className="h-[9.89rem] w-[17.94rem] relative rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] hidden max-w-full" />
                    <div className="h-[3.83rem] flex-1 flex flex-col items-start justify-start gap-[0.89rem]">
                      <div className="w-[5.5rem] h-[1.33rem] relative leading-[1.33rem] font-medium inline-block z-[1]">
                        Active Hours
                      </div>
                      <div className="flex-1 flex flex-row items-end justify-start gap-[0.11rem] text-center text-[1.11rem]">
                        <b className="h-[1.56rem] w-[5.44rem] relative leading-[1.56rem] inline-block whitespace-nowrap z-[1] mq450:text-[0.89rem] mq450:leading-[1.22rem]">
                          00:00 hrs
                        </b>
                        <div className="h-[1.33rem] w-[1.33rem] relative z-[1]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                          <img
                            className="absolute h-[62.5%] w-6/12 top-[20.83%] right-[25%] bottom-[16.67%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                            alt=""
                            src="/color-11.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-[4.22rem] w-[5.28rem] flex flex-col items-start justify-start pt-[0.22rem] px-[0rem] pb-[0rem] box-border">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                        loading="lazy"
                        alt=""
                        src="/-emoji-personal-computer.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.39rem] px-[0rem] pb-[0rem] box-border min-w-[19.17rem] max-w-full mq450:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[0.83rem] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[1.11rem] mq450:flex-wrap">
                    <ServiceToken
                      conversionRate="Served Tokens"
                      other08Progress02Circular="/10-other08-progress02-circular03-751@2x.png"
                      prop="25%"
                      cart="Cart:"
                      checkout="Checkout:"
                      purchase="Purchase:"
                      nameTextTextFrame="35%"
                      checkoutMonthGoalFrame="29%"
                      purchaseLeftLineFrame="25%"
                      propFlex="1"
                      propMinWidth="10.375rem"
                      propHeight1="7rem"
                      propAlignSelf="stretch"
                      propFlexDirection="column"
                      propMarginTop="-4.375rem"
                    />
                    <ServiceToken
                      conversionRate="Services"
                      other08Progress02Circular="/10-other08-progress02-circular03-75-11@2x.png"
                      prop="75%"
                      cart="Sold for:"
                      checkout="Month goal:"
                      purchase="Left:"
                      nameTextTextFrame="$15.000"
                      checkoutMonthGoalFrame="$20.000"
                      purchaseLeftLineFrame="$5.000"
                      propFlex="1"
                      propMinWidth="9.22rem"
                      propWidth="unset"
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
                  <RecentTransactions
                    propAlignSelf="stretch"
                    propPadding="0rem 1.125rem 0rem 0rem"
                    propBackgroundColor="#f5f6fa"
                    propWidth="26.438rem"
                    propGap="0rem 1.188rem"
                    propBackgroundColor1="#f5f6fa"
                    propWidth1="28rem"
                    propPadding2="0rem 0.063rem 0rem 0rem"
                    propGap1="0rem 1.188rem"
                    propBackgroundColor2="#f5f6fa"
                    propBackgroundColor3="#f5f6fa"
                    propWidth2="26.438rem"
                    propGap2="0rem 1.188rem"
                    propBackgroundColor4="#f5f6fa"
                    propWidth3="28rem"
                    propPadding4="0rem 0.063rem 0rem 0rem"
                    propGap3="0rem 1.188rem"
                    propBackgroundColor5="#f5f6fa"
                    propBackgroundColor6="#f5f6fa"
                    propWidth4="26.438rem"
                    propGap4="0rem 1.188rem"
                  />
                </div>
              </div>
              <div className="w-[14.17rem] rounded-md bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[4.72rem] pb-[13.94rem] pr-[1.11rem] pl-[1.22rem] box-border gap-[1.89rem] text-center text-[1.28rem] text-black mq450:gap-[0.94rem] mq700:pt-[3.06rem] mq700:pb-[9.06rem] mq700:box-border">
                <div className="w-[11.39rem] h-[3.35rem] relative rounded bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] hidden" />
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[2.72rem] pl-[1.11rem]">
                  <img
                    className="h-[6.86rem] w-[6.86rem] relative"
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.39rem] pr-[0.17rem] pl-[0.28rem]">
                  <h2 className="m-0 h-[3.39rem] flex-1 relative text-inherit leading-[1.67rem] font-medium font-inherit inline-block mq450:text-[1rem] mq450:leading-[1.33rem]">
                    Facing trouble with a customer?
                  </h2>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
                  <button className="cursor-pointer [border:none] pt-[1rem] px-[0.78rem] pb-[0.78rem] bg-mediumslateblue w-[11.39rem] h-[3.33rem] rounded-11xl flex flex-row items-center justify-center box-border whitespace-nowrap z-[1] hover:bg-dodgerblue-200">
                    <div className="h-[3.35rem] w-[11.39rem] relative rounded-11xl bg-mediumslateblue hidden" />
                    <b className="self-stretch w-[8.61rem] relative text-[1.11rem] leading-[1.11rem] inline-block font-inter text-light-text-color text-left z-[2]">
                      Start Recording
                    </b>
                  </button>
                  <button className="cursor-pointer [border:none] pt-[0.11rem] px-[0.11rem] pb-[0.17rem] bg-[transparent] self-stretch rounded-[353px] flex flex-row items-center justify-center">
                    <div className="self-stretch w-[11.39rem] relative rounded bg-light-text-color shadow-[0px_1px_4px_rgba(21,_34,_50,_0.08)] hidden" />
                    <div className="flex-1 rounded-11xl bg-red flex flex-row items-start justify-end pt-[1.11rem] pb-[1.56rem] pr-[0.56rem] pl-[2.06rem] whitespace-nowrap z-[1]">
                      <div className="h-[3.35rem] w-[11.39rem] relative rounded-11xl bg-red hidden" />
                      <b className="h-[0.67rem] flex-1 relative text-[1.11rem] leading-[0.67rem] inline-block font-inter text-aliceblue-200 text-left z-[2]">
                        Report Abuse
                      </b>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CStaff;
