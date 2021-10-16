<template>
<div>
    <LeftSideBar/>
     <!-- Start Welcome area -->
    <div class="all-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="logo-pro">
                        <a href="index.html"><img class="main-logo" src="img/logo/logo.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <Header :titre="titre" />
        <!-- Formulaire d'ajout-->
        <div class="single-product-tab-area mg-b-30" >
            <!-- Single pro tab review Start-->
            <div class="single-pro-review-area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="review-tab-pro-inner">
                                <div class="product-tab-list tab-pane fade active in" id="description">
                                    <div class="row">
                                            <div class="" >
                                                 <p v-if="errorMessage" style="color:red;">{{ errorMessage }}</p>
                                                 <div class="input-group mg-b-pro-edt">
                                                    <span class="input-group-addon">Exercice :</span>
                                                    <select ref="exercice" name="select" @change="selectDate()" @keyup.enter="getLivre()" class="form-control pro-edt-select form-control-primary">
                                                        <option value="">Année</option>
                                                        <option v-for="item in exercices" :key="item.id" >{{ item.annee }}</option>
                                                    </select>
                                                </div>
                                                <div class="input-group mg-b-pro-edt">
                                                    <span class="input-group-addon">Date de debut de l'exercice :</span>
                                                    <input v-model="date.debut" :disabled="disabled" type="date" @keyup.enter="getLivre()" :min="mindate" :max="maxdate" class="form-control" >
                                                </div>
                                                <div class="input-group mg-b-pro-edt">
                                                    <span class="input-group-addon">Date de fin de l'exercice :</span>
                                                    <input v-model="date.fin" :disabled="disabled" type="date" @keyup.enter="getLivre()" :min="mindate"  :max="maxdate" class="form-control" >
                                                </div>
                                                <div class="input-group mg-b-pro-edt">
                                                    <span class="input-group-addon">Type de Grand Livre :</span>
                                                    <select v-model="typeLivre" name="select" @keyup.enter="getLivre()" class="form-control pro-edt-select form-control-primary">
                                                        <option value="[]">Grand livre générale</option>
                                                        <option value="[1000, 5000]">Grand livre auxiliaire</option>
                                                        <option value="[5000, 8000]">Grand livre âgée</option>
                                                    </select>
                                                </div>
                                                <div class="form-group data-custon-pick data-custom-mg" id="data_5">
                                                    <div class="input-daterange input-group" id="datepicker">
                                                        <span class="input-group-addon">Numero compte de :</span>
                                                        <input v-model="compte.debut" type="number" @keyup.enter="getLivre()" class="form-control" name="start" >
                                                        <span class="input-group-addon">à :</span>
                                                        <input v-model="compte.fin" type="number" @keyup.enter="getLivre()" class="form-control" name="end" >
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Liste ecritures de vente -->
        <div class="product-status mg-b-30" >
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="product-status-wrap">
                            <div style="text-align:left;">
                                <h4>Le grand Livre Comptable</h4>
                            </div>
                            <table>
                                <tbody v-for="item in livre" :key="item.id">
                                <tr>
                                    <th colspan="4">{{ item.numero}} {{ item.intitule }} </th>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>Intitulé</td>
                                    <td> Debit</td>
                                    <td>Crédit</td>
                                </tr>
                                <tr v-for="operation in item.operations" :key="operation">
                                    <th >{{ operation.jour }}/{{ operation.mois_id }}/ {{ operation.exercice_id }}</th>
                                    <th >{{ operation.libelle }}</th>
                                    <th >{{ operation.debit }}</th>
                                    <th >{{ operation.credit }}</th>
                                </tr>
                                 <tr>
                                    <th></th>
                                    <th>Total</th>
                                    <th>{{item.somme_debit }} </th>
                                    <th>{{ item.somme_credit }}</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Solde</th>
                                    <th>0,00 </th>
                                    <th>0,00</th>
                                </tr>
                                </tbody>
                            </table>
                            <div class="custom-pagination">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import Header from '../components/Header.vue'
import LeftSideBar from '../components/LeftSideBar.vue'
import Footer from '../components/Footer.vue'

export default ({
    name: 'Livre',
    components: { Header, LeftSideBar, Footer },
    data(){
        return{
            titre: "Liste d'écritures comptables banques",
            livre: [],
            exercice: '',
            exercices:[],
            disabled: true,
            errorMessage: '',
            isError: false,
            date:{ 
                'debut': '',
                'fin':''
            },
            mindate: '',
            maxdate: '',
            typeLivre: [],
            compte: {
                'debut': '',
                'fin': ''
            },
            to : '',
            from:'',
            comptes:[]
        }
    },
    mounted(){
        this.getExercice()
    },
    methods: { 
        selectDate(){
            this.exercice = this.$refs.exercice.value
            console.log("this.exercice:")
            console.log(this.exercice)
            if(this.exercice != ''){
                this.disabled = false
                this.mindate = this.exercice+'-01-01'
                this.maxdate = this.exercice+'-12-31'
            }else{
                console.log("Welcome, wrong choice")
                this.disabled = true
                this.mindate = ''
                this.maxdate = ''
            }
        },
        getExercice(){
           axios.get('/exercices-comptables')
           .then((res)=>{
                console.log(res.data)
                this.exercices= res.data.exercice
           })
       },
        validationform(){
            if(this.exercice == ""){
                this.errorMessage= "Veuillez choisir l'exercice comptable svp !"
                this.isError = true
            }else{
                this.errorMessage = ''
                if(this.date.debut != ''){
                    this.to = this.date.debut
                }else{
                    this.to = this.mindate
                }
                if(this.date.fin != ''){
                    this.from = this.date.fin
                }else{
                    this.from = this.maxdate
                }
                
                this.comptes.push(this.typeLivre)
                this.comptes.push([this.compte.debut, this.compte.fin])
                
            }
        },
        getLivre(){
            this.validationform()
            
            if(this.isError == false){
                axios.post('/grandlivre', {
                    'to': this.to, 
                    'from': this.from, 
                    'comptes':this.comptes
                })
                .then((res) => {
                    console.log(res.data)
                    this.livre = res.data
                    this.comptes=[]
                })
            }

        }
    }
    
})
</script>
<style >
    .mg-b-pro-edt{
        border-right: 1px solid black;
    }
    .product-status-wrap table th {
        vertical-align: bottom;
        border: 2px solid #152036;
        color: #fff;
    }
    .product-status-wrap table td {
        padding: 9px 7px;
        border: 1px solid #152036;
        color: #fff;
        font-size: 14px;
    }
</style>
