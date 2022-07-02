# Icon Automation Workflow Using Figma

It's a repository for [Figma Icon Automation Plugin](https://github.com/leadream/figma-icon-automation).

## Development
Create a `.env` in the root directory. Put your Figma file url and Figma token inside.

```
FIGMA_FILE_URL=https://www.figma.com/file/********************/xxxx
FIGMA_TOKEN=********************************
```

### fetch SVG file
Run `yarn fetch` to fetch SVG files from Figma file. This will pull your SVGs in `./src/svg/`.

### generate React components for icons
Run `yarn generate` to generate component files from SVG files. This will pull your component files in `./src/icons/`.

### Develop in local
Run `yarn dev` to develop the application in which you can see all icons.

### Develop in local
Run `yarn build` to build Pages.


### 注意事项
1.图标一般有描边（stroke）和填充（fill）两种样式，一个图标只能采用一种形式，不可以混合。想要转为 fill 样式，你可以使用 Outline Stroke 将图标转换为填充形状。
2.图标命名请使用英文（不可以含 /），因为这些命名最终会变为代码中的命名。同时，你可以通过给命名添加 -fill 或 -stroke 后缀来区别它们的样式，GitHub Actions 会根据这个后缀生成对应的代码。
