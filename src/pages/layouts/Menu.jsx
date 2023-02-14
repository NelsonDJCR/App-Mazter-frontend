import { Link } from "react-router-dom";
import { NavLink } from "../../components/NavLink";
const Menu = () => {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-logo">
                <Link href="index.html">
                    <img
                        src="https://i.postimg.cc/W4TmMpj2/image-2023-02-12-091206780.png"
                        className="img-fluid mazter__logo__menu"
                        alt=""
                    />
                </Link>
            </div>
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <li className="menu-title">
                        <span>Menú Manager</span>
                    </li>
                    <ul>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                            <NavLink to="/cash-register">Cash register</NavLink>
                            <NavLink to="/product-add ">Add product</NavLink>
                            <NavLink to="/product-list">List product</NavLink>
                        </li>
                    </ul>
                </div>
                <div
                    className="align-items-end"
                    style={{ position: "absolute", bottom: "0" }}
                >
                    <p style={{ fontSize: " 12px" }}>
                        © Mazter 2022 - power by
                        <i className="text-primary">NelsonDJCR</i> v 1.0
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Menu;
