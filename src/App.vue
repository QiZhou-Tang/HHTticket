<template>
  <div id="app" style="background-color:#262a42;">
    <!-- 顶部通栏 -->
    <b-navbar toggleable="md" type="dark" style="background:#181b2a;" fixed="top">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="http://hht.one/#/home"><img src="./assets/hashtokenlogo.png"></b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="http://hht.one/#/trade">币币交易</b-nav-item>
          <b-nav-item href="#" active>投票上币</b-nav-item>
          <b-nav-item href="http://hht.one/#/home">HHT PRO</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="搜索币种" />
            <b-button size="sm" class="my-2 my-sm-0 btn-outline-warning" type="submit">确定</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="简体中文" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>UserName</em>
            </template>
            <b-dropdown-item href="#">个人中心</b-dropdown-item>
            <b-dropdown-item href="#">登出</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <!-- banner -->
    <div class="jumbotron banner">
      <div class="container">
        <h2 class="bannerinfo text-center" style="color:#cfb07b">投票上币，由你做主</h2>
        <p class="banner_times text-center">每投 1 票需支付0.1 HT，每次可以投多票，可以多次投票。投票支付的HT不予退还。<br>以每期投票截止时间为准，票数榜排名靠前(同时参考人气榜排名)的项目可上线HADAX。</p>
      </div> -->
      <p class="text-center">
        <a href="https://support.huobipro.com/hc/zh-cn/articles/360000754171" class="btn btn-outline-warning btn-lg" role="button">
          投币上币规则</a>
      </p>
    </div>

    <!-- body -->
    <!-- 倒计时 -->
    <div class="infobar" style="background-color:#181b2a;">
      <div class="nextime">
        <span>下期投票开始时间</span>
        :
        <em>{{nextime.beginTime}}</em>
        <br>
        <span class="nextimeInfo">本期投票已结束，投票结果请关注公告</span>
        <a href="https://support.huobipro.com/hc/zh-cn/articles/360000754211-HADAX%E4%B8%8A%E5%B8%81%E7%94%B3%E8%AF%B7%E8%AF%B4%E6%98%8E"><img src="./assets/hand.svg">上币申请</a>
      </div>
    </div>

    <!-- 币种排名 -->
    <b-card no-body style="background-color:#181b2a;">
      <b-tabs pills card>
        <b-tab title="票数榜" active>

          <div v-for="(item,index) in ByTicket" :key="index" class="content">

            <div class="left">
              <div class="d-flex align-items-start">
                <div class="crownbg">
                  <p class="crown text-center">{{index+1}}</p>
                </div>

                <div class=" flex-column">
                  <h3>{{item.title}}</h3>
                  <span class="text-info">{{item.name}}</span>
                </div>
              </div>
            </div>

            <b-btn @click="toggle()" class="btn btn-outline-info">查看介绍</b-btn>

            <div v-show="isShow">
              <p class="card-text text-light">{{item.resume}}</p>
              <a v-bind:href="item.officialUrl">前往官网</a>
              <a v-bind:href="item.whitebookUrl">查看白皮书</a>
            </div>

            <!-- <div class="checkinfo">
              <b-btn class="btn btn-outline-info" v-b-toggle.collapse1>查看介绍</b-btn>
              <b-collapse id="collapse1" class="mt-2 ">
                <b-card>
                  <p class="card-text text-light">{{item.resume}}</p>
                  <a href="#">前往官网</a>
                  <a href="#">查看白皮书</a>
                </b-card>
              </b-collapse>
            </div> -->

            <div class="totalTicket">
              <p class="vote">
                <b style="font-size:24px;">{{item.totalTicket}}
                  <strong class="text-danger">票</strong>
                </b>
                <span class="text-secondary">{{item.totalPeople}}
                  <strong class="text-warning">人支持</strong>
                </span>
              </p>
            </div>

          </div>
        </b-tab>

        <!-- 人数榜 -->
        <b-tab title="人数榜">
          <!-- <ul>
            <li v-for="item in PeopleData" :key="item">
              {{item.title}}{{item.name}}
              <button @click="changShow">查看介绍</button>
              <div style="display:inline-block">
                {{item.totalTicket}}票 {{item.totalPeople}}人支持
              </div>
              <button>为他拉票</button>
              <button>暂停投票</button>
              <div>
                <div v-show="isShow">
                  <p class="card-text text-light">Engine是基于区块链建立的汽车大数据共享平台，为每辆车建立终身不可篡改的数字档案。Engine将在车况查询、车辆价值评估、汽车交易、汽车金融服务、汽车安全等领域扮演不可替代的重要作用。</p>
                  <a href="#">前往官网</a>查看介绍
                  <a href="#">查看白皮书</a>
                </div>
              </div>
            </li>
          </ul> -->

          <ul>
            <li v-for="(post,index) in PeopleData" :key="index.id">
              <div class="crownbg">
                <p class="crown text-center">{{index+1}}</p>
              </div>
              <div class="Tokenname">
                <div class="text-light">{{post.title}}</div>
                <div class="text-info">{{post.name}}</div>
              </div>

              <b-btn @click="toggle(index)" class="btn btn-outline-info">查看介绍</b-btn>

              <div class="totalTicket">
                <p class="vote">
                  <em style="font-size:24px;">{{post.totalTicket}}
                    <i class="text-info">票</i>
                  </em>
                  <span class="text-secondary">{{post.totalPeople}}
                    <i class="text-info">人支持</i>
                  </span>
                </p>
              </div>

              <!-- <div class="toupiaobutton">
                <button type="button" class="btn btn-outline-warning">为他拉票</button>
                <b-btn variant="">暂停投票</b-btn>
              </div> -->

              <div id="root" class="container">
                <button type="button" class="button is-primary" @click="show()">显示</button>
                <zen-modal v-if="showModal"></zen-modal>
              </div>

              <div class="showinfo" v-show="index==isShow">
                <p class="card-text text-light">{{post.resume}}</p>
                <a href="#">前往官网</a>
                <a href="#">查看白皮书</a>
              </div>
            </li>
          </ul>

        </b-tab>
      </b-tabs>
    </b-card>

    <div class="votebutton">
      <b-modal class="modelcontent" id="modal-center" centered title="扫码投票">
        <p class="my-4 d-flex justify-content-around">
          <img src="./assets/iconfont/wechat.svg">
          <img src="./assets/iconfont/weibo.svg">
          <img src="./assets/iconfont/qq.svg">
        </p>
      </b-modal>
      <b-btn v-b-modal.modal-center class="btn-outline-success">为他拉票</b-btn>
      <b-button href="#" disabled variant="secondary">暂停投票</b-button>
    </div>

    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- 自定义模态框内容 -->
        <slot>默认模态框内容</slot>
      </div>
      <button class="modal-close"></button>
    </div>

    <!-- foot -->
    <div class="jumbotron-fluid foot">
      <div class="m-footer ">
        <div class="content d-flex align-items-start">
          <dl>
            <dt>
              <a href="#">下载支持</a>
            </dt>
            <dd>
              <a href="#">API文档</a>
            </dd>
            <dd>
              <a href="#">APP下载</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="#">客服服务</a>
            </dt>
            <dd>
              <a href="#">使用教程</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="#">常见问题</a>
            </dt>
            <dd>
              <a href="#">服务协议</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="#">本站公告</a>
            </dt>
          </dl>
          <dl>
            <dt>
              <a href="#">联系我们</a>
            </dt>
          </dl>
        </div>
      </div>
      <span class="copyright text-light">hht.one 版权所有 @ 2018</span>
    </div>

  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import common from "./common/common";
