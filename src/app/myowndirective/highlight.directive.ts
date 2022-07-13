import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( public eleRef: ElementRef) { 
    //  this.eleRef.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseover') onMyMouseOver() {
    this.eleRef.nativeElement.style.backgroundColor = 'green'
  }

  @HostListener('mouseleave') onMyMouseLeave() {
    this.eleRef.nativeElement.style.backgroundColor = 'transparent'
    this.eleRef.nativeElement.style.fontSize = '20px'
  }

}
