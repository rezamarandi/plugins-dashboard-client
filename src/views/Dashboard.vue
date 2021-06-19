<template>
  <el-panel>
    <div class="dashboard">
      <div class="dashboard__menu">
        <div class="dashboard__menu__branding">
          <el-logo />
        </div>
        <div class="dashboard__menu__nav">
          <div class="dashboard__menu__nav__item">
            <router-link to="/marketing"><el-icon name="icon-marketing"/>Marketing</router-link>
            <router-link to="/finance"><el-icon name="icon-finance"/>Finance</router-link>
            <router-link to="/personnel"><el-icon name="icon-people"/>Personnel</router-link>
          </div>
        </div>
        <div class="dashboard__menu__footer">
          All plugins enabled
          <el-checkbox icon="icon-power" big />
        </div>
      </div>
      <div class="dashboard__content">
        <h2 class="dashboard__content__title">Dashboard {{ $route.params.tab }}</h2>
        <el-grid>
          <el-plugin />
          <el-plugin />
          <el-plugin />
          <el-plugin />
          <el-plugin />
          <el-plugin />
          <el-plugin />
        </el-grid>
      </div>
    </div>
  </el-panel>
</template>

<style>
  .dashboard {
    display: flex;
    flex-direction: column;
  }

  .dashboard__menu {
    display: flex;
    background: #f1f1f1;
  }

  .dashboard__menu__nav__item {

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