<template>
    <div class="container-fluid">
    <div class="row">
      <div class="col-2 py-5 border-right" id="panel">
        <h4 class="mb-5">Admin Menu</h4>
        <button type="button" class="btn btn-outline-dark" @click="goProduct">Add Product</button>
        <button type="button" class="btn btn-outline-dark my-2" @click="goOverview">Overview</button>
        <button type="button" class="btn btn-outline-dark my-2" @click="goTransaction">Transaction</button>
      </div>
      <div class="col-8 my-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        goProduct(){
            this.$router.push('/admin/addProduct')
        },
        goOverview(){
             this.$router.push('/admin/overview')
        },
        goTransaction(){
            this.$router.push('/admin/transaction')
        }
    }
}
</script>

<style>
#panel {
  flex-direction: column;
  align-items: center;
  height: 150vh;
}
</style>
