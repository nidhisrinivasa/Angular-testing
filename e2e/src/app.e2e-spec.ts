import { AppPage } from './app.po';
import {by, element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to testingdemo!');
  });

  it('should display Paragraph message', () => {
    let p1=element(by.css('.csscolor'));
    let text= p1.getText();
    expect(text).toBe('welcome again');
  });

  it('should have ul tag', () => {
    let c= element(by.tagName('ul')).isPresent();
    expect(c).toBeTruthy();
  });

  it('should have 1 p tag', () => {
    let c= element.all(by.tagName('p')).count();
    expect(c).toBe(1);
  });

  it('should check for first list element', () => {
    let c= element.all(by.tagName('li')).first();
    expect(c.getText()).toBe('Animal');
  });
});
