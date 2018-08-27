// This is header defination for steps and process.

export class StepHeader {
    stepId: string;     // id 编号
    stepInfo: string;   // 描述文字
    stepField: any;     // 所填写的唱
}

export class ProcessHeader {
    processId: string;      // 过程的 id
    processInfo: string;    // 过程的描述
    processFields: Array<string>;   // 包含的原子操作的id号码
}

// 这是 step 中每一个表单的类型。
// 下面是一个父类
export class BaseFieldHeader {
    fieldName: string;
    defaultValue: any;
    hide: boolean;

    constructor (name: string, ishide?: boolean) {
        this.fieldName = name ;
        this.hide = ishide ? true : false;
    }
}

// 输入框类型
export class InputFieldHeader extends BaseFieldHeader {
    defaultValue: string;

    constructor (name: string, defaultValue?: string, ishide?: boolean) {
        super(name, ishide);
        this.defaultValue = defaultValue ? defaultValue : null;
    }
}

// 文本框类型
export class TextFieldHeader extends BaseFieldHeader {
    defaultValue: string;

    constructor (name: string, defaultValue?: string, ishide?: boolean) {
        super(name, ishide);
        this.defaultValue = defaultValue ? defaultValue : null;
    }
}

// 单选框类型
export class SingleFieldHeader extends BaseFieldHeader {
    defaultValue: boolean;

    constructor (name: string, defaultValue?: boolean, ishide?: boolean) {
        super(name, ishide);
        this.defaultValue = defaultValue ? true : false;
    }
}

// 下拉框类型

export class SelectFieldHeader extends BaseFieldHeader {
    defaultValue: number;
    options: Array<string>;

    constructor (name: string, defaultValue: number, options: string[], ishide?: boolean) {
        super(name, ishide);
        this.defaultValue = defaultValue;
        this.options = options;
    }
}
