import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'CNAMproject';
  color = 'primary';
  mode = 'determinate';
  value = 50;
  constructor(private translate: TranslateService) {
        translate.setDefaultLang('fr');
    }


}
