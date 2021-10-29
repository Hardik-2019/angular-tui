import { ElementRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MaskComponent implements OnChanges, OnDestroy {
    imageEditor: any;
    activeObjectId: number;
    onObjectActivatedEventListener: any;
    fileInput: ElementRef;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private onObjectActivated;
    onMaskChosen(event: any): void;
    applyMask(): void;
    static ɵfac: i0.ɵɵFactoryDef<MaskComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MaskComponent, "tui-image-editor-submenus-mask", never, { "imageEditor": "imageEditor"; }, {}, never, never>;
}
//# sourceMappingURL=mask.component.d.ts.map