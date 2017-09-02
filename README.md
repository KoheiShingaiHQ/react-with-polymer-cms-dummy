# Customizing Create React App : *CSS*

## CSS → Sass
Getting started customizing `polyreact` .

### Install npm module : *node-sass-chokidar*
```bash
# Current path : ~/polyreact
npm install node-sass-chokidar --save-dev
```

### Install npm module : *npm-run-all*
```bash
# Current path : ~/polyreact
npm install npm-run-all --save-dev
```

### Edit package.json : *script*
```diff
# Current path : ~/polyreact/package.json
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build": "npm run build-css && react-scripts build",
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
```

### Add custom sass file to the project
```sass
/* File path : ~/polyreact/src/Custom.sass */
body
  background: powderblue
```

```diff
# File path : ~/polyreact/src/App.js
import './App.css';
+ import './Custom.css'
```

→ Running `npm start` compiles `.sass` files to `.css` under `/src` directory.  
→ Open http://localhost:3000 to see `polyreact` .

![create-react-app-with-sass-screen-shot](https://c1.staticflickr.com/5/4465/36878306283_8811ec8516_b.jpg)