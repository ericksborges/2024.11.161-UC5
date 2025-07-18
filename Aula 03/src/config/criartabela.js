import dotenv from 'dotenv'
dotenv.config()
import client from './database.js'
import ProdutoModel from '../modules/produto/models/produto.model.js'

class CriarTabela {
    static async produto(){
        const consulta = `create table if not exists produto(
        id serial primary key,
        nome varchar(100) not null, 
        preco numeric (10,2) not null,
        descricao TEXT NOT NULL
    )`;
    try{
   await client.query(consulta)
    console.log('Tabela produto criada com sucesso!');
    } catch (erro) {
        console.error("Erro ao criar tabela 'produto':", erro.message);
    }
    
    }
   }
CriarTabela.produto()

export default CriarTabela