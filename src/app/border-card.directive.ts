import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5'
  private defaultColor: string = '#009688'
  private defaultHight: number = 250

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor)
    this.setHight(this.defaultHight)
  }

  @HostListener('mouseenter') onMouseEnter () {
    this.setBorder(this.defaultColor)
    this.el.nativeElement.style.scale = 1.09
    this.el.nativeElement.style.transition = '1s'
  }
  @HostListener('mouseleave') onMouseLeave () {
    this.el.nativeElement.style.scale = 1
    this.setBorder(this.initialColor)
  }

  private setBorder(color: string):void {
    let boder = 'solid 4px ' + color;
    this.el.nativeElement.style.border = `5px solid ${color}`

  }

  private setHight(height: number) {
    this.el.nativeElement.style.height = height + 'px'
  }

}
