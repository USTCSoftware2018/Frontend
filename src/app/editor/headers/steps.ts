// This is the step of the article

export class EditorStepHeader {
    id: string; // ID 号码
    ico: string; // 标题 url
    name: string;
    desc: string; // step 描述
    template: string; // 模板
}

// This is the step of the article

export class EditorSubroutineHeader {
    id: string; // ID 号码
    ico: string; // 标题 url
    name: string;
    desc: string; // Subroutine 描述
    steps: Array<string>; // 包含的 step id
}