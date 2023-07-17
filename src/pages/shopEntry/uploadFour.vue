<template>
  <div class="model-uploadFour">
    <div style="display: flex;flex-direction: row;justify-content: space-between">
      <Upload
        class="model-uploadFour-upload"
        ref="upload"
        :show-upload-list="false"
        :on-success="handleSuccess"
        :max-size="10240"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        :action="uploadAction">
        <img src="@/assets/images/emc/Vector.png"/>
     
      </Upload>
      <div class="model-uploadFour-right">
        <Form ref="formValidateFour"
              :model="formValidate"
              label-position="top"
              :rules="ruleValidate"
        >
          <!--          <FormItem label="帖子标签" prop="name">-->
          <!--            <Tag v-for="item in tagList" closable :name="item"-->
          <!--                 @on-close="handleClose2"-->
          <!--                 class="model-uploadFour-tag">{{ item }}-->
          <!--            </Tag>-->
          <!--          </FormItem>-->
<!--          <FormItem label="帖子标签" prop="name">-->
<!--            <Tag v-for="item in tagList" closable :name="item"-->
<!--                 @on-close="handleClose2"-->
<!--                 class="model-uploadFour-tag">{{ item }}-->
<!--            </Tag>-->
<!--          </FormItem>-->
          <FormItem label="Input" prop="category2">
            <Input style="width: 100%" v-model="formValidate.category2"></Input>
            <!--            <Button class="model-uploadFour-but" @click="addTag">添加</Button>-->
          </FormItem>
          <FormItem style="display: flex;flex-direction: row" label="搜索触发词" prop="tips">
            <Input style="width: 230px;margin-left: 10px" v-model="formValidate.tips"/>
          </FormItem>
        </Form>
      </div>
    </div>
    <span class="model-uploadFour-span">upload model cover images</span>
    <span class="model-uploadFour-span-oldUpload">uploading</span>
    <div class="model-uploadFour-bottom" v-for="(item,index) in fileIdList"
         :key="index">
      <div>
        <img class="model-uploadFour-img"
             :src="item"/>
        <Button class="model-uploadFour-img-but" @click="del(item)">del</Button>
      </div>
      <!--      <div>-->
      <!--        <img class="model-uploadFour-img" src="@/assets/images/emc/image 9.png"/>-->
      <!--        <Button class="model-uploadFour-img-but">删除</Button>-->
      <!--      </div>-->
      <!--      <div>-->
      <!--        <img class="model-uploadFour-img" src="@/assets/images/emc/image 9.png"/>-->
      <!--        <Button class="model-uploadFour-img-but">删除</Button>-->
      <!--      </div>-->
      <!--      <div>-->
      <!--        <img class="model-uploadFour-img" src="@/assets/images/emc/image 9.png"/>-->
      <!--        <Button class="model-uploadFour-img-but">删除</Button>-->
      <!--      </div>-->
    </div>
    <div style="text-align: center">
      <Button class="upload-content-xia" @click="up">Pre...</Button>
      <Button style="margin-left: 10px" class="upload-content-xia" @click="handleAdd('formValidateFour')">Public</Button>
    </div>
  </div>
</template>

<script>
import {addNewModel, modModelDetailInfo} from "@/api/upload";
import storage from "@/plugins/storage";

