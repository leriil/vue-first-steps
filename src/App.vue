<template>
  <div class="container">
    <form>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>File a complaint</h1>
                <hr>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="text"
                            id="email"
                            class="form-control"
                            v-model="userData.email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <!-- lazy modifier will only change the value when the user stopped input -->
                    <input type="password"
                            id="password"
                            class="form-control"
                             v-model.lazy="userData.password">
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="number"
                            id="age"
                            class="form-control" 
                            v-model.number="userData.age">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <label for="message">Message</label>
                <!-- interpolation <textarea>{{test}}</textarea> doesn't work! -->
                <!-- to prepopulate the text field use v-model="messsage" -->
                <textarea   id="message" 
                            cols="30" 
                            rows="5" 
                            class="form-control" v-model="message"></textarea>
            </div>
        </div>
        <div class="row">
             <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                 <div class="form-group">
                     <label for="sendmail">
                         <input type="checkbox"
                                id="sendmail"
                                value="SendMail">Send mail      
                     </label>
                     <label for="sendInfomail">
                         <input type="checkbox"
                                id="sendInfomail"
                                value="sendInfoMail">Send Infomail      
                     </label>
                 </div>
             </div>
        </div>
        <div class="row">
             <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                 <label for="male">
                     <input type="radio"
                            id="male"
                            value="Male">Male
                 </label>
                 <label for="female">
                     <input type="radio"
                            id="female"
                            value="Female">Female
                 </label>
             </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <label for="priority">Priority</label>
                <select id="priority"
                        class="form-control">
                        <option></option></select>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <button class="btn btn-primary">
                    Submit
                </button>
            </div>
        </div>
    </form>
    <hr>
    <div class="row">
         <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
             <div class="panel panel-default">
                 <div class="panel-heading">
                     <h4>Your Data</h4>
                 </div>
                 <div class="panel-body">
                     <p>Mail: {{userData.email}} </p>
                     <p>Password: {{userData.password}}</p>
                     <p>Age: {{userData.age}}</p>
                     <!-- this style will keep the multi-line string -->
                     <p style="white-space: pre">Message: {{message}} </p>
                     <p><strong>Send mail? </strong></p>
                     <ul>
                         <li></li>
                     </ul>
                     <p>Gender: </p>
                     <p>Priority: </p>
                 </div>
             </div>
         </div>
    </div>
  </div>
</template>

<script>
  
  // import Table from './components/Table.vue';
  export default {
    data(){
        return{
            // we bind the property to the input field using v-model
            userData:{
                email:'',
                password:'',
                age:27
            }, 
            message:'A new text'
        }
    }
}
</script>

<style>

</style>
