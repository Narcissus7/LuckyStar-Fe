<template>
  <div class="app-container">
    <div :data="list" style="color: #5a5e66">
      <span>开奖期数: {{ list ? list[0].code : '' }}</span>
      <el-divider direction="vertical"></el-divider>
      <span>开奖日期: {{ list ? list[0].date : '' }}</span>
    </div>
    <el-table
      :data="list"
      element-loading-text="Loading"
    >
      <el-table-column align="center" width="95">
        <template slot-scope="scope">
          <el-button type="danger" circle>{{ scope.row.number[0] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="95">
        <template slot-scope="scope">
          <el-button type="danger" circle>{{ scope.row.number[1] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="95">
        <template slot-scope="scope">
          <el-button type="danger" circle>{{ scope.row.number[2] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="95">
        <template slot-scope="scope">
          <el-button type="danger" circle>{{ scope.row.number[3] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="95">
        <template slot-scope="scope">
          <el-button type="danger" circle>{{ scope.row.number[4] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="95">
        <template slot-scope="scope">
          <el-button type="danger" circle>{{ scope.row.number[5] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="200">
        <template slot-scope="scope">
          <el-button type="primary" circle>{{ scope.row.number[6] }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/history'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.data
        this.listLoading = false
      })
    }
  }
}
</script>
