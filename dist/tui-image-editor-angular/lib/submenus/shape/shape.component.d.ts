import { OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ShapeComponent implements OnChanges, OnDestroy {
    imageEditor: any;
    defaultShapeStrokeColors: string[];
    defaultShapeFillColors: string[];
    shapeStrokeWidthValue: number;
    shapeFillColor: string;
    shapeStrokeColor: string;
    shapeType: 'circle' | 'triangle' | 'rect';
    activeObjectId: number;
    onObjectActivatedEventListener: any;
    onObjectAddedEventListener: any;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private onObjectActivated;
    private onObjectAdded;
    private checkActiveObject;
    shapeStrokeWidthChanged(currentStrokeWidth: number | Event, isSilent: boolean): void;
    shapeColorChanged(type: 'stroke' | 'fill', currentColor: string): void;
    setShapeType(type: 'circle' | 'triangle' | 'rect'): void;
    setDrawingShape(type: 'circle' | 'triangle' | 'rect', options: {
        fill: string;
        stroke: string;
        strokeWidth: number;
    }): void;
    shapeChangeActiveObject(changedProperty: 'strokeWidth' | 'strokeColor' | 'fillColor', isSilent?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<ShapeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ShapeComponent, "tui-image-editor-submenus-shape", never, { "imageEditor": "imageEditor"; "defaultShapeStrokeColors": "defaultShapeStrokeColors"; "defaultShapeFillColors": "defaultShapeFillColors"; }, {}, never, never>;
}
//# sourceMappingURL=shape.component.d.ts.map