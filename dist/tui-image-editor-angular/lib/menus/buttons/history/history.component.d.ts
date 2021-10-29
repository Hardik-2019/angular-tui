import { HistoryItem } from '../../../interfaces/history-item';
import { HistoryService } from '../../../services/history.service';
import * as i0 from "@angular/core";
export declare class HistoryComponent {
    private historyService;
    imageEditor: any;
    constructor(historyService: HistoryService);
    get items(): HistoryItem[];
    get historyIndex(): number;
    onclickHistoryItem(index: number): void;
    static ɵfac: i0.ɵɵFactoryDef<HistoryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HistoryComponent, "tui-image-editor-menus-buttons-history", never, { "imageEditor": "imageEditor"; }, {}, never, never>;
}
//# sourceMappingURL=history.component.d.ts.map