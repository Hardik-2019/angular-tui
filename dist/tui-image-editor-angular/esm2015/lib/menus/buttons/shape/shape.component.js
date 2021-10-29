import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class ShapeComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
ShapeComponent.ɵfac = function ShapeComponent_Factory(t) { return new (t || ShapeComponent)(); };
ShapeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ShapeComponent, selectors: [["tui-image-editor-menus-buttons-shape"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-shape", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-shape", 1, "active", "use-default"], [0, "xlink", "href", "#ic-shape", 1, "hover", "use-default"]], template: function ShapeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function ShapeComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("shape") : null; });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-shape tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-shape"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShapeComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-shape',
                templateUrl: './shape.component.html',
                styleUrls: ['./shape.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvbWVudXMvYnV0dG9ucy9zaGFwZS9zaGFwZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL3NoYXBlL3NoYXBlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8vRSxNQUFNLE9BQU8sY0FBYztJQUt6QjtRQUhTLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0lBRXRELENBQUM7OzRFQUxMLGNBQWM7bURBQWQsY0FBYztRQ1AzQiw4QkFNQztRQUxDLDBHQUF1QixpQkFBYSxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUM7O1FBTXBELG1CQUF5QjtRQUF6Qiw4QkFBeUI7UUFDdkIseUJBQTZEO1FBQzdELHlCQUE2RDtRQUM3RCx5QkFBNEQ7UUFDOUQsaUJBQU07UUFDUixpQkFBTTs7UUFUSiw2RkFFQztRQUhELDRGQUFvRTs7dUZES3pELGNBQWM7Y0FMMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDO3NDQUVVLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0ksT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLXNoYXBlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NoYXBlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2hhcGUuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaGFwZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGltYWdlQ2hvc2VuOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iLCI8ZGl2XG4gIChjbGljayk9XCJpbWFnZUNob3NlbiA/IGNsaWNrZWQuZW1pdCgnc2hhcGUnKSA6IG51bGxcIlxuICBbdGl0bGVdPVwiJ3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1tZW51cy1idXR0b25zLXNoYXBlJyB8IHRyYW5zbGF0ZVwiXG4gIFtjbGFzc109XCJcbiAgICAndGllLWJ0bi1zaGFwZSB0dWktaW1hZ2UtZWRpdG9yLWl0ZW0gbm9ybWFsICcgKyAoc2VsZWN0ZWQgPyAnYWN0aXZlJyA6ICcnKVxuICBcIlxuPlxuICA8c3ZnIGNsYXNzPVwic3ZnX2ljLW1lbnVcIj5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtc2hhcGVcIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1zaGFwZVwiIGNsYXNzPVwiYWN0aXZlIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLXNoYXBlXCIgY2xhc3M9XCJob3ZlciB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICA8L3N2Zz5cbjwvZGl2PlxuIl19