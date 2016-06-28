function getTasks(){
  this.itens = [{nome:' Item 01', status: false},
      {nome: 'Item 02', status: false},
      {nome: 'Item 03', status: false}];

  this.add = function(item){
    this.itens.push(item);
  };

  this.remove = function(item){
    var pos = this.itens.indexOf(item);
    this.itens.splice(pos, 1);
  };
}
