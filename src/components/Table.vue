<template>
  <vue-virtual-table
    :config="tableConfig"
    :data="tableData"
    :language="language"
    :selectable="true"
  >
   <template slot-scope="scope" slot="actionCommon">
      <button @click="edit(scope.index, scope.row)">Edit</button>
      <button @click="del(scope.index, scope.row)">Delete</button>
    </template>
  </vue-virtual-table>
</template>
 
<script>
import VueVirtualTable from 'vue-virtual-table'
export default {
  components: {
    VueVirtualTable
  },
  data: function(){
    return{
      language: 'en',
      // tableWidth: 500,
      tableConfig: [
      {prop: 'user', name: "Name", searchable: true},
      {prop: 'age', name: "Age", numberFilter: true}
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
  }
}
</script> 