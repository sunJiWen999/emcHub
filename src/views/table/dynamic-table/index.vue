<template>
  <div class="app-container">
    <el-card>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="选择搜索">
          <el-input v-model="formInline.user"></el-input>
        </el-form-item>
        <el-form-item label="模型类型">
          <el-select v-model="formInline.region">
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态">
          <el-select v-model="formInline.region">  
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
      >
        <el-table-column
          prop="time"
          label="上传日期"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="用户ID"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="模型名称"
        >
        </el-table-column>
        <el-table-column
          prop="version"
          label="版本信息"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          label="模型类型"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="150"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit(scope.row)">查看详情</el-button>
            <el-button type="text" size="small" @click="examine(scope.row)">快速审核</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
      >
      </el-pagination>
    </el-card>
    <eForm 
      v-if="dialog"
      :dialog="dialog"
      :isShow="isShow"
    ></eForm>
    <examine
      v-if="examineDialog"
      :isExamineShow="isExamineShow"
      :examineDialog="examineDialog"></examine>
  </div>
</template>

<script>
import eForm from './components/form'
import examine from './components/examine'

export default {
  name: 'DynamicTable',
  components: { eForm, examine },
  data() {
    return {
      examineDialog: false,
      dialog: false,
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        time: '2016-05-02',
        id: '123456789',
        name: '侧卧的少女',
        version: 'v21.0',
        type: '真实感',
        status: '已通过',
        address: '上海市普陀区金沙江路 1518 弄'
      },
        {
          time: '2016-05-02',
          id: '123456789',
          name: '侧卧的少女',
          version: 'v21.0',
          type: '真实感',
          status: '已通过',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          time: '2016-05-02',
          id: '123456789',
          name: '侧卧的少女',
          version: 'v21.0',
          type: '真实感',
          status: '已通过',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  methods: {
    isShow(val) {
      this.dialog = val
    },
    isExamineShow(val) {
      this.examineDialog = val
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    edit(data) {
      this.isShow(true)
    },
    examine(data) {
      this.isExamineShow(true)
    }
  }
}
</script>

