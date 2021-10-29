import { BehaviorSubject } from 'rxjs';
import { TranslationService } from '../i18n/translation.service';
import { Command } from '../interfaces/command';
import { HistoryItem } from '../interfaces/history-item';
import * as i0 from "@angular/core";
export declare class HistoryService {
    private translationService;
    items: HistoryItem[];
    historyIndex: number;
    onChangeEmitter: BehaviorSubject<HistoryItem[]>;
    constructor(translationService: TranslationService);
    /**
     * Get list's length
     */
    private get listLength();
    /**
     * Clear history
     */
    clear(): void;
    /**
     * Whether history menu has disabled item
     */
    private hasDisabledItem;
    /**
     * Push list item element
     */
    private pushListItemElement;
    add(command: string | Command, imageEditor: any): void;
    /**
     * Select previous history of current selected history
     */
    prev(): void;
    /**
     * Select next history of current selected history
     */
    next(): void;
    /**
     * Delete list item element
     * @param {number} start - start index to delete
     * @param {number} end - end index to delete
     */
    private deleteListItemElement;
    static ɵfac: i0.ɵɵFactoryDef<HistoryService, never>;
    static ɵprov: i0.ɵɵInjectableDef<HistoryService>;
}
//# sourceMappingURL=history.service.d.ts.map