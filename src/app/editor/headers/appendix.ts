// 这里是每一个原子操作和过程的 文本附加部分。包括了： 正文、注释、图片和表格

export class AppendixHeader {
    texts: Array<AppendixTextHeader>;
    remarks: Array<AppendixRemarkHeader>;
    graphs: Array<AppendixGraphHeader>;
    tables: Array<AppendixTableHeader>;

    constructor () {
        this.texts = Array<AppendixTextHeader>();
        this.remarks = Array<AppendixRemarkHeader>();
        this.graphs = Array<AppendixGraphHeader>();
        this.tables = Array<AppendixTableHeader>();
    }
}

// 附加正文
export class AppendixTextHeader {
    content: string;

    constructor (content?: string) {
        this.content = content ? content : '';
    }
}

// 附加注释
export class AppendixRemarkHeader {
    content: string;

    constructor (content?: string) {
        this.content = content ? content : '';
    }
}

// 附加图片
export class AppendixGraphHeader {
    name: string;
    url: string;

    constructor(url: string, name?: string) {
        this.name = name ? name : '';
        this.url = url;
    }
}

// 附加表格
export class AppendixTableHeader {
    name: string;
    private _content: any;

    constructor (name?: string) {
        this.name = name;
        this.content = [];
    }

    public get content(): any {
        return this._content;
    }

    public set content(content: any) {
        this._content = content;
    }
}
