

<template>

<div>
    <LeftSideBar/>
     <!-- Start Welcome area -->
    <div class="all-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="logo-pro">
                        <a href="/"><img class="main-logo" style="width:150px" src="https://lce-ci.com/assets/img/l.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <Header :titre="'Liste écritures comptables de '+this.type.intitule" :icon="type.icon" >
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
                            <div v-if="alert.send == true">
                                <p v-if="alert.status == true" class="text-success">{{ alert.message }}</p>
                                <p v-else class="text-danger">{{ alert.message }}</p>
                            </div>
                            <div class="review-tab-pro-inner">
                                <div class="product-tab-list tab-pane fade active in" id="description">
                                    <div class="row">
                                            <div class="" style="display: flex;min-width:960px">
                                                <div class="input-group mg-b-pro-edt" style="width: 5%;">
                                                    <input v-model="newecriture.jour" @keyup.enter="saveEcriture" type="text" class="form-control" required placeholder="Jour" title="Jour" >
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 6%;">
                                                    <input  type="text" class="form-control" disabled placeholder="N° pièces" title="Numero de piece">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 7%;">
                                                    <input v-model="newecriture.numero_facture" @keyup.enter="saveEcriture" type="text" class="form-control"  placeholder="N° facture" title="Numero de facture">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 7%;">
                                                    <input v-model="newecriture.reference" type="text" @keyup.enter="saveEcriture" class="form-control" placeholder="Référence" title="Référence" >
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 7%;">
                                                    <input v-model="newecriture.compte_courant" @focusout="verify_compte(newecriture.compte_courant)" @keyup.enter="saveEcriture" type="text" class="form-control" required placeholder="N° compte courant" title="Numero de compte courant">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 7%;">
                                                    <input v-model="newecriture.compte_tiers" @focusout="verify_compte(newecriture.compte_tiers)" @keyup.enter="saveEcriture" type="text" class="form-control" required placeholder="N° compte tiers" title="Numero de compte tiers">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 32%;">
                                                    <input v-model="newecriture.libelle" type="text" class="form-control" required @keyup.enter="saveEcriture" placeholder="Libellé d'écriture" title="Libelle d'opération">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 11%;">
                                                    <input v-model="newecriture.debit" type="number" class="form-control" required placeholder="Debit" @keyup.enter="saveEcriture" title="Montant débit">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 11%;">
                                                    <input v-model="newecriture.credit" type="number" class="form-control" required placeholder="Credit" @keyup.enter="saveEcriture" title="Montant crédit">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 7%;">
                                                    <input v-model="newecriture.date_echeance" type="datetime-local" class="form-control" required placeholder="Date échance" @keyup.enter="saveEcriture" title="Date d'échéance de la facture">
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
                            <table id="example">
                                <tr>
                                    <th style="width: 5%;">Jour</th>
                                    <th style="width: 5%;">N° pièces</th>
                                    <th style="width: 6%;">N° Facture</th>
                                    <th style="width: 6%;">Références</th>
                                    <th style="width: 6;">N° Compte courant</th>
                                    <th style="width: 6%;">N° Compte tiers</th>
                                    <th style="width: 30%;">Libellé écriture</th>
                                    <th style="width: 10%;">Débit</th>
                                    <th style="width: 10%;">Crédit</th>
                                    <th style="width: 7%;">Date d'échéance</th>
                                    <th style="width: 4%;">Piece</th>
                                    <th style="width: 5%;">Editer</th>
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
                                    <!-- Piece -->
                                    <td>
                                        <button type="button" style="cursor: not-allowed" class="btn btn-seconary" >
                                            Reçu
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button" style="cursor: not-allowed" class="btn btn-seconary" >
                                            Editer
                                        </button>
                                    </td>
                                </tr>
                                <tr v-for="ecriture in ecritures" :key="ecriture.id" v-if="ecritures.length > 0">
                                    <!-- Jour -->
                                    <td>{{ ecriture.jour }}</td>
                                    <!-- N° piece -->
                                    <td>{{ ecriture.numero_piece }}</td>
                                    <!-- N°  -->
                                    <td>{{ ecriture.numero_facture }}</td>
                                     <!--Reference -->
                                    <td>{{ ecriture.reference }}</td>
                                    <!--Compte courant -->
                                    <td v-if="ecriture.plan_comptable != null ">{{ ecriture.plan_comptable.numero }}</td>
                                    <td v-else></td>
                                    <!--Compte tiece -->
                                    <td v-if=" ecriture.compte_tiers_plan != null">{{ ecriture.compte_tiers_plan.numero }}</td>
                                    <td v-else></td>
                                    <!--Libelle -->
                                    <td>{{ ecriture.libelle }}</td>
                                    <!--Debit -->
                                    <td>{{ ecriture.debit }}</td>
                                    <!--Credit -->
                                    <td>{{ ecriture.credit }}</td>
                                    <!--date_echeance -->
                                    <td>{{ ecriture.date_echeance }}</td>
                                    <!-- RECU-->
                                    <td>
                                        <button type="button" @click="setId(ecriture.id, ecriture.piece.nom)" class="btn btn-success" data-toggle="modal" :data-target="'#abccdj'+ecriture.id.toString()">
                                            Reçu
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-primary" v-if="ecriture.compte_courant != null" @click="editer(ecriture.jour,ecriture.numero_facture,ecriture.reference,ecriture.plan_comptable.numero,'',ecriture.libelle,ecriture.debit,ecriture.credit,ecriture.id)" >
                                            Editer
                                        </button>
                                        <button type="button" class="btn btn-primary" v-else @click="editer(ecriture.jour,ecriture.numero_facture,ecriture.reference,'',ecriture.compte_tiers_plan.numero,ecriture.libelle,ecriture.debit,ecriture.credit,ecriture.id)" >
                                            Editer
                                        </button>
                                    </td>
                                </tr>
                                <tr v-else>
                                <td colspan="12" style="background: rgb(241 93 34); text-align:center;"> Pas d'anciennes écritures comptables disponibles pour le moment. </td>
                                </tr>
                            </table>
                            <!-- <div class="custom-pagination" style="text-align:right">
                                <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                            </div> -->
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
                            <input v-model="newPlan.numero" type="text"  class="form-control" placeholder="Entrer umero de compte" >
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

    <!-- VIEWS JOINTE-->
    <!-- Modal -->
    <div class="modal fade" :id="selectId" tabindex="-1" role="dialog" :aria-labelledby="selectId+'Title'" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Pièce-jointe </h5>
        </div>
        <div class="modal-body">
            <div>
                <img v-if="piece != '' " :src="baseUrl+'/'+piece" alt="Piece jointe" />
            </div>
        </div>
        <div class="modal-footer">
            <button  type="button" class="btn btn-ctl-bt waves-effect waves-light" data-dismiss="modal">Fermer </button>
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

 var table = document.getElementById('#example')
 //table.DataTable({ dom: 'Blfrtip',});


