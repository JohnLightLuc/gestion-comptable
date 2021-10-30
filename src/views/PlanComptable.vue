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
        <Header :titre="titre" >

        </Header>
        <div v-if="send" style="text-align: center">
            <p v-if="status" class="text-success">{{ message }}</p>
            <p v-else class="text-danger">{{ message }}</p>
        </div>
        <!-- Liste ecritures de vente -->
        <div class="product-status mg-b-30">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="product-status-wrap">
                            <div style="text-align:left;">
                                <h4>Plan comptable</h4>
                            </div>
                            <div style="text-align:left;margin-bottom:10px;">
                                <button id="plan-comptable" class="btn btn-primary"  data-toggle="modal" data-target="#planComptable">
                                    Ajouter un compte
                                </button>
                            </div>
                            <table>
                                <tr>
                                    <th >Numero de comptes</th>
                                    <th >Intitulé</th>
                                    <th >Classe</th>
                                    <th style="width:16%;">Action</th>
                                </tr>
                                <tr v-if="plans.length > 0" v-for="plan in plans" :key="plan">
                                    <!-- Numero de compte -->
                                    <td>{{ plan.numero }}</td>
                                    <!--Intitule -->
                                    <td>{{ plan.intitule }}</td>
                                    <!--classe -->
                                    <td>Classe {{ plan.classe.numero }} - {{ plan.classe.intitule }}</td>
                                    <td>
                                        <button class="btn btn-primary" type="button" @click="updateUpdateId(plan.id, plan.numero, plan.intitule, plan.classe.id)" style="margin-right:10px;" data-toggle="modal" :data-target="'#update00'+ plan.id.toString()">Modifier</button>
                                        <button class="btn btn-danger" @click="updateDelId(plan.id)" type="button" data-toggle="modal" :data-target="'#delete00'+plan.id.toString()">Supprimer</button>
                                    </td>
                                </tr>
                                <tr v-else>
                                    <td colspan="4">Aucun plan comptable disponible pour le moment.</td>
                                </tr>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <Footer/>
    </div>
    <!-- Modal New plan comptable -->
    <div class="modal fade" id="planComptable" tabindex="-1" role="dialog" aria-labelledby="planComptableTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header" >
                <h5 class="modal-title" id="planComptableTitle">AJOUTER UN NOUVEAU COMPTE</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" >
                <div v-if="send" style="text-align: center">
                    <p v-if="status" class="text-success">{{ message }}</p>
                    <p v-else class="text-danger">{{ message }}</p>
                </div>
                <div style="margin: 15px auto">----------------- ENREGISTREMENT MANUELLE --------------------</div>

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
                            <select v-model="newPlan.classe_id" class="form-control" >
                                <option value="">-- CHOISIR UNE CLASSE --</option>
                                <option v-for="item in classes" :key="item.id" :value="item.id">Classe {{item.numero}} - {{item.intitule}}</option>
                            </select>
                            <small v-if="errorPlan.classe_id" style="color:red;text-align: left"> {{errorPlan.classe_id}}</small>

                        </div>
                    </div>
                </div>
                <div style="margin: 15px auto">-------------- IMPORTER UN FICHIER EXCEL -------------------</div>
                <div style="text-align:left;font-size:16px;">
                <ol>
                    <li>Telecharger <a :href="baseUrl+'/api/file-export'">le model ici</a> </li>
                    <li>Remplir correctement le fichier model </li>
                    <li>Impoter le fichier model correctement rempli: <input @change="getFichier()" ref="fichier" type="file" class="form-control" ></li>
                </ol>
                </div>
                <!--<div class="form-group-inner">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <label class="login2">Fichier excel :</label>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <input @change="getFichier()" ref="fichier" type="file" class="form-control" >
                        </div>
                    </div>
                </div>-->
            </div>
            <div class="modal-footer" >
                <button  type="button" class="btn btn-ctl-bt waves-effect waves-light" data-dismiss="modal">Annuler </button>
                <button type="button" class="btn btn-primary" @click="savePlanComptable">Ajouter</button>
            </div>
          </div>
        </div>
    </div>

    <!-- Modal Update plan comptable -->
    <div class="modal fade" :id="updateID" tabindex="-1" role="dialog" aria-labelledby="updateTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header" >
                <h5 class="modal-title" :id="updateID+'Title'">MODIFIER PLAN COMPTABLE</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" >
                <div v-if="send" style="text-align: center">
                    <p v-if="status" class="text-success">{{ message }}</p>
                    <p v-else class="text-danger">{{ message }}</p>
                </div>
                <div class="form-group-inner">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <label class="login2">Numero de compte :</label>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <input v-model="upPlan.numero" type="text"  class="form-control" placeholder="Entrer umero de compte" >
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
                            <input v-model="upPlan.intitule" type="text" class="form-control" placeholder="Entrer ntitule de compte" >
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
                            <select v-model="upPlan.classe_id" class="form-control" >
                                <option value="">-- CHOISIR UNE CLASSE --</option>
                                <option v-for="item in classes" :key="item.id" :value="item.id">Classe {{item.numero}} - {{item.intitule}}</option>
                            </select>
                            <small v-if="errorPlan.classe_id" style="color:red;text-align: left"> {{errorPlan.classe_id}}</small>

                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer" >
                <button  type="button" class="btn btn-ctl-bt waves-effect waves-light" data-dismiss="modal">Annuler </button>
                <button type="button" class="btn btn-primary" @click="updatePlan()">Modifer</button>
            </div>
          </div>
        </div>
    </div>

    <!-- Modal Delete plan comptable -->
    <div class="modal fade" :id="deleteID" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Supprimer plan comptable</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            Une fois le plan comptable supprimé, toutes les écritures comptables associés àce compte seront automatiquement supprimées. Confirmer le suppression ?
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Anuller</button>
            <button type="button" @click='deletePlanComptable()' class="btn btn-danger" data-dismiss="modal">Supprimer</button>
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
    name: "PlanComptable",
    components: { Header, LeftSideBar, Footer },
    data(){
        return{
            titre: "Liste des diffrents comptes du plan comptable",
            baseUrl: this.$store.state.baseUrl,
            classes: [],
            plans : [],
            send: false,
            status: false,
            message:'',
            newPlan: { 
                'classe_id': '',
                'numero': '',
                'intitule': ''
            },
            upPlan: { 
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
            errors: false,
            errorsEcritures : [],
            fichier: '',
            // Supprimée et mettre a jour plan comptable
            selectedId: 0,
            deleteID: '',
            updateID: ''
        }
    },
    mounted(){
        this.getPlanComptable()
        this.getClasses()
    },
    methods: {
       getClasses(){
           axios.get('/classes-comptables')
           .then((res)=>{
                this.classes= res.data.classe
           })
       },
       getPlanComptable(){
           axios.get('/plan-comptables')
           .then((res)=>{
                this.plans = res.data.plan_comptable
           })
       },
       getFichier(){
           this.fichier = this.$refs.fichier.files[0]
       },
       savePlanComptable(){
           if(this.fichier == ''){
               this.validationNewCompte()

                if(this.errorPlan.asError == false){
                    axios.post('/plan-comptables',{
                        'classe_id': this.newPlan.classe_id,
                        'numero': this.newPlan.numero,
                        'intitule': this.newPlan.intitule,
                    })
                    .then((res)=>{
                        this.send = true
                        this.status = true
                        this.message ="Plan comptable ajouter avec succès."
                        this.getPlanComptable()
                        this.newPlan= { 
                            'classe_id': '',
                            'numero': '',
                            'intitule': ''
                        }
                        this.closeAlert()
                    })
                    .catch((err)=>{
                        this.status = false
                        this.message =err.message
                        this.send = true
                    })   
                }
           }else{
               let formdata = new FormData()
               formdata.append('file', this.fichier, this.fichier.name)
               axios.post('/file-import', formdata)
               .then((res)=>{
                    this.send = true
                    this.status = true
                    this.message ="Fichier comptable comptable enregistré avec suuccès."
                    this.getPlanComptable()
                    this.newPlan= { 
                        'classe_id': '',
                        'numero': '',
                        'intitule': ''
                    }
               })
               .catch((err)=>{
                    this.status = false
                    this.message =err.message
                    this.send = true
               })

           }
           
           
       },
       activePiecePopup(){
            document.getElementById('piece-jointe').click();
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
          setTimeout(()=>{
            this.errorPlan={ 
                'asError':false,
                'classe_id':'',
                'numero': '',
                'intitule':''
            }
          }, 10000)
       },
       validationUpCompte(){
           this.errorPlan={ 
            'asError':false,
            'classe_id':'',
            'numero': '',
            'intitule':''
          }
          if(!this.upPlan.classe_id ){
              this.errorPlan.classe_id = "Veuillez choirir une classe svp!"
              this.errorPlan.asError = true
          }
          if(!this.upPlan.numero ){
              this.errorPlan.numero = "Le numero de compte est obligatoire !"
              this.errorPlan.asError = true
          }
          if(!this.upPlan.intitule ){
              this.errorPlan.intitule = "L'intitulé du compte est obligatoire !"
              this.errorPlan.asError = true
          }
          setTimeout(()=>{
            this.errorPlan={ 
                'asError':false,
                'classe_id':'',
                'numero': '',
                'intitule':''
            }
          }, 10000)
       },
       closeAlert(){
           setTimeout(()=>{
               this.send = false
               this.message = ''
           }, 10000)
       },
       updateDelId(id){
           this.deleteID = 'delete00'+ id.toString()
           this.selectedId = id
       },
       deletePlanComptable(){
         axios.delete('/plan-comptables/'+this.selectedId)
         .then((res)=>{
             console.log(res.data)
            this.send = true
            this.status = true
            this.message ="Plan comptable supprimé avec succès."
            this.getPlanComptable()
            this.closeAlert()
         })
       },
       updateUpdateId(id, numero, intitule, classe){
           this.updateID = 'update00'+ id.toString()
           this.selectedId = id
           this.upPlan = { 
                'classe_id': classe,
                'numero': numero,
                'intitule': intitule
            }
            console.log(this.upPlan)

       },
       updatePlan(){
           this.validationUpCompte()

           axios.post('/plan-comptables/'+this.selectedId, this.upPlan)
           .then((res)=>{
                this.send = true
                this.status = true
                this.message ="Plan comptable modifié avec succès."
                this.getPlanComptable()
                this.closeAlert()
           })
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
