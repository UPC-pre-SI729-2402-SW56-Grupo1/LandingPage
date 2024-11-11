import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'feather-book-landing';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    const userLang = this.getUserLang() || 'en';
    this.translate.use(userLang);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('lang', lang);
    }
  }

  private getUserLang(): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('lang');
    }
    return null;
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}