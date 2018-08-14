// ============================================================================
// endecode.service.ts
// ----------
// ertuil 2018.8.10
// 该文件定义了与后端的结构，获取操作、过程以及文章。并且将xml转化为对象映射关系
// ============================================================================

import { Injectable } from '@angular/core';
import {ExperimentArticle} from './types';
import {mockArticle} from './mock';


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

  decodeArticle(articleid: number): void {
    // 从后端获取xml 并转化为 ORM
    const rawtext: string = mockArticle;
    const tmpArticle: ExperimentArticle = new ExperimentArticle();

    const XMLDOM: Document = (new DOMParser()).parseFromString(rawtext, 'text/xml');
    const articleDOM: Element = XMLDOM.getElementsByTagName('article')[0];
    const headDOM: Element = XMLDOM.getElementsByTagName('head')[0];
    const bodyDOM: Element = XMLDOM.getElementsByTagName('body')[0];

    const nodes: any = headDOM.childNodes;
    let node: Node;
    for (let ii = 0; ii < nodes.length ; ii++) {
      node = nodes[ii];
      switch (node.nodeName) {
        case 'title': tmpArticle.title = node.nodeValue; break;
        case 'author': tmpArticle.author.push(parseInt(node.nodeValue, 2 )); break;
        case 'key': tmpArticle.keywords.push(node.nodeValue); break;
        case 'quote': tmpArticle.quote.push(node.nodeValue); break;
      }
    }

    this.currentArticle = tmpArticle;
  }
}
