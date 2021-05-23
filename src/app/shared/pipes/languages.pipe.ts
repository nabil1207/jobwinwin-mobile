import { Pipe, PipeTransform } from '@angular/core';
import { Language } from 'src/app/core/models/classes';

@Pipe({
  name: 'languages',
  pure: false
})
export class LanguagesPipe implements PipeTransform {

  transform(value: unknown[], ...args: any[]): unknown {
    if (args[0] && args[0].length > 0) {
      const languages = args[0].map(x => x.language._id);
      return value.filter((x: Language) => !languages.includes(x._id));
    }
    return value;
  }

}
