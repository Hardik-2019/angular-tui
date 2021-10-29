import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { eventNames } from '../../../consts';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class UndoComponent {
    constructor() {
        this.cancelCroppingRequested = new EventEmitter();
        this.undoStackSize = 0;
    }
    ngOnChanges(changes) {
        var that = this;
        if (changes['imageEditor'] && changes['imageEditor'].currentValue != null) {
            this.imageEditor.on(eventNames.UNDO_STACK_CHANGED, function (length) {
                that.undoStackSize = length;
            });
        }
    }
    undo() {
        if (this.imageEditor != null && !this.imageEditor.isEmptyUndoStack()) {
            this.cancelCroppingRequested.emit();
            this.imageEditor.deactivateAll();
            this.imageEditor.undo();
        }
    }
}
UndoComponent.ɵfac = function UndoComponent_Factory(t) { return new (t || UndoComponent)(); };
UndoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UndoComponent, selectors: [["tui-image-editor-menus-buttons-undo"]], inputs: { imageEditor: "imageEditor" }, outputs: { cancelCroppingRequested: "cancelCroppingRequested" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 5, consts: [[3, "title", "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-undo", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-undo", 1, "disabled", "use-default"], [0, "xlink", "href", "#ic-undo", 1, "hover", "use-default"]], template: function UndoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function UndoComponent_Template_div_click_0_listener() { return ctx.undoStackSize != 0 ? ctx.undo() : null; });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("tie-btn-undo tui-image-editor-item help " + (ctx.undoStackSize != 0 ? "enabled" : "disabled"));
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, "tui-image-editor-angular-menus-buttons-undo"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UndoComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-undo',
                templateUrl: './undo.component.html',
                styleUrls: ['./undo.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], cancelCroppingRequested: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL3VuZG8vdW5kby5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL3VuZG8vdW5kby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBTzdDLE1BQU0sT0FBTyxhQUFhO0lBS3hCO1FBSFUsNEJBQXVCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEUsa0JBQWEsR0FBVyxDQUFDLENBQUM7SUFFbEIsQ0FBQztJQUVoQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1lBQ3pFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUNqQixVQUFVLENBQUMsa0JBQWtCLEVBQzdCLFVBQVUsTUFBYztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFDOUIsQ0FBQyxDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUNsRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7MEVBekJVLGFBQWE7a0RBQWIsYUFBYTtRQ2hCMUIsOEJBT0M7UUFEQyw0R0FBMEIsQ0FBQyxHQUFHLFVBQU0sR0FBRyxJQUFJLElBQUM7O1FBRTVDLG1CQUF5QjtRQUF6Qiw4QkFBeUI7UUFDdkIseUJBQTREO1FBQzVELHlCQUE4RDtRQUM5RCx5QkFBMkQ7UUFDN0QsaUJBQU07UUFDUixpQkFBTTs7UUFYSiw2R0FHQztRQUpELDJGQUFtRTs7dUZEZXhELGFBQWE7Y0FMekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ3BDO3NDQUVVLFdBQVc7a0JBQW5CLEtBQUs7WUFDSSx1QkFBdUI7a0JBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZXZlbnROYW1lcyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy11bmRvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VuZG8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91bmRvLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVW5kb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGltYWdlRWRpdG9yOiBhbnk7XG4gIEBPdXRwdXQoKSBjYW5jZWxDcm9wcGluZ1JlcXVlc3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHVibGljIHVuZG9TdGFja1NpemU6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgaWYgKGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10gJiYgY2hhbmdlc1snaW1hZ2VFZGl0b3InXS5jdXJyZW50VmFsdWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5pbWFnZUVkaXRvci5vbihcbiAgICAgICAgZXZlbnROYW1lcy5VTkRPX1NUQUNLX0NIQU5HRUQsXG4gICAgICAgIGZ1bmN0aW9uIChsZW5ndGg6IG51bWJlcikge1xuICAgICAgICAgIHRoYXQudW5kb1N0YWNrU2l6ZSA9IGxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB1bmRvKCkge1xuICAgIGlmICh0aGlzLmltYWdlRWRpdG9yIT1udWxsICYmICF0aGlzLmltYWdlRWRpdG9yLmlzRW1wdHlVbmRvU3RhY2soKSkge1xuICAgICAgdGhpcy5jYW5jZWxDcm9wcGluZ1JlcXVlc3RlZC5lbWl0KCk7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yLmRlYWN0aXZhdGVBbGwoKTtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3IudW5kbygpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdlxuICBbdGl0bGVdPVwiJ3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1tZW51cy1idXR0b25zLXVuZG8nIHwgdHJhbnNsYXRlXCJcbiAgW2NsYXNzXT1cIlxuICAgICd0aWUtYnRuLXVuZG8gdHVpLWltYWdlLWVkaXRvci1pdGVtIGhlbHAgJyArXG4gICAgKHVuZG9TdGFja1NpemUgIT0gMCA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCcpXG4gIFwiXG4gIChjbGljayk9XCJ1bmRvU3RhY2tTaXplICE9IDAgPyB1bmRvKCkgOiBudWxsXCJcbj5cbiAgPHN2ZyBjbGFzcz1cInN2Z19pYy1tZW51XCI+XG4gICAgPHVzZSB4bGluazpocmVmPVwiI2ljLXVuZG9cIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy11bmRvXCIgY2xhc3M9XCJkaXNhYmxlZCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy11bmRvXCIgY2xhc3M9XCJob3ZlciB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICA8L3N2Zz5cbjwvZGl2PlxuIl19