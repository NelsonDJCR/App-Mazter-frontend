import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import ModalProductUpdate from "../components/modals/ModalProductUpdate";
import { configApi, urlApi } from "../helpers/helper";

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setListProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [hideFilter, statusHideFilter] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [productId, setProductId] = useState(0);
    const [updateTable, setUpdateTable] = useState("");

    function handleShowModal(product_id) {
        setProductId(product_id);
        setShowModal(!showModal);
    }

    useEffect(() => {
        function getProducts() {
            axios
                .get(urlApi("products/get"), configApi())
                .then(function (r) {
                    setListProducts(r.data);
                })
                .catch(function (r) {
                    
                });
        }
        getProducts();
    }, [navigate, updateTable]);

    function toggleFilters() {
        statusHideFilter(false);
        setShow(!show);
    }

    function deleteRegister(product_id) {
        Swal.fire({
            title: "Eliminar registro",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FF0080",
            cancelButtonColor: "#bebebe",
            confirmButtonText: "Eliminar",
            cancelButtonText: "cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                const data = {
                    product_id: product_id,
                };
                axios
                    .post(urlApi("products/delete"), data, configApi())
                    .then(function (r) {
                        setListProducts(r.data);
                        Swal.fire("Eliminado!", "", "success");
                    })
                    .catch(function (r) {
                        if (r.response.data.message === "Unauthenticated.") {
                            sessionStorage.clear();
                            navigate("/auth/login");
                        }
                    });
            }
        });
    }

    return (
        <div>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col">
                                <h3 className="page-title mazter__color__white">
                                    Lista de productos
                                </h3>
                            </div>
                            <div className="col-auto text-right">
                                <Link
                                    className={`btn btn-white filter-btn ${
                                        show ? "filter-btn-select" : null
                                    }`}
                                    onClick={() => {
                                        toggleFilters();
                                    }}
                                    id="filter_search"
                                >
                                    <i className="fas fa-filter"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`card mazter__bg__secondary filter-card 
			
			${hideFilter ? "d-none" : "d-block"} 
			${show ? "show-element" : "hide-element"} 
			
			`}
                        id=""
                    >
                        <div className="card-body pb-0">
                            <form action="#">
                                <div className="row filter-row">
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <label>Provider</label>
                                            <select className="form-control select">
                                                <option>Select Provider</option>
                                                <option>Thomas Herzberg</option>
                                                <option>Matthew Garcia</option>
                                                <option>Yolanda Potter</option>
                                                <option>
                                                    Ricardo Flemings
                                                </option>
                                                <option>Maritza Wasson</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <label>Status</label>
                                            <select className="form-control select">
                                                <option>Select Status</option>
                                                <option>Pending</option>
                                                <option>Inprogress</option>
                                                <option>
                                                    Completed (Provider)
                                                </option>
                                                <option>Accepted</option>
                                                <option>Rejected</option>
                                                <option>
                                                    Cancelled (Provider)
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <label>From Date</label>
                                            <div className="cal-icon">
                                                <input
                                                    className="form-control datetimepicker"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <label>To Date</label>
                                            <div className="cal-icon">
                                                <input
                                                    className="form-control datetimepicker"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <button
                                                className="btn mazter__btn__primary btn-block"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mazter__bg__secondary">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-center mb-0 datatable table__custom">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Producto</th>
                                                    <th>Precio</th>
                                                    <th>U. disponibles</th>
                                                    <th>Ventas</th>
                                                    <th>Estado</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.map((i, count) => {
                                                    return (
                                                        <tr key={count}>
                                                            <td>
                                                                {i.product_id}
                                                            </td>
                                                            <td>
                                                                {i.product_name}
                                                            </td>
                                                            <td>$ {i.price}</td>
                                                            <td>{i.stock}</td>
                                                            <td>
                                                                {
                                                                    i.product_sales
                                                                }
                                                            </td>
                                                            <td>
                                                                {i.state === 1
                                                                    ? "active"
                                                                    : "inactive"}
                                                            </td>

                                                            <td>
                                                                <Link
                                                                    onClick={() => {
                                                                        handleShowModal(
                                                                            i.product_id
                                                                        );
                                                                    }}
                                                                    href="edit-ratingstype.html"
                                                                    className="table-action-btn btn btn-sm bg-success-light"
                                                                >
                                                                    <i className="far fa-edit mr-1"></i>
                                                                    &nbsp; Edit
                                                                    &nbsp;&nbsp;
                                                                </Link>
                                                                <br />
                                                                <Link
                                                                    onClick={() => {
                                                                        deleteRegister(
                                                                            i.product_id
                                                                        );
                                                                    }}
                                                                    href="edit-ratingstype.html"
                                                                    className="table-action-btn btn btn-sm bg-danger-light"
                                                                >
                                                                    <i className="far fa-edit mr-1"></i>
                                                                    Delete
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <div className="row mt-5	">
                                        <div className="col-sm-12 col-md-4">
                                            <div
                                                className=""
                                                id=""
                                                role="status"
                                                aria-live="polite"
                                            >
                                                Showing 1 to 10 of 10 entries
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-8">
                                            <div
                                                className="dataTables_paginate paging_simple_numbers"
                                                id=""
                                            >
                                                <ul className="pagination">
                                                    <li className="paginate_button page-item previous disabled">
                                                        <Link
                                                            href="#"
                                                            className="page-link"
                                                        >
                                                            Previous
                                                        </Link>
                                                    </li>
                                                    <li className="paginate_button page-item active">
                                                        <Link
                                                            href="#"
                                                            className="page-link"
                                                        >
                                                            1
                                                        </Link>
                                                    </li>
                                                    <li className="paginate_button page-item">
                                                        <Link
                                                            href="#"
                                                            className="page-link"
                                                        >
                                                            2
                                                        </Link>
                                                    </li>
                                                    <li className="paginate_button page-item next disabled">
                                                        <Link
                                                            href="#"
                                                            className="page-link"
                                                        >
                                                            Next
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {showModal ? (
                // <ModalProductUpdate
                    showModal={showModal}
                    setUpdateTable={setUpdateTable}
                    productId={productId}
                    setShowModal={setShowModal}
                />
            ) : (
                false
            )} */}
        </div>
    );
};

export default ProductList;
