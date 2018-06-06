import { FicusPage } from './app.po';

describe('ficus App', () => {
  let page: FicusPage;

  beforeEach(() => {
    page = new FicusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
