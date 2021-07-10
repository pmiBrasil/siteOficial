import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  idArticle: string;
  color: string;
  articles: Array <Article>;

  constructor(
    public dialog: MatDialog,
    public articleService: ArticleService
    ) { }
  openDialog(article): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '90%',
      height: '90%',
       data: { article }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }

  ngOnInit(): void {
    this.articles = this.articleService.returnArticles();
  }

}
