import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ContinueWithPhoneNumberBtn1 from "./continue-with-phone-number-btn1";
import ContinueWithFingerprintBtn from "./continue-with-fingerprint-btn";

type ContinuewithphonenumberbtnType = {
  /** Style props */
  propDisplay?: CSSProperties["display"];
  propDisplay1?: CSSProperties["display"];
};

const Continuewithphonenumberbtn: NextPage<ContinuewithphonenumberbtnType> = ({
  propDisplay,
  propDisplay1,
}) => {
  const continueWithPhoneStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const textTypeStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.39rem] box-border max-w-full text-left text-[0.89rem] text-mediumslateblue font-inter">
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.89rem] max-w-full">
        <ContinueWithPhoneNumberBtn1 />
        <ContinueWithFingerprintBtn />
      </div>
    </div>
  );
};

export default Continuewithphonenumberbtn;
