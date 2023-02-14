import React from "react";
import "../../css/admin.css";
import "../../css/App.css";
import "../../css/Xd.css";
import $ from "jquery";
// import "../../plugins/jquery/index";
// import "../../plugins/jquery/index";
import "../../css/font-awesome.min.css";
import "../../plugins/fontawesome/css/all.min.css";

import { Link } from "react-router-dom";
import Menu from "./Menu";
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
const Main = (props) => {
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
                <Link className="mobile_btn" id="mobile_btn">
                    <i className="fas fa-align-left"></i>
                </Link>
                <ul className="nav user-menu">
                    <li className="nav-item dropdown noti-dropdown">
                        <Link
                            className="dropdown-toggle nav-link mazter__icon__logout"
                            data-toggle="dropdown"
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
