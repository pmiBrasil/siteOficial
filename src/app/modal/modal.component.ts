import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from '../article/article';
// import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import { ModalData } from '../model-data';
import { ArticleService } from '../article/article.service';



@Component({
  selector: 'app-modal',
  template: `
   <h5 class="titles" mat-dialog-title>{{ data.article.title }}</h5>
  <div onLoad="scroll()" id="topo" class="MainModal" mat-dialog-content>
    <!-- <div> -->
      <!-- <div> -->
        <div  (click)="onNoClick()" mat-dialog-actions>
          <img class="ButtonClose" src="./../assets/img/close-icon.svg" alt="Close modal"  />
        </div>
        <!-- <div > -->
          <!-- <div > -->
            <!-- <div > -->
              <!-- <div > -->
                <h2>{{ data.article.title }}</h2>
                <p class="title2" >
                  {{ data.article.title2 }}
                </p>
                <div class="article">
                  <img
                    class="img-fluid d-block mx-auto"
                    src="{{ data.article.img2 }}"
                    alt=""
                  />
                  <!-- <h1>{{ data.article.title }}</h1> -->
                  <article class="articleBody" [innerHTML]="data.article.articleBody"></article>
                </div>
              <!-- </div> -->
              <ul class="list-inline">
                <li>Date: {{data.article.datePublished}}</li>
                <li>projeto: {{data.article.projeto}}</li>
                <li>Category: Africa</li>
                <li>
                  fontes:
                  <a
                    href="{{data.article.fontes}}"
                    >wikipedia</a
                  >
                </li>
              </ul>
              <div style="display:flex; justify-content: center; padding-bottom: 15px !important;">
                <button
                 (click)="onNoClick()"
                  class="btn btn-primary"
                  type="button"
                >
                  <i class="fas fa-times mr-1"></i>
                  Fechar Janela
                </button>
              </div>
            <!-- </div> -->
          <!-- </div> -->
        <!-- </div> -->
      <!-- </div> -->
    <!-- </div> -->
  </div>
`,
  styleUrls: ['./modal.component.css'],
  providers: [ArticleService]


})
export class ModalComponent implements OnInit {

  public article: Article;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public articleService: ArticleService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

 scroll(): void {
    const objScrDiv = document.getElementById('topo');
    objScrDiv.scrollTop = objScrDiv.scrollHeight;
}
}