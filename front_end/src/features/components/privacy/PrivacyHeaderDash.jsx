// @ts-nocheck
import React from "react"
import Navigation from "../../navigation/Navigation"
import NavHeader from "../../toolbox/navheader/NavHeader"
// !----------------------------------------------------------
import blackThinkWiseLogo from "./../common/assets/svg/navigation-white-logo.svg"

const PrivacyHeaderDash = ({headerText, isPrivacy}) => {
    return (
        <div>
            <NavHeader
                textColor={"nav-header-text-white"}
                borderBgColor={"nav-header-border-white"}/>
            <Navigation
                logo={blackThinkWiseLogo}
                enable={false}
                textColor="text-white"
                bgColor="bg-white"
                isPrivacy={isPrivacy}/>
        </div>
    );
};

export default PrivacyHeaderDash