import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class LoadComponent {
    constructor() {
        this.loadImage = new EventEmitter();
    }
    onImageChosen(event) {
        let selectedFile = event.target.files[0];
        if (selectedFile != null) {
            this.loadImage.emit(selectedFile);
        }
    }
}
LoadComponent.ɵfac = function LoadComponent_Factory(t) { return new (t || LoadComponent)(); };
LoadComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoadComponent, selectors: [["tui-image-editor-menus-buttons-load"]], outputs: { loadImage: "loadImage" }, decls: 7, vars: 3, consts: [[1, "tie-btn-load", "tui-image-editor-item", "help", "enabled", 3, "title"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-file-upload", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-file-upload", 1, "active", "use-default"], [0, "xlink", "href", "#ic-file-upload", 1, "hover", "use-default"], ["type", "file", "accept", "image/x-png,image/gif,image/jpeg", 1, "tui-image-editor-load-btn", 3, "change"]], template: function LoadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(6, "input", 5);
        i0.ɵɵlistener("change", function LoadComponent_Template_input_change_6_listener($event) { return ctx.onImageChosen($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 1, "tui-image-editor-angular-menus-buttons-load"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-load',
                templateUrl: './load.component.html',
                styleUrls: ['./load.component.css'],
            }]
    }], function () { return []; }, { loadImage: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2xvYWQvbG9hZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2xvYWQvbG9hZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU94RSxNQUFNLE9BQU8sYUFBYTtJQUd4QjtRQUZVLGNBQVMsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUVwRCxDQUFDO0lBRWhCLGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksWUFBWSxJQUFJLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7OzBFQVZVLGFBQWE7a0RBQWIsYUFBYTtRQ1AxQiw4QkFHQzs7UUFDQyxtQkFBeUI7UUFBekIsOEJBQXlCO1FBQ3ZCLHlCQUFtRTtRQUNuRSx5QkFBbUU7UUFDbkUseUJBQWtFO1FBQ3BFLGlCQUFNO1FBQ04sb0JBS0U7UUFMRixnQ0FLRTtRQURBLGlHQUFVLHlCQUFxQixJQUFDO1FBSmxDLGlCQUtFO1FBQ0osaUJBQU07O1FBZEosMkZBQW1FOzt1RkRNeEQsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7c0NBRVcsU0FBUztrQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIExvYWRDb21wb25lbnQge1xuICBAT3V0cHV0KCkgbG9hZEltYWdlOiBFdmVudEVtaXR0ZXI8RmlsZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGU+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG9uSW1hZ2VDaG9zZW4oZXZlbnQpIHtcbiAgICBsZXQgc2VsZWN0ZWRGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGlmIChzZWxlY3RlZEZpbGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5sb2FkSW1hZ2UuZW1pdChzZWxlY3RlZEZpbGUpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdlxuICBbdGl0bGVdPVwiJ3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1tZW51cy1idXR0b25zLWxvYWQnIHwgdHJhbnNsYXRlXCJcbiAgY2xhc3M9XCJ0aWUtYnRuLWxvYWQgdHVpLWltYWdlLWVkaXRvci1pdGVtIGhlbHAgZW5hYmxlZFwiXG4+XG4gIDxzdmcgY2xhc3M9XCJzdmdfaWMtbWVudVwiPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1maWxlLXVwbG9hZFwiIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWZpbGUtdXBsb2FkXCIgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtZmlsZS11cGxvYWRcIiBjbGFzcz1cImhvdmVyIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gIDwvc3ZnPlxuICA8aW5wdXRcbiAgICB0eXBlPVwiZmlsZVwiXG4gICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWxvYWQtYnRuXCJcbiAgICBhY2NlcHQ9XCJpbWFnZS94LXBuZyxpbWFnZS9naWYsaW1hZ2UvanBlZ1wiXG4gICAgKGNoYW5nZSk9XCJvbkltYWdlQ2hvc2VuKCRldmVudClcIlxuICAvPlxuPC9kaXY+XG4iXX0=