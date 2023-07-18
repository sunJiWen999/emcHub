<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="examineDialog"
      width="30%"
      :before-close="examineDialog"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="审核" prop="resource">
          <el-radio-group v-model="form.resource">
            <el-radio label="通过"></el-radio>
            <el-radio label="驳回"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="desc">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>取消</el-button>
          <el-button type="primary">确认</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'examineModel.vue',
  props: {
    isExamineShow: {
      type: Function,
      required: true
    },
    examineDialog: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
