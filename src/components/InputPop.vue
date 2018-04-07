<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <img id="close" src="../assets/button_close.png" height="26" width="26" @click="$emit('close')">
                    <div class="modal-header">
                        <h3>모임 추가하기</h3>
                    </div>

                    <div class="modal-body">
                      <label for="newDate">Date</label>
                      <input type="text" id="newDate" v-model="newDate">
                      <input type="text" id="blank">
                      <br />

                      <label for="newTitle">Title</label>
                      <input type="text" id="newTitle" placeholder="  제목을 적어주세요." v-model="newTitle"><br />

                      <label for="newMember">Member</label>
                      <input type="text" id="newMember" placeholder="  모임에 함께한 멤버들을 적어주세요." v-model="newMember"><br />

                      <label for="newMoney">Money</label>
                      <input type="text" id="newMoney" placeholder="  총금액" v-model="newMoney">
                      <img id="divide-icon" src="../assets/icon_5.png">
                      <input type="text" id="newMemberCount" placeholder="  멤버수" v-model="newMemberCount">
                      <span>=</span>
                      <!-- <div id="money-box"></div> -->
                      <input type="text" id="won">
                      <span>원</span>
                    </div>

                    <div class="modal-footer">
                        <button class="modal-default-button" @click="$emit('close'); addTopic()">
                          <div id="button-text">등록하기</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/javascript">
import eventBus from './EventBus.vue'

export default {
  name: 'input-pop',
  data: function () {
    return { newDate: '',
      newTitle: '',
      newMember:'',
      newMoney:'',
      newMemberCount:''
     }
  },
  methods: {
    addTopic: function () {
      eventBus.$emit('add-topic', this.newtopic)
      this.newtopic = ''
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  z-index: 9998;
}

.modal-container {
  width: 734px;
  height: 460px;
  margin: 0px auto;
  border: solid 8px #dcdcdc;
  padding: 20px 30px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  z-index: 9998;
}

#close {
  float: right;
}

.modal-header h3 {
  margin-top: 50px;
  margin-left: 286px;
  width: 200px;
  height: 50px;
  mix-blend-mode: undefined;
  font-family: NanumSquareOTFB;
  font-size: 25.8px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.69;
  letter-spacing: normal;
  /*text-align: left;*/
  color: #5d5d5d;
}

.modal-body {
  margin-top: 20px;
  margin-bottom: 40px;
  /*width: ;*/
}

.modal-default-button {
  width: 176px;
  height: 53px;
  mix-blend-mode: undefined;
  background-color: #fcac45;
  box-shadow: 0px 5px 15px 0 rgba(81, 81, 81, 0.29);
  /*margin-bottom: 45px;*/
}

#button-text {
  width: 100px;
  height: 20px;
  margin: 0 auto;
  margin-bottom: 16px;
  mix-blend-mode: undefined;
  font-family: NanumSquareOTFB;
  font-size: 19.9px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.2;
  letter-spacing: normal;
  /*text-align: left;*/
  color: #ffffff;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

label {
  width: 32px;
  height: 13px;
  mix-blend-mode: undefined;
  font-family: Roboto;
  font-size: 15.9px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.75;
  letter-spacing: normal;
  text-align: left;
  color: #5d5d5d;
}

/*.modal-body input {
  float: left;
  margin-left: 200px;
}*/

.modal-body label {
  float: left;
  margin-left: 110px;
}

#newDate {
  /*float: right;*/
  width: 145px;
  height: 40px;
  border: solid 2px #dcdcdc;
  margin-bottom: 8px;
}

#newTitle {
  width: 420px;
  height: 40px;
  border: solid 2px #dcdcdc;
  margin-bottom: 8px;
}

#newMember {
  width: 420px;
  height: 40px;
  border: solid 2px #dcdcdc;
  margin-bottom: 8px;
}

#newMoney {
  width: 113px;
  height: 40px;
  border: solid 2px #dcdcdc;
}

#newMemberCount {
  width: 113px;
  height: 40px;
  border: solid 2px #dcdcdc;
}

#won {
  width: 113px;
  height: 40px;
  border: solid 2px #fcac45;
}

.modal-body span {
  font-size: 25px;
  top: 2px;
}

#money-box {
  width: 113px;
  height: 40px;
  border: solid 2px #dcdcdc;
}

.modal-body input {
  font-family: NanumSquareOTFR;
}

#blank {
  width: 263px;
  border: 0;
  outline: none;
}

</style>
