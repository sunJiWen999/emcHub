<template>
  <div>
    <BaseHeader></BaseHeader>
    <div class="pay-done">
      <div class="pay-user">
        <div class="pay-one">
          <img src="@/assets/images/Ellipse6.png" alt="" class="nav-d"/>
          <span class="detail-name">d</span>
        </div>
        <div class="pay-two">
          <div class="pay-name">用户昵称</div>
          <div class="pay-fans">
            <span>粉丝23</span>
            <span>关注23</span>
          </div>
        </div>
      </div>

      <div class="pay-tabs">
        <Tabs value="name1">
          <TabPane label="我的发布" name="name1">
            <div class="model-card">
<!--              <Row :gutter="16">-->
                <div
                  class="model-card-col"
                  v-for="message in messages"
                  :key="message.id"
                  v-bind:title="message.title"
                  v-bind:desc="message.desc"
                >
                  <div class="model-card-item">
                    <img class="model-img" :src="message.src"/>
                    <div class="model-card-shadow">
                      <div class="model-card-content">
                        <div class="model-card-content-title">
                          Neighborgirls 邻家女孩lora
                        </div>
                        <div class="model-card-content-bottom">
                          <div class="model-card-content-bottom-time">发布时间:2023.03.23 13:34:34</div>
                          <div class="model-card-content-bottom-img">
                            <img src="@/assets/images/emc/down.png" />
                            <span>99</span>
                          </div>
                          <div class="model-card-content-bottom-img">
                            <img  src="@/assets/images/emc/love1.png"/>
                            <span>99</span>
                          </div>
                        </div>
                        <!--                        <div>-->
                        <!--                          <div>{{ message.desc }}</div>-->
                        <!--                          <div>{{ message.time }}</div>-->
                        <!--                        </div>-->
                        <!--                        <div>-->
                        <!--                          <div class="model-card-square">111</div>-->
                        <!--                          <div style="background: #04ad11">{{ message.num }}11</div>-->
                        <!--                        </div>-->
                      </div>
                    </div>
                  </div>
                </div>
<!--              </Row>-->
            </div>
          </TabPane>
          <TabPane label="下载记录" name="name2">
            <div class="model-card">
                <div
                  class="model-card-col"
                  v-for="message in messages"
                  :key="message.id"
                  v-bind:title="message.title"
                  v-bind:desc="message.desc"
                >
                  <div class="model-card-item">
                    <img class="model-img" :src="message.src"/>
                    <div class="model-card-shadow">
                      <div class="model-card-content">
                        <div class="model-card-content">
                          <div class="model-card-content-title">
                            Neighborgirls 邻家女孩lora
                          </div>
                          <div class="model-card-content-bottom">
                            <div class="model-card-content-bottom-time1">发布时间:2023.03.23 13:34:34</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </TabPane>
          <TabPane label="点赞" name="name3">
            <div class="model-card">
                <div
                  class="model-card-col"
                  v-for="message in messages"
                  :key="message.id"
                  v-bind:title="message.title"
                  v-bind:desc="message.desc"
                >
                  <div class="model-card-item">
                    <img class="model-img" :src="message.src"/>
                    <div class="model-card-shadow">
                      <div class="model-card-content-zhan">
                        <div class="model-card-content-zhan-title">
                          <div>
                            Neighborgirls 邻家女孩lora
                          </div>
                          <div>
                            <img src="@/assets/images/emc/Ellipse 4.png"/>
                            <span style="margin-left: 10px">Giggle</span>
                          </div>
                        </div>
                        <div class="model-card-content-right">
                          <img src="@/assets/images/emc/love.png"/>
<!--                          <span>111</span>-->
                        </div>
<!--                        <div>-->

                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </TabPane>
          <TabPane label="我的创作" name="name4">
            <div class="model-card">
<!--              <Row :gutter="16">-->
                <div
                  class="model-card-col"
                  v-for="message in messages"
                  :key="message.id"
                  v-bind:title="message.title"
                  v-bind:desc="message.desc"
                >
                  <div class="model-card-item" @click="goDetail">
                    <img class="model-img" :src="message.src"/>
                    <div class="model-card-shadow">
                       <div class="model-card-dianzan">
                         <div class="model-card-dianzan-left">
                           <div>Neighborgirls 邻家女孩lora</div>
                           <div>创作时间：2023.03.23 13:34:34</div>
                         </div>
                         <div class="model-card-dianzan-right">
                           <Button>发布</Button>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
