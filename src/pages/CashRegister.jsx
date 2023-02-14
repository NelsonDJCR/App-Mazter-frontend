/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Select from "react-select";
import $ from "jquery";
import axios from "axios";
import { useForm } from "react-hook-form";
import { configApi, urlApi } from "../helpers/helper";
import TabsCashRegister from "../components/cashRegister/TabsCashRegister";

const CashRegister = () => {
    const [cartShowing, setCartShowing] = useState();
    const [options, setOptions] = useState({});
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [total, setTotal] = useState(0);
    const { register, handleSubmit } = useForm();
    const [tabs, setTabs] = useState(null);
    const [productsShowing, setProductsShowing] = useState();

    useEffect(() => {
        axios
            .post(urlApi("getProductShoppingCart"), {}, configApi())
            .then(function (r) {
                setTabs(r.data.carts);
                setTotal(r.data.total_first_cart);
                if (r.data.carts.length) {
                    setProductsShowing(r.data.carts[0].get_list_products);
                    setCartShowing(r.data.carts[0].shopping_cart_id);
                } else {
                    setProductsShowing(null);
                    setCartShowing(null);
                }
            });
    }, []);

    const handleChange = (event) => {
        setIsSubscribed((current) => !current);
        getListProducts();
    };
    function getListProducts() {
        axios
            .get(urlApi("products/getProductsSelect"), configApi())
            .then(function (r) {
                setOptions(r.data);
            });
    }
    function searchByBarCode(value) {
        var filter =
            typeof value == "number" ? value : $("#inputBarcode").val();
        var typeFilter = typeof value == "number" ? "product_id" : "barcode";
        $("#inputBarcode").val("");
        const data = {
            filter: filter,
            shopping_cart_id: cartShowing,
            typeFilter: typeFilter,
        };

        axios
            .post(urlApi("registerProductShoppingCart"), data, configApi())
            .then(function (r) {
                console.log(r);
                setTotal(r.data.total);
                setProductsShowing(r.data.carts[0].get_list_products);
                setCartShowing(r.data.carts[0].shopping_cart_id);
                setTabs(r.data.all_carts);
            });
    }
    function findByWords(product_id) {
        searchByBarCode(product_id);
    }
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col">
                                <h3 className="page-title mazter__color__white">
                                    Caja de ventas 
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mazter__bg__secondary">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="form-group row">
                                                <label className="col-lg-6 col-form-label">
                                                    <span className="text-primary">
                                                        *
                                                    </span>
                                                    Código / Nombre del producto
                                                </label>
                                            </div>

                                            <form
                                                autoComplete="off"
                                                onSubmit={handleSubmit(
                                                    searchByBarCode
                                                )}
                                                className="form-group row"
                                            >
                                                <div className="col-lg-6">
                                                    {isSubscribed ? (
                                                        <Select
                                                            // onChange={findByWords}
                                                            onChange={(
                                                                choice
                                                            ) =>
                                                                findByWords(
                                                                    choice.value
                                                                )
                                                            }
                                                            id="selectFind"
                                                            options={options}
                                                        />
                                                    ) : (
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            id="inputBarcode"
                                                            maxLength="12"
                                                            autoFocus
                                                        />
                                                    )}
                                                </div>
                                            </form>

                                            <div className="ml-1 form-group row">
                                                <p className="smallText">
                                                    Busqueda por nombre&emsp;
                                                </p>
                                                <input
                                                    id="type_search"
                                                    className="check"
                                                    type="checkbox"
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    htmlFor="type_search"
                                                    className="checktoggle"
                                                >
                                                    checkbox
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="boxValueTotal">
                                                <h1 className="valueTotal">
                                                    $ {total}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mazter__bg__secondary">
                                <div className="card-body">
                                    <ul className="nav nav-tabs menu-tabs">
                                        <TabsCashRegister
                                            cartShowing={cartShowing}
                                            setCartShowing={setCartShowing}
                                            tabs={tabs}
                                            setTabs={setTabs}
                                            setTotal={setTotal}
                                            productsShowing={productsShowing}
                                            setProductsShowing={
                                                setProductsShowing
                                            }
                                        />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CashRegister;
