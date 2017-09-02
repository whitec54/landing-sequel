Vue.component('nav-list', {
  template: `
            <div id='nav'>
                <span v-on:click="emmitActiveModal(\'about\')">Welcome | </span>
                <span v-on:click="emmitActiveModal(\'projects\')">My Projects | </span>
                <span v-on:click="emmitActiveModal(\'writing\')">My Writing | </span>
                <span v-on:click="emmitActiveModal(\'peers\')">Peers I've Learned From | </span>
                <span v-on:click="emmitActiveModal(\'contact\')">Contact | </span>
                <span v-on:click="emmitActiveModal(\'resume\')">Resume </span>
            </div>
            `,

  methods: {
    emmitActiveModal: function (str) {
      this.$emit('navemission',str);
    }
  }
})



Vue.component('card',{
    props:['item'],
    template:`
    <div class="peerCard">
        <div id="descWrapper">
            <a v-bind:href=item.url v-bind:title=item.url>
            <strong>{{item.name}}</strong>
            <p>{{item.description}}</p>
        </div>
        <div id="imgWrapper">
            <a v-bind:href=item.url v-bind:title=item.url>
            <img v-bind:src=item.imgSrc>
            </a>
         
        <div>
        </a>
    </div>
    `
})

//https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt1-f683511b1a1f

var app = new Vue({
  el: '#app',

  data: {
    activeModal: 'about',
    articles:[
        {
            id:0,
            description:"K-nearest neighbors, the easy one",
            name:"Machine learning for the layperson: pt3",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt3-880af0feb872",
            imgSrc:"images/articles/ml.jpeg"
        },
        {
            id:1,
            description:"Foundations And Linear Regression",
            name:"Machine learning for the layperson: pt2",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt2-15675b99cdb4",
            imgSrc:"images/articles/ml.jpeg"
        },
        {
            id:2,
            description:"And how you can help",
            name:"How College Students Are Solving The Biggest Problem In Computer Science",
            url:"https://medium.com/@cameronscwhite/how-college-students-are-solving-the-biggest-problem-in-computer-science-2fe7b7aca3af",
            imgSrc:"images/articles/csproblem.jpeg"
        },
        {
            id:3,
            description:"Why you should care",
            name:"Machine learning for the layperson: pt1",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt1-f683511b1a1f",
            imgSrc:"images/articles/ml.jpeg"
        },
        {
            id:4,
            description:"Just some thoughts from a morning run",
            name:"Not Quitting is Actually the Easy Part",
            url:"https://medium.com/@cameronscwhite/not-quitting-is-actually-the-easy-part-18cd0602a530",
            imgSrc:"images/articles/quitting.jpeg"
        },
        {
            id:5,
            description:"cold showers, big claims, and some reasonable ones too",
            name:"Thoughts on the cold shower method",
            url:"https://medium.com/@cameronscwhite/thoughts-on-the-cold-shower-method-bad000658230",
            imgSrc:"images/articles/shower.jpeg"
        },
        {
            id:6,
            description:"Thoughts from my first internship",
            name:"Interning as a developer at USAA",
            url:"https://medium.com/@cameronscwhite/interning-as-a-developer-at-usaa-e42c49135a3e",
            imgSrc:"images/articles/usaa.jpeg"
        }
    ],
    peers:[
        {
            id:0,
            description:"I was constantly impressed by my roommate and friend Abe after meeting him this summer. I have never met anyone as excited to learn and teach software engineering as Abe. He is an extremely impressive developer with unrivaled work ethic and a heart of gold.",
            name:"Ibrahim Ahmed",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt1-f683511b1a1f",
            imgSrc: "images/peers/abe.jpg"
        },
        {
            id:1,
            description:"John and I became friends interning at USAA in San Antonio summer of 2016. John is someone who creates beautiful things. He always has a side project to learn something new and it always turns out polished. He takes great pride in the things he builds and it shows",
            name:"John Sylvain",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt1-f683511b1a1f",
            imgSrc: "images/peers/john.jpg"
        },
        {
            id:2,
            description:"Nick was really the first person I looked up to as a developer. He was someone who deliberately worked on his craft, managed his time, and produced really great things outside of class. What really stands out, though, was how generous he was with his time; helping those of us who were still learning.",
            name:"Nick Rutowski",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt1-f683511b1a1f",
            imgSrc: "images/peers/nick.jpg"
        }
    ],
    projects:[
        {
            id:0,
            description:"This is probably the project I'm most excited to talk about. My team and I set out to use machine learning to identify spin news articles. Specifically classifying an article and producing a relative scale of positivity across a political spectrum of sources for context. All the ML was done from scratch w/o libraries, favoring learning over performance.",
            name:"Biasbot",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt1-f683511b1a1f",
            imgSrc:"images/projects/brain.jpg"
        },
        {
            id:1,
            description:"Jarduino was my first experience leading a team. Our aim was to prevent the wasted opportunity we saw in spare change. We created a network of smart giving jars that would track donation progress across a city to encourage donations; connecting local community members, businesses, and charities",
            name:"Jarduino",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt1-f683511b1a1f",
            imgSrc:"images/projects/coinjar.jpg"
        },
        {
            id:2,
            description:"This was my take on the many pomodoro cycle apps out there. It is a web application that takes 'productivity duration', 'break duration', and topics for each as arguments. Then it uses those to generate and play a playlist that alternates between study music videos and non-productive videos at those intervals",
            name:"Pomodoro Playlist",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt1-f683511b1a1f",
            imgSrc:"images/projects/pomodoro.png"
        },
        {
            id:3,
            description:"Born of my inability to turn off my lights before crawling into bed, I used an esp8266 (highly recommend it) and a couple of servos to make my lights 'smart.' The esp8266 acts as a server on my local network and flicks the 'on servo' or 'off servo' according to the url.",
            name:"IoT lights",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt1-f683511b1a1f",
            imgSrc:"images/projects/iot.png"
        },
        {
            id:4,
            description:"About a month after making my IoT lights, Home Depot started selling exactly what I had made but cheaper with a really nice housing (it installs with just magnets, super cool). Naturally I bought one, took it apart, and used it to open and close my blinds instead",
            name:"IoT Blinds",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt1-f683511b1a1f",
            imgSrc:"images/projects/iot.png"
        },
        {
            id:5,
            description:"Mostly an exercise in code abstraction and a fun challenge as d3 is a 2d visualization library. I wanted to see if I could make it appear a 3d shape was rotating in space. I was able to switch the 3d coordinate system from spherical to cylindrical without much trouble so I was happy with the abstraction ",
            name:"3d Shape, d3.js",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt1-f683511b1a1f",
            imgSrc:"images/projects/shape.png"
        },
        {
            id:3,
            description:"This was my attempt to de-mystify the internet two years ago. It was a simple application using google and instagram's apis to display the most liked photo at a given location. Sadly, the permissions for that api have changed so it is very broken. Still makes the cut for nostalgia though ",
            name:"Instagram API spa",
            url:"https://medium.com/@cameronscwhite/machine-learning-for-the-layperson-pt1-f683511b1a1f",
            imgSrc:"images/projects/instagram.jpg"
        },
    ]
  },

  methods: {
    setActiveModal: function(newModal) {
        this.activeModal = newModal;
    }
  }
})

