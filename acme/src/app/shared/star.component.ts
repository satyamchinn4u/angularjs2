import { Component, OnChanges, Input, Output,EventEmitter } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
   @Input() rating: number;
   starWidth: number;
   @Output() ratingCLicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges():void{
        
    this.starWidth = this.rating*(86/5);
    console.log(Math.round(this.starWidth));    
}

onClick():void{
   this.ratingCLicked.emit("HEllo"+this.rating);
}

}