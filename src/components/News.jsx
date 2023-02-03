import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: { id: "talksport", name: "TalkSport" },
      author: "talkSPORT",
      title:
        "Football news LIVE: Mason Greenwood latest as Man United begin internal investigation, Neville on ‘clumsy’...",
      description: "",
      url: "https://talksport.com/football/1282444/football-news-gossip-live-mason-greenwood-man-united-chelsea-premier-league/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2023/02/JF-TALKSPORT-Enzo-Fernandez.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      publishedAt: "2023-02-03T08:16:30Z",
      content:
        "talkSPORT.com has you covered with all the latest Premier League news and transfer fallout in our dedicated football live blog.\r\nAfter a week dominated by FA Cup drama, transfer sagas and Carabao Cup… [+473 chars]",
    },
    {
      source: { id: "lequipe", name: "L'equipe" },
      author: "L'EQUIPE",
      title:
        "Le directeur technique de la Ligue de football de La Réunion mis en examen pour viols et écroué",
      description:
        "Hosman Gangate, 48 ans, directeur technique de la Ligue de football de La Réunion, a été mis en examen jeudi soir pour viols, agressions sexuelles, violences et harcèlement moral par conjoint. Il a été placé en détention provisoire.",
      url: "https://www.lequipe.fr/Football/Actualites/Le-directeur-technique-de-la-ligue-de-football-de-la-reunion-mis-en-examen-pour-viols-et-ecroue/1378581",
      urlToImage:
        "https://medias.lequipe.fr/img-photo-jpg/-l-preiss-witters-presse-sports/1500000001743708/0:0,1946:1297-640-427-75/eb2d3.jpg",
      publishedAt: "2023-02-03T07:18:05+00:00",
      content:
        "Le directeur technique de la Ligue de football de La Réunion a été mis en examen jeudi soir pour viols, agressions sexuelles, violences et harcèlement moral par conjoint, a-t-on appris auprès du parq… [+1103 chars]",
    },
    {
      source: { id: "lequipe", name: "L'equipe" },
      author: "L'EQUIPE",
      title:
        "Programme TV foot : à quelle heure et sur quelle chaîne voir les matchs de ce soir (3 février 2023) ?",
      description:
        "Retrouvez l'intégralité des retransmissions des matches de football du jour retransmis sur toutes les chaînes du bouquet TNT, Câble et Satellite. Ligue 1, Ligue 2, Premier League, coupes d'Europe... Suivez tous les matches en direct sur votre télévision ou en…",
      url: "https://www.lequipe.fr/Football/Actualites/Programme-tv-foot-a-quelle-heure-et-sur-quelle-chaine-voir-les-matchs-de-ce-soir-3-fevrier-2023/1378574",
      urlToImage:
        "https://medias.lequipe.fr/img-photo-jpg/-/1500000001560313/4:0,2500:1664-640-427-75/3ed0a.jpg",
      publishedAt: "2023-02-03T06:15:04+00:00",
      content:
        "Ligue 2 : 22e journée \r\n- Nîmes - Grenoble : à 20h45 en direct sur Prime Vidéo - Le Havre - Paris FC : à 20h45 en direct sur Prime Vidéo - Dijon - Niort : à 20h45 en direct sur Prime Vidéo - Caen - B… [+217 chars]",
    },
    {
      source: { id: "fox-sports", name: "Fox Sports" },
      author: null,
      title:
        "Michigan, USC, Penn State among Joel Klatt's biggest recruiting surprises",
      description:
        "Joel Klatt shares which college football programs surprised him most during National Signing Day, including Michigan, USC, Penn State and more.",
      url: "http://www.foxsports.com/stories/college-football/michigan-usc-penn-state-among-klatts-biggest-recruiting-surprises",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/02/1408/814/2.2.23_Michigan-USC-Penn-State-Among-Joel-Klatt-Biggest-Surprises-In-Recruiting_16x9.jpg?ve=1&tl=1",
      publishedAt: "2023-02-02T22:59:04Z",
      content:
        "As college football's\r\n National Signing Day wrapped up Wednesday, it was no surprise to see the likes of Alabama and Georgia sitting atop the 2023 class rankings.\r\nNick Saban and the Crimson Tide ha… [+4373 chars]",
    },
    {
      source: { id: "fox-sports", name: "Fox Sports" },
      author: "Ralph Vacchiano",
      title:
        "Eagles on Julian Love's Nick Sirianni comments: \"He just don't understand\"",
      description:
        'Giants safety Julian Love told the hosts of "Good Morning Football," "You guys could coach this team," in regard to the Eagles. Philadelphia players disagreed strongly, backing coach Nick Sirianni.',
      url: "http://www.foxsports.com/stories/nfl/eagles-on-julian-loves-nick-sirianni-comments-he-just-dont-understand",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/02/1408/814/GettyImages-1339877332.jpg?ve=1&tl=1",
      publishedAt: "2023-02-02T21:00:26Z",
      content:
        "PHILADELPHIA The criticism of Nick Sirianni is hardly new, and his players have certainly heard it all before. They know some people think the Philadelphia Eagles are so talented they could probably … [+4307 chars]",
    },
    {
      source: { id: "bleacher-report", name: "Bleacher Report" },
      author: "Morgan Moriarty",
      title:
        "Biggest Winners and Losers of the 2023 College Football Late Signing Window",
      description:
        "Tuesday, Feb. 1, marked national signing day, as high school prospects across the country signed with their respective college schools. In college football,...",
      url: "https://bleacherreport.com/articles/10063839-biggest-winners-and-losers-of-the-2023-college-football-late-signing-window",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/x_24,y_0,w_1771,h_1179,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1675290063/qeyt9culgjwisdhyfxtb.jpg",
      publishedAt: "2023-02-02T01:22:33Z",
      content:
        "Nick Saban Chris Graythen/Getty Images\r\nSpeaking of Nick Saban, the Alabama head coach told an interesting story regarding a Tide player that had entered the transfer portal. While attending last wee… [+2135 chars]",
    },
    {
      source: { id: "bleacher-report", name: "Bleacher Report" },
      author: "Brad Shepard",
      title:
        "National Signing Day 2023: Ranking Top 25 Recruiting Classes After NSD",
      description:
        "Another national signing day has come and gone, and while the Alabama Crimson Tide didn't make it to the College Football Playoff, they did reclaim their perch...",
      url: "https://bleacherreport.com/articles/10063202-national-signing-day-2023-ranking-top-25-recruiting-classes-after-nsd",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1674847411/jtsk7t6idpizqsv2jfna.jpg",
      publishedAt: "2023-02-02T00:02:42Z",
      content:
        "Kevork Djansezian/Getty Images\r\n15. Texas A&amp;M Aggies\r\nClass size:19\r\n1 Thing to Know\r\nAs if last year's haul of defensive line recruits wasn't elite enough, the Aggies added another star this yea… [+2801 chars]",
    },
    {
      source: { id: "fox-sports", name: "Fox Sports" },
      author: "Bryan Fischer",
      title:
        "Signing Day Report Card: Colorado, Oregon, Alabama, Texas shine bright",
      description:
        "The college football recruiting cycle for 2023 came to a close with Wednesday's National Signing Day. Here's who aced the test.",
      url: "http://www.foxsports.com/stories/college-football/signing-day-report-card-colorado-oregon-alabama-texas-shine-bright",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/02/1408/814/02.01.23_RecruitingReportCard_Horizontal.jpg?ve=1&tl=1",
      publishedAt: "2023-02-01T22:56:00Z",
      content:
        "Twice each year, college football finds a need to dust off the fax machines as recruits across the country send their signatures in to programs with high hopes of making a big impact. Some exceed suc… [+9096 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      description:
        "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      urlToImage:
        "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      publishedAt: "2020-04-27T07:20:43Z",
      content:
        "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row mx-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    element.title.length >= 45
                      ? element.title.slice(0, 88)
                      : element.title
                  }
                  description={
                    element.description.length >= 88
                      ? element.description.slice(0, 88)
                      : element.description
                  }
                  newsUrl={element.url}
                  imageUrl={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
