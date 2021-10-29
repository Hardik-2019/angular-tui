import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RedoComponent implements OnChanges {
    imageEditor: any;
    cancelCroppingRequested: EventEmitter<any>;
    redoStackSize: number;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    redo(): void;
    static ɵfac: i0.ɵɵFactoryDef<RedoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RedoComponent, "tui-image-editor-menus-buttons-redo", never, { "imageEditor": "imageEditor"; }, { "cancelCroppingRequested": "cancelCroppingRequested"; }, never, never>;
}
//# sourceMappingURL=redo.component.d.ts.map