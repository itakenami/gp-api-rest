{"filter":false,"title":"analista_projeto.js","tooltip":"/models/analista_projeto.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["_"],"id":25}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":21},"action":"remove","lines":["analista_"],"id":26}],[{"start":{"row":8,"column":13},"end":{"row":27,"column":13},"action":"remove","lines":[", ","            nome: { ","                type: DataType.STRING,","                allowNull: false, ","                validate: { ","                    notEmpty: true ","                }","            },","            descricao: { ","                type: DataType.STRING,","                allowNull: true","            },","            data_inicio: { ","                type: DataType.DATE,","                allowNull: false","            },","            data_fim: { ","                type: DataType.DATE,","                allowNull: false ","            }"],"id":27}],[{"start":{"row":12,"column":24},"end":{"row":12,"column":32},"action":"remove","lines":["projetos"],"id":28},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":["a"]}],[{"start":{"row":12,"column":25},"end":{"row":12,"column":26},"action":"insert","lines":["n"],"id":29}],[{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"insert","lines":["a"],"id":30}],[{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"insert","lines":["l"],"id":31},{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"insert","lines":["i"]},{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"insert","lines":["s"]}],[{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"insert","lines":["t"],"id":32}],[{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"insert","lines":["a"],"id":33}],[{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"insert","lines":["s"],"id":34}],[{"start":{"row":12,"column":24},"end":{"row":12,"column":33},"action":"remove","lines":["analistas"],"id":35},{"start":{"row":12,"column":24},"end":{"row":12,"column":42},"action":"insert","lines":["analistas_projetos"]}],[{"start":{"row":15,"column":20},"end":{"row":17,"column":118},"action":"remove","lines":["//Projeto.belongsToMany(models.Analista, { as: 'analistas', through: 'analistas_projetos', foreignKey: 'projeto_id' });","                    //Projeto.hasMany( models.Analista, { as: 'Analistas', foreignKey: 'projeto_id', joinTableName: 'analistas_projetos' });","                    Projeto.belongsToMany(models.Analista, {foreignKey: 'projeto_id', through: 'analistas_projetos'});"],"id":36}],[{"start":{"row":15,"column":20},"end":{"row":15,"column":68},"action":"insert","lines":["Analista.belongsTo(models.Cargo, {as: 'cargo'});"],"id":37}],[{"start":{"row":15,"column":28},"end":{"row":15,"column":29},"action":"insert","lines":["P"],"id":38}],[{"start":{"row":15,"column":29},"end":{"row":15,"column":30},"action":"insert","lines":["r"],"id":39}],[{"start":{"row":15,"column":30},"end":{"row":15,"column":31},"action":"insert","lines":["o"],"id":40}],[{"start":{"row":15,"column":31},"end":{"row":15,"column":32},"action":"insert","lines":["j"],"id":41}],[{"start":{"row":15,"column":32},"end":{"row":15,"column":33},"action":"insert","lines":["e"],"id":42}],[{"start":{"row":15,"column":33},"end":{"row":15,"column":34},"action":"insert","lines":["t"],"id":43}],[{"start":{"row":15,"column":34},"end":{"row":15,"column":35},"action":"insert","lines":["o"],"id":44}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":17},"action":"remove","lines":["Projeto"],"id":45},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["A"]}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["n"],"id":46}],[{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["a"],"id":47}],[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["l"],"id":48},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["i"]}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["s"],"id":49}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["t"],"id":50}],[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["a"],"id":51}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":18},"action":"remove","lines":["Analista"],"id":52},{"start":{"row":2,"column":10},"end":{"row":2,"column":25},"action":"insert","lines":["AnalistaProjeto"]}],[{"start":{"row":15,"column":53},"end":{"row":15,"column":58},"action":"remove","lines":["Cargo"],"id":53},{"start":{"row":15,"column":53},"end":{"row":15,"column":54},"action":"insert","lines":["A"]}],[{"start":{"row":15,"column":54},"end":{"row":15,"column":55},"action":"insert","lines":["n"],"id":54}],[{"start":{"row":15,"column":55},"end":{"row":15,"column":56},"action":"insert","lines":["a"],"id":55}],[{"start":{"row":15,"column":56},"end":{"row":15,"column":57},"action":"insert","lines":["l"],"id":56},{"start":{"row":15,"column":57},"end":{"row":15,"column":58},"action":"insert","lines":["i"]}],[{"start":{"row":15,"column":58},"end":{"row":15,"column":59},"action":"insert","lines":["s"],"id":57}],[{"start":{"row":15,"column":59},"end":{"row":15,"column":60},"action":"insert","lines":["t"],"id":58}],[{"start":{"row":15,"column":60},"end":{"row":15,"column":61},"action":"insert","lines":["a"],"id":59}],[{"start":{"row":15,"column":69},"end":{"row":15,"column":74},"action":"remove","lines":["cargo"],"id":60},{"start":{"row":15,"column":69},"end":{"row":15,"column":70},"action":"insert","lines":["a"]}],[{"start":{"row":15,"column":70},"end":{"row":15,"column":71},"action":"insert","lines":["n"],"id":61}],[{"start":{"row":15,"column":71},"end":{"row":15,"column":72},"action":"insert","lines":["a"],"id":62},{"start":{"row":15,"column":72},"end":{"row":15,"column":73},"action":"insert","lines":["l"]}],[{"start":{"row":15,"column":73},"end":{"row":15,"column":74},"action":"insert","lines":["i"],"id":63}],[{"start":{"row":15,"column":74},"end":{"row":15,"column":75},"action":"insert","lines":["s"],"id":64}],[{"start":{"row":15,"column":75},"end":{"row":15,"column":76},"action":"insert","lines":["t"],"id":65}],[{"start":{"row":15,"column":76},"end":{"row":15,"column":77},"action":"insert","lines":["a"],"id":66}],[{"start":{"row":15,"column":69},"end":{"row":15,"column":77},"action":"remove","lines":["analista"],"id":67},{"start":{"row":15,"column":69},"end":{"row":15,"column":77},"action":"insert","lines":["analista"]}],[{"start":{"row":15,"column":81},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":68},{"start":{"row":16,"column":0},"end":{"row":16,"column":20},"action":"insert","lines":["                    "]}],[{"start":{"row":16,"column":20},"end":{"row":16,"column":81},"action":"insert","lines":["AnalistaProjeto.belongsTo(models.Analista, {as: 'analista'});"],"id":69}],[{"start":{"row":16,"column":53},"end":{"row":16,"column":61},"action":"remove","lines":["Analista"],"id":70},{"start":{"row":16,"column":53},"end":{"row":16,"column":54},"action":"insert","lines":["P"]}],[{"start":{"row":16,"column":54},"end":{"row":16,"column":55},"action":"insert","lines":["r"],"id":71}],[{"start":{"row":16,"column":55},"end":{"row":16,"column":56},"action":"insert","lines":["o"],"id":72},{"start":{"row":16,"column":56},"end":{"row":16,"column":57},"action":"insert","lines":["j"]}],[{"start":{"row":16,"column":57},"end":{"row":16,"column":58},"action":"insert","lines":["e"],"id":73}],[{"start":{"row":16,"column":58},"end":{"row":16,"column":59},"action":"insert","lines":["t"],"id":74}],[{"start":{"row":16,"column":59},"end":{"row":16,"column":60},"action":"insert","lines":["o"],"id":75}],[{"start":{"row":16,"column":68},"end":{"row":16,"column":76},"action":"remove","lines":["analista"],"id":76},{"start":{"row":16,"column":68},"end":{"row":16,"column":69},"action":"insert","lines":["p"]}],[{"start":{"row":16,"column":69},"end":{"row":16,"column":70},"action":"insert","lines":["r"],"id":77}],[{"start":{"row":16,"column":70},"end":{"row":16,"column":71},"action":"insert","lines":["o"],"id":78},{"start":{"row":16,"column":71},"end":{"row":16,"column":72},"action":"insert","lines":["j"]}],[{"start":{"row":16,"column":72},"end":{"row":16,"column":73},"action":"insert","lines":["e"],"id":79}],[{"start":{"row":16,"column":73},"end":{"row":16,"column":74},"action":"insert","lines":["t"],"id":80}],[{"start":{"row":16,"column":74},"end":{"row":16,"column":75},"action":"insert","lines":["o"],"id":81}],[{"start":{"row":21,"column":11},"end":{"row":21,"column":18},"action":"remove","lines":["Projeto"],"id":82},{"start":{"row":21,"column":11},"end":{"row":21,"column":26},"action":"insert","lines":["AnalistaProjeto"]}],[{"start":{"row":15,"column":64},"end":{"row":15,"column":88},"action":"insert","lines":["foreignKey: 'fk_company'"],"id":83}],[{"start":{"row":15,"column":88},"end":{"row":15,"column":89},"action":"insert","lines":[","],"id":84}],[{"start":{"row":15,"column":89},"end":{"row":15,"column":90},"action":"insert","lines":[" "],"id":85}],[{"start":{"row":16,"column":63},"end":{"row":16,"column":87},"action":"insert","lines":["foreignKey: 'fk_company'"],"id":86}],[{"start":{"row":16,"column":87},"end":{"row":16,"column":88},"action":"insert","lines":[","],"id":87}],[{"start":{"row":16,"column":88},"end":{"row":16,"column":89},"action":"insert","lines":[" "],"id":88}],[{"start":{"row":15,"column":77},"end":{"row":15,"column":87},"action":"remove","lines":["fk_company"],"id":89},{"start":{"row":15,"column":77},"end":{"row":15,"column":78},"action":"insert","lines":["a"]}],[{"start":{"row":15,"column":78},"end":{"row":15,"column":79},"action":"insert","lines":["n"],"id":90}],[{"start":{"row":15,"column":79},"end":{"row":15,"column":80},"action":"insert","lines":["a"],"id":91}],[{"start":{"row":15,"column":77},"end":{"row":15,"column":80},"action":"remove","lines":["ana"],"id":92},{"start":{"row":15,"column":77},"end":{"row":15,"column":88},"action":"insert","lines":["analista_id"]}],[{"start":{"row":16,"column":76},"end":{"row":16,"column":86},"action":"remove","lines":["fk_company"],"id":93},{"start":{"row":16,"column":76},"end":{"row":16,"column":77},"action":"insert","lines":["p"]}],[{"start":{"row":16,"column":77},"end":{"row":16,"column":78},"action":"insert","lines":["r"],"id":94}],[{"start":{"row":16,"column":78},"end":{"row":16,"column":79},"action":"insert","lines":["o"],"id":95},{"start":{"row":16,"column":79},"end":{"row":16,"column":80},"action":"insert","lines":["j"]}],[{"start":{"row":16,"column":76},"end":{"row":16,"column":80},"action":"remove","lines":["proj"],"id":96},{"start":{"row":16,"column":76},"end":{"row":16,"column":86},"action":"insert","lines":["projeto_id"]}],[{"start":{"row":15,"column":90},"end":{"row":15,"column":105},"action":"remove","lines":[" as: 'analista'"],"id":97}],[{"start":{"row":15,"column":89},"end":{"row":15,"column":90},"action":"remove","lines":[","],"id":98}],[{"start":{"row":16,"column":101},"end":{"row":16,"column":102},"action":"remove","lines":["'"],"id":99}],[{"start":{"row":16,"column":100},"end":{"row":16,"column":101},"action":"remove","lines":["o"],"id":100}],[{"start":{"row":16,"column":99},"end":{"row":16,"column":100},"action":"remove","lines":["t"],"id":101}],[{"start":{"row":16,"column":98},"end":{"row":16,"column":99},"action":"remove","lines":["e"],"id":102}],[{"start":{"row":16,"column":97},"end":{"row":16,"column":98},"action":"remove","lines":["j"],"id":103}],[{"start":{"row":16,"column":96},"end":{"row":16,"column":97},"action":"remove","lines":["o"],"id":104}],[{"start":{"row":16,"column":95},"end":{"row":16,"column":96},"action":"remove","lines":["r"],"id":105}],[{"start":{"row":16,"column":94},"end":{"row":16,"column":95},"action":"remove","lines":["p"],"id":106}],[{"start":{"row":16,"column":93},"end":{"row":16,"column":94},"action":"remove","lines":["'"],"id":107}],[{"start":{"row":16,"column":92},"end":{"row":16,"column":93},"action":"remove","lines":[" "],"id":108}],[{"start":{"row":16,"column":91},"end":{"row":16,"column":92},"action":"remove","lines":[":"],"id":109}],[{"start":{"row":16,"column":90},"end":{"row":16,"column":91},"action":"remove","lines":["s"],"id":110}],[{"start":{"row":16,"column":89},"end":{"row":16,"column":90},"action":"remove","lines":["a"],"id":111}],[{"start":{"row":16,"column":88},"end":{"row":16,"column":89},"action":"remove","lines":[" "],"id":112}],[{"start":{"row":16,"column":87},"end":{"row":16,"column":88},"action":"remove","lines":[","],"id":113}],[{"start":{"row":15,"column":89},"end":{"row":15,"column":90},"action":"insert","lines":[","],"id":114}],[{"start":{"row":15,"column":90},"end":{"row":15,"column":91},"action":"insert","lines":[" "],"id":115}],[{"start":{"row":15,"column":91},"end":{"row":15,"column":110},"action":"insert","lines":[" targetKey: 'name'}"],"id":116}],[{"start":{"row":15,"column":104},"end":{"row":15,"column":108},"action":"remove","lines":["name"],"id":117},{"start":{"row":15,"column":104},"end":{"row":15,"column":105},"action":"insert","lines":["i"]}],[{"start":{"row":15,"column":105},"end":{"row":15,"column":106},"action":"insert","lines":["d"],"id":118}],[{"start":{"row":16,"column":87},"end":{"row":16,"column":88},"action":"insert","lines":[","],"id":119}],[{"start":{"row":16,"column":88},"end":{"row":16,"column":89},"action":"insert","lines":[" "],"id":120}],[{"start":{"row":16,"column":89},"end":{"row":16,"column":108},"action":"insert","lines":[" targetKey: 'name'}"],"id":121}],[{"start":{"row":16,"column":102},"end":{"row":16,"column":106},"action":"remove","lines":["name"],"id":122},{"start":{"row":16,"column":102},"end":{"row":16,"column":103},"action":"insert","lines":["i"]}],[{"start":{"row":16,"column":103},"end":{"row":16,"column":104},"action":"insert","lines":["d"],"id":123}],[{"start":{"row":16,"column":105},"end":{"row":16,"column":106},"action":"remove","lines":["}"],"id":124}],[{"start":{"row":15,"column":107},"end":{"row":15,"column":108},"action":"remove","lines":["}"],"id":125}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":27,"selection":{"start":{"row":15,"column":107},"end":{"row":15,"column":107},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1457917482785,"hash":"d1f8c38503a609e649108b3aef36682c08ba6a5b"}