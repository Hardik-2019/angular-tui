import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { eventNames } from '../../../consts';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class DeleteComponent {
    constructor() {
        this.cancelCroppingRequested = new EventEmitter();
    }
    ngOnChanges(changes) {
        var that = this;
        if (changes['imageEditor'] && changes['imageEditor'].currentValue != null) {
            this.imageEditor.on(eventNames.OBJECT_ACTIVATED, function (props) {
                that.activeObjectId = props === null || props === void 0 ? void 0 : props.id;
            });
        }
    }
    deleteActiveObject() {
        if (this.activeObjectId != null) {
            this.cancelCroppingRequested.emit();
            try {
                this.imageEditor.removeActiveObject();
            }
            catch (_err) { }
            this.activeObjectId = null;
        }
    }
}
DeleteComponent.ɵfac = function DeleteComponent_Factory(t) { return new (t || DeleteComponent)(); };
DeleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DeleteComponent, selectors: [["tui-image-editor-menus-buttons-delete"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, outputs: { cancelCroppingRequested: "cancelCroppingRequested" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-delete", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-delete", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-delete", 1, "hover", "use-default"]], template: function DeleteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function DeleteComponent_Template_div_click_0_listener() { return ctx.activeObjectId != null ? ctx.deleteActiveObject() : null; });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-delete tui-image-editor-item help " + (ctx.activeObjectId != null ? "enabled" : ""));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-delete"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DeleteComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-delete',
                templateUrl: './delete.component.html',
                styleUrls: ['./delete.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }], cancelCroppingRequested: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci9zcmMvbGliL21lbnVzL2J1dHRvbnMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQU83QyxNQUFNLE9BQU8sZUFBZTtJQU8xQjtRQUhBLDRCQUF1QixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBR3RELENBQUM7SUFFaEIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtZQUN6RSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxLQUFLO2dCQUM5RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxFQUFFLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEMsSUFBSTtnQkFDRixJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDdkM7WUFBQyxPQUFPLElBQUksRUFBRSxHQUFFO1lBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OEVBMUJVLGVBQWU7b0RBQWYsZUFBZTtRQ2hCNUIsOEJBT0M7UUFEQywrR0FBMkIsSUFBSSxHQUFHLHdCQUFvQixHQUFHLElBQUksSUFBQzs7UUFFOUQsbUJBQXlCO1FBQXpCLDhCQUF5QjtRQUN2Qix5QkFBOEQ7UUFDOUQseUJBQWdFO1FBQ2hFLHlCQUE2RDtRQUMvRCxpQkFBTTtRQUNSLGlCQUFNOztRQVhKLDJHQUdDO1FBSkQsNkZBQXFFOzt1RkRlMUQsZUFBZTtjQUwzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEM7c0NBRVUsV0FBVztrQkFBbkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFFTix1QkFBdUI7a0JBRHRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZXZlbnROYW1lcyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1kZWxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVsZXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGVsZXRlLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgaW1hZ2VDaG9zZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGltYWdlRWRpdG9yOiBhbnk7XG4gIEBPdXRwdXQoKVxuICBjYW5jZWxDcm9wcGluZ1JlcXVlc3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHVibGljIGFjdGl2ZU9iamVjdElkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgaWYgKGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10gJiYgY2hhbmdlc1snaW1hZ2VFZGl0b3InXS5jdXJyZW50VmFsdWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5pbWFnZUVkaXRvci5vbihldmVudE5hbWVzLk9CSkVDVF9BQ1RJVkFURUQsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICB0aGF0LmFjdGl2ZU9iamVjdElkID0gcHJvcHM/LmlkO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlQWN0aXZlT2JqZWN0KCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZU9iamVjdElkICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY2FuY2VsQ3JvcHBpbmdSZXF1ZXN0ZWQuZW1pdCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5pbWFnZUVkaXRvci5yZW1vdmVBY3RpdmVPYmplY3QoKTtcbiAgICAgIH0gY2F0Y2ggKF9lcnIpIHt9XG4gICAgICB0aGlzLmFjdGl2ZU9iamVjdElkID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXZcbiAgW3RpdGxlXT1cIid0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItbWVudXMtYnV0dG9ucy1kZWxldGUnIHwgdHJhbnNsYXRlXCJcbiAgW2NsYXNzXT1cIlxuICAgICd0aWUtYnRuLWRlbGV0ZSB0dWktaW1hZ2UtZWRpdG9yLWl0ZW0gaGVscCAnICtcbiAgICAoYWN0aXZlT2JqZWN0SWQgIT0gbnVsbCA/ICdlbmFibGVkJyA6ICcnKVxuICBcIlxuICAoY2xpY2spPVwiYWN0aXZlT2JqZWN0SWQgIT0gbnVsbCA/IGRlbGV0ZUFjdGl2ZU9iamVjdCgpIDogbnVsbFwiXG4+XG4gIDxzdmcgY2xhc3M9XCJzdmdfaWMtbWVudVwiPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1kZWxldGVcIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1kZWxldGVcIiBjbGFzcz1cImRpc2FibGVkIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWRlbGV0ZVwiIGNsYXNzPVwiaG92ZXIgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgPC9zdmc+XG48L2Rpdj5cbiJdfQ==