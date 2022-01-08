import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOrange]'
})
export class OrangeDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#ffa500'; 
   }

}
