<template>
  <div class="app-container">
    <el-table
      :data="list"
      element-loading-text="Loading"
      fit
      highlight-current-row
    >
      <el-table-column label="Lucky 🌟" align="center" width="95">
        <template slot-scope="scope">
          <el-button type="danger" circle>{{ scope.row.number[0] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="95">
        <template slot-scope="scope">
          <div>开奖日期：{{ scope.row.date }}</div>
        </template>
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
        console.log(response.data.data)
        this.list = response.data.data
        this.listLoading = false
      })
    }
  }
}
</script>
