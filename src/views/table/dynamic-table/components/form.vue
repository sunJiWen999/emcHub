<template>
  <el-dialog
    :visible.sync="dialog"
    :close-on-click-modal="false"
    :before-close="cancel"
    title="查看"
    append-to-body
  >
    <el-form ref="form"
             :model="form"
             :rules="rules"
             size="small"
             label-width="100px"
    >
      <el-form-item label="上传用户">
        <el-input v-model="form.type">
        </el-input>
      </el-form-item>
      <el-form-item label="上传时间">
        <el-input v-model="form.iframe">
        </el-input>
      </el-form-item>
      <el-form-item label="模型名称">
        <el-input v-model="form.cache">
        </el-input>
      </el-form-item>
      <el-form-item label="模型类型">
        <el-input v-model="form.hidden">
        </el-input>
      </el-form-item>
      <el-form-item label="模型类别" prop="name">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="模型描述" prop="detail">
        <el-input v-model="form.detail"/>
      </el-form-item>
      <el-form-item label="关于模型" prop="type">
        <el-input v-model="form.type"/>
      </el-form-item>
      <el-form-item label="版本编号" prop="veison">
        <el-input  type="textarea" v-model="form.veison"/>
      </el-form-item>
      <el-form-item label="版本说明" prop="type">
        <el-input v-model="form.type"/>
      </el-form-item>
      <el-form-item label="模型文件" prop="type">
        <div style="display: flex;flex-direction: row;justify-content: space-between">
          <el-input style="width: 80%"></el-input>
          <el-button type="primary" size="mini">下载</el-button>
        </div>
        <div style="margin-top:10px;display: flex;flex-direction: row;justify-content: space-between">
          <el-input style="width: 80%"></el-input>
          <el-button type="primary" size="mini">下载</el-button>
        </div>
      </el-form-item>
      <el-form-item label="模型缩略图" prop="type">
        <div class="model-img">
          <img src="https://img95.699pic.com/photo/50337/2432.jpg_wh860.jpg!/fw/562"/>
          <img src="https://img95.699pic.com/photo/50337/2432.jpg_wh860.jpg!/fw/562"/>
        </div>
      </el-form-item>
      <el-form-item label="电子标签" prop="type">
        <div>
          <el-tag class="model-tag" type="info">标签三</el-tag>
          <el-tag class="model-tag" type="info">标签三</el-tag>
        </div>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Function,
      required: true
    },
    dialog: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      form: {
      },
      rules: {
      }
    }
  },
  methods: {
    doSubmit() {
      this.isShow(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.model-img {
  display: flex;
  flex-direction: row;

  img {
    width: 80px;
    height: 100px;
    background: black;
    margin-right: 10px;
  }
}

.model-tag {
  margin-right: 10px;
}
</style>
