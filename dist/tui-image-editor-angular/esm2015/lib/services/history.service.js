import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { historyNames } from '../consts';
import { HistoryItem } from '../interfaces/history-item';
import * as i0 from "@angular/core";
import * as i1 from "../i18n/translation.service";
export class HistoryService {
    constructor(translationService) {
        this.translationService = translationService;
        this.items = [];
        this.historyIndex = -1;
        this.onChangeEmitter = new BehaviorSubject([]);
    }
    /**
     * Get list's length
     */
    get listLength() {
        return this.items.length;
    }
    /**
     * Clear history
     */
    clear() {
        if (this.listLength > 0) {
            this.deleteListItemElement(0, this.listLength);
            this.historyIndex = -1;
        }
    }
    /**
     * Whether history menu has disabled item
     */
    hasDisabledItem() {
        return this.listLength - 1 > this.historyIndex;
    }
    /**
     * Push list item element
     */
    pushListItemElement(item) {
        this.items.push(item);
    }
    add(command, imageEditor) {
        console.debug(command);
        if (typeof command === 'string' && command === historyNames.LOAD_IMAGE) {
            this.deleteListItemElement(0, this.listLength);
        }
        if (this.hasDisabledItem()) {
            this.deleteListItemElement(this.historyIndex + 1, this.listLength);
        }
        if (typeof command === 'string' &&
            command === historyNames.ADD_MASK_IMAGE) {
            imageEditor === null || imageEditor === void 0 ? void 0 : imageEditor.clearRedoStack();
            imageEditor === null || imageEditor === void 0 ? void 0 : imageEditor.clearUndoStack();
            this.deleteListItemElement(0, this.listLength);
        }
        else {
            this.pushListItemElement(new HistoryItem(command, this.translationService, imageEditor));
            this.historyIndex = this.listLength - 1;
        }
    }
    /**
     * Select previous history of current selected history
     */
    prev() {
        this.historyIndex -= 1;
    }
    /**
     * Select next history of current selected history
     */
    next() {
        this.historyIndex += 1;
    }
    /**
     * Delete list item element
     * @param {number} start - start index to delete
     * @param {number} end - end index to delete
     */
    deleteListItemElement(start, end) {
        this.items.splice(start, end - start + 1);
    }
}
HistoryService.ɵfac = function HistoryService_Factory(t) { return new (t || HistoryService)(i0.ɵɵinject(i1.TranslationService)); };
HistoryService.ɵprov = i0.ɵɵdefineInjectable({ token: HistoryService, factory: HistoryService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistoryService, [{
        type: Injectable
    }], function () { return [{ type: i1.TranslationService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvc2VydmljZXMvaGlzdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBR3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBSXpELE1BQU0sT0FBTyxjQUFjO0lBT3pCLFlBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTm5ELFVBQUssR0FBa0IsRUFBRSxDQUFDO1FBQzFCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDMUIsb0JBQWUsR0FBbUMsSUFBSSxlQUFlLENBQzFFLEVBQUUsQ0FDSCxDQUFDO0lBRTJELENBQUM7SUFFOUQ7O09BRUc7SUFDSCxJQUFZLFVBQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ssZUFBZTtRQUNyQixPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDakQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssbUJBQW1CLENBQUMsSUFBaUI7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLEdBQUcsQ0FBQyxPQUF5QixFQUFFLFdBQWdCO1FBQ3BELE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdkIsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLFlBQVksQ0FBQyxVQUFVLEVBQUU7WUFDdEUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFDRSxPQUFPLE9BQU8sS0FBSyxRQUFRO1lBQzNCLE9BQU8sS0FBSyxZQUFZLENBQUMsY0FBYyxFQUN2QztZQUNBLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxjQUFjLEdBQUc7WUFDOUIsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLGNBQWMsR0FBRztZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixDQUN0QixJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxDQUMvRCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILElBQUk7UUFDRixJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxxQkFBcUIsQ0FBQyxLQUFhLEVBQUUsR0FBVztRQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs0RUF2RlUsY0FBYztzREFBZCxjQUFjLFdBQWQsY0FBYzt1RkFBZCxjQUFjO2NBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGhpc3RvcnlOYW1lcyB9IGZyb20gJy4uL2NvbnN0cyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2ludGVyZmFjZXMvY29tbWFuZCc7XG5pbXBvcnQgeyBIaXN0b3J5SXRlbSB9IGZyb20gJy4uL2ludGVyZmFjZXMvaGlzdG9yeS1pdGVtJztcbmltcG9ydCB7IGdldEhpc3RvcnlUaXRsZSB9IGZyb20gJy4uL3V0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhpc3RvcnlTZXJ2aWNlIHtcbiAgcHVibGljIGl0ZW1zOiBIaXN0b3J5SXRlbVtdID0gW107XG4gIHB1YmxpYyBoaXN0b3J5SW5kZXg6IG51bWJlciA9IC0xO1xuICBwdWJsaWMgb25DaGFuZ2VFbWl0dGVyOiBCZWhhdmlvclN1YmplY3Q8SGlzdG9yeUl0ZW1bXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSkge31cblxuICAvKipcbiAgICogR2V0IGxpc3QncyBsZW5ndGhcbiAgICovXG4gIHByaXZhdGUgZ2V0IGxpc3RMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgaGlzdG9yeVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMubGlzdExlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZGVsZXRlTGlzdEl0ZW1FbGVtZW50KDAsIHRoaXMubGlzdExlbmd0aCk7XG4gICAgICB0aGlzLmhpc3RvcnlJbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGhpc3RvcnkgbWVudSBoYXMgZGlzYWJsZWQgaXRlbVxuICAgKi9cbiAgcHJpdmF0ZSBoYXNEaXNhYmxlZEl0ZW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGlzdExlbmd0aCAtIDEgPiB0aGlzLmhpc3RvcnlJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIGxpc3QgaXRlbSBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIHB1c2hMaXN0SXRlbUVsZW1lbnQoaXRlbTogSGlzdG9yeUl0ZW0pIHtcbiAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gIH1cblxuICBwdWJsaWMgYWRkKGNvbW1hbmQ6IHN0cmluZyB8IENvbW1hbmQsIGltYWdlRWRpdG9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmRlYnVnKGNvbW1hbmQpO1xuXG4gICAgaWYgKHR5cGVvZiBjb21tYW5kID09PSAnc3RyaW5nJyAmJiBjb21tYW5kID09PSBoaXN0b3J5TmFtZXMuTE9BRF9JTUFHRSkge1xuICAgICAgdGhpcy5kZWxldGVMaXN0SXRlbUVsZW1lbnQoMCwgdGhpcy5saXN0TGVuZ3RoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNEaXNhYmxlZEl0ZW0oKSkge1xuICAgICAgdGhpcy5kZWxldGVMaXN0SXRlbUVsZW1lbnQodGhpcy5oaXN0b3J5SW5kZXggKyAxLCB0aGlzLmxpc3RMZW5ndGgpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBjb21tYW5kID09PSAnc3RyaW5nJyAmJlxuICAgICAgY29tbWFuZCA9PT0gaGlzdG9yeU5hbWVzLkFERF9NQVNLX0lNQUdFXG4gICAgKSB7XG4gICAgICBpbWFnZUVkaXRvcj8uY2xlYXJSZWRvU3RhY2soKTtcbiAgICAgIGltYWdlRWRpdG9yPy5jbGVhclVuZG9TdGFjaygpO1xuICAgICAgdGhpcy5kZWxldGVMaXN0SXRlbUVsZW1lbnQoMCwgdGhpcy5saXN0TGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdXNoTGlzdEl0ZW1FbGVtZW50KFxuICAgICAgICBuZXcgSGlzdG9yeUl0ZW0oY29tbWFuZCwgdGhpcy50cmFuc2xhdGlvblNlcnZpY2UsIGltYWdlRWRpdG9yKVxuICAgICAgKTtcbiAgICAgIHRoaXMuaGlzdG9yeUluZGV4ID0gdGhpcy5saXN0TGVuZ3RoIC0gMTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IHByZXZpb3VzIGhpc3Rvcnkgb2YgY3VycmVudCBzZWxlY3RlZCBoaXN0b3J5XG4gICAqL1xuICBwcmV2KCkge1xuICAgIHRoaXMuaGlzdG9yeUluZGV4IC09IDE7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IG5leHQgaGlzdG9yeSBvZiBjdXJyZW50IHNlbGVjdGVkIGhpc3RvcnlcbiAgICovXG4gIG5leHQoKSB7XG4gICAgdGhpcy5oaXN0b3J5SW5kZXggKz0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgbGlzdCBpdGVtIGVsZW1lbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IC0gc3RhcnQgaW5kZXggdG8gZGVsZXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgLSBlbmQgaW5kZXggdG8gZGVsZXRlXG4gICAqL1xuICBwcml2YXRlIGRlbGV0ZUxpc3RJdGVtRWxlbWVudChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIHRoaXMuaXRlbXMuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG59XG4iXX0=