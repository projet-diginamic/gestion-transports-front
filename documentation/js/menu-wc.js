'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gestion-transports-front documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-94302210f851177509540a55be0c72faccce3def17ed49712e26f2f9ec891a931f0ed5e1b8ae81ccdce197b65fda95fc46c67706bdc88b195518ee3e2a86d65a"' : 'data-target="#xs-components-links-module-AppModule-94302210f851177509540a55be0c72faccce3def17ed49712e26f2f9ec891a931f0ed5e1b8ae81ccdce197b65fda95fc46c67706bdc88b195518ee3e2a86d65a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-94302210f851177509540a55be0c72faccce3def17ed49712e26f2f9ec891a931f0ed5e1b8ae81ccdce197b65fda95fc46c67706bdc88b195518ee3e2a86d65a"' :
                                            'id="xs-components-links-module-AppModule-94302210f851177509540a55be0c72faccce3def17ed49712e26f2f9ec891a931f0ed5e1b8ae81ccdce197b65fda95fc46c67706bdc88b195518ee3e2a86d65a"' }>
                                            <li class="link">
                                                <a href="components/AnnoncesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnnoncesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnnoncesEncoursComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnnoncesEncoursComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnnoncesHistoriqueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnnoncesHistoriqueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategorieVehiculeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategorieVehiculeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContenuPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContenuPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CorpsPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CorpsPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailVehiculeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailVehiculeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EnteteAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnteteAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EnteteCorpsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnteteCorpsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FiltreVehiculeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiltreVehiculeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListeVehiculeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListeVehiculeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationGeneraleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationGeneraleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NouveauVehiculeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NouveauVehiculeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NouvelleAnnonceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NouvelleAnnonceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResaCovoiturageEncoursComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResaCovoiturageEncoursComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResaCovoiturageHistoriqueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResaCovoiturageHistoriqueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResaVehiculeEncoursComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResaVehiculeEncoursComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResaVehiculeHistoriqueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResaVehiculeHistoriqueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReservationsCovoiturageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservationsCovoiturageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReservationsVehiculeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservationsVehiculeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReserverCovoiturageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReserverCovoiturageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReserverVehiculeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReserverVehiculeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SousMenuPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SousMenuPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TitrePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TitrePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VehiculeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VehiculeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/VehiculeService.html" data-type="entity-link" >VehiculeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Categorie.html" data-type="entity-link" >Categorie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreeVehicule.html" data-type="entity-link" >CreeVehicule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vehicule.html" data-type="entity-link" >Vehicule</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});