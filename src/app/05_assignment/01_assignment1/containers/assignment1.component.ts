import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  inputTxt = " "
  ShowInputText(inputData:any){
    this.inputTxt = inputData.value
  }
}
