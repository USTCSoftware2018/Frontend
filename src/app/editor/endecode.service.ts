// ============================================================================
// endecode.service.ts
// ----------
// ertuil 2018.8.10
// 该文件定义了与后端的结构，获取操作、过程以及文章。并且将xml转化为对象映射关系
// ============================================================================

import { Injectable } from '@angular/core';
import {ExperimentArticle} from './types';

@Injectable({
  providedIn: 'root'
})
export class EndecodeService {

  parser: any = new DOMParser(); // xml解析器

  private _currentArticle: ExperimentArticle;

  public get currentArticle(): ExperimentArticle {
    return this._currentArticle;
  }
  public set currentArticle(value: ExperimentArticle) {
    this._currentArticle = value;
  }

  constructor() { }


  encode(articleid: number): void {
    // 将ORM转化为 xml 并发起保存
  }

  decode(articleid: number): void {
    // 从后端获取xml 并转化为 ORM
  }
}
