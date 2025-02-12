import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
          "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
          },
          "author": null,
          "title": "India vs England LIVE: First ODI, Nagpur - cricket score & updates",
          "description": "India face England in the first ODI – follow score & text updates.",
          "url": "http://www.bbc.co.uk/sport/cricket/live/c623pj0d629t",
          "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
          "publishedAt": "2025-02-06T08:07:21.1002061Z",
          "content": "India: Rohit Sharma (capt), Yashasvi Jaiswal, Shreyas Iyer, Shubman Gill, KL Rahul (wk), Hardik Pandya, Axar Patel, Ravindra Jadeja, Harshit Rana, Kuldeep Yadav, Mohammed Shami\r\nEngland: Ben Duckett,… [+146 chars]"
        },
        {
          "source": {
            "id": "abc-news-au",
            "name": "ABC News (AU)"
          },
          "author": "Brett Worthington",
          "title": "Labor survives the week, Peter Dutton summons the press and Pauline Hanson met with crickets as parliament returns",
          "description": "Peter Dutton held a rare press conference, as did Pauline Hanson, who left 28 long awkward seconds of silence after announcing her new policy.",
          "url": "https://www.abc.net.au/news/2025-02-06/anthony-albanese-peter-dutton-pauline-hanson-press-conference/104903702",
          "urlToImage": "https://live-production.wcms.abc-cdn.net.au/949719e6bb1423145240a3d720510cfb?impolicy=wcms_watermark_news&cropH=2246&cropW=3993&xPos=0&yPos=151&width=862&height=485&imformat=generic",
          "publishedAt": "2025-02-06T06:42:31Z",
          "content": "Welcome back to your weekly federal politics update, where Brett Worthington gets you up to speed on the happenings from Parliament House.\r\nThe meeting of the parliament can be a nerve-racking time f… [+7992 chars]"
        },
        {
          "source": {
            "id": "news-com-au",
            "name": "News.com.au"
          },
          "author": "James McKern",
          "title": "Aussie star announces shock retirement",
          "description": "Australia all-rounder Marcus Stoinis has hung up the bat from one day international cricket in a shock announcement.",
          "url": "https://www.news.com.au/sport/cricket/aussie-star-announces-shock-retirement-ahead-of-tournament/news-story/ef22ba01e38387085e5cec2ba9fd7f64",
          "urlToImage": "https://content.api.news/v3/images/bin/d761af0b630e5150abe230c2bae72d31",
          "publishedAt": "2025-02-06T06:40:00Z",
          "content": "Australia all-rounder Marcus Stoinis has hung up the bat from one day international cricket in a shock announcement.\r\nThe 35-year-old was recently named in Australia’s squad for the upcoming Champion… [+2172 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ];
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines</h2>
                
                <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-md-3" key={element.url} >
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div> 
                })}
                   
                </div>
            </div>
        )
    }
}

export default News