<template>
    <div class="header-advance-area">
        <div class="header-top-area">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="header-top-wraper">
                            <div class="row">
                                <div class="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                                    <!-- <div class="menu-switcher-pro">
                                        <button type="button" id="sidebarCollapse" class="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn">
                                            <i class="icon nalika-menu-task"></i>
                                        </button>
                                    </div> -->
                                </div>
                                <div class="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                                    <!--<div class="header-top-menu tabl-d-n hd-search-rp">
                                        <div class="breadcome-heading">
                                            <form role="search" class="" @submit.prevent="">
                                                <input type="text" placeholder="Search..." class="form-control">
                                                <a href=""><i class="fa fa-search"></i></a>
                                            </form>
                                        </div>
                                    </div> -->
                                </div>
                                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                    <div class="header-right-info">
                                        <ul class="nav navbar-nav mai-top-nav header-right-menu">
                                            <li class="nav-item">
                                                <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link dropdown-toggle">
                                                    <i class="icon nalika-user"></i>
                                                    <span class="admin-name"> {{ name }} </span>
                                                    <i class="icon nalika-down-arrow nalika-angle-dw"></i>
                                                </a>
                                                <ul role="menu" class="dropdown-header-top author-log dropdown-menu animated zoomIn" style="left:-100px;">
                                                    <li>
                                                        <router-link :to="{name: 'Profile' }">
                                                            <span class="icon nalika-user author-log-ic"></span> Mon Profile
                                                        </router-link>
                                                    </li>
                                                    <li><a href="" @click.prevent="deconnexion()"><span class="icon nalika-unlocked author-log-ic"></span> Deconnexion</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li v-if="false" class="nav-item nav-setting-open"><a href="#" role="button" class="nav-link dropdown-toggle" data-toggle="modal" data-target="#exampleModalCenter"><i class="icon nalika-menu-task"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <!-- Mobile Menu start -->
        <div class="mobile-menu-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="mobile-menu">
                            <nav id="dropdown">
                                <ul class="mobile-menu-nav">
                                    <li>
                                        <router-link class="active" :to="{name: 'Home'}" >
                                            <i class="icon nalika-home icon-wrap"></i>
                                            <span class="mini-click-non"> ACCUEIL</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{name: 'PlanComptable'}" >
                                            <i class="icon nalika-smartphone-call icon-wrap"></i>
                                            <span class="mini-click-non"> PLAN COMPTABLE</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <a href="#"  class="nav-link dropdown-toggle" data-toggle="modal" data-target="#exampleModalCenterHeader" >
                                            <i class="icon nalika-forms icon-wrap"></i>
                                            <span class="mini-click-non">AJOUTER JOURNAL</span>
                                        </a>
                                    </li>
                                    <li><a data-toggle="collapse" data-target="#others" href="#"><i class="icon nalika-new-file icon-wrap"></i> JOURNAL <span class="admin-project-icon nalika-icon nalika-down-arrow"></span></a>
                                        <ul id="others" class="collapse dropdown-header-top">
                                            <li v-for="type in types" :key="type.id">
                                                <a class="" :href="'/'+type.id+'/'+type.intitule.toLowerCase()" >
                                                    <span class="mini-sub-pro">     {{ type.intitule.toLowerCase() }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile Menu end -->
        <div class="breadcome-area">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="breadcome-list" style="margin: 20px 0px 30px 0px">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div class="breadcomb-wp">
                                        <div class="breadcomb-icon">
                                            <i :class="icon"></i>
                                        </div>
                                        <div class="breadcomb-ctn" style="text-align: left;">
                                            <h2>{{ titre }}</h2>
                                            <p>Bienvenue dans votre espace <span class="bread-ntd">d'administration comptable</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <slot></slot>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <div class="breadcomb-report">
                                        <button data-toggle="dropdown" data-placement="left" role="button" title="Faire un rapport"  aria-expanded="false" class=" btn nav-link dropdown-toggle" >
                                            <i class="icon nalika-download"></i>
                                        </button>
                                        <ul role="menu" class="dropdown-header-top author-log dropdown-menu animated zoomIn">
                                            <li>
                                                <router-link :to="{name: 'Livre'}">
                                                       Grand Libre
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link :to="{name: 'Balance'}">
                                                    Balance
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="trytocreatetype">
            <p v-if="status" class="text-success">{{ message }}</p>
            <p v-else class="text-danger">{{ message }}</p>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenterHeader" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
name: 'Header',
props: ['titre', 'icon'],
data() {
    return {
        name: localStorage.getItem("name"),
        types: [],
        type: { 
            code:'',
            intitule :'',
            icon:''
        },
        trytocreatetype:false,
        status:'',
        message:''
    }
},
mounted() {
    this.gettypes()
},
methods: {
    gettypes() {
        axios.get('/types-comptables')
        .then((res)=>{
            this.types= res.data.type
        })
    },
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
    deconnexion(){
        localStorage.removeItem('token')
        this.$router.push({path: '/login'})
    }

}
})
</script>
<style scoped>
    .mobile-menu-area{
        text-align: left;
    }
    .breadcomb-report .author-log{
        opacity: 1;
        /* //top: 165%; */
        transition: all 0.5s ease 0s;
        visibility: visible;
        width: 200px;
        padding: 10px 0px;
        background: #1b2a47;
        /*left: -100px;*/
    }

    .breadcomb-report ul li .author-log {
        position: absolute;
        z-index: 999;
    }


    .breadcomb-report li .dropdown-menu {
        border: 0px solid #ccc;
        border: 0px solid rgba(0,0,0,.15);
    }
    
    .breadcomb-report .author-log li a {
        padding: 10px 20px;
        display: block;
        color: #fff;
        font-size: 14px;
    }

    .breadcomb-report .author-log li a:hover{
        background: #152036;
        color: #fff;
        outline: none;
    }

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

    /** Icon css */
    
</style>