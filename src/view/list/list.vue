<template>
    <div>
        list
        <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
            <el-button>中文</el-button>
        </el-row>

        <div class="btn">sss</div>
        <div class="text-komabig">小马大字体</div>
        <div class="bg-bootstrap_primary text-white">像我么</div>
        <div class="bg-bootstrap_success text-white">像我么</div>
        <div class="bg-bootstrap_danger text-white">像我么</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn {
  @apply bg-gray-200 hover:(bg-gray-100 text-red-300) text-9xl text-red-300 bg-red-400 text-center mt-9 pt-3;
}
</style>