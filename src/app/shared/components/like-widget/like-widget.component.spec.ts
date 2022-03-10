import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {

    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent = null;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent); // declaracao para ser chamado antes de cada bloco ser executado
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`Should create component`, () => {
        expect(component).toBeTruthy();
    });
    
    it(`Should auto generate ID during ngOninitwhen (@Input id) is not assigned`, () => {
        fixture.detectChanges();
        expect(component.id).toBeTruthy();
    });

    it(`Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned`, () => {
        const someId = 'someId';
        component.id = someId;
        fixture.detectChanges();
        expect(component.id).toBe(someId);
    });

    it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
        spyOn(component.liked, 'emit') //tem que acionar o espião para ele conseguir capitar a chamada do emitter
        fixture.detectChanges(); // detecta a atribuição de valores 
        component.like(); // chama o componente
        expect(component.liked.emit).toHaveBeenCalled();
    });

});