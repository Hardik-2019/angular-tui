import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class ResetComponent {
    constructor() {
        this.cancelCroppingRequested = new EventEmitter();
        this.resetImage = new EventEmitter();
    }
    reset() {
        this.cancelCroppingRequested.emit();
        this.resetImage.emit();
    }
}
ResetComponent.ɵfac = function ResetComponent_Factory(t) { return new (t || ResetComponent)(); };
ResetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResetComponent, selectors: [["tui-image-editor-menus-buttons-reset"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, outputs: { cancelCroppingRequested: "cancelCroppingRequested", resetImage: "resetImage" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-reset", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-reset", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-reset", 1, "hover", "use-default"]], template: function ResetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function ResetComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.reset() : null; });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-reset tui-image-editor-item help " + (ctx.imageChosen ? "enabled" : "disabled"));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-reset"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResetComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-reset',
                templateUrl: './reset.component.html',
                styleUrls: ['./reset.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }], cancelCroppingRequested: [{
            type: Output
        }], resetImage: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvbWVudXMvYnV0dG9ucy9yZXNldC9yZXNldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL3Jlc2V0L3Jlc2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8vRSxNQUFNLE9BQU8sY0FBYztJQU16QjtRQUhVLDRCQUF1QixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JFLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVuRCxDQUFDO0lBRWhCLEtBQUs7UUFDSCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs0RUFYVSxjQUFjO21EQUFkLGNBQWM7UUNQM0IsOEJBT0M7UUFEQywwR0FBdUIsV0FBTyxHQUFHLElBQUksSUFBQzs7UUFFdEMsbUJBQXlCO1FBQXpCLDhCQUF5QjtRQUN2Qix5QkFBNkQ7UUFDN0QseUJBQStEO1FBQy9ELHlCQUE0RDtRQUM5RCxpQkFBTTtRQUNSLGlCQUFNOztRQVhKLHVHQUdDO1FBSkQsNEZBQW9FOzt1RkRNekQsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDckM7c0NBRVUsV0FBVztrQkFBbkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDSSx1QkFBdUI7a0JBQWhDLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtcmVzZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXNldC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgaW1hZ2VDaG9zZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGltYWdlRWRpdG9yOiBhbnk7XG4gIEBPdXRwdXQoKSBjYW5jZWxDcm9wcGluZ1JlcXVlc3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHJlc2V0SW1hZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuICBcbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5jYW5jZWxDcm9wcGluZ1JlcXVlc3RlZC5lbWl0KCk7XG4gICAgdGhpcy5yZXNldEltYWdlLmVtaXQoKTtcbiAgfVxufVxuIiwiPGRpdlxuICBbdGl0bGVdPVwiJ3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1tZW51cy1idXR0b25zLXJlc2V0JyB8IHRyYW5zbGF0ZVwiXG4gIFtjbGFzc109XCJcbiAgICAndGllLWJ0bi1yZXNldCB0dWktaW1hZ2UtZWRpdG9yLWl0ZW0gaGVscCAnICtcbiAgICAoaW1hZ2VDaG9zZW4gPyAnZW5hYmxlZCcgOiAnZGlzYWJsZWQnKVxuICBcIlxuICAoY2xpY2spPVwiaW1hZ2VDaG9zZW4gPyByZXNldCgpIDogbnVsbFwiXG4+XG4gIDxzdmcgY2xhc3M9XCJzdmdfaWMtbWVudVwiPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1yZXNldFwiIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLXJlc2V0XCIgY2xhc3M9XCJkaXNhYmxlZCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1yZXNldFwiIGNsYXNzPVwiaG92ZXIgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgPC9zdmc+XG48L2Rpdj5cbiJdfQ==