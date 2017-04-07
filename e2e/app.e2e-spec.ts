import { IntramuralSoccerManagerPage } from './app.po';

describe('intramural-soccer-manager App', function() {
  let page: IntramuralSoccerManagerPage;

  beforeEach(() => {
    page = new IntramuralSoccerManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
