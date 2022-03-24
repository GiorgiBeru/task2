import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appColorSetter]',
})
export class ColorSetterDirective implements OnInit {
  @Input('appColorSetter') cardColor!: string;
  @Input('appColorSetter') statusColor!: string;

  constructor(private ref: ElementRef) {}
  ngOnInit() {
    this.ref.nativeElement.style.background = this.cardColor;
    this.ref.nativeElement.style.background = this.statusColor;
  }
  @HostListener('click')
  click() {
    this.ref.nativeElement.style.background = 'yellow';
  }
}
