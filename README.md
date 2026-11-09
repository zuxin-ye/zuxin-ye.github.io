# Zuxin Ye 的个人学术主页

参考 [Haodong Yan 的个人网站](https://haodong-yan.github.io/#education) 的信息架构与简洁学术主页风格制作。已填写姓名、身份、机构、所在地、邮箱和 GitHub；其余栏目明确标注待补充。没有复制参考站的文字、头像或论文资料。

## 后续补充内容

直接编辑 `index.html`，完善 Research、Biography、News、Selected Publications、Education、Experience & Awards、Interests。把头像图片放在本文件夹，例如 `portrait.jpg`，然后将头像占位区改为 `<img src="./portrait.jpg" alt="Zuxin Ye">`。把简历 PDF 放在同一文件夹，并将 CV 占位文字改为实际链接，例如 `<a href="./cv.pdf">CV</a>`。Google Scholar 链接准备好后也可添加。

## 本地预览

在本文件夹运行 `python3 -m http.server 8000`，然后打开 `http://localhost:8000`。也可以直接双击 `index.html`。

## 从当前仓库部署到 GitHub Pages

你的 GitHub 用户名是 `zuxin379`，截图中的仓库名是 `zuxin-ye.github.io`。GitHub Pages 对这两种名称给出的地址不同：

- 保留当前仓库名：`https://zuxin379.github.io/zuxin-ye.github.io/`
- 将仓库改名为 `zuxin379.github.io`：`https://zuxin379.github.io/`（推荐，符合你想要的个人主页地址）

### 1. 如需主页地址，先改名

在当前仓库打开 `Settings → General`，找到 `Repository name`，改为 `zuxin379.github.io`，点击 `Rename`。仓库尚为空，现在改名最简单。

### 2. 上传网站文件

**先解压 `personal-site.zip`，不要把 ZIP 本身上传。** 打开解压后的 `personal-site` 文件夹，选中其中的 `index.html`、`style.css`、`script.js`、`README.md`。在 GitHub 仓库首页点击截图中的蓝色 `uploading an existing file` 链接，或点击 `Add file → Upload files`，把这四个文件拖进去，提交到 `main` 分支。上传后仓库首页应直接列出 `index.html`、`style.css`、`script.js`，而不是只看到 `personal-site` 子文件夹。以后添加头像或简历，也上传到相同位置。

### 3. 开启 GitHub Pages

打开仓库 `Settings → Pages`，在 `Build and deployment` 中设置 `Source: Deploy from a branch`，选择 `main` 和 `/ (root)`，点击 `Save`。仓库主页应有根目录下的 `index.html`。部署状态可在 `Settings → Pages` 或 `Actions` 查看。

## 后续如何修改

- **只改几句话：** 在 GitHub 打开 `index.html`，点击右上方铅笔图标，修改后点击 `Commit changes`，提交到 `main`。网站会随提交重新发布。
- **改布局、颜色或交互：** 分别修改 `style.css` 或 `script.js`，以同样方式提交。
- **在电脑上修改：** 下载或克隆仓库，在本地编辑文件并预览，之后用 GitHub Desktop 或 `git add .`、`git commit`、`git push` 提交。请保持本地和 GitHub 上的文件同步，避免用旧版本覆盖新修改。
- **以后让我帮你改：** 给我新的文字、图片或需求，我会更新这套源文件；你再上传更改后的对应文件即可。

如果以后使用自己的域名，可在 `Settings → Pages → Custom domain` 设置，并按照 GitHub 官方文档配置 DNS。此站点是纯 HTML/CSS/JavaScript，部署到 GitHub Pages 不需要 Netlify 或额外构建步骤。
