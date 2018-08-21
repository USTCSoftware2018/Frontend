// ============================================================================
// endecode.service.ts
// ----------
// ertuil 2018.8.10
// 该文件定义了与后端的结构，获取操作、过程以及文章。并且将xml转化为对象映射关系
// ============================================================================

import { Injectable, Input } from '@angular/core';
import {ExperimentArticle, ExperimentStep, ExperimentAppendix, ExperimentPara} from './types';
import {ParaType, ExperimentKV, ExperimentPicture, ExperimentProcess} from './types';
import {mockDefaultSteps, mockUserSteps, mockDefaultProcess, mockUserProcess} from './mock';


@Injectable({
  providedIn: 'root'
})
export class EndecodeService {

  private _operate: ExperimentStep[];

  public get operate(): ExperimentStep[] {
    return this._operate;
  }

  public set operate(value: ExperimentStep[]) {
    this._operate = value;
  }

  private _process: ExperimentProcess[];

  public get process(): ExperimentProcess[] {
    return this._process;
  }

  public set process(value: ExperimentProcess[]) {
    this._process = value;
  }

  private _currentArticle: ExperimentArticle;

  public get currentArticle(): ExperimentArticle {
    return this._currentArticle;
  }
  public set currentArticle(value: ExperimentArticle) {
    this._currentArticle = value;
  }

  constructor() { }

  public getProcessById(processid: number): void {
    const _rawtxt = mockDefaultSteps; // need to change
    const XMLDOM: Document = (new DOMParser).parseFromString(_rawtxt, 'text/xml');
    const stepsDOM: NodeListOf<Element> = XMLDOM.getElementsByTagName('process');
    let node: Element;
    for (let ii = 0; ii < stepsDOM.length ; ii++) {
      node = stepsDOM[ii];
      this.operate.push(this._parse_process(node));
    }
  }

  public getOperatesById(stepid: number): void {
    const _rawtxt = mockDefaultSteps; // need to change
    const XMLDOM: Document = (new DOMParser).parseFromString(_rawtxt, 'text/xml');
    const stepsDOM: NodeListOf<Element> = XMLDOM.getElementsByTagName('step');
    let node: Element;
    for (let ii = 0; ii < stepsDOM.length ; ii++) {
      node = stepsDOM[ii];
      this.operate.push(this._parse_step(node));
    }
  }

  public getProcess(userid?: number): void {
    this.process = [];
    this._getProcessFromDefault();
    if (userid) {
      this._getProcessFromUser(userid);
    }
  }

  public getOperates(userid?: number): void {

    this.operate = [];

    this._getOperatesFromDefault();
    if (userid) {
      this._getOperatesFromUser(userid);
    }
  }

  private _getProcessFromDefault() {
    const _rawtxt = mockDefaultProcess; // need to change
    const XMLDOM: Document = (new DOMParser).parseFromString(_rawtxt, 'text/xml');
    const stepsDOM: NodeListOf<Element> = XMLDOM.getElementsByTagName('process');
    let node: Element;
    for (let ii = 0; ii < stepsDOM.length ; ii++) {
      node = stepsDOM[ii];
      this.operate.push(this._parse_process(node));
    }
  }

  private _getProcessFromUser(userid: number) {
    const _rawtxt = mockDefaultProcess; // need to change
    const XMLDOM: Document = (new DOMParser).parseFromString(_rawtxt, 'text/xml');
    const stepsDOM: NodeListOf<Element> = XMLDOM.getElementsByTagName('process');
    let node: Element;
    for (let ii = 0; ii < stepsDOM.length ; ii++) {
      node = stepsDOM[ii];
      this.operate.push(this._parse_process(node));
    }
  }

  private _getOperatesFromDefault(): void {
    const _rawtxt = mockDefaultSteps; // need to change
    const XMLDOM: Document = (new DOMParser).parseFromString(_rawtxt, 'text/xml');
    const stepsDOM: NodeListOf<Element> = XMLDOM.getElementsByTagName('step');
    let node: Element;
    for (let ii = 0; ii < stepsDOM.length ; ii++) {
      node = stepsDOM[ii];
      this.operate.push(this._parse_step(node));
    }
  }

