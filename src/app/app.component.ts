import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';

  imgUrl="../assets/BrigdeLabz-Logo-2.jpg";

  url="http://www.bridgelabz.com";

  ngOnInit():void{
    this.title="Hello from BridgeLabz.";
  }

  onClick($event:any){
    console.log("Save button is Clicked",$event);
    window.open(this.url,"_blank");
  }
}
