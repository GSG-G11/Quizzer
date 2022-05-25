<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/GSG-G11/Quizzer">
    <img src="https://i.imgur.com/0oPLZFX.png" alt="Logo" width="160" height="160">
  </a>

<h1 align="center">Quizzer</h1>

  <p align="center">
       A website which teachers can use for creating and publish quizzes, and students can use to attend quizzes online.
    <br />
    <br />
    <a href="https://quizzer-g11.herokuapp.com">View Demo</a>
     .
    <a href="https://www.figma.com/file/pV4aL8mUOgq4Hv2Q58qgFO/Quizzer">Design Link</a>
    ·
    <a href="https://github.com/GSG-G11/Quizzer/issues">Report Bug</a>
    ·
    <a href="https://github.com/GSG-G11/Quizzer/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#problem">Problem</a></li>
        <li><a href="#solution">Solution</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#database-schema">Database Schema</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li>
          <a href="#user-stories">User Stories</a>
            <ul>
                <li><a href="#student-stories">As a Student</a></li>
                <li><a href="#teacher-stories">As a Teacher</a></li>
            </ul>
          </li>           <li>
          <a href="#user-journey">User Journey</a>
          <ul>
              <li><a href="#student-journey">As a Student</a></li>
                <li><a href="#teacher-journey">As a Teacher</a></li>
          </ul>
          </li> 
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project <span id="about-the-project"></span>

<img src="https://i.imgur.com/sLGCdg2.png" />

<p align="right">(<a href="#top">back to top</a>)</p>

### Problem <span id="problem"></span>
Due to the technological development across the years and the presence of events such as the Covid-19 pandemic, direct communication with people has become rare, and online services have got more audiences than any time ever, so, online services have begun to rise, but most of these services are complex and not user-friendly, therefore there was an urgent need for platforms and websites that provide various services online.

### Solution <span id="solution"></span>
Build a quiz maker website `Quizzer` to create tests and pass them to the appropriate people.
One of the biggest features of the app is the simplicity and user-friendly experience.

### Built With <span id="built-with"></span>

