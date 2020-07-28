import { I4ChallengeFrontendPage } from './app.po';

describe('i4-challenge-frontend App', function() {
  let page: I4ChallengeFrontendPage;

  beforeEach(() => {
    page = new I4ChallengeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
