<template>
<div class="left-sidebar-pro">
        <nav id="sidebar" class="">
            <div class="sidebar-header">
                <a href="/"><img class="main-logo" style="width:200px;" src="https://lce-ci.com/assets/img/l.png" alt="" /></a>
                <strong><img src="assets/img/logo/logosn.png" alt="" /></strong>
            </div>
			<div class="nalika-profile">
				<div class="profile-dtl">
					<h2>{{ name }}</h2>
                    <h2>{{ email }}</h2>
				</div>
				<div class="profile-social-dtl">
					<!-- <ul class="dtl-social">
						<li><a href="#"><i class="icon nalika-facebook"></i></a></li>
						<li><a href="#"><i class="icon nalika-twitter"></i></a></li>
						<li><a href="#"><i class="icon nalika-linkedin"></i></a></li>
					</ul> -->
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
                        <li>
                            <router-link :to="{name: 'PlanComptable'}" >
                                <i class="icon nalika-smartphone-call icon-wrap"></i>
                                <span class="mini-click-non">PLAN COMPTABLE</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#"  class="nav-link dropdown-toggle" data-toggle="modal" data-target="#exampleModalCenter" >
                                <i class="icon nalika-forms icon-wrap"></i>
                                <span class="mini-click-non">AJOUTER JOURNAL</span>
                            </a>
                        </li>
                        <li>
                            <a class="has-arrow"  aria-expanded="false"><i class="icon nalika-new-file icon-wrap"></i> <span class="mini-click-non">MES JOURNAUX</span></a>
                            <ul class="submenu-angle" aria-expanded="false">
                                <li v-for="type in types" :key="type.id">
                                    <a class="" :href="'/'+type.id+'/'+type.intitule.toLowerCase()" >
                                        <i :class="type.icon"></i>
                                        <span class="mini-sub-pro"> {{ type.intitule.toLowerCase() }}</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header" >
                        <h5 class="modal-title" id="exampleModalCenterTitle">AJOUTER UN NOUVEAU JOURNAL</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" >
                            <div class="form-group-inner">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="login2">Code :</label>
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                        <input v-model='type.code' type="text" class="form-control" placeholder="Entrer code">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group-inner">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="login2">Nom categorie :</label>
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                        <input v-model="type.intitule" type="text" class="form-control" placeholder="Entrer nom categorie">
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <label class="login2">Icon :</label>
                                    </div>
                                    <div  class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                        <select v-model="type.icon" class="form-control" style="margin-top: 10px; border: 1px solid #ddd" >
                                            <option value="">-- Choisir icon --</option>
                                            <option value="icon nalika-mail icon-wrap">icon mail <i class="icon nalika-mail icon-wrap"></i></option>
                                            <option value="icon nalika-diamond icon-wrap">icon diamond <i class="icon nalika-diamond"></i></option>
                                            <option value="icon nalika-pie-chart icon-wrap"> icon pie-chart <i class="icon nalika-pie-chart "></i></option>
                                            <option value="icon nalika-bar-chart icon-wrap">icon nalika-bar-chart <i class="icon nalika-bar-chart "></i></option>
                                            <option value="icon nalika-table icon-wrap">icon table <i class="icon nalika-table icon-wrap"></i></option>
                                            <option value="icon nalika-forms icon-wrap">icon forms <i class="icon nalika-forms icon-wrap"></i></option>
                                            <option value="icon nalika-smartphone-call icon-wrap">icon smartphone-call <i class="icon nalika-smartphone-call "></i></option>
                                            <option value="icon nalika-new-file icon-wrap">icon new-file <span class="icon nalika-new-file "></span></option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                    </div>
                    <div class="modal-footer" >
                        <button type="button" class="btn btn-ctl-bt waves-effect waves-light" data-dismiss="modal">Annuler </button>
                        <button type="button" @click="createType()" class="btn btn-primary" data-dismiss="modal" >Enregistrer</button>
                    </div>
                </div>
            </div>
        </div>
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
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email"),
            types: this.$store.state.types,
            months: this.$store.state.months,
            exercices: this.$store.state.exercices,
            type: { 
                code:'',
                intitule :'',
                icon:''
            },
        }
    },
    mounted(){
        this.gettypes()
        // let month =  this.getMonth()
        // let exercice =  this.getExercice()            
    },
    methods: {
        createType(){
            axios.post('/types-comptables', this.type)
            .then((res) => {
                this.trytocreatetype = true
                this.status = true
                this.message = "Nouveau journal comptable créé avec succès."
                this.closeMessage()
            })
            .catch((err) => {
                this.trytocreatetype = true
                this.status = false
                this.message = err.message
                this.closeMessage()
            })
    },
    closeMessage(){
        setTimeout(() =>{
        this.trytocreatetype = false,
        this.status = '',
        this.message = ''
        }, 5000)
    },
       gettypes() {
           axios.get('/types-comptables')
           .then((res)=>{
                this.types= res.data.type
           })
       },
       getMonth(){
           axios.get('/mois-comptables')
           .then((res)=>{
                return res.data.mois
           })
       },
       getExercice(){
           axios.get('/exercices-comptables')
           .then((res)=>{
                return res.data.exercice
           })
       },
    }
})
</script>
<style scoped>
/** This is modal style */
    .modal{
    color: white;
    border-bottom-color: none;
    }
    .form-group-inner label {
        font-size: 14px;
        color:white;
    }
    .modal-header, .modal-body, .modal-footer {
    background: #152036;
    border: none;
    }
    .form-group-inner input[type="text"] {
        color: white;
    }
    .modal-body .col-lg-4{
        text-align: end;
    }

</style>