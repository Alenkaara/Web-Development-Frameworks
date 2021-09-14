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
      <SideSection />
    </div>
  );
}

export default App;
