import produtos from "../../../config/database.js";

class ProdutoModel {
  static async cadastrar(nome, preco, descricao) {
   const dados = [id, nome, preco, descricao];
   const consulta = `insert into produto(nome, preco, descricao) values ($1, $2, $3) returning*;`
   const resultado = await client.query(consulta, dados)
  }
  static async listarTodos() {
    const consulta = `select * from produtos`
    const resultado = await client.query(consulta)
    return resultado.rows
  }
  static async listarPorId(id) {
   const dados = [id]
   const consulta = `select * from produto where id = $1`
   const resultado = await client.query(consulta, dados)
   return resultado.rows
  }
  static async atualizar(novoNome, novoPreco, novaDescricao) {
    const dados = [novoNome, novoPreco, novaDescricao]
    const consulta = `update produto set nome_produto = $1 where id = $2 returning *`
    const resultado = await client.query(consulta, dados)
    return resultado
    
  }
  static async deletarPorId(id) {
    const dados = [id]
    const consulta = `delete from produto where id = $1`
    return client.query(consulta, dados)
  }
  static async deletarTodos() {
  const consulta = `delete from produto`
  return client.query(consulta, dados)
  }
}

export default ProdutoModel;
