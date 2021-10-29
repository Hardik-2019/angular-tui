import { Component, Input } from '@angular/core';
import { drawingModes, zoomModes } from '../../../consts';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class ZoomInComponent {
    constructor() { }
    get isSelected() {
        var _a;
        if (this.imageEditor == null) {
            return false;
        }
        const zoomMode = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a._graphics.getZoomMode();
        return (this.imageEditor.getDrawingMode() == drawingModes.ZOOM &&
            zoomMode !== zoomModes.HAND);
    }
    startZoom() {
        var _a;
        (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.startDrawingMode(drawingModes.ZOOM);
        this.zoomIn();
    }
    zoomIn() {
        var _a;
        (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.deactivateAll();
        this.toggleZoomMode();
    }
    toggleZoomMode() {
        var _a, _b, _c, _d, _e;
        const zoomMode = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a._graphics.getZoomMode();
        (_b = this.imageEditor) === null || _b === void 0 ? void 0 : _b.stopDrawingMode();
        if (zoomMode !== zoomModes.ZOOM) {
            (_c = this.imageEditor) === null || _c === void 0 ? void 0 : _c.startDrawingMode(drawingModes.ZOOM);
            (_d = this.imageEditor) === null || _d === void 0 ? void 0 : _d._graphics.startZoomInMode();
        }
        else {
            (_e = this.imageEditor) === null || _e === void 0 ? void 0 : _e._graphics.endZoomInMode();
        }
    }
}
ZoomInComponent.ɵfac = function ZoomInComponent_Factory(t) { return new (t || ZoomInComponent)(); };
ZoomInComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ZoomInComponent, selectors: [["tui-image-editor-menus-buttons-zoom-in"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-zoom-in", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-zoom-in", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-zoom-in", 1, "hover", "use-default"]], template: function ZoomInComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function ZoomInComponent_Template_div_click_0_listener() { return ctx.imageChosen ? ctx.startZoom() : null; });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-zoomIn tui-image-editor-item help " + (ctx.imageChosen ? "enabled " : "disabled ") + (ctx.isSelected ? "active " : ""));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-zoomIn"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZoomInComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-zoom-in',
                templateUrl: './zoom-in.component.html',
                styleUrls: ['./zoom-in.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1pbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL3pvb20taW4vem9vbS1pbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL3pvb20taW4vem9vbS1pbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFPMUQsTUFBTSxPQUFPLGVBQWU7SUFJMUIsZ0JBQWUsQ0FBQztJQUVoQixJQUFJLFVBQVU7O1FBQ1osSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRTtZQUM1QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsTUFBTSxRQUFRLFNBQUcsSUFBSSxDQUFDLFdBQVcsMENBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNELE9BQU8sQ0FDTCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxJQUFJLFlBQVksQ0FBQyxJQUFJO1lBQ3RELFFBQVEsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVM7O1FBQ1AsTUFBQSxJQUFJLENBQUMsV0FBVywwQ0FBRSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO1FBQ3RELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sTUFBTTs7UUFDWixNQUFBLElBQUksQ0FBQyxXQUFXLDBDQUFFLGFBQWEsR0FBRztRQUNsQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLGNBQWM7O1FBQ3BCLE1BQU0sUUFBUSxTQUFHLElBQUksQ0FBQyxXQUFXLDBDQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUzRCxNQUFBLElBQUksQ0FBQyxXQUFXLDBDQUFFLGVBQWUsR0FBRztRQUNwQyxJQUFJLFFBQVEsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQy9CLE1BQUEsSUFBSSxDQUFDLFdBQVcsMENBQUUsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtZQUN0RCxNQUFBLElBQUksQ0FBQyxXQUFXLDBDQUFFLFNBQVMsQ0FBQyxlQUFlLEdBQUc7U0FDL0M7YUFBTTtZQUNMLE1BQUEsSUFBSSxDQUFDLFdBQVcsMENBQUUsU0FBUyxDQUFDLGFBQWEsR0FBRztTQUM3QztJQUNILENBQUM7OzhFQXJDVSxlQUFlO29EQUFmLGVBQWU7UUNSNUIsOEJBUUM7UUFEQywyR0FBdUIsZUFBVyxHQUFHLElBQUksSUFBQzs7UUFFMUMsbUJBQXlCO1FBQXpCLDhCQUF5QjtRQUN2Qix5QkFBK0Q7UUFDL0QseUJBQWlFO1FBQ2pFLHlCQUE4RDtRQUNoRSxpQkFBTTtRQUNSLGlCQUFNOztRQVpKLDhJQUlDO1FBTEQsNkZBQXFFOzt1RkRPMUQsZUFBZTtjQUwzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztnQkFDbEQsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkM7c0NBRVUsV0FBVztrQkFBbkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRyYXdpbmdNb2Rlcywgem9vbU1vZGVzIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLXpvb20taW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vem9vbS1pbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3pvb20taW4uY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBab29tSW5Db21wb25lbnQge1xuICBASW5wdXQoKSBpbWFnZUNob3NlbjogYm9vbGVhbjtcbiAgQElucHV0KCkgaW1hZ2VFZGl0b3I6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0IGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaW1hZ2VFZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB6b29tTW9kZSA9IHRoaXMuaW1hZ2VFZGl0b3I/Ll9ncmFwaGljcy5nZXRab29tTW9kZSgpO1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmltYWdlRWRpdG9yLmdldERyYXdpbmdNb2RlKCkgPT0gZHJhd2luZ01vZGVzLlpPT00gJiZcbiAgICAgIHpvb21Nb2RlICE9PSB6b29tTW9kZXMuSEFORFxuICAgICk7XG4gIH1cblxuICBzdGFydFpvb20oKSB7XG4gICAgdGhpcy5pbWFnZUVkaXRvcj8uc3RhcnREcmF3aW5nTW9kZShkcmF3aW5nTW9kZXMuWk9PTSk7XG4gICAgdGhpcy56b29tSW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgem9vbUluKCkge1xuICAgIHRoaXMuaW1hZ2VFZGl0b3I/LmRlYWN0aXZhdGVBbGwoKTtcbiAgICB0aGlzLnRvZ2dsZVpvb21Nb2RlKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVpvb21Nb2RlKCkge1xuICAgIGNvbnN0IHpvb21Nb2RlID0gdGhpcy5pbWFnZUVkaXRvcj8uX2dyYXBoaWNzLmdldFpvb21Nb2RlKCk7XG5cbiAgICB0aGlzLmltYWdlRWRpdG9yPy5zdG9wRHJhd2luZ01vZGUoKTtcbiAgICBpZiAoem9vbU1vZGUgIT09IHpvb21Nb2Rlcy5aT09NKSB7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yPy5zdGFydERyYXdpbmdNb2RlKGRyYXdpbmdNb2Rlcy5aT09NKTtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3I/Ll9ncmFwaGljcy5zdGFydFpvb21Jbk1vZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWFnZUVkaXRvcj8uX2dyYXBoaWNzLmVuZFpvb21Jbk1vZGUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXZcbiAgW3RpdGxlXT1cIid0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItbWVudXMtYnV0dG9ucy16b29tSW4nIHwgdHJhbnNsYXRlXCJcbiAgW2NsYXNzXT1cIlxuICAgICd0aWUtYnRuLXpvb21JbiB0dWktaW1hZ2UtZWRpdG9yLWl0ZW0gaGVscCAnICtcbiAgICAoaW1hZ2VDaG9zZW4gPyAnZW5hYmxlZCAnIDogJ2Rpc2FibGVkICcpICtcbiAgICAoaXNTZWxlY3RlZCA/ICdhY3RpdmUgJyA6ICcnKVxuICBcIlxuICAoY2xpY2spPVwiaW1hZ2VDaG9zZW4gPyBzdGFydFpvb20oKSA6IG51bGxcIlxuPlxuICA8c3ZnIGNsYXNzPVwic3ZnX2ljLW1lbnVcIj5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtem9vbS1pblwiIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLXpvb20taW5cIiBjbGFzcz1cImRpc2FibGVkIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLXpvb20taW5cIiBjbGFzcz1cImhvdmVyIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gIDwvc3ZnPlxuPC9kaXY+XG4iXX0=