# Fishing Joy Online

一个基于开源项目 `imtonyjaa/ggemu-fishing-joy` 改造的在线休闲捕鱼小游戏站。当前版本保留原始 WebGL 捕鱼玩法，并把原本的裸游戏页面整理成适合上线部署的静态网站结构，补齐了基础 SEO、合规页面、广告位占位和 AdSense 接入预留。

## 项目内容

- 首页：站点介绍、入口与内容位占位
- 游戏页：独立游戏容器、操作说明、FAQ、推荐游戏占位区和页脚
- 关于页：说明站点定位与开源来源
- 隐私政策页：为上线与广告审核准备的基础模板
- 服务条款页：站点使用规则与免责声明
- 联系页：站点运营者联系信息占位
- 许可证页：保留 MIT License 与原作者版权说明
- `ads.txt`：AdSense 要求的占位文件

## 项目结构

```text
.
├── about/
├── contact/
├── css/
├── game/
├── images/
├── js/
├── robots.txt
├── sitemap.xml
├── privacy/
├── src/
├── terms/
├── ads.txt
├── index.html
├── license.html
└── LICENSE
```

## 本地运行

这是一个纯静态站点，不需要安装构建依赖。

### 方法一：Python

```bash
python3 -m http.server 4173
```

然后访问：

- `http://localhost:4173/`
- `http://localhost:4173/game/`

### 方法二：任意静态服务器

例如 VS Code Live Server、`npx serve`、Nginx、Caddy、Cloudflare Pages 本地预览都可以。

## 部署方式

### GitHub Pages

1. 将仓库推送到 GitHub。
2. 在仓库 `Settings -> Pages` 中选择部署分支，例如 `main`。
3. Root 目录直接发布即可，不需要构建命令。
4. 仓库已包含 `.nojekyll`，可避免 GitHub Pages 对静态资源路径做不必要处理。
4. 如果你使用 GitHub 项目页而不是自定义域名，建议上线后统一检查一次页面 canonical URL 和联系邮箱占位是否已替换。

### Cloudflare Pages

1. 在 Cloudflare Pages 中导入该仓库。
2. Build command 留空。
3. Output directory 设为 `.`。
4. 直接部署为静态站点即可。

## AdSense 接入步骤

当前代码只做了安全占位，没有写入真实广告代码。

1. 在所有页面 `<head>` 中已经预留了 AdSense 脚本注释块。
2. 上线后，将 `pub-XXXXXXXXXXXXXXXX` 替换为你的真实 AdSense Publisher ID。
3. 将注释中的 AdSense `<script>` 解开，并确保使用真实域名。
4. 根据你的广告策略，把真实广告单元代码填入现有广告占位区域。
5. 不要把广告紧贴游戏画布、开始按钮、继续按钮、关闭按钮或其他高频操作位置。

## ads.txt 设置说明

仓库根目录已新增：

```text
ads.txt
```

当前内容为占位：

```text
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

上线后你必须把 `pub-XXXXXXXXXXXXXXXX` 替换成自己的真实 Publisher ID，再确保网站根路径下可以直接访问：

```text
https://oceanarcadegame.com/ads.txt
```

## SEO 基础文件

- `robots.txt` 已添加站点地图入口占位
- `sitemap.xml` 已添加基础页面清单占位
- 当前示例域名已更新为 `https://oceanarcadegame.com`

## 开源许可证说明

- 原项目包含 `LICENSE` 文件
- 当前许可证为 MIT License
- 请保留原作者版权声明，不要删除 LICENSE 文件
- 页面 footer 和 `license.html` 页面中已保留开源来源与许可证说明
- 由于仓库根目录已经存在 `LICENSE` 文件，站点说明页使用 `license.html` 路径承载许可证内容

## 注意事项

- 不要诱导用户点击广告
- 不要自己点击自己网站上的广告
- 不要让广告紧贴游戏区域
- 建议保持广告位与游戏区域至少 150px 的安全距离
- 正式上线前，请确认 `oceanarcadegame.com` 已正确解析、联系邮箱可用，并填入真实 AdSense Publisher ID

## 上线前需要手动替换的内容

- 如有需要，继续微调 `https://oceanarcadegame.com/...` 相关 canonical 和 Open Graph URL
- `hello@oceanarcadegame.com` 邮箱是否已真实可用
- `pub-XXXXXXXXXXXXXXXX` AdSense Publisher ID
- 如果你计划使用真实广告单元，还需要把广告占位块替换成实际广告代码

## 致谢

本项目游戏部分基于：

- [imtonyjaa/ggemu-fishing-joy](https://github.com/imtonyjaa/ggemu-fishing-joy)

请在继续分发或二次开发时遵循原项目 MIT License。
