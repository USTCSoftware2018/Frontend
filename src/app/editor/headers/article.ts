// 这里是文章的定义

export class ReportStepsHeader {
    idx: number;
    id: string;
    name: string; // 类型 对应 EditorSubroutine 中的id
    data: any;

    temp?: string;
    fields?: any;
    desc: string;
    remark: string;
    pic: Array<ReportGraphHeader>;
    table: string;
}

// subroutine 类型

export enum subType {
    steps = 'Steps',
    info = 'Info',
    result = 'Result',
    pictures = 'Pictures',
    quote = 'Quote',
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
    remark?: string;
    pic?: Array<ReportGraphHeader>;
    table?: string;

    constructor() {
        this.subType = subType.steps;
    }
}

export class ReportHeader {
    // 元数据部分
    title: string;  // 标题
    author: string[];   // 作者
    mdate: string;  // 修改时间
    ndate: string;  // 创建时间
    introduction: string;   // 介绍
    result: string; // 结果部分
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