export default {
  name: "uploadFour.vue",
  data() {
    return {
      uploadAction: BASE.API_PROD.emchub + '/fileUpload.do',
      fileIdList: [],
      tagList: ['Lable one'],
      formValidate: {
        tips: '',
        category2: ''
      },
      ruleValidate: {
        tips: [
          {required: true, message: 'The tips cannot be empty', trigger: 'blur'}
        ],
        category2: [
          {required: true, message: 'The category2 cannot be empty', trigger: 'blur'}
        ]
      }
    }
  },
  props: {
    currentSub: {type: Function, require: true},
    model_id: {type: String, require: true},
    fourParams: {type: Object, require: true}
  },
  created() {
    // let isObject = Object.keys(this.fourParams)
    if (this.fourParams) {
      this.fileIdList = this.fourParams.fileIdList
      this.formValidate = this.fourParams.formValidate
    }
  },
  methods: {
    del(name) {
      const index = this.fileIdList.indexOf(name);
      this.fileIdList.splice(index, 1);
    },
    handleClose2(event, name) {
      const index = this.tagList.indexOf(name);
      this.tagList.splice(index, 1);
    },
    addTag() {
      this.tagList.push(this.category)
    },
    handleSuccess(res, file) {
      this.fileIdList.push(file.response.bussData.file_link)
      console.log(this.fileIdList, 66666666666)
      this.$Message.success(`upload${file.response.resultCode}`)
    },
    handleFormatError(file) {
      // this.$Message.error("非'ckpt'||'pt'||'safetensors'||'bin'||'zip'格式的文件，请重新选择！");
      // return false;
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 10M.'
      });
    },
    handleBeforeUpload(file) {
      let fileName = file.name;
      let suffix = fileName.substr(fileName.lastIndexOf('.'));
    },
    up() {
      const modelInfo = {
        fileIdList: this.fileIdList,
        formValidate: this.formValidate
      }
      this.$emit('uploadFourModalParams', modelInfo)
      this.currentSub(1)
    },
    handleAdd() {
      let modelInfo = {
        // category2:this.tagList,
        // tips:this.formValidate.tips,
        ...this.formValidate,
        modelId: this.model_id,
      }
      let modelCover = {
        coverImgList: JSON.stringify(this.fileIdList)
      }
      // coverImgList:"http://36.155.7.134:9000/emcbucket/2023/07/14/%5B1689349213013%5Dphoto01.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230714%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230714T154013Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e71c37bf2559d6358aa344947a6a8d400a0924870a2836bbf68d00ad6ea41135"}
      let params = {
        custId: storage.getItem('custId'),
        bussData: {
          modelInfo: JSON.stringify(modelInfo),
          modelCover: JSON.stringify(modelCover)
        }
      }
      addNewModel(params).then(res => {
        if (res.resultCode === 'SUCCESS') {
          this.$Message.success('success')
          // this.currentAdd(1)
          this.$router.push('/')
          // this.$emit('uploadTwoModalParams',params)
        }
      })
      // this.$refs[name].validate((valid) => {
      //   if (valid) {
      //     addNewModel(params).then(res => {
      //       if (res.resultCode === 'SUCCESS') {
      //          this.$Message.success('success')
      //         // this.currentAdd(1)
      //         // this.$emit('uploadTwoModalParams',params)
      //       }
      //     })
      //   }
      // })
    }
  }
}
</script>

<style scoped lang="scss">
.model-uploadFour {
  margin: 0 auto;
  width: 692px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  margin-top: 40px;
}

.model-uploadFour-upload {
  width: 290px;
  height: 238px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 88px;
    height: 71px;
  }
}

.model-uploadFour-right {
  width: 48%;
  min-height: 100px;
  //background: red;
}

.model-uploadFour-span {
  color: #999;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: -42px;
}

/deep/ .ivu-form-item-error .ivu-input {
  border: 1px solid #BF61F9;
}

/deep/ .ivu-input {
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.10);
  height: 36px;
}

/deep/ .ivu-form-item-error-tip {
  color: #BF61F9;
}

/deep/ .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  background: rgba(0, 0, 0, 0.10);
}

.model-uploadFour-tag {
  min-width: 60px;
  height: 36px;
  border-radius: 6px;
  background: #BF61F9;
  //color: #FFF;
  //font-family: Roboto;
  //font-size: 12px;
  //font-style: normal;
  //font-weight: 400;
  //line-height: 36px;
}

/deep/ .ivu-tag-text {
  color: #FFF;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
}

/deep/ .ivu-tag .ivu-icon-ios-close {
  color: #FFF;
}

.model-uploadFour-but {
  width: 80px;
  height: 36px;
  border-radius: 6px;
  background: #BF61F9;
  color: #FFF;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  float: right;
}

/deep/ .ivu-form-item-label {
  line-height: 36px;
}

.model-uploadFour-span-oldUpload {
  color: #333;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 20px;
}

.model-uploadFour-bottom {
  margin-bottom: 30px;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: left;

  div {
    //flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.model-uploadFour-img {
  width: 150px;
  height: 265px;
  float: left;
}

.model-uploadFour-img-but {
  width: 70px;
  height: 36px;
  margin-top: 20px;
  border-radius: 6px;
  background: #BF61F9;
  color: #FFF;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
}

.upload-content-xia {
  width: 120px;
  height: 36px;
  border-radius: 6px;
  background: linear-gradient(90deg, #834ffc 0%, #e5aeff 100%);
}
</style>
