import React, {Component} from 'react';
import axios from 'axios';
import IconPlant from '../../../public/img/icon-plante.png';
import IconShop from '../../../public/img/online-shopping.png';
import IconIdee from '../../../public/img/idea.png';
import BandeauNature from '../../../public/img/fiches-Arbres-bandeau.jpg';
import BandeauFleur from '../../../public/img/bandeau1.jpg';
import BandeauPrairie from '../../../public/img/bandeau2.png';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';


class Accueil extends Component {

      
    ShadowWhite1() {
        let box = document.getElementById('box1');
        box.style.boxShadow = "-1px 2px 98px -12px rgba(255,255,255,0.75)";
    }
    ShadowBase1() {
        let box = document.getElementById('box1');
        box.style.boxShadow = "-1px 2px 98px -12px rgba(0,0,0,0.75)";
    }
    ShadowWhite2() {
        let box = document.getElementById('box2');
        box.style.boxShadow = "-1px 2px 98px -12px rgba(255,255,255,0.75)";
    }
    ShadowBase2() {
        let box = document.getElementById('box2');
        box.style.boxShadow = "-1px 2px 98px -12px rgba(0,0,0,0.75)";
    }
    ShadowWhite3() {
        let box = document.getElementById('box3');
        box.style.boxShadow = "-1px 2px 98px -12px rgba(255,255,255,0.75)";
    }
    ShadowBase3() {
        let box = document.getElementById('box3');
        box.style.boxShadow = "-1px 2px 98px -12px rgba(0,0,0,0.75)";
    }

    render() {
        return (
            <div className="accueil--background">
                <h1 className="accueil--title">Bienvenue chez GreenFuture</h1>
                <Link className={"tdn"} to={"/apropos"} onMouseEnter={this.ShadowWhite1} onMouseLeave={this.ShadowBase1}>
                <div className="flex accueil--block" id="box1">
                    <div className="filter">
                        <img src={BandeauNature} className="bandeau"></img>
                    </div>
                    <img src={IconPlant} className="accueil--img1"></img>
                    <p className="accueil--text">GreenFuture est une boutique révolutionnaire, elle a été conçu pour faire face au mondialisme et vous offrir une consommation plus responsable.<span className="accueil--link"> Je veux en savoir +</span></p>
                </div>
                </Link>
                <Link className={"tdn"} to={"/boutique"} onMouseEnter={this.ShadowWhite2} onMouseLeave={this.ShadowBase2}>
                    <div className="flex accueil--block" id="box2">
                        <div className="filter">
                            <img src={BandeauFleur} className="bandeau"></img>
                        </div>
                        <p className="accueil--text2">Notre mission vous offrir une transparence complète sur tout les articles fabriqué en france que vous pourrez y trouver.<br /><span className="accueil--link"> Je veux voir la Boutique --></span></p>
                        <img src={IconShop} className="accueil--img2"></img>
                    </div>
                </Link>
                <Link className={"tdn"} to={"/forum"} onMouseEnter={this.ShadowWhite3} onMouseLeave={this.ShadowBase3}>
                <div className="flex accueil--block" id="box3">
                    <div className="filter">
                        <img src={BandeauPrairie} className="bandeau"></img>
                    </div>
                    <img src={IconIdee} className="accueil--img3"></img>
                    <p className="accueil--text">Vous aussi vous avez des idées pour changer le monde ? <br /> Rejoignez nos groupes de discussions !<br /><span className="accueil--link"> Changer le monde !</span></p>
                </div>
                </Link>
            </div>
        )
    }
}

export default Accueil