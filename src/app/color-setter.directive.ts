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
  @Input() statusColor!: string;

  constructor(private ref: ElementRef) {}
  ngOnInit() {
    this.ref.nativeElement.style.background = this.cardColor;
    this.ref.nativeElement.style.background = this.statusColor;
  }

  @HostListener('click')
  click() {
    if (this.statusColor) {
      if (this.ref.nativeElement.style.background == 'yellow') {
        this.ref.nativeElement.style.background = this.statusColor;
      } else {
        this.ref.nativeElement.style.background = 'yellow';
      }
    } else {
      if (this.ref.nativeElement.style.background == 'yellow') {
        this.ref.nativeElement.style.background = this.cardColor;
      } else {
        this.ref.nativeElement.style.background = 'yellow';
      }
    }
  }
}
