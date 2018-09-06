import {EditorStepHeader} from '../headers/steps';

export let mockStep: EditorStepHeader[] = new Array<EditorStepHeader>();

const mockStep_1 = new EditorStepHeader();
mockStep_1.id = '1';
mockStep_1.desc = 'centrifuge';
mockStep_1.name = 'centrifuge';
mockStep_1.template = '<input label="1" value="123" />';

const mockStep_2 = new EditorStepHeader();
mockStep_2.id = '2';
mockStep_2.desc = 'add';
mockStep_2.name = 'add';
mockStep_2.template = '';

mockStep.push(mockStep_1);
mockStep.push(mockStep_2);
