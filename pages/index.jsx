import React from "react";
import Container from "~/components/layouts/Container";
import FeaturedProducts from "~/components/shared/sections/FeaturedProducts";
import BestDealOfWeek from "~/components/partials/homepages/sections/BestDealOfWeek";
import TopSellers from "~/components/partials/homepages/sections/TopSellers";
import Subscribe from "~/components/shared/sections/Subscribe";
import FollowInstagram from "~/components/shared/sections/FollowInstagram";
import LatestProducts from "~/components/partials/homepages/sections/LatestProducts";
import PopularCategories from "~/components/partials/homepages/sections/PopularCategories";
import HomeOnePromotions from "~/components/partials/homepages/home-1/HomeOnePromotions";
import HomeOneTopBanners from "~/components/partials/homepages/home-1/HomeOneTopBanners";
import PromotionSecureInformation from "~/components/shared/sections/PromotionSecureInformation";
import HomeOnePromotionsTwo from "~/components/partials/homepages/home-1/HomeOnePromotionsTwo";
import Testimonials from "~/components/shared/sections/Testimonials";
import HeaderDefault from "~/components/shared/headers/HeaderDefault";

const HomeDefaultPage = () => {
    return (
        <>
            {/**
        <Container
            title="1688-1688"
            header={<HeaderDefault classes="without-border" />}>
            <main id="homepage-one">
                <HomeOneTopBanners />
                <HomeOnePromotions />
                <PopularCategories />
                <LatestProducts />
                <div className="container">
                    <PromotionSecureInformation />
                </div>
                <BestDealOfWeek />
                <TopSellers />
                <HomeOnePromotionsTwo />
                <FeaturedProducts />
                <Testimonials />
                <FollowInstagram />
                <Subscribe />
            </main>
        </Container>
         */}

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

export default HomeDefaultPage;
