import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl:'./product-detils.html'

})
export class ProductDetailsComponent {


  message: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.message = this.activatedRoute.snapshot.params['message'];

  }
  

}
