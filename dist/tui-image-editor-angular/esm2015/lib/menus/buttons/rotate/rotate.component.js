import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class RotateComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
RotateComponent.ɵfac = function RotateComponent_Factory(t) { return new (t || RotateComponent)(); };
RotateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RotateComponent, selectors: [["tui-image-editor-menus-buttons-rotate"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-rotate", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-rotate", 1, "active", "use-default"], [0, "xlink", "href", "#ic-rotate", 1, "hover", "use-default"]], template: function RotateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function RotateComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("rotate") : null; });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-rotate tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-rotate"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RotateComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-rotate',
                templateUrl: './rotate.component.html',
                styleUrls: ['./rotate.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci9zcmMvbGliL21lbnVzL2J1dHRvbnMvcm90YXRlL3JvdGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL3JvdGF0ZS9yb3RhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTy9FLE1BQU0sT0FBTyxlQUFlO0lBSzFCO1FBSFMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFFdEQsQ0FBQzs7OEVBTEwsZUFBZTtvREFBZixlQUFlO1FDUDVCLDhCQU9DO1FBTkMsMkdBQXVCLGlCQUFhLFFBQVEsQ0FBQyxHQUFHLElBQUksSUFBQzs7UUFPckQsbUJBQXlCO1FBQXpCLDhCQUF5QjtRQUN2Qix5QkFBOEQ7UUFDOUQseUJBQThEO1FBQzlELHlCQUE2RDtRQUMvRCxpQkFBTTtRQUNSLGlCQUFNOztRQVZKLDhGQUdDO1FBSkQsNkZBQXFFOzt1RkRLMUQsZUFBZTtjQUwzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEM7c0NBRVUsV0FBVztrQkFBbkIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDSSxPQUFPO2tCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtcm90YXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JvdGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JvdGF0ZS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJvdGF0ZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGltYWdlQ2hvc2VuOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iLCI8ZGl2XG4gIChjbGljayk9XCJpbWFnZUNob3NlbiA/IGNsaWNrZWQuZW1pdCgncm90YXRlJykgOiBudWxsXCJcbiAgW3RpdGxlXT1cIid0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItbWVudXMtYnV0dG9ucy1yb3RhdGUnIHwgdHJhbnNsYXRlXCJcbiAgW2NsYXNzXT1cIlxuICAgICd0aWUtYnRuLXJvdGF0ZSB0dWktaW1hZ2UtZWRpdG9yLWl0ZW0gbm9ybWFsICcgK1xuICAgIChzZWxlY3RlZCA/ICdhY3RpdmUnIDogJycpXG4gIFwiXG4+XG4gIDxzdmcgY2xhc3M9XCJzdmdfaWMtbWVudVwiPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1yb3RhdGVcIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1yb3RhdGVcIiBjbGFzcz1cImFjdGl2ZSB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1yb3RhdGVcIiBjbGFzcz1cImhvdmVyIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gIDwvc3ZnPlxuPC9kaXY+XG4iXX0=