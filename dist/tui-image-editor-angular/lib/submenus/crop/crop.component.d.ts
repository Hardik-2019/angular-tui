import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { cropModes } from '../../consts';
import * as i0 from "@angular/core";
export declare class CropComponent implements OnChanges {
    imageEditor: any;
    activeCropMode: cropModes;
    CROPMODE_PRESET_NONE: cropModes;
    CROPMODE_PRESET_SQUARE: cropModes;
    CROPMODE_PRESET_16_9: cropModes;
    CROPMODE_PRESET_3_2: cropModes;
    CROPMODE_PRESET_4_3: cropModes;
    CROPMODE_PRESET_5_4: cropModes;
    CROPMODE_PRESET_7_5: cropModes;
    cancelCroppingRequested: EventEmitter<any>;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    setCropMode(cropMode: cropModes): void;
    setCropzoneRect(mode: number): void;
    applyCrop(): void;
    cancelCrop(): void;
    static ɵfac: i0.ɵɵFactoryDef<CropComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CropComponent, "tui-image-editor-submenus-crop", never, { "imageEditor": "imageEditor"; }, { "cancelCroppingRequested": "cancelCroppingRequested"; }, never, never>;
}
//# sourceMappingURL=crop.component.d.ts.map