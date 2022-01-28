import React from "react";

const CommingSoonScreen = () => {
    return (
        <>
            <div
                className="ps-coming ps-coming--v1"
                data-background="img/bg-comming-soon.jpg"
                style={{
                    background: "url(/static/img/bg-comming-soon.jpg)",
                }}>
                <div className="container">
                    <div className="ready-logo">
                        <img src="/static/img/logo.png" alt="logo" />
                    </div>
                    <div className="ps-coming__content">
                        <h1 className="ps-coming__title">서비스 준비중</h1>
                        <p className="ps-coming__text">
                            빠른 시일내에 서비스를 제공할 수 있도록
                            노력하겠습니다.
                            <br />
                            감사합니다.
                            <br />
                            문의전화 : 010-5568-8202
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommingSoonScreen;
