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
        <Header :titre="titre" :icon="type.icon" >
            <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                    <div class="form-select-list">
                        <select @change="updateYear()" ref="year" name="year" class="form-control basic-ele-mg-b-10" >
                            <option v-for="exercice in exercices" :value="exercice.id" :key="exercice.id" :selected="current_year == exercice.annee" >{{ exercice.annee }}</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                    <div class="form-select-list">
                        <div class="form-select-list">
                        <select @change="updateMonth()" ref="month" name="month"  class="form-control basic-ele-mg-b-10" >
                            <option v-for="month in months" :key="month.id" :value="month.id" :selected="current_month == month.numero">{{ month.nom }}</option>
                        </select>
                    </div>
                    </div>
                </div>
            </div>
        </Header>
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
                                            <div class="" style="display: flex;">
                                                <div class="input-group mg-b-pro-edt" style="width: 5%;">
                                                    <input v-model="newecriture.jour" @keyup.enter="saveEcriture" type="text" class="form-control" required placeholder="Jour" >
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 6%;">
                                                    <input  type="text" class="form-control" disabled placeholder="N° pièces">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 7%;">
                                                    <input v-model="newecriture.numero_facture" @keyup.enter="saveEcriture" type="text" class="form-control"  placeholder="N° facture" >
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 7%;">
                                                    <input v-model="newecriture.reference" type="text" @keyup.enter="saveEcriture" class="form-control" placeholder="Référence" >
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 7%;">
                                                    <input v-model="newecriture.compte_courant" @focusout="verify_compte(newecriture.compte_courant)" @keyup.enter="saveEcriture" type="text" class="form-control" required placeholder="N° compte courant">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 7%;">
                                                    <input v-model="newecriture.compte_tiers" @focusout="verify_compte(newecriture.compte_tiers)" @keyup.enter="saveEcriture" type="text" class="form-control" required placeholder="N° compte tiers">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 32%;">
                                                    <input v-model="newecriture.libelle" type="text" class="form-control" required @keyup.enter="saveEcriture" placeholder="Libellé d'écriture" >
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 11%;">
                                                    <input v-model="newecriture.debit" type="number" class="form-control" required placeholder="Debit" @keyup.enter="saveEcriture">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 11%;">
                                                    <input v-model="newecriture.credit" type="number" class="form-control" required placeholder="Credit" @keyup.enter="saveEcriture">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 7%;">
                                                    <input v-model="newecriture.date_echeance" type="datetime-local" class="form-control" required placeholder="Date échance" @keyup.enter="saveEcriture" >
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
        <div class="product-status mg-b-30">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="product-status-wrap">
                            <div style="text-align:left;">
                                <h4>Ecritures comptables</h4>
                            </div>
                            <table>
                                <tr>
                                    <th style="width: 5%;">Jour</th>
                                    <th style="width: 6%;">N° pièces</th>
                                    <th style="width: 7%;">N° Facture</th>
                                    <th style="width: 7%;">Références</th>
                                    <th style="width: 7;">N° Compte courant</th>
                                    <th style="width: 7%;">N° Compte tiers</th>
                                    <th style="width: 32%;">Libellé écriture</th>
                                    <th style="width: 11%;">Débit</th>
                                    <th style="width: 11%;">Crédit</th>
                                    <th style="width: 7%;">Date d'échéance</th>
                                </tr>
                                <tr v-for="ecriture in new_ecritures" :key="ecriture">
                                    <!-- Jour -->
                                    <td>{{ ecriture.jour }}</td>
                                    <!-- N° piece -->
                                    <td></td>
                                    <!-- N° Facture -->
                                    <td>{{ ecriture.numero_facture }}</td>
                                     <!--Reference -->
                                    <td>{{ ecriture.reference }}</td>
                                    <!--Compte courant -->
                                    <td>{{ ecriture.compte_courant }}</td>
                                    <!--Compte tiece -->
                                    <td>{{ ecriture.compte_tiers }}</td>
                                    <!--Libelle -->
                                    <td>{{ ecriture.libelle }}</td>
                                    <!--Debit -->
                                    <td>{{ ecriture.debit }}</td>
                                    <!--Credit -->
                                    <td>{{ ecriture.credit }}</td>
                                    <!-- Dat échéance -->
                                    <td>{{ ecriture.date_echeance }}</td>
                                </tr>
                                <tr v-for="ecriture in ecritures" :key="ecriture.id">
                                    <!-- Jour -->
                                    <td>{{ ecriture.jour }}</td>
                                    <!-- N° piece -->
                                    <td>{{ ecriture.numero_piece }}</td>
                                    <!-- N°  -->
                                    <td>{{ ecriture.numero_piece }}</td>
                                     <!--Reference -->
                                    <td>{{ ecriture.reference }}</td>
                                    <!--Compte courant -->
                                    <td>{{ ecriture.compte_courant }}</td>
                                    <!--Compte tiece -->
                                    <td>{{ ecriture.compte_tiers }}</td>
                                    <!--Libelle -->
                                    <td>{{ ecriture.libelle }}</td>
                                    <!--Debit -->
                                    <td>{{ ecriture.debit }}</td>
                                    <!--Credit -->
                                    <td>{{ ecriture.credit }}</td>
                                    <!--date_echeance -->
                                    <td>{{ ecriture.date_echeance }}</td>
                                </tr>
                            </table>
                            <div class="custom-pagination" style="text-align:right">
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
    <button id="piece-jointe" style="display:none;" data-toggle="modal" data-target="#pieceJointeModal">
        Open Piece Popup
    </button>
    <button id="plan-comptable" style="display:none;" data-toggle="modal" data-target="#planComptable">
        Open Plan Comptable Popup
    </button>
    <!-- Modal Piece Jointe -->
    <div class="modal fade" id="pieceJointeModal" tabindex="-1" role="dialog" aria-labelledby="pieceJointeModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header" >
                <h5 class="modal-title" id="pieceJointeModalTitle">AJOUTER LA PIECE JOINTE</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" >
                <div class="form-group-inner">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <label class="login2">Pièce jointe :</label>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <input type="file" ref="piece" class="form-control" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer" >
                <button type="button" @click="dismissEnregistrement" class="btn btn-ctl-bt waves-effect waves-light" data-dismiss="modal">Annuler </button>
                <button type="button" data-dismiss="modal" class="btn btn-primary" @click="savePiece">Enregistrer</button>
            </div>
          </div>
        </div>
    </div>
    <!-- Modal New plan comptable -->
    <div class="modal fade" id="planComptable" tabindex="-1" role="dialog" aria-labelledby="planComptableTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header" >
                <h5 class="modal-title" id="planComptableTitle">Ce compte n'existe pas, veuillez l'ajouter svp</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" >
                <div class="form-group-inner">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <label class="login2">Numero de compte :</label>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <input v-model="newPlan.numero" type="number"  class="form-control" placeholder="Entrer umero de compte" >
                            <small v-if="errorPlan.numero" style="color:red;text-align: left"> {{errorPlan.numero}}</small>
                        </div>
                    </div>
                </div>
                <div class="form-group-inner">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <label class="login2">Intitulé :</label>

                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <input v-model="newPlan.intitule" type="text" class="form-control" placeholder="Entrer ntitule de compte" >
                            <small v-if="errorPlan.intitule" style="color:red;text-align: left"> {{errorPlan.intitule}}</small>
                        </div>
                    </div>
                </div>
                <div class="form-group-inner">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <label class="login2">Classe :</label>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <select v-model="newPlan.classe_id" type="text" class="form-control" >
                                <option value="">-- CHOISIR UNE CLASSE --</option>
                                <option v-for="item in classes" :key="item.id" :value="item.id">Classe {{item.numero}} - {{item.intitule}}</option>
                            </select>
                            <small v-if="errorPlan.classe_id" style="color:red;text-align: left"> {{errorPlan.classe_id}}</small>

                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer" >
                <button  type="button" @click="deleteBadCompte" class="btn btn-ctl-bt waves-effect waves-light" data-dismiss="modal">Annuler </button>
                <button id="closePlanForm" type="button" style="display:none;"  data-dismiss="modal">Close </button>
                <button type="button" class="btn btn-primary" @click="savePlanComptable">Ajouter</button>
            </div>
          </div>
        </div>
    </div>
