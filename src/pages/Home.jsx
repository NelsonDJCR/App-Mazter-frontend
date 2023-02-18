import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {

    return (
        <div id="page-top">
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container px-5">
                    <a className="navbar-brand" href="#page-top">
                        <img
                            className="img__main"
                            src="https://i.postimg.cc/W4TmMpj2/image-2023-02-12-091206780.png"
                            alt=""
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id=".navbarResponsive"
                    >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item link__hover">
                   

                                <Link className="nav-link" to={"/login"}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <style>
        .s {
            background: rgb(247, 178, 17);
        }
    </style> */}
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container px-5">
                        <h1 className="masthead-heading mb-0">
                            You control your Business
                        </h1>
                        <h2 className="masthead-subheading mb-0">
                            All in one click
                        </h2>
                        <a
                            className="btn btn-mazter btn-xl rounded-pill mt-5"
                            href="#scroll"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="bg-circle-1 bg-circle"></div>
                <div className="bg-circle-2 bg-circle"></div>
                <div className="bg-circle-3 bg-circle"></div>
                <div className="bg-circle-4 bg-circle"></div>
            </header>
            <section id="scroll">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <img
                                    className="img-fluid rounded-circle"
                                    src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4">
                                    Software de gestión económico y de alta
                                    calidad
                                </h2>
                                <p>
                                    Ahorra dinero y aumenta tu eficiencia con
                                    nuestro software de gestión de tareas.
                                    Ofrecemos precios asequibles sin comprometer
                                    la calidad y las funcionalidades avanzadas
                                    que necesitas para mantener tu negocio
                                    organizado y en marcha. Con nuestro
                                    software, obtendrás un valor inigualable que
                                    te permitirá ahorrar tiempo y esfuerzo
                                    mientras mejoras la productividad de tu
                                    negocio. ¡No esperes más y descubre por qué
                                    nuestros precios económicos valen cada
                                    centavo!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="p-5">
                                <img
                                    className="img-fluid rounded-circle"
                                    src="https://images.pexels.com/photos/375897/pexels-photo-375897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <h4 className="display-4">
                                    Mantén tu negocio organizado y productivo
                                </h4>

                                <p>
                                    Mantén tu negocio organizado y en control
                                    con nuestro sistema de gestión. Nuestro
                                    sistema te permite asignar, priorizar y
                                    monitorear tus productos de manera
                                    eficiente. Con una interfaz intuitiva y
                                    fácil de usar, puedes ahorrar tiempo y
                                    esfuerzo mientras te enfocas en lo que es
                                    importante para ti y tu negocio. Además, con
                                    nuestra tecnología avanzada, puedes estar
                                    seguro de que nunca perderás una tarea o una
                                    fecha límite importante. ¡Empieza a ver los
                                    resultados de un negocio más organizado y
                                    productivo con nuestro sistema de
                                    administración y gestión!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5">
                                <img
                                    className="img-fluid rounded-circle"
                                    src="https://i.postimg.cc/9MTR21fL/image-2023-02-12-164118839.png"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h2 className="display-4">
                                    Pagos Nequi{" "}
                                    <span className="coming-soon">
                                        Próximamente
                                    </span>{" "}
                                </h2>
                                <p>
                                    Ahora puedes hacer los pagos de tus clientes
                                    de manera rápida y segura con notificaciones
                                    push de Nequi. Ya no es necesario que
                                    inicies sesión o te desplaces a una sucursal
                                    para realizar tus transacciones. Con solo
                                    recibir la notificación push, puedes
                                    confirmar el pago de manera instantánea y
                                    sin problemas. ¡Empieza a disfrutar de la
                                    comodidad de hacer pagos por notificación
                                    push de Nequi hoy mismo!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="py-5 bg-black">
                <div className="container px-5">
                    <p className="m-0 text-center text-white small">
                        Copyright &copy; Mazter 2023
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
