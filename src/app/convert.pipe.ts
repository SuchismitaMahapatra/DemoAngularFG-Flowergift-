import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'convert'
})
export class Convert implements PipeTransform{
  transform(value: any, ...args: any[]) {
   return value.replace('-',' ')
  }

}
