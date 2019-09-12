<template>

<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">{{product1.name}}</div>
  <div class="card-body">
    <h5 class="card-title">{{product1.description}}</h5>
        <img width="200" height="200" :src="product1.image">

    <a :href="'/product/'+product1.uuid"><h2>sitio</h2></a>

  </div>
</div>
</template>


<script>
export default {
  props: ['product1']
}
</script>