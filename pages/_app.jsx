import React, { useEffect } from "react";
import { wrapper } from "../store/store";
import MasterLayout from "~/components/layouts/MasterLayout";
import { CookiesProvider } from "react-cookie";
import "swiper/swiper-bundle.min.css";
import "antd/dist/antd.compact.min.css";
import "~/public/static/css/bootstrap.min.css";
import "~/public/static/fonts/feather-font/css/iconfont.css";
import "~/public/static/fonts/Linearicons/Font/demo-files/demo.css";
import "~/public/static/fonts/font-awesome/css/font-awesome.min.css";
import "~/public/static/css/style.min.css";
import "~/public/static/css/slick.min.css";
import "~/styles/scss/home-1.scss";
import "~/styles/platform/custom.scss";
import "~/styles/platform/themes/home-one.scss";
import Head from "next/head";

function App({ Component, pageProps }) {
    useEffect(() => {
        setTimeout(function () {
            document.getElementById("__next").classList.add("ps-loaded");
        }, 100);
    });

    return (
        <>
            {/**
        <CookiesProvider>
            <MasterLayout>
                <Component {...pageProps} />
            </MasterLayout>
        </CookiesProvider> */}
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
                            문의 : fineman@finemedi.kr, 031-772-5282,
                            010-5568-8202
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default wrapper.withRedux(App);
