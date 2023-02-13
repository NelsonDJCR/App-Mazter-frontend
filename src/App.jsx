// import "./App.css";
import {
    Route,
    Routes,
    NavLink,
    Link,
    useParams,
    Outlet,
} from "react-router-dom";



const Tacos = () => {
    const { name } = useParams();
    return (
        <>
            <h1>Taco: {name}</h1>
            <h3>
                <Link to={"details"}> Detail</Link>
            </h3>
            <Outlet />
        </>
    );
};
const TacoDetail = () => {
    const { name } = useParams();
    return (
        <>
            <h3>Detail Taco {name} is.... gooood</h3>
        </>
    );
};
const Home = () => <h1>Home</h1>;
const SearchPage = () => {
    const tacos = ["Pastor", "Carnita", "Alambre"];
    return (
        <>
            <h1>Search Page</h1>
            <ul>
                {tacos.map((taco) => (
                    <>
                        <li key={taco}>
                            <Link to={`/tacos/` + taco}>{taco}</Link>
                        </li>
                    </>
                ))}
            </ul>
        </>
    );
};

const NotFound = () => {
    return (
        <>
            <h1>404 not Found</h1>
            <h5></h5>
        </>
    );
};

function App() {
    return (
        <div className="App">
            <h1>React Router dom</h1>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? "is-active" : undefined;
                        }}
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                <NavLink
                        className={({ isActive }) => {
                            return isActive ? "is-active" : undefined;
                        }}
                        to="/search-page"
                    >
                        SearchPage
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search-page" element={<SearchPage />} />
                <Route path="/tacos/:name" element={<Tacos />}>
                    <Route path="details" element={<TacoDetail />}></Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