export default ({
    name: 'Operations',
    components: { Header, LeftSideBar, Footer },
    data(){
        return{
            type: {},
            baseUrl: this.$store.state.baseUrl,
            alert: {
                send: false,
                status: false,
                message: ''
            },
            months: [],
            exercices: [],
            selectId: "",
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
            piece : '',
            newpiece:'',
            edit :{
                toEdit: false,
                ecritureId: ''
            }
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
        exportToExcel(){
            var htmltable= document.getElementById('example');
            var html = htmltable.outerHTML;
            window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html));
        },
       getEcriture(){
            axios.post('/ecritures-comptables-filtres',
            {
                'exercice_id': this.exercice_id,
                'type_id': parseInt(this.type_id),
                'mois_id': this.mois_id,
            })
            .then((res)=>{
                this.ecritures = res.data.ecritures
            })
       },
       gettypes() {
           axios.get('/types-comptables/'+ this.$route.params.id)
           .then((res)=>{
                this.type= res.data.type
           })
       },
       getMonth(){
           axios.get('/mois-comptables')
           .then((res)=>{
                this.months= res.data.mois
           })
       },
       getExercice(){
           axios.get('/exercices-comptables')
           .then((res)=>{
                this.exercices= res.data.exercice
           })
       },
       getClasses(){
           axios.get('/classes-comptables')
           .then((res)=>{
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
                        this.newecriture.libelle = res.data.compte.intitule
                    }else{
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
                    this.newecriture.libelle = this.newPlan.intitule
                    this.alert.send = true
                    this.alert.status = true
                    this.alert.message = "Compte ajouté au plan comptable avec succès."
                    this.closeMessage()
                })
           }
           
       },
       saveEcriture(){
           this.validattionEcriture()
        
           if (this.errors == false){
               if(this.edit.toEdit == false){
                    let debit = 0
                    let credit = 0
                    let data = Object.assign({}, this.newecriture);
                    this.new_ecritures.push(data)
                    for (let i =0; i < this.new_ecritures.length; i++){
                        if(typeof(this.new_ecritures[i]['debit']) != 'number'){
                            this.new_ecritures[i]['debit'] = 0
                        }
                        if(typeof(this.new_ecritures[i]['debit']) != 'number'){
                            this.new_ecritures[i]['debit'] = 0
                        }
                        debit += parseInt(this.new_ecritures[i]['debit'])
                        credit += parseInt(this.new_ecritures[i]['credit'])
                    }
                    if(debit !== 0 && credit !== 0){
                            if(debit === credit){
                                if(this.newpiece != ''){
                                    this.getSaveEcritures()
                                }else{
                                    // Active Popup to choose the Piece
                                    this.activePiecePopup()
                                }
                                
                            }else{
                                this.alert.send = true
                                this.alert.status = true
                                this.alert.message = "Ecriture comptable ajouté mais pas encore enregistrée. La saisie de l'opération en cours. "
                                this.closeMessage()
                            }
                    }else{
                        this.alert.send = true
                        this.alert.status = true
                        this.alert.message = "Ecriture comptable ajouté mais pas encore enregistrée. La saisie de l'opération en cours. "
                        this.closeMessage()
                    }
                    this.newecriture.compte_courant = '',
                    this.newecriture.compte_tiers = '',
                    this.newecriture.libelle = '',
                    this.newecriture.debit =0,
                    this.newecriture.credit=0
               }else{
                   axios.post('/ecritures-comptables/'+this.edit.ecritureId,{
                       'jour': this.newecriture.jour,
                       'numero_facture': this.newecriture.numero_facture,
                       'reference': this.newecriture.reference,
                       'compte_courant': this.newecriture.compte_courant,
                       'compte_tiers': this.newecriture.compte_tiers,
                       'libelle': this.newecriture.libelle,
                       'debit': this.newecriture.debit,
                       'credit': this.newecriture.credit,
                       'date_echeance': this.newecriture.date_echeance,
                   })
                   .then((res)=>{
                       this.alert.send = true
                       this.alert.status = true
                       this.alert.message = "Ecriture comptable modifiée avec succès."
                       this.closeMessage()
                       this.getEcriture()
                       this.edit ={
                            toEdit: false,
                            ecritureId: ''
                        }
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
                       this.alert.send = true
                       this.alert.status = false
                       this.alert.message = err.message
                       this.closeMessage()
                   })
               }
                
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
               this.errors = false
               
           }
           
       },
       getSaveEcritures(){
            let data =JSON.stringify(this.new_ecritures);
            let formdata = new FormData()
            formdata.append('type_id', this.type_id)
            formdata.append('exercice_id', this.exercice_id)
            formdata.append('mois_id', this.mois_id)
            formdata.append('data', data)
            formdata.append('piece', this.newpiece, this.newpiece.name)

            //Enregistrement des ecritures comptables
            axios.post('/ecritures-comptables', formdata)
            .then((res)=>{
                this.$refs.piece.value=null
                this.newpiece= ''
                // Alert Part
                this.alert.send = true
                this.alert.status = true
                this.alert.message = "Ecritures comptables enregistrées avec success."
                this.closeMessage()
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
                this.alert.send = true
                this.alert.status = false
                this.alert.message = err.message
                this.closeMessage()
            })
       },
       activePiecePopup(){
            document.getElementById('piece-jointe').click();
       },
       savePiece(){
            try {
                if(this.$refs.piece.value != null && this.$refs.piece.value != ''){
                    this.newpiece = this.$refs.piece.files[0]
                    this.getSaveEcritures()
                }else{
                    document.getElementById('piece-jointe').click();
                }
                
            } catch (error) {
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
       },
       setId(id, selectedPiece){
           this.selectId ='abccdj'+ id.toString()
           this.piece = selectedPiece
       },
       editer(jour, numero_facture, reference, compte_courant, compte_tiers, libelle,debit, credit, itemId){
           if(this.edit.ecritureId != '' && this.edit.ecritureId == itemId){
                this.edit= {
                    toEdit: false,
                    ecritureId: ''
                }
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
           }else{
                this.newecriture.jour = jour
                this.newecriture.numero_facture = numero_facture
                this.newecriture.reference = reference
                this.newecriture.compte_courant = compte_courant
                this.newecriture.compte_tiers = compte_tiers
                this.newecriture.libelle = libelle
                this.newecriture.debit = credit
                this.newecriture.credit = debit

                this.edit= {
                    toEdit: true,
                    ecritureId: itemId
                }
           }
            
       },
       closeMessage(){
           setTimeout(()=>{
               this.alert= {
                send: false,
                status: false,
                message: ''
            }
           },10000)
       }
    }
    
})
</script>
<style scoped>
    .review-tab-pro-inner{
        overflow-x: auto,
    }
    .review-tab-pro-inner{
        overflow: auto;
    }
    .product-status-wrap{
        overflow-x: auto!important;
    }
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
