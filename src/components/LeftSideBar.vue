<template>
<div class="left-sidebar-pro">
        <nav id="sidebar" class="">
            <div class="sidebar-header">
                <a href="index.html"><img class="main-logo" src="assets/img/logo/logo.png" alt="" /></a>
                <strong><img src="assets/img/logo/logosn.png" alt="" /></strong>
            </div>
			<div class="nalika-profile">
				<div class="profile-dtl">
					<a href="#"><img src="assets/img/notification/4.jpg" alt="" /></a>
					<h2>Lakian <span class="min-dtn">Das</span></h2>
				</div>
				<div class="profile-social-dtl">
					<ul class="dtl-social">
						<li><a href="#"><i class="icon nalika-facebook"></i></a></li>
						<li><a href="#"><i class="icon nalika-twitter"></i></a></li>
						<li><a href="#"><i class="icon nalika-linkedin"></i></a></li>
					</ul>
				</div>
			</div>
            <div class="left-custom-menu-adp-wrap comment-scrollbar">
                <nav class="sidebar-nav left-sidebar-menu-pro">
                    <ul class="metismenu" id="menu1" style="text-align: left;">
                        <li>
                            <router-link class="active" :to="{name: 'Home'}" >
                                <i class="icon nalika-home icon-wrap"></i>
                                <span class="mini-click-non">Accueil</span>
                            </router-link>
                            
                        </li>
                        <li>
                            <router-link class="" :to="{name: 'Achat'}" >
                                <i class="icon nalika-table icon-wrap"></i> 
                                <span class="mini-click-non"> Achats</span>
                            </router-link>
                           
                        </li>
                        <li>
                            <router-link class="" :to="{name: 'Vente'}" >
                                <i class="icon nalika-bar-chart icon-wrap"></i> 
                                <span class="mini-click-non"> Ventes</span>
                            </router-link>
                            
                        </li>
                        <li>
                            <router-link class="" :to="{name: 'Paye'}" >
                                <i class="icon nalika-pie-chart icon-wrap"></i> 
                                <span class="mini-click-non"> Payement</span>
                            </router-link>
                            
                        </li>
                        <li>
                           
                            <router-link class="" :to="{name: 'Banque'}" >
                                <i class="icon nalika-diamond icon-wrap"></i> 
                                <span class="mini-click-non"> Banques</span>
                            </router-link>
                            
                        </li>
                        <li>
                            <router-link class="" :to="{name: 'Od'}" >
                                <i class="icon nalika-forms icon-wrap"></i> 
                                <span class="mini-click-non"> Opér. diverses</span>
                            </router-link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </nav>
    </div>
</template>