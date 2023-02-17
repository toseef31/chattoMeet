<template>
  <div class="home">
  <div class="">
    <div class="row mx-0">
     <div class="col-md-4 d-none d-md-block"><div style="overflow: hidden;height:100vh"><img alt="Vue logo" src="../assets/side_bar.jpeg" class="w-100" style="object-fit: cover;"></div></div>
     <div class="col-md-8">
      <v-easy-camera
    v-model="picture"></v-easy-camera>
      <div :style="cssProps" class="backgroundimg" style="display:none">
     	
     	<div class="row  justify-content-center" style="align-items: center;
    height: 100%;">
     		 <div class="col-md-5 mainclass">
     		 	<form>
     		 	  <div class="form-row">
     		 	  	<div>
     		 	  	<img class="text-start mb-4" src="../assets/chattologo.svg">
     		 	  	</div>
     		 	   <h4 class="text-start mb-0"><b>Welcome to Chatto Meeting</b></h4>
     		 	   <p class="text-muted text-start" style="font-size:14px">Getting Started in easy, Enter detail givin below</p>
     		 	    <div class="form-group col-md-12 mt-4 mb-4">
     		 	      <input type="text" class="form-control" v-model="mobile" id="inputPassword4" placeholder="+ 80-1234-5678">
     		 	    </div>
     		 	  </div>
     		 	  
     		 	  <button type="button" @click="createmeeting()" class="btn btn-success d-grid w-100 mt-3 border-0 rounded py-2" style="background-color:black">Create Meeting</button>
     		 	</form>
     		 </div>
     	</div>
     </div></div>
    </div>
   </div>
  </div>
</template>

<script>
import EasyCamera from 'easy-vue-camera';
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    'v-easy-camera': EasyCamera,
  },
  data() {
  return {
  cssProps: {
        backgroundImage: `url(${require('@/assets/bg.png')})`
     },
     mobile: ''
    }
  },

  methods:{
  	
  	createmeeting(){
		   if(this.mobile){
		    var id = Math.floor(Math.random() * 19999999);  
		    var url = window.location.hostname+'/meeting?meetingID='+id;
		    var message = 'Hi please join meeting on this link '+url;
			    var obj = {
			    	message : message,
			    	phone : this.mobile
			    };
		    console.log(obj);

		    axios.post('http://localhost:8000/twillo',obj).then(response => {
		          window.location.replace("/meeting?meetingID="+id);
		                  }, function(err) {
		                    console.log('err', err);
		                  })
				}

    	}
  }
};
</script>
<style>
.backgroundimg{
	background-size: 100% 100%;
  height: 100vh;
  background-repeat: no-repeat;
}
.mainclass{
	  background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 1px #ddd;
}
.mainclass form{
    padding: 25px;
}
@media only screen and (max-width: 600px) {
  .backgroundimg{
  	background: none !important;
  }
}
</style>
