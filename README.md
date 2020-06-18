# dayBreaker

dayBreaker is a game based on the classic breakout game with a cloud-clearing/weather theme. 
 
## UX
 
This game is made for the purpose of simple, easily-accessible fun for people who want to pass some time. 

The project is based on two main user stories:
 - As Raymond, I want to pass some time between online classes, so I play a game on my laptop. I want to pause my game when my class starts so I can pich it up again in the next break I have.
 - As Sanna, I want to pass the time on my way to work, so I play a game on my phone while I'm on the subway. I am, of course, competitive by nature and like to compare scores with my co-workers who also play the game. 
 - As Emma, I have forgotten how to play the game so I want to brush up on the controls before I play.

This game has two main views, the index page and the levels. There are currently three different levels but the views are the same on all three. Screenshots of these two in mobile and desktop view are below. 

![Index page desktop view](/assets/img/screenshots/indexDesktopView.png)

![Game desktop view](/assets/img/screenshots/gameDesktopView.png)

![Index page mobile view](/assets/img/screenshots/indexMobileView.png)

![Game mobile view](/assets/img/screenshots/gameMobileView.png)

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.

There are two sections of this project that have quite separate features - The index page and the game, this section will be split in two to address their features. 
 
### Existing Features

#### Index Page 

- Main menu - Allows the user to navigate to the game and the tutorial of the game
- Tutorial - A button on the main menu that opens a modal that has some short instructions and animations that explain how to play the game
    - As the button is in font and center Emma sees this and can remind herself how to play, and then start the game

#### Game
- Mobile and desktop responsive - this allows both Raymond and Sanna to play the game even though Raymond uses a Lenovo laptop and Sanna uses an iPhone 6
- Game stats - On the top of the screen are three stats that tell the user about their progress, the score, the level, and how many lives they have left
    - This feature allows Sanna to track her score and what level she has reached so she can compare with her co-workers and continue her friendly competition
- Pause - When you press the escape button a modal shows and the game stops while it is showing
    - This feature allows Raymond to pause the game during his classes and pick it up later when he feels like it
- Multiple levels - several game screens with incrementing difficulty and background images to create more variety in the game

### Features Left to Implement
- Leaderboard - A database of all the scores on all levels, this would fulfill Sannas competitive nature even more
- High scores - tracking the individual users' scores and storing them in the future to compare to their current score 
- Improving level system - locking levels until the previous level has been completed, a screen to select levels and tracking what levels the user has already beat 
- Refactoring the JS - moving all the functions to app.js and reformatting the component files to a JSON format to make creating new levels easier 

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [Bootstrap 4.5](https://getbootstrap.com/)
    - Bootstrap is used in this project mainly for the grid system and buttons to make the design process easier and faster

- [JQuery](https://jquery.com)
    - The project uses **JQuery** that is included in Bootstrap.

- [Javascript](https://www.javascript.com/)
    - The project uses JavaScript for all the logic in the game as well as the graphics 

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    - HTML5 was used for all the structure, and the html canvas was used for the game itself

## Testing

This project has went through manual testing on all features and pages as well as code validators for all files. The code validators used for this project is w3's validators for HTML and CSS respectively, you can find them on https://validator.w3.org/ and https://jigsaw.w3.org/css-validator/ . All the JavaScript was validated using https://jshint.com/ .

For the responsivity the Chrome developer tools were used, the process will is broken down below:
1. Responsivity:
    1. Open the page you are currently testing
    2. Inspect the page by pressing ctrl + i or right clicking the page and selecting "Inspect"
    3. Change from larger devices and try to open all features (for example How to play on the index page)
    4. Note any issues that appear 
    5. Review the code and make improvements 
    6. Start over from step 3 until you have reached the smallest screen possible

Some issues that appeared in this testing were: 
1. The animated paddle on the How to play modal was more larger than the modal itself on desktop and moved all the way out of the right of the screen
    - This was fixed with media queries
2. The paddle on mobile devices was more than half of the width of the canvas
    - This issue was resolved by if statements in the component JavaScript files

The manual testing of the game was simply playing it and trying all functions such as losing and winning every level. 
The application was also put through as much pressure as possible by seeing the outmost limits of the hitbox of paddle, ball and bricks. The collions of the walls were tested as well though the same methods. Additionally the game were sent to other people who tested it in the same manner and sent feedback.
During this testing two main issues were detected:
1. The hitbox of the paddle doesn't fully match the, the ball sinks into the paddle a bit before bouncing background
2. In some occurences when the ball is bounces on the edge of the screen it can get stuck bouncing on the very edge of the canvas, it only goes away when you lose the game and the ball resets. 
These bugs are currently not fixed. 

## Deployment

This site was deployed through github pages. The method is listed below.

1. Go into the github repository
2. Click on the settings button
3. Scroll down until you see the Github Pages heading
4. Select the master branch on the drop down menu
5. Press deploy, it will be up after about 10 minutes 

## Credits
A big thanks to Hugo Zedendahl, Emma Öberg and Vendela Asplund for helping me through this process by testing the game, and providing feedback and support. 
### Content
- The text in all pages is made by yours truly.

### Media
- The art used for all backgrounds are made by yours truly.

### Acknowledgements
- I received a lot of inspiration for this project from the original breakout game, [MDNs tutorial](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) and Code Explained's [youtube tutorial](https://www.youtube.com/watch?v=FyZ4_T0GZ1U). 
- The theme of this game was inspired by the instagram page [youmademepost](https://www.instagram.com/youmademepost/)
