import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { eventNames } from '../../../consts';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class RedoComponent {
    constructor() {
        this.cancelCroppingRequested = new EventEmitter();
        this.redoStackSize = 0;
    }
    ngOnChanges(changes) {
        var that = this;
        if (changes['imageEditor'] && changes['imageEditor'].currentValue != null) {
            this.imageEditor.on(eventNames.REDO_STACK_CHANGED, function (length) {
                that.redoStackSize = length;
            });
        }
    }
    redo() {
        if (this.imageEditor != null && !this.imageEditor.isEmptyRedoStack()) {
            this.cancelCroppingRequested.emit();
            this.imageEditor.deactivateAll();
            this.imageEditor.redo();
        }
    }
}
RedoComponent.ɵfac = function RedoComponent_Factory(t) { return new (t || RedoComponent)(); };
RedoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RedoComponent, selectors: [["tui-image-editor-menus-buttons-redo"]], inputs: { imageEditor: "imageEditor" }, outputs: { cancelCroppingRequested: "cancelCroppingRequested" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-redo", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-redo", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-redo", 1, "hover", "use-default"]], template: function RedoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function RedoComponent_Template_div_click_0_listener() { return ctx.redoStackSize != 0 ? ctx.redo() : null; });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-redo tui-image-editor-item help " + (ctx.redoStackSize != 0 ? "enabled" : "disabled"));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-redo"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RedoComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-redo',
                templateUrl: './redo.component.html',
                styleUrls: ['./redo.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], cancelCroppingRequested: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL3JlZG8vcmVkby5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL3JlZG8vcmVkby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBTzdDLE1BQU0sT0FBTyxhQUFhO0lBS3hCO1FBSFUsNEJBQXVCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEUsa0JBQWEsR0FBVyxDQUFDLENBQUM7SUFFbEIsQ0FBQztJQUVoQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1lBQ3pFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUNqQixVQUFVLENBQUMsa0JBQWtCLEVBQzdCLFVBQVUsTUFBYztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFDOUIsQ0FBQyxDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUNsRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7MEVBekJVLGFBQWE7a0RBQWIsYUFBYTtRQ2hCMUIsOEJBT0M7UUFEQyw0R0FBMEIsQ0FBQyxHQUFHLFVBQU0sR0FBRyxJQUFJLElBQUM7O1FBRTVDLG1CQUF5QjtRQUF6Qiw4QkFBeUI7UUFDdkIseUJBQTREO1FBQzVELHlCQUE4RDtRQUM5RCx5QkFBMkQ7UUFDN0QsaUJBQU07UUFDUixpQkFBTTs7UUFYSiw2R0FHQztRQUpELDJGQUFtRTs7dUZEZXhELGFBQWE7Y0FMekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ3BDO3NDQUVVLFdBQVc7a0JBQW5CLEtBQUs7WUFDSSx1QkFBdUI7a0JBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZXZlbnROYW1lcyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1yZWRvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZG8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWRvLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVkb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGltYWdlRWRpdG9yOiBhbnk7XG4gIEBPdXRwdXQoKSBjYW5jZWxDcm9wcGluZ1JlcXVlc3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHVibGljIHJlZG9TdGFja1NpemU6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgaWYgKGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10gJiYgY2hhbmdlc1snaW1hZ2VFZGl0b3InXS5jdXJyZW50VmFsdWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5pbWFnZUVkaXRvci5vbihcbiAgICAgICAgZXZlbnROYW1lcy5SRURPX1NUQUNLX0NIQU5HRUQsXG4gICAgICAgIGZ1bmN0aW9uIChsZW5ndGg6IG51bWJlcikge1xuICAgICAgICAgIHRoYXQucmVkb1N0YWNrU2l6ZSA9IGxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZWRvKCkge1xuICAgIGlmICh0aGlzLmltYWdlRWRpdG9yIT1udWxsICYmICF0aGlzLmltYWdlRWRpdG9yLmlzRW1wdHlSZWRvU3RhY2soKSkge1xuICAgICAgdGhpcy5jYW5jZWxDcm9wcGluZ1JlcXVlc3RlZC5lbWl0KCk7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yLmRlYWN0aXZhdGVBbGwoKTtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3IucmVkbygpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdlxuICBbdGl0bGVdPVwiJ3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1tZW51cy1idXR0b25zLXJlZG8nIHwgdHJhbnNsYXRlXCJcbiAgW2NsYXNzXT1cIlxuICAgICd0aWUtYnRuLXJlZG8gdHVpLWltYWdlLWVkaXRvci1pdGVtIGhlbHAgJyArXG4gICAgKHJlZG9TdGFja1NpemUgIT0gMCA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCcpXG4gIFwiXG4gIChjbGljayk9XCJyZWRvU3RhY2tTaXplICE9IDAgPyByZWRvKCkgOiBudWxsXCJcbj5cbiAgPHN2ZyBjbGFzcz1cInN2Z19pYy1tZW51XCI+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLXJlZG9cIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1yZWRvXCIgY2xhc3M9XCJkaXNhYmxlZCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1yZWRvXCIgY2xhc3M9XCJob3ZlciB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICA8L3N2Zz5cbjwvZGl2PlxuIl19