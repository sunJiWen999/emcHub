<template>
  <div class="create">
    <div class="create-left">
      <span @click="tabClick">文本创作</span>
      <span @click="tabClickTwo" style="margin-left: 20px">图生图</span>
      <createContent v-if="tab === 'first'" />
      <div v-if="tab === 'two'" class="create-upload">
        <Upload
          v-if="!fileUrl"
          class="create-upload-div"
          ref="upload"
          :show-upload-list="false"
          :on-success="handleSuccess"
          :max-size="10240"
          :on-format-error="handleFormatError"
          :on-exceeded-size="handleMaxSize"
          :before-upload="handleBeforeUpload"
          multiple
          type="drag"
          :action="uploadAction"
        >
           <img  src="@/assets/images/emc/Vector.png" />
        </Upload>
        <div    v-if="fileUrl">
          <uploadSuccess/>
        </div>
      </div>
    </div>
    <div class="create-right">
      <Form :model="formItem" :label-width="60" style="margin-top: 20px">
        <FormItem label="模式">
          <Select v-model="formItem.input"></Select>
        </FormItem>
        <FormItem label="模型">
          <Select v-model="formItem.select"> </Select>
        </FormItem>
        <FormItem label="风格">
          <Select> </Select>
        </FormItem>
        <FormItem label="基础设置">
          <div class="basic-sz">
            <div class="basic-sz-top">
              <span> 图片宽度 </span>
              <p>75</p>
              <span>px</span>
            </div>
            <div class="basic-sz-top">
              <span> 图片高度 </span>
              <p>75</p>
              <span>px</span>
            </div>
          </div>
        </FormItem>
        <FormItem label="节点选择">
          <Select> </Select>
        </FormItem>
      </Form>
      <div class="create-right-bottom">
        <Button @click="goSeeNode">查看节点视图</Button>
      </div>
    </div>
  </div>
</template>

<script>
import createContent from "@/pages/create/components/createContent";
import uploadSuccess from "@/pages/create/components/uploadSuccess"
export default {
  name: "Create",
  components: {
    createContent,
    uploadSuccess
  },
  data() {
    return {
      fileUrl:'',
      tab: "first",
      uploadAction: BASE.API_PROD.emchub + '/fileUpload.do',
      formItem: {
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
      },
    };
  },
  mounted() {
    // this.init();
  },
  methods: {
    handleSuccess(res, file) {
      this.fileUrl=file.response.bussData.file_link
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
    tabClick() {
      this.tab = "first";
    },
    tabClickTwo() {
      this.tab = "two";
    },
    goSeeNode() {
      this.$router.push("/nodeSee");
    },
  },
};
</script>

<style scoped lang="scss">
.create {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 43px;
}

.create-left {
  width: 70.5%;
  //height: 93vh;
  span {
    color: #555;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
}

.create-right {
  max-height: 920px;
  width: 29.5%;
  height: 800px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #eee;
  padding: 0px 10px 0px 10px;
}

/deep/ .ivu-select-single .ivu-select-selection .ivu-select-placeholder,
.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  //height: 36px;
  //flex-shrink: 0;
  border-radius: 6px;
  background: #fff;
}

.basic-sz {
  //width: 344px;
  height: 123px;
  border-radius: 6px;
  background: #fff;
  flex-shrink: 0;
}
.basic-sz-top {
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  p {
    width: 20%;
    text-align: center;
    background: #eee;
  }
  span {
    text-align: center;
    width: 40%;
  }
}
.create-right-bottom {
  display: flex;
  flex-direction: row-reverse;
  button {
    width: 117px;
    height: 35px;
    border-radius: 26px;
    background: linear-gradient(90deg, #834ffc 0%, #e5aeff 100%);
  }
}
.create-upload {
  width: 100%;
  height: 98%;
  display: flex;
  // align-items: center;
  justify-content: center;
}
.create-upload-div {
  width: 692px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 6px;
   background: rgba(0, 0, 0, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   img{
     width: 88px;
     height: 71px;
   }
}


/deep/ .ivu-input {
  height: 71px;
  background-color: #eee;
}
/deep/ .ivu-input-word-count {
  background: #eee;
  color: #333;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  //line-height: 24px;
}


</style>