import index from "vue";

// import Vodal from "vodal";
// import "vodal/rotate.css";
// Vue.use(Vodal.name, Vodal);

Vue.use(VueAxios, axios);
export default {
  name: "app",

  data() {
    return {
      ByTicket: {},
      PeopleData: {},
      nextime: {},
      isShow: false,
      showModal: false
    };
  },
  ready() {
    // this.getByPeopleData()
  },
  created() {
    this.getByPeopleData();
    this.getByTicket();
    this.getScheduleList();
  },
  methods: {
    toggle(index) {
      if (this.isShow == index) {
        this.isShow = -1;
      } else {
        this.isShow = index;
      }
    },

    show() {
      this.showModal = true;
    },

    getByPeopleData() {
      // 获取人数排行榜
      const url = `${
        common.apihost
      }vote/getVoteCandidateCoinListOrderByPeople.o`;

      axios.get(url).then(
        response => {
          this.PeopleData = response.data.result;
          console.log(response);
        },
        err => {}
      );
    },

    getScheduleList() {
      //获取下次投票开始时间
      const url = `${common.apihost}vote/getVoteScheduleList.o`;

      axios.get(url).then(
        response => {
          this.nextime = response.data.result[0];
          console.log(response);
        },
        err => {}
      );
    },

    getByTicket() {
      // 获取票数排名
      const url = `${
        common.apihost
      }vote/getVoteCandidateCoinListOrderByTicket.o`;

      axios.get(url).then(
        response => {
          this.ByTicket = response.data.result;
          console.log(response);
        },
        err => {}
      );
    }
  },

  mounted() {
    // $("#collapse1").on("show.bs.modal", function() {
    //   // 执行一些动作...
    // });
    // $("#basicModal").on("shown.bs.modal", function(e) {
    //   alert("Modal is successfully shown!");
    // });
  }
};
</script>





