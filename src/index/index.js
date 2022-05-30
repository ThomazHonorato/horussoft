import './indexStyle.css';
import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'



const [cliente, setCliente] = useState("");
const [Dinicial, setDinicial] = useState("");
const [Dfinal, setDfinal] = useState("");

<Form class="borders">
    <div class="BbackImg">
        <div class="form">
            <div className="titulo">
                <h3>Consulta de Vendas no período - Simplificado {cliente}</h3>
            </div>
            <fieldset enabled>
                <Form.Group className="mb-3" class="floatLeft">
                    <Form.Label>Cliente:  </Form.Label>
                    <Form.Control name="cliente" onChange={(e) => {
                        setCliente(e.target.value);
                    }} ></Form.Control>
                </Form.Group>
            </fieldset>
            <fieldset enabled>
                <Form.Group className="mb-3">
                    <h5>Intervalo de Data</h5>
                    <div class="caixaData">

                        <div class="caixaRadio">
                            <div class="Radios">
                                <Form.Check type='radio' name='teste'></Form.Check>
                                <Form.Label>Pela Emissão do Pedido</Form.Label>
                            </div>
                            <div class="Radios">
                                <Form.Check type='radio' name='teste'></Form.Check>
                                <Form.Label>Pela Emissão do Doc Fiscal</Form.Label>
                            </div>
                        </div>
                        <div class="caixaSelect">
                            <div class="Selects">
                                <Form.Label>Data Inicial</Form.Label>
                                <Form.Control name="Dinicial" className="inputData" maxLength={8} type="text" placeholder="  /  /  " pattern="\(\d{2}\)\d{2}-\d{4}" onChange={(e) => {
                                    setDinicial(e.target.value);
                                }}></Form.Control>
                            </div>
                            <div class="Selects padding">
                                <Form.Label>Data Final</Form.Label>
                                <Form.Control name="Dfinal" className="inputData" maxLength={8} data-mask="  /  /  " type="text" placeholder="  /  /  " onChange={(e) => {
                                    setDfinal(e.target.value);
                                }}></Form.Control>
                            </div>
                        </div>
                    </div>
                </Form.Group>
            </fieldset>
            <div class="fieldSetBox">
                <fieldset enabled class="fieldSetPedidos">
                    <Form.Group className='mb-3 floatLeft'>
                        <div class="labelInputs">
                            <div class="labelInput">
                                <Form.Label>Nº Pedidos:  </Form.Label>
                                <Form.Control ></Form.Control>
                            </div>
                            <div class="labelInput">
                                <Form.Label>Nº NF:  </Form.Label>
                                <div class="control">
                                    <Form.Control ></Form.Control></div>
                            </div>
                            <div class="labelInput">
                                <Form.Label>Filial:  </Form.Label>
                                <Form.Control></Form.Control>
                            </div>
                        </div>
                    </Form.Group>
                </fieldset>
                <fieldset enabled class="fieldSetPedidos">
                    <div class="labelCheckbox">
                        <Form.Check></Form.Check>
                        <Form.Label>Somente Cancelados  </Form.Label>
                    </div>
                    <div class="labelCheckbox">
                        <Form.Check></Form.Check>
                        <Form.Label>Somente Consignados  </Form.Label>
                    </div>
                    <div class="labelCheckbox">
                        <Form.Check></Form.Check>
                        <Form.Label>Vendas não liquidadas  </Form.Label>
                    </div>
                    <div class="labelCheckbox">
                        <Form.Check></Form.Check>
                        <Form.Label>Exibir CFOP  </Form.Label>
                    </div>
                    <div class="labelCheckbox">
                        <Form.Check></Form.Check>
                        <Form.Label>Somente com requisição preenchida  </Form.Label>
                    </div>
                    <div class="labelCheckbox">
                        <Form.Check></Form.Check>
                        <Form.Label>Não exibir vendas ao Consumidor </Form.Label>
                    </div>
                </fieldset>
            </div>
            <div class="fieldSetBox">
                <fieldset enabled class="fieldSetPedidos">
                    <h5>Classificar por</h5>
                    <div class="caixaRadio">
                        <div class="Radios">
                            <Form.Check type='radio' name='teste'></Form.Check>
                            <Form.Label>Número do Pedido</Form.Label>
                        </div>
                        <div class="Radios">
                            <Form.Check type='radio' name='teste'></Form.Check>
                            <Form.Label>Data da emissão do Pedido</Form.Label>
                        </div>
                        <div class="Radios">
                            <Form.Check type='radio' name='teste'></Form.Check>
                            <Form.Label>Data de emissão do Documento Fiscal</Form.Label>
                        </div>
                        <div class="Radios">
                            <Form.Check type='radio' name='teste'></Form.Check>
                            <Form.Label>Cliente e data de emissão do Pedido</Form.Label>
                        </div>
                        <div class="Radios">
                            <Form.Check type='radio' name='teste'></Form.Check>
                            <Form.Label>Cliente e data de emissão Doc. Fiscal</Form.Label>
                        </div>
                    </div>
                </fieldset>
                <fieldset enabled class="fieldSetPedidos">
                    <div class="labelCheckbox">
                        <Form.Check></Form.Check>
                        <Form.Label>Origem: Sem OS e Orçamento  </Form.Label>
                    </div>
                    <div class="labelCheckbox">
                        <Form.Check></Form.Check>
                        <Form.Label>Origem: Com OS e Orçamento  </Form.Label>
                    </div>
                </fieldset>
            </div>
            <div className="submitButton">
                <Button variant="outline-primary" onClick={(e) => {
                    React.createElement(<p>{cliente}</p>);
                }}>Primary</Button>

            </div>
        </div>
    </div>
</Form >

export default Index;