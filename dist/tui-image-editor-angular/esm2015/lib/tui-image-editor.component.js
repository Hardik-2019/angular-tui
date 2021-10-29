import { Component, Input, ViewChild, } from '@angular/core';
import { defaultIconPath, eventNames, historyNames, objectTypes, } from './consts';
import { HistoryItemType } from './interfaces/history-item';
import { HistoryService } from './services/history.service';
import { clearSelection, isFileApiSupported, isSilentCommand, } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "./services/history.service";
import * as i2 from "./menus/buttons/load/load.component";
import * as i3 from "./menus/buttons/download/download.component";
import * as i4 from "./menus/buttons/zoom-in/zoom-in.component";
import * as i5 from "./menus/buttons/zoom-out/zoom-out.component";
import * as i6 from "./menus/buttons/drag/drag.component";
import * as i7 from "./menus/buttons/history/history.component";
import * as i8 from "./menus/buttons/undo/undo.component";
import * as i9 from "./menus/buttons/redo/redo.component";
import * as i10 from "./menus/buttons/reset/reset.component";
import * as i11 from "./menus/buttons/delete/delete.component";
import * as i12 from "./menus/buttons/delete-all/delete-all.component";
import * as i13 from "@angular/common";
import * as i14 from "./menus/buttons/crop/crop.component";
import * as i15 from "./menus/buttons/flip/flip.component";
import * as i16 from "./menus/buttons/rotate/rotate.component";
import * as i17 from "./menus/buttons/draw/draw.component";
import * as i18 from "./menus/buttons/shape/shape.component";
import * as i19 from "./menus/buttons/icon/icon.component";
import * as i20 from "./menus/buttons/text/text.component";
import * as i21 from "./menus/buttons/mask/mask.component";
import * as i22 from "./menus/buttons/filter/filter.component";
import * as i23 from "./submenus/crop/crop.component";
import * as i24 from "./submenus/flip/flip.component";
import * as i25 from "./submenus/rotate/rotate.component";
import * as i26 from "./submenus/draw/draw.component";
import * as i27 from "./submenus/shape/shape.component";
import * as i28 from "./submenus/icon/icon.component";
import * as i29 from "./submenus/text/text.component";
import * as i30 from "./submenus/mask/mask.component";
import * as i31 from "./submenus/filter/filter.component";
const _c0 = ["imageContainer"];
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_crop_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tui-image-editor-submenus-crop", 7);
    i0.ɵɵlistener("cancelCroppingRequested", function TuiImageEditorComponent_div_20_tui_image_editor_submenus_crop_1_Template_tui_image_editor_submenus_crop_cancelCroppingRequested_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.exitCropOnAction(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("imageEditor", ctx_r2.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_flip_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tui-image-editor-submenus-flip", 6);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("imageEditor", ctx_r3.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_rotate_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tui-image-editor-submenus-rotate", 20);
    i0.ɵɵlistener("rotationChange", function TuiImageEditorComponent_div_20_tui_image_editor_submenus_rotate_3_Template_tui_image_editor_submenus_rotate_rotationChange_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.rotation = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("imageEditor", ctx_r4.imageEditor)("rotation", ctx_r4.rotation);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_draw_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tui-image-editor-submenus-draw", 6);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("imageEditor", ctx_r5.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_shape_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tui-image-editor-submenus-shape", 6);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("imageEditor", ctx_r6.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_icon_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tui-image-editor-submenus-icon", 6);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("imageEditor", ctx_r7.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_text_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tui-image-editor-submenus-text", 6);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("imageEditor", ctx_r8.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_mask_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tui-image-editor-submenus-mask", 6);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("imageEditor", ctx_r9.imageEditor);
} }
function TuiImageEditorComponent_div_20_tui_image_editor_submenus_filter_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tui-image-editor-submenus-filter", 6);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("imageEditor", ctx_r10.imageEditor);
} }
function TuiImageEditorComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, TuiImageEditorComponent_div_20_tui_image_editor_submenus_crop_1_Template, 1, 1, "tui-image-editor-submenus-crop", 17);
    i0.ɵɵtemplate(2, TuiImageEditorComponent_div_20_tui_image_editor_submenus_flip_2_Template, 1, 1, "tui-image-editor-submenus-flip", 18);
    i0.ɵɵtemplate(3, TuiImageEditorComponent_div_20_tui_image_editor_submenus_rotate_3_Template, 1, 2, "tui-image-editor-submenus-rotate", 19);
    i0.ɵɵtemplate(4, TuiImageEditorComponent_div_20_tui_image_editor_submenus_draw_4_Template, 1, 1, "tui-image-editor-submenus-draw", 18);
    i0.ɵɵtemplate(5, TuiImageEditorComponent_div_20_tui_image_editor_submenus_shape_5_Template, 1, 1, "tui-image-editor-submenus-shape", 18);
    i0.ɵɵtemplate(6, TuiImageEditorComponent_div_20_tui_image_editor_submenus_icon_6_Template, 1, 1, "tui-image-editor-submenus-icon", 18);
    i0.ɵɵtemplate(7, TuiImageEditorComponent_div_20_tui_image_editor_submenus_text_7_Template, 1, 1, "tui-image-editor-submenus-text", 18);
    i0.ɵɵtemplate(8, TuiImageEditorComponent_div_20_tui_image_editor_submenus_mask_8_Template, 1, 1, "tui-image-editor-submenus-mask", 18);
    i0.ɵɵtemplate(9, TuiImageEditorComponent_div_20_tui_image_editor_submenus_filter_9_Template, 1, 1, "tui-image-editor-submenus-filter", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.submenu == "crop");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.submenu == "flip");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.submenu == "rotate");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.submenu == "draw");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.submenu == "shape");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.submenu == "icon");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.submenu == "text");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.submenu == "mask");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.submenu == "filter");
} }
const ImageEditor = require('tui-image-editor');
export class TuiImageEditorComponent {
    constructor(historyService) {
        this.historyService = historyService;
        this.options = {
            usageStatistics: false,
            selectionStyle: {
                cornerStyle: 'circle',
                cornerSize: 32,
                cornerColor: '#fff',
                cornerStrokeColor: '#fff',
                transparentCorners: false,
                lineWidth: 4,
                borderColor: '#fff',
                rotatingPointOffset: 500,
            },
            applyCropSelectionStyle: true,
            applyGroupSelectionStyle: true,
        };
        this.initializeImgUrl = null;
        this.imageChosen = false;
        this.rotation = 0;
        this.onObjectActivatedEventListener = this.onObjectActivated.bind(this);
        this.onExecuteCommandEventListener = this.onExecuteCommand.bind(this);
        this.onAfterUndoEventListener = this.onAfterUndo.bind(this);
        this.onAfterRedoEventListener = this.onAfterRedo.bind(this);
    }
    ngOnInit() {
        this.historyServiceSubscription = this.historyService.onChangeEmitter.subscribe((items) => this.onActiveHistoryElementChanged(items));
    }
    ngOnChanges(changes) {
        if ((changes['options'] && changes['options'].firstChange == false) ||
            (changes['initialImage'] && changes['initialImage'].firstChange == false)) {
            this.destroyImageEditor();
            this.initializeImageEditor();
        }
    }
    initializeImageEditor() {
        this.historyService.clear();
        this.imageEditor = new ImageEditor(this.imageContainer.nativeElement, this.options);
        console.debug(this.imageEditor);
        this.imageEditor.registerIcons(defaultIconPath);
        this.imageEditor.on(eventNames.OBJECT_ACTIVATED, this.onObjectActivatedEventListener);
        this.imageEditor._invoker.on(eventNames.EXECUTE_COMMAND, this.onExecuteCommandEventListener);
        this.imageEditor._invoker.on(eventNames.AFTER_UNDO, this.onAfterUndoEventListener);
        this.imageEditor._invoker.on(eventNames.AFTER_REDO, this.onAfterRedoEventListener);
        if (this.initialImage != null) {
            this.loadImage(this.initialImage);
        }
    }
    destroyImageEditor() {
        if (this.imageEditor != null) {
            this.imageEditor.off(eventNames.OBJECT_ACTIVATED, this.onObjectActivatedEventListener);
            this.imageEditor._invoker.off(eventNames.EXECUTE_COMMAND, this.onExecuteCommandEventListener);
            this.imageEditor._invoker.off(eventNames.AFTER_UNDO, this.onAfterUndoEventListener);
            this.imageEditor._invoker.off(eventNames.AFTER_REDO, this.onAfterRedoEventListener);
            this.imageEditor.destroy();
        }
    }
    ngAfterViewInit() {
        var that = this;
        setTimeout(() => {
            //   this.imageEditor.on(eventNames.SELECTION_CLEARED, function () {
            //     that.activeObjectId = null;
            //     if (that.submenu === 'text') {
            //       that.imageEditor.changeCursor('text');
            //     } else if (that.submenu !== 'draw' && that.submenu !== 'crop') {
            //       that.imageEditor.stopDrawingMode();
            //     }
            //   });
            that.initializeImageEditor();
        });
    }
    ngOnDestroy() {
        var _a;
        if (this.initializeImgUrl != null) {
            URL.revokeObjectURL(this.initializeImgUrl);
        }
        this.destroyImageEditor();
        (_a = this.historyServiceSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onObjectActivated(props) {
        console.debug(props);
        this.activeObjectId = props === null || props === void 0 ? void 0 : props.id;
        if ((props === null || props === void 0 ? void 0 : props.id) != null) {
            if ([
                objectTypes.shapeRect,
                objectTypes.shapeCircle,
                objectTypes.shapeTriangle,
            ].indexOf(props.type) > -1) {
                this.showMenu('shape', false);
            }
            else if (props.type === objectTypes.line ||
                props.type === objectTypes.straightLine) {
                this.showMenu('draw', false);
            }
            else if (props.type === objectTypes.itext ||
                props.type === objectTypes.text) {
                this.showMenu('text', false);
            }
            else if (props.type === objectTypes.icon) {
                this.showMenu('icon', false);
            }
            else if (props.type === objectTypes.image) {
                this.showMenu('mask', false);
            }
        }
    }
    onExecuteCommand(command) {
        if (!isSilentCommand(command)) {
            this.historyService.add(command, this.imageEditor);
        }
    }
    onAfterUndo() {
        this.historyService.prev();
    }
    onAfterRedo() {
        this.historyService.next();
    }
    loadImage(file) {
        if (file != null) {
            let imageUrl = null;
            if (typeof file === 'string') {
                imageUrl = file;
            }
            else {
                if (!isFileApiSupported()) {
                    alert('This browser does not support file-api');
                    return;
                }
                imageUrl = URL.createObjectURL(file);
            }
            if (this.initializeImgUrl != null && imageUrl != this.initializeImgUrl) {
                URL.revokeObjectURL(this.initializeImgUrl);
            }
            this.initializeImgUrl = imageUrl;
            this.imageEditor
                .loadImageFromURL(this.initializeImgUrl, 'RandomFileName')
                .then((sizeValue) => {
                this.imageChosen = true;
                this.exitCropOnAction();
                this.imageEditor.clearUndoStack();
                this.imageEditor.clearRedoStack();
                this.historyService.clear();
                this.imageEditor._invoker.fire(eventNames.EXECUTE_COMMAND, historyNames.LOAD_IMAGE);
            })['catch']((message) => Promise.reject(message));
        }
    }
    resetImage() {
        if (this.initializeImgUrl != null) {
            this.loadImage(this.initializeImgUrl);
        }
    }
    getImage(options = {
        format: 'png',
        quality: 1,
        multiplier: 1,
    }) {
        if (this.imageChosen) {
            return this.imageEditor.toDataURL(options);
        }
        return null;
    }
    exitCropOnAction() {
        this.hideMenu('crop');
    }
    hideMenu(menuName) {
        if (this.submenu == menuName) {
            this.submenu = null;
            clearSelection(this.imageEditor);
            this.imageEditor.stopDrawingMode();
        }
    }
    onActiveHistoryElementChanged(items) {
        let rotationEvents = items.filter((i) => i.type === HistoryItemType.Rotate);
        if (rotationEvents.length > 0) {
            let lastRotationEvent = rotationEvents[rotationEvents.length - 1];
            this.rotation = lastRotationEvent.args[0];
        }
        else {
            this.rotation = 0;
        }
    }
    showMenu(menuName, discardSelection = true) {
        this.submenu = menuName;
        if (discardSelection) {
            clearSelection(this.imageEditor);
        }
        this.imageEditor.stopDrawingMode();
        //this.stopShape();
        // this._changeMenu(menuName, toggle, discardSelection);
        // if (this.submenu == 'draw') {
        //   this.setDrawMode('free', {
        //     width: this.drawStrokeWidthValue,
        //     color: this.drawStrokeColor,
        //   });
        // }
    }
}
TuiImageEditorComponent.ɵfac = function TuiImageEditorComponent_Factory(t) { return new (t || TuiImageEditorComponent)(i0.ɵɵdirectiveInject(i1.HistoryService)); };
TuiImageEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TuiImageEditorComponent, selectors: [["tui-image-editor"]], viewQuery: function TuiImageEditorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.imageContainer = _t.first);
    } }, inputs: { options: "options", initialImage: "initialImage" }, features: [i0.ɵɵProvidersFeature([HistoryService]), i0.ɵɵNgOnChangesFeature], decls: 32, vars: 38, consts: [[1, "tui-image-editor-d-flex", "tui-image-editor-flex-column", "tui-image-editor-justify-content-center", "tui-image-editor-h-100", "tui-image-editor-w-100", "tui-image-editor-container"], [1, "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-wrap", "tui-image-editor-justify-content-center", "tui-image-editor-align-items-center"], [1, "tui-image-editor-help-menu", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-wrap", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-p-1"], [1, "tui-image-editor-help-menu-item", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap"], [3, "loadImage"], [3, "imageChosen", "imageEditor"], [3, "imageEditor"], [3, "imageEditor", "cancelCroppingRequested"], [3, "imageChosen", "imageEditor", "cancelCroppingRequested", "resetImage"], [3, "imageChosen", "imageEditor", "cancelCroppingRequested"], [1, "tui-image-editor-flex-grow-1", "tui-image-editor-d-flex", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center"], ["imageContainer", ""], ["class", "tui-image-editor-submenu", 4, "ngIf"], [1, "tui-image-editor-controls", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-justify-content-center"], [1, "tui-image-editor-menu", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-flex-nowrap", "tui-image-editor-align-items-center"], [3, "imageChosen", "selected", "clicked"], [1, "tui-image-editor-submenu"], [3, "imageEditor", "cancelCroppingRequested", 4, "ngIf"], [3, "imageEditor", 4, "ngIf"], [3, "imageEditor", "rotation", "rotationChange", 4, "ngIf"], [3, "imageEditor", "rotation", "rotationChange"]], template: function TuiImageEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "tui-image-editor-menus-buttons-load", 4);
        i0.ɵɵlistener("loadImage", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_load_loadImage_4_listener($event) { return ctx.loadImage($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "tui-image-editor-menus-buttons-download", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵelement(7, "tui-image-editor-menus-buttons-zoom-in", 5);
        i0.ɵɵelement(8, "tui-image-editor-menus-buttons-zoom-out", 5);
        i0.ɵɵelement(9, "tui-image-editor-menus-buttons-drag", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 3);
        i0.ɵɵelement(11, "tui-image-editor-menus-buttons-history", 6);
        i0.ɵɵelementStart(12, "tui-image-editor-menus-buttons-undo", 7);
        i0.ɵɵlistener("cancelCroppingRequested", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_undo_cancelCroppingRequested_12_listener() { return ctx.exitCropOnAction(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "tui-image-editor-menus-buttons-redo", 7);
        i0.ɵɵlistener("cancelCroppingRequested", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_redo_cancelCroppingRequested_13_listener() { return ctx.exitCropOnAction(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "tui-image-editor-menus-buttons-reset", 8);
        i0.ɵɵlistener("cancelCroppingRequested", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_reset_cancelCroppingRequested_14_listener() { return ctx.exitCropOnAction(); })("resetImage", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_reset_resetImage_14_listener() { return ctx.resetImage(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 3);
        i0.ɵɵelementStart(16, "tui-image-editor-menus-buttons-delete", 9);
        i0.ɵɵlistener("cancelCroppingRequested", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_delete_cancelCroppingRequested_16_listener() { return ctx.exitCropOnAction(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "tui-image-editor-menus-buttons-delete-all", 9);
        i0.ɵɵlistener("cancelCroppingRequested", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_delete_all_cancelCroppingRequested_17_listener() { return ctx.exitCropOnAction(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "div", 10, 11);
        i0.ɵɵtemplate(20, TuiImageEditorComponent_div_20_Template, 10, 9, "div", 12);
        i0.ɵɵelementStart(21, "div", 13);
        i0.ɵɵelementStart(22, "div", 14);
        i0.ɵɵelementStart(23, "tui-image-editor-menus-buttons-crop", 15);
        i0.ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_crop_clicked_23_listener($event) { return ctx.submenu == "crop" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "tui-image-editor-menus-buttons-flip", 15);
        i0.ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_flip_clicked_24_listener($event) { return ctx.submenu == "flip" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "tui-image-editor-menus-buttons-rotate", 15);
        i0.ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_rotate_clicked_25_listener($event) { return ctx.submenu == "rotate" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "tui-image-editor-menus-buttons-draw", 15);
        i0.ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_draw_clicked_26_listener($event) { return ctx.submenu == "draw" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "tui-image-editor-menus-buttons-shape", 15);
        i0.ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_shape_clicked_27_listener($event) { return ctx.submenu == "shape" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "tui-image-editor-menus-buttons-icon", 15);
        i0.ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_icon_clicked_28_listener($event) { return ctx.submenu == "icon" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "tui-image-editor-menus-buttons-text", 15);
        i0.ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_text_clicked_29_listener($event) { return ctx.submenu == "text" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "tui-image-editor-menus-buttons-mask", 15);
        i0.ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_mask_clicked_30_listener($event) { return ctx.submenu == "mask" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "tui-image-editor-menus-buttons-filter", 15);
        i0.ɵɵlistener("clicked", function TuiImageEditorComponent_Template_tui_image_editor_menus_buttons_filter_clicked_31_listener($event) { return ctx.submenu == "filter" ? ctx.hideMenu($event) : ctx.showMenu($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("imageEditor", ctx.imageEditor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageEditor", ctx.imageEditor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageEditor", ctx.imageEditor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("imageEditor", ctx.imageEditor);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", "0");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.submenu != null);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "crop");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "flip");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "rotate");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "draw");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "shape");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "icon");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "text");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "mask");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("imageChosen", ctx.imageChosen)("selected", ctx.submenu == "filter");
    } }, directives: [i2.LoadComponent, i3.DownloadComponent, i4.ZoomInComponent, i5.ZoomOutComponent, i6.DragComponent, i7.HistoryComponent, i8.UndoComponent, i9.RedoComponent, i10.ResetComponent, i11.DeleteComponent, i12.DeleteAllComponent, i13.NgIf, i14.CropComponent, i15.FlipComponent, i16.RotateComponent, i17.DrawComponent, i18.ShapeComponent, i19.IconComponent, i20.TextComponent, i21.MaskComponent, i22.FilterComponent, i23.CropComponent, i24.FlipComponent, i25.RotateComponent, i26.DrawComponent, i27.ShapeComponent, i28.IconComponent, i29.TextComponent, i30.MaskComponent, i31.FilterComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TuiImageEditorComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor',
                templateUrl: 'tui-image-editor.component.html',
                providers: [HistoryService],
            }]
    }], function () { return [{ type: i1.HistoryService }]; }, { imageContainer: [{
            type: ViewChild,
            args: ['imageContainer']
        }], options: [{
            type: Input
        }], initialImage: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVpLWltYWdlLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi90dWktaW1hZ2UtZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL3R1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci9zcmMvbGliL3R1aS1pbWFnZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxLQUFLLEVBS0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFFTCxlQUFlLEVBRWYsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEdBRVosTUFBTSxVQUFVLENBQUM7QUFFbEIsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxPQUFPLEVBQ0wsY0FBYyxFQUVkLGtCQUFrQixFQUNsQixlQUFlLEdBQ2hCLE1BQU0sU0FBUyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNnRGIseURBSUM7SUFEQyxtU0FBOEM7SUFDL0MsaUJBQWlDOzs7SUFGaEMsZ0RBQTJCOzs7SUFHN0Isb0RBR2tDOzs7SUFEaEMsZ0RBQTJCOzs7O0lBRTdCLDREQUlDO0lBREMsMFJBQXVCO0lBQ3hCLGlCQUFtQzs7O0lBRmxDLGdEQUEyQiw2QkFBQTs7O0lBRzdCLG9EQUdrQzs7O0lBRGhDLGdEQUEyQjs7O0lBRTdCLHFEQUdtQzs7O0lBRGpDLGdEQUEyQjs7O0lBRTdCLG9EQUdrQzs7O0lBRGhDLGdEQUEyQjs7O0lBRTdCLG9EQUdrQzs7O0lBRGhDLGdEQUEyQjs7O0lBRTdCLG9EQUdrQzs7O0lBRGhDLGdEQUEyQjs7O0lBRTdCLHNEQUdv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UUFBM0IsNkNBQTJCLGdDQUFBO1FBUTNCLGVBQTJCO1FBQTNCLDZDQUEyQjtRQUczQixlQUEyQjtRQUEzQiw2Q0FBMkI7UUFJM0IsZUFBMkI7UUFBM0IsNkNBQTJCO1FBSTNCLGVBQTJCO1FBQTNCLDZDQUEyQixnQ0FBQTtRQVUzQixlQUEyQjtRQUEzQiw2Q0FBMkIsZ0NBQUE7UUFLM0IsZUFBMkI7UUFBM0IsNkNBQTJCLGdDQUFBO1FBVWpDLGVBQW9CO1FBQXBCLDZCQUFvQjtRQUVpQixlQUFxQjtRQUFyQiwwQ0FBcUI7UUE2Q3RELGVBQTJCO1FBQTNCLDZDQUEyQixtQ0FBQTtRQUszQixlQUEyQjtRQUEzQiw2Q0FBMkIsbUNBQUE7UUFNM0IsZUFBMkI7UUFBM0IsNkNBQTJCLHFDQUFBO1FBSzNCLGVBQTJCO1FBQTNCLDZDQUEyQixtQ0FBQTtRQUszQixlQUEyQjtRQUEzQiw2Q0FBMkIsb0NBQUE7UUFLM0IsZUFBMkI7UUFBM0IsNkNBQTJCLG1DQUFBO1FBSzNCLGVBQTJCO1FBQTNCLDZDQUEyQixtQ0FBQTtRQUszQixlQUEyQjtRQUEzQiw2Q0FBMkIsbUNBQUE7UUFLM0IsZUFBMkI7UUFBM0IsNkNBQTJCLHFDQUFBOzt1RkQ3SHRCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQzVCO2lFQUc4QixjQUFjO2tCQUExQyxTQUFTO21CQUFDLGdCQUFnQjtZQUNsQixPQUFPO2tCQUFmLEtBQUs7WUE2QkcsWUFBWTtrQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNyb3BNb2RlcyxcbiAgZGVmYXVsdEljb25QYXRoLFxuICBkcmF3aW5nTW9kZXMsXG4gIGV2ZW50TmFtZXMsXG4gIGhpc3RvcnlOYW1lcyxcbiAgb2JqZWN0VHlwZXMsXG4gIHpvb21Nb2Rlcyxcbn0gZnJvbSAnLi9jb25zdHMnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vaW50ZXJmYWNlcy9jb21tYW5kJztcbmltcG9ydCB7IEhpc3RvcnlJdGVtLCBIaXN0b3J5SXRlbVR5cGUgfSBmcm9tICcuL2ludGVyZmFjZXMvaGlzdG9yeS1pdGVtJztcbmltcG9ydCB7IEltYWdlU2l6ZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9pbWFnZS1zaXplJztcbmltcG9ydCB7IEhpc3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9oaXN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJtZW51cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBjbGVhclNlbGVjdGlvbixcbiAgZGF0YVVybFRvQmxvYixcbiAgaXNGaWxlQXBpU3VwcG9ydGVkLFxuICBpc1NpbGVudENvbW1hbmQsXG59IGZyb20gJy4vdXRpbHMnO1xuY29uc3QgSW1hZ2VFZGl0b3IgPSByZXF1aXJlKCd0dWktaW1hZ2UtZWRpdG9yJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R1aS1pbWFnZS1lZGl0b3InLFxuICB0ZW1wbGF0ZVVybDogJ3R1aS1pbWFnZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtIaXN0b3J5U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aUltYWdlRWRpdG9yQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2ltYWdlQ29udGFpbmVyJykgaW1hZ2VDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IHtcbiAgICB1c2FnZVN0YXRpc3RpY3M6IGJvb2xlYW47XG4gICAgc2VsZWN0aW9uU3R5bGU/OiB7XG4gICAgICBjb3JuZXJTdHlsZTogc3RyaW5nO1xuICAgICAgY29ybmVyU2l6ZTogbnVtYmVyO1xuICAgICAgY29ybmVyQ29sb3I6IHN0cmluZztcbiAgICAgIGNvcm5lclN0cm9rZUNvbG9yOiBzdHJpbmc7XG4gICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGJvb2xlYW47XG4gICAgICBsaW5lV2lkdGg6IG51bWJlcjtcbiAgICAgIGJvcmRlckNvbG9yOiBzdHJpbmc7XG4gICAgICByb3RhdGluZ1BvaW50T2Zmc2V0OiBudW1iZXI7XG4gICAgfTtcbiAgICBhcHBseUNyb3BTZWxlY3Rpb25TdHlsZTogYm9vbGVhbjtcbiAgICBhcHBseUdyb3VwU2VsZWN0aW9uU3R5bGU6IGJvb2xlYW47XG4gIH0gPSB7XG4gICAgdXNhZ2VTdGF0aXN0aWNzOiBmYWxzZSxcbiAgICBzZWxlY3Rpb25TdHlsZToge1xuICAgICAgY29ybmVyU3R5bGU6ICdjaXJjbGUnLFxuICAgICAgY29ybmVyU2l6ZTogMzIsXG4gICAgICBjb3JuZXJDb2xvcjogJyNmZmYnLFxuICAgICAgY29ybmVyU3Ryb2tlQ29sb3I6ICcjZmZmJyxcbiAgICAgIHRyYW5zcGFyZW50Q29ybmVyczogZmFsc2UsXG4gICAgICBsaW5lV2lkdGg6IDQsXG4gICAgICBib3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgcm90YXRpbmdQb2ludE9mZnNldDogNTAwLFxuICAgIH0sXG4gICAgYXBwbHlDcm9wU2VsZWN0aW9uU3R5bGU6IHRydWUsXG4gICAgYXBwbHlHcm91cFNlbGVjdGlvblN0eWxlOiB0cnVlLFxuICB9O1xuICBASW5wdXQoKSBpbml0aWFsSW1hZ2U6IHN0cmluZyB8IEZpbGU7XG4gIHB1YmxpYyBpbWFnZUVkaXRvcjogYW55O1xuICBwdWJsaWMgaW5pdGlhbGl6ZUltZ1VybDogc3RyaW5nID0gbnVsbDtcbiAgcHVibGljIGltYWdlQ2hvc2VuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBhY3RpdmVPYmplY3RJZDogbnVtYmVyO1xuICBwdWJsaWMgc3VibWVudTpcbiAgICB8ICdjcm9wJ1xuICAgIHwgJ2ZsaXAnXG4gICAgfCAncm90YXRlJ1xuICAgIHwgJ2ZpbHRlcidcbiAgICB8ICd0ZXh0J1xuICAgIHwgJ2ljb24nXG4gICAgfCAnc2hhcGUnXG4gICAgfCAnZHJhdydcbiAgICB8ICdtYXNrJ1xuICAgIHwgbnVsbDtcbiAgcHVibGljIHJvdGF0aW9uOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgb25PYmplY3RBY3RpdmF0ZWRFdmVudExpc3RlbmVyOiBhbnk7XG4gIHB1YmxpYyBvbkV4ZWN1dGVDb21tYW5kRXZlbnRMaXN0ZW5lcjogYW55O1xuICBwdWJsaWMgb25BZnRlclVuZG9FdmVudExpc3RlbmVyOiBhbnk7XG4gIHB1YmxpYyBvbkFmdGVyUmVkb0V2ZW50TGlzdGVuZXI6IGFueTtcbiAgcHJpdmF0ZSBoaXN0b3J5U2VydmljZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaGlzdG9yeVNlcnZpY2U6IEhpc3RvcnlTZXJ2aWNlKSB7XG4gICAgdGhpcy5vbk9iamVjdEFjdGl2YXRlZEV2ZW50TGlzdGVuZXIgPSB0aGlzLm9uT2JqZWN0QWN0aXZhdGVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkV4ZWN1dGVDb21tYW5kRXZlbnRMaXN0ZW5lciA9IHRoaXMub25FeGVjdXRlQ29tbWFuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25BZnRlclVuZG9FdmVudExpc3RlbmVyID0gdGhpcy5vbkFmdGVyVW5kby5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25BZnRlclJlZG9FdmVudExpc3RlbmVyID0gdGhpcy5vbkFmdGVyUmVkby5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5oaXN0b3J5U2VydmljZVN1YnNjcmlwdGlvbiA9IHRoaXMuaGlzdG9yeVNlcnZpY2Uub25DaGFuZ2VFbWl0dGVyLnN1YnNjcmliZShcbiAgICAgIChpdGVtcykgPT4gdGhpcy5vbkFjdGl2ZUhpc3RvcnlFbGVtZW50Q2hhbmdlZChpdGVtcylcbiAgICApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIChjaGFuZ2VzWydvcHRpb25zJ10gJiYgY2hhbmdlc1snb3B0aW9ucyddLmZpcnN0Q2hhbmdlID09IGZhbHNlKSB8fFxuICAgICAgKGNoYW5nZXNbJ2luaXRpYWxJbWFnZSddICYmIGNoYW5nZXNbJ2luaXRpYWxJbWFnZSddLmZpcnN0Q2hhbmdlID09IGZhbHNlKVxuICAgICkge1xuICAgICAgdGhpcy5kZXN0cm95SW1hZ2VFZGl0b3IoKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUltYWdlRWRpdG9yKCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGl6ZUltYWdlRWRpdG9yKCkge1xuICAgIHRoaXMuaGlzdG9yeVNlcnZpY2UuY2xlYXIoKTtcblxuICAgIHRoaXMuaW1hZ2VFZGl0b3IgPSBuZXcgSW1hZ2VFZGl0b3IoXG4gICAgICB0aGlzLmltYWdlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnNcbiAgICApO1xuICAgIGNvbnNvbGUuZGVidWcodGhpcy5pbWFnZUVkaXRvcik7XG5cbiAgICB0aGlzLmltYWdlRWRpdG9yLnJlZ2lzdGVySWNvbnMoZGVmYXVsdEljb25QYXRoKTtcblxuICAgIHRoaXMuaW1hZ2VFZGl0b3Iub24oXG4gICAgICBldmVudE5hbWVzLk9CSkVDVF9BQ1RJVkFURUQsXG4gICAgICB0aGlzLm9uT2JqZWN0QWN0aXZhdGVkRXZlbnRMaXN0ZW5lclxuICAgICk7XG4gICAgdGhpcy5pbWFnZUVkaXRvci5faW52b2tlci5vbihcbiAgICAgIGV2ZW50TmFtZXMuRVhFQ1VURV9DT01NQU5ELFxuICAgICAgdGhpcy5vbkV4ZWN1dGVDb21tYW5kRXZlbnRMaXN0ZW5lclxuICAgICk7XG4gICAgdGhpcy5pbWFnZUVkaXRvci5faW52b2tlci5vbihcbiAgICAgIGV2ZW50TmFtZXMuQUZURVJfVU5ETyxcbiAgICAgIHRoaXMub25BZnRlclVuZG9FdmVudExpc3RlbmVyXG4gICAgKTtcbiAgICB0aGlzLmltYWdlRWRpdG9yLl9pbnZva2VyLm9uKFxuICAgICAgZXZlbnROYW1lcy5BRlRFUl9SRURPLFxuICAgICAgdGhpcy5vbkFmdGVyUmVkb0V2ZW50TGlzdGVuZXJcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuaW5pdGlhbEltYWdlICE9IG51bGwpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKHRoaXMuaW5pdGlhbEltYWdlKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95SW1hZ2VFZGl0b3IoKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2VFZGl0b3IgIT0gbnVsbCkge1xuICAgICAgdGhpcy5pbWFnZUVkaXRvci5vZmYoXG4gICAgICAgIGV2ZW50TmFtZXMuT0JKRUNUX0FDVElWQVRFRCxcbiAgICAgICAgdGhpcy5vbk9iamVjdEFjdGl2YXRlZEV2ZW50TGlzdGVuZXJcbiAgICAgICk7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yLl9pbnZva2VyLm9mZihcbiAgICAgICAgZXZlbnROYW1lcy5FWEVDVVRFX0NPTU1BTkQsXG4gICAgICAgIHRoaXMub25FeGVjdXRlQ29tbWFuZEV2ZW50TGlzdGVuZXJcbiAgICAgICk7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yLl9pbnZva2VyLm9mZihcbiAgICAgICAgZXZlbnROYW1lcy5BRlRFUl9VTkRPLFxuICAgICAgICB0aGlzLm9uQWZ0ZXJVbmRvRXZlbnRMaXN0ZW5lclxuICAgICAgKTtcbiAgICAgIHRoaXMuaW1hZ2VFZGl0b3IuX2ludm9rZXIub2ZmKFxuICAgICAgICBldmVudE5hbWVzLkFGVEVSX1JFRE8sXG4gICAgICAgIHRoaXMub25BZnRlclJlZG9FdmVudExpc3RlbmVyXG4gICAgICApO1xuICAgICAgdGhpcy5pbWFnZUVkaXRvci5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gICB0aGlzLmltYWdlRWRpdG9yLm9uKGV2ZW50TmFtZXMuU0VMRUNUSU9OX0NMRUFSRUQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vICAgICB0aGF0LmFjdGl2ZU9iamVjdElkID0gbnVsbDtcbiAgICAgIC8vICAgICBpZiAodGhhdC5zdWJtZW51ID09PSAndGV4dCcpIHtcbiAgICAgIC8vICAgICAgIHRoYXQuaW1hZ2VFZGl0b3IuY2hhbmdlQ3Vyc29yKCd0ZXh0Jyk7XG4gICAgICAvLyAgICAgfSBlbHNlIGlmICh0aGF0LnN1Ym1lbnUgIT09ICdkcmF3JyAmJiB0aGF0LnN1Ym1lbnUgIT09ICdjcm9wJykge1xuICAgICAgLy8gICAgICAgdGhhdC5pbWFnZUVkaXRvci5zdG9wRHJhd2luZ01vZGUoKTtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0pO1xuICAgICAgdGhhdC5pbml0aWFsaXplSW1hZ2VFZGl0b3IoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVJbWdVcmwgIT0gbnVsbCkge1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmluaXRpYWxpemVJbWdVcmwpO1xuICAgIH1cbiAgICB0aGlzLmRlc3Ryb3lJbWFnZUVkaXRvcigpO1xuICAgIHRoaXMuaGlzdG9yeVNlcnZpY2VTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIG9uT2JqZWN0QWN0aXZhdGVkKHByb3BzKSB7XG4gICAgY29uc29sZS5kZWJ1Zyhwcm9wcyk7XG4gICAgdGhpcy5hY3RpdmVPYmplY3RJZCA9IHByb3BzPy5pZDtcbiAgICBpZiAocHJvcHM/LmlkICE9IG51bGwpIHtcbiAgICAgIGlmIChcbiAgICAgICAgW1xuICAgICAgICAgIG9iamVjdFR5cGVzLnNoYXBlUmVjdCxcbiAgICAgICAgICBvYmplY3RUeXBlcy5zaGFwZUNpcmNsZSxcbiAgICAgICAgICBvYmplY3RUeXBlcy5zaGFwZVRyaWFuZ2xlLFxuICAgICAgICBdLmluZGV4T2YocHJvcHMudHlwZSkgPiAtMVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2hvd01lbnUoJ3NoYXBlJywgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgcHJvcHMudHlwZSA9PT0gb2JqZWN0VHlwZXMubGluZSB8fFxuICAgICAgICBwcm9wcy50eXBlID09PSBvYmplY3RUeXBlcy5zdHJhaWdodExpbmVcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNob3dNZW51KCdkcmF3JywgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgcHJvcHMudHlwZSA9PT0gb2JqZWN0VHlwZXMuaXRleHQgfHxcbiAgICAgICAgcHJvcHMudHlwZSA9PT0gb2JqZWN0VHlwZXMudGV4dFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2hvd01lbnUoJ3RleHQnLCBmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09IG9iamVjdFR5cGVzLmljb24pIHtcbiAgICAgICAgdGhpcy5zaG93TWVudSgnaWNvbicsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMudHlwZSA9PT0gb2JqZWN0VHlwZXMuaW1hZ2UpIHtcbiAgICAgICAgdGhpcy5zaG93TWVudSgnbWFzaycsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uRXhlY3V0ZUNvbW1hbmQoY29tbWFuZDogc3RyaW5nIHwgQ29tbWFuZCkge1xuICAgIGlmICghaXNTaWxlbnRDb21tYW5kKGNvbW1hbmQpKSB7XG4gICAgICB0aGlzLmhpc3RvcnlTZXJ2aWNlLmFkZChjb21tYW5kLCB0aGlzLmltYWdlRWRpdG9yKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQWZ0ZXJVbmRvKCkge1xuICAgIHRoaXMuaGlzdG9yeVNlcnZpY2UucHJldigpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkFmdGVyUmVkbygpIHtcbiAgICB0aGlzLmhpc3RvcnlTZXJ2aWNlLm5leHQoKTtcbiAgfVxuXG4gIGxvYWRJbWFnZShmaWxlOiBzdHJpbmcgfCBGaWxlKSB7XG4gICAgaWYgKGZpbGUgIT0gbnVsbCkge1xuICAgICAgbGV0IGltYWdlVXJsOiBzdHJpbmcgPSBudWxsO1xuICAgICAgaWYgKHR5cGVvZiBmaWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpbWFnZVVybCA9IGZpbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWlzRmlsZUFwaVN1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgYWxlcnQoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGZpbGUtYXBpJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbml0aWFsaXplSW1nVXJsICE9IG51bGwgJiYgaW1hZ2VVcmwgIT0gdGhpcy5pbml0aWFsaXplSW1nVXJsKSB7XG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5pbml0aWFsaXplSW1nVXJsKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbml0aWFsaXplSW1nVXJsID0gaW1hZ2VVcmw7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yXG4gICAgICAgIC5sb2FkSW1hZ2VGcm9tVVJMKHRoaXMuaW5pdGlhbGl6ZUltZ1VybCwgJ1JhbmRvbUZpbGVOYW1lJylcbiAgICAgICAgLnRoZW4oKHNpemVWYWx1ZTogSW1hZ2VTaXplKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbWFnZUNob3NlbiA9IHRydWU7XG5cbiAgICAgICAgICB0aGlzLmV4aXRDcm9wT25BY3Rpb24oKTtcbiAgICAgICAgICB0aGlzLmltYWdlRWRpdG9yLmNsZWFyVW5kb1N0YWNrKCk7XG4gICAgICAgICAgdGhpcy5pbWFnZUVkaXRvci5jbGVhclJlZG9TdGFjaygpO1xuICAgICAgICAgIHRoaXMuaGlzdG9yeVNlcnZpY2UuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLmltYWdlRWRpdG9yLl9pbnZva2VyLmZpcmUoXG4gICAgICAgICAgICBldmVudE5hbWVzLkVYRUNVVEVfQ09NTUFORCxcbiAgICAgICAgICAgIGhpc3RvcnlOYW1lcy5MT0FEX0lNQUdFXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgWydjYXRjaCddKChtZXNzYWdlKSA9PiBQcm9taXNlLnJlamVjdChtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplSW1nVXJsICE9IG51bGwpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKHRoaXMuaW5pdGlhbGl6ZUltZ1VybCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SW1hZ2UoXG4gICAgb3B0aW9uczoge1xuICAgICAgZm9ybWF0OiAnanBlZycgfCAncG5nJztcbiAgICAgIHF1YWxpdHk6IG51bWJlcjtcbiAgICAgIG11bHRpcGxpZXI6IG51bWJlcjtcbiAgICAgIGxlZnQ/OiBudW1iZXI7XG4gICAgICB0b3A/OiBudW1iZXI7XG4gICAgICB3aWR0aD86IG51bWJlcjtcbiAgICAgIGhlaWdodD86IG51bWJlcjtcbiAgICB9ID0ge1xuICAgICAgZm9ybWF0OiAncG5nJyxcbiAgICAgIHF1YWxpdHk6IDEsXG4gICAgICBtdWx0aXBsaWVyOiAxLFxuICAgIH1cbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5pbWFnZUNob3Nlbikge1xuICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VFZGl0b3IudG9EYXRhVVJMKG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4aXRDcm9wT25BY3Rpb24oKSB7XG4gICAgdGhpcy5oaWRlTWVudSgnY3JvcCcpO1xuICB9XG5cbiAgaGlkZU1lbnUoXG4gICAgbWVudU5hbWU6XG4gICAgICB8ICdjcm9wJ1xuICAgICAgfCAnZmxpcCdcbiAgICAgIHwgJ3JvdGF0ZSdcbiAgICAgIHwgJ2ZpbHRlcidcbiAgICAgIHwgJ3RleHQnXG4gICAgICB8ICdpY29uJ1xuICAgICAgfCAnc2hhcGUnXG4gICAgICB8ICdkcmF3J1xuICAgICAgfCAnbWFzaydcbiAgICAgIHwgbnVsbFxuICApIHtcbiAgICBpZiAodGhpcy5zdWJtZW51ID09IG1lbnVOYW1lKSB7XG4gICAgICB0aGlzLnN1Ym1lbnUgPSBudWxsO1xuICAgICAgY2xlYXJTZWxlY3Rpb24odGhpcy5pbWFnZUVkaXRvcik7XG4gICAgICB0aGlzLmltYWdlRWRpdG9yLnN0b3BEcmF3aW5nTW9kZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQWN0aXZlSGlzdG9yeUVsZW1lbnRDaGFuZ2VkKGl0ZW1zOiBIaXN0b3J5SXRlbVtdKSB7XG4gICAgbGV0IHJvdGF0aW9uRXZlbnRzID0gaXRlbXMuZmlsdGVyKChpKSA9PiBpLnR5cGUgPT09IEhpc3RvcnlJdGVtVHlwZS5Sb3RhdGUpO1xuICAgIGlmIChyb3RhdGlvbkV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbGFzdFJvdGF0aW9uRXZlbnQgPSByb3RhdGlvbkV2ZW50c1tyb3RhdGlvbkV2ZW50cy5sZW5ndGggLSAxXTtcbiAgICAgIHRoaXMucm90YXRpb24gPSBsYXN0Um90YXRpb25FdmVudC5hcmdzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdGF0aW9uID0gMDtcbiAgICB9XG4gIH1cblxuICBzaG93TWVudShcbiAgICBtZW51TmFtZTpcbiAgICAgIHwgJ2Nyb3AnXG4gICAgICB8ICdmbGlwJ1xuICAgICAgfCAncm90YXRlJ1xuICAgICAgfCAnZmlsdGVyJ1xuICAgICAgfCAndGV4dCdcbiAgICAgIHwgJ2ljb24nXG4gICAgICB8ICdzaGFwZSdcbiAgICAgIHwgJ2RyYXcnXG4gICAgICB8ICdtYXNrJ1xuICAgICAgfCBudWxsLFxuICAgIGRpc2NhcmRTZWxlY3Rpb246IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIHRoaXMuc3VibWVudSA9IG1lbnVOYW1lO1xuICAgIGlmIChkaXNjYXJkU2VsZWN0aW9uKSB7XG4gICAgICBjbGVhclNlbGVjdGlvbih0aGlzLmltYWdlRWRpdG9yKTtcbiAgICB9XG4gICAgdGhpcy5pbWFnZUVkaXRvci5zdG9wRHJhd2luZ01vZGUoKTtcbiAgICAvL3RoaXMuc3RvcFNoYXBlKCk7XG4gICAgLy8gdGhpcy5fY2hhbmdlTWVudShtZW51TmFtZSwgdG9nZ2xlLCBkaXNjYXJkU2VsZWN0aW9uKTtcblxuICAgIC8vIGlmICh0aGlzLnN1Ym1lbnUgPT0gJ2RyYXcnKSB7XG4gICAgLy8gICB0aGlzLnNldERyYXdNb2RlKCdmcmVlJywge1xuICAgIC8vICAgICB3aWR0aDogdGhpcy5kcmF3U3Ryb2tlV2lkdGhWYWx1ZSxcbiAgICAvLyAgICAgY29sb3I6IHRoaXMuZHJhd1N0cm9rZUNvbG9yLFxuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LWNvbHVtbiB0dWktaW1hZ2UtZWRpdG9yLWp1c3RpZnktY29udGVudC1jZW50ZXIgdHVpLWltYWdlLWVkaXRvci1oLTEwMCB0dWktaW1hZ2UtZWRpdG9yLXctMTAwIHR1aS1pbWFnZS1lZGl0b3ItY29udGFpbmVyXCJcbj5cbiAgPGRpdlxuICAgIGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtd3JhcCB0dWktaW1hZ2UtZWRpdG9yLWp1c3RpZnktY29udGVudC1jZW50ZXIgdHVpLWltYWdlLWVkaXRvci1hbGlnbi1pdGVtcy1jZW50ZXJcIlxuICA+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWhlbHAtbWVudSB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItZmxleC13cmFwIHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItanVzdGlmeS1jb250ZW50LWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLXAtMVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItaGVscC1tZW51LWl0ZW0gdHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtbm93cmFwXCJcbiAgICAgID5cbiAgICAgICAgPHR1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1sb2FkXG4gICAgICAgICAgKGxvYWRJbWFnZSk9XCJsb2FkSW1hZ2UoJGV2ZW50KVwiXG4gICAgICAgID48L3R1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1sb2FkPlxuICAgICAgICA8dHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLWRvd25sb2FkXG4gICAgICAgICAgW2ltYWdlQ2hvc2VuXT1cImltYWdlQ2hvc2VuXCJcbiAgICAgICAgICBbaW1hZ2VFZGl0b3JdPVwiaW1hZ2VFZGl0b3JcIlxuICAgICAgICA+PC90dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtZG93bmxvYWQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWhlbHAtbWVudS1pdGVtIHR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3cgdHVpLWltYWdlLWVkaXRvci1mbGV4LW5vd3JhcFwiXG4gICAgICA+XG4gICAgICAgIDx0dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtem9vbS1pblxuICAgICAgICAgIFtpbWFnZUNob3Nlbl09XCJpbWFnZUNob3NlblwiXG4gICAgICAgICAgW2ltYWdlRWRpdG9yXT1cImltYWdlRWRpdG9yXCJcbiAgICAgICAgPjwvdHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLXpvb20taW4+XG4gICAgICAgIDx0dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtem9vbS1vdXRcbiAgICAgICAgICBbaW1hZ2VDaG9zZW5dPVwiaW1hZ2VDaG9zZW5cIlxuICAgICAgICAgIFtpbWFnZUVkaXRvcl09XCJpbWFnZUVkaXRvclwiXG4gICAgICAgID48L3R1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy16b29tLW91dD5cbiAgICAgICAgPHR1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1kcmFnXG4gICAgICAgICAgW2ltYWdlQ2hvc2VuXT1cImltYWdlQ2hvc2VuXCJcbiAgICAgICAgICBbaW1hZ2VFZGl0b3JdPVwiaW1hZ2VFZGl0b3JcIlxuICAgICAgICA+PC90dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtZHJhZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItaGVscC1tZW51LWl0ZW0gdHVpLWltYWdlLWVkaXRvci1kLWZsZXggdHVpLWltYWdlLWVkaXRvci1mbGV4LXJvdyB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtbm93cmFwXCJcbiAgICAgID5cbiAgICAgICAgPHR1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1oaXN0b3J5XG4gICAgICAgICAgW2ltYWdlRWRpdG9yXT1cImltYWdlRWRpdG9yXCJcbiAgICAgICAgPjwvdHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLWhpc3Rvcnk+XG4gICAgICAgIDx0dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtdW5kb1xuICAgICAgICAgIFtpbWFnZUVkaXRvcl09XCJpbWFnZUVkaXRvclwiXG4gICAgICAgICAgKGNhbmNlbENyb3BwaW5nUmVxdWVzdGVkKT1cImV4aXRDcm9wT25BY3Rpb24oKVwiXG4gICAgICAgID48L3R1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy11bmRvPlxuICAgICAgICA8dHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLXJlZG9cbiAgICAgICAgICBbaW1hZ2VFZGl0b3JdPVwiaW1hZ2VFZGl0b3JcIlxuICAgICAgICAgIChjYW5jZWxDcm9wcGluZ1JlcXVlc3RlZCk9XCJleGl0Q3JvcE9uQWN0aW9uKClcIlxuICAgICAgICA+PC90dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtcmVkbz5cbiAgICAgICAgPHR1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1yZXNldFxuICAgICAgICAgIFtpbWFnZUNob3Nlbl09XCJpbWFnZUNob3NlblwiXG4gICAgICAgICAgW2ltYWdlRWRpdG9yXT1cImltYWdlRWRpdG9yXCJcbiAgICAgICAgICAoY2FuY2VsQ3JvcHBpbmdSZXF1ZXN0ZWQpPVwiZXhpdENyb3BPbkFjdGlvbigpXCJcbiAgICAgICAgICAocmVzZXRJbWFnZSk9XCJyZXNldEltYWdlKClcIlxuICAgICAgICA+PC90dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtcmVzZXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWhlbHAtbWVudS1pdGVtIHR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3cgdHVpLWltYWdlLWVkaXRvci1mbGV4LW5vd3JhcFwiXG4gICAgICA+XG4gICAgICAgIDx0dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtZGVsZXRlXG4gICAgICAgICAgW2ltYWdlQ2hvc2VuXT1cImltYWdlQ2hvc2VuXCJcbiAgICAgICAgICBbaW1hZ2VFZGl0b3JdPVwiaW1hZ2VFZGl0b3JcIlxuICAgICAgICAgIChjYW5jZWxDcm9wcGluZ1JlcXVlc3RlZCk9XCJleGl0Q3JvcE9uQWN0aW9uKClcIlxuICAgICAgICA+PC90dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtZGVsZXRlPlxuICAgICAgICA8dHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLWRlbGV0ZS1hbGxcbiAgICAgICAgICBbaW1hZ2VDaG9zZW5dPVwiaW1hZ2VDaG9zZW5cIlxuICAgICAgICAgIFtpbWFnZUVkaXRvcl09XCJpbWFnZUVkaXRvclwiXG4gICAgICAgICAgKGNhbmNlbENyb3BwaW5nUmVxdWVzdGVkKT1cImV4aXRDcm9wT25BY3Rpb24oKVwiXG4gICAgICAgID48L3R1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1kZWxldGUtYWxsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2XG4gICAgI2ltYWdlQ29udGFpbmVyXG4gICAgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWZsZXgtZ3Jvdy0xIHR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItanVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gICAgW3N0eWxlLmhlaWdodF09XCInMCdcIlxuICA+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnVcIiAqbmdJZj1cInN1Ym1lbnUgIT0gbnVsbFwiPlxuICAgIDx0dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnVzLWNyb3BcbiAgICAgICpuZ0lmPVwic3VibWVudSA9PSAnY3JvcCdcIlxuICAgICAgW2ltYWdlRWRpdG9yXT1cImltYWdlRWRpdG9yXCJcbiAgICAgIChjYW5jZWxDcm9wcGluZ1JlcXVlc3RlZCk9XCJleGl0Q3JvcE9uQWN0aW9uKClcIlxuICAgID48L3R1aS1pbWFnZS1lZGl0b3Itc3VibWVudXMtY3JvcD5cbiAgICA8dHVpLWltYWdlLWVkaXRvci1zdWJtZW51cy1mbGlwXG4gICAgICAqbmdJZj1cInN1Ym1lbnUgPT0gJ2ZsaXAnXCJcbiAgICAgIFtpbWFnZUVkaXRvcl09XCJpbWFnZUVkaXRvclwiXG4gICAgPjwvdHVpLWltYWdlLWVkaXRvci1zdWJtZW51cy1mbGlwPlxuICAgIDx0dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnVzLXJvdGF0ZVxuICAgICAgKm5nSWY9XCJzdWJtZW51ID09ICdyb3RhdGUnXCJcbiAgICAgIFtpbWFnZUVkaXRvcl09XCJpbWFnZUVkaXRvclwiXG4gICAgICBbKHJvdGF0aW9uKV09XCJyb3RhdGlvblwiXG4gICAgPjwvdHVpLWltYWdlLWVkaXRvci1zdWJtZW51cy1yb3RhdGU+XG4gICAgPHR1aS1pbWFnZS1lZGl0b3Itc3VibWVudXMtZHJhd1xuICAgICAgKm5nSWY9XCJzdWJtZW51ID09ICdkcmF3J1wiXG4gICAgICBbaW1hZ2VFZGl0b3JdPVwiaW1hZ2VFZGl0b3JcIlxuICAgID48L3R1aS1pbWFnZS1lZGl0b3Itc3VibWVudXMtZHJhdz5cbiAgICA8dHVpLWltYWdlLWVkaXRvci1zdWJtZW51cy1zaGFwZVxuICAgICAgKm5nSWY9XCJzdWJtZW51ID09ICdzaGFwZSdcIlxuICAgICAgW2ltYWdlRWRpdG9yXT1cImltYWdlRWRpdG9yXCJcbiAgICA+PC90dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnVzLXNoYXBlPlxuICAgIDx0dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnVzLWljb25cbiAgICAgICpuZ0lmPVwic3VibWVudSA9PSAnaWNvbidcIlxuICAgICAgW2ltYWdlRWRpdG9yXT1cImltYWdlRWRpdG9yXCJcbiAgICA+PC90dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnVzLWljb24+XG4gICAgPHR1aS1pbWFnZS1lZGl0b3Itc3VibWVudXMtdGV4dFxuICAgICAgKm5nSWY9XCJzdWJtZW51ID09ICd0ZXh0J1wiXG4gICAgICBbaW1hZ2VFZGl0b3JdPVwiaW1hZ2VFZGl0b3JcIlxuICAgID48L3R1aS1pbWFnZS1lZGl0b3Itc3VibWVudXMtdGV4dD5cbiAgICA8dHVpLWltYWdlLWVkaXRvci1zdWJtZW51cy1tYXNrXG4gICAgICAqbmdJZj1cInN1Ym1lbnUgPT0gJ21hc2snXCJcbiAgICAgIFtpbWFnZUVkaXRvcl09XCJpbWFnZUVkaXRvclwiXG4gICAgPjwvdHVpLWltYWdlLWVkaXRvci1zdWJtZW51cy1tYXNrPlxuICAgIDx0dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnVzLWZpbHRlclxuICAgICAgKm5nSWY9XCJzdWJtZW51ID09ICdmaWx0ZXInXCJcbiAgICAgIFtpbWFnZUVkaXRvcl09XCJpbWFnZUVkaXRvclwiXG4gICAgPjwvdHVpLWltYWdlLWVkaXRvci1zdWJtZW51cy1maWx0ZXI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1jb250cm9scyB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItanVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1tZW51IHR1aS1pbWFnZS1lZGl0b3ItZC1mbGV4IHR1aS1pbWFnZS1lZGl0b3ItZmxleC1yb3cgdHVpLWltYWdlLWVkaXRvci1mbGV4LW5vd3JhcCB0dWktaW1hZ2UtZWRpdG9yLWFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgPlxuICAgICAgPHR1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1jcm9wXG4gICAgICAgIFtpbWFnZUNob3Nlbl09XCJpbWFnZUNob3NlblwiXG4gICAgICAgIFtzZWxlY3RlZF09XCJzdWJtZW51ID09ICdjcm9wJ1wiXG4gICAgICAgIChjbGlja2VkKT1cInN1Ym1lbnUgPT0gJ2Nyb3AnID8gaGlkZU1lbnUoJGV2ZW50KSA6IHNob3dNZW51KCRldmVudClcIlxuICAgICAgPjwvdHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLWNyb3A+XG4gICAgICA8dHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLWZsaXBcbiAgICAgICAgW2ltYWdlQ2hvc2VuXT1cImltYWdlQ2hvc2VuXCJcbiAgICAgICAgW3NlbGVjdGVkXT1cInN1Ym1lbnUgPT0gJ2ZsaXAnXCJcbiAgICAgICAgKGNsaWNrZWQpPVwic3VibWVudSA9PSAnZmxpcCcgPyBoaWRlTWVudSgkZXZlbnQpIDogc2hvd01lbnUoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L3R1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1mbGlwPlxuICAgICAgPHR1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1yb3RhdGVcbiAgICAgICAgW2ltYWdlQ2hvc2VuXT1cImltYWdlQ2hvc2VuXCJcbiAgICAgICAgW3NlbGVjdGVkXT1cInN1Ym1lbnUgPT0gJ3JvdGF0ZSdcIlxuICAgICAgICAoY2xpY2tlZCk9XCJzdWJtZW51ID09ICdyb3RhdGUnID8gaGlkZU1lbnUoJGV2ZW50KSA6IHNob3dNZW51KCRldmVudClcIlxuICAgICAgPjwvdHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLXJvdGF0ZT5cbiAgICAgIDx0dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtZHJhd1xuICAgICAgICBbaW1hZ2VDaG9zZW5dPVwiaW1hZ2VDaG9zZW5cIlxuICAgICAgICBbc2VsZWN0ZWRdPVwic3VibWVudSA9PSAnZHJhdydcIlxuICAgICAgICAoY2xpY2tlZCk9XCJzdWJtZW51ID09ICdkcmF3JyA/IGhpZGVNZW51KCRldmVudCkgOiBzaG93TWVudSgkZXZlbnQpXCJcbiAgICAgID48L3R1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1kcmF3PlxuICAgICAgPHR1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1zaGFwZVxuICAgICAgICBbaW1hZ2VDaG9zZW5dPVwiaW1hZ2VDaG9zZW5cIlxuICAgICAgICBbc2VsZWN0ZWRdPVwic3VibWVudSA9PSAnc2hhcGUnXCJcbiAgICAgICAgKGNsaWNrZWQpPVwic3VibWVudSA9PSAnc2hhcGUnID8gaGlkZU1lbnUoJGV2ZW50KSA6IHNob3dNZW51KCRldmVudClcIlxuICAgICAgPjwvdHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLXNoYXBlPlxuICAgICAgPHR1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1pY29uXG4gICAgICAgIFtpbWFnZUNob3Nlbl09XCJpbWFnZUNob3NlblwiXG4gICAgICAgIFtzZWxlY3RlZF09XCJzdWJtZW51ID09ICdpY29uJ1wiXG4gICAgICAgIChjbGlja2VkKT1cInN1Ym1lbnUgPT0gJ2ljb24nID8gaGlkZU1lbnUoJGV2ZW50KSA6IHNob3dNZW51KCRldmVudClcIlxuICAgICAgPjwvdHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLWljb24+XG4gICAgICA8dHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLXRleHRcbiAgICAgICAgW2ltYWdlQ2hvc2VuXT1cImltYWdlQ2hvc2VuXCJcbiAgICAgICAgW3NlbGVjdGVkXT1cInN1Ym1lbnUgPT0gJ3RleHQnXCJcbiAgICAgICAgKGNsaWNrZWQpPVwic3VibWVudSA9PSAndGV4dCcgPyBoaWRlTWVudSgkZXZlbnQpIDogc2hvd01lbnUoJGV2ZW50KVwiXG4gICAgICA+PC90dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtdGV4dD5cbiAgICAgIDx0dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtbWFza1xuICAgICAgICBbaW1hZ2VDaG9zZW5dPVwiaW1hZ2VDaG9zZW5cIlxuICAgICAgICBbc2VsZWN0ZWRdPVwic3VibWVudSA9PSAnbWFzaydcIlxuICAgICAgICAoY2xpY2tlZCk9XCJzdWJtZW51ID09ICdtYXNrJyA/IGhpZGVNZW51KCRldmVudCkgOiBzaG93TWVudSgkZXZlbnQpXCJcbiAgICAgID48L3R1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1tYXNrPlxuICAgICAgPHR1aS1pbWFnZS1lZGl0b3ItbWVudXMtYnV0dG9ucy1maWx0ZXJcbiAgICAgICAgW2ltYWdlQ2hvc2VuXT1cImltYWdlQ2hvc2VuXCJcbiAgICAgICAgW3NlbGVjdGVkXT1cInN1Ym1lbnUgPT0gJ2ZpbHRlcidcIlxuICAgICAgICAoY2xpY2tlZCk9XCJzdWJtZW51ID09ICdmaWx0ZXInID8gaGlkZU1lbnUoJGV2ZW50KSA6IHNob3dNZW51KCRldmVudClcIlxuICAgICAgPjwvdHVpLWltYWdlLWVkaXRvci1tZW51cy1idXR0b25zLWZpbHRlcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==