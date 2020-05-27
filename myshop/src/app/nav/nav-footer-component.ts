import { Component} from '@angular/core'

@Component({
  selector: 'nav-footer-sec',
  templateUrl: './nav-footer.html',
  styles: [`
    .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
   }
  .footer > .container {
      padding-right: 15px;
      padding-left: 15px;
  }


  `]

})
export class NavFooterComponent {
}
