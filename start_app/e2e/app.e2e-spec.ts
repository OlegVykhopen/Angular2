import { StartAppPage } from './app.po';

describe('start-app App', function() {
  let page: StartAppPage;

  beforeEach(() => {
    page = new StartAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
