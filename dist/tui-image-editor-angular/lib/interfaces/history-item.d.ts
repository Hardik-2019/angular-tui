import { filterType } from '../consts';
import { TranslationService } from '../i18n/translation.service';
import { Command } from './command';
export declare enum HistoryItemType {
    Shape = 0,
    Icon = 1,
    Text = 2,
    Mask = 3,
    Crop = 4,
    Draw = 5,
    Rotate = 6,
    Flip = 7,
    Load = 8,
    Delete = 9,
    Image = 10,
    ApplyFilter = 11,
    RemoveFilter = 12
}
export declare class HistoryItem {
    type: HistoryItemType;
    name: string;
    detail: string;
    args: any[];
    filterType?: filterType;
    constructor(command: string | Command, translationService: TranslationService, imageEditor: any);
}
//# sourceMappingURL=history-item.d.ts.map