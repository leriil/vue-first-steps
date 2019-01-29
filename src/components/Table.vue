<template>

  <div>
  <form>
     <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Name</label>
      <input class="form__input form-control" v-model.trim="$v.name.$model"/>
   </div>
   <div class="error" v-if="!$v.name.required">Field is required</div>
   <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
  <!-- <tree-view :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></tree-view> -->
</div>
</div>
  </form>



  <vue-virtual-table
    :config="tableConfig"
    :data="tableData"
    :language="language"
    :selectable="true"
  >
   <template slot-scope="scope" slot="actionCommon">
      <button class="btn btn-light" @click="edit(scope.index, scope.row)">Edit</button>
      <button class="btn btn-light" @click="del(scope.index, scope.row)">Delete</button>
    </template>
  </vue-virtual-table>
  </div>
</template>
 
<script>
import VueVirtualTable from 'vue-virtual-table';
import { required, minLength, between } from 'vuelidate/lib/validators';
export default {
  components: {
    VueVirtualTable
  },
  data: function(){
    return{
      name:'',
      language: 'en',
      // tableWidth: 500,
      tableConfig: [
      {prop: 'user', name: "User", searchable: true},
      {prop: 'age', name: "Age", numberFilter: true},
      {prop: '_action', name: 'Action', actionName: 'actionCommon'}
    ],
    tableData: [
      {user: 'a1', age: 20},
      {user: 'a2', age: 21},
      {user: 'a3', age: 23}
    ]
    }
  },
  methods:{
    edit( index, row){
      console.log('editting: ' + index+' ' + row);
    },
    del(index, row){
      console.log('deleting: ' + index+' ' + row);
    }
  },
  validations:{
    name: {
      required,
      minLength: minLength(4)},
    age:{
      between: between(20,30)
      }
  }
}
</script> 
<style>
  .error{
    color:coral;
  }
</style>