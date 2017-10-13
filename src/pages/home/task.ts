export class Task{

id:number;
title:string;
isDone:boolean;
isEdit: false;

constructor(title){
    this.title = title;
    this.isDone =false;
    this.isEdit = false;
}

}