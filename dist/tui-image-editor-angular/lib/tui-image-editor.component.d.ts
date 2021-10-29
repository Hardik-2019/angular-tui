import { AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HistoryItem } from './interfaces/history-item';
import { HistoryService } from './services/history.service';
import * as i0 from "@angular/core";
export declare class TuiImageEditorComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private historyService;
    imageContainer: ElementRef;
    options: {
        usageStatistics: boolean;
        selectionStyle?: {
            cornerStyle: string;
            cornerSize: number;
            cornerColor: string;
            cornerStrokeColor: string;
            transparentCorners: boolean;
            lineWidth: number;
            borderColor: string;
            rotatingPointOffset: number;
        };
        applyCropSelectionStyle: boolean;
        applyGroupSelectionStyle: boolean;
    };
    initialImage: string | File;
    imageEditor: any;
    initializeImgUrl: string;
    imageChosen: boolean;
    activeObjectId: number;
    submenu: 'crop' | 'flip' | 'rotate' | 'filter' | 'text' | 'icon' | 'shape' | 'draw' | 'mask' | null;
    rotation: number;
    onObjectActivatedEventListener: any;
    onExecuteCommandEventListener: any;
    onAfterUndoEventListener: any;
    onAfterRedoEventListener: any;
    private historyServiceSubscription;
    constructor(historyService: HistoryService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initializeImageEditor(): void;
    destroyImageEditor(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private onObjectActivated;
    private onExecuteCommand;
    private onAfterUndo;
    private onAfterRedo;
    loadImage(file: string | File): void;
    resetImage(): void;
    getImage(options?: {
        format: 'jpeg' | 'png';
        quality: number;
        multiplier: number;
        left?: number;
        top?: number;
        width?: number;
        height?: number;
    }): string;
    exitCropOnAction(): void;
    hideMenu(menuName: 'crop' | 'flip' | 'rotate' | 'filter' | 'text' | 'icon' | 'shape' | 'draw' | 'mask' | null): void;
    onActiveHistoryElementChanged(items: HistoryItem[]): void;
    showMenu(menuName: 'crop' | 'flip' | 'rotate' | 'filter' | 'text' | 'icon' | 'shape' | 'draw' | 'mask' | null, discardSelection?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<TuiImageEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TuiImageEditorComponent, "tui-image-editor", never, { "options": "options"; "initialImage": "initialImage"; }, {}, never, never>;
}
//# sourceMappingURL=tui-image-editor.component.d.ts.map