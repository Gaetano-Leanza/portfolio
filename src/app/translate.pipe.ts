import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from './language.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(
    private languageService: LanguageService,
    private cdr: ChangeDetectorRef
  ) {
 
    this.languageService.currentLanguage$.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  transform(key: string): string {
    return this.languageService.translate(key);
  }
}
