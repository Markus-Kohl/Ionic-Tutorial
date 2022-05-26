import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  @ViewChild('loadingIcon', { read: ElementRef }) loadingIcon: ElementRef;
  @ViewChild('cartBtn', { read: ElementRef }) cartBnt: ElementRef;
  @ViewChild('cartFabBtn', { read: ElementRef }) cartFabBnt: ElementRef;
  constructor(private animationCtrl: AnimationController) {}

  startLoad() {
    const loadingAnimation = this.animationCtrl
      .create('loading-animation')
      .addElement(this.loadingIcon.nativeElement)
      .duration(1500)
      .iterations(3)
      .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)');

    loadingAnimation.play();
  }

  addToCart() {
    const cartAnimation = this.animationCtrl
      .create('cart-animation')
      .addElement(this.cartBnt.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.2)' },
        { offset: 0.8, transform: 'scale(0.9)' },
        { offset: 1, transform: 'scale(1)' },
      ]);

    const cartColorAnimation = this.animationCtrl
      .create('cart-color-animation')
      .addElement(this.cartFabBnt.nativeElement)
      .fromTo('transform', 'rotate(0deg)', 'rotate(45deg)');

    const parent = this.animationCtrl
      .create('parent')
      .duration(300)
      .easing('ease-out')
      .iterations(2)
      .direction('alternate')
      .addAnimation([cartColorAnimation, cartAnimation]);

    // Playing the parent starts both animations
    parent.play();
  }
}
