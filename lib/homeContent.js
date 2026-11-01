// Copy for the home page "text conversation". Strings are raw HTML and contain
// Typed.js control sequences (^1500 = pause 1500ms).
// Default image subtitle and images
const text1 = "Me at Wreck Beach. The sun was in my eyes a bit in the photo, which is why I am squinting!";
const defaultT = [["profile2.webp", text1]];

//A response template for the text to be sent and images
class dictComp{
    constructor(theStrArr, imgArr = defaultT){
        this.theStrArr = theStrArr;
        this.imgArr = imgArr;
    }
}

//Creating the dictComp
const comp1 = new dictComp(
    ['Hello there! 👋^1500', 'I am Labib Kowsar, a fourth year Electrical engineering⚡student at the University of British Columbia (Vancouver) and this is my website! Here you’ll find some of my most notable projects, recent resumes, and a few ways to get in touch with me. ^2500', 'If you’re still on this page, you’re probably wondering what’s going on at the bottom of this page! Well, I noticed that on most portfolio sites, it gets boring to just read blocks of text. So this is my attempt to create a more personalized experience that mimics a text message conversation you would have with me in real life. ^2500', 'While it’s still far from an actual conversation, which I hope lets you get to know me in a more interactive way. Of course, I realize this isn’t everyone’s cup of tea, so I made the other pages (projects, resume) with a more traditional approach. As they say: don’t fix what ain’t broke! Either way, thanks for clicking on my website, and I hope you enjoy your stay!']
);

const comp2 = new dictComp(
    ["Ah, the age old question. For the longest time I would have answered light blue, but now that I have dabbled in color theory and tried out different color palletes, my favourite color is emerald green coupled with black. Which you might of noticed is the color pallette for this site!"],
    [["p2.webp", "The HEX values for emerald green is #2ecc71!"]]
)

const comp3 = new dictComp(
    ["Hmmm, my future goals? Truth be told, I am always a little anxious answering this question because in all honesty I don't really know. There's so much that can change in the future that I don't find it particularly useful to trying to define how my future <b><i>should be</i></b> 5 or 10 years from now.",
    "I like to focus more on the more concrete, medium term future — it's a more sensible timeline and puts me in the mindset of creating goals that more actionable.",
    "For now, most of my goals in the next 1-1.5 years would be to explore my career related interests through personal projects. Nothing teaches like a project, and I would love to explore more into hardware used in digital electronics, software construction & power generation. Of course, I will do a ton of coursework directly related to those topics — but it can never replace the frustration, sweat, tears and fun of grinding out to fruition an idea by yourself.^1000"],
    [["p14.webp", ""]]
)


const comp4 = new dictComp(
    ["I have a weak spot for ridiculously fast animals. Which is why the <b>peregrine falcon</b> and <b>cheetah</b> are my absolute favorite animals. It baffles me how evolutionary fine-tuned these two animals are to achieve top speeds of 390 km/hr and 100 km/hr respectively. ^1000 <br><br> Octopuses are a close second — I am fascinated by how smart these nine brained (yes you read that right, nine brained!) creatures are. Not to mention how some octopuses can change the color+texture of their skin to almost perfectly mimic its environment. They are just so cool!^1000"],
    [
        ["pere.webp", "Fastest animal in the world: the peregrine falcon. Photo by Frank Cone"],
        ["octo.webp", "Octopuses are just so cool! Photo by Pia B"]
    ]
)


const comp5 = new dictComp(
    ["In the summer fo 2023, I worked as a student intern in warehousing for Finning, a provider and servicer of (prodominantly) CAT products. While it's not a job related to engineering, I really loved the experience - especially the vibrant company culture and interacting with my co-workers. Seriously, you'll meet some of the most charismatic, nicest, and funniest people at my branch (some of them could go on to host their own comedy show!).",
     "I can't overstate how fun, yet productive, our workplace dynamic was. I had tons of fun, and was comfortable enough to make these two documents: <br /><br />(1) <a href='/resume/finn01.pdf'> A satirical proposal</a> asking my boss for a new vacuum cleaner (under an anonymous pen name of course - though my cover was eventually blown!)<br />(2)<a href='/resume/finn02.pdf'> A set of formulas</a> and instructions for measuring longed coiled items. <br /><br />The backstory behind these documents is something I will leave for another day, or as a topic for an in-person discussion!"],
     [["finnImg.webp", "Finning, celebrating 90 years of being in business. Proud to be apart of it!"]]

)

