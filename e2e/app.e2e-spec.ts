import { CampainManagePage } from './app.po';

describe('campain-manage App', function() {
  let page: CampainManagePage;

  beforeEach(() => {
    page = new CampainManagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
