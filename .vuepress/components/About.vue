<template>
  <div class="box">
    <h2>{{title}}</h2>
    {{message}}<button @click="click">Hi</button>
  </div>

	<div>
this was used with:<br>
&lt;About title="my title"&gt;&lt;/About&gt;
	</div>

</template>
<script>
export default {
  data() {
    return {
      message: 'about page'
    }
  },
  methods: {
    click() {
      alert('hi')
    }
  },
  props: ['title']
}
</script>
<style scoped>
 .box {
   padding: 20px;
   margin: 2px;
   box-shadow: 0 0 10px black;
 }
</style>