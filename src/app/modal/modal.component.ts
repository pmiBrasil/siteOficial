import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from '../article/article';
// import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import { ModalData } from '../model-data';
import { ArticleService } from '../article/article.service';

@Component({
  selector: 'app-modal',
  template: `
    <div (click)="onNoClick()" class="ButtonClose">
      <img src="./../assets/img/close-icon.svg" alt="Close modal" />
    </div>
    <mat-dialog-content style="margin-bottom: -10px;">
      <div class="d-flex flex-column align-items-center">
        <h2>{{ data.article.title }}</h2>
        <p class="title2">
          {{ data.article.title2 }}
        </p>
      </div>
      <div class="article">
        <img
          class="img-fluid d-block mx-auto"
          src="{{ data.article.img2 }}"
          alt=""
        />
        <article
          class="articleBody"
          [innerHTML]="data.article.articleBody"
        ></article>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions
      class="d-flex align-items-center flex-column "
    >
      <ul class="list-inline">
        <li>Date: {{ data.article.datePublished }}</li>
        <li>projeto: {{ data.article.projeto }}</li>
        <li>Category: Africa</li>
        <li>
          fontes:
          <a href="{{ data.article.fontes }}">wikipedia</a>
        </li>
      </ul>

      <button (click)="onNoClick()" class="btn btn-primary" type="button" style="margin-top: -15px; padding: -10px">
        <i class="fas fa-times mr-1"></i>
      
        Fechar Janela
      </button>
      <!-- </ul> -->
    </mat-dialog-actions>
  `,
  styleUrls: ['./modal.component.css'],
  providers: [ArticleService],
})
export class ModalComponent implements OnInit {
  public article: Article;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public articleService: ArticleService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

}
