import {
    Component,
    OnDestroy,
    AfterViewInit,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

declare let tinymce: any;

@Component({
    selector: 'app-tinymce',
    template: `<textarea id="{{elementId}}"></textarea>`
})
export class TinymceComponent implements AfterViewInit, OnDestroy {
    editor: any;
    content: any;
    @Input() elementId: String;
    @Output() change = new EventEmitter<any>();

    ngAfterViewInit() {
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            setup: editor => {
                this.editor = editor;
                editor.on('keyup change', () => {
                    this.content = editor.getContent();
                    this.change.emit(this.content);
                });
            },
        });
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}
