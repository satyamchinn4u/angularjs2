import { Injectable } from "@angular/core";
import { Iproduct } from "./product";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService{
    url
    constructor(private _http:HttpClient){

    }
getproducts(): Observable<Iproduct[]>{
    const url = 'http://localhost/loginapi/index.json';
    console.log(url);
    return this._http.get<Iproduct[]>(url)
    .do(data=> console.log(JSON.stringify(data)))
}
private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
}
}