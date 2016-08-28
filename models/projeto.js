module.exports = (sequelize, DataType) => { 

    const Projeto = sequelize.define("Projeto", 
        { 
            id: { 
                type: DataType.INTEGER, 
                primaryKey: true, 
                autoIncrement: true 
            }, 
            nome: { 
                type: DataType.STRING,
                allowNull: false, 
                validate: { 
                    notEmpty: true 
                }
            },
            descricao: { 
                type: DataType.STRING,
                allowNull: true
            },
            data_inicio: { 
                type: DataType.DATE,
                allowNull: false
            },
            data_fim: { 
                type: DataType.DATE,
                allowNull: false 
            }
        },{ 
            tableName: 'projetos',
            classMethods: { 
                associate: (models) => {
                    Projeto.belongsToMany(models.Analista, {foreignKey: 'projeto_id', through: 'analistas_projetos', as:'analistas'});
                }
            } 
        }
    );
    
    return Projeto;
};