// 这里是文章的定义

export class ReportStepsHeader {
    idx: number;
    type: string;
    data: any;

    temp?: string | string[];
    desc: string;
    remark: string;
    pic: Array<ReportGraphHeader>;
    table: string;
}

export class ReportSubroutineHeader {
    type: string; // 类型
    idx: number; // 位置
    steps: Array<ReportStepsHeader>; // 包含的step
    desc: string;
    remark: string;
    pic: Array<ReportGraphHeader>;
    table: string;
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
