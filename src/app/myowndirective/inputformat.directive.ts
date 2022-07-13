import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputformat]'
})
export class InputformatDirective {

  @Input('appInputformat') myFormat: string | undefined;

  constructor(public eleRef: ElementRef) { }

  @HostListener('blur') onFormatBlur() {
    let formtData = this.eleRef.nativeElement.value;    
    if(this.myFormat == 'lower') {
      this.eleRef.nativeElement.value = formtData.toLowerCase(); 
    } else {
      this.eleRef.nativeElement.value = formtData.toUpperCase(); 
    }
  }
}
