import { OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DrawComponent implements OnChanges, OnDestroy {
    imageEditor: any;
    defaultDrawShapeColors: string[];
    drawStrokeWidthValue: number;
    drawType: 'free' | 'line';
    drawStrokeColor: string;
    activeObjectId: number;
    onObjectActivatedEventListener: any;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private onObjectActivated;
    private checkActiveObject;
    drawStrokeWidthChanged(currentStrokeWidth: number | Event, isSilent: boolean): void;
    setDrawType(type: 'free' | 'line'): void;
    drawStrokeColorChanged(currentStrokeColor: string): void;
    setDrawMode(type: 'free' | 'line' | null, settings: {
        width: number;
        color: string;
        arrowType?: {
            tail: 'chevron' | 'triangle';
            head: 'chevron' | 'triangle';
        };
    }): void;
    strokeChangeActiveObject(changedProperty: 'strokeWidth' | 'strokeColor', isSilent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<DrawComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DrawComponent, "tui-image-editor-submenus-draw", never, { "imageEditor": "imageEditor"; "defaultDrawShapeColors": "defaultDrawShapeColors"; }, {}, never, never>;
}
//# sourceMappingURL=draw.component.d.ts.map