  private _getOperatesFromUser(userid: number): void {
    const _rawtxt = mockUserSteps; // need to change
    const XMLDOM: Document = (new DOMParser).parseFromString(_rawtxt, 'text/xml');
    const stepsDOM: NodeListOf<Element> = XMLDOM.getElementsByTagName('step');
    let node: Element;
    for (let ii = 0; ii < stepsDOM.length ; ii++) {
      node = stepsDOM[ii];
      this.operate.push(this._parse_step(node));
    }
  }

  private _parse_process(node: Element): ExperimentProcess {
    let _tmpExperimentProcess: ExperimentProcess;
    _tmpExperimentProcess = new ExperimentProcess();
    _tmpExperimentProcess.id = parseInt(node.attributes.getNamedItem('id').nodeValue, 10) || 0;
    _tmpExperimentProcess.name = node.attributes.getNamedItem('name').nodeValue;
    _tmpExperimentProcess.appendix = new ExperimentAppendix();
    let childNode: Element = node.firstElementChild;
    for (let jj = 0; jj < node.childElementCount; ++jj) {
      this._addParaAndAddi(childNode, _tmpExperimentProcess);
      childNode = childNode.nextElementSibling;
    }
    return _tmpExperimentProcess;
  }

  private _parse_step(node: Element): ExperimentStep {
    let _tmpExperimentStep: ExperimentStep;
    _tmpExperimentStep = new ExperimentStep();
    _tmpExperimentStep.id = parseInt(node.attributes.getNamedItem('id').nodeValue, 10) || 0;
    _tmpExperimentStep.name = node.attributes.getNamedItem('name').nodeValue;
    _tmpExperimentStep.appendix = new ExperimentAppendix();
    let childNode: Element = node.firstElementChild;
    for (let jj = 0; jj < node.childElementCount; ++jj) {
      this._addParaAndAddi(childNode, _tmpExperimentStep);
      childNode = childNode.nextElementSibling;
    }
    return _tmpExperimentStep;
  }

  private _addParaAndAddi(childNode: Element, _tmp: ExperimentStep) {
    switch (childNode.nodeName) {
      case 'input': this._parse_input(childNode, _tmp); break;
      case 'textarea': this._parse_textarea(childNode, _tmp); break;
      case 'select': this._parse_select(childNode, _tmp); break;
      case 'radio': this._parse_radio(childNode, _tmp); break;
      case 'checkbox': this._parse_checkbox(childNode, _tmp); break;
      case 'description': this._parse_desc(childNode, _tmp); break;
      case 'remark': this._parse_remark(childNode, _tmp); break;
      case 'quote': this._parse_quote(childNode, _tmp); break;
      case 'pic': this._parse_picture(childNode, _tmp); break;
      case 'step': this._parse_step_in_process(childNode, _tmp); break;
    }
  }

  private _parse_input(childNode: Element, _tmp: ExperimentStep): void {
    const _tmpPara: ExperimentPara = new ExperimentPara();
    _tmpPara.label = (childNode.attributes.getNamedItem('label') || {nodeValue: ''}).nodeValue;
    _tmpPara.type = ParaType.INPUT;
    _tmpPara.default = (childNode.attributes.getNamedItem('default') || {nodeValue: ''}).nodeValue;
    _tmp.parameter.push(_tmpPara);
  }

  private _parse_textarea(childNode: Element, _tmp: ExperimentStep): void {
    const _tmpPara: ExperimentPara = new ExperimentPara();
    _tmpPara.label = (childNode.attributes.getNamedItem('label') || {nodeValue: ''}).nodeValue;
    _tmpPara.type = ParaType.TEXTAREA;
    _tmpPara.default = (childNode.attributes.getNamedItem('default') || {nodeValue: ''}).nodeValue;
    _tmp.parameter.push(_tmpPara);
  }

