import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Accueil from './Accueil';
import ForumLink from './Forum';
import Boutique from './Boutique';
import Logo from '../../../public/img/logo1.png';
import Search from '../../../public/img/search.png';
import Shop from '../../../public/img/shopping-cart.png';
import ShopHover from '../../../public/img/shopping-cart-hover.png';
import Forum from '../../../public/img/forum.png';
import ForumHover from '../../../public/img/forum-hover.png';
import Apropos from '../../../public/img/apropos.png';
import AproposHover from '../../../public/img/apropos-hover.png';
import Compte from '../../../public/img/profil.png';
import CompteHover from '../../../public/img/profil-hover.png';
import Panier from '../../../public/img/panier.png';
import PanierHover from '../../../public/img/panier-hover.png';
import Mail from '../../../public/img/mail.png';
import Mdp from '../../../public/img/lock.png';


class Home extends Component {
    
    BoutiqueHover() {
        let iconBoutique = document.getElementById('iconBoutique');
        iconBoutique.setAttribute('src', ShopHover);
    };

    BoutiqueBase() {
        let iconBoutique = document.getElementById('iconBoutique');
        iconBoutique.setAttribute('src', Shop);
    };

    ForumHover() {
        let iconForum = document.getElementById('iconForum');
        iconForum.setAttribute('src', ForumHover);
    };

    ForumBase() {
        let iconForum = document.getElementById('iconForum');
        iconForum.setAttribute('src', Forum);
    };

    AproposHover() {
        let iconApropos = document.getElementById('iconApropos');
        iconApropos.setAttribute('src', AproposHover);
    };

    AproposBase() {
        let iconApropos = document.getElementById('iconApropos');
        iconApropos.setAttribute('src', Apropos);
    };

    ProfilHover() {
        let iconProfil = document.getElementById('iconProfil');
        let textProfil = document.getElementById('textProfil');
        iconProfil.setAttribute('src', CompteHover);
        textProfil.style.color = "#66BD5D";
    };

    ProfilBase() {
        let iconProfil = document.getElementById('iconProfil');
        let textProfil = document.getElementById('textProfil');
        iconProfil.setAttribute('src', Compte);
        textProfil.style.color = "white";
    };

    PanierHover() {
        let iconPanier = document.getElementById('iconPanier');
        let textPanier = document.getElementById('textPanier');
        iconPanier.setAttribute('src', PanierHover);
        textPanier.style.color = "#66BD5D";
    };

    PanierBase() {
        let iconPanier = document.getElementById('iconPanier');
        let textPanier = document.getElementById('textPanier');
        iconPanier.setAttribute('src', Panier);
        textPanier.style.color = "white"
    };

    OpenConnectTuile() {
        let tuile = document.getElementById('connectTuile');
        if (tuile.style.display === "block") {
            tuile.style.display = "none";
        } else {
            tuile.style.display = "block";
        }
    }

    render() {
        return (
            <div>
                <nav className="flex">
                    <Link className={"link name"} to={"/"}> <img src={Logo} className="logo"></img> </Link>
                    <div className="naviguation--block" id="">
                        <form className="form--searchfield">
                            <input type="text" placeholder="Recherchez un produit, une marque" className="searchfield"></input>
                            <img src={Search} className="searchlogo"></img>
                        </form>
                        <ul className="naviguation--list flex">
                            <li className="naviguation--link">
                               <Link className={"link flex"} to={"/boutique"} onMouseEnter={this.BoutiqueHover} onMouseLeave={this.BoutiqueBase}><img src={Shop} className="navicon" id="iconBoutique"></img><p className="navtext">Boutique</p></Link>
                            </li>
                            <li className="naviguation--link">
                               <Link className={"link flex"} to={"/forum"} onMouseEnter={this.ForumHover} onMouseLeave={this.ForumBase}><img src={Forum} className="navicon" id="iconForum"></img><p className="navtext">Forum</p></Link>
                            </li>
                            <li className="naviguation--link">
                               <Link className={"link flex"} to={"/apropos"} onMouseEnter={this.AproposHover} onMouseLeave={this.AproposBase}><img src={Apropos} className="navicon" id="iconApropos"></img><p className="navtext">A propos</p></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="profil--block" onMouseEnter={this.ProfilHover} onMouseLeave={this.ProfilBase} onClick={this.OpenConnectTuile}>
                        <img src={Compte} className="profil--icon" id="iconProfil"></img>
                        <p className="profil--text" id="textProfil">Mon Compte</p>  
                    </div>
                    <div className="connect--tuile" id="connectTuile">
                            <div class="arrow-up"></div>
                            <h2>Se connecter</h2>
                            <form>
                                <div className="field--blockMail">
                                    <input type="text" placeholder="Identifiant .." className="connect--field"></input>
                                    <img src={Mail} className="icon--Mail"></img>
                                </div>
                                <div className="field--blockMdp">
                                    <input type="password" placeholder="Mot de passe .." className="connect--field"></input>
                                    <img src={Mdp} className="icon--Mdp"></img>
                                </div>
                                <div>
                                    <label for="remember" className="rememberme--label"><input type="checkbox" value="Connexion" name="remember" className="rememberme--checkbox" id="remember"></input>Se souvenir de moi</label>
                                </div>
                                <div>
                                    <input type="submit" value="Connexion" className="connect"></input>
                                </div>
                            </form>
                            <div className="separate"></div>
                            <Link className={"newaccount"} to={"/"}>Créez votre compte</Link>
                            <div className="separate"></div>
                            <Link className={"reinitmdp"} to={"/"}>Réinitialiser mon mot de passe</Link>
                        </div>
                    <div className="panier--block" onMouseEnter={this.PanierHover} onMouseLeave={this.PanierBase}>
                        {/* Compteur d'articles */}
                        <img src={Panier} className="panier--icon" id="iconPanier"></img>
                        <p className="panier--text" id="textPanier">Mon Panier</p>
                        {/* Calculer le prix total du panier */}
                    </div>
                </nav>
                <Switch>
                    <Redirect exact from="/" to="/accueil" />
                    <Route path="/accueil" component={Accueil} />
                    <Route path="/boutique" component={Boutique} />
                    <Route path="/forum" component={ForumLink} />
                </Switch>
            </div>
        )
    }
}
 
export default Home;