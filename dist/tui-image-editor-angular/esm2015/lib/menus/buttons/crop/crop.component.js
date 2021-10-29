import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class CropComponent {
    constructor() {
        this.selected = false;
        this.clicked = new EventEmitter();
    }
}
CropComponent.ɵfac = function CropComponent_Factory(t) { return new (t || CropComponent)(); };
CropComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CropComponent, selectors: [["tui-image-editor-menus-buttons-crop"]], inputs: { imageChosen: "imageChosen", selected: "selected" }, outputs: { clicked: "clicked" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-crop", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-crop", 1, "active", "use-default"], [0, "xlink", "href", "#ic-crop", 1, "hover", "use-default"]], template: function CropComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function CropComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.clicked.emit("crop") : null; });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-crop tui-image-editor-item normal " + (ctx.selected ? "active" : ""));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-crop-tooltip"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CropComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-crop',
                templateUrl: './crop.component.html',
                styleUrls: ['./crop.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], selected: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2Nyb3AvY3JvcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2Nyb3AvY3JvcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0UsTUFBTSxPQUFPLGFBQWE7SUFLeEI7UUFIUyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUV0RCxDQUFDOzswRUFMTCxhQUFhO2tEQUFiLGFBQWE7UUNQMUIsOEJBUUM7UUFQQyx5R0FBdUIsaUJBQWEsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFDOztRQVFuRCxtQkFBeUI7UUFBekIsOEJBQXlCO1FBQ3ZCLHlCQUE0RDtRQUM1RCx5QkFBNEQ7UUFDNUQseUJBQTJEO1FBQzdELGlCQUFNO1FBQ1IsaUJBQU07O1FBVEosNEZBRUM7UUFMRCxtR0FFQzs7dUZER1UsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7c0NBRVUsV0FBVztrQkFBbkIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDSSxPQUFPO2tCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtY3JvcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcm9wLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3JvcC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENyb3BDb21wb25lbnQgIHtcbiAgQElucHV0KCkgaW1hZ2VDaG9zZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjbGlja2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsIjxkaXZcbiAgKGNsaWNrKT1cImltYWdlQ2hvc2VuID8gY2xpY2tlZC5lbWl0KCdjcm9wJykgOiBudWxsXCJcbiAgW3RpdGxlXT1cIlxuICAgICd0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItbWVudXMtYnV0dG9ucy1jcm9wLXRvb2x0aXAnIHwgdHJhbnNsYXRlXG4gIFwiXG4gIFtjbGFzc109XCJcbiAgICAndGllLWJ0bi1jcm9wIHR1aS1pbWFnZS1lZGl0b3ItaXRlbSBub3JtYWwgJyArIChzZWxlY3RlZCA/ICdhY3RpdmUnIDogJycpXG4gIFwiXG4+XG4gIDxzdmcgY2xhc3M9XCJzdmdfaWMtbWVudVwiPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1jcm9wXCIgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtY3JvcFwiIGNsYXNzPVwiYWN0aXZlIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWNyb3BcIiBjbGFzcz1cImhvdmVyIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gIDwvc3ZnPlxuPC9kaXY+XG4iXX0=