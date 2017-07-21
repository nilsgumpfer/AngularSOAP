import { AngularSOAPPage } from './app.po';

describe('angular-soap App', () => {
  let page: AngularSOAPPage;

  beforeEach(() => {
    page = new AngularSOAPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
