import { Component } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, TestBed, async } from '@angular/core/testing';
import { ActivatedRoute, Data } from '@angular/router';

/**
 * Load the implementations that should be tested.
 */
import { ShopComponent } from './shop.component';
import { UserService } from '../../core/service/user.service';

describe('Shop Component', () => {
  let fixture;
  /**
   * Provide our implementations or mocks to the dependency injector
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopComponent],
      providers: [UserService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(ShopComponent);
  });
  it(
    'should create the app',
    async(() => {
      const shopComponent = fixture.debugElement.componentInstance;
      expect(shopComponent).toBeDefined();
    })
  );
  it(
    `should have as h1 'Welcome to my Shop!`,
    async(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1')).not.toBe(null);
    })
  );
});
