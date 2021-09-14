import './App.css';
import Header from './components/Header';
import NewsNotification from './components/NewsNotification';
import MainSection from './components/MainSection';
import SideSection from './components/SideSection';

function App() {
  const HeaderData = [
    {
      bigText: 'HELSINGIN SANOMAT',
      smallerText: "Etusivu      Uutiset      Lehdet      Asiakaspalvelu            Tilaa      Kirjaudu      Valikko ☰"
    }
  ];

  const NewsNotificationData = [
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: 'Tutkija kertoo: Näin sota näkyy meissä edelleen'
    },
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: 'Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa'
    },
    {
      topic: 'MAINOS',
      body: 'Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta'
    }
    ];

    const MainSectionData = [
      {
        sectionTitle: 'Koronavirus'
      },
      {
        subTitle: '〄 HS seuraa'
      },
      {
        sectionBlueText: 'Päivittyvä seuranta',
        sectionText: '| STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan'
      },
      {
        vaikutusTeksti: 'Koronaviruksen vaikutukset Suomessa'
      },
      {
        tartuntaTeksti: 'Tartunnat yhteensä',
        tuoreTeksti: 'Tuoreimmat 14 päivää',
        edeltavatTeksti: 'Edeltävät 14 päivää'
      },
      {
        tartuntaLuku: '7 776',
        tuoreLuku: '▲ 293',
        edeltaLuku: '132'
      },
      {
        kuolleetTeksti: 'Kuolleet'
      },
      {
        kuolleetLuku: '334',
        tuoreLuku2: '▲ 5',
        edeltaLuku2: '1'
      }
    ];

    const SideSectionData = [
      {
        SideSectionTitle: 'Luetuimmat'
      },
      {
        SideSectionNumber1: '1',
        SideSectionSubTitle1: 'Rikosepäilyt',
        SideSectionText1: ' | EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa'
      },
      {
        SideSectionNumber2: '2',
        SideSectionSubTitle2: 'HS Vantaa',
        SideSectionText2: ' | Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa'
      },
      {
        SideSectionNumber3: '3',
        SideSectionSubTitle3: 'Päivittyvä seuranta',
        SideSectionText3: ' | STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden'
      },
      {
        SideSectionNumber4: '4',
        SideSectionSubTitle4: 'Nyt.fi',
        SideSectionText4: ' | Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "mummon" tilkkutäkkiä neulovat kummenet tuhannet ympäri maailman - Soitimme vaatesuunnittelijalle'
      },
      {
        SideSectionNumber5: '5',
        SideSectionSubTitle5: 'Rikosepäilyt',
        SideSectionText5: ' | Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni'
      },
      {
        SideSectionNumber6: '6',
        SideSectionSubTitle6: 'Helsinki',
        SideSectionText6: ' | Työryhmän ehdotus julki: Jättimäisestä hiilivoimalasta halutaan töysin uudenlainenen tapahtumapaikka kaupungin asukkaille'
      }
    ];

  return (
    <div>
      {
        HeaderData.map(element => <Header bigText={ element.bigText } smallerText={element.smallerText} />)
      }
      {
        NewsNotificationData.map(element => <NewsNotification topic={ element.topic } body={ element.body } />)
      }
      {
        MainSectionData.map(element => <MainSection sectionTitle={ element.sectionTitle }
          subTitle={ element.subTitle }
          sectionBlueText={ element.sectionBlueText }
          sectionText={ element.sectionText }
          vaikutusTeksti={ element.vaikutusTeksti }
          tartuntaTeksti={ element.tartuntaTeksti }
          tuoreTeksti={ element.tuoreTeksti }
          edeltavatTeksti={ element.edeltavatTeksti }
          tartuntaLuku={ element.tartuntaLuku }
          tuoreLuku={ element.tuoreLuku }
          edeltaLuku={ element.edeltaLuku }
          kuolleetTeksti={ element.kuolleetTeksti }
          kuolleetLuku={ element.kuolleetLuku }
          tuoreLuku2={ element.tuoreLuku2 }
          edeltaLuku2={ element.edeltaLuku2 }
          />)
      }
      {
        SideSectionData.map(element => <SideSection SideSectionTitle={ element.SideSectionTitle }
          SideSectionNumber1={ element.SideSectionNumber1 }
          SideSectionSubTitle1={ element.SideSectionSubTitle1 }
          SideSectionText1={ element.SideSectionText1 }

          SideSectionNumber2={ element.SideSectionNumber2 }
          SideSectionSubTitle2={ element.SideSectionSubTitle2 }
          SideSectionText2={ element.SideSectionText2 }

          SideSectionNumber3={ element.SideSectionNumber3 }
          SideSectionSubTitle3={ element.SideSectionSubTitle3 }
          SideSectionText3={ element.SideSectionText3 }

          SideSectionNumber4={ element.SideSectionNumber4 }
          SideSectionSubTitle4={ element.SideSectionSubTitle4 }
          SideSectionText4={ element.SideSectionText4 }

          SideSectionNumber5={ element.SideSectionNumber5 }
          SideSectionSubTitle5={ element.SideSectionSubTitle5 }
          SideSectionText5={ element.SideSectionText5 }

          SideSectionNumber6={ element.SideSectionNumber6 }
          SideSectionSubTitle6={ element.SideSectionSubTitle6 }
          SideSectionText6={ element.SideSectionText6 }
          />)
        }
    </div>
  );
}

export default App;
