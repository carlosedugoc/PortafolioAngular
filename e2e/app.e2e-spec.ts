import { WebtemplatePage } from './app.po';

describe('webtemplate App', () => {
  let page: WebtemplatePage;

  beforeEach(() => {
    page = new WebtemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
