import { NavLink } from "./NavLink";

const index = () => {
    return (
        <div>
            <h1>React Router dom</h1>
            <ul>
                <li>
                    <NavLink to="/">Home </NavLink>
                </li>
                <li>
                    <NavLink to="/search-page">SearchPage</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default index;