  private _parse_select(childNode: Element, _tmp: ExperimentStep): void {
    const _tmpPara: ExperimentPara = new ExperimentPara();
    _tmpPara.type = ParaType.SELECT;
    _tmpPara.label = (childNode.attributes.getNamedItem('label') || {nodeValue: ''}).nodeValue;
    _tmpPara.default = (childNode.attributes.getNamedItem('default') || {nodeValue: ''}).nodeValue;
    _tmpPara.value = new Array<ExperimentKV>();
    let grandNode: Element = childNode.firstElementChild;
    for (let jj = 0; jj < childNode.childElementCount; ++jj) {
      const _k = (grandNode.childNodes[0] || {nodeValue: ''} ).nodeValue;
      const _v = (grandNode.attributes.getNamedItem('value') || {nodeValue: ''}).nodeValue;
      const _kv = new ExperimentKV(_k, _v);
      _tmpPara.value.push(_kv);
      grandNode = grandNode.nextElementSibling;
    }
    _tmp.parameter.push(_tmpPara);
  }

  private _parse_radio(childNode: Element, _tmp: ExperimentStep): void {
    const _tmpPara: ExperimentPara = new ExperimentPara();
    _tmpPara.label = (childNode.attributes.getNamedItem('label') || {nodeValue: ''}).nodeValue;
    _tmpPara.type = ParaType.SINGLE;
    _tmpPara.default = (childNode.attributes.getNamedItem('default') || {nodeValue: ''}).nodeValue;
    _tmpPara.value = (childNode.attributes.getNamedItem('value') || {nodeValue: ''}).nodeValue;
    _tmp.parameter.push(_tmpPara);
  }

  private _parse_checkbox(childNode: Element, _tmp: ExperimentStep): void {
    const _tmpPara: ExperimentPara = new ExperimentPara();
    _tmpPara.type = ParaType.MULTIPLE;
    _tmpPara.label = (childNode.attributes.getNamedItem('label') || {nodeValue: ''}).nodeValue;
    _tmpPara.default = (childNode.attributes.getNamedItem('default') || {nodeValue: ''}).nodeValue;
    _tmpPara.value = new Array<ExperimentKV>();
    let grandNode: Element = childNode.firstElementChild;
    for (let jj = 0; jj < childNode.childElementCount; ++jj) {
      const _k = (grandNode.childNodes[0] || {nodeValue: ''} ).nodeValue;
      const _kv = new ExperimentKV(_k, _k);
      _tmpPara.value.push(_kv);
      grandNode = grandNode.nextElementSibling;
    }
    _tmp.parameter.push(_tmpPara);
  }

  private _parse_remark(childNode: Element, _tmp: ExperimentStep): void {
    _tmp.appendix.remark = (childNode.childNodes[0] || {nodeValue: ''} ).nodeValue;
  }

  private _parse_desc(childNode: Element, _tmp: ExperimentStep): void {
    _tmp.appendix.desc = (childNode.childNodes[0] || {nodeValue: ''} ).nodeValue;
  }

  private _parse_quote(childNode: Element, _tmp: ExperimentStep): void {
    _tmp.appendix.qoute.push((childNode.childNodes[0] || {nodeValue: ''} ).nodeValue);
  }

  private _parse_picture(childNode: Element, _tmp: ExperimentStep): void {
    const _tmpPicture = new ExperimentPicture();
    _tmpPicture.id = parseInt((childNode.attributes.getNamedItem('id') || {nodeValue: ''}).nodeValue, 10);
    _tmpPicture.name = (childNode.attributes.getNamedItem('name') || {nodeValue: ''}).nodeValue;
    _tmpPicture.url = (childNode.attributes.getNamedItem('src') || {nodeValue: ''}).nodeValue;
    _tmp.appendix.picture.push(_tmpPicture);
  }

  private _parse_step_in_process(childNode: Element, _tmp: ExperimentStep): void {
    // Not implement
  }
}
