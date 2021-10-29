import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class DeleteAllComponent {
    constructor() {
        this.cancelCroppingRequested = new EventEmitter();
    }
    deleteAll() {
        if (this.imageEditor != null && this.imageChosen) {
            this.cancelCroppingRequested.emit();
            this.imageEditor.clearObjects();
        }
    }
}
DeleteAllComponent.ɵfac = function DeleteAllComponent_Factory(t) { return new (t || DeleteAllComponent)(); };
DeleteAllComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DeleteAllComponent, selectors: [["tui-image-editor-menus-buttons-delete-all"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, outputs: { cancelCroppingRequested: "cancelCroppingRequested" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-delete-all", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-delete-all", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-delete-all", 1, "hover", "use-default"]], template: function DeleteAllComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function DeleteAllComponent_Template_div_click_0_listener() { return ctx.deleteAll(); });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-deleteAll tui-image-editor-item help " + (ctx.imageChosen ? "enabled" : "disabled"));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-deleteAll"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DeleteAllComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-delete-all',
                templateUrl: './delete-all.component.html',
                styleUrls: ['./delete-all.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }], cancelCroppingRequested: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2RlbGV0ZS1hbGwvZGVsZXRlLWFsbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2RlbGV0ZS1hbGwvZGVsZXRlLWFsbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0UsTUFBTSxPQUFPLGtCQUFrQjtJQU03QjtRQUZBLDRCQUF1QixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXRELENBQUM7SUFFaEIsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7O29GQWJVLGtCQUFrQjt1REFBbEIsa0JBQWtCO1FDUC9CLDhCQU9DO1FBREMsNEZBQVMsZUFBVyxJQUFDOztRQUVyQixtQkFBeUI7UUFBekIsOEJBQXlCO1FBQ3ZCLHlCQUFrRTtRQUNsRSx5QkFBb0U7UUFDcEUseUJBQWlFO1FBQ25FLGlCQUFNO1FBQ1IsaUJBQU07O1FBWEosMkdBR0M7UUFKRCxnR0FBd0U7O3VGRE03RCxrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQ0FBMkM7Z0JBQ3JELFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDO3NDQUVVLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBRU4sdUJBQXVCO2tCQUR0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtZGVsZXRlLWFsbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWxldGUtYWxsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGVsZXRlLWFsbC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERlbGV0ZUFsbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGltYWdlQ2hvc2VuOiBib29sZWFuO1xuICBASW5wdXQoKSBpbWFnZUVkaXRvcjogYW55O1xuICBAT3V0cHV0KClcbiAgY2FuY2VsQ3JvcHBpbmdSZXF1ZXN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGRlbGV0ZUFsbCgpIHtcbiAgICBpZiAodGhpcy5pbWFnZUVkaXRvciAhPSBudWxsICYmIHRoaXMuaW1hZ2VDaG9zZW4pIHtcbiAgICAgIHRoaXMuY2FuY2VsQ3JvcHBpbmdSZXF1ZXN0ZWQuZW1pdCgpO1xuICAgICAgdGhpcy5pbWFnZUVkaXRvci5jbGVhck9iamVjdHMoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXZcbiAgW3RpdGxlXT1cIid0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItbWVudXMtYnV0dG9ucy1kZWxldGVBbGwnIHwgdHJhbnNsYXRlXCJcbiAgW2NsYXNzXT1cIlxuICAgICd0aWUtYnRuLWRlbGV0ZUFsbCB0dWktaW1hZ2UtZWRpdG9yLWl0ZW0gaGVscCAnICtcbiAgICAoaW1hZ2VDaG9zZW4gPyAnZW5hYmxlZCcgOiAnZGlzYWJsZWQnKVxuICBcIlxuICAoY2xpY2spPVwiZGVsZXRlQWxsKClcIlxuPlxuICA8c3ZnIGNsYXNzPVwic3ZnX2ljLW1lbnVcIj5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtZGVsZXRlLWFsbFwiIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWRlbGV0ZS1hbGxcIiBjbGFzcz1cImRpc2FibGVkIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWRlbGV0ZS1hbGxcIiBjbGFzcz1cImhvdmVyIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gIDwvc3ZnPlxuPC9kaXY+XG4iXX0=