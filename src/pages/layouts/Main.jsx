import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../css/admin.css";
import "../../css/App.css";
import "../../css/Xd.css";
import $ from "jquery";
import "../../css/font-awesome.min.css";
import "../../plugins/fontawesome/css/all.min.css";
import Menu from "./Menu";
import { configApi, urlApi } from "../../helpers/helper";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

$(".page-wrapper,.header").on("click", function () {
    if ($(".slide-nav") !== null) {
        var $wrapper = $(".main-wrapper");
        $wrapper.removeClass("slide-nav");
        $(".sidebar-overlay").removeClass("opened");
        $("html").removeClass("menu-opened");
    }
});
$(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
        $(".header").addClass("fixed-header");
    } else {
        $(".header").removeClass("fixed-header");
    }
});
function showMenu() {
    var $wrapper = $(".main-wrapper");
    $wrapper.toggleClass("slide-nav");
    $(".sidebar-overlay").toggleClass("opened");
    $("html").addClass("menu-opened");
}

const Main = (props) => {
    const authCtx = useContext(AuthContext);
    const userCtx = useContext(UserContext);
    const logout = () => {
        axios.get(urlApi("logout"), configApi()).then(function (response) {
            authCtx.setAuth(false);
            userCtx.setUser(false);
            localStorage.clear();
            window.location.href = "/";
        });
    };

    return (
        <div className="main-wrapper">
            <div className="header">
                <div className="header-left">
                    <Link href="/" className="logo logo-small">
                        <img
                            src="https://i.postimg.cc/W4TmMpj2/image-2023-02-12-091206780.png"
                            alt="Logo"
                            width="30"
                            height="30"
                        />
                    </Link>
                </div>
                <Link className="mobile_btn" onClick={showMenu} id="mobile_btn">
                    <i className="fas fa-align-left"></i>
                </Link>
                <ul className="nav user-menu">
                    <li className="nav-item dropdown noti-dropdown">
                        <Link
                            className="dropdown-toggle nav-link mazter__icon__logout"
                            data-toggle="dropdown"
                            onClick={logout}
                        >
                            <i
                                className="fa fa-power-off mazter__color__white"
                                aria-hidden="true"
                            ></i>
                        </Link>
                    </li>
                </ul>
            </div>
            <Menu />
            {props.children}
        </div>
    );
};

export default Main;