const comp6 = new dictComp(
    ["I am not much of a book fan, as most of the novels I read were in highschool. The best I remember is `1984` by George Orwell - it's plot warning us about how systematic political and social conditioning can strip us of our basic freedoms as humans and effectively remove any dissent from possibly forming. The story, and it's warning against totalitarianism, resonates with me — especially in today's climate where advanced technologies can actually enable governments and companies alike to implement Orwell's description of thought control."],
    [["p4.webp", "Book covers of 1984 around the world"]]
    
)

const comp7 = new dictComp(
    ["No I don't have any pets at the moment but I did at one time have pet fish. A whole miniature ecosystem in my living when I was 7 years old. But no one gave me the memo that it's possible to over feed them.", "So one fateful morning, I woke to discover that all 12 or so fish in the tank had died. They all recieved proper burials in my backyard.",
     "My family also kept a pet bird, however due to the threat of a certain strain of Avian Influenza sweeping across Asia at the time, we were forced to free the bird into the wild."],
    [["p5.webp", "Not an actual photo of the fish we used to have, but the ones we had are pretty similar to the photo"]]
    
)

const comp8 = new dictComp(
    ["I study at the University of British Columbia, Vancouver Campus. I am currenty enrolled in my third year as in the Electrical Engineering program as a co-op student.<br><br> I expect my degree to take 5 years to finish with co-op, so I am set to graduate in 2025-26! "],
    [["p6.webp", "A view showcasing IKB library, one of the most renowed buildings at UBC"]]
    
)

const comp9 = new dictComp(
    ["My favourite class? Oh that's a tough one, since UBC engineering has many challenging, but thought-provoking classes that delve deep into the fundamentals of engineering. I genuienly found every one meaningful in some way (abeit quite tough at times!), so it's difficult to name a single favourite.<br><br> Instead, here's my top 3: <ul><li><b>Math 256: Differential Equations</b></li><li><b>Elec 221: Signals and Systems</b></li><li><b>CPSC 259: Computer Science for Electrical Engineering</b></li></ul>"],
)

const comp10 = new dictComp(
    ["I have dabbled in a whole host of different programming languages. The ones I am most proficient in are Javascript, C and Python — and I mainly strucutre my projects using Object-oriented programming techniques. I have also worked with Java when I first learned coding (I need a quick refresher though to get up to speed!). Rather than listing out all of my software skills, I think it's better to show you! <br /><br /> Check out <a href='/projects'>Projects</a> to see for yourself some of the cool things I made and the skills I picked up on the way."],
    [["chart.webp", "Relative measure of my proficiency with these various languages"]]
)

const comp11 = new dictComp(
    ["I am less experienced with hardware, since I only really got a taste of it in my electronics design class. I am working on improving that, but as of right now most of my hardware skills are concentrated in programming microcontrollers (in both C and ARM) and building circuits using integrated components. In the future, I want to venture more into PCB design and creating wirelessly controllable electronics. <br /><br />Check out <a href='/projects'>Projects</a> for some of the group projects I did!"],
    [["p7.webp", ""]]
)

const comp12 = new dictComp(
    ["At the moment, the Nika confessions bot is my most memorable creation. A quick background (see Projects>Nika for the full story), Nika is a discord bot I made for the UBC engineering 2025 graduating class that would anonymously relay their confessions to a public channel on the server.",
     "It was the journey of making the bot that I reminisce about the most. I just had an idea one day to make the server a little bit more fun, and the idea excited me enough to ask the administrator of the server if we could implement it. When I got the greenlight, something sparked in me and I worked on it non-stop: watching tutorials, reading documentation and troubleshooting bugs until the bot was made and got online.",
     "I felt so satisfied looking at the finished product and laughed at the hilarious (but sometimes disturbing) confessions made by my peers!"],
     [["nika.webp", "You might recognize the name and picture if you're a fan of One Piece!"]]
)

const comp13 = new dictComp(
    ["Nowadays I don’t really have much time for movies, so my data set for reference might be a little outdated! Nevertheless my all time favourite movie is <i>A Silent Voice</i>, and second place goes to <i>Parasite</i>. If I had to recommend one of them to someone, I would go with <i>Parasite</i> because of its exquisite directing and phenomenal storyline & message. <i>A Silent Voice</i> has an equally impressive direction and stunning animation, but the story makes you quite emotional.",
     "Not everyone will like it or be as big of a fan as I am, but if you have a few hours to waste and are ok with crying a bit, then I would definitely still recommend checking it out!"],
     [["p8.webp", "My personal, all time favourite: A silent voice"], ["p9.webp", "The Oscar winning hit: Parasite"]]
)

