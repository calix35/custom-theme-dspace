import { Component } from '@angular/core';
import { BrowseByTitlePageComponent as BaseComponent } from '../../../../../app/browse-by/browse-by-title-page/browse-by-title-page.component';

@Component({
  selector: 'ds-browse-by-title-page',
  // styleUrls: ['./browse-by-title-page.component.scss'],
  styleUrls: ['./browse-by-title-page.component.scss'],
  // templateUrl: './browse-by-title-page.component.html'
  templateUrl: './browse-by-title-page.component.html'
})

/**
 * Component for determining what Browse-By component to use depending on the metadata (browse ID) provided
 */

export class BrowseByTitlePageComponent extends BaseComponent {
}
