import React, { useEffect, useState } from "react";
import FormSearchHeader from "~/components/shared/forms/FormSearchHeader";
import ModuleHeaderActions from "~/components/shared/headers/modules/ModuleHeaderActions";
import ModuleHeaderNotice from "~/components/shared/headers/modules/ModuleHeaderNotice";
import NavigationPrimary from "~/components/shared/navigations/NavigationPrimary";
import Logo from "~/components/elements/basic/Logo";
import ModuleHeaderSwichers from "~/components/shared/headers/modules/ModuleHeaderSwitcher";
import ModuleHeaderContactNumber from "~/components/shared/headers/modules/ModuleHeaderContactNumber";

const HeaderDefault = ({ classes = "" }) => {
    const [showNav, setShowNav] = useState(true);

    function handleShownav(e) {
        e.preventDefault();
        if (showNav) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    }

    function handleStickyHeader() {
        let number =
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        const header = document.getElementById("header-sticky");
        if (header !== null) {
            if (number >= 300) {
                header.classList.add("header--sticky");
                setShowNav(false);
            } else {
                header.classList.remove("header--sticky");
                setShowNav(true);
            }
        }
    }

    useEffect(() => {
        if (process.browser) {
            window.addEventListener("scroll", handleStickyHeader);
        }
    }, []);

    return (
        <header
            className={`header--desktop header--one ${classes}`}
            id="header-sticky">
            {/** 알림 바 */}
            {/** <ModuleHeaderNotice />*/}
            <div className="header__top">
                <div className="container">
                    <div className="header__left">
                        <Logo />
                    </div>
                    <div
                        className={`header__center ${showNav ? "active" : ""}`}>
                        <NavigationPrimary />
                    </div>
                    <div className="header__right">
                        <ModuleHeaderContactNumber />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderDefault;
