var quizQuestions = [
    {
        // Game-wide values
        intro: "What is this in my browser?",
        appHeaderLogo: "http://meanbusiness.com/wp-content/uploads/2018/03/Firefox_logo-only_RGB-32x32.png", // 180330 - not yet in IQ
        scoreLabel: "Score",
        relatedURL0: "https://blog.mozilla.org/firefox/switch-chrome-firefox-just-minutes/",
        relatedURLLabel0: "The latest technology, speed and security all ready to roll by default",
        relatedURL1: "https://www.mozilla.org/en-US/firefox/switch/",
        relatedURLLabel1: "Switching to Firefox is fast, easy and risk-free",
        relatedURL2: "https://support.mozilla.org/en-US/kb/switching-chrome-firefox",
        relatedURLLabel2: "Firefox imports your bookmarks, autofills, passwords and preferences",
        relatedURL3: "https://www.mozilla.org/en-US/privacy/",
        relatedURLLabel3: "Read about how important tour privacy is to Mozilla (that's us)",
        // Group 1
        question: "What is this?",
        imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/03/Mozilla-Lightbeam-OneSite.gif?crop=0,0,80,80&h=250",
        answers: [
            {
                type: { mozilla: 1, Courtney: 0, Edie: 0 },
                content: "Mozilla Lightbeam showing me Web Cookies and Trackers from visiting just ONE site",
                imageSrc: ""
            },
            {
                type: { funny: 1, other: 0, Edie: 0 },
                content: "That's Laser Floyd, man!",
                imageSrc: ""
            },
            {
                type: { switch: 1, Courtney: 0, Edie: 0 },
                content: "Is that cruft sites add when I'm surfing?",
                imageSrc: ""
            },
        ]
    },
    {
        question: "Know What this is?",
        imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/03/Mozilla-Chrome-Cookies_Scroll-4secs.gif?crop=0,0,100,50",
        answers: [
            {
                type: { funny: 1, other: 0, Edie: 0 },
                content: "The worst To Do list, EVER",
                imageSrc: ""
            },
            {
                type: { mozilla: 1, Courtney: 0, Edie: 0 },
                content: "That's the list of Cookies and Trackers I've collected",
                imageSrc: ""
            },
            {
                type: { switch: 1, Courtney: 0, Edie: 0 },
                content: "Wait. What? I've never gone to ANY of those sites!",
                imageSrc: ""
            },
        ]
    },
    {
        question: "Know What this is?",
        imageSrc: "https://i0.wp.com/meanbusiness.com/wp-content/uploads/2018/03/FF-Private_Session-Purple_Mask.png?crop=0,22,100,55",
        answers: [
            {
                type: { mozilla: 1, Courtney: 0, Edie: 0 },
                content: "That's how I know I'm browsing Privately",
                imageSrc: ""
            },
            {
                type: { switch: 1, Courtney: 0, Edie: 0 },
                content: "Would this help me manage my personal Data?",
                imageSrc: ""
            },
            {
                type: { funny: 1, other: 0, Edie: 0 },
                content: "Some new kind of kink? What's the address?",
                imageSrc: ""
            },
        ]
    },
];

export default quizQuestions;