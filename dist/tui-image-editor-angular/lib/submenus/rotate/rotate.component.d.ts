import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RotateComponent {
    imageEditor: any;
    rotation: number;
    rotationChange: EventEmitter<number>;
    constructor();
    rotateImage(rotationAngle: number): Promise<void>;
    rotationChanged(currentRotationValue: number | Event, isSilent: boolean): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDef<RotateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RotateComponent, "tui-image-editor-submenus-rotate", never, { "imageEditor": "imageEditor"; "rotation": "rotation"; }, { "rotationChange": "rotationChange"; }, never, never>;
}
//# sourceMappingURL=rotate.component.d.ts.map