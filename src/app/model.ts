export class user {
    user;
    items;
    constructor(){
        this.user="MERT";   
        this.items=[
            new todoItem("Spor",true),
            new todoItem("Satranç",true),
            new todoItem("Müzik",false)
        ];     
    }

}

export class todoItem{
description;
action;
constructor(description,action){
    this.description=description;
    this.action=action;
}


}