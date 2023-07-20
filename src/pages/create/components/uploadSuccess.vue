<template>
  <div class="create-upload-div-detail">
    <img class="img2" src="@/assets/images/ra.png" />
    <div class="create-right-bottom transform">
      <Button>转化</Button>
    </div>
    <div class="create-content-bottom">
      <Input maxlength="2000" show-word-limit />
      <Button>翻译</Button>
      <Button>发送</Button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.create-upload-div-detail {
  width: 692px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 6px;
  // background: rgba(0, 0, 0, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.create-content-bottom {
  width: 100%;
  height: 71px;
  border-radius: 6px;
  background: #eee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  button {
    width: 98px;
    height: 36px;
    border-radius: 26px;
    background: linear-gradient(90deg, #834ffc 0%, #e5aeff 100%);
  }
}
.img2 {
  margin-top: 120px;
  width: 320px;
  height: 430px;
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

.transform {
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
