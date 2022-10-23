# Tetris <img src="" style="width: 40px;height:40px;">

**Developer: Erica Wall**

[Visit live website](https://aleksandracodes.github.io/CI_PP2_SunshineGuessing/)

![Mockup image](docs/ami-responsivedesign-sunshineguessing.PNG)

## Table of Content
  - [Project Goals](#project-goals)
    - [User Goals](#user-goals)
    - [Site Owner Goals](#site-owner-goals)
  - [User Experience](#user-experience)
    - [Target Audience](#target-audience)
    - [User Requirements and Expectations](#user-requirements-and-expectations)
  - [User Stories](#user-stories)
    - [Site User](#site-user)
    - [Site Owner](#site-owner)
  - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Fonts](#fonts)
    - [Structure](#structure)
    - [Wireframes](#wireframes)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks, Libraries & Tools](#frameworks-libraries--tools)
  - [Features](#features)
  - [Validation](#validation)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
    - [JavaScript Validation](#javascript-validation)
    - [Accessibility](#accessibility)
    - [Performance](#performance)
  - [Testing](#testing)
    - [Performing tests on various devices](#performing-tests-on-various-devices)
    - [Browser compatibility](#browser-compatibility)
    - [Testing user stories](#testing-user-stories)
  - [Bugs](#bugs)
  - [Deployment](#deployment)
  - [Credits](#credits)
  - [Acknowledgements](#acknowledgements)

## Project Goals

The goal of this project was to create a simple, interactive and user-friendly version of the well-known Tetris game.

### User Goals

- Play a game with simple rules that is fun and engaging
- Challenge themselves on different words and phrases

### Site Owner Goals

- Create a game which is entertaining and engaging
- Create visually appealing design
- Create a simple navigation around website
- Provide fully responsive and accessible website

## User Experience

### Target Audience

- The game can be played by people of all ages and cultures
- Anyone who wants to have fun playing a game with simple and clear rules

### User Requirements and Expectations

- Easy to understand game rules
- Simple navigation
- Simple presentation of content on the page that makes logical sense
- A responsive wesite that allows the user to play the game on any devise
- Links and functions that work as expected
- An easy way to contact the developer and leave feedback
- Accessibility

## User Stories

### Site User

1. I want to easily understand the rules of the game
2. I want to enter my name and have it visible on screen while the game is played
3. I want to be able to play the game by using the keyboard
4. I want to be able to play the game on desktop, tablet and mobile devices
5. I want to be able to get in touch with the developer
6. I want to be sure that my message has been sent

### Site Owner

7. I want user to easily understand the game
8. I want the user to be able to challenge themselves
9. I want my game to be fully responsive
10. I want the user to come to a 404 error page instead of having to use the browser back button if they enter a url that does not exist
11. I want user to be able to contact me and provide their feedback

## Design

### Colour Scheme

The colour scheme across the screens was kept simple and consistent and was inspired by the colours of the sky and sun.
- For the contrast, the shade of the pink was used for error message and unguessed phrase
- Game title and game navigation buttons are orange

The pallet used was found on [Colormind.io](http://colormind.io/)
<img src="docs/colour-pallet-sgg.JPG">

### Fonts

Google Fonts were implemented on the website. Nunito with sans-serif fallback was used across all screens as I found it highly readable and clear. To reflect the fun aspect of the game, the Rammetto One with a cursive fallback was used for the game title and instructions heading.

### Structure

The structure of the website was designed to be easy to learn and navigate. Each screen of the game appears in the same container with maintained harmony of all elements within.

- The game consist of the following screens:
  - A home page / start screen with instructions icon in the top line, game title and user login
  - Choose game difficulty level screen
  - Main game screen - it contains the category of the phrase, number of guesses remaining in the round, hidden phrase with underscores for each letter, alphabet letters to click, current score and high score
  - Screen shown when the phrase has been guessed - the number of points gained in the round and overall scoring are displayed
  - Screen shown when the phrase has not been guessed within specific number of guesses. The correct phrase and options to either restart the game on same level or select other game level are shown
- A modal with game instructions which pops up when the instructions icon is clicked, available on all game screens
- The contact page with contact form which allows users to send an email to the developer and provide their feedback
- A separate 404 error page

### Wireframes

<details><summary>Big screens - laptop & desktop</summary>
<img src="docs/wireframes/wireframes-laptop.jpg">
</details>
<details><summary>Medium screens - tablets</summary>
<img src="docs/wireframes/wireframes-tablet.jpg">
</details>
<details><summary>Small screens - mobile</summary>
<img src="docs/wireframes/wireframes-mobile.jpg">
</details>

## Technologies Used

### Languages

- HTML
- CSS
- JavaScript

### Frameworks, Libraries & Tools

- [Am I Responsive](http://ami.responsivedesign.is/) was used to create the multi-device mock-up you can see at the start of this README.md file.
- [Balsamiq](https://balsamiq.com/) to create the wireframes for the project
- [Bootstrap v5.1.3](https://getbootstrap.com/)
- [EmailJS](https://www.emailjs.com) used to send email from the contact form
- [Favicon.io](https://favicon.io) for making the site favicon
- [Font Awesome](https://fontawesome.com/) - Icons from Font Awesome were used throughout the site
- Gimp and Microsoft Paint were used to create game pictures and resize background image
- [Git](https://git-scm.com/) was used for version control within VSCode to push the code to GitHub
- [GitHub](https://github.com/) was used as a remote repository to store project code
- [Google Fonts](https://fonts.google.com/)
- [Remove.bg](https://www.remove.bg/) was used to remove background on logos
- [This source](https://chir.ag/projects/name-that-color) was used to initially name root colors from the colour pallet. I have removed unwanted colors and renamed all during the development of the project.
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools) were used for debugging of the code and check site for responsiveness
- [WC3 Validator](https://validator.w3.org/), [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/), [JShint](https://jshint.com/), [Wave Validator](https://wave.webaim.org/), [Lighthouse](https://developers.google.com/web/tools/lighthouse/) and [Am I Responsive](http://ami.responsivedesign.is/) were all used to validate the website

## Features

The website has 3 webpages consisting of 11 distinct features described below.

### Home screen

#### Title animation
- When the page is loaded the game title fades-in

<details><summary>See feature</summary>
<img src="docs/features/feature-game-title.JPG">
</details>

#### Username input
- User is asked to enter their name in the input field. The username needs to be between 1 and 12 characters long. The are no restrictions on characters type. However, if the input field is left blank, then a feedback message is displayed for user to try again. Once a valid username has been provided, the name is displayed next to the user icon on the next screen and user is able to select the difficulty level of the game.
- Username remains displayed on all game screens
- User stories covered: 2

<details><summary>See feature</summary>
<img src="docs/features/feature-username-input.JPG">
</details>

### Instructions Modal
- A modal with game instructions which pops up when the instructions icon is clicked
- Available on all game screens
- Background color is set slightly darker than on the game screen
- User stories covered: 1, 12

<details><summary>See feature</summary>
<img src="docs/features/feature-instructions.JPG">
</details>

### Footer
- Featured on all pages
- Contains link to contact form (opening in the same window), github page and social media (opening in a separate window)
- User stories covered: 10

<details><summary>See feature</summary>
<img src="docs/features/feature-footer.JPG">
</details>

### Difficulty level screen
- User can choose difficulty level of the game they wish to play
- User stories covered: 3, 13

<details><summary>See feature</summary>
<img src="docs/features/feature-choose-difficulty-level-screen.JPG">
</details>

### Game screen
- The below elements are displayed on the screen:
  - Username
  - Selected difficulty level of the game
  - Number of guesses left in the round
  - Game instructions icon
  - Category of the phrase to be guessed
  - Image representing how many guesses were made
  - Underscores for each letter of the hidden phrase
  - Alphabet buttons which work on mouse click or keyboard press
  - High score and current user score
- User stories covered: 4, 5, 6

<details><summary>See feature</summary>
<img src="docs/features/feature-game-screen.JPG">
</details>

### Correct Guess Screen
- The below elements are displayed on the screen:
  - Username
  - Difficulty level of the game that is being played
  - Number of guesses that were left in the round - number of points scored
  - Complimentary message to the user
  - Number of points scored in the round
  - Picture of smiley sun
  - Button to start a new round
  - High score and current user score
- User stories covered: 7

<details><summary>See feature</summary>
<img src="docs/features/feature-game-correct-guess.JPG">
</details>

### Wrong Guess Screen
- The below elements are displayed on the screen:
  - Username
  - Difficulty level of the game that was played
  - Cloud icon with 0 guesses remaining
  - Phrase which has not been guessed
  - Picture of sad rainy cloud
  - Buttons to restart the game on same level or change the level
  - High score and current user score
- User stories covered: 8

<details><summary>See feature</summary>
<img src="docs/features/feature-game-wrong-guess.JPG">
</details>

### Contact Form
- User is able to provide feedback about the game
- EmailJS has been used to send an email to developer with user's data and message
- User stories covered: 10

<details><summary>See feature</summary>
<img src="docs/features/feature-contact-form.JPG">
</details>

### Contact Form confirmation screen
- Thank you message is displayed
- Contains return to the main screen button
- User stories covered: 11

<details><summary>See feature</summary>
<img src="docs/features/feature-contact-form-sent.JPG">
</details>

### 404 error page
- The site has been given a 404 error page which is displayed if the user enters a url that does not exist.
- Contains return to the main screen button
- User stories covered: 15

<details><summary>See feature</summary>
<img src="docs/features/feature-404-error-page.JPG">
</details>

## Validation

### HTML Validation

The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors.
<details><summary>Home</summary>
<img src="docs/validation/validation-html-game.JPG">
</details>

<details><summary>Contact form page</summary>
<img src="docs/validation/validation-html-contact.JPG">
</details>

<details><summary>404 error page</summary>
<img src="docs/validation/validation-html-404page.JPG">
</details>

### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website.
When validating all website, it passes with no errors. However, some warning are identified linked to Bootstrap v5.1.3.
When validating my own internal CSS, the validator shows no errors and four warning associated with vendor extension (-webkit-appearance).

<details><summary>All site</summary>
<img src="docs/validation/validation-css-site.JPG">
</details>
<details><summary>Style.css</summary>
<img src="docs/validation/validation-css-style.JPG">
<img src="docs/validation/validation-css-style2.JPG">
</details>

### JavaScript Validation

JSHint JS Validation Service was used to validate the Javascript files. No significant issues were found.

<details><summary>game.js</summary>
<img src="docs/validation/validation-js-game.JPG">
</details>
<details><summary>game-data.js</summary>
<img src="docs/validation/validation-js-game-data.JPG">
</details>
<details><summary>contact-form.js</summary>
<img src="docs/validation/validation-js-contact.JPG">
</details>

### Accessibility

The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards.
All site pass with 0 errors.

<details><summary>Home page</summary><img src="docs/validation/validation-accessibility-all-site.JPG">
</details>
<details><summary>Contact form page</summary><img src="docs/validation/validation-accessibility-contact-form.JPG">
</details>
<details><summary>404 page</summary><img src="docs/validation/validation-accessibility-404-page.JPG">
</details>

### Performance

Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website.
<details><summary>Home page</summary><img src="docs/validation/validation-lighthouse-performance-home.JPG">
</details>
<details><summary>Contact form page</summary><img src="docs/validation/validation-lighthouse-performance-contact.JPG">
</details>
<details><summary>404 page</summary><img src="docs/validation/validation-lighthouse-performance-404-page.JPG">
</details>

## Testing

### Performing tests on various devices

The website was tested using Google Chrome Developer Tools Toggle Device Toolbar to simulate viewports of different devices.

The website was tested on the following devices:
- Lenovo B590 (laptop screen size)
- Samsung Galaxy Tab A (tablet screen)
- Samsung S7 (mobile screen)
- Huawei P10 Lite (mobile screen)

### Browser compatibility

- Testing has been carried out on the following browsers:
  - Googe Chrome Version 96.0.4664.110 (Official Build) (64-bit)
  - Firefox Browser 95.0.2 (64-bit)

### Testing user stories

1. I want to easily understand the rules of the game

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Instructions Icon | Click on the icon | Modal with game instructions pops up | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-1-a.JPG">
<img src="docs/user-story-testing/user-story-1-b.JPG">
</details>

2. I want to enter my name and have it visible on screen while the game is played

| **Feature**    | **Action**                                                           | **Expected Result**                               | **Actual Result** |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------- | ----------------- |
| Username input | Type user name (1-12 characters) and click button or press Enter key | User log in and name displayed in top left corner | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-2-a.JPG">
<img src="docs/user-story-testing/user-story-2-b.JPG">
<img src="docs/user-story-testing/user-story-2-c.JPG">
</details>

3. I want to be able to choose a difficulty level for the game

| **Feature**             | **Action**                                                             | **Expected Result**                                                                                     | **Actual Result** |
| ----------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------- |
| Difficulty level screen | Click one of the three buttons on the screen to play the relevant game | The chosen game level screen loads. Game level and number of guesses are displayed on top right corner. | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-3-a.JPG">
<img src="docs/user-story-testing/user-story-3-b.JPG">
<img src="docs/user-story-testing/user-story-3-c.JPG">
<img src="docs/user-story-testing/user-story-3-d.JPG">
</details>

4. I want to have different categories of phrases to guess from

| **Feature**                           | **Action**                               | **Expected Result**                                                       | **Actual Result** |
| ------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------- | ----------------- |
| Difficulty level screen & Game screen | Select the level of desired game to play | The phrase category is displayed on the game screen above the sun picture | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-4-a.JPG">
<img src="docs/user-story-testing/user-story-4-b.JPG">
</details>

5. I want to be able to play the game both by clicking the mouse and by using the keyboard

| **Feature** | **Action**                                                               | **Expected Result**                                                                        | **Actual Result** |
| ----------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ----------------- |
| Game screen | Click on the displayed alphabet buttons or press the key on the keyboard | The letter which have already been clicked/pressed changes color and cannot be used again. | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-5-a.JPG">
<img src="docs/user-story-testing/user-story-5-b.JPG">
</details>