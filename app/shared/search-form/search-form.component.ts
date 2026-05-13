import { Component } from '@angular/core';
import {
  SearchFormComponent as BaseComponent,
} from '../../../../../app/shared/search-form/search-form.component';

@Component({
  selector: 'ds-search-form',
  styleUrls: ['./search-form.component.scss'],
  templateUrl: './search-form.component.html',
})
export class SearchFormComponent extends BaseComponent {
  public searchField = 'all';

  onSubmit(data: any) {
    const value = (data?.query || '').trim();
    const field = data?.searchField || this.searchField || 'all';
    data.searchField = field;

    if (value && field !== 'all') {
      const fieldMap = {
        title: 'dc.title',
        subject: 'dc.subject',
        author: 'dc.contributor.author',
        category: 'dc.type',
        date: 'dc.date.issued'
      };
      const metadataField = fieldMap[field];
      if (metadataField) {
        data.query = `${metadataField}:(${value})`;
      }
    }

    super.onSubmit(data);
  }
}
