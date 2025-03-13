import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataTest } from '../../data/dataTest'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
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
  private id:string | null = "0";

  constructor(private route:ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const result = dataTest.filter(article => article.id == id)[0]

    this.contentTitle = result.title;
    this.contentPreview = result.preview;
    this.contentAuthor = result.author;
    this.contentPostTime = result.posttime;
    this.photoCover = result.photo;
    this.contentCoverInfo = result.photoinfo;
    this.contentBody = result.contentbody;
  }

}
