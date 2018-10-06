import { AppDialogModule } from './app-dialog.module';

describe('AppDialogModule', () => {
  let appDialogModule: AppDialogModule;

  beforeEach(() => {
    appDialogModule = new AppDialogModule();
  });

  it('should create an instance', () => {
    expect(appDialogModule).toBeTruthy();
  });
});
