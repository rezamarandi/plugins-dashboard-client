<template>
  <el-panel>
    <div class="dashboard">
      <div class="dashboard__menu">
        <div class="dashboard__menu__branding">
          <el-logo />
        </div>
        <div class="dashboard__menu__nav">
          <div class="dashboard__menu__nav__item">
            <router-link active-class="active" to="/"><el-icon name="icon-marketing"/>Marketing</router-link>
            <router-link active-class="active" to="/finance"><el-icon name="icon-finance"/>Finance</router-link>
            <router-link active-class="active" to="/personnel"><el-icon name="icon-people"/>Personnel</router-link>
          </div>
        </div>
        <div class="dashboard__menu__footer">
          <label class="dashboard__menu__footer__label">All plugins enabled</label>
          <el-checkbox icon="icon-power" big />
        </div>
      </div>
      <div class="dashboard__content">
        <h2 class="dashboard__content__title">Dashboard {{ $route.params.tab }}</h2>
        <el-grid>
          <el-plugin
          v-for="(plugin, index) in data.plugins"
          :key="index"
          />
        </el-grid>
      </div>
    </div>
  </el-panel>
</template>
<script>
export default {
  data() {
      return {
        data: []
      }
    },

    created() {
      fetch("/api/plugins")
        .then(res => res.json())
        .then(json => {
          this.data = json[0]
          //Something something
        })
      //   const requestOptions = {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //   };
      // fetch("/api/plugins", requestOptions)
      //   .then(res => res.json())
      //   .then(json => {
      //     console.log(json)
      //   })

    }
}
</script>
<style>
  .dashboard {
    display: flex;
    flex-direction: column;
  }

  .dashboard__menu {
    --background: var(--color-green);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f1f1f1;
  }

  .dashboard__menu__branding {
    padding: 25px 40px;
  }

  .dashboard__menu__nav__item a {
    display: flex;
    color: inherit;
  }

  .dashboard__menu__nav__item a.active {
    border-color: var(--color-red);
  }

  @media screen and (max-width: 767px) {
    .dashboard__menu__nav {
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      justify-content: space-between;
      padding-right: 40px;
      padding-bottom: 20px;
      padding-left: 40px;
      background-color: var(--color-light);
      border-top: 2px solid var(--color-light-gray);
      z-index: 99;
    }

    @supports (-webkit-backdrop-filter: blur(20px)) or (backdrop-filter: blur(20px)) {
      .dashboard__menu__nav {
        background-color: transparent;
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
      }
    }

    .dashboard__menu__nav__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .dashboard__menu__nav__item a {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      line-height: 20px;
      padding-top: 10px;
      border-top: 4px solid transparent;
      margin-top: -2px;
      min-width: 48px;
    }

    .dashboard__menu__nav__item svg {
      width: 16px;
      height: 16px;
    }
  }

  .dashboard__menu__footer {
    display: flex;
    align-items: center;
    padding: 25px 40px;
    background: linear-gradient(-90deg, var(--background) -30%, transparent 35%);
  }

  .dashboard__menu__footer__label {
    font-size: 13px;
    line-height: 16px;
    margin-right: 30px;
  }

  .dashboard__content {
    padding: 30px 40px 40px;
  }

  .dashboard__content__title {
    margin: 0 0 36px;
    font-size: 16px;
    font-weight: var(--font-weight-regular);
    line-height: 20px;
  }
</style>