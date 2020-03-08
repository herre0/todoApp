import { Component } from '@angular/core';
import { user,todoItem} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 model = new user();
 isDisplay=false;
 
 getName(){
   return this.model.user;
 }

 getItems(){
   if(this.isDisplay){
     return this.model.items;
   }
   return this.model.items.filter(item=> !item.action);//false olanları çeker
 }

 addItem(value){
   this.model.items.push(new todoItem(value,false));//yeni item ekliyi
 }


}
