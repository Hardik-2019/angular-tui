import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class ZoomOutComponent {
    constructor() { }
    zoomOut() {
        var _a;
        (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a._graphics.zoomOut();
    }
}
ZoomOutComponent.ɵfac = function ZoomOutComponent_Factory(t) { return new (t || ZoomOutComponent)(); };
ZoomOutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ZoomOutComponent, selectors: [["tui-image-editor-menus-buttons-zoom-out"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-zoom-out", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-zoom-out", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-zoom-out", 1, "hover", "use-default"]], template: function ZoomOutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function ZoomOutComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.zoomOut() : null; });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-zoomOut tui-image-editor-item help " + (ctx.imageChosen ? "enabled " : "disabled "));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-zoomOut"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZoomOutComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-zoom-out',
                templateUrl: './zoom-out.component.html',
                styleUrls: ['./zoom-out.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1vdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvbWVudXMvYnV0dG9ucy96b29tLW91dC96b29tLW91dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL3pvb20tb3V0L3pvb20tb3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFPekQsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQixnQkFBZSxDQUFDO0lBRWhCLE9BQU87O1FBQ0wsTUFBQSxJQUFJLENBQUMsV0FBVywwQ0FBRSxTQUFTLENBQUMsT0FBTyxHQUFHO0lBQ3hDLENBQUM7O2dGQVJVLGdCQUFnQjtxREFBaEIsZ0JBQWdCO1FDUDdCLDhCQU9DO1FBREMsNEdBQXVCLGFBQVMsR0FBRyxJQUFJLElBQUM7O1FBRXhDLG1CQUF5QjtRQUF6Qiw4QkFBeUI7UUFDdkIseUJBQWdFO1FBQ2hFLHlCQUFrRTtRQUNsRSx5QkFBK0Q7UUFDakUsaUJBQU07UUFDUixpQkFBTTs7UUFYSiwyR0FHQztRQUpELDhGQUFzRTs7dUZETTNELGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7YUFDeEM7c0NBRVUsV0FBVztrQkFBbkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLXpvb20tb3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3pvb20tb3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vem9vbS1vdXQuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBab29tT3V0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgaW1hZ2VDaG9zZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGltYWdlRWRpdG9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHpvb21PdXQoKSB7XG4gICAgdGhpcy5pbWFnZUVkaXRvcj8uX2dyYXBoaWNzLnpvb21PdXQoKTtcbiAgfVxufVxuIiwiPGRpdlxuICBbdGl0bGVdPVwiJ3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1tZW51cy1idXR0b25zLXpvb21PdXQnIHwgdHJhbnNsYXRlXCJcbiAgW2NsYXNzXT1cIlxuICAgICd0aWUtYnRuLXpvb21PdXQgdHVpLWltYWdlLWVkaXRvci1pdGVtIGhlbHAgJyArXG4gICAgKGltYWdlQ2hvc2VuID8gJ2VuYWJsZWQgJyA6ICdkaXNhYmxlZCAnKVxuICBcIlxuICAoY2xpY2spPVwiaW1hZ2VDaG9zZW4gPyB6b29tT3V0KCkgOiBudWxsXCJcbj5cbiAgPHN2ZyBjbGFzcz1cInN2Z19pYy1tZW51XCI+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLXpvb20tb3V0XCIgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtem9vbS1vdXRcIiBjbGFzcz1cImRpc2FibGVkIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLXpvb20tb3V0XCIgY2xhc3M9XCJob3ZlciB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICA8L3N2Zz5cbjwvZGl2PlxuIl19