* [React.js](https://reactjs.org/)
* [Express.js](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/docs/)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [Material UI](https://mui.com/)
* [Cloudinary](https://cloudinary.com/)
* [Nodemailer](https://nodemailer.com/about/)

### Database Schema <span id="database-schema"></span>
![image](https://user-images.githubusercontent.com/78752405/169612140-1be9fd75-9a0e-480b-80c6-312f492eed46.png)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started <span id="getting-started"></span>

To get a local copy up and running follow these simple example steps.

### Prerequisites <span id="prerequisites"></span>

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation <span id="installation"></span>

1. Create a free account at [Cloudinary](https://cloudinary.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/GSG-G11/Quizzer.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. In the project root folder, rename `.env.example` file to `.env` and fill in the environment variables
   ```sh
   SECRET_KEY='<your secret key>'
   DEV_DB_URL=postgres://<username>:<password>@localhost:<port || 5432>/<development database>
   TEST_DB_URL=postgres://<username>:<password>@localhost:<port || 5432>/<test database>
   APP_MAIL='<your email>'
   MAIL_PASSWORD='<your password>'
   ```
5. In the `client` folder, renmae `.env.example` file to `.env` and fill in the environment variables
    ```sh
    REACT_APP_CLOUDINARY_UPLOAD_PRESET='<Your cloudinary upload preset>'
    REACT_APP_CLOUDINARY_CLOUD_NAME='<Your cloudinary cloud name>'
    ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage <span id="usage"></span>
### User Stories <span id="user-stories"></span>
#### As a user who wants to attend exams: <span id="student-stories"></span>
- I can create a new account.
- I can log into my account.
- I want to see all public exams.
- I want see the leaderboard.
- I want to search for public exams by name.
- I want to search for private exams by exam code sent to me by my teacher.
- I want to attend exams.
- I want to see my profile.
- I want to see all exams that I've attended with thier results.

#### As a user who wants to create exams: <span id="teacher-stories"></span>
- I can create a new account.
- I can login to my account.
- I want to see all exams that I've created with the number of students that attended this exam.
- I want to see the exam code.
- I want to be able to create a new exam.
- I can specify the exam title, description, and duration.
- I can create a multiple choice, true or false, and/or a short answer exam.
- I want to be able to delete an exam.
- I want to see students marks for a specific exam.
- I want to see my profile.


### User Journey <span id="user-journey"></span>
#### As a **STUDENT** <span id="student-journey"></span>
- once your visit our app you'll notice a navbar that has a login button, when clicking it a modal will appear asking you to continue as a student or a teacher, choose **student**.
- Then you can log into your account by filling up the login form or if you don't have an account yet, click on signup to create a new account.
- After you login you'll be faced with a page containing quizzes where you can try to test your knowledge in a specific field, also you'll see an `Enter Code` button.
- When clicking this button a form will appear asking you to enter a private quiz code.
- After entering the code, if the quiz code is valid, You'll be navigated to a page containing the quiz details, and if it's invalid, an error message will appear to inform you that this enrollment code is invalid.
- In the quiz details page, you'll see the quiz information like the title of the quiz, who created this quiz, a description/instructions for this quiz, and the duration of this quiz.
- When clicking on `Enroll now` button, the quiz will start, **be aware that you can't attend a private quiz more than once**.
- Throughout the quiz questions, you can navigate forward/backward between questions.
- When finishing answering questions, click on the `Submit` button to submit your answers.
- If the time limit finishes, the quiz will be sumitted authomaticlly.
- After submitting the quiz, a modal will appear informing you with your result, also an `Email` will be sent to you with further details about your submittion.
- If you want to test your knowledge in a specific field, go to the home page and you'll see quizzes from different fields.
- When clicking on the `Details` button, you'll be navigated to a page containing further information about this quiz.
- If you click `Enroll now`, the quiz will start with a specific time limit.
- After answering all the questions, you can submit your answers by clicking on the `Submit` button, or if the time finishes, the quiz will be submitted authomaticlly.
- After submitting your answers, a modal will appear informing you with your results.
- In the navbar you can see `Leaderboard`, when clicking on it, you'll be navigated to a page containing the top results of people attended public quizzes.
- If users have attended a quiz and they need thier name to be in the leaderboard but theire result is low, they can attend the quiz more than once to get the a higher score and be in the leaderboard.

#### As a **TEACHER** <span id="teacher-journey"></span>
- once your visit our app you'll notice a navbar that has a login button, when clicking it a modal will appear asking you to continue as a student or a teacher, choose **teacher**.
- Then you can log into your account by filling up the login form or if you don't have an account yet, click on signup to create a new account.
- After you login you'll be faced with a table containing your created quizzes.
- And since you don't have any quizzes yet, go ahead and click on create Quiz button to create a quiz.
- A quiz has a title, descriptions/instaruction for students, and a time limit (number of minutes before the quiz is submited automatically).
- After you provide these information, click on add question button and you'll be navigated to another page containing a modal with three categories of questions to choose from: ***Multiple Choice***, ***True or false***, and ***short answer***.
- After you pick one, a form will appear telling you to type the question and the neccessary answer(s).
- If you want to change the type of the question while creating it, simply click on the select box at the top of add question form to choose a new type for your question.
- If you wan't to add another question, you simply click on add question button to add another question.
- After you finish adding question, you can click on create quiz button to generate your quiz, and then you'll automaticlly be navigated to your dashboard where you can see your newly created quizzes with an auto generated enrollment code, you can copy this code and send it to your students so they can enroll into your quiz.
- And for some reason you decided you want to delete an exam, you can click on the trash icon in the action column, you'll be promted with a confirmation modal warning you and making sure you wan't to proceed with this action.
- You can also go to your profile, by clicking on the person icon on the top right of navbar, there you can add or edit your profile picture, name, and summary about yourself by clicking on the edit profile button.


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap <span id="roadmap"></span>

- [x] Store user score and send him/her an email.
- [x] Create a new quiz (backend).
- [ ] Create a new quiz (frontend).

See the [open issues](https://github.com/GSG-G11/Quizzer/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing <span id="contributing"></span>

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License <span id="license"></span>

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact <span id="contact"></span>
### Our Great Contributors
- Zaher J. Abuamro - [@zaher-aa](https://github.com/zaher-aa) - zaherabuamro@gmail.com
- Amjad Yahia Hassan - [@amjed-98](https://github.com/amjed-98) - amjedyehia1998@gmail.com
- Khaled El Khudary - [@khaled-samy](https://github.com/khaled-samy) - khaled.s.elkhudary@gmail.com

### Our Great Team Leader
- Muhammad Abdulhadi - [@Mu7ammadAbed](https://github.com/Mu7ammadAbed) - mu7ammadabed@gmail.com

Project Link: [https://github.com/GSG-G11/Quizzer](https://github.com/GSG-G11/Quizzer)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments <span id="acknowledgments"></span>
* [The Trivia API](https://the-trivia-api.com/docs/)
* [Cross-Browser favicon](https://realfavicongenerator.net/)
* [Cloudinary](cloudinary.com)
* [Nodemailer](https://nodemailer.com/about/)
* [pg-escape](https://www.npmjs.com/package/pg-escape)

<p align="right">(<a href="#top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/GSG-G11/Quizzer?style=for-the-badge
[contributors-url]: https://github.com/GSG-G11/Quizzer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/GSG-G11/Quizzer?style=for-the-badge
[forks-url]: https://github.com/GSG-G11/Quizzer/network/members
[stars-shield]: https://img.shields.io/github/stars/GSG-G11/Quizzer?style=for-the-badge
[stars-url]: https://github.com/GSG-G11/Quizzer/stargazers
[issues-shield]: https://img.shields.io/github/issues/GSG-G11/Quizzer?style=for-the-badge
[issues-url]: https://github.com/GSG-G11/Quizzer/issues
[license-shield]: https://img.shields.io/github/license/GSG-G11/Quizzer?style=for-the-badge
[license-url]: https://github.com/GSG-G11/Quizzer/blob/master/LICENSE.txt

[product-screenshot]: images/screenshot.png
