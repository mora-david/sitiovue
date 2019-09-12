<template>
<div>
    <Productodesc :producto1="product"></Productodesc>
    </div>
</template>


<script>
import Productodesc from '@/components/ProductoDesc.vue'
export default {
    data(){
        return {
            product: '',
        }
    },
    created(){
        this.getCategory()
        
    },
    methods: {
        getCategory(){
            
  const url = 'http://fundamentos.academlo.com/api/v1/products/'+this.$route.params.id
    axios.get(url)
      .then(response => {
        this.product = response.data
        //alert('ik')
        //console.log(this.category.name)
      })
      
    
}
        
    },
    components: {
      Productodesc  
    }
}
</script>