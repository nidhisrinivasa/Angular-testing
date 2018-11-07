import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { toBase64String } from '@angular/compiler/src/output/source_map';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testingdemo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testingdemo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testingdemo!');
  });
  it('testing the sum of 2 numbers', () => {
    //Arrange
    let app = new AppComponent();

    //Act
    const res = app.sum(4,5);

    //Assert
    expect(res).toBe(9);
  })

  it('testing the sub of 2 numbers', () => {
    //Arrange
    let app = new AppComponent();

    //Act
    const res = app.sub(0,5);

    //Assert
    expect(res).toBe(-5);
  })

  it('testing the Productsum of 2 numbers', () => {
    //Arrange
    let app = new AppComponent();

    //Act
    const res = app.productSum(20,30);

    //Assert
    expect(res).toBe(50);
  })
});
