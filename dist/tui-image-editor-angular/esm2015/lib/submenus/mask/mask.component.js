import { Component, Input, ViewChild, } from '@angular/core';
import { eventNames, historyNames } from '../../consts';
import { getActiveObjectId, isFileApiSupported } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
const _c0 = ["fileInput"];
export class MaskComponent {
    constructor() {
        this.onObjectActivatedEventListener = this.onObjectActivated.bind(this);
    }
    ngOnChanges(changes) {
        var _a, _b;
        var that = this;
        if (changes['imageEditor']) {
            this.activeObjectId = getActiveObjectId(changes['imageEditor'].currentValue);
            (_a = changes['imageEditor'].previousValue) === null || _a === void 0 ? void 0 : _a.off(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
            (_b = changes['imageEditor'].currentValue) === null || _b === void 0 ? void 0 : _b.on(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
        }
    }
    ngOnDestroy() {
        if (this.imageEditor) {
            this.imageEditor.off(eventNames.OBJECT_ACTIVATED, this.onObjectActivatedEventListener);
        }
    }
    onObjectActivated(props) {
        this.activeObjectId = props === null || props === void 0 ? void 0 : props.id;
    }
    onMaskChosen(event) {
        let selectedFile = event.target.files[0];
        if (selectedFile != null) {
            if (!isFileApiSupported()) {
                alert('This browser does not support file-api');
            }
            let imgUrl = URL.createObjectURL(selectedFile);
            this.imageEditor
                .loadImageFromURL(this.imageEditor.toDataURL(), 'FilterImage')
                .then(() => {
                this.imageEditor.addImageObject(imgUrl).then(() => {
                    URL.revokeObjectURL(selectedFile);
                });
                this.imageEditor._invoker.fire(eventNames.EXECUTE_COMMAND, historyNames.LOAD_MASK_IMAGE);
                if (this.fileInput != null) {
                    this.fileInput.nativeElement.value = '';
                }
            });
        }
    }
    applyMask() {
        if (this.activeObjectId != null &&
            getActiveObjectId(this.imageEditor) == this.activeObjectId) {
            var props = this.imageEditor.getObjectProperties(this.activeObjectId, 'type');
            if (props.type === 'image') {
                this.imageEditor.applyFilter('mask', {
                    maskObjId: this.activeObjectId,
                });
            }
        }
    }
}
MaskComponent.ɵfac = function MaskComponent_Factory(t) { return new (t || MaskComponent)(); };
MaskComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MaskComponent, selectors: [["tui-image-editor-submenus-mask"]], viewQuery: function MaskComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
    } }, inputs: { imageEditor: "imageEditor" }, features: [i0.ɵɵNgOnChangesFeature], decls: 21, vars: 6, consts: [[1, "tui-image-editor-menu-mask"], [1, "tui-image-editor-submenu-item"], [1, "tui-image-editor-d-flex", "tui-image-editor-justify-content-center", "tui-image-editor-my-3"], [1, "tui-image-editor-button"], ["type", "file", "accept", "image/*", 1, "tie-mask-image-file", 3, "change"], ["fileInput", ""], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-mask-load", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-mask-load", 1, "active", "use-default"], [1, "tie-mask-apply", "tui-image-editor-newline", "apply", "tui-image-editor-my-3", 3, "click"], [1, "tui-image-editor-button", "apply", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-apply", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-apply", 1, "active", "use-default"]], template: function MaskComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵelementStart(5, "input", 4, 5);
        i0.ɵɵlistener("change", function MaskComponent_Template_input_change_5_listener($event) { return ctx.onMaskChosen($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(7, "svg", 6);
        i0.ɵɵelement(8, "use", 7);
        i0.ɵɵelement(9, "use", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(10, "label");
        i0.ɵɵtext(11);
        i0.ɵɵpipe(12, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 9);
        i0.ɵɵlistener("click", function MaskComponent_Template_div_click_13_listener() { return ctx.applyMask(); });
        i0.ɵɵelementStart(14, "div", 10);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(15, "svg", 11);
        i0.ɵɵelement(16, "use", 12);
        i0.ɵɵelement(17, "use", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(18, "label");
        i0.ɵɵtext(19);
        i0.ɵɵpipe(20, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(11);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 2, "tui-image-editor-angular-submenus-mask-loadMaskImage"), " ");
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 4, "tui-image-editor-angular-submenus-mask-apply"), " ");
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaskComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-mask',
                templateUrl: './mask.component.html',
                styleUrls: ['./mask.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], fileInput: [{
            type: ViewChild,
            args: ['fileInput']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9zdWJtZW51cy9tYXNrL21hc2suY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvc3VibWVudXMvbWFzay9tYXNrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFPcEUsTUFBTSxPQUFPLGFBQWE7SUFNeEI7UUFDRSxJQUFJLENBQUMsOEJBQThCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCOztRQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FDckMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FDcEMsQ0FBQztZQUNGLE1BQUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsMENBQUUsR0FBRyxDQUN2QyxVQUFVLENBQUMsZ0JBQWdCLEVBQzNCLElBQUksQ0FBQyw4QkFBOEIsRUFDbkM7WUFDRixNQUFBLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLDBDQUFFLEVBQUUsQ0FDckMsVUFBVSxDQUFD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QkFBUTtRQUNWLGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztRQXZCSSxnQkFHRjtRQUhFLDhHQUdGO1FBZUUsZUFDRjtRQURFLHNHQUNGOzt1RkRuQkssYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7c0NBRVUsV0FBVztrQkFBbkIsS0FBSztZQUdrQixTQUFTO2tCQUFoQyxTQUFTO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZXZlbnROYW1lcywgaGlzdG9yeU5hbWVzIH0gZnJvbSAnLi4vLi4vY29uc3RzJztcbmltcG9ydCB7IGdldEFjdGl2ZU9iamVjdElkLCBpc0ZpbGVBcGlTdXBwb3J0ZWQgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R1aS1pbWFnZS1lZGl0b3Itc3VibWVudXMtbWFzaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXNrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFzay5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE1hc2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGltYWdlRWRpdG9yOiBhbnk7XG4gIHB1YmxpYyBhY3RpdmVPYmplY3RJZDogbnVtYmVyO1xuICBwdWJsaWMgb25PYmplY3RBY3RpdmF0ZWRFdmVudExpc3RlbmVyOiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpIGZpbGVJbnB1dDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9uT2JqZWN0QWN0aXZhdGVkRXZlbnRMaXN0ZW5lciA9IHRoaXMub25PYmplY3RBY3RpdmF0ZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgaWYgKGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10pIHtcbiAgICAgIHRoaXMuYWN0aXZlT2JqZWN0SWQgPSBnZXRBY3RpdmVPYmplY3RJZChcbiAgICAgICAgY2hhbmdlc1snaW1hZ2VFZGl0b3InXS5jdXJyZW50VmFsdWVcbiAgICAgICk7XG4gICAgICBjaGFuZ2VzWydpbWFnZUVkaXRvciddLnByZXZpb3VzVmFsdWU/Lm9mZihcbiAgICAgICAgZXZlbnROYW1lcy5PQkpFQ1RfQUNUSVZBVEVELFxuICAgICAgICB0aGF0Lm9uT2JqZWN0QWN0aXZhdGVkRXZlbnRMaXN0ZW5lclxuICAgICAgKTtcbiAgICAgIGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10uY3VycmVudFZhbHVlPy5vbihcbiAgICAgICAgZXZlbnROYW1lcy5PQkpFQ1RfQUNUSVZBVEVELFxuICAgICAgICB0aGF0Lm9uT2JqZWN0QWN0aXZhdGVkRXZlbnRMaXN0ZW5lclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbWFnZUVkaXRvcikge1xuICAgICAgdGhpcy5pbWFnZUVkaXRvci5vZmYoXG4gICAgICAgIGV2ZW50TmFtZXMuT0JKRUNUX0FDVElWQVRFRCxcbiAgICAgICAgdGhpcy5vbk9iamVjdEFjdGl2YXRlZEV2ZW50TGlzdGVuZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbk9iamVjdEFjdGl2YXRlZChwcm9wcykge1xuICAgIHRoaXMuYWN0aXZlT2JqZWN0SWQgPSBwcm9wcz8uaWQ7XG4gIH1cblxuICBvbk1hc2tDaG9zZW4oZXZlbnQpIHtcbiAgICBsZXQgc2VsZWN0ZWRGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGlmIChzZWxlY3RlZEZpbGUgIT0gbnVsbCkge1xuICAgICAgaWYgKCFpc0ZpbGVBcGlTdXBwb3J0ZWQoKSkge1xuICAgICAgICBhbGVydCgnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgZmlsZS1hcGknKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGltZ1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc2VsZWN0ZWRGaWxlKTtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3JcbiAgICAgICAgLmxvYWRJbWFnZUZyb21VUkwodGhpcy5pbWFnZUVkaXRvci50b0RhdGFVUkwoKSwgJ0ZpbHRlckltYWdlJylcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaW1hZ2VFZGl0b3IuYWRkSW1hZ2VPYmplY3QoaW1nVXJsKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoc2VsZWN0ZWRGaWxlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmltYWdlRWRpdG9yLl9pbnZva2VyLmZpcmUoXG4gICAgICAgICAgICBldmVudE5hbWVzLkVYRUNVVEVfQ09NTUFORCxcbiAgICAgICAgICAgIGhpc3RvcnlOYW1lcy5MT0FEX01BU0tfSU1BR0VcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICh0aGlzLmZpbGVJbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhcHBseU1hc2soKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5hY3RpdmVPYmplY3RJZCAhPSBudWxsICYmXG4gICAgICBnZXRBY3RpdmVPYmplY3RJZCh0aGlzLmltYWdlRWRpdG9yKSA9PSB0aGlzLmFjdGl2ZU9iamVjdElkXG4gICAgKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLmltYWdlRWRpdG9yLmdldE9iamVjdFByb3BlcnRpZXMoXG4gICAgICAgIHRoaXMuYWN0aXZlT2JqZWN0SWQsXG4gICAgICAgICd0eXBlJ1xuICAgICAgKTtcbiAgICAgIGlmIChwcm9wcy50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VFZGl0b3IuYXBwbHlGaWx0ZXIoJ21hc2snLCB7XG4gICAgICAgICAgbWFza09iaklkOiB0aGlzLmFjdGl2ZU9iamVjdElkLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLW1lbnUtbWFza1wiPlxuICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1zdWJtZW51LWl0ZW1cIj5cbiAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItbXktM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItYnV0dG9uXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAjZmlsZUlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgIGNsYXNzPVwidGllLW1hc2staW1hZ2UtZmlsZVwiXG4gICAgICAgICAgICAoY2hhbmdlKT1cIm9uTWFza0Nob3NlbigkZXZlbnQpXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmdfaWMtc3VibWVudVwiPlxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljLW1hc2stbG9hZFwiIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtbWFzay1sb2FkXCIgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB7e1xuICAgICAgICAgICAgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtbWFzay1sb2FkTWFza0ltYWdlXCIgfCB0cmFuc2xhdGVcbiAgICAgICAgICB9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJ0aWUtbWFzay1hcHBseSB0dWktaW1hZ2UtZWRpdG9yLW5ld2xpbmUgYXBwbHkgdHVpLWltYWdlLWVkaXRvci1teS0zXCJcbiAgICAgIChjbGljayk9XCJhcHBseU1hc2soKVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItYnV0dG9uIGFwcGx5IHR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3cgdHVpLWltYWdlLWVkaXRvci1mbGV4LW5vd3JhcCB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLWl0ZW1zLWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLWp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8c3ZnIGNsYXNzPVwic3ZnX2ljLW1lbnVcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtYXBwbHlcIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1hcHBseVwiIGNsYXNzPVwiYWN0aXZlIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAge3sgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtbWFzay1hcHBseVwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==