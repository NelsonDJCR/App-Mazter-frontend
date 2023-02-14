import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { configApi, urlApi } from "../helpers/helper";
import "../css/App.css";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [msgErrorLogin, setMsgErrorLogin] = useState("");
    const navigate = useNavigate();

    function login(data) {
        axios
            .post(urlApi("login"), data, configApi())
            .then(function (r) {
                userData.setResponse({
                    name: r.data.name,
                    role: r.data.role_id,
                    auth: true,
                    bearer: r.data.token,
                });
                localStorage.setItem("bearer", r.data.token);
                routeChange();
            })
            .catch(function () {
                setMsgErrorLogin("Datos incorrectos intente nuevamente");
            });
    }
    const routeChange = () => {
        let path = `/app/dashboard`;
        navigate(path);
    };
    return (
        <div>
            <div className="main-wrapper">
                <div className="login-page">
                    <div className="login-body container">
                        <div className="loginbox">
                            <div className="login-right-wrap">
                                <div className="account-header">
                                    <div className="account-logo text-center mb-4">
                                        <a href="index.html">
                                            <img
                                                src="https://i.postimg.cc/HkWqWyPm/image-2023-02-12-094307904.png"
                                                alt="Logo Mazter"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="login-header">
                                    <h3>
                                        Login <span>Mazter</span>
                                    </h3>
                                    <p className="text-muted">
                                        Access to our dashboard
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit(login)}>
                                    <div className="form-group">
                                        <label className="control-label">
                                            Username
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            {...register("email", {
                                                required: false,
                                                maxLength: 100,
                                            })}
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label className="control-label">
                                            Password
                                        </label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            {...register("password", {
                                                required: false,
                                                maxLength: 100,
                                            })}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button
                                            className="btn mazter__btn__primary btn-block account-btn"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                                <p className="text-primary mt-3">
                                    {msgErrorLogin}
                                </p>

                                <div className="login-or">
                                    <span className="or-line"></span>
                                    <span className="span-or">or</span>
                                </div>

                                <div className="text-center forgotpass mt-4">
                                    <a href="forgot-password.html">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
