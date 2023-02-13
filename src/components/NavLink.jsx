import { NavLink as NavLinkReactRourter } from "react-router-dom";

export const NavLink = ({ to, children, ...props }) => {
    return (
        <NavLinkReactRourter
            {...props}
            className={({ isActive }) => {
                return isActive ? "is-active" : undefined;
            }}
            to={to}
        >
            {children}
        </NavLinkReactRourter>
    );
};
