import { Component} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent{

  stringInterpolation: String;
  numberInterpolation: Number;

  constructor() {
    this.stringInterpolation = "This is string interpolation";
    this.numberInterpolation = 2;
  }

  onClicked(value: string){
    alert(value);
  }

}
