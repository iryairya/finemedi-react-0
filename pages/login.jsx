import React from "react";
import Container from "~/components/layouts/Container";
import { signin } from "../service/MemberService";

const MyAccountScreen = (props) => {
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const email = data.get("email");
        const password = data.get("password");
        // MemberService의 signin 메서드를 사용 해 로그인.
        signin({ email: email, password: password });
    }

    return (
        <Container title="로그인">
            <div className="ps-page ps-page--inner ">
                <div className="container">
                    <div className="ps-page__header"></div>
                    <div className="ps-page__content ps-account">
                        <form noValidate onSubmit={(e) => handleSubmit(e)}>
                            <div className="ps-form--review">
                                <h2 className="ps-form__title">로그인</h2>
                                <div className="ps-form__group">
                                    <label className="ps-form__label">
                                        이메일 주소 *
                                    </label>
                                    <input
                                        className="form-control ps-form__input"
                                        type="email"
                                        name="email"
                                        placeholder="이메일을 입력하세요."
                                    />
                                </div>
                                <div className="ps-form__group">
                                    <label className="ps-form__label">
                                        비밀번호 *
                                    </label>
                                    <div className="input-group">
                                        <input
                                            className="form-control ps-form__input"
                                            type="password"
                                            name="password"
                                            placeholder="비밀번호를 입력하세요."
                                        />
                                        <div className="input-group-append">
                                            <a
                                                className="fa fa-eye-slash toogle-password"
                                                href="#"></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ps-form__submit">
                                    <button
                                        className="ps-btn ps-btn--warning"
                                        type="submit">
                                        로그인
                                    </button>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="remember"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="remember">
                                            아이디저장
                                        </label>
                                    </div>
                                </div>
                                <a
                                    className="ps-account__link"
                                    href="forget-password">
                                    비밀번호 찾기
                                </a>
                                <a className="ps-account__link" href="join">
                                    회원가입
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MyAccountScreen;
