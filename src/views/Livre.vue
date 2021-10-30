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
                                                <div style="text-align:end;">
                                                <button type="button" style="margin-top:20px" @click="getLivre()" class="btn btn-primary">Afficher le grand livre</button>
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
                            <div style="text-align:right;" v-if="affiche == true">
                                <button style="margin:5px" type="button" class="btn btn-success" @click="exportReportToExcel()" >Download Excel</button>
                                <button style="margin:5px" type="button" class="btn btn-danger" @click="printContentPDF()" >Download PDF</button>
                            </div>
                            <table id="livre">
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
                                    <th >{{ operation.jour }}/{{ operation.mois.numero }}/ {{ operation.year.annee }}</th>
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
                                    <th v-if="item.somme_debit > item.somme_credit">{{item.balance}} </th>
                                    <th v-else>0,00</th>
                                    <th v-if="item.somme_debit < item.somme_credit">{{Number(item.balance)*(-1)}} </th>
                                    <th v-else>0,00</th>
                                </tr>
                                </tbody>
                            </table>
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
            titre: "Gestion du livre comptable",
            affiche: false,
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
        exportReportToExcel() {
            let table = document.getElementById("livre"); // you can use document.getElementById('tableId') as well by providing id to the table tag
            TableToExcel.convert(table, { // html code may contain multiple tables so here we are refering to 1st table tag
                name: `grand-livre.xlsx`, // fileName you could use any name
                sheet: {
                name: 'exercice-de-'+ this.mindate+'-a-'+this.maxdate // sheetName
                }
            });
        },
        printContentPDF() {
            var restorepage = document.body.outerHTML;
            var printcontent = document.getElementById("livre").outerHTML;
            document.body.outerHTML = printcontent;
            window.print();
            document.body.outerHTML = restorepage;
        },
        exportDataToCSV(){
            /* Get the HTML data using Element by Id */
            var table = document.getElementById("livre");
            let column1, column2, column3, column4, column5, column6
            /* Declaring array variable */
            var rows =[];
            //iterate through rows of table
            for(var i=2,row; row = table.rows[i];i++){
                //rows would be accessed using the "row" variable assigned in the for loop
                //Get each cell value/column from the row
                column1 = row.cells[0].innerText;
                column2 = row.cells[1].innerText;
                column3 = row.cells[2].innerText;
                column4 = row.cells[3].innerText;
                column5 = row.cells[4].innerText;
                column6 = row.cells[5].innerText;
        
            /* add a new records in the array */
                rows.push(
                    [
                        column1,
                        column2,
                        column3,
                        column4,
                        column5,
                        column6
                    ]
                );
        
                }
                let csvContent = "data:text/csv;charset=utf-8,";
                /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
                rows.forEach(function(rowArray){
                    row = rowArray.join(",");
                    csvContent += row + "\r\n";
                });
        
                /* create a hidden <a> DOM node and set its download attribute */
                var encodedUri = encodeURI(csvContent);
                var link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "Stock_Price_Report.csv");
                document.body.appendChild(link);
                /* download the data file named "Stock_Price_Report.csv" */
                link.click();
        },
        selectDate(){
            this.exercice = this.$refs.exercice.value
            if(this.exercice != ''){
                this.disabled = false
                this.mindate = this.exercice+'-01-01'
                this.maxdate = this.exercice+'-12-31'
            }else{
                this.disabled = true
                this.mindate = ''
                this.maxdate = ''
            }
        },
        getExercice(){
           axios.get('/exercices-comptables')
           .then((res)=>{
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
                    this.livre = res.data
                    this.comptes=[]
                    this.affiche = true
                })
            }

        }
    }
    
})
</script>
<style >
    .review-tab-pro-inner{
        overflow: scroll,
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
</style>
