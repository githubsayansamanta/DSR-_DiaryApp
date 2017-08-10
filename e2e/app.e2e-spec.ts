import { DiaryDSRAppPage } from './app.po';

describe('diary-dsrapp App', () => {
  let page: DiaryDSRAppPage;

  beforeEach(() => {
    page = new DiaryDSRAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
