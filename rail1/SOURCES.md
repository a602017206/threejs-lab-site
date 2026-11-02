# rail1 数据来源

- **中国省界（含台湾 / 港澳 / 南海诸岛）** — DataV / gcoord；GCJ-02→WGS-84
- **高铁线路与站点** — OpenStreetMap（via china-hsr-simulation），ODbL
- **可跟拍 G/D/C 车次** — 12306 派生公开表 + OSM 路网描线（china-hsr-simulation）
- **普速铁路** — Natural Earth 10m railroads（公有领域）
- **高速公路** — Natural Earth 10m roads（`expressway=1`，裁剪至中国陆域；OSM Overpass 全国超时后的等价层）
- **京呼 / 京包走廊** — 在 OSM 高铁 + Natural Earth 路网上对公开站点做最短路（G2472 / G2471 / K41）
- **列车 GLB** — Sketchfab CC-BY，详见 `models/credits.json`

投影：原点 (105°E, 35°N)，北为 −Z。
