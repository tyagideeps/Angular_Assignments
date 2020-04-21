import { Component } from '@angular/core';
import { AssignmentComponent, Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {

  todoList : Todo[]
  constructor(private assignComp : AssignmentComponent){}
  
  ngOnInit(){
    this.todoList = this.assignComp.todos
    console.log(this.todoList)
  }

  AddClass(event){
    event.target.parentNode.className = "active"
  }

  CreateTableInput(input : string) : HTMLTableCellElement{
    let cell = document.createElement('td')
    cell.textContent = input
    return cell
  }
}
