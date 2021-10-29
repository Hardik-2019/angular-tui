import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UndoComponent implements OnChanges {
    imageEditor: any;
    cancelCroppingRequested: EventEmitter<any>;
    undoStackSize: number;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    undo(): void;
    static ɵfac: i0.ɵɵFactoryDef<UndoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UndoComponent, "tui-image-editor-menus-buttons-undo", never, { "imageEditor": "imageEditor"; }, { "cancelCroppingRequested": "cancelCroppingRequested"; }, never, never>;
}
//# sourceMappingURL=undo.component.d.ts.map