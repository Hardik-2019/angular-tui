import { Command } from './interfaces/command';
export declare function isFileApiSupported(): boolean;
export declare function isSilentCommand(command: string | Command): boolean;
export declare function getHistoryTitle(command: any): {
    name: string;
    detail: any;
};
export declare function getFilterType(type: string, { useAlpha, mode }?: {
    useAlpha?: boolean;
    mode?: any;
}): string;
export declare function dataUrlToBlob(dataUrl: string): Blob;
export declare const emptyCropRectValues: {
    LEFT: number;
    TOP: number;
    WIDTH: number;
    HEIGHT: number;
};
/**
 * Check if cropRect is Empty.
 * @param {Object} cropRect - cropRect object
 *  @param {Number} cropRect.left - cropRect left position value
 *  @param {Number} cropRect.top - cropRect top position value
 *  @param {Number} cropRect.width - cropRect width value
 *  @param {Number} cropRect.height - cropRect height value
 * @returns {boolean}
 */
export declare function isEmptyCropzone(cropRect: any): boolean;
export declare function clearSelection(imageEditor: any, fire_event?: boolean): void;
export declare function getActiveObjectId(imageEditor: any): number | null;
export declare function removeFilter(imageEditor: any, type: string, isSilent: boolean): Promise<void>;
export declare function rgbaToObject(rgba: string): {
    r: number;
    g: number;
    b: number;
    hexString: string;
    alpha: number;
};
export declare function rgbToObject(rgb: string): {
    r: number;
    g: number;
    b: number;
    hexString: string;
    alpha: number;
};
//# sourceMappingURL=utils.d.ts.map