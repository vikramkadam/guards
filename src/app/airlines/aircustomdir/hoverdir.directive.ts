import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverdir]'
})
export class HoverdirDirective implements OnInit {

  constructor(private eleRef: ElementRef) { }

  ngOnInit(): void {
   // this.eleRef.nativeElement.style.color='red';
  }

  @HostListener('mouseover') mouseover()
  {
    this.eleRef.nativeElement.style.color='red';
  }

  @HostListener('mouseleave') mouseleave()
  {
    this.eleRef.nativeElement.style.color= '';
  }
}
