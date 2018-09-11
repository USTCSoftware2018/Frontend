import {EditorStepHeader} from '../headers/steps';

export let mockStep: EditorStepHeader[] = new Array<EditorStepHeader>();

const mockStep_1 = new EditorStepHeader();
mockStep_1.id = '1';
mockStep_1.desc = 'centrifuge things';
mockStep_1.name = 'centrifuge';
mockStep_1.ico = '/assets/img/editor/icons/centfuge.png';
mockStep_1.template = '- input time 5 min - input temp 30 C -';

const mockStep_2 = new EditorStepHeader();
mockStep_2.id = '2';
mockStep_2.desc = 'add things';
mockStep_2.name = 'add';
mockStep_2.ico = '/assets/img/editor/icons/add.png';
mockStep_2.template = '- input things null - input number 1000 -';

mockStep.push(mockStep_1);
mockStep.push(mockStep_2);
