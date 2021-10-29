import { OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TextComponent implements OnChanges, OnDestroy {
    imageEditor: any;
    activeObjectId: number;
    defaultTextColors: string[];
    textColor: string;
    textSizeValue: number;
    textAlign: 'left' | 'center' | 'right';
    textFontFamily: string;
    textFontStyle: 'normal' | 'italic';
    textFontWeight: 'normal' | 'bold';
    textDecoration: 'underline' | 'line-through' | 'overline' | null;
    onObjectActivatedEventListener: any;
    onTextAddedEventListener: any;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private onObjectActivated;
    private onTextAdded;
    private checkActiveObject;
    changeTextAlignment(newValue: 'left' | 'center' | 'right'): void;
    changeTextFontStyle(newFontStyle: 'normal' | 'italic'): void;
    changeTextFontWeight(newFontWeight: 'normal' | 'bold'): void;
    changeTextDecoration(newTextDecoration: 'underline' | 'line-through' | 'overline' | null): void;
    textSizeValueChanged(currentTextSizeValue: number, isSilent: boolean): void;
    textColorChanged(currentColor: string): void;
    textChangeActiveObject(type: 'color' | 'fontFamily' | 'fontSize' | 'fontStyle' | 'fontWeight' | 'textAlign' | 'textDecoration', isSilent?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<TextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TextComponent, "tui-image-editor-submenus-text", never, { "imageEditor": "imageEditor"; "defaultTextColors": "defaultTextColors"; }, {}, never, never>;
}
//# sourceMappingURL=text.component.d.ts.map