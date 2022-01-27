import React from "react";

const ModuleHeaderNotice = ({ classes }) => {
    return (
        <div className={`ps-noti header__notice ${classes}`}>
            <div className="container">
                <p className="m-0">
                    COVID 19 로 인해 배송이 지연될 수 있습니다.
                </p>
            </div>
            {/**주석 */}
            <a className="ps-noti__close">
                <i className="icon-cross"></i>
            </a>
        </div>
    );
};

export default ModuleHeaderNotice;
