<template>
<div>
    <LeftSideBar/>
     <!-- Start Welcome area -->
    <div class="all-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="logo-pro" >
                        <a href="/"><img class="main-logo" style="width:150px" src="https://lce-ci.com/assets/img/l.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <Header :titre="titre" :icon="icon" /> <!-- -->
        <!-- Categorie stat -->
        <div class="section-admin container-fluid">
            <div class="row admin text-center">
                <div class="col-md-12">
                    <div class="row">
                        <div v-for="type in types" class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div class="hpanel responsive-mg-b-30">
                                <div class="panel-body">
                                    <div class="text-center content-box">
                                        <h2 class="m-b-xs">{{ type.intitule }}</h2>
                                        <p class="font-bold text-info">{{ type.code }}</p>
                                        <div class="m icon-box">
                                            <i :class="type.icon" aria-hidden="true"></i>
                                        </div>
                                        <p class="small mg-t-box">
                                        </p>
                                        <a :href="'/'+type.id+'/'+type.intitule.toLowerCase()">
                                            <button class="btn btn-info btn-sm">Voir Livre</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Graphics areas -->
        <!--<div class="product-sales-area mg-tb-30">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="product-sales-chart">
                            <div class="portlet-title">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="caption pro-sl-hd">
                                            <span class="caption-subject text-uppercase"><b>Order Statistic</b></span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="actions graph-rp">
                                            <a href="#" class="btn btn-dark-blue btn-circle active tip-top" data-toggle="tooltip" title="Upload">
													<i class="fa fa-cloud-download" aria-hidden="true"></i>
												</a>
                                            <a href="#" class="btn btn-dark btn-circle active tip-top" data-toggle="tooltip" title="Refresh">
													<i class="fa fa-reply" aria-hidden="true"></i>
												</a>
                                            <a href="#" class="btn btn-blue-grey btn-circle active tip-top" data-toggle="tooltip" title="Delete">
													<i class="fa fa-trash-o" aria-hidden="true"></i>
												</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="line-chart" class="flot-chart flot-chart-sts line-chart-statistic"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
        <Footer/>
    </div>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import LeftSideBar from '../components/LeftSideBar.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'

export default ({
    name: 'Index',
    components: { Header, LeftSideBar, Footer },
    data(){
        return{
            titre: "Dashboard",
            icon: "icon nalika-home",
            types: [],
        }

    },
    mounted (){
        this.typeComptable()
    },
    methods: {
        typeComptable() {
           axios.get('/types-comptables')
           .then((res)=>{
                this.types= res.data.type
           })
       },
    }
})
</script>
<style scoped>

    .hpanel .panel-body {
        margin-bottom: 30px;
    }
</style>
