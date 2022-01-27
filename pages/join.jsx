import React from "react";
import Container from "~/components/layouts/Container";
import { signup } from "../service/MemberService";

const MyAccountScreen = (props) => {
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");
        signup({ email: email, username: username, password: password }).then(
            (response) => {
                window.location.href = "/login";
            }
        );
    }

    return (
        <Container title="회원가입">
            <div className="ps-page ps-page--inner ">
                <div className="container">
                    <div className="ps-page__header"></div>
                    <div className="ps-page__content ps-account">
                        <form noValidate onSubmit={(e) => handleSubmit(e)}>
                            <div className="ps-form--review">
                                <h2 className="ps-form__title">회원가입</h2>
                                <div className="ps-form__group">
                                    <label className="ps-form__label">
                                        이 름 *
                                    </label>
                                    <input
                                        className="form-control ps-form__input"
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="이름을 입력하세요."
                                    />
                                </div>
                                <div className="ps-form__group">
                                    <label className="ps-form__label">
                                        이메일 주소 *
                                    </label>
                                    <input
                                        className="form-control ps-form__input"
                                        type="email"
                                        name="email"
                                        id="email"
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
                                            id="password"
                                            placeholder="비밀번호를 입력하세요."
                                        />
                                        <div className="input-group-append">
                                            <a
                                                className="fa fa-eye-slash toogle-password"
                                                href="#"></a>
                                        </div>
                                    </div>
                                    <p className="ps-form__text">
                                        비밀번호는 영문 대문자, 소문자, 숫자,
                                        특수문자를 조합하여 12~20자 사이로
                                        만들어 주세요.
                                    </p>
                                </div>
                                <div className="ps-form__submit">
                                    <button
                                        className="ps-btn ps-btn--warning"
                                        type="submit">
                                        회원가입
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MyAccountScreen;
