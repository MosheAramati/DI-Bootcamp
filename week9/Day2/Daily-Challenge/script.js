// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

//1. Create a class named Video. The class should be constructed with the following parameters:
//- title (a string)
//- uploader (a string, the person who uploaded it)
//- time (a number, the duration of the video - in seconds)
//2. Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
//3. Instantiate a new Video instance and call the watch() method.
//4. Instantiate a second Video instance with different values.
//5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
//6. Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch (){
        console.log(`${this.uploader} watched all ${this. time} of ${this.title}`)
    }
}

const vid1 = new Video ('Avengers', 'John', (120 + ' mins'))
const vid2 = new Video ('Avengers 2', 'Carlos', (130 + ' mins'))
vid1.watch();
vid2.watch();

//Bonus:

const videosData = [
    {
        title: 'Iron Man',
        uploader: 'James',
        time : (90 + ' mins')
    },
    {
        title: 'Iron Man 2',
        uploader: 'Hall',
        time : (120 + ' mins')
    },
    {
        title: 'Iron Man 3',
        uploader: 'Cal',
        time : (140 + ' mins')
    },
    {
        title: 'Spider Man',
        uploader: 'Lou',
        time : (100 + ' mins')
    },
    {
        title: 'Spider Man 2',
        uploader: 'Lena',
        time : (150 + ' mins')
    }
];

const videos = videosData.map(({title, uploader, time})=> new Video(title, uploader, time));

console.log(videos)

videos[2].watch()