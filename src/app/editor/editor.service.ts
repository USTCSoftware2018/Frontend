// ============================================================================
// editor.service.ts
// ----------
// ertuil 2018.8.10
// 该文件用于编辑器界面上状态的转移、数据维持等
// ============================================================================

import { Injectable } from '@angular/core';
import {ArticleService} from './article.service';
import {EndecodeService} from './endecode.service';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(public anticleService: ArticleService, public endecodeService: EndecodeService) {

  }
}
