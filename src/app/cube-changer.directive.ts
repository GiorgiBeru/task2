import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCubeChanger]'
})
export class CubeChangerDirective {

  constructor(private ref:ElementRef) { }
  @HostListener('mouseenter')
  enter() {
    this.ref.nativeElement.style.background = "green";
  }
}
