import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = "Test course";
  clicks: number = 0;
  onChanged(increased: any) {
    increased == true ? this.clicks++ : this.clicks--;
  }
}