const comp14 = new dictComp(
    ["No, not always. I always liked non-fiction books and shows, so I originally wanted to be a scientist when I was a kid. However, eventually I realized that what I really liked was contextualizing science and math into practical applications that we could use. Don’t get me wrong, I would still be intrigued if you told me that a black soldier fly larvae can eat 25-500 mg per day, but what would really get me going is how people are using them for organic waste management. ",
     "I think what really got me interested in engineering was a design competition I competed in highschool with my friends. The goal of the competition is to propose innovative solutions to some of the city’s biggest problems (housing crisis, mental health, etc) using technology. Essentially, this is the core of engineering and the great experience (we were semi-finalists!) is what made me want to pursue this career path."],
)

const comp15 = new dictComp(
    ["Gardening! 🌱<br /><br /> I love gardening. When other kids would watch Minecraft videos on youtube, I would watch tutorials on how to grow tomatoes. Currently, I am trying to pursue this hobby with my busy schedule in university by being the garden manager for the engineering student building. "],
    [["p10.webp", "A picture of what the garden looks right now - it'll look better in the future I promise!"]]
)

const comp16 = new dictComp(
   ["Jackfruit! It’s a relative of Durian, but has a pleasant fruity smell and is oh so delicious."],
   [["p11.webp", "You're really missing out if you haven't tried out jackfruit at least once in your life!"]]
)

const comp17 = new dictComp(
    ["Stereotypical answer, but it's our beautiful campus and the people in it. ^500", 
     "One thing UBC is known for is our stunning campus (excluding in the winter when it rains everyday) that’s frequently been the production site for a lot of Hollywood movies. ",
     "I also love how UBC has a massive concentration of extremely talented, hard-working students and staff. It creates a kind of network effect on me: staying in an environment with so many exceptional people motivates me to go beyond the status quo."],
     [["p12.webp", "Earth Science Building - in my opinion, is one of the best looking builidngs on campus (especially at night!)"]]
)

const comp18 = new dictComp(
    ["There’s still a lot I want to do with this site! Initially, I wanted to create a page where I could share my notes & advice for classes I have taken, and a page for my most recent resumes. Alas, since I have been coding, designing, and creating content for the site from scratch and by myself, it’s taken a long time just to get to this point. I am a big proponent of getting out a <b>minimum viable product</b> and improve incrementally rather than trying to achieve perfection.",
     "I plan to update the site every other week, so check back in a year or so to see a completely revamped site! In fact, if you look into the code, you might be able to find some hidden Easter Eggs for things that are in the pipeline. Until then, thanks for stopping by!"],
     [["p13.webp", ""]]
)

const comp19 = new dictComp(
    ["Outside of school, I take part in two on campus extracurriculars: (1) I am part of the electrical subteam of Agrobots, a UBC design team aimed at improving agricultural output using technology. My main responsibilities right now are working with other members to create FMEAs (Failure Modes and Effects Analysis), do torque verification for stepper motors, and implementing reverse polarity protection.",
     "(2) Lastly, I am the garden manager for the Engineering Student Center patio garden. My job is trying to rejuvenate the garden and make it a place for people to gather around and study/relax. This is the first time I have been in a permanent leadership position and a part of a student government, so there’s a feeling of novelty and pressure, but I hope to live up to the great expectations of the title!"],
     [["p20.webp", "The chassis of the Agrobot from previous years! This year we are planning to do a complete redesign of both the mechanical and electrical components."]]
)

// Exporting the actual dict
export const dict = {
    "Who am I?": comp1,
    "Favourite Color": comp2,
    "Extracurriculars?": comp19,
    "Future goals": comp3,
    "Favourite animal": comp4,
    "Workplace experience": comp5,
    "Best book I've read": comp6,
    "Any Pets?": comp7,
    "Where do you study?": comp8,
    "Favourite classes": comp9,
    "Software skills": comp10,
    "Hardware skills": comp11,
    "Your proudest achievement?": comp12,
    "Favourite movie": comp13,
    "Did you always know you wanted to do engineering?": comp14,
    "Hobbies?": comp15,
    "Favourite fruit": comp16,
    "Favourite thing about UBC?": comp17,
    "What's next for the site?": comp18,
}

// The question shown on first load, and the button order (dict key order).
export const defaultQuestion = "Who am I?"
export const questions = Object.keys(dict)