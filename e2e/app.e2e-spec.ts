import { BzzWipPage } from './app.po';

describe('ng5 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new BzzWipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
