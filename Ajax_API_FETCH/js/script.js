document.addEventListener("DOMContentLoaded", function() {
    const itemTable = document.getElementById("itemTable").getElementsByTagName('tbody')[0];

    // Fazer a requisição HTTP
    fetch("http://localhost/Ajax_API_FETCH/lista_produto.json")
        .then(response => response.json())
        .then(data => {
            // Iterar pelos itens obtidos e adicioná-los à tabela
            data.forEach(item => {
                const newRow = itemTable.insertRow();
                const idCell = newRow.insertCell(0);
                const nomeCell = newRow.insertCell(1);
                const descricaoCell = newRow.insertCell(2);
                const precoCell = newRow.insertCell(3);
                const fornecedorCell = newRow.insertCell(4);
                const url_imagemCell = newRow.insertCell(5);


                idCell.innerHTML = item.codigo;
                nomeCell.innerHTML = item.nome;
                descricaoCell.innerHTML = item.descricao;
                precoCell.innerHTML = item.preco;
                fornecedorCell.innerHTML = item.fornecedor;
                url_imagemCell.innerHTML = item.url_imagem;

            });
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
        });
});