<!--              </Row>-->
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PayDone",
  data() {
    return {
      messages: [
        {
          id: "1",
          title: "yiyiyi",
          desc: "阿萨德",
          time: "最近更新:20230704",
          num: 1342,
          src: "https://www.bugela.com/cjpic/frombd/0/253/2650769822/1477358335.jpg",
        },
        {
          id: "2",
          title: "ererer",
          desc: "阿萨德",
          time: "发布时间:20230704",
          num: 1342,
          src: "https://www.bugela.com/cjpic/frombd/0/253/2650769822/1477358335.jpg",
        },
        {
          id: "3",
          title: "sansansan",
          desc: "阿萨德",
          time: "最近更新:20230704",
          num: 1342,
          src: "https://www.bugela.com/cjpic/frombd/0/253/2650769822/1477358335.jpg",
        },
        {
          id: "4",
          title: "sisisi",
          desc: "阿萨德",
          time: "最近更新:20230704",
          num: 1342,
          src: "https://www.bugela.com/cjpic/frombd/0/253/2650769822/1477358335.jpg",
        },
        {
          id: "5",
          title: "sisisi",
          desc: "阿萨德",
          time: "最近更新:20230704",
          num: 1342,
          src: "https://www.bugela.com/cjpic/frombd/0/253/2650769822/1477358335.jpg",
        },
        {
          id: "6",
          title: "sisisi",
          desc: "阿萨德",
          time: "最近更新:20230704",
          num: 1342,
          src: "https://www.bugela.com/cjpic/frombd/0/253/2650769822/1477358335.jpg",
        },
      ],
    };
  },
  methods: {
    goDetail() {
      this.$router.push('CreateDetail')
    }
  }
};
</script>

<style scoped lang='scss'>
.pay-done {
  width: 1080px;
  height: 500px;
  // background-color: aqua;
  margin: 0 auto;
  background: #fff;

  .pay-user {
    margin-top: 30px;
    width: 750px;
    height: 61px;
    //background-color: pink;
    display: flex;
    flex-direction: row;

    .pay-one {
      position: relative;
      margin-right: 16px;
    }

    .pay-two {
      width: 120px;

      .pay-name {
        color: #555;
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
      }

      .pay-fans {
        margin-top: 20px;
        color: #555;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;

        span:first-child {
          margin-right: 41px;
        }
      }
    }

    .pay-btn {
      width: 98px;
      height: 36px;
      flex-shrink: 0;
      border-radius: 26px;
      margin-left: 442px;
      margin-top: 26px;
      background: linear-gradient(90deg, #834ffc 0%, #e5aeff 100%);
      color: #fff;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }

    .nav-d {
      // border-left: 1px solid #ccc;
      width: 61px;
      height: 61px;
    }

    .detail-name {
      position: absolute;
      left: 23px;
      color: #fff;
      font-size: 24px;
      line-height: 58px;
    }
  }
}

.pay-tabs {
  margin-top: 30px;
}

.model-card {
  width: 100%;
  height: 350px;
  //overflow-y: auto;

  .model-card-col {
    width: 210px;
    float: left;
    padding: 8px;
  }
}

.model-card-item {
  position: relative;
  height: 357.136px;
  // background: #04ad11;
  cursor: pointer;

  .model-img {
    width: 100%;
    height: 100%;
  }

  .model-card-shadow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 62px;
    background-color: black;
    opacity: 0.6;

    .model-card-content {
      height: 70%;
      width: 100%;
      font-size: 14px;
      color: #fff;
    }
  }
}

.model-card-content-title {
  color: #FFF;
  //background: #4d9cf1;
  width: 100%;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  padding: 5px;
  line-height: 14px; /* 100% */
}
.model-card-content-bottom{
  display: flex;
  flex-direction: row;
  padding-top: 10px;
//background: #4d9cf1;
  align-items: center;
}
.model-card-content-bottom-time{
  color: #F7F7F7;
  width: 60%;
  padding-left: 5px;
  padding-bottom: 5px;
  //background: red;
  //padding: 0px 5px 0px 5px;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
}
.model-card-content-bottom-time1{
  color: #F7F7F7;
  padding-left: 5px;
  //padding-bottom: 5px;
  //background: red;
  //padding: 0px 5px 0px 5px;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
}
.model-card-content-bottom-img{
  img{
    width: 11.25px;
    height: 9.375px;
    margin-left: 10px;
    //background: white;
  }
  span{
    color: #F7F7F7;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px; /* 100% */
  }
}

.model-card-content-zhan {
  //height: 70%;
  width: 100%;
  font-size: 14px;
  color: #fff;
  display: flex;
  flex-direction: row;
}
.model-card-content-zhan-title{
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  div{
    padding: 5px;
    color: #FFF;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
  img{
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-left: 8px;
    border-radius: 20px;
    //background: #04ad11;
  }
}
.model-card-content-right{
  width: 50px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 22.5px;
    height: 20px;
    flex-shrink: 0;
  }
  button{
    //margin-right: 10px;
    width: 30px;
    height: 36px;
    flex-shrink: 0;
  }
}
.model-card-dianzan{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.model-card-dianzan-left{
  width: 75%;
  height: 100%;
  div{
    padding: 5px 0 5px 5px;
    color: #FFF;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 100% */
  }
}
.model-card-dianzan-right{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    width: 55px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 26px;
    background: linear-gradient(90deg, #834FFC 0%, #E5AEFF 100%);
  }
}

</style>
