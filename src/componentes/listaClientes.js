/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function ListaClientes(props) {
    let tema = props.tema;

    // Utilizando React Hooks para gerenciar estado
    const [clientes, setClientes] = React.useState([
        { nome: "João Silva", nomeSocial: "Joãozinho", cpf: "123.456.789-00", email: "joao@gmail.com", telefone: "(11) 98765-4321" },
        { nome: "Maria Santos", cpf: "987.654.321-00", email: "maria@hotmail.com", telefone: "(21) 91234-5678" },
        { nome: "Carlos Souza", nomeSocial: "Carlão", cpf: "456.123.789-00", email: "carlos@yahoo.com", telefone: "(31) 99876-5432" },
    ]);

    const [clienteSelecionado, setClienteSelecionado] = React.useState(null);

    // Função para alternar o dropdown de clientes
    function toggleDropdown(index) {
        setClienteSelecionado(prev => (prev === index ? null : index));
    }

    // Função para editar cliente (apenas simulação de console)
    function handleEditCliente(index) {
        const cliente = clientes[index];
        console.log("Editando cliente:", cliente);
        // Aqui você pode abrir um modal ou redirecionar para a página de edição
    }

    // Função para excluir cliente
    function handleDeleteCliente(index) {
        if (window.confirm("Tem certeza que deseja excluir este cliente?")) {
            setClientes(prev => prev.filter((_, i) => i !== index));
        }
    }

    return (
        <div className="container mt-3">
            <h1 className="mb-4">Lista de Clientes</h1>
            <div className="accordion" id="listaClientes">
                {clientes.map((cliente, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <div className="d-flex w-100 align-items-center justify-content-between">
                                <button
                                    className={`accordion-button ${clienteSelecionado === index ? "" : "collapsed"}`}
                                    type="button"
                                    onClick={() => toggleDropdown(index)}
                                    style={{ background: tema }}
                                >
                                    {cliente.nome}
                                </button>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-sm btn-secondary dropdown-toggle"
                                        type="button"
                                        id={`dropdownMenuButton-${index}`}
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Ações
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${index}`}>
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => handleEditCliente(index)}
                                            >
                                                Editar
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item text-danger"
                                                onClick={() => handleDeleteCliente(index)}
                                            >
                                                Excluir
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </h2>

                        <div
                            className={`accordion-collapse collapse ${clienteSelecionado === index ? "show" : ""}`}
                            data-bs-parent="#listaClientes"
                        >
                            <div className="accordion-body">
                                <p>
                                    <strong>Nome:</strong> {cliente.nome}
                                </p>
                                {cliente.nomeSocial && (
                                    <p>
                                        <strong>Nome Social:</strong> {cliente.nomeSocial}
                                    </p>
                                )}
                                <p>
                                    <strong>CPF:</strong> {cliente.cpf}
                                </p>
                                <p>
                                    <strong>E-mail:</strong> {cliente.email}
                                </p>
                                <p>
                                    <strong>Telefone:</strong> {cliente.telefone}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
