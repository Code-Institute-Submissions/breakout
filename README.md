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

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X