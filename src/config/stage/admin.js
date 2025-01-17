const adminRouter = {
  route: null,
  name: null,
  title: '系统管理',
  type: 'folder',
  icon: 'iconfont icon-huiyuanguanli',
  filePath: 'view/admin/',
  order: null,
  inNav: true,
  children: [
    {
      route: '/admin/user/list',
      name: null,
      title: '用户管理',
      type: 'folder', // 取 route 为默认加载页
      icon: 'iconfont icon-huiyuanguanli',
      filePath: 'view/admin/user/',
      inNav: true,
      children: [
        {
          title: '用户列表',
          type: 'view',
          name: 'userList',
          route: '/admin/user/list',
          filePath: 'view/admin/user/user-list.vue',
          inNav: true,
          icon: 'iconfont icon-huiyuanguanli',
          permission: ['超级管理员独有权限'],
        },
        {
          title: '添加用户',
          type: 'view',
          inNav: true,
          route: '/admin/user/add',
          icon: 'iconfont icon-add',
          name: 'UserCreate',
          filePath: 'view/admin/user/user-create.vue',
          permission: ['超级管理员独有权限'],
        },
      ],
    },
    {
      route: '/admin/group/list',
      name: null,
      title: '分组管理',
      type: 'tab', // 取 route 为默认加载页
      icon: null,
      filePath: 'view/admin/group',
      inNav: true,
      children: [
        {
          route: '/admin/group/list',
          type: 'view',
          name: 'groupList',
          inNav: true,
          filePath: 'view/admin/group/group-list.vue',
          title: '分组列表',
          icon: 'iconfont icon-huiyuanguanli',
          permission: ['超级管理员独有权限'],
        },
        {
          route: '/admin/group/add',
          type: 'view',
          name: 'GroupCreate',
          filePath: 'view/admin/group/group-create.vue',
          inNav: true,
          title: '添加分组',
          icon: 'iconfont icon-add',
          permission: ['超级管理员独有权限'],
        },
        {
          route: '/admin/group/edit',
          type: 'view',
          name: 'GroupEdit',
          filePath: 'view/admin/group/group-edit.vue',
          inNav: false,
          title: '修改分组',
          icon: 'iconfont icon-add',
          permission: ['超级管理员独有权限'],
        },
      ],
    },
    {
      route: '/admin/permission/list',
      type: 'view',
      name: 'permission',
      inNav: true,
      filePath: 'view/admin/permission/permission-list.vue',
      title: '权限列表',
    },
    {
      route: '/admin/setting/list',
      type: 'view',
      name: 'setting',
      inNav: true,
      filePath: 'view/admin/setting/setting-list.vue',
      title: '设置管理',
      permission: ['得到所有设置'],
    },
    {
      route: '/admin/log/serilog',
      type: 'view',
      name: 'serilog',
      inNav: true,
      filePath: 'view/admin/log/serilog.vue',
      title: 'Serilog日志',
      permission: ['Serilog日志'],
    },
  ],
}

export default adminRouter
