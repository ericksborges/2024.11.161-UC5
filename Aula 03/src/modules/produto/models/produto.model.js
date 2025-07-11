import produtos from "../../../config/database.js";

class ProdutoModel {
  static cadastrar(id, nome, preco, descricao) {
    produtos.push({ id, nome, preco, descricao });
  }
  static listarTodos() {
    const produto = produtos.map((produto) => produto);
    return produto;
  }
  static listarPorId(id) {
    const produto = produtos.find((produto) => produto.id === id);
    return produto;
  }
  static atualizar(id, novoNome, novoPreco, novaDescricao) {
    const produto = produtos.find((produto) => produto.id === id);
    if (!produto) {
      return null; // Produto não encontrado
    }
    produto.nome = novoNome || produto.nome;
    produto.preco = novoPreco || produto.preco;
    produto.descricao = novaDescricao || produto.descricao;
    return produto;
  }
  static deletarPorId(id) {
    const index = produtos.findIndex(produto => produto.id === id)
    if(index === -1){
        return null
    }
    const produtoExcluido = produtos[index]; // Captura o produto antes de excluir
    produtos.splice(index, 1)
    return produtoExcluido; // Retorna o produto excluído
  }
  static deletarTodos() {
    produtos.length = 0;
  }
}

export default ProdutoModel;
