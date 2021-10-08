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
        <Header :titre="titre" :icon="icon" >
            <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                    <div class="form-select-list">
                        <select  class="form-control basic-ele-mg-b-10" >
                            <option value="">2021</option>
                            <option value="">2020</option>
                            <option value="">2019</option>
                            <option value="">2018</option>
                            <option value="">2017</option>
                            <option value="">2016</option>
                            <option value="">2015</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                    <div class="form-select-list">
                        <div class="form-select-list">
                        <select  class="form-control basic-ele-mg-b-10" >
                            <option value="">-- Mois --</option>
                            <option value="">Janvier</option>
                            <option value="">Fevrier</option>
                            <option value="">Mars</option>
                            <option value="">Avril</option>
                            <option value="">Mai</option>
                            <option value="">Juin</option>
                            <option value="">Juillet</option>
                            <option value="">Août</option>
                            <option value="">Septembre</option>
                            <option value="">Octobre</option>
                            <option value="">Novembre</option>
                            <option value="">Decembre</option>
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
                                                <div class="input-group mg-b-pro-edt" style="width: 4%;">
                                                    <input type="text" class="form-control" placeholder="Jour" >
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 7%;">
                                                    <input type="text" class="form-control" placeholder="N° pièces">
                                                </div> 
                                                <div class="input-group mg-b-pro-edt" style="width: 9%;">
                                                    <input type="text" class="form-control" placeholder="Référence" >
                                                </div>
                                            
                                                <div class="input-group mg-b-pro-edt" style="width: 9%;">
                                                    <input type="text" class="form-control" placeholder="N° compte courant">
                                                </div>

                                                <div class="input-group mg-b-pro-edt" style="width: 9%;">
                                                    <input type="text" class="form-control" placeholder="N° compte tiers">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 40%;">
                                                    <input type="text" class="form-control" placeholder="Libellé d'écriture" >
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 11%;">
                                                    <input type="text" class="form-control" placeholder="Debit">
                                                </div>
                                                <div class="input-group mg-b-pro-edt" style="width: 11%;">
                                                    <input type="text" class="form-control" placeholder="Credit">
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
                                    <th style="width: 4%;">Jour</th>
                                    <th style="width: 7%;">N° pièces</th>
                                    <th style="width: 9%;">References</th>
                                    <th style="width: 9%;">N° Compte courant</th>
                                    <th style="width: 9%;">N° Compte tiers</th>
                                    <th style="width: 40%;">Libellé écriture</th>
                                    <th style="width: 11%;">Débit</th>
                                    <th style="width: 11%;">Crédit</th>
                                </tr>
                                <tr>
                                    <!-- Jour -->
                                    <td>30</td>
                                    <!-- N° piece -->
                                    <td>18</td>
                                     <!--Reference -->
                                    <td>52644164</td>
                                    <!--Compte courant -->
                                    <td>301000</td>
                                    <!--Compte tiece -->
                                    <td></td>
                                    <!--Libelle -->
                                    <td>Achat de materiel Informatique</td>
                                    <!--Debit -->
                                    <td>$750</td>
                                    <!--Credit -->
                                    <td></td>
                                </tr>
                                <tr>
                                    <!-- Jour -->
                                    <td>30</td>
                                    <!-- N° piece -->
                                    <td>17</td>
                                     <!--Reference -->
                                    <td>52644164</td>
                                    <!--Compte courant -->
                                    <td></td>
                                    <!--Compte tiece -->
                                    <td>301020</td>
                                    <!--Libelle -->
                                    <td>Fournisseur de materiel Informatique</td>
                                    <!--Debit -->
                                    <td></td>
                                    <!--Credit -->
                                    <td>$750</td>
                                </tr>
                                 <tr>
                                    <!-- Jour -->
                                    <td>30</td>
                                    <!-- N° piece -->
                                    <td>18</td>
                                     <!--Reference -->
                                    <td>52644164</td>
                                    <!--Compte courant -->
                                    <td>301000</td>
                                    <!--Compte tiece -->
                                    <td></td>
                                    <!--Libelle -->
                                    <td>Achat de materiel Informatique</td>
                                    <!--Debit -->
                                    <td>$750</td>
                                    <!--Credit -->
                                    <td></td>
                                </tr>
                                <tr>
                                    <!-- Jour -->
                                    <td>30</td>
                                    <!-- N° piece -->
                                    <td>17</td>
                                     <!--Reference -->
                                    <td>52644164</td>
                                    <!--Compte courant -->
                                    <td></td>
                                    <!--Compte tiece -->
                                    <td>301020</td>
                                    <!--Libelle -->
                                    <td>Fournisseur de materiel Informatique</td>
                                    <!--Debit -->
                                    <td></td>
                                    <!--Credit -->
                                    <td>$750</td>
                                </tr>
                                <tr>
                                    <!-- Jour -->
                                    <td>30</td>
                                    <!-- N° piece -->
                                    <td>18</td>
                                     <!--Reference -->
                                    <td>52644164</td>
                                    <!--Compte courant -->
                                    <td>301000</td>
                                    <!--Compte tiece -->
                                    <td></td>
                                    <!--Libelle -->
                                    <td>Achat de materiel Informatique</td>
                                    <!--Debit -->
                                    <td>$750</td>
                                    <!--Credit -->
                                    <td></td>
                                </tr>
                                <tr>
                                    <!-- Jour -->
                                    <td>30</td>
                                    <!-- N° piece -->
                                    <td>17</td>
                                     <!--Reference -->
                                    <td>52644164</td>
                                    <!--Compte courant -->
                                    <td></td>
                                    <!--Compte tiece -->
                                    <td>301020</td>
                                    <!--Libelle -->
                                    <td>Fournisseur de materiel Informatique</td>
                                    <!--Debit -->
                                    <td></td>
                                    <!--Credit -->
                                    <td>$750</td>
                                </tr>
                                <tr>
                                    <!-- Jour -->
                                    <td>30</td>
                                    <!-- N° piece -->
                                    <td>18</td>
                                     <!--Reference -->
                                    <td>52644164</td>
                                    <!--Compte courant -->
                                    <td>301000</td>
                                    <!--Compte tiece -->
                                    <td></td>
                                    <!--Libelle -->
                                    <td>Achat de materiel Informatique</td>
                                    <!--Debit -->
                                    <td>$750</td>
                                    <!--Credit -->
                                    <td></td>
                                </tr>
                                <tr>
                                    <!-- Jour -->
                                    <td>30</td>
                                    <!-- N° piece -->
                                    <td>17</td>
                                     <!--Reference -->
                                    <td>52644164</td>
                                    <!--Compte courant -->
                                    <td></td>
                                    <!--Compte tiece -->
                                    <td>301020</td>
                                    <!--Libelle -->
                                    <td>Fournisseur de materiel Informatique</td>
                                    <!--Debit -->
                                    <td></td>
                                    <!--Credit -->
                                    <td>$750</td>
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
</div>
</template>
<script>
import Header from '../components/Header.vue'
import LeftSideBar from '../components/LeftSideBar.vue'
import Footer from '../components/Footer.vue'

export default ({
    name: 'Vente',
    components: { Header, LeftSideBar, Footer },
    data(){
        return{
            titre: "Liste d'écritures comptables des ventes",
            icon: "icon nalika-bar-chart icon-wrap",
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
</style>
