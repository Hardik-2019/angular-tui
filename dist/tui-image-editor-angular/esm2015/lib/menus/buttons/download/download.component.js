import { Component, Input } from '@angular/core';
import { dataUrlToBlob } from '../../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class DownloadComponent {
    constructor() { }
    downloadImage() {
        if (this.imageChosen && this.imageEditor != null) {
            const dataURL = this.imageEditor.toDataURL();
            if (window.fetch) {
                fetch(dataURL)
                    .then((res) => res.blob())
                    .then((blob) => {
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.target = '_blank';
                    link.click();
                });
            }
            else {
                let blob = dataUrlToBlob(dataURL);
                var link = document.createElement('a');
                link.target = '_blank';
                link.href = window.URL.createObjectURL(blob);
                link.click();
            }
        }
    }
}
DownloadComponent.ɵfac = function DownloadComponent_Factory(t) { return new (t || DownloadComponent)(); };
DownloadComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DownloadComponent, selectors: [["tui-image-editor-menus-buttons-download"]], inputs: { imageChosen: "imageChosen", imageEditor: "imageEditor" }, decls: 6, vars: 3, consts: [[1, "tie-btn-download", "tui-image-editor-item", "help", "enabled", 3, "title", "click"], [1, "svg_ic-menu"], ["href", "#ic-file-download", 1, "normal", "use-default"], ["href", "#ic-file-download", 1, "active", "use-default"], ["href", "#ic-file-download", 1, "hover", "use-default"]], template: function DownloadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function DownloadComponent_Template_div_click_0_listener() { return ctx.downloadImage(); });
        i0.ɵɵpipe(1, "translate");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "svg", 1);
        i0.ɵɵelement(3, "use", 2);
        i0.ɵɵelement(4, "use", 3);
        i0.ɵɵelement(5, "use", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 1, "tui-image-editor-angular-menus-buttons-download"));
    } }, pipes: [i1.TranslatePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DownloadComponent, [{
        type: Component,
        args: [{
                selector: 'tui-image-editor-menus-buttons-download',
                templateUrl: './download.component.html',
                styleUrls: ['./download.component.css'],
            }]
    }], function () { return []; }, { imageChosen: [{
            type: Input
        }], imageEditor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdHVpLWltYWdlLWVkaXRvci1hbmd1bGFyL3NyYy9saWIvbWVudXMvYnV0dG9ucy9kb3dubG9hZC9kb3dubG9hZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90dWktaW1hZ2UtZWRpdG9yLWFuZ3VsYXIvc3JjL2xpYi9tZW51cy9idXR0b25zL2Rvd25sb2FkL2Rvd25sb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTy9DLE1BQU0sT0FBTyxpQkFBaUI7SUFJNUIsZ0JBQWUsQ0FBQztJQUVoQixhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO1lBQ2hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDN0MsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNoQixLQUFLLENBQUMsT0FBTyxDQUFDO3FCQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUN6QixJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDYixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNmLENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2Q7U0FDRjtJQUNILENBQUM7O2tGQTFCVSxpQkFBaUI7c0RBQWpCLGlCQUFpQjtRQ1I5Qiw4QkFJQztRQURDLDJGQUFTLG1CQUFlLElBQUM7O1FBRXpCLG1CQUF5QjtRQUF6Qiw4QkFBeUI7UUFDdkIseUJBQStEO1FBQy9ELHlCQUErRDtRQUMvRCx5QkFBOEQ7UUFDaEUsaUJBQU07UUFDUixpQkFBTTs7UUFUSiwrRkFBdUU7O3VGRE81RCxpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDO3NDQUVVLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkYXRhVXJsVG9CbG9iIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dWktaW1hZ2UtZWRpdG9yLW1lbnVzLWJ1dHRvbnMtZG93bmxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZG93bmxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kb3dubG9hZC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERvd25sb2FkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaW1hZ2VDaG9zZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGltYWdlRWRpdG9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGRvd25sb2FkSW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2VDaG9zZW4gJiYgdGhpcy5pbWFnZUVkaXRvciAhPSBudWxsKSB7XG4gICAgICBjb25zdCBkYXRhVVJMID0gdGhpcy5pbWFnZUVkaXRvci50b0RhdGFVUkwoKTtcbiAgICAgIGlmICh3aW5kb3cuZmV0Y2gpIHtcbiAgICAgICAgZmV0Y2goZGF0YVVSTClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuYmxvYigpKVxuICAgICAgICAgIC50aGVuKChibG9iKSA9PiB7XG4gICAgICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBibG9iID0gZGF0YVVybFRvQmxvYihkYXRhVVJMKTtcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgICAgIGxpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2XG4gIFt0aXRsZV09XCIndHVpLWltYWdlLWVkaXRvci1hbmd1bGFyLW1lbnVzLWJ1dHRvbnMtZG93bmxvYWQnIHwgdHJhbnNsYXRlXCJcbiAgY2xhc3M9XCJ0aWUtYnRuLWRvd25sb2FkIHR1aS1pbWFnZS1lZGl0b3ItaXRlbSBoZWxwIGVuYWJsZWRcIlxuICAoY2xpY2spPVwiZG93bmxvYWRJbWFnZSgpXCJcbj5cbiAgPHN2ZyBjbGFzcz1cInN2Z19pYy1tZW51XCI+XG4gICAgPHVzZSBocmVmPVwiI2ljLWZpbGUtZG93bmxvYWRcIiBjbGFzcz1cIm5vcm1hbCB1c2UtZGVmYXVsdFwiPjwvdXNlPlxuICAgIDx1c2UgaHJlZj1cIiNpYy1maWxlLWRvd25sb2FkXCIgY2xhc3M9XCJhY3RpdmUgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgICA8dXNlIGhyZWY9XCIjaWMtZmlsZS1kb3dubG9hZFwiIGNsYXNzPVwiaG92ZXIgdXNlLWRlZmF1bHRcIj48L3VzZT5cbiAgPC9zdmc+XG48L2Rpdj5cbiJdfQ==