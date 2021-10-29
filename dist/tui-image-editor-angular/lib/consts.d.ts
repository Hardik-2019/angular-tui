export declare enum zoomModes {
    DEFAULT = "normal",
    ZOOM = "zoom",
    HAND = "hand"
}
export declare enum eventNames {
    OBJECT_ACTIVATED = "objectActivated",
    OBJECT_MOVED = "objectMoved",
    OBJECT_SCALED = "objectScaled",
    OBJECT_CREATED = "objectCreated",
    OBJECT_ROTATED = "objectRotated",
    OBJECT_ADDED = "objectAdded",
    OBJECT_MODIFIED = "objectModified",
    TEXT_EDITING = "textEditing",
    TEXT_CHANGED = "textChanged",
    ICON_CREATE_RESIZE = "iconCreateResize",
    ICON_CREATE_END = "iconCreateEnd",
    ADD_TEXT = "addText",
    ADD_OBJECT = "addObject",
    ADD_OBJECT_AFTER = "addObjectAfter",
    MOUSE_DOWN = "mousedown",
    MOUSE_UP = "mouseup",
    MOUSE_MOVE = "mousemove",
    REDO_STACK_CHANGED = "redoStackChanged",
    UNDO_STACK_CHANGED = "undoStackChanged",
    SELECTION_CLEARED = "selectionCleared",
    SELECTION_CREATED = "selectionCreated",
    EXECUTE_COMMAND = "executeCommand",
    AFTER_UNDO = "afterUndo",
    AFTER_REDO = "afterRedo",
    ZOOM_CHANGED = "zoomChanged",
    HAND_STARTED = "handStarted",
    HAND_STOPPED = "handStopped",
    KEY_DOWN = "keydown",
    KEY_UP = "keyup"
}
export declare enum commandNames {
    TEXT = "Text",
    MASK = "Image",
    CROP = "Crop",
    DRAW = "Draw",
    ICON = "Icon",
    LOAD = "Load",
    SHAPE = "Shape",
    CLEAR_OBJECTS = "clearObjects",
    LOAD_IMAGE = "loadImage",
    FLIP_IMAGE = "flip",
    ROTATE_IMAGE = "rotate",
    ADD_OBJECT = "addObject",
    REMOVE_OBJECT = "removeObject",
    APPLY_FILTER = "applyFilter",
    REMOVE_FILTER = "removeFilter",
    ADD_ICON = "addIcon",
    CHANGE_ICON_COLOR = "changeIconColor",
    ADD_SHAPE = "addShape",
    CHANGE_SHAPE = "changeShape",
    ADD_TEXT = "addText",
    CHANGE_TEXT = "changeText",
    CHANGE_TEXT_STYLE = "changeTextStyle",
    ADD_IMAGE_OBJECT = "addImageObject",
    RESIZE_CANVAS_DIMENSION = "resizeCanvasDimension",
    SET_OBJECT_PROPERTIES = "setObjectProperties",
    SET_OBJECT_POSITION = "setObjectPosition",
    CHANGE_SELECTION = "changeSelection"
}
export declare enum historyNames {
    LOAD_IMAGE = "Load",
    LOAD_MASK_IMAGE = "Mask",
    ADD_MASK_IMAGE = "Mask",
    ADD_IMAGE_OBJECT = "Mask",
    CROP = "Crop",
    APPLY_FILTER = "Apply filter",
    REMOVE_FILTER = "Remove filter",
    CHANGE_SHAPE = "Shape",
    CHANGE_ICON_COLOR = "Icon",
    ADD_TEXT = "Text",
    CHANGE_TEXT_STYLE = "Text",
    REMOVE_OBJECT = "Delete",
    CLEAR_OBJECTS = "Delete"
}
export declare enum filterType {
    VINTAGE = "vintage",
    SEPIA2 = "sepia2",
    REMOVE_COLOR = "removeColor",
    COLOR_FILTER = "colorFilter",
    REMOVE_WHITE = "removeWhite",
    BLEND_COLOR = "blendColor",
    BLEND = "blend",
    TINT = "tint",
    MULTIPLY = "multiply",
    BLEND_OR_TINT_OR_MULTIPLY = "blend_tint_multiply",
    REMOVE_COLOR_OR_WHITE = "removeColor_removeWhite",
    BRIGHTNESS = "brightness",
    NOISE = "noise",
    PIXELATE = "pixelate",
    SHARPEN = "sharpen",
    INVERT = "invert",
    EMBOSS = "emboss",
    SEPIA = "sepia",
    GRAYSCALE = "grayscale",
    BLUR = "blur"
}
export declare enum drawingModes {
    NORMAL = "NORMAL",
    CROPPER = "CROPPER",
    FREE_DRAWING = "FREE_DRAWING",
    LINE_DRAWING = "LINE_DRAWING",
    TEXT = "TEXT",
    SHAPE = "SHAPE",
    ICON = "ICON",
    ZOOM = "ZOOM"
}
export declare const defaultIconPath: {
    'icon-arrow': string;
    'icon-arrow-2': string;
    'icon-arrow-3': string;
    'icon-star': string;
    'icon-star-2': string;
    'icon-polygon': string;
    'icon-location': string;
    'icon-heart': string;
    'icon-bubble': string;
};
export declare enum cropModes {
    PRESET_SQUARE = "preset-square",
    PRESET_3_2 = "preset-3-2",
    PRESET_4_3 = "preset-4-3",
    PRESET_5_4 = "preset-5-4",
    PRESET_7_5 = "preset-7-5",
    PRESET_16_9 = "preset-16-9",
    PRESET_NONE = "preset-none"
}
export declare const defaultColors: string[];
export declare enum objectTypes {
    icon = "icon",
    image = "image",
    itext = "i-text",
    text = "text",
    straightLine = "line",
    line = "path",
    shapeRect = "rect",
    shapeCircle = "circle",
    shapeTriangle = "triangle"
}
//# sourceMappingURL=consts.d.ts.map