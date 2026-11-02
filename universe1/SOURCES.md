# UNIVERSE1 · 素材、署名与科学说明

本项目的贴图、影像和模型均保存于本地。程序运行时不依赖外部素材服务。

## 行星贴图

**Solar System Scope / INOVE — CC BY 4.0**
- 原始发布页：https://www.solarsystemscope.com/textures/
- 许可：https://creativecommons.org/licenses/by/4.0/
- 使用仓库已有的 `public/textures/2k_*.jpg` 和 `2k_saturn_ring_alpha.png`：太阳、水星、金星大气、地球昼面/夜灯/云层、月球、火星、木星、土星、天王星、海王星。
- `mercurybump.jpg`、`marsbump1k.jpg`、`moonbump1k.jpg` 与 `cosmos/earth-normal.jpg` 是仓库已有的地形辅助图。行星表面的可见颜色来自上述 Solar System Scope 地图。
- 基于探测数据的经纬投影地图，部分未测绘区域由原作者补全；并非所有像素均为航天器直接摄影。地球夜灯显示用于识别夜侧，不是实时灯光观测。
- 项目以 Three.js 高细分球面、独立土星环、地球云层/大气和地形凹凸组成三维天体。比邻星、天狼星使用太阳贴图并调整颜色作艺术示意，不声称其表面已被如此分辨。

## NASA 原始三维模型

发布仓库：https://github.com/nasa/NASA-3D-Resources

1. **贝努小行星**：`3D Models/1999 RQ36 asteroid/1999 RQ36 asteroid.glb`，本地 `bennu.glb`，原始文件 329,596 字节。仅在运行时居中和等比缩放；无外加虚构几何。
2. **旅行者探测器**：`3D Models/Voyager Probe (B)/Voyager Probe (B).glb`，本地 `voyager.glb`，原始文件 1,720,864 字节。原始网格、贴图、Draco 压缩保留；使用随 Three.js 提供的本地 Draco 解码器。
3. **涡状星系**：`3D Printing/Whirlpool Galaxy/Whirlpool Galaxy (part 1).7z` 与 `(part 2).7z` 中的两个原始 STL。经 `scripts/universe1/convert-galaxy.mjs` 合并为 `whirlpool-nasa.glb`；使用 meshoptimizer 简化网格以供浏览器展示。两部分使用蓝色和暖金色区分，颜色不是原始天文测量。此为触觉打印浮雕，其高度不是星系真实的三维厚度。可在涡状星系档案中切换“NASA 三维浮雕模型”。

NASA 使用说明：https://www.nasa.gov/nasa-brand-center/images-and-media/
署名 **NASA 3D Resources**。不暗示 NASA 对本项目的认可；NASA 标识及个别作品可能有单独限制。

Draco 解码库（`draco/`）：Google Draco，Apache-2.0；由 Three.js examples 分发。https://github.com/google/draco

## 天文影像

- **仙女座星系 / M31**：Adam Evans, “Andromeda Galaxy (with h-alpha)”。CC BY 2.0。原始来源及许可：https://commons.wikimedia.org/wiki/File:Andromeda_Galaxy_(with_h-alpha).jpg 。许可：https://creativecommons.org/licenses/by/2.0/ 。本地重新缩放/压缩为 `andromeda.jpg`，运行时取样为三维星点并叠加原影像；重建深度为展示用，不是实测星系厚度。
- **涡状星系 / M51**，`whirlpool.jpg`：NASA, ESA, S. Beckwith (STScI), and The Hubble Heritage Team (STScI/AURA)。https://esahubble.org/images/heic0506a/
- **三角座星系 / M33**，`triangulum.jpg`：NASA, ESA, M. Durbin, J. Dalcanton, B. F. Williams (University of Washington)。https://esahubble.org/images/heic1901a/
- **草帽星系 / M104**，`sombrero.jpg`：NASA/ESA and The Hubble Heritage Team (STScI/AURA)。https://esahubble.org/images/opo0328a/
- **猎户座星云 / M42**，`orion.jpg`：NASA, ESA, M. Robberto (STScI/ESA) and the Hubble Space Telescope Orion Treasury Project Team。https://esahubble.org/images/heic0601a/
- **银河系结构缩略图**，`milkyway.jpg`：ESO / NASA / JPL-Caltech / M. Kornmesser / R. Hurt。为艺术结构图，不是从银河系外拍摄的照片。https://www.eso.org/public/images/eso1339e/

