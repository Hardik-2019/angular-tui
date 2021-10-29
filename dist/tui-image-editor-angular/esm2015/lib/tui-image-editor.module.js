import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TuiImageEditorComponent } from './tui-image-editor.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { LoadComponent } from './menus/buttons/load/load.component';
import { HistoryComponent } from './menus/buttons/history/history.component';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { DownloadComponent } from './menus/buttons/download/download.component';
import { ZoomInComponent } from './menus/buttons/zoom-in/zoom-in.component';
import { ZoomOutComponent } from './menus/buttons/zoom-out/zoom-out.component';
import { DragComponent } from './menus/buttons/drag/drag.component';
import { UndoComponent } from './menus/buttons/undo/undo.component';
import { RedoComponent } from './menus/buttons/redo/redo.component';
import { ResetComponent } from './menus/buttons/reset/reset.component';
import { DeleteComponent } from './menus/buttons/delete/delete.component';
import { DeleteAllComponent } from './menus/buttons/delete-all/delete-all.component';
import { CropComponent } from './menus/buttons/crop/crop.component';
import { CropComponent as SubmenusCropComponent } from './submenus/crop/crop.component';
import { FlipComponent } from './menus/buttons/flip/flip.component';
import { FlipComponent as SubmenusFlipComponent } from './submenus/flip/flip.component';
import { RotateComponent } from './menus/buttons/rotate/rotate.component';
import { RotateComponent as SubmenusRotateComponent } from './submenus/rotate/rotate.component';
import { DrawComponent } from './menus/buttons/draw/draw.component';
import { DrawComponent as SubmenusDrawComponent } from './submenus/draw/draw.component';
import { ShapeComponent } from './menus/buttons/shape/shape.component';
import { ShapeComponent as SubmenusShapeComponent } from './submenus/shape/shape.component';
import { IconComponent } from './menus/buttons/icon/icon.component';
import { IconComponent as SubmenusIconComponent } from './submenus/icon/icon.component';
import { TextComponent } from './menus/buttons/text/text.component';
import { TextComponent as SubmenusTextComponent } from './submenus/text/text.component';
import { MaskComponent } from './menus/buttons/mask/mask.component';
import { MaskComponent as SubmenusMaskComponent } from './submenus/mask/mask.component';
import { FilterComponent } from './menus/buttons/filter/filter.component';
import { FilterComponent as SubmenusFilterComponent } from './submenus/filter/filter.component';
import { TranslationService } from './i18n/translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export const translateModule = TranslateModule.forRoot();
export class TuiImageEditorModule {
    static forRoot() {
        return {
            ngModule: TuiImageEditorModule,
            providers: [],
        };
    }
}
TuiImageEditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: TuiImageEditorModule });
TuiImageEditorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TuiImageEditorModule_Factory(t) { return new (t || TuiImageEditorModule)(); }, providers: [TranslationService], imports: [[
            CommonModule,
            FormsModule,
            translateModule,
            ColorPickerModule,
            NgbPopoverModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TuiImageEditorModule, { declarations: [TuiImageEditorComponent,
        LoadComponent,
        HistoryComponent,
        SvgDefinitionsComponent,
        DownloadComponent,
        ZoomInComponent,
        ZoomOutComponent,
        DragComponent,
        UndoComponent,
        RedoComponent,
        ResetComponent,
        DeleteComponent,
        DeleteAllComponent,
        CropComponent,
        SubmenusCropComponent,
        FlipComponent,
        SubmenusFlipComponent,
        RotateComponent,
        SubmenusRotateComponent,
        DrawComponent,
        SubmenusDrawComponent,
        ShapeComponent,
        SubmenusShapeComponent,
        IconComponent,
        SubmenusIconComponent,
        TextComponent,
        SubmenusTextComponent,
        MaskComponent,
        SubmenusMaskComponent,
        FilterComponent,
        SubmenusFilterComponent], imports: [CommonModule,
        FormsModule, i1.TranslateModule, ColorPickerModule,
        NgbPopoverModule], exports: [TuiImageEditorComponent, SvgDefinitionsComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TuiImageEditorModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    TuiImageEditorComponent,
                    LoadComponent,
                    HistoryComponent,
                    SvgDefinitionsComponent,
                    DownloadComponent,
                    ZoomInComponent,
                    ZoomOutComponent,
                    DragComponent,
                    UndoComponent,
                    RedoComponent,
                    ResetComponent,
                    DeleteComponent,
                    DeleteAllComponent,
                    CropComponent,
                    SubmenusCropComponent,
                    FlipComponent,
                    SubmenusFlipComponent,
                    RotateComponent,
                    SubmenusRotateComponent,
                    DrawComponent,
                    SubmenusDrawComponent,
                    ShapeComponent,
                    SubmenusShapeComponent,
                    IconComponent,
                    SubmenusIconComponent,
                    TextComponent,
                    SubmenusTextComponent,
                    MaskComponent,
                    SubmenusMaskComponent,
                    FilterComponent,
                    SubmenusFilterComponent,
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    translateModule,
                    ColorPickerModule,
                    NgbPopoverModule,
                ],
                exports: [TuiImageEditorComponent, SvgDefinitionsComponent],
                providers: [TranslationService],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVpLWltYWdlLWVkaXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi90dWktaW1hZ2UtZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNB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UTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWix1QkFBdUI7b0JBQ3ZCLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQix1QkFBdUI7b0JBQ3ZCLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IscUJBQXFCO29CQUNyQixhQUFhO29CQUNiLHFCQUFxQjtvQkFDckIsZUFBZTtvQkFDZix1QkFBdUI7b0JBQ3ZCLGFBQWE7b0JBQ2IscUJBQXFCO29CQUNyQixjQUFjO29CQUNkLHNCQUFzQjtvQkFDdEIsYUFBYTtvQkFDYixxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IscUJBQXFCO29CQUNyQixhQUFhO29CQUNiLHFCQUFxQjtvQkFDckIsZUFBZTtvQkFDZix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQzNELFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgVHVpSW1hZ2VFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL3R1aS1pbWFnZS1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IE5nYlBvcG92ZXJNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBDb2xvclBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1jb2xvci1waWNrZXInO1xuaW1wb3J0IHsgTG9hZENvbXBvbmVudCB9IGZyb20gJy4vbWVudXMvYnV0dG9ucy9sb2FkL2xvYWQuY29tcG9uZW50JztcbmltcG9ydCB7IEhpc3RvcnlDb21wb25lbnQgfSBmcm9tICcuL21lbnVzL2J1dHRvbnMvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdmdEZWZpbml0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vc3ZnLWRlZmluaXRpb25zL3N2Zy1kZWZpbml0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG93bmxvYWRDb21wb25lbnQgfSBmcm9tICcuL21lbnVzL2J1dHRvbnMvZG93bmxvYWQvZG93bmxvYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFpvb21JbkNvbXBvbmVudCB9IGZyb20gJy4vbWVudXMvYnV0dG9ucy96b29tLWluL3pvb20taW4uY29tcG9uZW50JztcbmltcG9ydCB7IFpvb21PdXRDb21wb25lbnQgfSBmcm9tICcuL21lbnVzL2J1dHRvbnMvem9vbS1vdXQvem9vbS1vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IERyYWdDb21wb25lbnQgfSBmcm9tICcuL21lbnVzL2J1dHRvbnMvZHJhZy9kcmFnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmRvQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51cy9idXR0b25zL3VuZG8vdW5kby5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVkb0NvbXBvbmVudCB9IGZyb20gJy4vbWVudXMvYnV0dG9ucy9yZWRvL3JlZG8uY29tcG9uZW50JztcbmltcG9ydCB7IFJlc2V0Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51cy9idXR0b25zL3Jlc2V0L3Jlc2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWxldGVDb21wb25lbnQgfSBmcm9tICcuL21lbnVzL2J1dHRvbnMvZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVsZXRlQWxsQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51cy9idXR0b25zL2RlbGV0ZS1hbGwvZGVsZXRlLWFsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3JvcENvbXBvbmVudCB9IGZyb20gJy4vbWVudXMvYnV0dG9ucy9jcm9wL2Nyb3AuY29tcG9uZW50JztcbmltcG9ydCB7IENyb3BDb21wb25lbnQgYXMgU3VibWVudXNDcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJtZW51cy9jcm9wL2Nyb3AuY29tcG9uZW50JztcbmltcG9ydCB7IEZsaXBDb21wb25lbnQgfSBmcm9tICcuL21lbnVzL2J1dHRvbnMvZmxpcC9mbGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGbGlwQ29tcG9uZW50IGFzIFN1Ym1lbnVzRmxpcENvbXBvbmVudCB9IGZyb20gJy4vc3VibWVudXMvZmxpcC9mbGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3RhdGVDb21wb25lbnQgfSBmcm9tICcuL21lbnVzL2J1dHRvbnMvcm90YXRlL3JvdGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm90YXRlQ29tcG9uZW50IGFzIFN1Ym1lbnVzUm90YXRlQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJtZW51cy9yb3RhdGUvcm90YXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcmF3Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51cy9idXR0b25zL2RyYXcvZHJhdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhd0NvbXBvbmVudCBhcyBTdWJtZW51c0RyYXdDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1lbnVzL2RyYXcvZHJhdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcGVDb21wb25lbnQgfSBmcm9tICcuL21lbnVzL2J1dHRvbnMvc2hhcGUvc2hhcGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXBlQ29tcG9uZW50IGFzIFN1Ym1lbnVzU2hhcGVDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1lbnVzL3NoYXBlL3NoYXBlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51cy9idXR0b25zL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCBhcyBTdWJtZW51c0ljb25Db21wb25lbnQgfSBmcm9tICcuL3N1Ym1lbnVzL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4vbWVudXMvYnV0dG9ucy90ZXh0L3RleHQuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRDb21wb25lbnQgYXMgU3VibWVudXNUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9zdWJtZW51cy90ZXh0L3RleHQuY29tcG9uZW50JztcbmltcG9ydCB7IE1hc2tDb21wb25lbnQgfSBmcm9tICcuL21lbnVzL2J1dHRvbnMvbWFzay9tYXNrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXNrQ29tcG9uZW50IGFzIFN1Ym1lbnVzTWFza0NvbXBvbmVudCB9IGZyb20gJy4vc3VibWVudXMvbWFzay9tYXNrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL21lbnVzL2J1dHRvbnMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyQ29tcG9uZW50IGFzIFN1Ym1lbnVzRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJtZW51cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCB0cmFuc2xhdGVNb2R1bGUgPSBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCgpO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUdWlJbWFnZUVkaXRvckNvbXBvbmVudCxcbiAgICBMb2FkQ29tcG9uZW50LFxuICAgIEhpc3RvcnlDb21wb25lbnQsXG4gICAgU3ZnRGVmaW5pdGlvbnNDb21wb25lbnQsXG4gICAgRG93bmxvYWRDb21wb25lbnQsXG4gICAgWm9vbUluQ29tcG9uZW50LFxuICAgIFpvb21PdXRDb21wb25lbnQsXG4gICAgRHJhZ0NvbXBvbmVudCxcbiAgICBVbmRvQ29tcG9uZW50LFxuICAgIFJlZG9Db21wb25lbnQsXG4gICAgUmVzZXRDb21wb25lbnQsXG4gICAgRGVsZXRlQ29tcG9uZW50LFxuICAgIERlbGV0ZUFsbENvbXBvbmVudCxcbiAgICBDcm9wQ29tcG9uZW50LFxuICAgIFN1Ym1lbnVzQ3JvcENvbXBvbmVudCxcbiAgICBGbGlwQ29tcG9uZW50LFxuICAgIFN1Ym1lbnVzRmxpcENvbXBvbmVudCxcbiAgICBSb3RhdGVDb21wb25lbnQsXG4gICAgU3VibWVudXNSb3RhdGVDb21wb25lbnQsXG4gICAgRHJhd0NvbXBvbmVudCxcbiAgICBTdWJtZW51c0RyYXdDb21wb25lbnQsXG4gICAgU2hhcGVDb21wb25lbnQsXG4gICAgU3VibWVudXNTaGFwZUNvbXBvbmVudCxcbiAgICBJY29uQ29tcG9uZW50LFxuICAgIFN1Ym1lbnVzSWNvbkNvbXBvbmVudCxcbiAgICBUZXh0Q29tcG9uZW50LFxuICAgIFN1Ym1lbnVzVGV4dENvbXBvbmVudCxcbiAgICBNYXNrQ29tcG9uZW50LFxuICAgIFN1Ym1lbnVzTWFza0NvbXBvbmVudCxcbiAgICBGaWx0ZXJDb21wb25lbnQsXG4gICAgU3VibWVudXNGaWx0ZXJDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgdHJhbnNsYXRlTW9kdWxlLFxuICAgIENvbG9yUGlja2VyTW9kdWxlLFxuICAgIE5nYlBvcG92ZXJNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtUdWlJbWFnZUVkaXRvckNvbXBvbmVudCwgU3ZnRGVmaW5pdGlvbnNDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtUcmFuc2xhdGlvblNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlJbWFnZUVkaXRvck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVHVpSW1hZ2VFZGl0b3JNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==