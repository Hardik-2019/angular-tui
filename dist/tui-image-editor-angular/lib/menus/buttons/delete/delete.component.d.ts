import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DeleteComponent implements OnChanges {
    imageChosen: boolean;
    imageEditor: any;
    cancelCroppingRequested: EventEmitter<any>;
    activeObjectId: number;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    deleteActiveObject(): void;
    static ɵfac: i0.ɵɵFactoryDef<DeleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DeleteComponent, "tui-image-editor-menus-buttons-delete", never, { "imageChosen": "imageChosen"; "imageEditor": "imageEditor"; }, { "cancelCroppingRequested": "cancelCroppingRequested"; }, never, never>;
}
//# sourceMappingURL=delete.component.d.ts.map