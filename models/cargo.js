module.exports = (sequelize, DataType) => { 
    const Cargo = sequelize.define("Cargo", 
    
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
            } 
        
        },{
            tableName: 'cargos',
            classMethods: { 
                associate: (models) => {
                    Cargo.hasMany(models.Analista);
                } 
            } 
        }
    ); 
    
    return Cargo;
};
