import React, { useEffect } from "react";
import Link from "next/link";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";

import LatestProducts from "~/components/partials/homepages/sections/LatestProducts";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },
    {
        id: 2,
        text: " 404",
    },
];

function Error({}) {
    return (
        <Container title="Page not found">
            <div className="ps-page ps-page--inner ps-page--notfound">
                <div className="container">
                    <div className="ps-page__header">
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <div className="ps-page__content">
                        <div className="row mb-80">
                            <div className="col-12 col-md-6 col-lg-5">
                                <img
                                    src="/static/img/cartoon-doctor.jpg"
                                    alt="cartoon-doctor"
                                />
                            </div>
                            <div className="col-12 col-md-6 col-lg-7">
                                <h1 className="ps-page__name">404</h1>
                                <h5>이 페이지는 찾을 수 없습니다.</h5>
                                <p>
                                    홈페이지로 돌아가시거나 아래의 전화번호로
                                    문의해주세요.
                                </p>
                                <div>
                                    <Link href="/">
                                        <a className="ps-btn ps-btn--primary">
                                            홈으로 가기
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <LatestProducts />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Error;
