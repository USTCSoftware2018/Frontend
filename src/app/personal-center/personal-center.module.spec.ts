import { PersonalCenterModule } from './personal-center.module';

describe('PersonalCenterModule', () => {
  let personalCenterModule: PersonalCenterModule;

  beforeEach(() => {
    personalCenterModule = new PersonalCenterModule();
  });

  it('should create an instance', () => {
    expect(personalCenterModule).toBeTruthy();
  });
});
