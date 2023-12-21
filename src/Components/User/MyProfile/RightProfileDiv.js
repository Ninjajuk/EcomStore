import React from "react";
import { AddnewAddressForm } from "./AddnewaddressForm";
import { ProfileDiv } from "./ProfileDiv";
import PersonalInformation from "./PersonalInformation";
import PersonalInfoCard from "./PersonalInformation";

const RightProfileDiv = () => {
  return (
    <>
      <ProfileDiv>
        <div className="max-w-full h-full flex items-center ">
          <PersonalInfoCard />
        </div>
      </ProfileDiv>
    </>
  );
};

export default RightProfileDiv;
