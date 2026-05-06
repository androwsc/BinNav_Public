// 网站数据 - 通过管理后台更新于 2026/5/6 15:16:55

// 站点配置
export const siteConfig = {
  "siteName": "MODEJ",
  "siteTitle": "MODEJ - 导航",
  "siteLogo": "/assets/logo.png",
  "siteDescription": "MODEJ导航页面",
  "icpRecord": "",
  "publicSecurityRecord": "",
  "publicSecurityRecordUrl": ""
};

export const websiteData = [
  {
    "id": 1751807882512,
    "name": "个人站点",
    "description": "作者个人站点展示",
    "url": "https://i.bincore.cn/",
    "category": "author",
    "tags": [
      "个人站点"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=i.bincore.cn"
  },
  {
    "id": 41,
    "name": "GitHub Projects",
    "description": "作者开源项目",
    "url": "https://github.com/androwsc",
    "category": "author",
    "tags": [
      "开源项目"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=github.com"
  },
  {
    "id": 1751617129171,
    "name": "Cloudflare",
    "description": "Cloudflare以向客户提供网站安全管理、性能优化及相关的技术支持为主要业务。",
    "url": "https://www.cloudflare.com/",
    "category": "recommended",
    "tags": [
      "免费",
      "网站",
      "CDN",
      "DDOS"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=www.cloudflare.com"
  },
  {
    "id": 1751813515058,
    "name": "Termius",
    "description": "跨平台SSH客户端，随时随地安全管理服务器。",
    "url": "https://termius.com/",
    "category": "dev_tools",
    "tags": [
      "SSH",
      "开发"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=termius.com"
  },
  {
    "id": 1751807806262,
    "name": "EdgeOne",
    "description": "全球首个支持中国访问的免费CDN",
    "url": "https://edgeone.ai/zh",
    "category": "friend_links",
    "tags": [
      "网站",
      "CDN"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=edgeone.ai"
  }
];

// 分类定义 - 支持二级分类
export const categories = [
  {
    "id": "author",
    "name": "作者专栏",
    "icon": "/assets/logo.png",
    "special": true,
    "subcategories": []
  },
  {
    "id": "recommended",
    "name": "飞牛NAS",
    "icon": "/assets/131653e77diydliidp9sin.png",
    "special": false,
    "subcategories": []
  },
  {
    "id": "dev_tools",
    "name": "Synology",
    "icon": "/assets/synology_logo_icon_249461.png",
    "special": false,
    "subcategories": []
  }
];

// 搜索引擎配置
export const searchEngines = [
  { id: "bing", name: "必应", url: "https://www.bing.com/search?q=", color: "bg-blue-600" },
  { id: "baidu", name: "百度", url: "https://www.baidu.com/s?wd=", color: "bg-red-600" },
  { id: "google", name: "谷歌", url: "https://www.google.com/search?q=", color: "bg-green-600" },
  { id: "internal", name: "站内搜索", url: "", color: "bg-purple-600" }
];

// 推荐内容配置
export const recommendations = [
  {
    id: 1,
    title: "阿里云",
    description: "点击领取2000元限量云产品优惠券",
    url: "https://aliyun.com",
    type: "sponsor",
    color: "from-blue-50 to-blue-100"
  },
  {
    id: 2,
    title: "设计资源",
    description: "高质量设计素材网站推荐",
    url: "#design_resources",
    type: "internal",
    color: "from-green-50 to-green-100"
  }
];

// 热门标签
export const popularTags = [
  "设计工具", "免费素材", "UI设计", "前端开发", "图标库", "配色方案",
  "设计灵感", "原型工具", "代码托管", "学习平台", "社区论坛", "创业资讯"
];

// 网站统计信息
export const siteStats = {
  totalSites: websiteData.length,
  totalCategories: categories.length,
  totalTags: [...new Set(websiteData.flatMap(site => site.tags || []))].length,
  lastUpdated: "2026-05-06"
};
