import {AppendixHeader} from './appendix';
// 这里是文章的定义

export class ArticleHeader {

    // 元数据部分
    title: string;  // 标题
    author: string[];   // 作者
    mdate: string;  // 修改时间
    ndate: string;  // 创建时间
    introduction: string;   // 介绍
    result: AppendixHeader; // 结果部分
    label: string[];    // 标签部分

    // 节点部分

    constructor () {}
}

// 节点父亲元素
export class NodeHeader {
    stepId: string; // 对应节点id
    stepAppendix: AppendixHeader;

    constructor (id?: string) {
        this.stepId = id;
        this.stepAppendix = new AppendixHeader();
    }
}

export class StepNodeHeader extends NodeHeader {
    fields: object;
    constructor (id?: string) {
        super(id);
        this.fields = {};
    }
}

export class ProcessNodeHeader extends NodeHeader {
    fields: StepNodeHeader[];
    constructor (id?: string) {
        super(id);
        this.fields = Array<StepNodeHeader>();
    }
}
