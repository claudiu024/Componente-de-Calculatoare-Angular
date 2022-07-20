import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(price1: number, price2: number): number {

    return  price1+price2;
  }

}
