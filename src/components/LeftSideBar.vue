<template>
<div class="left-sidebar-pro">
        <nav id="sidebar" class="">
            <div class="sidebar-header">
                <a href="index.html"><img class="main-logo" src="assets/img/logo/logo.png" alt="" /></a>
                <strong><img src="assets/img/logo/logosn.png" alt="" /></strong>
            </div>
			<div class="nalika-profile">
				<div class="profile-dtl">
					<a href="#"><img src="assets/img/notification/4.jpg" alt="" /></a>
					<h2>Lakian <span class="min-dtn">Das</span></h2>
				</div>
				<div class="profile-social-dtl">
					<ul class="dtl-social">
						<li><a href="#"><i class="icon nalika-facebook"></i></a></li>
						<li><a href="#"><i class="icon nalika-twitter"></i></a></li>
						<li><a href="#"><i class="icon nalika-linkedin"></i></a></li>
					</ul>
				</div>
			</div>
            <div class="left-custom-menu-adp-wrap comment-scrollbar">
                <nav class="sidebar-nav left-sidebar-menu-pro">
                    <ul class="metismenu" id="menu1" style="text-align: left;">
                        <li>
                            <router-link class="active" :to="{name: 'Home'}" >
                                <i class="icon nalika-home icon-wrap"></i>
                                <span class="mini-click-non">ACCUEIL</span>
                            </router-link>
                            
                        </li>
                        <li v-for="type in types">
                            <router-link class="" :to="{name: type.code, params : {id: type.id}}" >
                                <i :class="type.icon"></i> 
                                <span class="mini-click-non"> {{ type.intitule }}</span>
                            </router-link>
                           
                        </li>
                        
                        
                    </ul>
                </nav>
            </div>
        </nav>
    </div>
</template>

<script>
import axios from 'axios'

export default ({
    name: "LeftSideBar",
    computed: {
        isInitialize(){
            return this.$store.state.isInitialize;
        },
    },
    data(){
        return {
            types: this.$store.state.types,
            months: this.$store.state.months,
            exercices: this.$store.state.exercices
        }
    },
    mounted(){
        this.gettypes()
        // let month =  this.getMonth()
        // let exercice =  this.getExercice()            
    },
    methods: {
       gettypes() {
           axios.get('/types-comptables')
           .then((res)=>{
                console.log(res.data)
                this.types= res.data.type
           })
       },
       getMonth(){
           axios.get('/mois-comptables')
           .then((res)=>{
                console.log(res.data)
                return res.data.mois
           })
       },
       getExercice(){
           axios.get('/exercices-comptables')
           .then((res)=>{
                console.log(res.data)
                return res.data.exercice
           })
       },
    }
})
</script>
