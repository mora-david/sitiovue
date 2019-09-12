<template>

<div>
    <h2>{{category.name}}</h2>

<div class="d-flex align-content-stretch flex-wrap container">
<!-- <h2>{{category.name}}</h2> -->
<!-- <h1>{{$route.params.id}}</h1> -->
<div v-for="product in category.products" :key="product.id">
<!-- <h2>{{product}}</h2> -->

<Card :product1="product"></Card>
</div>

    </div>
    </div>
</template>

<script>
import Card from '@/components/card.vue'
export default {
    data(){
        return {
            category: '',
        }
    },
    created(){
        this.getCategory()
        
    },
    methods: {
        getCategory(){
  const url = 'http://fundamentos.academlo.com/api/v1/categories/'+this.$route.params.id+'/products'
    axios.get(url)
      .then(response => {
        this.category = response.data
        //console.log(this.category.name)
      })
      
    
}
        
    },
    components: {
      Card  
    }
}
</script>