ESA/Hubble 使用说明：https://esahubble.org/copyright/
ESO 使用说明：https://www.eso.org/public/outreach/copyright/
影像在 Three.js 中进行粒子取样、三维深度示意、平面叠加与视角变换，原始科学图像的颜色可能因显示与混合方式有所变化。

## 科学资料

- NASA Solar System：https://science.nasa.gov/solar-system/
- NASA planets：https://science.nasa.gov/solar-system/planets/
- NASA Galaxies：https://science.nasa.gov/universe/galaxies/
- NASA Local Group：https://imagine.gsfc.nasa.gov/features/cosmic/local_group_info.html
- Tully et al. 2014, *The Laniakea supercluster of galaxies*：https://www.nature.com/articles/nature13674

每个天体档案内另有对应资料链接。数值取近似值，不同观测和定义可能得到不同数值。行星温度为参考温度，对气态巨行星依赖所取的大气层高度，不能理解为固体表面温度。

## 比例与建构边界

- 太阳系特写显示真实贴图和表面特征；全景中半径放大，轨道距离压缩，不是统一比例模型，不是真实日期的星历。
- 自转是演示动画，可暂停/改变速度，不代表各天体真实自转速率。太阳系轨道线是圆形导视，未计算椭圆轨道、倾角或摄动。
- 尺寸对比按真实平均半径等比例绘制，不计光环。差异极大时小天体会非常小，这是比例本身的结果。
- 银河系旋臂、恒星标记、卫星星系展示位置以及星系群布局均为示意。标记不等同于完整恒星坐标表。
- M51 和 M104 位于本星系群之外；“星系与星系群”是天体展示层级，不表示全部收录对象都是本星系群成员。
- 宇宙网采用程序化结构展示丝状体、节点和空洞，不是实际巡天数据。超星系团不必整体引力束缚。
- 可观测宇宙的半径涉及空间膨胀，不等于宇宙年龄乘以光速。宇宙网场景的外框是导视边界，不是实测宇宙边界。

## 2026-10-19：逐层天体目录扩展

### NASA 系外行星档案

`src/universe1/exoplanets.json` 是 2026-10-19 从 NASA Exoplanet Archive 的 `pscomppars` 综合参数表下载的 17 颗确认行星快照。字段包括名称、宿主、半径、轨道周期、半长轴、发现年份与方法、系统距离和恒星温度。采集脚本为 `scripts/universe1/fetch-details.py`。

- 数据入口：https://exoplanetarchive.ipac.caltech.edu/
- 查询服务：https://exoplanetarchive.ipac.caltech.edu/TAP/
- TRAPPIST-1 b–h、Proxima Cen b、Kepler-186 f、Kepler-452 b、51 Peg b、HD 209458 b、HD 189733 b、55 Cnc e、Kepler-16 b、TOI-700 d/e。
- 综合表可能包含依模型推算的参数。对本目录中不凌日的 Proxima Cen b 和 51 Peg b，半径明确标为估计值，不放入实测半径对比。
- 系外行星表面使用已有 Solar System Scope 贴图作材质类比，**不是这些行星的真实地表地图**。实际表面、大气、生命和海洋不能由这些渲染外观推断。档案与三维视图均显示说明。
- M51-ULS-1b 单独标为“候选 · 未确认”，不计入确认行星数。来源：https://chandra.si.edu/photo/2021/m51/index.html 。

### 卫星与矮行星地图

从 CelestiaProject/CelestiaContent 官方仓库的 `textures/hires/` 下载；每个原始文件通过 Git blob SHA-1 校验。文件 URL 见 `maps/origins.json`；原始作者和探测数据署名全文保存在 `maps/CELESTIA-README.txt` 与逐文件 `.license` 中。

使用的 13 张地图：木卫一、木卫二、木卫三、木卫四、土卫六、土卫二、土卫五、土卫八、海卫一、火卫一、火卫二、冥王星、冥卫一。经 `prepare-moon-maps.mjs` 等比缩至最多 2048 像素宽并转换/压缩为 JPEG，未自行绘制替代地貌。未观测区域可能由原作者填补。火卫一、火卫二的不规则形状仍采用球面简化，页面已说明。

