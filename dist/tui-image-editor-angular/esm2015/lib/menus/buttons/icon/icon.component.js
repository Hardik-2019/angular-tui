import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class IconComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconComponent, selectors: [["tui-image-editor-menus-buttons-icon"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-icon", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon", 1, "active", "use-default"], [0, "xlink", "href", "#ic-icon", 1, "hover", "use-default"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function IconComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("icon") : null; });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-icon tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-icon"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2ljb24vaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0UsTUFBTSxPQUFPLGFBQWE7SUFLeEI7UUFIUyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUV0RCxDQUFDOzswRUFMTCxhQUFhO2tEQUFiLGFBQWE7UUNQMUIsOEJBT0M7UUFOQyx5R0FBdUIsaUJBQWEsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFDOztRQU9uRCxtQkFBeUI7UUFBekIsOEJBQXlCO1FBQ3ZCLHlCQUE0RDtRQUM1RCx5QkFBNEQ7UUFDNUQseUJBQTJEO1FBQzdELGlCQUFNO1FBQ1IsaUJBQU07O1FBVkosNEZBR0M7UUFKRCwyRkFBbUU7O3VGREt4RCxhQUFhO2NBTHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyxXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNwQztzQ0FFVSxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNJLE9BQU87a0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGltYWdlQ2hvc2VuOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iLCI8ZGl2XG4gIChjbGljayk9XCJpbWFnZUNob3NlbiA/IGNsaWNrZWQuZW1pdCgnaWNvbicpIDogbnVsbFwiXG4gIFt0aXRsZV09XCIndHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLW1lbnVzLWJ1dHRvbnMtaWNvbicgfCB0cmFuc2xhdGVcIlxuICBbY2xhc3NdPVwiXG4gICAgJ3RpZS1idG4taWNvbiB0dWktaW1hZ2UtZWRpdG9yLWl0ZW0gbm9ybWFsICcgK1xuICAgIChzZWxlY3RlZCA/ICdhY3RpdmUnIDogJycpXG4gIFwiXG4+XG4gIDxzdmcgY2xhc3M9XCJzdmdfaWMtbWVudVwiPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1pY29uXCIgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtaWNvblwiIGNsYXNzPVwiYWN0aXZlIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWljb25cIiBjbGFzcz1cImhvdmVyIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gIDwvc3ZnPlxuPC9kaXY+XG4iXX0=