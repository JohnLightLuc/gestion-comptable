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
                                                    <span class="input-group-addon">Exercice :</span>
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
                                                    <span class="input-group-addon">Date de debut de l'exercice :</span>
                                                    <input type="date" class="form-control" >
                                                </div>
                                                <div class="input-group mg-b-pro-edt">
                                                    <span class="input-group-addon">Date de fin de l'exercice :</span>
                                                    <input type="date" class="form-control" >
                                                </div>
                                                <div class="input-group mg-b-pro-edt">
                                                    <span class="input-group-addon">Type de Grand Livre :</span>
                                                    <select name="select" class="form-control pro-edt-select form-control-primary">
                                                        <option value="opt1">Grand livre générale</option>
                                                        <option value="opt2">Grand livre auxiliaire</option>
                                                        <option value="opt2">Grand livre âgée</option>
                                                    </select>
                                                </div>
                                                <div class="form-group data-custon-pick data-custom-mg" id="data_5">
                                                    <div class="input-daterange input-group" id="datepicker">
                                                        <span class="input-group-addon">Numero compte de :</span>
                                                        <input type="number" class="form-control" name="start" >
                                                        <span class="input-group-addon">à :</span>
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
                                <h4>Le grand Livre Comptable</h4>
                            </div>
                            <table>
                                <tr>
                                    <th colspan="4">Compte 401 Fournisseur </th>
                                </tr>
                                <tr>
                                    <th >Date </th>
                                    <th >Intitulé du compte</th>
                                    <th >Debit</th>
                                    <th >Credit</th>
                                </tr>
                                <tr>
                                    <td>02/05/2015</td>
                                    <td>Facture achat pommes</td>
                                    <td> </td>
                                    <td>105,50</td>
                                </tr>
                                 <tr>
                                    <td>31/05/2015</td>
                                    <td>Reglement par chèque</td>
                                    <td>105,50 </td>
                                    <td></td>
                                </tr>
                                 <tr>
                                    <th>31/05/2015</th>
                                    <th>Total</th>
                                    <th>105,50 </th>
                                    <th>105,50</th>
                                </tr>
                                <tr>
                                    <th>31/05/2015</th>
                                    <th>Solde</th>
                                    <th>0,00 </th>
                                    <th>0,00</th>
                                </tr>

                                <tr>
                                    <th colspan="4">Compte 411 Client </th>
                                </tr>
                                <tr>
                                    <td>06/05/2015</td>
                                    <td>Vente de pommes</td>
                                    <td> 232,10</td>
                                    <td></td>
                                </tr>
                                 <tr>
                                    <td>31/05/2015</td>
                                    <td>Reglement Client</td>
                                    <td> </td>
                                    <td>232,10</td>
                                </tr>
                                 <tr>
                                    <th>31/05/2015</th>
                                    <th>Total</th>
                                    <th>232,10 </th>
                                    <th>232,10</th>
                                </tr>
                                <tr>
                                    <th>31/05/2015</th>
                                    <th>Solde</th>
                                    <th>0,00 </th>
                                    <th>0,00</th>
                                </tr>

                                <tr>
                                    <th colspan="4">Compte 44566 TVA deductible </th>
                                </tr>
                                <tr>
                                    <td>06/05/2015</td>
                                    <td>Vente de pommes</td>
                                    <td>5,50 </td>
                                    <td></td>
                                </tr>
                                 <tr>
                                    <th>31/05/2015</th>
                                    <th>Total</th>
                                    <th>5,50 </th>
                                    <th>0,00</th>
                                </tr>
                                <tr>
                                    <th>31/05/2015</th>
                                    <th>Solde</th>
                                    <th>5,50 </th>
                                    <th></th>
                                </tr>

                                <tr>
                                    <th colspan="4">Compte 44571 TVA collectée </th>
                                </tr>
                                <tr>
                                    <td>06/05/2015</td>
                                    <td>Vente de pommes</td>
                                    <td> </td>
                                    <td>12,10</td>
                                </tr>
                                 <tr>
                                    <th>31/05/2015</th>
                                    <th>Total</th>
                                    <th>0,00 </th>
                                    <th>12,10</th>
                                </tr>
                                <tr>
                                    <th>31/05/2015</th>
                                    <th>Solde</th>
                                    <th> </th>
                                    <th>12,10</th>
                                </tr>

                                <tr>
                                    <th colspan="4">Compte 512 Banque </th>
                                </tr>
                                <tr>
                                    <td>31/05/2015</td>
                                    <td>chèque fournisseur </td>
                                    <td> </td>
                                    <td>105,50</td>
                                </tr>
                                 <tr>
                                    <td>31/05/2015</td>
                                    <td>Reglement Client</td>
                                    <td> 232,10</td>
                                    <td>105,50</td>
                                </tr>
                                 <tr>
                                    <th>31/05/2015</th>
                                    <th>Total</th>
                                    <th>232,10 </th>
                                    <th>105,50</th>
                                </tr>
                                <tr>
                                    <th>31/05/2015</th>
                                    <th>Solde</th>
                                    <th>126,60 </th>
                                    <th></th>
                                </tr>

                                <tr>
                                    <th colspan="4">Compte 607 Achats de marchandises </th>
                                </tr>
                                <tr>
                                    <td>02/05/2015</td>
                                    <td>Facture achat pommes</td>
                                    <td> 100,00</td>
                                    <td></td>
                                </tr>
                                 <tr>
                                    <th>31/05/2015</th>
                                    <th>Total</th>
                                    <th>100,00 </th>
                                    <th>0,00</th>
                                </tr>
                                <tr>
                                    <th>31/05/2015</th>
                                    <th>Solde</th>
                                    <th>100,00 </th>
                                    <th></th>
                                </tr>

                                <tr>
                                    <th colspan="4">Compte 707 Ventes de marchandises </th>
                                </tr>
                                <tr>
                                    <td>06/05/2015</td>
                                    <td>Vente de pommes</td>
                                    <td> </td>
                                    <td>220,00</td>
                                </tr>
                                 <tr>
                                    <th>31/05/2015</th>
                                    <th>Total</th>
                                    <th>0,00 </th>
                                    <th>220,00</th>
                                </tr>
                                <tr>
                                    <th>31/05/2015</th>
                                    <th>Solde</th>
                                    <th></th>
                                    <th>220,00</th>
                                </tr>
                                <tr>
                                    <th colspan="2">TOTAL GRNAD LIVRE</th>
                                    <th>232,10</th>
                                    <th>232,10</th>
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
    name: 'Livre',
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
