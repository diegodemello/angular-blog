import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input()
  contentTitle:string = '';
  @Input()
  contentPreview:string = '';
  @Input()
  contentAuthor:string = '';
  @Input()
  contentPostTime:string = '';
  @Input()
  photoCover:string = '';
  @Input()
  contentCoverInfo:string = '';
  @Input()
  contentBody:string = '';
}
