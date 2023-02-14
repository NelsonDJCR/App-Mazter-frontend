import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { configApi, urlApi } from "../../helpers/helper";

export const ModalProductUpdate = (props, setShowModal, showModal) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [barcode, setBarcode] = useState("");
    const [productId, setPorductId] = useState("");
 
    const navigate = useNavigate();

    useEffect(() => {
        const getProucts = () => {
            const data = {
                product_id: props.productId,
            };
            axios
                .post(urlApi("products/getProduct"), data, configApi())
                .then(function (r) {
                    setPorductId(r.data.product_id);
                    setName(r.data.product_name);
                    setPrice(r.data.price);
                    setStock(r.data.stock);
                    setBarcode(r.data.barcode);
                })
                .catch(function () {
                    sessionStorage.clear();
                    navigate("/auth/login");
                });
        };
        getProucts();
    }, [navigate, props.productId]);

    function handleShowModal() {
        props.setShowModal(showModal);
    }

    const update = async (e) => {
        const data = {
            product_id: productId,
            name: name,
            price: price,
            stock: stock,
            barcode: barcode,
        };
        e.preventDefault();
        await axios
            .post(urlApi("products/updateProduct"), data, configApi())
            .then(function (r) {
                props.setUpdateTable(1)
                handleShowModal()
            })
            .catch(function () {
                // sessionStorage.clear();
                // navigate("/auth/login");
            });
    };

    return (
        <Modal show={props.showModal} centered size="lg">
            <Modal.Header>
                <Modal.Title>Editar producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off" onSubmit={update}>
                    <div className="form-group">
                        <label>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                        </label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label>
                        </label>
                        <input
                            type="text"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Código de barras</label>
                        <input
                            type="text"
                            value={barcode}
                            onChange={(e) => setBarcode(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">
                            Actualizar
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                        <Button onClick={handleShowModal} variant="secondary">
                            Close Modal
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};
