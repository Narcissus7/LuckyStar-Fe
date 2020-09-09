<template>
  <div class="app-container">
<!--    <div>Lucky Star</div>-->
    <el-table
      :data="list"
      element-loading-text="Loading"
      fit
      highlight-current-row
    >
      <el-table-column label="Lucky 🌟" align="center" width="95">
        <template slot-scope="scope">
          <el-button type="primary" circle>{{ scope.row[0] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="95">
        <template slot-scope="scope">
          <el-button type="primary" circle>{{ scope.row[1] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="95">
        <template slot-scope="scope">
          <el-button type="primary" circle>{{ scope.row[2] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="95">
        <template slot-scope="scope">
          <el-button type="primary" circle>{{ scope.row[3] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="95">
        <template slot-scope="scope">
          <el-button type="primary" circle>{{ scope.row[4] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="95">
        <template slot-scope="scope">
          <el-button type="primary" circle>{{ scope.row[5] }}</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" width="200">
        <template slot="header">
          <el-button type="warning" size="medium" @click="fetchData()">换一组</el-button>
        </template>
        <template slot-scope="scope">
          <el-button type="danger" circle>{{ scope.row[6] }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/lucky'

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
        // console.log(response.data.data)
        this.list = response.data.data
        this.listLoading = false
      })
    }
  }
}
</script>
