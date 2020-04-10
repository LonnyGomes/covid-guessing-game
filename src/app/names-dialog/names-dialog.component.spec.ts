import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesDialogComponent } from './names-dialog.component';

describe('NamesDialogComponent', () => {
    let component: NamesDialogComponent;
    let fixture: ComponentFixture<NamesDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NamesDialogComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NamesDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
