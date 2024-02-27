import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const CreateAccountBtn: NextPage = () => {
  const router = useRouter();

  const onTypeClick = useCallback(() => {
    router.push("/profile-custom-for-staff-for-n");
  }, [router]);

  return (
    <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[2.67rem] flex flex-row items-center justify-start relative max-w-full">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded" />
      <div
        className="h-[2.67rem] w-[23.33rem] relative rounded bg-mediumslateblue max-w-full cursor-pointer z-[1]"
        onClick={onTypeClick}
      />
      <div className="h-[1.33rem] w-[12.02rem] relative hidden z-[3]" />
      <div className="h-[1.33rem] w-[6.56rem] relative text-[0.89rem] leading-[1.33rem] font-inter text-light-text-color text-left inline-block z-[3] ml-[-269px]">
        Create Account
      </div>
    </button>
  );
};

export default CreateAccountBtn;
