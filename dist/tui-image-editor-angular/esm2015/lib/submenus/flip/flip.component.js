import { __awaiter } from "tslib";
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class FlipComponent {
    constructor() { }
    flipX() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ((_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.flipX());
            }
            catch (_err) {
                console.error(_err);
            }
        });
    }
    flipY() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ((_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.flipY());
            }
            catch (_err) {
                console.error(_err);
            }
        });
    }
    resetFlip() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ((_a = this.imageEditor) === null || _a === void 0 ? void 0 : _a.resetFlip());
            }
            catch (_err) {
                console.error(_err);
            }
        });
    }
}
FlipComponent.ɵfac = function FlipComponent_Factory(t) { return new (t || FlipComponent)(); };
FlipComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FlipComponent, selectors: [["tui-image-editor-submenus-flip"]], inputs: { imageEditor: "imageEditor" }, decls: 30, vars: 9, consts: [[1, "tui-image-editor-menu-flip"], [1, "tie-flip-button", "tui-image-editor-submenu-item", "tui-image-editor-d-flex", "tui-image-editor-flex-row", "tui-image-editor-align-items-center", "tui-image-editor-justify-content-center", "tui-image-editor-my-3"], [1, "tui-image-editor-button", "flipX", 3, "click"], [1, "svg_ic-submenu"], [0, "xlink", "href", "#ic-flip-x", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-flip-x", 1, "active", "use-default"], [1, "tui-image-editor-button", "flipY", 3, "click"], [0, "xlink", "href", "#ic-flip-y", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-flip-y", 1, "active", "use-default"], [1, "tui-image-editor-partition"], [1, "tui-image-editor-button", "resetFlip", 3, "click"], [0, "xlink", "href", "#ic-flip-reset", 1, "normal", "use-default"], [0, "xlink", "href", "#ic-flip-reset", 1, "active", "use-default"]], template: function FlipComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵlistener("click", function FlipComponent_Template_div_click_3_listener() { return ctx.flipX(); });
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(5, "svg", 3);
        i0.ɵɵelement(6, "use", 4);
        i0.ɵɵelement(7, "use", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(8, "label");
        i0.ɵɵtext(9);
        i0.ɵɵpipe(10, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 6);
        i0.ɵɵlistener("click", function FlipComponent_Template_div_click_11_listener() { return ctx.flipY(); });
        i0.ɵɵelementStart(12, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(13, "svg", 3);
        i0.ɵɵelement(14, "use", 7);
        i0.ɵɵelement(15, "use", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(16, "label");
        i0.ɵɵtext(17);
        i0.ɵɵpipe(18, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 9);
        i0.ɵɵelement(20, "div");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵelementStart(22, "div", 10);
        i0.ɵɵlistener("click", function FlipComponent_Template_div_click_22_listener() { return ctx.resetFlip(); });
        i0.ɵɵelementStart(23, "div");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(24, "svg", 3);
        i0.ɵɵelement(25, "use", 11);
        i0.ɵɵelement(26, "use", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(27, "label");
        i0.ɵɵtext(28);
        i0.ɵɵpipe(29, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 3, "tui-image-editor-angular-submenus-flip-x"), " ");
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(18, 5, "tui-image-editor-angular-submenus-flip-y"), " ");
        i0.ɵɵadvance(11);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(29, 7, "tui-image-editor-angular-submenus-flip-reset"), " ");
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlipComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-submenus-flip',
                templateUrl: './flip.component.html',
                styleUrls: ['./flip.component.css'],
            }]
    }], function () { return []; }, { imageEditor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9zdWJtZW51cy9mbGlwL2ZsaXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvc3VibWVudXMvZmxpcC9mbGlwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBT3pELE1BQU0sT0FBTyxhQUFhO0lBR3hCLGdCQUFlLENBQUM7SUFFVixLQUFLOzs7WUFDVCxJQUFJO2dCQUNGLGFBQU0sSUFBSSxDQUFDLFdBQVcsMENBQUUsS0FBSyxHQUFFLENBQUM7YUFDakM7WUFBQyxPQUFPLElBQUksRUFBRTtnQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JCOztLQUNGO0lBRUssS0FBSzs7O1lBQ1QsSUFBSTtnQkFDRixhQUFNLElBQUksQ0FBQyxXQUFXLDBDQUFFLEtBQUssR0FBRSxDQUFDO2FBQ2pDO1lBQUMsT0FBTyxJQUFJLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjs7S0FDRjtJQUVLLFNBQVM7OztZQUNiLElBQUk7Z0JBQ0YsYUFBTSxJQUFJLENBQUMsV0FBVywwQ0FBRSxTQUFTLEdBQUUsQ0FBQzthQUNyQztZQUFDLE9BQU8sSUFBSSxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7O0tBQ0Y7OzBFQTNCVSxhQUFhO2tEQUFiLGFBQWE7UUNQMUIsOEJBQXdDO1FBQ3RDLDhCQUVDO1FBQ0MsMkJBQUs7UUFDSCw4QkFBNkQ7UUFBbEIsdUZBQVMsV0FBTyxJQUFDO1FBQzFELDJCQUFLO1FBQ0gsbUJBQTRCO1FBQTVCLDhCQUE0QjtRQUMxQix5QkFBOEQ7UUFDOUQseUJBQThEO1FBQ2hFLGlCQUFNO1FBQ1IsaUJBQU07UUFDTixvQkFBTztRQUFQLDZCQUFPO1FBQ0wsWUFDRjs7UUFBQSxpQkFBUTtRQUNWLGlCQUFNO1FBQ04sK0JBQTZEO1FBQWxCLHdGQUFTLFdBQU8sSUFBQztRQUMxRCw0QkFBSztRQUNILG1CQUE0QjtRQUE1QiwrQkFBNEI7UUFDMUIsMEJBQThEO1FBQzlELDBCQUE4RDtRQUNoRSxpQkFBTTtRQUNSLGlCQUFNO1FBQ04sb0JBQU87UUFBUCw4QkFBTztRQUNMLGFBQ0Y7O1FBQUEsaUJBQVE7UUFDVixpQkFBTTtRQUNSLGlCQUFNO1FBQ04sK0JBQXdDO1FBQ3RDLHVCQUFXO1FBQ2IsaUJBQU07UUFDTiw0QkFBSztRQUNILGdDQUFxRTtRQUF0Qix3RkFBUyxlQUFXLElBQUM7UUFDbEUsNEJBQUs7UUFDSCxtQkFBNEI7UUFBNUIsK0JBQTRCO1FBQzFCLDJCQUFrRTtRQUNsRSwyQkFBa0U7UUFDcEUsaUJBQU07UUFDUixpQkFBTTtRQUNOLG9CQUFPO1FBQVAsOEJBQU87UUFDTCxhQUNGOztRQUFBLGlCQUFRO1FBQ1YsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O1FBaENJLGVBQ0Y7UUFERSxrR0FDRjtRQVVFLGVBQ0Y7UUFERSxrR0FDRjtRQWVFLGdCQUNGO1FBREUsc0dBQ0Y7O3VGRGxDSyxhQUFhO2NBTHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNwQztzQ0FFVSxXQUFXO2tCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R1aS1pbWFnZS1lZGl0b3Itc3VibWVudXMtZmxpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mbGlwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmxpcC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZsaXBDb21wb25lbnQge1xuICBASW5wdXQoKSBpbWFnZUVkaXRvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBhc3luYyBmbGlwWCgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5pbWFnZUVkaXRvcj8uZmxpcFgoKTtcbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKF9lcnIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZsaXBZKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmltYWdlRWRpdG9yPy5mbGlwWSgpO1xuICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoX2Vycik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVzZXRGbGlwKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmltYWdlRWRpdG9yPy5yZXNldEZsaXAoKTtcbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKF9lcnIpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInR1aS1pbWFnZS1lZGl0b3ItbWVudS1mbGlwXCI+XG4gIDxkaXZcbiAgICBjbGFzcz1cInRpZS1mbGlwLWJ1dHRvbiB0dWktaW1hZ2UtZWRpdG9yLXN1Ym1lbnUtaXRlbSB0dWktaW1hZ2UtZWRpdG9yLWQtZmxleCB0dWktaW1hZ2UtZWRpdG9yLWZsZXgtcm93IHR1aS1pbWFnZS1lZGl0b3ItYWxpZ24taXRlbXMtY2VudGVyIHR1aS1pbWFnZS1lZGl0b3ItanVzdGlmeS1jb250ZW50LWNlbnRlciB0dWktaW1hZ2UtZWRpdG9yLW15LTNcIlxuICA+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiBmbGlwWFwiIChjbGljayk9XCJmbGlwWCgpXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtZmxpcC14XCIgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1mbGlwLXhcIiBjbGFzcz1cImFjdGl2ZSB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHt7IFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWZsaXAteFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiBmbGlwWVwiIChjbGljayk9XCJmbGlwWSgpXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInN2Z19pYy1zdWJtZW51XCI+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWMtZmxpcC15XCIgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1mbGlwLXlcIiBjbGFzcz1cImFjdGl2ZSB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIHt7IFwidHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLXN1Ym1lbnVzLWZsaXAteVwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidHVpLWltYWdlLWVkaXRvci1wYXJ0aXRpb25cIj5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0dWktaW1hZ2UtZWRpdG9yLWJ1dHRvbiByZXNldEZsaXBcIiAoY2xpY2spPVwicmVzZXRGbGlwKClcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwic3ZnX2ljLXN1Ym1lbnVcIj5cbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1mbGlwLXJlc2V0XCIgY2xhc3M9XCJub3JtYWwgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpYy1mbGlwLXJlc2V0XCIgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICB7eyBcInR1aS1pbWFnZS1lZGl0b3ItYW5ndWxhci1zdWJtZW51cy1mbGlwLXJlc2V0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19