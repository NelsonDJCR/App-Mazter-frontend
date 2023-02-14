import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { configApi, urlApi } from "../helpers/helper";
import { useNavigate } from "react-router-dom";
const ProductAdd = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        axios

            .post(urlApi("products/save"), data, configApi())
            .then(function () {
                Swal.fire({
                    title: "Producto registrado",
                    text: "¿Desea agregar otro producto?",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                }).then((result) => {
                    if (result.value) {
                        resetForm();
                    } else {
                        navigate("/product-list");
                    }
                });
            })
            .catch(function () {
                // if (r.response.status === 406) {
                //     Swal.fire({
                //         title: r.response.data,
                //         text: "",
                //         icon: "warning",
                //         confirmButtonText: "Aceptar",
                //     });
                // } else {
                //     alert("error");
                // }
            });
    };

    function resetForm() {
        document.getElementById("form-add-product").reset();
        document.getElementById("stock").blur();
    }

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col">
                            <h3 className="page-">Agregar producto</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mazter__card__none__color">
                            <div className="card-body">
                                <form
                                    autoComplete="off"
                                    onSubmit={handleSubmit(onSubmit)}
                                    id="form-add-product"
                                >
                                    <div className="row">
                                        <div className="col-xl-3 box__img__product">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
                                                className="mazter__img__add__product"
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-xl-9 mazter__bg__secondary p-2">
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label">
                                                    Product name
                                                </label>
                                                <div className="col-lg-9">
                                                    <input
                                                        id="name"
                                                        autoFocus
                                                        type="text"
                                                        className="form-control"
                                                        {...register(
                                                            "product_name",
                                                            {
                                                                required: true,
                                                                maxLength: 15,
                                                            }
                                                        )}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label">
                                                    Precio de compra
                                                </label>
                                                <div className="col-lg-9">
                                                    <input
                                                        id="purshase_price"
                                                        type="text"
                                                        className="form-control"
                                                        {...register(
                                                            "purshase_price",
                                                            {
                                                                required: true,
                                                            }
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label">
                                                    de venta
                                                </label>
                                                <div className="col-lg-9">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        {...register("price", {
                                                            required: true,
                                                        })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label">
                                                    Unidades disonibles
                                                </label>
                                                <div className="col-lg-9">
                                                    <input
                                                        id="stock"
                                                        type="text"
                                                        className="form-control"
                                                        {...register("stock", {
                                                            required: true,
                                                        })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label">
                                                    de barras
                                                </label>
                                                <div className="col-lg-9">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        {...register(
                                                            "barcode",
                                                            {
                                                                required: false,
                                                            }
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <button
                                            type="submit"
                                            className="btn mazter__btn__primary mt-4"
                                        >
                                            Agregar producto x
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductAdd;
