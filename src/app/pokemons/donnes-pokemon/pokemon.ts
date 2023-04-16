export class Pokemon {
  _id? :string;
  hp !:number;
  cp? :number;
  name? :string;
  picture !:string;
  types !:Array<string>;
  created !:Date;
  rarete?: string;

  constructor(){

    this.hp = 0
    this.cp = 0
    this.name = "NoName"
    this.types = ["Normal"]
    this.picture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Tvt896IZlW8Mn3SNfft5uVF7CBNPLMPFRw&usqp=CAU"// "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
    this.created = new Date()
  }
}
