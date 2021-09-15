import React from 'react'
import styles from './MainSection.module.css';
import picture1 from './picture1.jpg';
import picture2 from './picture2.jpg';

export default function MainSection() {
    return (
        <div className={ styles.background }>
            <div className={ styles.container }>
                <div>
                    <img src={picture1} width="565" height="265" />
                </div>
                <div className={styles.imageSubText}>
                    Tiede | Tutkijat ovat huomanneet selvän yhteyden skeittailulla ja 
                    planettojen kiertoalueella.
                </div>
                <div className={styles.smallSubText}>
                    Avaruus ja vapaa-aika 14:34
                </div>
                <div>
                    ______________________________________________________________________________________
                </div>
                <div className={styles.news}>
                    Kulttuuri | Shakki on nyt suosituin laji Pluton Nexcalorioumin 
                    Lukiossa
                </div>
                <img src={picture2} width="565" height="265" />
            </div>

            <div className={styles.sideSectionContainer}>
                <div className={styles.sideSectionTitle}>
                    Luetuimmat
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    1 Kolumni | Antti Keräkaali: "Ei mitään järkeä missään. Tympäsee"
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    2 Sijoittaminen | Linnunradan Krux nyt laskussa.
                    Andromeda syöksyy vallaten markkinoita - 
                    Katso kryptovaluuttojen nykytilanne
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    3 Ravitsemus| Fazer tuo uusia makuja neljännestä ulottuvuudesta. 
                    Näitä makuja sinun on pakko testata!
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    4 Kulttuuri | Matti Nykänen sijoittaa uusimpaan hydrofuusiomoottoriin.
                    Näin uudelleen syntynyt legenda valloittaa maailman sydämet taas kerran 
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    5 Helsinki HS | Paikallinen yrittäjä loi uuden palvelun jota käyttävät
                    jo miljardit ihmiset Suomessa. Lue tästä Seppo Sepposen tarina
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    6 Historia | Neljännen virtuaalisodan muistopäivä menehtyneille pidetään
                    16.10.2314 Oulun Energia-areenalla.
                </div>
                <div>
                    ___________________________________________________
                </div>
                <div>
                    7 Blogit | Jorma Uotinen kuvaa reissuaan Venäjän Saturnukseen -
                    "Ei huano, suoraan mänöin paikalliseen maistamaan uusimpia makuja ja
                    kyllä vain jysähti, aivan mahtavaa"
                </div>
            </div>

        </div>
    )
}
