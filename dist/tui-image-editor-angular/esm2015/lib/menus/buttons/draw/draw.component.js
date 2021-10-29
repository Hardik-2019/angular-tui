import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class DrawComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
DrawComponent.ɵfac = function DrawComponent_Factory(t) { return new (t || DrawComponent)(); };
DrawComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DrawComponent, selectors: [["tui-image-editor-menus-buttons-draw"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-draw", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-draw", 1, "active", "use-default"], [0, "xlink", "href", "#ic-draw", 1, "hover", "use-default"]], template: function DrawComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function DrawComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("draw") : null; });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-draw tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-draw"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-draw',
                templateUrl: './draw.component.html',
                styleUrls: ['./draw.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2RyYXcvZHJhdy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2RyYXcvZHJhdy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0UsTUFBTSxPQUFPLGFBQWE7SUFLeEI7UUFIUyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUV0RCxDQUFDOzswRUFMTCxhQUFhO2tEQUFiLGFBQWE7UUNQMUIsOEJBTUM7UUFMQyx5R0FBdUIsaUJBQWEsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFDOztRQU1uRCxtQkFBeUI7UUFBekIsOEJBQXlCO1FBQ3ZCLHlCQUE0RDtRQUM1RCx5QkFBNEQ7UUFDNUQseUJBQTJEO1FBQzdELGlCQUFNO1FBQ1IsaUJBQU07O1FBVEosNEZBRUM7UUFIRCwyRkFBbUU7O3VGREt4RCxhQUFhO2NBTHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyxXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNwQztzQ0FFVSxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1kcmF3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcmF3LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRHJhd0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGltYWdlQ2hvc2VuOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iLCI8ZGl2XG4gIChjbGljayk9XCJpbWFnZUNob3NlbiA/IGNsaWNrZWQuZW1pdCgnZHJhdycpIDogbnVsbFwiXG4gIFt0aXRsZV09XCIndHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLW1lbnVzLWJ1dHRvbnMtZHJhdycgfCB0cmFuc2xhdGVcIlxuICBbY2xhc3NdPVwiXG4gICAgJ3RpZS1idG4tZHJhdyB0dWktaW1hZ2UtZWRpdG9yLWl0ZW0gbm9ybWFsICcgKyAoc2VsZWN0ZWQgPyAnYWN0aXZlJyA6ICcnKVxuICBcIlxuPlxuICA8c3ZnIGNsYXNzPVwic3ZnX2ljLW1lbnVcIj5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtZHJhd1wiIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWRyYXdcIiBjbGFzcz1cImFjdGl2ZSB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1kcmF3XCIgY2xhc3M9XCJob3ZlciB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICA8L3N2Zz5cbjwvZGl2PlxuIl19