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

  public loadArticle() {
    const _rawtxt = ''; // need to change
    const XMLDOM: Document = (new DOMParser).parseFromString(_rawtxt, 'text/xml');
    const stepsDOM: NodeListOf<Element> = XMLDOM.getElementsByTagName('article');
    let node: Element;
    this._currectArticle = new ExperimentArticle;

    for (let ii = 0; ii < stepsDOM.length ; ii++) {
      node = stepsDOM[ii];
      this._parse_article(node);
    }
  }

  private _parse_article(node: Element): void {
    switch (node.nodeName) {
      case 'title': this._currectArticle.title = (node.childNodes[0] || {nodeValue : ''}).nodeValue; break;
      case 'date': this._currectArticle.date = (node.childNodes[0] || {nodeValue : ''}).nodeValue; break;
      case 'author': this._currectArticle.author.push(parseInt(node.childNodes[0].nodeValue, 10) || 0 ); break;
      case 'key' : this._currectArticle.keywords.push((node.childNodes[0] || {nodeValue : ''}).nodeValue); break;
      case 'quote': this._currectArticle.quote.push((node.childNodes[0] || {nodeValue : ''}).nodeValue); break;
      case 'step': this._parseStepValue(node) ; break;
      case 'Process': this._parseProcessValue(node) ; break;
    }
  }

  private _parseStepValue(node: Element): any {
    return null;
  }

  private _parseProcessValue(node: Element): any {
    return null;
  }

}
