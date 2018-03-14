import { PipeTransform,Pipe } from "@angular/core";
@Pipe({
    name:'ConvertToSpace'
})

export class ConvertToSpace implements PipeTransform {
    transform(value: string,args: string) {
return value.replace(args,' ');

    }
}