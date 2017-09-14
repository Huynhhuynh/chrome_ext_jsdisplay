<template lang="html">
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="main-list-files">
          <h1>Js Display</h1>
          <h4>Javascript ({{ jsfiles.length }})</h4>
          <ul class="ul-file" v-if="jsfiles.length > 0">
            <li class="li-file" v-for="(item, index) in jsfiles">
              <a :href="item.url" target="_blank">{{ item.name }}</a>
            </li>
          </ul>
          <h4>CSS ({{ cssfiles.length }})</h4>
          <ul class="ul-file" v-if="cssfiles.length > 0">
            <li class="li-file" v-for="(item, index) in cssfiles">
              <a :href="item.url" target="_blank">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './hello.vue';
export default {
  data(){
    return {
      name:'vue@2.0'
    }
  },
  computed: {
    jsfiles () {
      return this.$root.jsfiles;
    },
    cssfiles () {
      return this.$root.cssfiles;
    }
  },
  components:{
    hello:Hello
  }
}
</script>

<style lang="css">
  .main-list-files{
    padding: 10px;
    display: block;
    max-width: 300px;
  }
  h1{
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -1.2px;
  }
  h4{
    display: inline-block;
    background: #333;
    color: #FFF;
    border-radius: 20px;
    padding: 0 10px;
    font-size: 14px;
    margin: 15px 0 5px;
    letter-spacing: -.8px;
  }
  .ul-file{

  }
  .li-file{
    white-space: nowrap;
    display: block;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .li-file a{
    color: #333;
    padding: 3px;
    letter-spacing: -0.4px;
  }
  .li-file a:hover{
    color: #555;
    text-decoration: underline;
  }
</style>
