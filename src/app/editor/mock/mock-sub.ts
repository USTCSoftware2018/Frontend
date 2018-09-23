import { EditorSubroutineHeader } from '../headers/steps';

export let mockSub: EditorSubroutineHeader[] = new Array<EditorSubroutineHeader>();

const mockSub_1: EditorSubroutineHeader = {
    id: '1',
    name: 'Single digestion(8h)',
    desc: 'Single digestion(8h)',
    steps: ['2', '2', '2', '4', '9'],
    default: [
        {'Name': 'template'},
        {'Name': 'buffer'},
        {'Name': 'enzyme'},
        {'Type': '摇晃'},
        {'Num': '37'},
    ]
};
mockSub.push(mockSub_1);

const mockSub_2 = new EditorSubroutineHeader();
mockSub_2.id = '2';
mockSub_2.name = 'Single digestion(30min)';
mockSub_2.desc = 'Single digestion(30min)';
mockSub_2.steps = ['2', '2', '2', '2', '2', '4', '9'];
mockSub_2.default = [
    {'Name': 'template'},
    {'Name': 'template'},
    {'Name': 'buffer'},
    {'Name': 'ligase'},
    {'Name': 'ddH20'},
    {},
    {'Num': '37'},
];
mockSub.push(mockSub_2);

const mockSub_3 = new EditorSubroutineHeader();
mockSub_3.id = '3';
mockSub_3.name = 'Dpuble digestion';
mockSub_3.desc = 'Dpuble digestion';
mockSub_3.steps = ['2', '2', '2', '2', '2', '4', '9'];
mockSub_3.default = [
    {'Name': 'enzyme1'},
    {'Name': 'enzyme2'},
    {'Name': 'ddH2O'},
    {'Name': 'buffer'},
    {'Name': 'template'},
    {},
    {'Num': '37'},
];
mockSub.push(mockSub_3);

const mockSub_4 = new EditorSubroutineHeader();
mockSub_4.id = '4';
mockSub_4.name = 'Gel Extraction';
mockSub_4.desc = 'Gel Extraction';
mockSub_4.steps = ['10', '11', '2', '2', '5',
     '1', '3', '2', '1',
      '3', '6', '1', '5', '2', '7', '1', '8'];
mockSub_4.default = [
    {}, // 10
    {}, // 11
    {'Name': 'Buffer B2', 'Volume': '300times weight'}, // 2
    {'Name': '1/3 B2 isopropanol'}, // 2
    {'container2': 'adsorption column'}, // 5
    {'Speed': '11000', 'Time': '30s'}, // 1
    {'Phase': '上清'}, // 3
    {'Name': 'wash solution', 'Volume': '500'}, // 2
    {'Speed': '12000', 'Time': '30s'}, // 1
    {'Phase': '上清'}, // 3
    {'From': '9', 'To': '11', 'Count': '1'}, // 6
    {'Speed': '12000', 'Time': '30s'}, // 1
    {'container2': 'new EP'}, // 5
    {'Name': 'ddH20', 'Volume': '20'}, // 2
    {'Time': '10'}, // 7
    {'Speed': '11000', 'Time': '30s'}, // 1
    {'Time': '4'}, // 8
];
mockSub.push(mockSub_4);

const mockSub_5 = new EditorSubroutineHeader();
mockSub_5.id = '5';
mockSub_5.name = 'purification of PCR product';
mockSub_5.desc = 'purification of PCR product';
mockSub_5.steps = ['2', '2', '4', '5', '1', '3', '2',
    '1', '3', '6', '1', '7', '5', '2', '7', '1' ];
mockSub_5.default = [
    {'Name': 'Buffer B3', 'Volume': '225'}, // 2
    {'Name': 'Solution', 'Volume': '25'}, // 2
    {}, // 4
    {'container2': 'filtrate'}, // 5
    {'Speed': '11000', 'Time': '30s'}, // 1
    {'Phase': '上清'}, // 3
    {'Name': 'wash solution', 'Volume': '500'}, // 2
    {'Speed': '12000', 'Time': '30s'}, // 1
    {}, // 3
    {'From': '7', 'To': '9', 'Count': '1'}, // 6
    {'Speed': '12000', 'Time': '60s'}, // 1
    {'Time': '10min'}, // 7
    {'container2': 'new EP'}, // 5
    {'Name': 'ddH20', 'Volume': '20'}, // 2
    {'Time': '10min'}, // 7
    {'Speed': '12000', 'Time': '60s'}, // 1
];
mockSub.push(mockSub_5);

const mockSub_6 = new EditorSubroutineHeader();
mockSub_6.id = '6';
mockSub_6.name = 'Test env';
mockSub_6.desc = 'Test env';
mockSub_6.steps = ['12'];
mockSub_6.default = [
    {'test': '@proc'},
];
mockSub.push(mockSub_6);
