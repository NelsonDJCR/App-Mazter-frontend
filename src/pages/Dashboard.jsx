import axios from "axios";
import React, { useEffect, useState } from "react";
import { configApi, urlApi } from "../helpers/helper";
const Dashboard = () => {
    const [totalSales, setTotalSales] = useState("");
    const [totalProductsRegister, setTotalProductsRegister] = useState("");

    useEffect(() => {
        axios
            .get(urlApi("dashboard_homeDetails"), configApi())
            .then(function (response) {
                setTotalSales(response.data.totalSales);
                setTotalProductsRegister(response.data.totalProductsRegister);
            });
    }, []);
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="page-title mazter__color__white">
                                Bienvenido name!
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-12">
                        <div className="card mazter__bg__secondary">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon bg-primary">
                                        <i className="far fa-user"></i>
                                    </span>
                                    <div className="dash-widget-info">
                                        <h3>{totalProductsRegister}</h3>
                                        <h6 className="text-muted">
                                            Productos registrados
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="card mazter__bg__secondary">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon bg-primary">
                                        <i className="fas fa-user-shield"></i>
                                    </span>
                                    <div className="dash-widget-info">
                                        <h3>{totalSales}</h3>
                                        <h6 className="text-muted">
                                            Total ventas
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
