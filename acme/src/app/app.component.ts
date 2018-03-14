import { Component } from "@angular/core";
import { ProductService } from "./Product/product.service";

@Component({
  selector:'app-root',
  templateUrl:'app.component.html',
  providers:[ ProductService]
})

export class appComponent{


  pageTitle:string = "Acme Product Managment"
}