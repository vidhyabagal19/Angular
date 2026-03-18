import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.setProperty(
      'background-color',
      'yellow',
      'important',
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.background = '';
  }
}
