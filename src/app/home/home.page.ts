import { Component } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentDate = Date.now();

  constructor(private datePicker: DatePicker) { }

  showDateOfBirth(event: Event): void {

    console.log('HomePage#showDateOfBirth');
    event.stopPropagation();

    this.datePicker.show({
      date: this.currentDate,
      maxDate: this.currentDate,
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      allowFutureDates: false
    });

    //.then((value: Date) => value.toLocaleDateString())
  }

}
