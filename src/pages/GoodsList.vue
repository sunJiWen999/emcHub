<template>
  <div class="goods-detail">
    <div style="margin-top: 20px;display: flex;flex-direction: row;justify-content: space-between">
      <div>
        <span class="goods-detail-me">{{this.modelInfo.modelName}}</span>
        <span class="goods-detail-time">The last modify time：</span>
      </div>
      <img src="@/assets/images/emc/love.png" style="width: 44px;height: 39px;"/>
    </div>
    <div   style="margin-top: 20px;font-family: Roboto;" >
      <Tag  v-for="tag in this.modelInfo.cateGory2.split(',')"
            :key="tag" class="goods-detail-tag">{{tag}}</Tag>    
    </div>
    <div style="margin-top: 20px">
      <Button style="margin-right: 10px; width: 100px;" :class="currentIndex === index ? 'goods-detail-v' : 'goods-detail-v1'"
        @click="tagClick(index)" v-for="(item, index) in banList" :index="index">{{ item }}
      </Button>
    </div>
    <div style="margin-top: 20px">
      <Row :gutter="16">
        <Col span="12">
        <img class="goods-detail-img" :src="loadImage(this.modelInfo.modelCover.coverImgList[0])"/>
        </Col>
        <Col span="12">
        <div class="goods-detail-right">
          <ul class="goods-detail-ul1">
            <li>CATEGORY</li>
            <li>NAME</li>
            <li>DESCRIBE</li>
            <li>positivePromts</li>
            <li>negativePromts</li>
            <li>commom params</li>
          </ul>
          <ul class="goods-detail-ul2">
            <li>{{this.modelInfo.cateGory1}}</li>
            <li>{{this.modelInfo.modelName}}</li>
            <li>{{this.modelInfo.modelSubName}}</li>
            <li>{{this.modelDetailInfo.positivePromts}}</li>
            <li>{{this.modelDetailInfo.negativePromts}}</li>
            <li>{{this.modelDetailInfo.commonParams}}</li>
          </ul>
        </div>
        <div class="goods-detail-user">
          <img src="@/assets/images/emc/Ellipse 4.png" />
          <div class="goods-detail-user-right">
            <span>WaveWSBS</span>
            <Button></Button>
          </div>
        </div>
        <Divider></Divider>
        <div style="margin-top: 20px">
          <div class="goods-detail-init">
            <span>Comment</span>
            <p>initite</p>
          </div>
        </div>
        <div style="margin-top: 20px">
          <div class="goods-detail-bottom">
            <div class="goods-detail-bottom-top">
              <img src="@/assets/images/emc/Ellipse 4.png"></img>
              <div class="goods-detail-bottom-top-div">
                <span>WaveWSBS</span>
                <p>5 hours ago</p>
              </div>
            </div>
            <div class="goods-detail-bottom-bottom-div">
              <span>是否需要任何最小数据集才能使人工智能生成逼真的照片？我使用的数据集有 50 个 img [不同的艺术风格]，但它仍然变成 3d 渲染/2d 图像，不现实。</span>
              <div class="goods-detail-bottom-bottom-div-love">
                <img src="@/assets/images/emc/VectorLove.png" /><span>99</span>
              </div>
            </div>
          </div>
          <div class="goods-detail-bottom">
            <div class="goods-detail-bottom-top">
              <img src="@/assets/images/emc/Ellipse 4.png"></img>
              <div class="goods-detail-bottom-top-div">
                <span>WaveWSBS</span>
                <p>5个小时前</p>
              </div>
            </div>
            <div class="goods-detail-bottom-bottom-div">
              <span>是否需要任何最小数据集才能使人工智能生成逼真的照片？我使用的数据集有 50 个 img [不同的艺术风格]，但它仍然变成 3d 渲染/2d 图像，不现实。</span>
              <div class="goods-detail-bottom-bottom-div-love">
                <img src="@/assets/images/emc/VectorLove.png" /><span>99</span>
              </div>
            </div>
          </div>
          <div class="goods-detail-bottom">
            <div class="goods-detail-bottom-top">
              <img src="@/assets/images/emc/Ellipse 4.png"></img>
              <div class="goods-detail-bottom-top-div">
                <span>WaveWSBS</span>
                <p>5个小时前</p>
              </div>
            </div>
            <div class="goods-detail-bottom-bottom-div">
              <span>是否需要任何最小数据集才能使人工智能生成逼真的照片？我使用的数据集有 50 个 img [不同的艺术风格]，但它仍然变成 3d 渲染/2d 图像，不现实。</span>
              <div class="goods-detail-bottom-bottom-div-love">
                <img src="@/assets/images/emc/VectorLove.png" /><span>99</span>
              </div>
            </div>
          </div>
          <div class="goods-detail-bottom">
            <div class="goods-detail-bottom-top">
              <img src="@/assets/images/emc/Ellipse 4.png"></img>
              <div class="goods-detail-bottom-top-div">
                <span>WaveWSBS</span>
                <p>5个小时前</p>
              </div>
            </div>
            <div class="goods-detail-bottom-bottom-div">
              <span>是否需要任何最小数据集才能使人工智能生成逼真的照片？我使用的数据集有 50 个 img [不同的艺术风格]，但它仍然变成 3d 渲染/2d 图像，不现实。</span>
              <div class="goods-detail-bottom-bottom-div-love">
                <img src="@/assets/images/emc/VectorLove.png" /><span>99</span>
              </div>
            </div>
          </div>
        </div>

        </Col>
      </Row>

    </div>
  </div>
</template>

<script>
import { queryModelDetailInfo } from "@/api/modelinfo.js";
import { datetimeFormat } from "@/plugins/DataUtil.js";
import defaultImage from "@/assets/images/emc/image 9.png";

