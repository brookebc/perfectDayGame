

function getup (){
    confirm("Ready to get started?");
    var awake = prompt("Are you awake? YES OR NO");
    var awakeResp = awake.toUpperCase();
    
    if(awakeResp === "YES") {    
        alert("Great! Let's do this! It's going to be a beautiful day!"); prompt(yourday());
    } if(awakeResp === "NO") {
        alert("Too bad. Get your butt out of bed!"); prompt(yourday());
    } else { 
        alert("I can't hear you. When entering type \"YES\" or \"NO\" ");
        getup();      
      };
}

getup();

function yourday (){
    var path = prompt("What do you want to do first? Choose A. Go to the beach B. Walk the dog or C. Eat Breakfast");
    var pathResp = path.toUpperCase();
    
    switch(pathResp) {
       case "A":
            alert("Good choice. 1000 points for you");
            alert("You've got your shades and a towel and you bike over to the beach");
            beach();
            break;
        case "B":
            alert("Thats so nice. I think he loves you. 2000 points for you");
            alert("You head out the door with your pup and head towards the dog park");
            dog();
            break;
        case "C":
            alert("Of Course! I bet you are hungry. 100 points for you");
            food();
            break;
        default:
            alert("Sorry, please choose A, B or C.");
            yourday();
            break;
    };
}   

yourday();

function beach(){
    var beacher = prompt("Wow! What a perfect beach day. So whats your favorite thing to do at the beach? A. Park your chair and catch some rays. B. Look for shells. C. Dive into the water.");
    var beacherResp = beacher.toUpperCase();

        switch(beacherResp) {
        case "A":
            alert("Uh oh... Looks like you forgot something- sunblock! You are burnt to a crisp and need to go back home.");
            alert("GAMEOVER");
            break;
        case "B":
            alert("Oh awesome! You just found a starfish and you place it back in the water. 1000 points for you");
            marina();
            break;
        case "C":
            alert("Oops- these waves are so rough you just lost your bathing suit. -1000 points for you");
            alert("Suddenly a rain cloud bursts overhead and a blinding covers the beach- you make a run for it");
            break;
        default:
            alert("Sorry, please choose A, B or C.");
            beach();
    }
}
beach();

function dog(){
    var dogger = prompt("The sun is shining and your pups tail is wagging. There is some awesome energy in the air. Would you like to: A. Pick up a jog and get some exercise too. B. Head to the dog park C. Hurry back to the house so that you can get ready for the day.");
    var doggerResp = dogger.toUpperCase();

        switch(doggerResp) {
        case "A":
            alert("You turn on some jams on your phone and take off at a great pace.");
            alert("Your RunKeeper says that you just did 6 miles! Great job!");
            alert("THIS IS THE BEST DAY EVER. YOU WIN");
            break;
        case "B":
            alert("Oh no. You forgot to put your pup on a leash and he takes off...");
            alert("Two hours later the dog catcher arrives back at your house with your dog AND a $500 ticket for you.");
            alert("Man- that sucks. GAMEOVER.");
            break;
        case "C":
            alert("Err. Nature calls and your pup drops a load.");
            alert("You look around to see if there is anyone around.");
            dump();
            break;
        default:
            alert("Sorry, please choose A, B or C.");
            dog();
            break;
    }
}
dog();

function food(){
    var foodie = prompt("So whats your poison this morning? How about: A. French Toast B. Organic fruit smoothie C. Cold Pizza D. Go to Bagel Nation.");
    var foodieResp = foodie.toUpperCase();

        switch(foodieResp) {
        case "A":
            alert("Yum! That french toast was so good."); 
            alert("But now you are so tired that you need a nap. -1000 points.");
            alert("GAMEOVER!");
            break;
        case "B":
            alert("All those superfoods gave you so much energy!")
            alert("You breeze through all your housework in less than 30 seconds.") 
            alert("Now the day is yours. YOU WIN");
            break;
        case "C":
            alert("Uh oh. You just realized that pizza was from a few weeks ago. And today it has decided to make you very sick. This is no longer a good day.")
            alert("Back to bed. GAMEOVER");
            break;
        case "D":
            alert("I know. I love Bagel Nation too.");
            alert("But you know you are going to need some exercise after all those carbs. -100 points.");
            dog();
            break;
        default:
            alert("Sorry, please choose A, B, C, or D");
            food();
            break;
    }
}
food();

function dump(){
    var dumper = prompt("It looks like no one is around. You lean down and A. Pick up the poo in a baggie. B. Sweep some leaves over the mound and head home C. Pretend that nothing happened and turn your music up. D. Take off and run from the stink");
    var dumperResp = dumper.toUpperCase();

        switch(dumperResp) {
        case "A":
            alert("Horray. You find a trashcan just around the corner so you get rid of that stinkiness");
            alert("You continue your walk and decide to head to the marina");
            marina();
            break;
        case "B": 
            alert("Suddenly your dog takes off after a cat");
            alert("You sprint after him through someones yard.");
            alert("An aligator is resting in the bushes and snaps at you.");
            alert("That was too close. GAME OVER");
            break;
        case "C":
            alert("You get to your front porch and suddenly hear can something coming from inside your home.");
            alert("Damn... if isn't karma. You had left your door open while you were gone.");
            alert("and now there is a skunk and her babies in your bedroom.");
            alert("GAMEOVER");
            break;
       case "D":
            alert("Over you music you hear something from behind you.");
            alert("Its your neighbor chasing you on his golf cart.");
            alert("You are in trouble... GAME OVER");
            break;
        default:
            alert("Sorry, please choose A, B, C or D");
            dump();
            break;
    }
}
dump();

function marina(){
    var boat = prompt("At the marina there are tons of folks washing their boats and getting ready to go out on the water for the day. You see an old man on a boat and he starts waiving you down. Do you: A. Run over to see whats up B. Pretend you don't see him and keep walking.");
    var boaterResp = boater.toUpperCase();

        switch(boaterResp) {
        case "A":
            alert("His cat has fallen in the water and you jump in to help.");
            alert("He is so thankful for saving his favorite kitty's life.");
            alert("He hands you the keys and the title to his boat and says its yours.");
            alert("Good work! You WIN!");
            break;
        case "B":
           alert("You accidently fall off the dock and get eaten by a crocodile.");
            alert("That's what happens when you are a jerk. You gotta help the old people.");
            alert("You loose. GAMEOVER");
            break;
        default:
            alert("Sorry, please choose A or B");
            marina();
            break;
    }
}
marina();