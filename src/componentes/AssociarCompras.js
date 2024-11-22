import React, { useState } from 'react';

export default function RegistrarCompras(props) {
    let tema = props.tema;

    const [clientes] = useState([
        { id: 1, nome: "João Silva" },
        { id: 2, nome: "Maria Santos" },
        { id: 3, nome: "Carlos Souza" },
    ]);

    const [produtos] = useState([
        { id: 1, nome: "Ração para cachorro", preco: 50.0 },
        { id: 2, nome: "Shampoo para gatos", preco: 30.0 },
        { id: 3, nome: "Osso de brinquedo", preco: 20.0 },
    ]);

    const [servicos] = useState([
        { id: 1, nome: "Banho e Tosa", preco: 80.0 },
        { id: 2, nome: "Consulta Veterinária", preco: 150.0 },
        { id: 3, nome: "Vacinação", preco: 120.0 },
    ]);

    const [clienteSelecionado, setClienteSelecionado] = useState(null);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [servicoSelecionado, setServicoSelecionado] = useState(null);
    const [quantidadeProduto, setQuantidadeProduto] = useState(0);
    const [quantidadeServico, setQuantidadeServico] = useState(0);

    // Função para selecionar o cliente
    const handleSelecionarCliente = (id) => {
        setClienteSelecionado(id);
    };

    // Função para selecionar o produto
    const handleSelecionarProduto = (id) => {
        const produto = produtos.find((p) => p.id === id) || null;
        setProdutoSelecionado(produto);
        setQuantidadeProduto(produto ? 1 : 0);
    };

    // Função para selecionar o serviço
    const handleSelecionarServico = (id) => {
        const servico = servicos.find((s) => s.id === id) || null;
        setServicoSelecionado(servico);
        setQuantidadeServico(servico ? 1 : 0);
    };

    // Função para alterar a quantidade do produto
    const handleQuantidadeProdutoChange = (e) => {
        setQuantidadeProduto(parseInt(e.target.value, 10) || 0);
    };

    // Função para alterar a quantidade do serviço
    const handleQuantidadeServicoChange = (e) => {
        setQuantidadeServico(parseInt(e.target.value, 10) || 0);
    };

    // Função para adicionar uma compra
    const handleAdicionarCompra = () => {
        if (!clienteSelecionado) {
            alert("Por favor, selecione um cliente.");
            return;
        }

        if (!produtoSelecionado && !servicoSelecionado) {
            alert("Por favor, selecione pelo menos um produto ou serviço.");
            return;
        }

        if (produtoSelecionado && quantidadeProduto <= 0) {
            alert("Por favor, insira uma quantidade válida para o produto.");
            return;
        }

        if (servicoSelecionado && quantidadeServico <= 0) {
            alert("Por favor, insira uma quantidade válida para o serviço.");
            return;
        }

        alert("Compra adicionada com sucesso!");
        setProdutoSelecionado(null);
        setServicoSelecionado(null);
        setQuantidadeProduto(0);
        setQuantidadeServico(0);
    };

    return (
        <div className="container mt-3">
            <h1 className="mb-4">Registrar Compras</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Selecione um Cliente</label>
                    <select
                        className="form-select"
                        onChange={(e) => handleSelecionarCliente(Number(e.target.value))}
                        value={clienteSelecionado || ""}
                        style={{ background: tema }}
                    >
                        <option value="">Selecione...</option>
                        {clientes.map((cliente) => (
                            <option key={cliente.id} value={cliente.id}>
                                {cliente.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Selecione um Produto</label>
                    <select
                        className="form-select"
                        onChange={(e) => handleSelecionarProduto(Number(e.target.value))}
                        value={produtoSelecionado?.id || ""}
                        style={{ background: tema }}
                    >
                        <option value="">Selecione...</option>
                        {produtos.map((produto) => (
                            <option key={produto.id} value={produto.id}>
                                {produto.nome} - {produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantidade de Produto</label>
                    <input
                        type="number"
                        className="form-control"
                        value={quantidadeProduto}
                        min={1}
                        onChange={handleQuantidadeProdutoChange}
                        disabled={!produtoSelecionado}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Selecione um Serviço</label>
                    <select
                        className="form-select"
                        onChange={(e) => handleSelecionarServico(Number(e.target.value))}
                        value={servicoSelecionado?.id || ""}
                        style={{ background: tema }}
                    >
                        <option value="">Selecione...</option>
                        {servicos.map((servico) => (
                            <option key={servico.id} value={servico.id}>
                                {servico.nome} - {servico.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantidade de Serviço</label>
                    <input
                        type="number"
                        className="form-control"
                        value={quantidadeServico}
                        min={1}
                        onChange={handleQuantidadeServicoChange}
                        disabled={!servicoSelecionado}
                    />
                </div>

                <button
                    type="button"
                    className="btn"
                    style={{ backgroundColor: "#6c757d", color: "white" }}
                    onClick={handleAdicionarCompra}
                >
                    Adicionar Compra
                </button>
            </form>
        </div>
    );
}
