const Sequelize = require("sequelize");
const Cliente = require("./Cliente");
const connection = require("./db_sequelize");

const DadosBancarios = connection.define('dadosBancarios',{
    idCliente: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
    codigoBanco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipoConta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    agenciaComDigito: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contaComDigito: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt:{
        type: Sequelize.DATE,
        defaultValue: new Date()
    },
    updatedAt:{
        type: Sequelize.DATE,
        defaultValue: new Date()
    }
},{
    freezeTableName: true, // impede a pluralização das tabelas pelo sequelize
})

DadosBancarios.belongsTo(Cliente, {
    constraint: true,
    foreignKey: 'idCliente'
})

DadosBancarios.sync({force: true})

module.exports = DadosBancarios;