</div>
</template>
<script>
import Header from '../components/Header.vue'
import LeftSideBar from '../components/LeftSideBar.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'

export default ({
    name: 'Banque',
    components: { Header, LeftSideBar, Footer },
    data(){
        return{
            titre: "Liste d'écritures comptables banques",
            type: {},
            months: [],
            exercices: [],
            classes: [],
            newPlan: { 
                'classe_id': '',
                'numero': '',
                'intitule': ''
            },
            errorPlan:{ 
                'asError':false,
                'classe_id':'',
                'numero': '',
                'intitule':''
            },
            current_year : '',
            current_month: '',
            ecritures : [],
            type_id: parseInt(this.$route.params.id),
            exercice_id :'',
            mois_id: '',
            piece : '',
            newecriture : {
                'jour': '',
                'numero_facture': '',
                'reference': '',
                'compte_courant': '',
                'compte_tiers': '',
                'libelle': '',
                'debit': 0,
                'credit': 0,
                'date_echeance': ''           
            },
            currentCompte: '',
            new_ecritures: [],
            errors: false,
            errorsEcritures : [],
        }
    },
    mounted(){
        this.gettypes()
        this.getMonth()
        this.getExercice()
        var today = new Date();
        this.current_year = today.getFullYear()
        this.current_month = (today.getMonth() + 1) 
        this.getEcriture()
        this.getClasses()
    },
    methods: {
        getEcriture(){
            axios.post('/ecritures-comptables-filtres',
            {
                'exercice_id': this.exercice_id,
                'type_id': parseInt(this.type_id),
                'mois_id': this.mois_id,
            })
            .then((res)=>{
                console.log(res.data)
                this.ecritures = res.data.ecritures
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        gettypes() {
           axios.get('/types-comptables/'+ this.$route.params.id)
           .then((res)=>{
                console.log(res.data)
                this.type= res.data.type
           })
       },
       getMonth(){
           axios.get('/mois-comptables')
           .then((res)=>{
                console.log(res.data)
                this.months= res.data.mois
           })
       },
       getExercice(){
           axios.get('/exercices-comptables')
           .then((res)=>{
                console.log(res.data)
                this.exercices= res.data.exercice
           })
       },
       getClasses(){
           axios.get('/classes-comptables')
           .then((res)=>{
                console.log(res.data)
                this.classes= res.data.classe
           })
       },
       updateYear(){
            this.exercice_id =this.$refs.year.value
            this.getEcriture()
       },
       updateMonth(){
            this.mois_id =this.$refs.month.value
            this.getEcriture()
       },
       verify_compte(numero){
           if( numero !=""){
                this.newPlan.numero = numero
                axios.post('/verify-compte', {'numero': numero})
                .then((res)=>{
                    if(res.data.exist){
                        console.log('Compte existe')
                    }else{
                        console.log("ce compte n'existe")
                        document.getElementById('plan-comptable').click();
                    }
                }) 
           }
           
       },
       deleteBadCompte(){
           if(this.newecriture.compte_courant == this.newPlan.numero){
               this.newecriture.compte_courant = ''
           }else{
               this.newecriture.compte_tiers = ''
           }
           this.errorPlan={ 
                'asError':false,
                'classe_id':'',
                'numero': '',
                'intitule':''
            }
       },
       savePlanComptable(){
           this.validationNewCompte()

           if(this.errorPlan.asError == false){
                document.getElementById('closePlanForm').click();
                axios.post('/plan-comptables',{
                    'classe_id': this.newPlan.classe_id,
                    'numero': this.newPlan.numero,
                    'intitule': this.newPlan.intitule,
                })
                .then((res)=>{
                    console.log(res.data)
                    console.log("Plan comptable ajouter avec succès.")
                })
                .catch((err)=>{
                    console.log(err.message)
                })   
           }
           
       },
       saveEcriture(){
           this.validattionEcriture()

           if (this.errors == false){
               console.log('execute ecriture')
                console.log(this.newecriture)
                let debit = 0
                let credit = 0
                let data = Object.assign({}, this.newecriture);
                this.new_ecritures.push(data)
                for (let i =0; i < this.new_ecritures.length; i++){
                    console.log(this.new_ecritures[i])
                    debit += parseInt(this.new_ecritures[i]['debit'])
                    credit += parseInt(this.new_ecritures[i]['credit'])
                }
                console.log(debit)
                console.log(credit)
                if(debit !== 0 && credit !== 0){
                        if(debit === credit){
                            if(this.piece != ''){
                                this.getSaveEcritures()
                            }else{
                                // Active Popup to choose the Piece
                                this.activePiecePopup()
                            }
                            
                        }else{
                            console.log("En cours...")
                        }
                }
                this.newecriture.compte_courant = '',
                this.newecriture.compte_tiers = '',
                this.newecriture.libelle = '',
                this.newecriture.debit =0,
                this.newecriture.credit=0
           }else{
               let message ='Veuillez obligatoirement remplir les champs suivants:\n'
               let messagelength= this.errorsEcritures.length
               for(let i =0; i < this.errorsEcritures.length; i++){
                   let num = (i+1).toString()
                   message += num+' - '+ this.errorsEcritures[i]+'\n'
                   if((i+1) == messagelength){
                       window.alert(message)
                       this.errorsEcritures = []
                   }
               }
               
           }
           
       },
       getSaveEcritures(){
            let data =JSON.stringify(this.new_ecritures);
            console.log(data)
            let formdata = new FormData()
            formdata.append('type_id', this.type_id)
            formdata.append('exercice_id', this.exercice_id)
            formdata.append('mois_id', this.mois_id)
            formdata.append('data', data)
            formdata.append('piece', this.piece, this.piece.name)

            //Enregistrement des ecritures comptables
            axios.post('/ecritures-comptables', formdata)
            .then((res)=>{
                console.log(res.data)
                this.getEcriture()
                this.new_ecritures = []
                this.newecriture = {
                'jour': '',
                'numero_facture': '',
                'reference': '',
                'compte_courant': '',
                'compte_tiers': '',
                'libelle': '',
                'debit': 0,
                'credit': 0,
                'date_echeance': ''           
                }
            })
            .catch((err)=>{
                console.log(err.message)
            })
       },
       activePiecePopup(){
            document.getElementById('piece-jointe').click();
       },
       savePiece(){
            try {
                this.piece = this.$refs.piece.files[0]
                console.log('Piece recuperée')
                console.log(this.piece)
                this.getSaveEcritures()
            } catch (error) {
                console.error(error);
                this.activePiecePopup()
            }
       },
       validattionEcriture(){
           if(!this.newecriture.jour){
               this.errorsEcritures.push('Le champs jour')
               this.errors = true
           }
           if(!this.newecriture.compte_courant && !this.newecriture.compte_tiers){
               this.errorsEcritures.push("L'un des comptes (courant ou tiers)")
               this.errors = true
           }
           if(!this.newecriture.libelle){
               this.errorsEcritures.push("Le libelle")
               this.errors = true
           }
           if(!this.newecriture.credit && !this.newecriture.debit){
               this.errorsEcritures.push("L'un des montant (credit ou debit ).")
               this.errors = true
           }
       },
       dismissEnregistrement(){
           this.newecriture = {
                'jour': '',
                'numero_facture': '',
                'reference': '',
                'compte_courant': '',
                'compte_tiers': '',
                'libelle': '',
                'debit': 0,
                'credit': 0,
                'date_echeance': ''           
            }
            this.new_ecritures= []
       },
       validationNewCompte(){
           this.errorPlan={ 
            'asError':false,
            'classe_id':'',
            'numero': '',
            'intitule':''
          }
          if(!this.newPlan.classe_id ){
              this.errorPlan.classe_id = "Veuillez choirir une classe svp!"
              this.errorPlan.asError = true
          }
          if(!this.newPlan.numero ){
              this.errorPlan.numero = "Le numero de compte est obligatoire !"
              this.errorPlan.asError = true
          }
          if(!this.newPlan.intitule ){
              this.errorPlan.intitule = "L'intitulé du compte est obligatoire !"
              this.errorPlan.asError = true
          }
       }
    }
    
})
</script>
<style scoped>
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
    .input-group .form-control{
        font-size: 12px;
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
</style>