- 官方仓库：https://github.com/CelestiaProject/CelestiaContent
- 原作者说明：[Celestia README](maps/CELESTIA-README.txt)
- 木卫一：ItzImcool、AstroChara；NASA/JPL-Caltech/ASI/USGS、NASA/JPL/SwRI/MSSS、Gerald Eichstädt、Jason Perry、John Rogers。CC BY 4.0，见 [io.license](maps/io.license)。
- 木卫三：Askaniy Anpilogov；NASA/JPL-Caltech/ASI/USGS、Björn Jónsson、Brian Swift。CC BY 3.0，见 [ganymede.license](maps/ganymede.license)。
- 土卫六：Askaniy Anpilogov、Pedro Garcia、AstroChara；Martonchik & Orton、Karkoschka et al.、Seignovert et al.、NASA/JPL-Caltech/ASI/USGS 与 Caltech-JPL/Univ. of Arizona/LPG-Univ. of Nantes-CNRS。CC BY 3.0，见 [titan.license](maps/titan.license)。这是云下地表制图，渲染另加半透明大气示意。
- 海卫一：Askaniy Anpilogov；NASA/JPL-Caltech/ASI/USGS。CC BY 3.0，见 [triton.license](maps/triton.license)。
- 火卫一：Askaniy Anpilogov；Phil Stooke / NASA PDS Small Bodies Maps V3.0。CC BY 3.0，见 [phobos.license](maps/phobos.license)。
- 火卫二：Phil Stooke / NASA PDS Small Bodies Maps V3.0。CC0 1.0，见 [deimos.license](maps/deimos.license)。
- 冥王星、冥卫一：Askaniy Anpilogov，CC BY-NC-SA 3.0；本项目缩放/转码的衍生地图保留同一许可，见 [pluto.license](maps/pluto.license)、[charon.license](maps/charon.license)。README 另列 USGS、NASA、Steve Albers、Marc Buie、Björn Jónsson 与 Astra-Planetshine 等基础资料贡献。
- 木卫二：John van Vliet；木卫四：Askaniy / John van Vliet；土卫二、土卫五、土卫八：Paul Schenk、NASA Photojournal，土卫五另含 Björn Jónsson 的反照率资料。原仓库对这些文件的说明见所附 README；本项目不替它们另行声明统一许可。

许可链接：[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)、[CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)、[CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/)、[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)。

### 分层与资料覆盖

89 条精选目录不代表全部宇宙天体。7 个已收录星系均有自己的内部对象与覆盖说明。银河系外的目录包括实际观测的恒星、变星、星团、星云、星系核心及 M51 候选系统；没有为缺乏证据的星系编造确认行星。代表性标记的位置与内部成员轨道为展示布局，不是真实巡天坐标或动力学星历。

木卫一与土卫六原始 PNG 中的 alpha 用作材质辅助数据。转码时先提取 RGB，再缩放为 JPEG，避免把该通道错误当作透明背景合成成黑色。原作者的 RGB 地貌未重新绘制。

## 2026-10-19 · 中文河外星系档案补充

- 仙女座新增 NGC 206 恒星云与 G1 球状星团独立档案。NGC 206 的资料见 [哈勃仙女座全景说明](https://esahubble.org/images/heic2501b/)；G1 的资料及真实影像见 [哈勃 G1 观测](https://esahubble.org/images/opo9611a/)。三维标记仅用于目录定位，不是星团的实测立体模型；新增影像与三维结构的使用方式见下文补充说明。
- 所有条目主名称均带中文。没有通行中文名称的对象保留国际目录编号，附中文类别，明确说明是描述性名称。国际名称仍可搜索，避免虚构中文专名。
- 银河系、仙女座、三角座、大小麦哲伦云、涡状与草帽星系可直接切换，各有独立成员目录。未收录河外确认行星的星系按资料范围说明；涡状星系的行星候选保持未确认状态。

## 河外天体独立三维详情

已落地八份哈勃真实影像，完整署名、原发布页和使用说明见 [详情影像清单](details/CREDITS.md)。恒星光球使用原有太阳纹理类比；星团用有纵深的恒星群结合观测影像；星云以影像颜色和亮度重建层次；星系核、超新星遗迹及双星另有独立结构。新增深度与运动均为解释性展示，不声称是直接测得的表面、几何或实时状态。
