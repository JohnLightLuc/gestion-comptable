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
                                            
                                                 <div class="input-group mg-b-pro-edt">
                                                    <span class="input-group-addon">Exercice</span>
                                                    <select name="select" class="form-control pro-edt-select form-control-primary">
                                                        <option value="opt1">Année</option>
                                                        <option value="opt2">2018</option>
                                                        <option value="opt3">2019</option>
                                                        <option value="opt4">2020</option>
                                                        <option value="opt5">2021</option>
                                                        <option value="opt6">2022</option>
                                                    </select>
                                                </div>
                                            
                                                <div class="input-group mg-b-pro-edt">
                                                    <span class="input-group-addon">Date de debut de l'exercice</span>
                                                    <input type="date" class="form-control" >
                                                </div> 
                                                
                                                <div class="input-group mg-b-pro-edt">
                                                    <span class="input-group-addon">Date de fin de l'exercice</span>
                                                    <input type="date" class="form-control" >
                                                </div>
                                                
                                                <div class="input-group mg-b-pro-edt">
                                                    <span class="input-group-addon">Type de balance</span>
                                                    <select name="select" class="form-control pro-edt-select form-control-primary">
                                                        <option value="opt1">Balance générale</option>
                                                        <option value="opt2">Balance auxiliaire</option>
                                                        <option value="opt2">Balance âgée</option>
                                                    </select>
                                                </div>
                                                <div class="form-group data-custon-pick data-custom-mg" id="data_5">
                                                    <div class="input-daterange input-group" id="datepicker">
                                                        <span class="input-group-addon">Numero compte de</span>
                                                        <input type="number" class="form-control" name="start" >
                                                        
                                                        <span class="input-group-addon">à</span>
                                                        <input type="number" class="form-control" name="end" >
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
                                <h4>Balance Comptable</h4>
                            </div>
                            <table>
                                <tr>
                                    <th rowspan="2">N° Compte</th>
                                    <th rowspan="2">Intitulé du compte</th>
                                    <th colspan="2">Solde au 31/12/2018</th>
                                    <th colspan="2">Mouvement 2019</th>
                                    <th colspan="2">Solde au 31/12/2019</th>
                                    
                                </tr>
                                <tr>
                                    <th>Débiteur</th>
                                    <th>Créditeur</th>
                                    <th >Total debits</th>
                                    <th >Total credits</th>
                                    <th>Débiteur</th>
                                    <th>Créditeur</th>
                                </tr>

                                <tr>
                                    <td colspan="6">Classe 1</td>
                                </tr>
                                <tr>
                                    <td>201</td>
                                    <td>Achat de produits vivriers</td>
                                    <td>52000 </td>
                                    <td>60</td>
                                    <td>52000 </td>
                                    <td>60</td>
                                    <td>1020</td>
                                    <td>5230</td>
                                </tr>
                                 <tr>
                                    <td>300</td>
                                    <td>Ventes de materiel informatique</td>
                                    <td>5000 </td>
                                    <td>800</td>
                                    <td>5000 </td>
                                    <td>800</td>
                                    <td>1200</td>
                                    <td>530</td>
                                </tr>
                                 <tr>
                                    <td>323</td>
                                    <td>Achat de matieriel de bureau</td>
                                    <td>5000 </td>
                                    <td>800</td>
                                    <td>5000 </td>
                                    <td>800</td>
                                    <td>1200</td>
                                    <td>530</td>
                                </tr>
                                <tr>
                                    <td>423</td>
                                    <td>Facture</td>
                                    <td>3000 </td>
                                    <td>00</td>
                                    <td>3000 </td>
                                    <td>00</td>
                                    <td>1200</td>
                                    <td>530</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td></td>
                                    <td>3000 </td>
                                    <td>100</td>
                                    <td>3000 </td>
                                    <td>100</td>
                                    <td>1200</td>
                                    <td>530</td>
                                </tr>
                                <tr>
                                    <td colspan="6">Classe 2</td>
                                </tr>
                                <tr>
                                    <td>201</td>
                                    <td>Achat de produits vivriers</td>
                                    <td>52000 </td>
                                    <td>60</td>
                                    <td>52000 </td>
                                    <td>60</td>
                                    <td>1020</td>
                                    <td>5230</td>
                                </tr>
                                 <tr>
                                    <td>300</td>
                                    <td>Ventes de materiel informatique</td>
                                    <td>5000 </td>
                                    <td>800</td>
                                    <td>5000 </td>
                                    <td>800</td>
                                    <td>1200</td>
                                    <td>530</td>
                                </tr>
                                 <tr>
                                    <td>323</td>
                                    <td>Achat de matieriel de bureau</td>
                                    <td>5000 </td>
                                    <td>800</td>
                                    <td>5000 </td>
                                    <td>800</td>
                                    <td>1200</td>
                                    <td>530</td>
                                </tr>
                                <tr>
                                    <td>423</td>
                                    <td>Facture</td>
                                    <td>3000 </td>
                                    <td>200</td>
                                    <td>3000 </td>
                                    <td>200</td>
                                    <td>1200</td>
                                    <td>530</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td></td>
                                    <td>3000 </td>
                                    <td>300</td>
                                    <td>3000 </td>
                                    <td>300</td>
                                    <td>1200</td>
                                    <td>530</td>
                                </tr>
                                <tr>
                                    <td colspan="6">Classe 3</td>
                                </tr>
                                <tr>
                                    <td>201</td>
                                    <td>Achat de produits vivriers</td>
                                    <td>52000 </td>
                                    <td>60</td>
                                    <td>52000 </td>
                                    <td>60</td>
                                    <td>1020</td>
                                    <td>5230</td>
                                </tr>
                                 <tr>
                                    <td>300</td>
                                    <td>Ventes de materiel informatique</td>
                                    <td>5000 </td>
                                    <td>800</td>
                                    <td>5000 </td>
                                    <td>800</td>
                                    <td>1200</td>
                                    <td>530</td>
                                </tr>
                                 <tr>
                                    <td>323</td>
                                    <td>Achat de matieriel de bureau</td>
                                    <td>5000 </td>
                                    <td>800</td>
                                    <td>5000 </td>
                                    <td>800</td>
                                    <td>1200</td>
                                    <td>530</td>
                                </tr>
                                <tr>
                                    <td>423</td>
                                    <td>Facture</td>
                                    <td>3000 </td>
                                    <td>00</td>
                                    <td>3000 </td>
                                    <td>00</td>
                                    <td>1200</td>
                                    <td>530</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td></td>
                                    <td>3000 </td>
                                    <td>00</td>
                                    <td>1200</td>
                                    <td>530</td>
                                    <td>1200</td>
                                    <td>530</td>
                                </tr>
                                
                                
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
import Header from '../components/Header.vue'
import LeftSideBar from '../components/LeftSideBar.vue'
import Footer from '../components/Footer.vue'

export default ({
    name: 'Balance',
    components: { Header, LeftSideBar, Footer },
    data(){
        return{
            titre: "Liste d'écritures comptables banques",
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
