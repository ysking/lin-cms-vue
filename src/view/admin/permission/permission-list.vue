<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <div class="title">权限列表</div>
      </div>
      <div class="header-right">
        <div style="margin-left:30px">
          <el-button type="default" icon="el-icon-search" @click="getTreePermissionsList">刷新</el-button>
        </div>
      </div>
    </div>
    <!-- stripe -->

    <el-table
      ref="multipleTable"
      v-loading="loading"
      row-key="rowkey"
      size="medium"
      highlight-current-row
      :border="true"
      :data="tableData"
      :default-expand-all="false"
      style="width: 100%;"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column type="index" width="50" label="#" />
      <el-table-column prop="name" label="权限名" width="180" />
      <el-table-column prop="router" label="接口地址" width="400" />
      <el-table-column prop="create_time" label="创建时间" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.create_time |filterTimeYmdHms}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Admin from '@/lin/model/admin'
export default {
  name: 'PermissionList',
  components: {},
  data() {
    return {
      loading: false,
      tableData: [],
    }
  },
  async created() {
    await this.getTreePermissionsList()
  },
  methods: {
    async getTreePermissionsList() {
      this.loading = true
      let res = await Admin.getTreePermissionsList()
      this.loading = false
      this.tableData = res
      this.total = res.count
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/list.scss';
</style>
