const baseRouter = {
  route: null,
  name: null,
  title: "基础资料",
  type: "folder", // 类型: folder, tab, view
  icon: "iconfont icon-tushuguanli",
  order: null,
  inNav: true,
  children: [
    {
      name: null,
      title: "字典管理",
      type: "view",
      name: "ItemList",
      route: "/base/item",
      filePath: "plugins/Base/views/item/ItemList.vue",
      inNav: true
    },
    {
      name: null,
      title: "字典类别管理",
      type: "view",
      name: "TypeList",
      route: "/base/type",
      filePath: "plugins/Base/views/type/TypeList.vue",
      inNav: true
    }
  ]
};

export default baseRouter;
