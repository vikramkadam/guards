import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverdir]'
})
export class HoverdirDirective implements OnInit  {

  constructor(private eleRef: ElementRef) { }

  ngOnInit(): void {
    this.eleRef.nativeElement.style.color='red';  
  }
    

    
  

}
