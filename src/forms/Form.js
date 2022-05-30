import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap/'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import './style.css'
import { Container } from 'react-bootstrap';





const Forms = () => {

    const [cliente, setCliente] = useState("");
    const [Dinicial, setDinicial] = useState("");
    const [Dfinal, setDfinal] = useState("");
    return (
        <div className="mainSection">
            <Container>
                <Form className="forms">
                    <Row>
                        <Col sm={12}><h1 className="title">Consulta de Vendas no período - Simplificado</h1></Col>
                    </Row>
                    <fieldset className='fieldsetCliente'>
                        <Row>
                            <Col className="clientBlock" sm={3}>

                                <Form.Label className='clientLabel'>Cliente:</Form.Label>
                                <Form.Control></Form.Control>

                            </Col>
                            <Col sm={2}></Col>
                        </Row>
                    </fieldset>
                    <fieldset className='fieldsetDatas'>
                        <Row>
                            <Col sm={5}></Col>
                            <Col sm={2}>
                                <h6 className="subTitle">Intervalo de Data</h6>
                            </Col>
                            <Col sm={5}></Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <div className="radiosBlock">
                                    <div className="radioBlock">
                                        <Form.Check type='radio' name='teste'></Form.Check>
                                        <Form.Label className='radioLabel'>Pela Emissão do Pedido</Form.Label>
                                    </div>
                                    <div className="radioBlock">
                                        <Form.Check type='radio' name='teste'></Form.Check>
                                        <Form.Label className='radioLabel'>Pela Emissão do Pedido</Form.Label>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className='dataInputBlocks'>
                                    <div className="dataInputBlock">
                                        <Form.Label>Data Inicial</Form.Label>
                                        <Form.Control name="Dinicial" className="inputData" maxLength={8} type="text" placeholder="  /  /  " pattern="\(\d{2}\)\d{2}-\d{4}" onChange={(e) => {
                                            setDinicial(e.target.value);
                                        }}></Form.Control>
                                    </div>
                                    <div className="dataInputBlock">
                                        <Form.Label>Data Final</Form.Label>
                                        <Form.Control name="DiFinal" className="inputData" maxLength={8} type="text" placeholder="  /  /  " pattern="\(\d{2}\)\d{2}-\d{4}" onChange={(e) => {
                                            setDinicial(e.target.value);
                                        }}></Form.Control>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </fieldset>
                    <fieldset className='fieldsetOptions'>
                        <Row>
                            <Col sm={4}>
                                <div className="orderOptionsBlock">
                                    <div className="orderOption">
                                        <Form.Label className='orderOptionLabel'>Nº Pedidos:  </Form.Label>
                                        <Form.Control className="inputLength"></Form.Control>
                                    </div>
                                    <div className="orderOption">
                                        <Form.Label className="orderOptionLabel">Nº NF:  </Form.Label>
                                        <div className="inputLength">
                                            <Form.Control ></Form.Control></div>
                                    </div>
                                    <div class="orderOption">
                                        <Form.Label className='orderOptionLabel'>Filial:  </Form.Label>
                                        <Form.Control className="inputLength"></Form.Control>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={2}></Col>
                            <Col sm={4}>
                                <div className='orderTypeOption'>
                                    <Form.Check></Form.Check>
                                    <Form.Label className="orderTypeLabel">Somente Cancelados  </Form.Label>
                                </div>
                                <div className='orderTypeOption'>
                                    <Form.Check></Form.Check>
                                    <Form.Label className="orderTypeLabel">Somente Consignados  </Form.Label>
                                </div>
                                <div className='orderTypeOption'>
                                    <Form.Check></Form.Check>
                                    <Form.Label className="orderTypeLabel">Vendas não liquidadas  </Form.Label>
                                </div>
                                <div className='orderTypeOption'>
                                    <Form.Check></Form.Check>
                                    <Form.Label className="orderTypeLabel">Exibir CFOP  </Form.Label>
                                </div>
                                <div className='orderTypeOption'>
                                    <Form.Check></Form.Check>
                                    <Form.Label className="orderTypeLabel">Somente com requisição preenchida  </Form.Label>
                                </div>
                                <div className='orderTypeOption'>
                                    <Form.Check></Form.Check>
                                    <Form.Label className="orderTypeLabel">Não exibir vendas ao Consumidor </Form.Label>
                                </div>
                            </Col>
                        </Row>
                    </fieldset>
                    <fieldset className='fieldsetTipos'>
                        <Row>
                            <Col sm={5}></Col>
                            <Col sm={2}><h6 className="subTitle">Classificar Por</h6></Col>
                            <Col sm={5}></Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <div className="radioOptionsBox">
                                    <div className="radioOption">
                                        <Form.Check type='radio' name='teste'></Form.Check>
                                        <Form.Label className="radioOptionLabel">Número do Pedido</Form.Label>
                                    </div>
                                    <div className="radioOption">
                                        <Form.Check type='radio' name='teste'></Form.Check>
                                        <Form.Label className="radioOptionLabel">Data da emissão do Pedido</Form.Label>
                                    </div>
                                    <div className="radioOption">
                                        <Form.Check type='radio' name='teste'></Form.Check>
                                        <Form.Label className="radioOptionLabel">Data de emissão do Documento Fiscal</Form.Label>
                                    </div>
                                    <div className="radioOption">
                                        <Form.Check type='radio' name='teste'></Form.Check>
                                        <Form.Label className="radioOptionLabel">Cliente e data de emissão do Pedido</Form.Label>
                                    </div>
                                    <div className="radioOption">
                                        <Form.Check type='radio' name='teste'></Form.Check>
                                        <Form.Label className="radioOptionLabel">Cliente e data de emissão Doc. Fiscal</Form.Label>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className='checkboxOptionsBox'>
                                    <div className="checkboxOption">
                                        <Form.Check></Form.Check>
                                        <Form.Label className='checkboxOptionLabel'>Origem: Sem OS e Orçamento  </Form.Label>
                                    </div>
                                    <div className="checkboxOption">
                                        <Form.Check></Form.Check>
                                        <Form.Label className="checkboxOptionLabel">Origem: Com OS e Orçamento  </Form.Label>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </fieldset>
                    <fieldset className="fieldsetBotao">
                        <Row>
                            <Col sm={12}>
                                <div className="buttonBlock">
                                    <Button variant="primary" onClick={(e) => {
                                        React.createElement(<p>{cliente}</p>);
                                    }}>Primary</Button>
                                </div>
                            </Col>
                        </Row>
                    </fieldset>
                </Form>
            </Container>
        </div >
    )
}

export default Forms;