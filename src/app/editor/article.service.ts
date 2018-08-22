// ============================================================================
// endecode.service.ts
// ----------
// ertuil 2018.8.10
// 该文件编辑器相关的 文章和图片的获取和保存。
// ============================================================================

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
}
