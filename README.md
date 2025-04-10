
# Icons used from icons8

## Code
<a target="_blank" href="https://icons8.com/icon/20909/html-5">HTML</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> <br>
<a target="_blank" href="https://icons8.com/icon/21278/css3">CSS</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
<a target="_blank" href="https://icons8.com/icon/108784/javascript">Js</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
<a target="_blank" href="https://icons8.com/icon/uJM6fQYqDaZK/typescript">TypeScript</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
<a target="_blank" href="https://icons8.com/icon/PndQWK6M1Hjo/bootstrap">Bootstrap</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
<a target="_blank" href="https://icons8.com/icon/QBqFNfPPB2Kx/sass">Sass</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
<a target="_blank" href="https://icons8.com/icon/NfbyHexzVEDk/react">React</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>

## Design
<a target="_blank" href="https://icons8.com/icon/zfHRZ6i1Wg0U/figma">Figma</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
<a target="_blank" href="https://icons8.com/icon/13631/adobe-illustrator">Adobe Illustrator</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
<a target="_blank" href="https://icons8.com/icon/NeNPFdj7MzXi/adobe-photoshop">Adobe Photoshop</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
<a target="_blank" href="https://icons8.com/icon/13675/adobe-indesign">Adobe Indesign</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>


## Footer
<a target="_blank" href="https://icons8.com/icon/98960/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
<a target="_blank" href="https://icons8.com/icon/62856/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a<br>

<a target="_blank" href="https://icons8.com/icon/78382/phone">Phone</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
<a target="_blank" href="https://icons8.com/icon/86875/mail">Mail</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
<a target="_blank" href="https://icons8.com/icon/85149/location">Location</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>






# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

