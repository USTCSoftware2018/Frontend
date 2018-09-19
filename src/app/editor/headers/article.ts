// 这里是文章的定义

export class ReportStepsHeader {
    idx: number;
    id: string;
    name: string; // 类型 对应 EditorSubroutine 中的id
    data: any;
    ico: string;

    temp?: string;
    fields?: any;
    desc: string;
    remark: string;
}

// subroutine 类型

export enum subType {
    steps = 'Steps',
    info = 'Info',
    result = 'Result',
    pictures = 'Pictures',
    list = 'List',
    text = 'Text',
    table = 'Table',
}

export class ReportSubroutineHeader {
    id: string; // 类型 对应 EditorStep 中的id
    name: string;
    subType: subType;
    idx: number; // 位置
    steps?: Array<ReportStepsHeader>; // 包含的step
    desc?: string;
    list?: ReportListHeader[];
    remark?: string;
    pic?: Array<ReportGraphHeader>;
    table?: string;

    constructor() {
        this.subType = subType.steps;
    }
}

export class ReportResultHeader {
    subType: subType;
    desc?: string;
    list?: ReportListHeader[];
    remark?: string;
    pic?: Array<ReportGraphHeader>;
    table?: string;
}

export class ReportHeader {
    // 元数据部分
    id: number; // 约定 id 是 0 就新建
    title: string;  // 标题
    author: string[];   // 作者
    mdate: string;  // 修改时间 后端
    ndate: string;  // 创建时间 后端
    introduction: string;   // 介绍
    envs: {};
    result: ReportResultHeader[]; // 结果部分
    label: string[];    // 标签部分
    subroutines: Array<ReportSubroutineHeader>;
    constructor () {}
}

// 图片

export class ReportGraphHeader {
    name: string;
    url: string;

    constructor(url: string, name?: string) {
        this.name = name ? name : '';
        this.url = url;
    }
}

export class ReportListHeader {
    str: string;
    idx: number;
}
