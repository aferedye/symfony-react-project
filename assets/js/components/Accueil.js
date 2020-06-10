import React, {Component} from 'react';
import axios from 'axios';
import IconPlant from '../../../public/img/icon-plante.png'


class Accueil extends Component {

    render() {
        return (
            <div>
                <h1 className="accueil--title">Bienvenue</h1>
                <div className="flex ">
                    <img src={IconPlant}></img>
                    <p>The French Market est une boutique révolutionnaire, elle a été conçu pour faire face au mondialisme et vous offrir une consommation plus responsable.</p>
                </div>
                <p>Notre mission vous offrir une transparence complète sur tout les articles fabriqué en france que vous pourrez y trouver.</p>
                <p>Vous aussi vous avez des idées pour changer le monde ? rejoignez nos groupes de discussion sur nos forums.</p>
            </div>
        )
    }
}

export default Accueil