export default {
  name: "GoodsList",


  beforeRouteEnter(to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  data() {
    return {
      modelInfo: {
        modelId: '',
        modelName: '',
        modelSubName: '',
        cateGory1: '',
        cateGory2: '',
        modelCover: {
          coverImgList: [],
          coverVideoList: [],
          tips: []
        }
      },
      modelDetailInfo: {
        modelIdL: '',
        modelDesc: '',
        version: '',
        downLoadLink: '',
        guideLink: '',
        paramsGuideLink: '',
        invokeGuide: '',
        negativePromts: '',
        positivePromts: '',
        commonParams: ''
      },
      banList: ['SNAPSHOT', 'RELEASE', 'ADVANCE'],
      currentIndex: 0,
    };
  },
  created() {
    var paramData = {
      custId: 'PUBLIC',
      bussData: {
        model_id: this.$route.query.modelId
      }
    };
    this.modelLoad(paramData);
  },
  methods: {
    loadImage(value){
    if (value === undefined) {
      return defaultImage;
    }
    return value;
  },
    dateLong2Str(datelong){
      return datetimeFormat(datalong);
    },
    tagClick(index) {
      this.currentIndex = index
    },
    modelLoad(paramData) {
      queryModelDetailInfo(paramData).then(res => {
        if (res.resultCode === 'SUCCESS') {
          this.modelInfo = JSON.parse(res.bussData.modelInfo);
          this.modelDetailInfo = JSON.parse(res.bussData.modelDetail);
        } else {
          alert('Please re-login and retry!')
          this.$router.go(-1);
        }
      });

    }


  },
  components: {},
};
</script>

<style scoped lang="scss">
.goods-detail {
  Width: 1080px;
  margin: 0 auto;

}

.goods-detail-me {
  font-family: Roboto;
  font-size: 20px;
  color: #1E1E1E;
  line-height: 32px;
}

.goods-detail-time {
  font-size: 12px;
  margin-left: 10px;
  line-height: 20px;
  font-weight: 400;
  color: #1E1E1E;
}

.goods-detail-tag {
  width: 80px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  //color: #FFFFFF;
  border-radius: 8px;
  background: #BF61F9;

  /deep/ .ivu-tag-text {
    color: #FFFFFF;
    ;
  }
}

.goods-detail-v {
  min-width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 6px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  background: linear-gradient(90deg, #8551FC 0%, #E4ADFF 100%);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 3px 3px 0px rgba(0, 0, 0, 0.09), 0px 7px 4px 0px rgba(0, 0, 0, 0.05), 0px 13px 5px 0px rgba(0, 0, 0, 0.01);
}

.goods-detail-v1 {
  width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 6px;
  color: #666;
  font-size: 14px;
  font-family: Roboto;
  background: #F5F5F5;
  font-style: normal;
  font-weight: 400;
}

.goods-detail-img {
  width: 100%;
  height: 900px;
}

.goods-detail-right {
  height: 294px;
  display: flex;
  border-radius: 6px;
  background: #F0D7FF;
  color: #2b7fb3;
  flex-direction: row;
}

.goods-detail-ul1 {
  width: 40%;
  height: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  color: #2b7fb3;
  margin-left: 20px;
}

.goods-detail-ul1 li {
  flex: 1;
  color: #1E1E1E;
  font-size: 14px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

.goods-detail-ul2 {
  height: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}

.goods-detail-ul2 li {
  flex: 1;
  color: #1E1E1E;
  font-size: 14px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

.goods-detail-user {
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  img {
    width: 77px;
    height: 77px;
    border-radius: 77px;
  }

  .goods-detail-user-right {
    height: 77px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;

    span {
      color: #555;
      font-size: 18px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
    }

    button {
      width: 60px;
      color: #FFF;
      font-size: 14px;
      font-family: Roboto;
      font-style: normal;
      border-radius: 6px;
      background: linear-gradient(90deg, #8551FC 0%, #E4ADFF 100%);
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 3px 3px 0px rgba(0, 0, 0, 0.09), 0px 7px 4px 0px rgba(0, 0, 0, 0.05), 0px 13px 5px 0px rgba(0, 0, 0, 0.01);
    }
  }

}

.goods-detail-init {
  display: flex;
  flex-direction: row;

  span {
    color: #555;
    font-size: 18px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  }

  p {
    margin-left: 10px;
    width: 71px;
    text-align: center;
    border-radius: 26px;
    background: linear-gradient(90deg, #834FFC 0%, #E5AEFF 100%);
    color: #FFF;
    font-size: 12px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
}

/deep/ .ivu-divider-horizontal {
  background: rgba(144, 92, 253, 0.15);
}

.goods-detail-bottom {
  width: 48%;
  height: 190px;
  float: left;
  margin-right: 1%;

  .goods-detail-bottom-top {
    display: flex;
    flex-direction: row;

    img {
      width: 49px;
      height: 49px;
      border-radius: 49px;
      background: white;
      //background: url(<path-to-image>), lightgray 50% / cover no-repeat;

    }

    .goods-detail-bottom-top-div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;

      span {
        color: #555;
        font-size: 18px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
      }

      p {
        olor: #555;
        font-size: 12px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
      }
    }

  }

  .goods-detail-bottom-bottom-div {
    padding: 10px;
    position: relative;

    span {
      color: #000;
      font-size: 14px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }

    .goods-detail-bottom-bottom-div-love {
      position: absolute;
      right: 10px;

      img {
        width: 9px;
        height: 8px;
        flex-shrink: 0;
      }

      span {
        color: #444;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
        /* 100% */
      }
    }

  }
}

.ban-div {}
</style>
