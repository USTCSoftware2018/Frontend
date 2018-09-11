import {EditorStepHeader} from '../headers/steps';

export let mockStep: EditorStepHeader[] = new Array<EditorStepHeader>();

const mockStep_1 = new EditorStepHeader();
mockStep_1.id = '1';
mockStep_1.desc = 'Centifuge';
mockStep_1.name = 'Centifuge';
mockStep_1.ico = '/assets/img/editor/icons/centfuge.png';
mockStep_1.template = '- input Speed 0 rpm @mid - input Time 0 s @small - input Temp 0 °C @small -';
mockStep.push(mockStep_1);

const mockStep_2 = new EditorStepHeader();
mockStep_2.id = '2';
mockStep_2.desc = 'Add';
mockStep_2.name = 'Add';
mockStep_2.ico = '/assets/img/editor/icons/add.png';
mockStep_2.template = '- input Volume 0 ul @mid - input Name null @small - input container null @small -';
mockStep.push(mockStep_2);

const mockStep_3 = new EditorStepHeader();
mockStep_3.id = '3';
mockStep_3.desc = 'Discard';
mockStep_3.name = 'Discard';
mockStep_3.ico = '/assets/img/editor/icons/discard.png';
mockStep_3.template = '- select Phase null @opt=上清/沉淀 -';
mockStep.push(mockStep_3);

const mockStep_4 = new EditorStepHeader();
mockStep_4.id = '4';
mockStep_4.desc = 'Mix';
mockStep_4.name = 'Mix';
mockStep_4.ico = '/assets/img/editor/icons/mix.png';
mockStep_4.template = '- select Type null @opt=短暂离心/摇晃/翻转 -';
mockStep.push(mockStep_4);

const mockStep_5 = new EditorStepHeader();
mockStep_5.id = '5';
mockStep_5.desc = 'Move';
mockStep_5.name = 'Move';
mockStep_5.ico = '/assets/img/editor/icons/move.png';
mockStep_5.template = '- input container1 null @small - input container2 null @small -';
mockStep.push(mockStep_5);

const mockStep_6 = new EditorStepHeader();
mockStep_6.id = '6';
mockStep_6.desc = 'Repeat';
mockStep_6.name = 'Repeat';
mockStep_6.ico = '/assets/img/editor/icons/repeat.png';
mockStep_6.template = '- input count null @mid - input From null @small - input To null @small -';
mockStep.push(mockStep_6);

const mockStep_7 = new EditorStepHeader();
mockStep_7.id = '7';
mockStep_7.desc = 'Standing';
mockStep_7.name = 'Standing';
mockStep_7.ico = '/assets/img/editor/icons/standing.png';
mockStep_7.template = '- input Time null  h @small - input Temp null °C @small - select ENV null @opt=水浴/室温/冰浴 -';
mockStep.push(mockStep_7);

const mockStep_8 = new EditorStepHeader();
mockStep_8.id = '8';
mockStep_8.desc = 'Preserve';
mockStep_8.name = 'Preserve';
mockStep_8.ico = '/assets/img/editor/icons/preserve.png';
mockStep_8.template = '- input Time null  h @small - input Temp null °C @small -';
mockStep.push(mockStep_8);

