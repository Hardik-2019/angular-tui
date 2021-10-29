import { Component, Input } from '@angular/core';
import { drawingModes, zoomModes } from '../../../consts';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class DragComponent {
    constructor() { }
    get isSelected() {
        var _a;
        if (this.imageEditor == null) {
            return false;
        }
        const zoomMode = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a._graphics.getZoomMode();
        return (this.imageEditor.getDrawingMode() == drawingModes.ZOOM &&
            zoomMode === zoomModes.HAND);
    }
    startDrag() {
        var _a;
        (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.deactivateAll();
        this.toggleHandMode();
    }
    toggleHandMode() {
        var _a, _b, _c, _d, _e;
        const zoomMode = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a._graphics.getZoomMode();
        (_b = this.imageEditor) === null || _b === void 0 ? void 0 : _b.stopDrawingMode();
        if (zoomMode !== zoomModes.HAND) {
            (_c = this.imageEditor) === null || _c === void 0 ? void 0 : _c.startDrawingMode(drawingModes.ZOOM);
            (_d = this.imageEditor) === null || _d === void 0 ? void 0 : _d._graphics.startHandMode();
        }
        else {
            (_e = this.imageEditor) === null || _e === void 0 ? void 0 : _e._graphics.endHandMode();
        }
    }
}
DragComponent.ɵfac = function DragComponent_Factory(t) { return new (t || DragComponent)(); };
DragComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DragComponent, selectors: [["tui-image-editor-menus-buttons-drag"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-hand", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-hand", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-hand", 1, "hover", "use-default"]], template: function DragComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function DragComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.startDrag() : null; });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-hand tui-image-editor-item help " + (ctx.imageChosen ? "enabled " : "disabled ") + (ctx.isSelected ? "active " : ""));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-drag"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-drag',
                templateUrl: './drag.component.html',
                styleUrls: ['./drag.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2RyYWcvZHJhZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2RyYWcvZHJhZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFPMUQsTUFBTSxPQUFPLGFBQWE7SUFJeEIsZ0JBQWUsQ0FBQztJQUVoQixJQUFJLFVBQVU7O1FBQ1osSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRTtZQUM1QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsTUFBTSxRQUFRLFNBQUcsSUFBSSxDQUFDLFdBQVcsMENBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNELE9BQU8sQ0FDTCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxJQUFJLFlBQVksQ0FBQyxJQUFJO1lBQ3RELFFBQVEsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVM7O1FBQ1AsTUFBQSxJQUFJLENBQUMsV0FBVywwQ0FBRSxhQUFhLEdBQUc7UUFDbEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjOztRQUNaLE1BQU0sUUFBUSxTQUFHLElBQUksQ0FBQyxXQUFXLDBDQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUzRCxNQUFBLElBQUksQ0FBQyxXQUFXLDBDQUFFLGVBQWUsR0FBRztRQUNwQyxJQUFJLFFBQVEsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQy9CLE1BQUEsSUFBSSxDQUFDLFdBQVcsMENBQUUsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtZQUN0RCxNQUFBLElBQUksQ0FBQyxXQUFXLDBDQUFFLFNBQVMsQ0FBQyxhQUFhLEdBQUc7U0FDN0M7YUFBTTtZQUNMLE1BQUEsSUFBSSxDQUFDLFdBQVcsMENBQUUsU0FBUyxDQUFDLFdBQVcsR0FBRztTQUMzQztJQUNILENBQUM7OzBFQWhDVSxhQUFhO2tEQUFiLGFBQWE7UUNSMUIsOEJBUUM7UUFEQyx5R0FBdUIsZUFBVyxHQUFHLElBQUksSUFBQzs7UUFFMUMsbUJBQXlCO1FBQXpCLDhCQUF5QjtRQUN2Qix5QkFBNEQ7UUFDNUQseUJBQThEO1FBQzlELHlCQUEyRDtRQUM3RCxpQkFBTTtRQUNSLGlCQUFNOztRQVpKLDRJQUlDO1FBTEQsMkZBQW1FOzt1RkRPeEQsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7c0NBRVUsV0FBVztrQkFBbkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRyYXdpbmdNb2Rlcywgem9vbU1vZGVzIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLWRyYWcnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJhZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RyYWcuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaW1hZ2VDaG9zZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGltYWdlRWRpdG9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmltYWdlRWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgem9vbU1vZGUgPSB0aGlzLmltYWdlRWRpdG9yPy5fZ3JhcGhpY3MuZ2V0Wm9vbU1vZGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5pbWFnZUVkaXRvci5nZXREcmF3aW5nTW9kZSgpID09IGRyYXdpbmdNb2Rlcy5aT09NICYmXG4gICAgICB6b29tTW9kZSA9PT0gem9vbU1vZGVzLkhBTkRcbiAgICApO1xuICB9XG5cbiAgc3RhcnREcmFnKCkge1xuICAgIHRoaXMuaW1hZ2VFZGl0b3I/LmRlYWN0aXZhdGVBbGwoKTtcbiAgICB0aGlzLnRvZ2dsZUhhbmRNb2RlKCk7XG4gIH1cblxuICB0b2dnbGVIYW5kTW9kZSgpIHtcbiAgICBjb25zdCB6b29tTW9kZSA9IHRoaXMuaW1hZ2VFZGl0b3I/Ll9ncmFwaGljcy5nZXRab29tTW9kZSgpO1xuXG4gICAgdGhpcy5pbWFnZUVkaXRvcj8uc3RvcERyYXdpbmdNb2RlKCk7XG4gICAgaWYgKHpvb21Nb2RlICE9PSB6b29tTW9kZXMuSEFORCkge1xuICAgICAgdGhpcy5pbWFnZUVkaXRvcj8uc3RhcnREcmF3aW5nTW9kZShkcmF3aW5nTW9kZXMuWk9PTSk7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yPy5fZ3JhcGhpY3Muc3RhcnRIYW5kTW9kZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yPy5fZ3JhcGhpY3MuZW5kSGFuZE1vZGUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXZcbiAgW3RpdGxlXT1cIid0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItbWVudXMtYnV0dG9ucy1kcmFnJyB8IHRyYW5zbGF0ZVwiXG4gIFtjbGFzc109XCJcbiAgICAndGllLWJ0bi1oYW5kIHR1aS1pbWFnZS1lZGl0b3ItaXRlbSBoZWxwICcgK1xuICAgIChpbWFnZUNob3NlbiA/ICdlbmFibGVkICcgOiAnZGlzYWJsZWQgJykgK1xuICAgIChpc1NlbGVjdGVkID8gJ2FjdGl2ZSAnIDogJycpXG4gIFwiXG4gIChjbGljayk9XCJpbWFnZUNob3NlbiA/IHN0YXJ0RHJhZygpIDogbnVsbFwiXG4+XG4gIDxzdmcgY2xhc3M9XCJzdmdfaWMtbWVudVwiPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1oYW5kXCIgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtaGFuZFwiIGNsYXNzPVwiZGlzYWJsZWQgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtaGFuZFwiIGNsYXNzPVwiaG92ZXIgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgPC9zdmc+XG48L2Rpdj5cbiJdfQ==