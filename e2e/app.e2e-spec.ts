import { Ng2QuillDemoPage } from './app.po';

describe('ng2-quill-demo App', function() {
  let page: Ng2QuillDemoPage;

  beforeEach(() => {
    page = new Ng2QuillDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
