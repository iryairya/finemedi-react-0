import React from "react";
import ActiveLink from "~/components/elements/basic/ActiveLink";
import Logo from "~/components/elements/basic/Logo";
import Link from "next/link";

const ModuleFooterAddress = () => {
    return (
        <div className="ps-footer--address">
            <Logo />
            <div className="ps-footer__title">Our store</div>
            <p>
                경기도 양평군 양평읍 중앙로167번길 62
                <br />
                양평벽산블루밍아파트2단지 상가 204호
            </p>
            <p>
                <Link href="/">
                    <a target="_blank">위치보기</a>
                </Link>
            </p>
            <ul className="ps-social">
                <li>
                    <a className="ps-social__link facebook" href="#">
                        <i className="fa fa-facebook"> </i>
                        <span className="ps-tooltip">Facebook</span>
                    </a>
                </li>
                <li>
                    <a className="ps-social__link instagram" href="#">
                        <i className="fa fa-instagram"></i>
                        <span className="ps-tooltip">Instagram</span>
                    </a>
                </li>
                <li>
                    <a className="ps-social__link youtube" href="#">
                        <i className="fa fa-youtube-play"></i>
                        <span className="ps-tooltip">Youtube</span>
                    </a>
                </li>
                <li>
                    <a className="ps-social__link pinterest" href="#">
                        <i className="fa fa-pinterest-p"></i>
                        <span className="ps-tooltip">Pinterest</span>
                    </a>
                </li>
                <li>
                    <a className="ps-social__link linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                        <span className="ps-tooltip">Linkedin</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ModuleFooterAddress;