<style scoped lang="stylus" rel="stylesheet/stylus">
// @import "vodal/common.css";
// @import "vodal/rotate.css";
ul, li {
  padding: 0;
  margin: 0;
  list-style: none;
}

div.jumbotron.banner {
  background: url('assets/banner.jpg') no-repeat center center;
  height: 650px;
  margin-top: 50px;
  margin-bottom: -8px;
}

.bannerinfo {
  font-size: 50px;
  font-weight: 400;
  margin-top: 200px;
}

.banner_times {
  font-size: 16px;
  line-height: 26px;
  padding-bottom: 50px;
  color: #c7cce6;
}

div.infobar {
  width: 1200px;
  height: 166px;
  margin: 0 auto;
}

div.nextime {
  padding-top: 40px;
  margin-left: 70px;
  color: pink;
}

div span.nextimeInfo {
  width: 373px;
  padding-top: 30px;
  position: absolute;
  color: white;
}

div.nextime a {
  position: relative;
  left: 850px;
  top: -25px;
  text-decoration: none;
}

div.card {
  top: 30px;
  width: 1200px;
  margin: 0 auto;
}

div.card-body {
  background-color: #141724;
  width: 1200px;
  margin: 0 auto;
}

div.card-body a {
  padding-right: 20px;
  text-decoration: none;
}

.content {
  display: flex;
  height: 120px;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

p.vote {
  position: absolute;
  right: 450px;

  b {
    position: absolute;
    top: -40px;
    width: 300px;
  }
}

.crownbg {
  height: 50px;
  width: 50px;
  background: url('assets/iconfont/glod.svg');
  background-size: cover;
  display: block;
  margin-left: 20px;
  float: left;
}

p.crown {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: black;
  font-weight: bold;
}

div.flex-column {
  margin-left: 80px;
}

.btn.btninfo.btn-primary {
  float: right;
  margin-right: 200px;
}

.votebutton {
  padding-left: 30px;
  padding-bottom: 20px;
}

.btn.btn-outline-info {
  position: absolute;
  left: 400px;
}

// .toupiaobutton {
// position: absolute;
// right:200px;
// }
div.showinfo {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 30px 50px;
  border: 2px solid #fff;
  border-radius: 20px;
}

/* foot */
.jumbotron-fluid.foot {
  background-color: #181b2a;
  margin-top: 100px;
}

.modal-dialog-centered .modal-content {
  background-color: black;
}

.my-4 img {
  width: 40px;
  height: 40px;
}

.m-footer {
  background: $color-footer-bg;
  height: 171px;
  width: 100%;
  margin: 0 auto;

  .content {
    width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 23px;

    dl {
      dt {
        margin-top: 14px;

        a {
          color: #fff;
          font-size: $font-size-medium;
          text-decoration: none;
        }
      }

      dd {
        margin-top: 14px;

        a {
          font-size: $font-size-small;
          color: $color-footer-subcolor;
          text-decoration: none;
        }
      }
    }
  }
}

span.copyright.text-light {
  font-size: $font-size-small;
  position: relative;
  left: 45%;
  top: -35px;
}
</style>
