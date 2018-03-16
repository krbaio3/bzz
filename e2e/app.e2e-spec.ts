import { BzzWipPage } from './app.po';

describe('bzz-wip App', function() {
  let page: BzzWipPage;

  beforeEach(() => {
    page = new BzzWipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
