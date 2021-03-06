import React, { Component } from 'react'
import NewItem from './NewItem'

export default class News extends Component {
    //For pactics 
    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Texas teacher 'locked Covid-positive son in car boot'",
            "description": "A witness reportedly called police after hearing someone in the trunk of the Texas woman's vehicle.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-59919105",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D892/production/_122624455_covudtesr.jpg",
            "publishedAt": "2022-01-08T03:52:14.2305203Z",
            "content": "Image source, Getty Images\r\nA US teacher has been arrested after allegedly locking her Covid-positive son in a car boot to protect herself from exposure to the virus as she drove to a testing site, s… [+1480 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Truck spends three days dangling over China cliff",
            "description": "The driver is said to have tried to reverse on a narrow mountain road.",
            "url": "http://www.bbc.co.uk/news/world-asia-china-59906706",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3FAE/production/_122620361_p0bfzk33.jpg",
            "publishedAt": "2022-01-08T01:37:24.4970527Z",
            "content": "Watch this incredible video showing a truck that was left dangling over a cliff edge in China for three days. \r\nThe driver and passenger managed to escape, and the vehicle was eventually hauled to sa… [+4 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Kazakhstan unrest: Blinken questions Russian troop deployment",
            "description": "Secretary of State Antony Blinken says reasons for sending about 2,500 Russian-led troops are unclear.",
            "url": "http://www.bbc.co.uk/news/world-asia-59918004",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12522/production/_122624057_hi072972985-1.jpg",
            "publishedAt": "2022-01-08T01:37:21.9351905Z",
            "content": "Image source, Russian Defence Ministry\r\nImage caption, Russian officials say the 2,500 strong force will only remain in Kazakhstan temporarily\r\nUS Secretary of State Antony Blinken has questioned Kaz… [+3234 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Families seek justice for Iran plane crash victims",
            "description": "Two years on, the families of downed flight PS752 victims are left without answers.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-59833120",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/FE6C/production/_122623156_gettyimages-1230425478.jpg",
            "publishedAt": "2022-01-08T01:07:22.2324559Z",
            "content": "By Bernd Debusmann JrBBC News\r\nImage source, Getty Images\r\nImage caption, Dr. Hamed Esmaeilion wearing a pin depicting his wife and daughter, both of whom perished on PS752\r\nFor Hamed Esmaeilion, lif… [+7837 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "BBC reporter covered by snow flurry while filming",
            "description": "Laura Trevelyan's piece to camera in Washington DC is interrupted by a sudden white-out.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-59919101",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1383C/production/_122623997_p0bg1t0v.jpg",
            "publishedAt": "2022-01-08T00:52:21.6968071Z",
            "content": "BBC reporter covered by snow flurry while filming. Video, 00:00:33BBC reporter covered by snow flurry while filming"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Canada party flight 'idiots' fly home to face music",
            "description": "The group of over 100 travellers have been branded \"barbarians\" by Prime Minister Justine Trudeau.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-59917300",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CFF0/production/_122623235_gettyimages-1203812952.jpg",
            "publishedAt": "2022-01-07T23:22:21.4140686Z",
            "content": "Image source, Getty Images\r\nImage caption, The group was stranded in Cancun, Mexico, after airlines refused to fly them back to Canada\r\nCanadian officials say a group of influencers whose rowdy behav… [+2686 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Kazakhstan unrest: BBC witnesses apocalyptic scenes in main city",
            "description": "The BBC witnesses the aftermath of protests and deadly violence in Kazakhstan's biggest city Almaty.",
            "url": "http://www.bbc.co.uk/news/world-asia-59912794",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15844/production/_122623188_mediaitem122623187.jpg",
            "publishedAt": "2022-01-07T21:52:21.7812915Z",
            "content": "By Abdujalil Abdurasulov BBC News, Almaty \r\nImage caption, The authorities appear to be back in control but the city is reeling from the violence\r\nKazakhstan's biggest city Almaty looks like somethin… [+4297 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "US Supreme Court scrutinises Biden vaccine mandates",
            "description": "The eventual ruling by the court could have an impact on some 80 million workers.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-59916467",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14972/production/_122583348_gettyimages-1363291682.jpg",
            "publishedAt": "2022-01-07T20:52:19.3617821Z",
            "content": "Image source, Getty Images\r\nThe US Supreme Court appears doubtful as to whether the Biden administration can enforce a vaccine-or-testing mandate for large private employers.\r\nThe rules apply to comp… [+3657 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ahmaud Arbery: Killed jogger's murderers face life in prison",
            "description": "Three white men will be sentenced on Friday after they were convicted of killing the black jogger.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-59912361",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1410F/production/_122619128_gettyimages-1221046673.jpg",
            "publishedAt": "2022-01-07T17:52:21.5743172Z",
            "content": "Image source, Getty Images\r\nImage caption, Racial justice demonstrations were seen around the country after word of Ahmaud Arbery's death spread\r\nThe family of a murdered black jogger has called for … [+2814 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Sidney Poitier: Hollywood star dies aged 94",
            "description": "The Oscar-winning Hollywood star was also a respected humanitarian.",
            "url": "http://www.bbc.co.uk/news/entertainment-arts-59907931",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4967/production/_122619781_sidney.jpg",
            "publishedAt": "2022-01-07T15:52:22.6109246Z",
            "content": "Sidney Poitier, the first black man to win a best actor Oscar, has died at 94.\r\nThe Hollywood star's death was confirmed to the BBC by the office of Fred Mitchell, the Bahamas' minister of foreign af… [+573 chars]"
        }
    ]
    constructor() {
        super();
        // console.log("Hello I am a construtor form news Component....")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    // async componentDidMount() {
    //     let k = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4cc964e83e894ae4a523afb0bfbec6c9";
    //     let data = await fetch(k);
    //     let parseData = data.json;
    //     this.setState({ articles: parseData.articles })
    // }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center mb-4'>News App-Top Headlines</h2>
                {/* {this.state.articles.map((element) => { console.log(element) })} */}
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 55) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}


                </div>
            </div>
        )
    }
}
