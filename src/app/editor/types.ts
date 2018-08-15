// ============================================================================
// types.ts
// ----------
// ertuil 2018.8.10
// 该文件定义了编辑器所需要的接口
// ============================================================================

export class ExperimentPicture {
    // 这里定义了文章中照片的接口
    id?: number;
    name?: string;
    url: string;
    constructor() {
        this.id = -1;
        this.name = '';
        this.url = '';
    }
}

export class ExperimentAppendix {
    // 这里定义了实验附加描述的接口
    desc: string;
    remark: string;
    qoute: string[];
    picture: ExperimentPicture[];
    constructor() {
        this.desc = '';
        this.remark = '';
        this.qoute = new Array<string>();
        this.picture = new Array<ExperimentPicture>();
    }
}

export enum ParaType {
    // 参数的输入模式
    INPUT = 1,
    TEXTAREA = 2,
    SINGLE = 3,
    MULTIPLE = 4,
    SELECT = 5
}

export class ExperimentKV {
    key: string;
    value; string;
    constructor(key = '', value = '') {
        this.key = key;
        this.value = value;
    }
}

export class ExperimentPara {
    // 定义了实验步骤中的参数
    label: string;
    type: ParaType;
    value: any;
    default?: any;
    constructor() {
        this.label = '';
        this.type = ParaType.INPUT;
        this.value = '';
        this.default = '';
    }
}

export class ExperimentStep {
    // 实验原子操作
    id: number;
    name: string;
    appendix: ExperimentAppendix;
    parameter?: ExperimentPara[];
    info?: string;

    constructor() {
        this.id = 0;
        this.info = '';
        this.name = '';
        this.appendix = new ExperimentAppendix;
        this.parameter = new Array<ExperimentPara>();
        this.appendix.desc = '';
        this.appendix.picture = new Array<ExperimentPicture>();
        this.appendix.qoute = new Array<string>();
        this.appendix.remark = '';
    }
}

export class ExperimentProcess extends ExperimentStep {
    // 实验过程描述
    steps?: ExperimentStep[];
}

export class ExperimentArticle {
    // 根数据结构：文章
    id: number;
    title: string;
    author: number[]; // userid
    keywords: string[];
    quote?: string[];
    steps: ExperimentStep;
}
