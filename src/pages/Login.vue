<template>
  <div class="login">
    <div  v-if="!regVisible">
      <div class="modal-div">
        <img class="modal-ing1" src="@/assets/images/logo-tittle.png"/>
        <img class="modal-img2" src="@/assets/images/EMCHub.png"/>
      </div>
      <div style="width: 600px;margin: 0 auto">
        <Form style="margin: 40px auto"  ref="ruleValidate" :model="userLoginInfo"
              label-position="top" :rules="ruleValidate">
          <FormItem label="UserLogInId" prop="UserLogInId">
            <Input v-model="userLoginInfo.custId"></Input>
          </FormItem>
          <FormItem label="AuthToken" prop="AuthToken">
            <Input v-model="userLoginInfo.bussData.authToken"></Input>
          </FormItem>
        </Form>
      </div>
      <div class="modal-button-bottom">
        <Button @click="getLogin">
          <img src="@/assets/images/logo-tittle.png"/>
          <span>LOGIN</span>
        </Button>
      </div>
      <div class="modal-button-bottom">
        <Button @click="doReg">
          <img src="@/assets/images/default.png"/>
          <span>New Registor</span>
        </Button>
      </div>
    </div>
    <!--    注册-->
    <div v-if="regVisible">
      <div class="modal-div">
        <img class="modal-ing1" src="@/assets/images/logo-tittle.png" />
      </div>
      <div>
        <Form class="register"
              :model="userLoginInfo"
              label-position="left"
              :rules="ruleValidate">
          <FormItem label="loginId" prop="LogInId">
            <Input v-model="regInfoBussData.loginId"></Input>
          </FormItem>
          <FormItem label="nickName" prop="NickName">
            <Input v-model="regInfoBussData.nickName"></Input>
          </FormItem>
          <FormItem label="email" prop="email">
            <Input v-model="regInfoBussData.email"></Input>
          </FormItem>
          <FormItem label="mobilePhone" prop="mobilePhone">
            <Input v-model="regInfoBussData.mobilePhone"></Input>
          </FormItem>
          <FormItem label="authToken" prop="authToken">
            <Input v-model="authInfoData.bussData.authToken"></Input>
          </FormItem>
        </Form>
      </div>
      <div class="modal-button-bottom">
        <Button @click="commitReg">
          <img src="@/assets/images/logo-tittle.png" />
          <span>commit</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>

import {authTokenSet, LoginByPassWD, userRegOrigin} from "@/api/login";
import { instance as emcAuthClient } from '@/plugins/auth';
import storage from "@/plugins/storage";

export default {
  name: "Login",
  data() {
    return {
      regVisible: false,
      hasLogin: false,
      userLoginInfo: {
        custId: "",
        bussData: {
          identityType: "",
          authToken: ""
        }
      },
      userInfo:{
        custId:'',
        userLoginId:'',
        loginNickName:''
      },
      regInfo: {
        actionCode: 'register',
        bussData: {
          applRegInfo: ''
        }
      },
      regInfoBussData: {
        loginId: '',
        email: '',
        mobilePhone: '',
        nickName: '',
      },
      authInfoData: {
        actionCode: 'setToken',
        custId: '',
        bussData: {
          identityType: 'PASSWD',
          authToken: ''
        }
      },
      ruleValidate: {
        UserLogInId: [
          {required: true, message: 'Please select the UserLogInId', trigger: 'blur'}
        ],
        AuthToken: [
          {required: true, message: 'Please select the AuthToken', trigger: 'blur'}
        ]
      },
    };
  },
  watch: {},
  methods: {
    doReg() {
      this.loginVisible = false;
      this.regVisible = true;
    },
    getLogin() {
      this.userLoginInfo.bussData.identityType="PASSWD";
      LoginByPassWD(this.userLoginInfo).then(res => {
        if (res.loginStatus === 'true') {
          this.hasLogin = true;
          storage.setItem('custId', res.bussData.custId);
          this.$router.push("/");
        } else {
          alert("Login fail");
        }

      });
      alert("Login SUCCESS,welcome "+ regInfoBussData.nickName);
    },
    logWithWallet() {
      emcAuthClient.login({
        onSuccess: (message) => {
          //{"type": "authorize-success","data": "tdvch-tx3ik-r2bzp-pncic-ahjes-57rvk-oa6qu-blzh2-brbs5-x67zv-jae"}
          console.info('success', message);
        },
        onError(message) {
          console.info(message);
        },
      });

    },
    commitReg() {
      this.regInfo.bussData.applRegInfo = JSON.stringify(this.regInfoBussData);
      userRegOrigin(this.regInfo).then(res => {
        if (res.resultCode === 'SUCCESS') {
          this.userInfo.userId = res.bussData.custId;
          this.authInfoData.custId = res.bussData.custId;
          this.setAuthToken();
        } else {
          alert("Register fail,please retry");
        }
      })
      alert("Register has success,please use your login_id and password to re-login");
    },
    setAuthToken() {
      authTokenSet(this.authInfoData).then(res => {
        if (res.resultCode === 'SUCCESS') {
          this.regVisible = false;
          this.loginVisible = false;
        } else {
          alert("Register success!");

          alert("Register fail,please retry");
        }
      })
    }
  }
};
</script>
<style scoped lang="scss">
.modal-div {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  //height: 40px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  //background: #04ad11;

  .modal-ing1 {
    width: 57px;
    height: 40px;
    flex-shrink: 0;
  }

  .modal-img2 {
    margin-left: 10px;
    width: 160px;
    height: 32px;
  }
}
.modal-button-bottom {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 600px;
    height: 50px;
    border-radius: 14px;
    position: relative;
    background: linear-gradient(90deg, #834FFC 0%, #E5AEFF 100%);

    img {
      width: 30px;
      height: 30px;
      position: absolute;
      top: calc(50% - 15px);
      left: calc(40% - 15px);
    }

    span {
      color: #FFF;
      font-family: Montserrat;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      position: absolute;
      top: calc(50% - 18px);
      left:calc(50% - 15px);
    }
  }
}
/deep/ .ivu-input {
  //margin-top: 30px;
  border-radius: 6px;
  width: 600px;
  background: rgba(0, 0, 0, 0.10);
  height: 40px;
}
.register{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: #04ad11;
}
</style>
