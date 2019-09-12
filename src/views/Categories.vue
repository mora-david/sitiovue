<template>
<div>



      <div class="espacio col-sm-12">
          <h2>Categories</h2>
          <div class="container mt-2 espacio2">
              <div class="row">
                <input class="input pl-0 pr-0 font-weight-bold" type="text" placeholder="Browse categories">
                <span class="icon-search pl-0 pr-0 text-right lupa"></span>
              </div>
            </div>
      </div>

      <section>

        
        

      <div class="d-flex align-content-stretch flex-wrap container" id="prueba">
      
<div class="cate" id="Cstores" v-for="categorie in categories.categories" :key="id=categorie.id">
              <div class="colorw">
                <p class="icon"><i class="fas fa-volume-down icon"></i></p>
                <a :href="'category/' + categorie.uuid">sitio</a>
                <p class="categoria">{{categorie.name}}</p>
                <p class="listening">listening</p>
              </div>
            </div>
      </div>

      </section>


  </section>   
</div>
</div>
</template>





<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header1 from '@/components/header1.vue'


export default {
  data (){
    return{
      categories: [],
      baseUrlApi: 'http://fundamentos.academlo.com/api/v1/'
    }
  },
  created(){
    this.getCategories()
  },
  methods: {
getCategories(){
  const url = 'http://fundamentos.academlo.com/api/v1/directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories'

    axios.get(url)
      .then(response => {
        this.categories = response.data
        console.log(response)
        //alert('hola')
      })
      
    
}
  },
  name: 'home',
  components: {
    HelloWorld,
    Header1,
  }
}
</script>