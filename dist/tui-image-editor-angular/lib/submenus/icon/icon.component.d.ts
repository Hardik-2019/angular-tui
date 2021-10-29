import { OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IconComponent implements OnChanges, OnDestroy {
    imageEditor: any;
    defaultIconColors: string[];
    iconColor: string;
    iconType: 'icon-arrow' | 'icon-arrow-2' | 'icon-arrow-3' | 'icon-star' | 'icon-star-2' | 'icon-polygon' | 'icon-location' | 'icon-heart' | 'icon-bubble';
    activeObjectId: number;
    onObjectActivatedEventListener: any;
    onObjectAddedEventListener: any;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private onObjectActivated;
    private onObjectAdded;
    private checkActiveObject;
    setActiveIconType(newIconType: 'icon-arrow' | 'icon-arrow-2' | 'icon-arrow-3' | 'icon-star' | 'icon-star-2' | 'icon-polygon' | 'icon-location' | 'icon-heart' | 'icon-bubble', discardSelection?: boolean): void;
    iconColorChanged(currentColor: string): void;
    iconChangeActiveObject(): void;
    registerIcon(obj: any): void;
    onIconChosen(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IconComponent, "tui-image-editor-submenus-icon", never, { "imageEditor": "imageEditor"; "defaultIconColors": "defaultIconColors"; }, {}, never, never>;
}
//# sourceMappingURL=icon.component.d.ts.map