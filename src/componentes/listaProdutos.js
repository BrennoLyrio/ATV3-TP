import React, { useState } from 'react';

export default function ListaProdutos(props){
    let tema = props.tema

    const [produtos, setProdutos] = useState([
        {
            nome: "Ração para cachorro",
            preco: 50.0,
            marca: "PetLove",
            categoria: "Alimentos",
            tipoAnimal: "Cachorro",
            quantidade: 500,
            unidade: "g",
            descricao: "Ração nutritiva para cães adultos.",
        },
        {
            nome: "Shampoo para gatos",
            preco: 30.0,
            marca: "PetCare",
            categoria: "Higiene",
            tipoAnimal: "Gato",
            quantidade: 250,
            unidade: "ml",
            descricao: "Shampoo suave para gatos, ideal para pele sensível.",
        },
        {
            nome: "Osso de brinquedo",
            preco: 20.0,
            marca: "PetFun",
            categoria: "Brinquedos",
            tipoAnimal: "Cachorro",
            quantidade: 1,
            unidade: "unidade",
            descricao: "Osso de borracha resistente e seguro para mastigar.",
        },
        {
            nome: "Antipulgas para gatos",
            preco: 70.0,
            marca: "SafePets",
            categoria: "Saúde",
            tipoAnimal: "Gato",
            quantidade: 1,
            unidade: "unidade",
            descricao: "Produto antipulgas eficaz e fácil de aplicar.",
        },
        {
            nome: "Coleira ajustável",
            preco: 40.0,
            marca: "PetComfort",
            categoria: "Acessórios",
            tipoAnimal: "Todos",
            quantidade: 1,
            unidade: "unidade",
            descricao: "Coleira ajustável para cães e gatos, confortável e segura.",
        },
    ]);

    const [produtoSelecionado, setProdutoSelecionado] = useState(null)

    //Function alterar dropdown do prod selecionado

    const toggleDropdown = (index) => {
        setProdutoSelecionado(prev => (prev === index ? null : index))
    }

    //func para editar o produto (simulação do controle)
    const handleEditProduto = (index) => {
        const produto = produtos[index]
        console.log("Editando produto: ", produto)
        //Aqui vou abrir um modal ou redirecionar para a página de edição
    }

    //Func para excluir o produto
    const handleDeleteProduto = (index) => {
        if (window.confirm("Tem certeza que deseja excluir este produto?")) {
            setProdutos(prev => prev.filter((_, i) => i !== index))
        }
    };

    return (
        <div className="container mt-3">
            <h1 className="mb-4">Lista de Produtos</h1>
            <div className="accordion" id="listaProdutos">
                {produtos.map((produto, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <div className="d-flex w-100 align-items-center justify-content-between">
                                <button
                                    className={`accordion-button ${produtoSelecionado === index ? "" : "collapsed"}`}
                                    type="button"
                                    onClick={() => toggleDropdown(index)}
                                    style={{ background: tema }}
                                >
                                    {produto.nome}
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
                                                onClick={() => handleEditProduto(index)}
                                            >
                                                Editar
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item text-danger"
                                                onClick={() => handleDeleteProduto(index)}
                                            >
                                                Excluir
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </h2>
                        <div
                            className={`accordion-collapse collapse ${produtoSelecionado === index ? "show" : ""}`}
                            data-bs-parent="#listaProdutos"
                        >
                            <div className="accordion-body">
                                <p>
                                    <strong>Nome:</strong> {produto.nome}
                                </p>
                                <p>
                                    <strong>Preço:</strong> {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </p>
                                <p>
                                    <strong>Marca:</strong> {produto.marca}
                                </p>
                                <p>
                                    <strong>Categoria:</strong> {produto.categoria}
                                </p>
                                <p>
                                    <strong>Tipo de Animal:</strong> {produto.tipoAnimal}
                                </p>
                                <p>
                                    <strong>Quantidade:</strong> {produto.quantidade} {produto.unidade}
                                </p>
                                <p>
                                    <strong>Descrição:</strong> {produto.descricao}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}