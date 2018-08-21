import { Injectable } from '@angular/core';
import {ExperimentArticle} from './types';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private _currectArticle: ExperimentArticle;

  public get currectArticle(): ExperimentArticle {
    return this._currectArticle;
  }

  public set currectArticle(_currectArticle: ExperimentArticle) {
    this._currectArticle = _currectArticle;
  }
  constructor() { }

  public dumpArticle() {}
  public loadArticle() {}
  public sentPicture() {}
  public loadPicture() {}
}
