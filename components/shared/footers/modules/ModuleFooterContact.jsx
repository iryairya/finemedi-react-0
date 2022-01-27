import React from "react";

const ModuleFooterContact = () => {
    return (
        <div className="ps-footer--contact">
            <h5 className="ps-footer__title">문의전화</h5>
            <div className="ps-footer__fax">
                <i className="icon-telephone"></i>
                1688 - 1688
            </div>
            <p className="ps-footer__work">
                월 - 금 : 9:00 - 20:00
                <br />
                &nbsp;&nbsp;토&nbsp;: 9:00 - 15:00
            </p>
            <hr />
            <p>
                <a className="ps-footer__email" href="mailto:admin@finemedi.kr">
                    {" "}
                    <i className="icon-envelope"></i>
                    admin@finemedi.kr{" "}
                </a>
            </p>
        </div>
    );
};

export default ModuleFooterContact;
