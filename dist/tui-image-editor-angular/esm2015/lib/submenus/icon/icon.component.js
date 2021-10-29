import { Component, Input, } from '@angular/core';
import ImageTracer from 'tui-image-editor/src/js/helper/imagetracer';
import { defaultColors, eventNames } from '../../consts';
import { clearSelection, getActiveObjectId } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color-picker";
import * as i2 from "@ngx-translate/core";
export class IconComponent {
    constructor() {
        this.defaultIconColors = defaultColors;
        this.iconColor = 'rgba(255, 187, 59, 1)';
        this.onObjectActivatedEventListener = this.onObjectActivated.bind(this);
        this.onObjectAddedEventListener = this.onObjectAdded.bind(this);
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        var that = this;
        if (changes['imageEditor']) {
            this.activeObjectId = getActiveObjectId(changes['imageEditor'].currentValue);
            this.checkActiveObject(this.activeObjectId);
            (_a = changes['imageEditor'].previousValue) === null || _a === void 0 ? void 0 : _a.off(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
            (_b = changes['imageEditor'].currentValue) === null || _b === void 0 ? void 0 : _b.on(eventNames.OBJECT_ACTIVATED, that.onObjectActivatedEventListener);
            (_c = changes['imageEditor'].previousValue) === null || _c === void 0 ? void 0 : _c.off(eventNames.OBJECT_ADDED, that.onObjectAddedEventListener);
            (_d = changes['imageEditor'].currentValue) === null || _d === void 0 ? void 0 : _d.on(eventNames.OBJECT_ADDED, that.onObjectAddedEventListener);
        }
    }
    ngOnDestroy() {
        if (this.imageEditor) {
            this.imageEditor.off(eventNames.OBJECT_ACTIVATED, this.onObjectActivatedEventListener);
            this.imageEditor.off(eventNames.OBJECT_ADDED, this.onObjectAddedEventListener);
        }
    }
    onObjectActivated(props) {
        this.activeObjectId = props === null || props === void 0 ? void 0 : props.id;
        this.checkActiveObject(this.activeObjectId);
    }
    onObjectAdded(props) {
        if (props && props.type === 'icon') {
            this.setActiveIconType(this.iconType, false);
        }
    }
    checkActiveObject(activeObjectId) {
        var _a;
        if (activeObjectId != null) {
            var props = (_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.getObjectProperties(activeObjectId, [
                'type',
                'fill',
            ]);
            if (props && props.type === 'icon') {
                this.iconColor =
                    typeof props.fill == 'object' && props.fill.type == 'color'
                        ? props.fill.color
                        : props.fill == null || props.fill.trim() == ''
                            ? 'rgba(255, 187, 59, 1)'
                            : props.fill;
            }
        }
    }
    setActiveIconType(newIconType, discardSelection = true) {
        if (discardSelection) {
            clearSelection(this.imageEditor);
        }
        if (this.iconType != newIconType) {
            this.iconType = newIconType;
            this.imageEditor.startDrawingMode('ICON');
            this.imageEditor.setDrawingIcon(newIconType, this.iconColor);
            this.imageEditor.changeCursor('crosshair');
        }
        else {
            this.iconType = null;
            this.imageEditor.stopDrawingMode();
            this.imageEditor.changeCursor('default');
        }
    }
    iconColorChanged(currentColor) {
        this.iconChangeActiveObject();
    }
    iconChangeActiveObject() {
        if (this.activeObjectId != null &&
            getActiveObjectId(this.imageEditor) == this.activeObjectId) {
            var props = this.imageEditor.getObjectProperties(this.activeObjectId, 'type');
            if (props.type === 'icon') {
                this.imageEditor.setObjectProperties(this.activeObjectId, {
                    fill: this.iconColor,
                });
            }
        }
    }
    registerIcon(obj) {
        this.imageEditor.registerIcons(obj);
    }
    onIconChosen(event) {
        let selectedFile = event.target.files[0];
        if (selectedFile != null) {
            var imgUrl = URL.createObjectURL(selectedFile);
            const imagetracer = new ImageTracer();
            imagetracer.imageToSVG(imgUrl, (svgstr) => {
                const [, svgPath] = svgstr.match(/path[^>]*d="([^"]*)"/);
                const iconObj = {};
                iconObj[selectedFile.name] = svgPath;
                this.registerIcon(iconObj);
                this.imageEditor.addIcon(selectedFile.name, {
                    fill: this.iconColor,
                    left: 100,
                    top: 100,
                });
            }, ImageTracer.tracerDefaultOption());
        }
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IconComponent, selectors: [["tui-image-editor-submenus-icon"]], inputs: { imageEditor: "imageEditor", defaultIconColors: "defaultIconColors" }, features: [i0.ɵɵNgOnChangesFeature], decls: 97, vars: 57, consts: [[1, "tui-image-editor-menu-icon"], [1, "tui-image-editor-submenu-item", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-flex-nowrap"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-overflowable-x", "tui-image-editor-py-3"], [1, "tie-icon-add-button", "tui-image-editor-d-flex", "tui-image-editor-flex-row"], ["data-icontype", "icon-arrow", 3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-icon-arrow", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-arrow", 1, "active", "use-default"], ["data-icontype", "icon-arrow-2", 3, "click"], [0, "xlink", "href", "#ic-icon-arrow-2", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-arrow-2", 1, "active", "use-default"], ["data-icontype", "icon-arrow-3", 3, "click"], [0, "xlink", "href", "#ic-icon-arrow-3", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-arrow-3", 1, "active", "use-default"], ["data-icontype", "icon-star", 3, "click"], [0, "xlink", "href", "#ic-icon-star", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-star", 1, "active", "use-default"], ["data-icontype", "icon-star-2", 3, "click"], [0, "xlink", "href", "#ic-icon-star-2", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-star-2", 1, "active", "use-default"], ["data-icontype", "icon-polygon", 3, "click"], [0, "xlink", "href", "#ic-icon-polygon", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-polygon", 1, "active", "use-default"], ["data-icontype", "icon-location", 3, "click"], [0, "xlink", "href", "#ic-icon-location", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-location", 1, "active", "use-default"], ["data-icontype", "icon-heart", 3, "click"], [0, "xlink", "href", "#ic-icon-heart", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-heart", 1, "active", "use-default"], ["data-icontype", "icon-bubble", 3, "click"], [0, "xlink", "href", "#ic-icon-bubble", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-bubble", 1, "active", "use-default"], [1, "tui-image-editor-partition"], [1, "tie-icon-add-button"], [1, "tui-image-editor-button", 2, "margin", "0"], ["type", "file", "accept", "image/*", 1, "tie-icon-image-file", 3, "change"], [0, "xlink", "href", "#ic-icon-load", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-icon-load", 1, "active", "use-default"], ["title", "Color", 1, "tie-icon-color", "tui-image-editor-button", "tui-image-editor-d-flex", "tui-image-editor-flex-column"], ["readonly", "", 1, "tie-icon-color-picker", 3, "colorPicker", "cpOutputFormat", "cpPresetColors", "cpUseRootViewContainer", "colorPickerChange"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵlistener("click", function IconComponent_Template_div_click_4_listener() { return ctx.setActiveIconType("icon-arrow"); });
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
        i0.ɵɵelementStart(12, "div", 8);
        i0.ɵɵlistener("click", function IconComponent_Template_div_click_12_listener() { return ctx.setActiveIconType("icon-arrow-2"); });
        i0.ɵɵelementStart(13, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(14, "svg", 5);
        i0.ɵɵelement(15, "use", 9);
        i0.ɵɵelement(16, "use", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(17, "label");
        i0.ɵɵtext(18);
        i0.ɵɵpipe(19, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 11);
        i0.ɵɵlistener("click", function IconComponent_Template_div_click_20_listener() { return ctx.setActiveIconType("icon-arrow-3"); });
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(22, "svg", 5);
        i0.ɵɵelement(23, "use", 12);
        i0.ɵɵelement(24, "use", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(25, "label");
        i0.ɵɵtext(26);
        i0.ɵɵpipe(27, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div", 14);
        i0.ɵɵlistener("click", function IconComponent_Template_div_click_28_listener() { return ctx.setActiveIconType("icon-star"); });
        i0.ɵɵelementStart(29, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(30, "svg", 5);
        i0.ɵɵelement(31, "use", 15);
        i0.ɵɵelement(32, "use", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(33, "label");
        i0.ɵɵtext(34);
        i0.ɵɵpipe(35, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "div", 17);
        i0.ɵɵlistener("click", function IconComponent_Template_div_click_36_listener() { return ctx.setActiveIconType("icon-star-2"); });
        i0.ɵɵelementStart(37, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(38, "svg", 5);
        i0.ɵɵelement(39, "use", 18);
        i0.ɵɵelement(40, "use", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(41, "label");
        i0.ɵɵtext(42);
        i0.ɵɵpipe(43, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "div", 20);
        i0.ɵɵlistener("click", function IconComponent_Template_div_click_44_listener() { return ctx.setActiveIconType("icon-polygon"); });
        i0.ɵɵelementStart(45, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(46, "svg", 5);
        i0.ɵɵelement(47, "use", 21);
        i0.ɵɵelement(48, "use", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(49, "label");
        i0.ɵɵtext(50);
        i0.ɵɵpipe(51, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "div", 23);
        i0.ɵɵlistener("click", function IconComponent_Template_div_click_52_listener() { return ctx.setActiveIconType("icon-location"); });
        i0.ɵɵelementStart(53, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(54, "svg", 5);
        i0.ɵɵelement(55, "use", 24);
        i0.ɵɵelement(56, "use", 25);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(57, "label");
        i0.ɵɵtext(58);
        i0.ɵɵpipe(59, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(60, "div", 26);
        i0.ɵɵlistener("click", function IconComponent_Template_div_click_60_listener() { return ctx.setActiveIconType("icon-heart"); });
        i0.ɵɵelementStart(61, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(62, "svg", 5);
        i0.ɵɵelement(63, "use", 27);
        i0.ɵɵelement(64, "use", 28);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(65, "label");
        i0.ɵɵtext(66);
        i0.ɵɵpipe(67, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(68, "div", 29);
        i0.ɵɵlistener("click", function IconComponent_Template_div_click_68_listener() { return ctx.setActiveIconType("icon-bubble"); });
        i0.ɵɵelementStart(69, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(70, "svg", 5);
        i0.ɵɵelement(71, "use", 30);
        i0.ɵɵelement(72, "use", 31);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(73, "label");
        i0.ɵɵtext(74);
        i0.ɵɵpipe(75, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(76, "div", 32);
        i0.ɵɵelement(77, "div");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(78, "div", 33);
        i0.ɵɵelementStart(79, "div", 34);
        i0.ɵɵelementStart(80, "div");
        i0.ɵɵelementStart(81, "input", 35);
        i0.ɵɵlistener("change", function IconComponent_Template_input_change_81_listener($event) { return ctx.onIconChosen($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(82, "svg", 5);
        i0.ɵɵelement(83, "use", 36);
        i0.ɵɵelement(84, "use", 37);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(85, "label");
        i0.ɵɵtext(86);
        i0.ɵɵpipe(87, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(88, "div", 32);
        i0.ɵɵelement(89, "div");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(90, "div");
        i0.ɵɵelementStart(91, "div", 38);
        i0.ɵɵelementStart(92, "label");
        i0.ɵɵelementStart(93, "input", 39);
        i0.ɵɵlistener("colorPickerChange", function IconComponent_Template_input_colorPickerChange_93_listener($event) { return ctx.iconColor = $event; })("colorPickerChange", function IconComponent_Template_input_colorPickerChange_93_listener($event) { return ctx.iconColorChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(94, "div");
        i0.ɵɵtext(95);
        i0.ɵɵpipe(96, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-arrow" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 35, "tui-image-editor-angular-submenus-icon-arrow1"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-arrow-2" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(19, 37, "tui-image-editor-angular-submenus-icon-arrow2"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-arrow-3" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(27, 39, "tui-image-editor-angular-submenus-icon-arrow3"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-star" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(35, 41, "tui-image-editor-angular-submenus-icon-star1"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-star-2" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(43, 43, "tui-image-editor-angular-submenus-icon-star2"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-polygon" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(51, 45, "tui-image-editor-angular-submenus-icon-polygon"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-location" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(59, 47, "tui-image-editor-angular-submenus-icon-location"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-heart" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(67, 49, "tui-image-editor-angular-submenus-icon-heart"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap("tui-image-editor-button " + (ctx.iconType == "icon-bubble" ? "active" : ""));
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(75, 51, "tui-image-editor-angular-submenus-icon-bubble"), " ");
        i0.ɵɵadvance(12);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(87, 53, "tui-image-editor-angular-submenus-icon-customIcon"), " ");
        i0.ɵɵadvance(7);
        i0.ɵɵstyleProp("background", ctx.iconColor);
        i0.ɵɵproperty("colorPicker", ctx.iconColor)("cpOutputFormat", "rgba")("cpPresetColors", ctx.defaultIconColors)("cpUseRootViewContainer", true);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(96, 55, "tui-image-editor-angular-submenus-icon-color"), " ");
    } }, directives: [i1.ColorPickerDirective], pipes: [i2.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }], defaultIconColors: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9zdWJtZW51cy9pY29uL2ljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvc3VibWVudXMvaWNvbi9pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxHQUtOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sV0FBVyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFPaEUsTUFBTSxPQUFPLGFBQWE7SUFrQnhCO1FBaEJTLHNCQUFpQixHQUFhLGFBQWEsQ0FBQztRQUM5QyxjQUFTLEdBQVcsdUJBQXVCLENBQUM7UUFnQmpELElBQUksQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCOztRQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLGlC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QkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O1FBN1BJLGVBR0M7UUFIRCwwRkFHQztRQVdDLGVBQ0Y7UUFERSx3R0FDRjtRQUdBLGVBR0M7UUFIRCw0RkFHQztRQWlCQyxlQUNGO1FBREUsd0dBQ0Y7UUFHQSxlQUdDO1FBSEQsNEZBR0M7UUFpQkMsZUFDRjtRQURFLHdHQUNGO1FBR0EsZUFHQztRQUhELHlGQUdDO1FBV0MsZUFDRjtRQURFLHVHQUNGO1FBR0EsZUFHQztRQUhELDJGQUdDO1FBaUJDLGVBQ0Y7UUFERSx1R0FDRjtRQUlBLGVBR0M7UUFIRCw0RkFHQztRQWlCQyxlQUNGO1FBREUseUdBQ0Y7UUFJQSxlQUdDO1FBSEQsNkZBR0M7UUFpQkMsZUFDRjtRQURFLDBHQUNGO1FBSUEsZUFHQztRQUhELDBGQUdDO1FBV0MsZUFDRjtRQURFLHVHQUNGO1FBSUEsZUFHQztRQUhELDJGQUdDO1FBaUJDLGVBQ0Y7UUFERSx3R0FDRjtRQXFCRSxnQkFHRjtRQUhFLDRHQUdGO1FBZ0JJLGVBQThCO1FBQTlCLDJDQUE4QjtRQUQ5QiwyQ0FBMkIsMEJBQUEseUNBQUEsZ0NBQUE7UUFRM0IsZUFDRjtRQURFLHVHQUNGOzt1RkQ3T0MsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7c0NBRVUsV0FBVztrQkFBbkIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IEltYWdlVHJhY2VyIGZyb20gJ3R1aS1pbWFnZS1lZGl0b3Ivc3JjL2pzL2hlbHBlci9pbWFnZXRyYWNlcic7XG5pbXBvcnQgeyBkZWZhdWx0Q29sb3JzLCBldmVudE5hbWVzIH0gZnJvbSAnLi4vLi4vY29uc3RzJztcbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uLCBnZXRBY3RpdmVPYmplY3RJZCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHVpLWltYWdlLWVkaXRvci1zdWJtZW51cy1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaW1hZ2VFZGl0b3I6IGFueTtcbiAgQElucHV0KCkgZGVmYXVsdEljb25Db2xvcnM6IHN0cmluZ1tdID0gZGVmYXVsdENvbG9ycztcbiAgcHVibGljIGljb25Db2xvcjogc3RyaW5nID0gJ3JnYmEoMjU1LCAxODcsIDU5LCAxKSc7XG4gIHB1YmxpYyBpY29uVHlwZTpcbiAgICB8ICdpY29uLWFycm93J1xuICAgIHwgJ2ljb24tYXJyb3ctMidcbiAgICB8ICdpY29uLWFycm93LTMnXG4gICAgfCAnaWNvbi1zdGFyJ1xuICAgIHwgJ2ljb24tc3Rhci0yJ1xuICAgIHwgJ2ljb24tcG9seWdvbidcbiAgICB8ICdpY29uLWxvY2F0aW9uJ1xuICAgIHwgJ2ljb24taGVhcnQnXG4gICAgfCAnaWNvbi1idWJibGUnO1xuICBwdWJsaWMgYWN0aXZlT2JqZWN0SWQ6IG51bWJlcjtcbiAgcHVibGljIG9uT2JqZWN0QWN0aXZhdGVkRXZlbnRMaXN0ZW5lcjogYW55O1xuICBwdWJsaWMgb25PYmplY3RBZGRlZEV2ZW50TGlzdGVuZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9uT2JqZWN0QWN0aXZhdGVkRXZlbnRMaXN0ZW5lciA9IHRoaXMub25PYmplY3RBY3RpdmF0ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uT2JqZWN0QWRkZWRFdmVudExpc3RlbmVyID0gdGhpcy5vbk9iamVjdEFkZGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGlmIChjaGFuZ2VzWydpbWFnZUVkaXRvciddKSB7XG4gICAgICB0aGlzLmFjdGl2ZU9iamVjdElkID0gZ2V0QWN0aXZlT2JqZWN0SWQoY2hhbmdlc1snaW1hZ2VFZGl0b3InXS5jdXJyZW50VmFsdWUpO1xuICAgICAgdGhpcy5jaGVja0FjdGl2ZU9iamVjdCh0aGlzLmFjdGl2ZU9iamVjdElkKTtcblxuICAgICAgY2hhbmdlc1snaW1hZ2VFZGl0b3InXS5wcmV2aW91c1ZhbHVlPy5vZmYoXG4gICAgICAgIGV2ZW50TmFtZXMuT0JKRUNUX0FDVElWQVRFRCxcbiAgICAgICAgdGhhdC5vbk9iamVjdEFjdGl2YXRlZEV2ZW50TGlzdGVuZXJcbiAgICAgICk7XG4gICAgICBjaGFuZ2VzWydpbWFnZUVkaXRvciddLmN1cnJlbnRWYWx1ZT8ub24oXG4gICAgICAgIGV2ZW50TmFtZXMuT0JKRUNUX0FDVElWQVRFRCxcbiAgICAgICAgdGhhdC5vbk9iamVjdEFjdGl2YXRlZEV2ZW50TGlzdGVuZXJcbiAgICAgICk7XG5cbiAgICAgIGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10ucHJldmlvdXNWYWx1ZT8ub2ZmKFxuICAgICAgICBldmVudE5hbWVzLk9CSkVDVF9BRERFRCxcbiAgICAgICAgdGhhdC5vbk9iamVjdEFkZGVkRXZlbnRMaXN0ZW5lclxuICAgICAgKTtcbiAgICAgIGNoYW5nZXNbJ2ltYWdlRWRpdG9yJ10uY3VycmVudFZhbHVlPy5vbihcbiAgICAgICAgZXZlbnROYW1lcy5PQkpFQ1RfQURERUQsXG4gICAgICAgIHRoYXQub25PYmplY3RBZGRlZEV2ZW50TGlzdGVuZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW1hZ2VFZGl0b3IpIHtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3Iub2ZmKFxuICAgICAgICBldmVudE5hbWVzLk9CSkVDVF9BQ1RJVkFURUQsXG4gICAgICAgIHRoaXMub25PYmplY3RBY3RpdmF0ZWRFdmVudExpc3RlbmVyXG4gICAgICApO1xuICAgICAgdGhpcy5pbWFnZUVkaXRvci5vZmYoXG4gICAgICAgIGV2ZW50TmFtZXMuT0JKRUNUX0FEREVELFxuICAgICAgICB0aGlzLm9uT2JqZWN0QWRkZWRFdmVudExpc3RlbmVyXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25PYmplY3RBY3RpdmF0ZWQocHJvcHMpIHtcbiAgICB0aGlzLmFjdGl2ZU9iamVjdElkID0gcHJvcHM/LmlkO1xuICAgIHRoaXMuY2hlY2tBY3RpdmVPYmplY3QodGhpcy5hY3RpdmVPYmplY3RJZCk7XG4gIH1cblxuICBwcml2YXRlIG9uT2JqZWN0QWRkZWQocHJvcHMpIHtcbiAgICBpZiAocHJvcHMgJiYgcHJvcHMudHlwZSA9PT0gJ2ljb24nKSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZUljb25UeXBlKHRoaXMuaWNvblR5cGUsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQWN0aXZlT2JqZWN0KGFjdGl2ZU9iamVjdElkOiBudW1iZXIpIHtcbiAgICBpZiAoYWN0aXZlT2JqZWN0SWQgIT0gbnVsbCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5pbWFnZUVkaXRvcj8uZ2V0T2JqZWN0UHJvcGVydGllcyhhY3RpdmVPYmplY3RJZCwgW1xuICAgICAgICAndHlwZScsXG4gICAgICAgICdmaWxsJyxcbiAgICAgIF0pO1xuICAgICAgaWYgKHByb3BzICYmIHByb3BzLnR5cGUgPT09ICdpY29uJykge1xuICAgICAgICB0aGlzLmljb25Db2xvciA9XG4gICAgICAgICAgdHlwZW9mIHByb3BzLmZpbGwgPT0gJ29iamVjdCcgJiYgcHJvcHMuZmlsbC50eXBlID09ICdjb2xvcidcbiAgICAgICAgICAgID8gcHJvcHMuZmlsbC5jb2xvclxuICAgICAgICAgICAgOiBwcm9wcy5maWxsID09IG51bGwgfHwgcHJvcHMuZmlsbC50cmltKCkgPT0gJydcbiAgICAgICAgICAgID8gJ3JnYmEoMjU1LCAxODcsIDU5LCAxKSdcbiAgICAgICAgICAgIDogcHJvcHMuZmlsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRBY3RpdmVJY29uVHlwZShcbiAgICBuZXdJY29uVHlwZTpcbiAgICAgIHwgJ2ljb24tYXJyb3cnXG4gICAgICB8ICdpY29uLWFycm93LTInXG4gICAgICB8ICdpY29uLWFycm93LTMnXG4gICAgICB8ICdpY29uLXN0YXInXG4gICAgICB8ICdpY29uLXN0YXItMidcbiAgICAgIHwgJ2ljb24tcG9seWdvbidcbiAgICAgIHwgJ2ljb24tbG9jYXRpb24nXG4gICAgICB8ICdpY29uLWhlYXJ0J1xuICAgICAgfCAnaWNvbi1idWJibGUnLFxuICAgIGRpc2NhcmRTZWxlY3Rpb246IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIGlmIChkaXNjYXJkU2VsZWN0aW9uKSB7XG4gICAgICBjbGVhclNlbGVjdGlvbih0aGlzLmltYWdlRWRpdG9yKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWNvblR5cGUgIT0gbmV3SWNvblR5cGUpIHtcbiAgICAgIHRoaXMuaWNvblR5cGUgPSBuZXdJY29uVHlwZTtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3Iuc3RhcnREcmF3aW5nTW9kZSgnSUNPTicpO1xuICAgICAgdGhpcy5pbWFnZUVkaXRvci5zZXREcmF3aW5nSWNvbihuZXdJY29uVHlwZSwgdGhpcy5pY29uQ29sb3IpO1xuICAgICAgdGhpcy5pbWFnZUVkaXRvci5jaGFuZ2VDdXJzb3IoJ2Nyb3NzaGFpcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb25UeXBlID0gbnVsbDtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3Iuc3RvcERyYXdpbmdNb2RlKCk7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yLmNoYW5nZUN1cnNvcignZGVmYXVsdCcpO1xuICAgIH1cbiAgfVxuXG4gIGljb25Db2xvckNoYW5nZWQoY3VycmVudENvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLmljb25DaGFuZ2VBY3RpdmVPYmplY3QoKTtcbiAgfVxuXG4gIGljb25DaGFuZ2VBY3RpdmVPYmplY3QoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5hY3RpdmVPYmplY3RJZCAhPSBudWxsICYmXG4gICAgICBnZXRBY3RpdmVPYmplY3RJZCh0aGlzLmltYWdlRWRpdG9yKSA9PSB0aGlzLmFjdGl2ZU9iamVjdElkXG4gICAgKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLmltYWdlRWRpdG9yLmdldE9iamVjdFByb3BlcnRpZXMoXG4gICAgICAgIHRoaXMuYWN0aXZlT2JqZWN0SWQsXG4gICAgICAgICd0eXBlJ1xuICAgICAgKTtcbiAgICAgIGlmIChwcm9wcy50eXBlID09PSAnaWNvbicpIHtcbiAgICAgICAgdGhpcy5pbWFnZUVkaXRvci5zZXRPYmplY3RQcm9wZXJ0aWVzKHRoaXMuYWN0aXZlT2JqZWN0SWQsIHtcbiAgICAgICAgICBmaWxsOiB0aGlzLmljb25Db2xvcixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJJY29uKG9iaikge1xuICAgIHRoaXMuaW1hZ2VFZGl0b3IucmVnaXN0ZXJJY29ucyhvYmopO1xuICB9XG5cbiAgb25JY29uQ2hvc2VuKGV2ZW50KSB7XG4gICAgbGV0IHNlbGVjdGVkRmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoc2VsZWN0ZWRGaWxlICE9IG51bGwpIHtcbiAgICAgIHZhciBpbWdVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHNlbGVjdGVkRmlsZSk7XG4gICAgICBjb25zdCBpbWFnZXRyYWNlciA9IG5ldyBJbWFnZVRyYWNlcigpO1xuICAgICAgaW1hZ2V0cmFjZXIuaW1hZ2VUb1NWRyhcbiAgICAgICAgaW1nVXJsLFxuICAgICAgICAoc3Znc3RyKSA9PiB7XG4gICAgICAgICAgY29uc3QgWywgc3ZnUGF0aF0gPSBzdmdzdHIubWF0Y2goL3BhdGhbXj5dKmQ9XCIoW15cIl0qKVwiLyk7XG4gICAgICAgICAgY29uc3QgaWNvbk9iaiA9IHt9O1xuICAgICAgICAgIGljb25PYmpbc2VsZWN0ZWRGaWxlLm5hbWVdID0gc3ZnUGF0aDtcbiAgICAgICAgICB0aGlzLnJlZ2lzdGVySWNvbihpY29uT2JqKTtcbiAgICAgICAgICB0aGlzLmltYWdlRWRpdG9yLmFkZEljb24oc2VsZWN0ZWRGaWxlLm5hbWUsIHtcbiAgICAgICAgICAgIGZpbGw6IHRoaXMuaWNvbkNvbG9yLFxuICAgICAgICAgICAgbGVmdDogMTAwLFxuICAgICAgICAgICAgdG9wOiAxMDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIEltYWdlVHJhY2VyLnRyYWNlckRlZmF1bHRPcHRpb24oKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLW1lbnUtaWNvblwiPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnUtaXRlbSB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItanVzdGlmeS1jb250ZW50LWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtbm93cmFwXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1ub3dyYXAgdHVpLWltYWdlLWVkaXRvci1vdmVyZmxvd2FibGUteCB0dWktaW1hZ2UtZWRpdG9yLXB5LTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWUtaWNvbi1hZGQtYnV0dG9uIHR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3dcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIFtjbGFzc109XCJcbiAgICAgICAgICAgICd0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiAnICtcbiAgICAgICAgICAgIChpY29uVHlwZSA9PSAnaWNvbi1hcnJvdycgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgZGF0YS1pY29udHlwZT1cImljb24tYXJyb3dcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRBY3RpdmVJY29uVHlwZSgnaWNvbi1hcnJvdycpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwic3ZnX2ljLXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWljb24tYXJyb3dcIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtaWNvbi1hcnJvd1wiIGNsYXNzPVwiYWN0aXZlIHVzZS1kZWZhdWx0XCI+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICB7eyBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1pY29uLWFycm93MVwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAndHVpLWltYWdlLWVkaXRvci1idXR0b24gJyArXG4gICAgICAgICAgICAoaWNvblR5cGUgPT0gJ2ljb24tYXJyb3ctMicgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgZGF0YS1pY29udHlwZT1cImljb24tYXJyb3ctMlwiXG4gICAgICAgICAgKGNsaWNrKT1cInNldEFjdGl2ZUljb25UeXBlKCdpY29uLWFycm93LTInKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLWljb24tYXJyb3ctMlwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLWljb24tYXJyb3ctMlwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICB7eyBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1pY29uLWFycm93MlwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAndHVpLWltYWdlLWVkaXRvci1idXR0b24gJyArXG4gICAgICAgICAgICAoaWNvblR5cGUgPT0gJ2ljb24tYXJyb3ctMycgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgZGF0YS1pY29udHlwZT1cImljb24tYXJyb3ctM1wiXG4gICAgICAgICAgKGNsaWNrKT1cInNldEFjdGl2ZUljb25UeXBlKCdpY29uLWFycm93LTMnKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLWljb24tYXJyb3ctM1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLWljb24tYXJyb3ctM1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICB7eyBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1pY29uLWFycm93M1wiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAndHVpLWltYWdlLWVkaXRvci1idXR0b24gJyArXG4gICAgICAgICAgICAoaWNvblR5cGUgPT0gJ2ljb24tc3RhcicgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgZGF0YS1pY29udHlwZT1cImljb24tc3RhclwiXG4gICAgICAgICAgKGNsaWNrKT1cInNldEFjdGl2ZUljb25UeXBlKCdpY29uLXN0YXInKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1pY29uLXN0YXJcIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtaWNvbi1zdGFyXCIgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIHt7IFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWljb24tc3RhcjFcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgW2NsYXNzXT1cIlxuICAgICAgICAgICAgJ3R1aS1pbWFnZS1lZGl0b3ItYnV0dG9uICcgK1xuICAgICAgICAgICAgKGljb25UeXBlID09ICdpY29uLXN0YXItMicgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgZGF0YS1pY29udHlwZT1cImljb24tc3Rhci0yXCJcbiAgICAgICAgICAoY2xpY2spPVwic2V0QWN0aXZlSWNvblR5cGUoJ2ljb24tc3Rhci0yJylcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmdfaWMtc3VibWVudVwiPlxuICAgICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIiNpYy1pY29uLXN0YXItMlwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLWljb24tc3Rhci0yXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFjdGl2ZSB1c2UtZGVmYXVsdFwiXG4gICAgICAgICAgICAgID48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIHt7IFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWljb24tc3RhcjJcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAndHVpLWltYWdlLWVkaXRvci1idXR0b24gJyArXG4gICAgICAgICAgICAoaWNvblR5cGUgPT0gJ2ljb24tcG9seWdvbicgPyAnYWN0aXZlJyA6ICcnKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgZGF0YS1pY29udHlwZT1cImljb24tcG9seWdvblwiXG4gICAgICAgICAgKGNsaWNrKT1cInNldEFjdGl2ZUljb25UeXBlKCdpY29uLXBvbHlnb24nKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLWljb24tcG9seWdvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLWljb24tcG9seWdvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICB7eyBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1pY29uLXBvbHlnb25cIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAndHVpLWltYWdlLWVkaXRvci1idXR0b24gJyArXG4gICAgICAgICAgICAoaWNvblR5cGUgPT0gJ2ljb24tbG9jYXRpb24nID8gJ2FjdGl2ZScgOiAnJylcbiAgICAgICAgICBcIlxuICAgICAgICAgIGRhdGEtaWNvbnR5cGU9XCJpY29uLWxvY2F0aW9uXCJcbiAgICAgICAgICAoY2xpY2spPVwic2V0QWN0aXZlSWNvblR5cGUoJ2ljb24tbG9jYXRpb24nKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICB4bGluazpocmVmPVwiI2ljLWljb24tbG9jYXRpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgPjwvdXNlPlxuICAgICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIiNpYy1pY29uLWxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFjdGl2ZSB1c2UtZGVmYXVsdFwiXG4gICAgICAgICAgICAgID48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIHt7IFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWljb24tbG9jYXRpb25cIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbY2xhc3NdPVwiXG4gICAgICAgICAgICAndHVpLWltYWdlLWVkaXRvci1idXR0b24gJyArXG4gICAgICAgICAgICAoaWNvblR5cGUgPT0gJ2ljb24taGVhcnQnID8gJ2FjdGl2ZScgOiAnJylcbiAgICAgICAgICBcIlxuICAgICAgICAgIGRhdGEtaWNvbnR5cGU9XCJpY29uLWhlYXJ0XCJcbiAgICAgICAgICAoY2xpY2spPVwic2V0QWN0aXZlSWNvblR5cGUoJ2ljb24taGVhcnQnKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1pY29uLWhlYXJ0XCIgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljLWljb24taGVhcnRcIiBjbGFzcz1cImFjdGl2ZSB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAge3sgXCJ0dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXItc3VibWVudXMtaWNvbi1oZWFydFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIFtjbGFzc109XCJcbiAgICAgICAgICAgICd0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiAnICtcbiAgICAgICAgICAgIChpY29uVHlwZSA9PSAnaWNvbi1idWJibGUnID8gJ2FjdGl2ZScgOiAnJylcbiAgICAgICAgICBcIlxuICAgICAgICAgIGRhdGEtaWNvbnR5cGU9XCJpY29uLWJ1YmJsZVwiXG4gICAgICAgICAgKGNsaWNrKT1cInNldEFjdGl2ZUljb25UeXBlKCdpY29uLWJ1YmJsZScpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwic3ZnX2ljLXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgPHVzZVxuICAgICAgICAgICAgICAgIHhsaW5rOmhyZWY9XCIjaWMtaWNvbi1idWJibGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm9ybWFsIHVzZS1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgPjwvdXNlPlxuICAgICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgICAgeGxpbms6aHJlZj1cIiNpYy1pY29uLWJ1YmJsZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIlxuICAgICAgICAgICAgICA+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICB7eyBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1pY29uLWJ1YmJsZVwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLXBhcnRpdGlvblwiPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGllLWljb24tYWRkLWJ1dHRvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1idXR0b25cIiBzdHlsZT1cIm1hcmdpbjogMFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0aWUtaWNvbi1pbWFnZS1maWxlXCJcbiAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkljb25DaG9zZW4oJGV2ZW50KVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1pY29uLWxvYWRcIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtaWNvbi1sb2FkXCIgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgIFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWljb24tY3VzdG9tSWNvblwiIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1wYXJ0aXRpb25cIj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidGllLWljb24tY29sb3IgdHVpLWltYWdlLWVkaXRvci1idXR0b24gdHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LWNvbHVtblwiXG4gICAgICAgICAgdGl0bGU9XCJDb2xvclwiXG4gICAgICAgID5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0aWUtaWNvbi1jb2xvci1waWNrZXJcIlxuICAgICAgICAgICAgICBbKGNvbG9yUGlja2VyKV09XCJpY29uQ29sb3JcIlxuICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJpY29uQ29sb3JcIlxuICAgICAgICAgICAgICBbY3BPdXRwdXRGb3JtYXRdPVwiJ3JnYmEnXCJcbiAgICAgICAgICAgICAgW2NwUHJlc2V0Q29sb3JzXT1cImRlZmF1bHRJY29uQ29sb3JzXCJcbiAgICAgICAgICAgICAgKGNvbG9yUGlja2VyQ2hhbmdlKT1cImljb25Db2xvckNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIFtjcFVzZVJvb3RWaWV3Q29udGFpbmVyXT1cInRydWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHt7IFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWljb24tY29sb3JcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9kaXY+PC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==