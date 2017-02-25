import { SportJunkieDashboardPage } from './app.po';

describe('sport-junkie-dashboard App', () => {
  let page: SportJunkieDashboardPage;

  beforeEach(() => {
    page = new SportJunkieDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
