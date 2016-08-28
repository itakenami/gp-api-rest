module.exports = (sequelize, DataType) => { 
    
    const Analista = sequelize.define("Analista",
    
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
            especialidade: { 
                type: DataType.STRING,
                allowNull: true 
            }
        },{     
            tableName: 'analistas',
            hooks: { 
                beforeCreate: analista => { 
                    //console.log("Antes de Criar: "+analista.nome);
                } 
            },
            classMethods: { 
                
                associate: (models) => {
                    Analista.belongsTo(models.Cargo, {as: 'cargo'});
                    Analista.belongsToMany(models.Projeto,{foreignKey: 'analista_id', through: 'analistas_projetos'});
                }, 
                
                getEspecialistas: (espec, fnc) => {
                    Analista.findAll({
                            attributes:["id","nome","especialidade"],
                            where: { especialidade: espec }
                    }).then(analistas => { 
                        fnc(analistas); 
                    });
                }
    
            } 
        }
    );
    
    return Analista;
};