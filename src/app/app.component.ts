import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = `<p>Hello World!</p><p>Some initial <strong>bold</strong> text</p><p><br></p>`;
  editorConfig = { placeholder: 'Text here!' };
  tinyContent: string;
  constructor() { }

  onEditorCreated(quill) {
    console.log('onEditorCreated', quill);
  }

  onContentChanged({ html, text }) {
    console.log('onContentChanged', html, text);
  }

  onSave() {
    console.log(this.content);
  }


  /* Tinymce */
  onTinyContentChanged(e) {
    console.log(e);
    this.tinyContent = e;
  }

  onSaveTiny() {
    console.log(this.tinyContent);
  }
}
