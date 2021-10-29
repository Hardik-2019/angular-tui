import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { cropModes, eventNames, historyNames } from '../../consts';
import { isEmptyCropzone } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class CropComponent {
    constructor() {
        this.activeCropMode = cropModes.PRESET_NONE;
        this.CROPMODE_PRESET_NONE = cropModes.PRESET_NONE;
        this.CROPMODE_PRESET_SQUARE = cropModes.PRESET_SQUARE;
        this.CROPMODE_PRESET_16_9 = cropModes.PRESET_16_9;
        this.CROPMODE_PRESET_3_2 = cropModes.PRESET_3_2;
        this.CROPMODE_PRESET_4_3 = cropModes.PRESET_4_3;
        this.CROPMODE_PRESET_5_4 = cropModes.PRESET_5_4;
        this.CROPMODE_PRESET_7_5 = cropModes.PRESET_7_5;
        this.cancelCroppingRequested = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['imageEditor'] && changes['imageEditor'].currentValue != null) {
            this.imageEditor.startDrawingMode('CROPPER');
        }
    }
    setCropMode(cropMode) {
        this.activeCropMode = cropMode;
        switch (cropMode) {
            case cropModes.PRESET_SQUARE:
                this.setCropzoneRect(1 / 1);
                break;
            case cropModes.PRESET_3_2:
                this.setCropzoneRect(3 / 2);
                break;
            case cropModes.PRESET_4_3:
                this.setCropzoneRect(4 / 3);
                break;
            case cropModes.PRESET_5_4:
                this.setCropzoneRect(5 / 4);
                break;
            case cropModes.PRESET_7_5:
                this.setCropzoneRect(7 / 5);
                break;
            case cropModes.PRESET_16_9:
                this.setCropzoneRect(16 / 9);
                break;
        }
    }
    setCropzoneRect(mode) {
        this.imageEditor.setCropzoneRect(mode);
    }
    applyCrop() {
        if (this.imageEditor != null) {
            const cropRect = this.imageEditor.getCropzoneRect();
            if (cropRect && !isEmptyCropzone(cropRect)) {
                this.imageEditor
                    .crop(cropRect)
                    .then(() => {
                    this.cancelCrop();
                    this.imageEditor._invoker.fire(eventNames.EXECUTE_COMMAND, historyNames.CROP);
                })['catch']((message) => Promise.reject(message));
            }
        }
    }
    cancelCrop() {
        this.cancelCroppingRequested.emit();
    }
}
CropComponent.ɵfac = function CropComponent_Factory(t) { return new (t || CropComponent)(); };
CropComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CropComponent, selectors: [["tui-image-editor-submenus-crop"]], inputs: { imageEditor: "imageEditor" }, outputs: { cancelCroppingRequested: "cancelCroppingRequested" }, features: [i0.ɵɵNgOnChangesFeature], decls: 70, vars: 26, consts: [[1, "tui-image-editor-menu-crop"], [1, "tui-image-editor-submenu-item"], [1, "tui-image-editor-d-flex", "tui-image-editor-justify-content-center"], [1, "tie-crop-preset-button", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-align-items-center", "tui-image-editor-overflowable-x", "tui-image-editor-py-3"], [3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-shape-rectangle", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-shape-rectangle", 1, "active", "use-default"], [0, "xlink", "href", "#ic-crop", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-crop", 1, "active", "use-default"], [1, "tie-crop-button", "action", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-mb-3"], [1, "tui-image-editor-button", "apply", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", 3, "click"], [1, "svg_ic-menu"], [0, "xlink", "href", "#ic-apply", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-apply", 1, "active", "use-default"], [1, "tui-image-editor-button", "cancel", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", 3, "click"], [0, "xlink", "href", "#ic-cancel", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-cancel", 1, "active", "use-default"]], template: function CropComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵlistener("click", function CropComponent_Template_div_click_4_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_NONE); });
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(6, "svg", 5);
        i0.ɵɵelement(7, "use", 6);
        i0.ɵɵelement(8, "use", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(9, "label");
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 4);
        i0.ɵɵlistener("click", function CropComponent_Template_div_click_12_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_SQUARE); });
        i0.ɵɵelementStart(13, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(14, "svg", 5);
        i0.ɵɵelement(15, "use", 8);
        i0.ɵɵelement(16, "use", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(17, "label");
        i0.ɵɵtext(18);
        i0.ɵɵpipe(19, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 4);
        i0.ɵɵlistener("click", function CropComponent_Template_div_click_20_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_3_2); });
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(22, "svg", 5);
        i0.ɵɵelement(23, "use", 8);
        i0.ɵɵelement(24, "use", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(25, "label");
        i0.ɵɵtext(26, " 3:2 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 4);
        i0.ɵɵlistener("click", function CropComponent_Template_div_click_27_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_4_3); });
        i0.ɵɵelementStart(28, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(29, "svg", 5);
        i0.ɵɵelement(30, "use", 8);
        i0.ɵɵelement(31, "use", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(32, "label");
        i0.ɵɵtext(33, " 4:3 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "div", 4);
        i0.ɵɵlistener("click", function CropComponent_Template_div_click_34_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_5_4); });
        i0.ɵɵelementStart(35, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(36, "svg", 5);
        i0.ɵɵelement(37, "use", 8);
        i0.ɵɵelement(38, "use", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(39, "label");
        i0.ɵɵtext(40, " 5:4 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "div", 4);
        i0.ɵɵlistener("click", function CropComponent_Template_div_click_41_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_7_5); });
        i0.ɵɵelementStart(42, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(43, "svg", 5);
        i0.ɵɵelement(44, "use", 8);
        i0.ɵɵelement(45, "use", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(46, "label");
        i0.ɵɵtext(47, " 7:5 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "div", 4);
        i0.ɵɵlistener("click", function CropComponent_Template_div_click_48_listener() { return ctx.setCropMode(ctx.CROPMODE_PRESET_16_9); });
        i0.ɵɵelementStart(49, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(50, "svg", 5);
        i0.ɵɵelement(51, "use", 8);
        i0.ɵɵelement(52, "use", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(53, "label");
        i0.ɵɵtext(54, " 16:9 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(55, "div", 10);
        i0.ɵɵelementStart(56, "div", 11);
        i0.ɵɵlistener("click", function CropComponent_Template_div_click_56_listener() { return ctx.applyCrop(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(57, "svg", 12);
        i0.ɵɵelement(58, "use", 13);
        i0.ɵɵelement(59, "use", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(60, "label");
        i0.ɵɵtext(61);
        i0.ɵɵpipe(62, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(63, "div", 15);
        i0.ɵɵlistener("click", function CropComponent_Template_div_click_63_listener() { return ctx.cancelCrop(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(64, "svg", 12);
        i0.ɵɵelement(65, "use", 16);
        i0.ɵɵelement(66, "use", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(67, "label");
        i0.ɵɵtext(68);
        i0.ɵɵpipe(69, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵclassMap("tui-image-editor-button preset preset-none " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_NONE ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 18, "tui-image-editor-angular-submenus-crop-custom"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button preset preset-square " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_SQUARE ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(19, 20, "tui-image-editor-angular-submenus-crop-square"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button preset preset-3-2 " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_3_2 ? "active" : ""));
        i0.ɵɵadvance(7);
        i0.ɵɵclassMap("tui-image-editor-button preset preset-4-3 " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_4_3 ? "active" : ""));
        i0.ɵɵadvance(7);
        i0.ɵɵclassMap("tui-image-editor-button preset preset-5-4 " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_5_4 ? "active" : ""));
        i0.ɵɵadvance(7);
        i0.ɵɵclassMap("tui-image-editor-button preset preset-7-5 " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_7_5 ? "active" : ""));
        i0.ɵɵadvance(7);
        i0.ɵɵclassMap("tui-image-editor-button preset preset-16-9 " + (ctx.activeCropMode == ctx.CROPMODE_PRESET_16_9 ? "active" : ""));
        i0.ɵɵadvance(13);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(62, 22, "tui-image-editor-angular-submenus-crop-apply"), " ");
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(69, 24, "tui-image-editor-angular-submenus-crop-cancel"), " ");
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CropComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-crop',
                templateUrl: './crop.component.html',
                styleUrls: ['./crop.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], cancelCroppingRequested: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9zdWJtZW51cy9jcm9wL2Nyb3AuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvc3VibWVudXMvY3JvcC9jcm9wLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQU85QyxNQUFNLE9BQU8sYUFBYTtJQWF4QjtRQVhPLG1CQUFjLEdBQWMsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUNsRCx5QkFBb0IsR0FBYyxTQUFTLENBQUMsV0FBVyxDQUFDO1FBQ3hELDJCQUFzQixHQUFjLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDNUQseUJBQW9CLEdBQWMsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUN4RCx3QkFBbUIsR0FBYyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ3RELHdCQUFtQixHQUFjLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFDdEQsd0JBQW1CLEdBQWMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUN0RCx3QkFBbUIsR0FBYyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBRTdELDRCQUF1QixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRXRELENBQUM7SUFFaEIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLE9BQU8sQ0FB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QztRQURDLHdGQUFTLGVBQVcsSUFBQztRQUVyQixtQkFBeUI7UUFBekIsZ0NBQXlCO1FBQ3ZCLDJCQUE2RDtRQUM3RCwyQkFBNkQ7UUFDL0QsaUJBQU07UUFDTixvQkFBTztRQUFQLDhCQUFPO1FBQ0wsYUFDRjs7UUFBQSxpQkFBUTtRQUNWLGlCQUFNO1FBQ04sZ0NBR0M7UUFEQyx3RkFBUyxnQkFBWSxJQUFDO1FBRXRCLG1CQUF5QjtRQUF6QixnQ0FBeUI7UUFDdkIsMkJBQThEO1FBQzlELDJCQUE4RDtRQUNoRSxpQkFBTTtRQUNOLG9CQUFPO1FBQVAsOEJBQU87UUFDTCxhQUNGOztRQUFBLGlCQUFRO1FBQ1YsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O1FBakpJLGVBR0M7UUFIRCwrSEFHQztRQWdCQyxlQUNGO1FBREUsd0dBQ0Y7UUFHQSxlQUdDO1FBSEQsbUlBR0M7UUFVQyxlQUNGO1FBREUsd0dBQ0Y7UUFHQSxlQUdDO1FBSEQsNkhBR0M7UUFZRCxlQUdDO1FBSEQsNkhBR0M7UUFZRCxlQUdDO1FBSEQsNkhBR0M7UUFZRCxlQUdDO1FBSEQsNkhBR0M7UUFZRCxlQUdDO1FBSEQsK0hBR0M7UUF5QkQsZ0JBQ0Y7UUFERSx1R0FDRjtRQVdFLGVBQ0Y7UUFERSx3R0FDRjs7dUZEcklLLGFBQWE7Y0FMekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ3BDO3NDQUVVLFdBQVc7a0JBQW5CLEtBQUs7WUFVTix1QkFBdUI7a0JBRHRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3JvcE1vZGVzLCBldmVudE5hbWVzLCBoaXN0b3J5TmFtZXMgfSBmcm9tICcuLi8uLi9jb25zdHMnO1xuaW1wb3J0IHsgaXNFbXB0eUNyb3B6b25lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnVzLWNyb3AnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3JvcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nyb3AuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDcm9wQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgaW1hZ2VFZGl0b3I6IGFueTtcbiAgcHVibGljIGFjdGl2ZUNyb3BNb2RlOiBjcm9wTW9kZXMgPSBjcm9wTW9kZXMuUFJFU0VUX05PTkU7XG4gIHB1YmxpYyBDUk9QTU9ERV9QUkVTRVRfTk9ORTogY3JvcE1vZGVzID0gY3JvcE1vZGVzLlBSRVNFVF9OT05FO1xuICBwdWJsaWMgQ1JPUE1PREVfUFJFU0VUX1NRVUFSRTogY3JvcE1vZGVzID0gY3JvcE1vZGVzLlBSRVNFVF9TUVVBUkU7XG4gIHB1YmxpYyBDUk9QTU9ERV9QUkVTRVRfMTZfOTogY3JvcE1vZGVzID0gY3JvcE1vZGVzLlBSRVNFVF8xNl85O1xuICBwdWJsaWMgQ1JPUE1PREVfUFJFU0VUXzNfMjogY3JvcE1vZGVzID0gY3JvcE1vZGVzLlBSRVNFVF8zXzI7XG4gIHB1YmxpYyBDUk9QTU9ERV9QUkVTRVRfNF8zOiBjcm9wTW9kZXMgPSBjcm9wTW9kZXMuUFJFU0VUXzRfMztcbiAgcHVibGljIENST1BNT0RFX1BSRVNFVF81XzQ6IGNyb3BNb2RlcyA9IGNyb3BNb2Rlcy5QUkVTRVRfNV80O1xuICBwdWJsaWMgQ1JPUE1PREVfUFJFU0VUXzdfNTogY3JvcE1vZGVzID0gY3JvcE1vZGVzLlBSRVNFVF83XzU7XG4gIEBPdXRwdXQoKVxuICBjYW5jZWxDcm9wcGluZ1JlcXVlc3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydpbWFnZUVkaXRvciddICYmIGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10uY3VycmVudFZhbHVlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3Iuc3RhcnREcmF3aW5nTW9kZSgnQ1JPUFBFUicpO1xuICAgIH1cbiAgfVxuXG4gIHNldENyb3BNb2RlKGNyb3BNb2RlOiBjcm9wTW9kZXMpIHtcbiAgICB0aGlzLmFjdGl2ZUNyb3BNb2RlID0gY3JvcE1vZGU7XG4gICAgc3dpdGNoIChjcm9wTW9kZSkge1xuICAgICAgY2FzZSBjcm9wTW9kZXMuUFJFU0VUX1NRVUFSRTpcbiAgICAgICAgdGhpcy5zZXRDcm9wem9uZVJlY3QoMSAvIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY3JvcE1vZGVzLlBSRVNFVF8zXzI6XG4gICAgICAgIHRoaXMuc2V0Q3JvcHpvbmVSZWN0KDMgLyAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNyb3BNb2Rlcy5QUkVTRVRfNF8zOlxuICAgICAgICB0aGlzLnNldENyb3B6b25lUmVjdCg0IC8gMyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBjcm9wTW9kZXMuUFJFU0VUXzVfNDpcbiAgICAgICAgdGhpcy5zZXRDcm9wem9uZVJlY3QoNSAvIDQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY3JvcE1vZGVzLlBSRVNFVF83XzU6XG4gICAgICAgIHRoaXMuc2V0Q3JvcHpvbmVSZWN0KDcgLyA1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNyb3BNb2Rlcy5QUkVTRVRfMTZfOTpcbiAgICAgICAgdGhpcy5zZXRDcm9wem9uZVJlY3QoMTYgLyA5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2V0Q3JvcHpvbmVSZWN0KG1vZGU6IG51bWJlcikge1xuICAgIHRoaXMuaW1hZ2VFZGl0b3Iuc2V0Q3JvcHpvbmVSZWN0KG1vZGUpO1xuICB9XG5cbiAgYXBwbHlDcm9wKCkge1xuICAgIGlmICh0aGlzLmltYWdlRWRpdG9yICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGNyb3BSZWN0ID0gdGhpcy5pbWFnZUVkaXRvci5nZXRDcm9wem9uZVJlY3QoKTtcbiAgICAgIGlmIChjcm9wUmVjdCAmJiAhaXNFbXB0eUNyb3B6b25lKGNyb3BSZWN0KSkge1xuICAgICAgICB0aGlzLmltYWdlRWRpdG9yXG4gICAgICAgICAgLmNyb3AoY3JvcFJlY3QpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxDcm9wKCk7XG4gICAgICAgICAgICB0aGlzLmltYWdlRWRpdG9yLl9pbnZva2VyLmZpcmUoXG4gICAgICAgICAgICAgIGV2ZW50TmFtZXMuRVhFQ1VURV9DT01NQU5ELFxuICAgICAgICAgICAgICBoaXN0b3J5TmFtZXMuQ1JPUFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIFsnY2F0Y2gnXSgobWVzc2FnZSkgPT4gUHJvbWlzZS5yZWplY3QobWVzc2FnZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbmNlbENyb3AoKSB7XG4gICAgdGhpcy5jYW5jZWxDcm9wcGluZ1JlcXVlc3RlZC5lbWl0KCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLW1lbnUtY3JvcFwiPlxuICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1zdWJtZW51LWl0ZW1cIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItanVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInRpZS1jcm9wLXByZXNldC1idXR0b24gdHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtbm93cmFwIHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3Itb3ZlcmZsb3dhYmxlLXggdHVpLWltYWdlLWVkaXRvci1weS0zXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIFtjbGFzc109XCJcbiAgICAgICAgICAgICd0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiBwcmVzZXQgcHJlc2V0LW5vbmUgJyArXG4gICAgICAgICAgICAoYWN0aXZlQ3JvcE1vZGUgPT0gQ1JPUE1PREVfUFJFU0VUX05PTkUgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgKGNsaWNrKT1cInNldENyb3BNb2RlKENST1BNT0RFX1BSRVNFVF9OT05FKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLXNoYXBlLXJlY3RhbmdsZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLXNoYXBlLXJlY3RhbmdsZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICB7eyBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1jcm9wLWN1c3RvbVwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAndHVpLWltYWdlLWVkaXRvci1idXR0b24gcHJlc2V0IHByZXNldC1zcXVhcmUgJyArXG4gICAgICAgICAgICAoYWN0aXZlQ3JvcE1vZGUgPT0gQ1JPUE1PREVfUFJFU0VUX1NRVUFSRSA/ICdhY3RpdmUnIDogJycpXG4gICAgICAgICAgXCJcbiAgICAgICAgICAoY2xpY2spPVwic2V0Q3JvcE1vZGUoQ1JPUE1PREVfUFJFU0VUX1NRVUFSRSlcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmdfaWMtc3VibWVudVwiPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtY3JvcFwiIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1jcm9wXCIgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIHt7IFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWNyb3Atc3F1YXJlXCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIFtjbGFzc109XCJcbiAgICAgICAgICAgICd0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiBwcmVzZXQgcHJlc2V0LTMtMiAnICtcbiAgICAgICAgICAgIChhY3RpdmVDcm9wTW9kZSA9PSBDUk9QTU9ERV9QUkVTRVRfM18yID8gJ2FjdGl2ZScgOiAnJylcbiAgICAgICAgICBcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRDcm9wTW9kZShDUk9QTU9ERV9QUkVTRVRfM18yKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1jcm9wXCIgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWNyb3BcIiBjbGFzcz1cImFjdGl2ZSB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGxhYmVsPiAzOjIgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAndHVpLWltYWdlLWVkaXRvci1idXR0b24gcHJlc2V0IHByZXNldC00LTMgJyArXG4gICAgICAgICAgICAoYWN0aXZlQ3JvcE1vZGUgPT0gQ1JPUE1PREVfUFJFU0VUXzRfMyA/ICdhY3RpdmUnIDogJycpXG4gICAgICAgICAgXCJcbiAgICAgICAgICAoY2xpY2spPVwic2V0Q3JvcE1vZGUoQ1JPUE1PREVfUFJFU0VUXzRfMylcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmdfaWMtc3VibWVudVwiPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtY3JvcFwiIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1jcm9wXCIgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxsYWJlbD4gNDozIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgW2NsYXNzXT1cIlxuICAgICAgICAgICAgJ3R1aS1pbWFnZS1lZGl0b3ItYnV0dG9uIHByZXNldCBwcmVzZXQtNS00ICcgK1xuICAgICAgICAgICAgKGFjdGl2ZUNyb3BNb2RlID09IENST1BNT0RFX1BSRVNFVF81XzQgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgKGNsaWNrKT1cInNldENyb3BNb2RlKENST1BNT0RFX1BSRVNFVF81XzQpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwic3ZnX2ljLXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWNyb3BcIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtY3JvcFwiIGNsYXNzPVwiYWN0aXZlIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bGFiZWw+IDU6NCA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIFtjbGFzc109XCJcbiAgICAgICAgICAgICd0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiBwcmVzZXQgcHJlc2V0LTctNSAnICtcbiAgICAgICAgICAgIChhY3RpdmVDcm9wTW9kZSA9PSBDUk9QTU9ERV9QUkVTRVRfN181ID8gJ2FjdGl2ZScgOiAnJylcbiAgICAgICAgICBcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRDcm9wTW9kZShDUk9QTU9ERV9QUkVTRVRfN181KVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1jcm9wXCIgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWNyb3BcIiBjbGFzcz1cImFjdGl2ZSB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGxhYmVsPiA3OjUgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAndHVpLWltYWdlLWVkaXRvci1idXR0b24gcHJlc2V0IHByZXNldC0xNi05ICcgK1xuICAgICAgICAgICAgKGFjdGl2ZUNyb3BNb2RlID09IENST1BNT0RFX1BSRVNFVF8xNl85ID8gJ2FjdGl2ZScgOiAnJylcbiAgICAgICAgICBcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRDcm9wTW9kZShDUk9QTU9ERV9QUkVTRVRfMTZfOSlcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmdfaWMtc3VibWVudVwiPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtY3JvcFwiIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1jcm9wXCIgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxsYWJlbD4gMTY6OSA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwidGllLWNyb3AtYnV0dG9uIGFjdGlvbiB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1ub3dyYXAgdHVpLWltYWdlLWVkaXRvci1hbGlnbi1pdGVtcy1jZW50ZXIgdHVpLWltYWdlLWVkaXRvci1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItbWItM1wiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItYnV0dG9uIGFwcGx5IHR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3cgdHVpLWltYWdlLWVkaXRvci1hbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAoY2xpY2spPVwiYXBwbHlDcm9wKClcIlxuICAgICAgPlxuICAgICAgICA8c3ZnIGNsYXNzPVwic3ZnX2ljLW1lbnVcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtYXBwbHlcIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1hcHBseVwiIGNsYXNzPVwiYWN0aXZlIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAge3sgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtY3JvcC1hcHBseVwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiBjYW5jZWwgdHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgIChjbGljayk9XCJjYW5jZWxDcm9wKClcIlxuICAgICAgPlxuICAgICAgICA8c3ZnIGNsYXNzPVwic3ZnX2ljLW1lbnVcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtY2FuY2VsXCIgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtY2FuY2VsXCIgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB7eyBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1jcm9wLWNhbmNlbFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==