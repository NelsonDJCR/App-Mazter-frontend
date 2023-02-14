import axios from "axios";
import Swal from "sweetalert2";
import { configApi, urlApi } from "../../helpers/helper";
import TableCashRegister from "./TableCashRegister";

const TabsCashRegister = (props) => {
    function changeProductsCart(shopping_cart_id) {
        axios
            .post(
                urlApi("getItemsCart"),
                { shopping_cart_id: shopping_cart_id },
                configApi()
            )
            .then(function (r) {
                props.setCartShowing(shopping_cart_id);
                props.setProductsShowing(r.data.data);
                props.setTotal(r.data.total);
            });
    }

    function addNewCart() {
        axios.get(urlApi("addNewCart"), configApi()).then(function (r) {
            props.setCartShowing(r.data.shopping_cart_id);
            props.setTabs(r.data.carts);
            props.setProductsShowing(r.data.data);
        });
    }
    function deleteCart() {
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
                axios
                    .post(
                        urlApi("deleteCart"),
                        { shopping_cart_id: props.cartShowing },
                        configApi()
                    )
                    .then(function (r) {
                        if (r.data.carts.length) {
                            props.setProductsShowing(
                                r.data.carts[0].get_list_products
                            );
                            props.setCartShowing(
                                r.data.carts[0].shopping_cart_id
                            );
                        } else {
                            props.setProductsShowing(null);
                            props.setCartShowing(null);
                        }
                        props.setTabs(r.data.carts);
                        props.setTotal(r.data.total);
                    });
            }
        });
    }

    function checkout() {
        Swal.fire({
            title: "¿Finalizar compra?",
            text: "",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#FF0080",
            cancelButtonColor: "#bebebe",
            confirmButtonText: "Finalizar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .post(
                        urlApi("checkoutShoppingCart"),
                        { cart_id: props.cartShowing },
                        configApi()
                    )
                    .then(function (r) {
                        axios
                            .post(
                                urlApi("getProductShoppingCart"),
                                {},
                                configApi()
                            )
                            .then(function (r) {
                                props.setTabs(r.data.carts);
                                props.setTotal(r.data.total_first_cart);
                                if (r.data.carts.length) {
                                    props.setProductsShowing(
                                        r.data.carts[0].get_list_products
                                    );
                                    props.setCartShowing(
                                        r.data.carts[0].shopping_cart_id
                                    );
                                } else {
                                    props.setProductsShowing(null);
                                    props.setCartShowing(null);
                                }
                            });

                        // console.log(r);

                        // props.setTabs(r.data.carts);
                        // props.setCartShowing(r.data.carts[0].shopping_cart_id);
                        // props.setProductsShowing(
                        //     r.data.carts[0].get_list_products
                        // );
                    });
            }
        });
    }
    return (
        <div className="col-12">
            <div className="col-5 item__cashresgister">
                {props.tabs
                    ? props.tabs.map((item, key) => (
                          <div key={key} className="s">
                              <li
                                  className={
                                      props.cartShowing ===
                                      item.shopping_cart_id
                                          ? "nav-item active"
                                          : "nav-item"
                                  }
                              >
                                  <div
                                      className="nav-link c-pointer"
                                      onClick={() =>
                                          changeProductsCart(
                                              item.shopping_cart_id
                                          )
                                      }
                                  >
                                      Caja {key + 1}
                                  </div>
                              </li>
                          </div>
                      ))
                    : null}
                <li className="nav-item">
                    {props.cartShowing ? (
                        <div
                            className="nav-link c-pointer"
                            onClick={() => addNewCart()}
                        >
                            <i className="fas fa-plus-square text-primary"></i>
                        </div>
                    ) : null}
                </li>
            </div>

            <div className="table-responsive mt-4 col-12">
                {props.productsShowing ? (
                    <TableCashRegister
                        productsShowing={props.productsShowing}
                        setProductsShowing={props.setProductsShowing}
                        setCartShowing={props.setCartShowing}
                        setTotal={props.setTotal}
                        setTabs={props.setTabs}
                        cartShowing={props.cartShowing}
                    />
                ) : null}
                <ul className="nav nav-tabs menu-tabs"></ul>
                {props.cartShowing ? (
                    <div className="col-12 mt-5 mb-5">
                        <div className="pull-right">
                            <button
                                className="btn mazter__btn__secondary ml-2 mr-2"
                                onClick={() => deleteCart()}
                            >
                                Cancelar
                            </button>
                            <button
                                className="btn mazter__btn__primary"
                                onClick={() => checkout()}
                            >
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                ) : (
                    <h1 className="text-center">Registrar nueva venta</h1>
                )}
            </div>
        </div>
    );
};

export default TabsCashRegister;
