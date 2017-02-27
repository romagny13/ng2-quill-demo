# Quill edtitor component with Angular 2

## Usage

```
npm i
ng serve
```
go http://localhost:4200/


## Memento

```
npm i quill -S
```

- <a href="http://quilljs.com/">Quill</a>
- <a href="https://github.com/surmon-china/ng2-quill-editor">Source</a>


## Tinymce

<a href="https://www.tinymce.com/docs/integrations/angular2/">documentation</a>

```
npm i tinymce -S
```

copy tinymce/skins to assets

angular-cli.json
```
"scripts": [
    "../node_modules/tinymce/tinymce.js",
    "../node_modules/tinymce/themes/modern/theme.js",
    "../node_modules/tinymce/plugins/link/plugin.js",
    "../node_modules/tinymce/plugins/paste/plugin.js",
    "../node_modules/tinymce/plugins/table/plugin.js"
],
```