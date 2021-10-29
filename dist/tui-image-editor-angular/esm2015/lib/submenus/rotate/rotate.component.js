import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ngx-translate/core";
export class RotateComponent {
    constructor() {
        this.rotationChange = new EventEmitter();
    }
    rotateImage(rotationAngle) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const newAngle = this.rotation + rotationAngle;
            const isRotatable = newAngle >= -360 && newAngle <= 360;
            if (isRotatable) {
                try {
                    yield ((_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.setAngle(newAngle));
                    this.rotation = newAngle;
                    this.rotationChange.emit(newAngle);
                }
                catch (_err) {
                    console.error(_err);
                }
            }
        });
    }
    rotationChanged(currentRotationValue, isSilent) {
        return __awaiter(this, void 0, void 0, function* () {
            let rotationValueToUse = typeof currentRotationValue === 'number'
                ? currentRotationValue
                : this.rotation;
            let functionToExecute = () => {
                var _a;
                (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.setAngle(rotationValueToUse, isSilent).catch((_err) => {
                    console.error(_err);
                }).finally(() => {
                    this.rotationChange.emit(rotationValueToUse);
                });
            };
            if (isSilent) {
                functionToExecute();
            }
            else {
                setTimeout(functionToExecute);
            }
        });
    }
}
RotateComponent.ɵfac = function RotateComponent_Factory(t) { return new (t || RotateComponent)(); };
RotateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RotateComponent, selectors: [["tui-image-editor-submenus-rotate"]], inputs: { imageEditor: "imageEditor", rotation: "rotation" }, outputs: { rotationChange: "rotationChange" }, decls: 23, vars: 5, consts: [[1, "tui-image-editor-menu-rotate"], [1, "tui-image-editor-submenu-item"], [1, "tie-rotate-button", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-justify-content-center", "tui-image-editor-my-3"], [1, "tui-image-editor-button", "clockwise", 3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-rotate-clockwise", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-rotate-clockwise", 1, "active", "use-default"], [1, "tui-image-editor-button", "counterclockwise", 3, "click"], [0, "xlink", "href", "#ic-rotate-counterclockwise", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-rotate-counterclockwise", 1, "active", "use-default"], [1, "tui-image-editor-newline", "tui-image-editor-range-wrap", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-my-3"], [1, "range"], ["type", "range", "min", "-360", "max", "360", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "-360", "max", "360", "step", "1", 1, "tie-rotate-range-value", "tui-image-editor-range-value", 3, "ngModel", "ngModelChange", "change"]], template: function RotateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵlistener("click", function RotateComponent_Template_div_click_3_listener() { return ctx.rotateImage(30); });
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(5, "svg", 4);
        i0.ɵɵelement(6, "use", 5);
        i0.ɵɵelement(7, "use", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(8, "label");
        i0.ɵɵtext(9, " 30\u00B0 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 7);
        i0.ɵɵlistener("click", function RotateComponent_Template_div_click_10_listener() { return ctx.rotateImage(-30); });
        i0.ɵɵelementStart(11, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(12, "svg", 4);
        i0.ɵɵelement(13, "use", 8);
        i0.ɵɵelement(14, "use", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(15, "label");
        i0.ɵɵtext(16, " -30\u00B0 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 10);
        i0.ɵɵelementStart(18, "label", 11);
        i0.ɵɵtext(19);
        i0.ɵɵpipe(20, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "input", 12);
        i0.ɵɵlistener("ngModelChange", function RotateComponent_Template_input_ngModelChange_21_listener($event) { return ctx.rotation = $event; })("ngModelChange", function RotateComponent_Template_input_ngModelChange_21_listener($event) { return ctx.rotationChanged($event, true); })("change", function RotateComponent_Template_input_change_21_listener($event) { return ctx.rotationChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "input", 13);
        i0.ɵɵlistener("ngModelChange", function RotateComponent_Template_input_ngModelChange_22_listener($event) { return ctx.rotation = $event; })("ngModelChange", function RotateComponent_Template_input_ngModelChange_22_listener($event) { return ctx.rotationChanged($event, true); })("change", function RotateComponent_Template_input_change_22_listener($event) { return ctx.rotationChanged($event, false); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(19);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(20, 3, "tui-image-editor-angular-submenus-rotate-slider"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.rotation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.rotation);
    } }, directives: [i1.RangeValueAccessor, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i1.NumberValueAccessor], pipes: [i2.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RotateComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-rotate',
                templateUrl: './rotate.component.html',
                styleUrls: ['./rotate.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], rotation: [{
            type: Input
        }], rotationChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci9zcmMvbGliL3N1Ym1lbnVzL3JvdGF0ZS9yb3RhdGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvc3VibWVudXMvcm90YXRlL3JvdGF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU8vRSxNQUFNLE9BQU8sZUFBZTtJQUsxQjtRQUZVLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUV2QyxDQUFDO0lBRVYsV0FBVyxDQUFDLGFBQXFCOzs7WUFDckMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7WUFDL0MsTUFBTSxXQUFXLEdBQUcsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxHQUFHLENBQUM7WUFDeEQsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSTtvQkFDRixhQUFNLElBQUksQ0FBQyxXQUFXLDBDQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwQztnQkFBQyxPQUFPLElBQUksRUFBRTtvQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQjthQUNGOztLQUNGO0lBRUssZUFBZSxDQUNuQixvQkFBb0MsRUFDcEMsUUFBaUI7O1lBRWpCLElBQUksa0JBQWtCLEdBQ3BCLE9BQU8sb0JBQW9CLEtBQUssUUFBUTtnQkFDdEMsQ0FBQyxDQUFDLG9CQUFvQjtnQkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFcEIsSUFBSSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7O2dCQUMzQixNQUFBLElBQUksQ0FBQyxXQUFXLDBDQUNaLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLEVBQ3RDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsRUFDQSxPQUFPLENBQUMsR0FBRyxFQUFFO29CQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQy9DLENBQUMsRUFBRTtZQUNQLENBQUMsQ0FBQztZQUNGLElBQUksUUFBUSxFQUFFO2dCQUNaLGlCQUFpQixFQUFFLENBQUM7YUFDckI7aUJBQU07Z0JBQ0wsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDO0tBQUE7OzhFQTdDVSxlQUFlO29EQUFmLGVBQWU7UUNQNUIsOEJBQTBDO1FBQ3hDLDhCQUEyQztRQUN6Qyw4QkFBK0k7UUFDN0ksOEJBQXlFO1FBQTFCLHlGQUFTLGdCQUFZLEVBQUUsQ0FBQyxJQUFDO1FBQ3RFLDJCQUFLO1FBQ0gsbUJBQTRCO1FBQTVCLDhCQUE0QjtRQUMxQix5QkFHTztRQUNQLHlCQUdPO1FBQ1QsaUJBQU07UUFDUixpQkFBTTtRQUNOLG9CQUFPO1FBQVAsNkJBQU87UUFBQywwQkFBSTtRQUFBLGlCQUFRO1FBQ3RCLGlCQUFNO1FBQ04sK0JBR0M7UUFEQywwRkFBUyxpQkFBYSxFQUFFLENBQUMsSUFBQztRQUUxQiw0QkFBSztRQUNILG1CQUE0QjtRQUE1QiwrQkFBNEI7UUFDMUIsMEJBR087UUFDUCwwQkFHTztRQUNULGlCQUFNO1FBQ1IsaUJBQU07UUFDTixvQkFBTztRQUFQLDhCQUFPO1FBQUMsNEJBQUs7UUFBQSxpQkFBUTtRQUN2QixpQkFBTTtRQUNSLGlCQUFNO1FBQ04sZ0NBRUM7UUFDQyxrQ0FBcUI7UUFBQSxhQUVuQjs7UUFBQSxpQkFBUTtRQUNWLGtDQU9FO1FBTEEsMklBQXNCLHFHQUNMLDRCQUF3QixJQUFJLENBQUMsSUFEeEIsdUZBRVosNEJBQXdCLEtBQUssQ0FBQyxJQUZsQjtRQUZ4QixpQkFPRTtRQUNGLGtDQVNFO1FBSEEsMklBQXNCLHFHQUNMLDRCQUF3QixJQUFJLENBQUMsSUFEeEIsdUZBRVosNEJBQXdCLEtBQUssQ0FBQyxJQUZsQjtRQU54QixpQkFTRTtRQUNKLGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTs7UUF2QnFCLGdCQUVuQjtRQUZtQiw4RkFFbkI7UUFHQSxlQUFzQjtRQUF0QixzQ0FBc0I7UUFZdEIsZUFBc0I7UUFBdEIsc0NBQXNCOzt1RkRsRGpCLGVBQWU7Y0FMM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDO3NDQUVVLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHVpLWltYWdlLWVkaXRvci1zdWJtZW51cy1yb3RhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcm90YXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcm90YXRlLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUm90YXRlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaW1hZ2VFZGl0b3I6IGFueTtcbiAgQElucHV0KCkgcm90YXRpb246IG51bWJlcjtcbiAgQE91dHB1dCgpIHJvdGF0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIHJvdGF0ZUltYWdlKHJvdGF0aW9uQW5nbGU6IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0FuZ2xlID0gdGhpcy5yb3RhdGlvbiArIHJvdGF0aW9uQW5nbGU7XG4gICAgY29uc3QgaXNSb3RhdGFibGUgPSBuZXdBbmdsZSA+PSAtMzYwICYmIG5ld0FuZ2xlIDw9IDM2MDtcbiAgICBpZiAoaXNSb3RhdGFibGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaW1hZ2VFZGl0b3I/LnNldEFuZ2xlKG5ld0FuZ2xlKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IG5ld0FuZ2xlO1xuICAgICAgICB0aGlzLnJvdGF0aW9uQ2hhbmdlLmVtaXQobmV3QW5nbGUpO1xuICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKF9lcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJvdGF0aW9uQ2hhbmdlZChcbiAgICBjdXJyZW50Um90YXRpb25WYWx1ZTogbnVtYmVyIHwgRXZlbnQsXG4gICAgaXNTaWxlbnQ6IGJvb2xlYW5cbiAgKSB7XG4gICAgbGV0IHJvdGF0aW9uVmFsdWVUb1VzZSA9XG4gICAgICB0eXBlb2YgY3VycmVudFJvdGF0aW9uVmFsdWUgPT09ICdudW1iZXInXG4gICAgICAgID8gY3VycmVudFJvdGF0aW9uVmFsdWVcbiAgICAgICAgOiB0aGlzLnJvdGF0aW9uO1xuXG4gICAgbGV0IGZ1bmN0aW9uVG9FeGVjdXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbWFnZUVkaXRvclxuICAgICAgICA/LnNldEFuZ2xlKHJvdGF0aW9uVmFsdWVUb1VzZSwgaXNTaWxlbnQpXG4gICAgICAgIC5jYXRjaCgoX2VycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoX2Vycik7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdGF0aW9uQ2hhbmdlLmVtaXQocm90YXRpb25WYWx1ZVRvVXNlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoaXNTaWxlbnQpIHtcbiAgICAgIGZ1bmN0aW9uVG9FeGVjdXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb25Ub0V4ZWN1dGUpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItbWVudS1yb3RhdGVcIj5cbiAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3Itc3VibWVudS1pdGVtXCI+XG4gICAgPGRpdiBjbGFzcz1cInRpZS1yb3RhdGUtYnV0dG9uIHR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3cgdHVpLWltYWdlLWVkaXRvci1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItbXktM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItYnV0dG9uIGNsb2Nrd2lzZVwiIChjbGljayk9XCJyb3RhdGVJbWFnZSgzMClcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwic3ZnX2ljLXN1Ym1lbnVcIj5cbiAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIiNpYy1yb3RhdGUtY2xvY2t3aXNlXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgPjwvdXNlPlxuICAgICAgICAgICAgPHVzZVxuICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLXJvdGF0ZS1jbG9ja3dpc2VcIlxuICAgICAgICAgICAgICBjbGFzcz1cImFjdGl2ZSB1c2UtZGVmYXVsdFwiXG4gICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bGFiZWw+IDMwwrAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItYnV0dG9uIGNvdW50ZXJjbG9ja3dpc2VcIlxuICAgICAgICAoY2xpY2spPVwicm90YXRlSW1hZ2UoLTMwKVwiXG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgIHhsaW5rOmhyZWY9XCIjaWMtcm90YXRlLWNvdW50ZXJjbG9ja3dpc2VcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiXG4gICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgIHhsaW5rOmhyZWY9XCIjaWMtcm90YXRlLWNvdW50ZXJjbG9ja3dpc2VcIlxuICAgICAgICAgICAgICBjbGFzcz1cImFjdGl2ZSB1c2UtZGVmYXVsdFwiXG4gICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bGFiZWw+IC0zMMKwIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItbmV3bGluZSB0dWktaW1hZ2UtZWRpdG9yLXJhbmdlLXdyYXAgdHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLWl0ZW1zLWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLWp1c3RpZnktY29udGVudC1jZW50ZXIgdHVpLWltYWdlLWVkaXRvci1teS0zXCJcbiAgICA+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJyYW5nZVwiPnt7XG4gICAgICAgIFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLXJvdGF0ZS1zbGlkZXJcIiB8IHRyYW5zbGF0ZVxuICAgICAgfX08L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwicm90YXRpb25cIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJyb3RhdGlvbkNoYW5nZWQoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAgIChjaGFuZ2UpPVwicm90YXRpb25DaGFuZ2VkKCRldmVudCwgZmFsc2UpXCJcbiAgICAgICAgbWluPVwiLTM2MFwiXG4gICAgICAgIG1heD1cIjM2MFwiXG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBtaW49XCItMzYwXCJcbiAgICAgICAgbWF4PVwiMzYwXCJcbiAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICBjbGFzcz1cInRpZS1yb3RhdGUtcmFuZ2UtdmFsdWUgdHVpLWltYWdlLWVkaXRvci1yYW5nZS12YWx1ZVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwicm90YXRpb25cIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJyb3RhdGlvbkNoYW5nZWQoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAgIChjaGFuZ2UpPVwicm90YXRpb25DaGFuZ2VkKCRldmVudCwgZmFsc2UpXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=