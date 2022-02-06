/*
    Student Names: Dakota Parrish, Jordan Wriker
    Student ID: 100764512, 100445715
    Date Completed: Sunday, February 6, 2022
    Test Comment number 2
*/

"use strict";

(function()
{
    /**
     * Function to inject the human resources button on to the nav bar on each page
     */
    function injectHR() 
    {
        let buttonTag = 
        `
        <li class="nav-item">
            <a class="nav-link" href=""><i class="fa fa-users"></i> Human Resources</a>
        </li>
        `;

        $( buttonTag ).insertAfter( "#btnAbout" );
    }

    /**
     * Function to inject the bottom nav bar with the copyright info at the bottom of each page
     */
    function injectFooter()
    {
        let content = 
        `
        <nav class="navbar fixed-bottom navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">&copy; CopyRight 2022</a>
            </div>
        </nav>
        `;

        $( content ).insertAfter( "#break" );
    }

    /**
     * Function to display the home page and inject all of the elements using Javascript.
     */
    function DisplayHomePage()
    {
        console.log("Home Page");
        injectHR();
        injectFooter();

        let HomeContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;

        let HomeTitle = document.createElement("h1");
        let HomeWelcomeParagraph = document.createElement("p");

        HomeTitle.setAttribute("id", "HomeTitle");
        HomeTitle.setAttribute("class", "title");
        HomeWelcomeParagraph.setAttribute("id", "HomeWelcomeParagraph");
        HomeWelcomeParagraph.setAttribute("class", "info");
        HomeWelcomeParagraph.style.textAlign = "Center";


        HomeTitle.textContent = "Welcome to WEBD6201 Lab 1!"
        HomeWelcomeParagraph.textContent = "This is the home page of our site that includes all of our Lab 1 material. This website is created by Dakota Parrish and Jordan Wriker! Welcome!";

        HomeContent.appendChild(HomeTitle);
        HomeContent.appendChild(HomeWelcomeParagraph);


    }

    /**
     * Function to display the about page content. Declares a variable and then defines some html inside
     * then injects the variable into the main section of the document
     *
     */
    function DisplayAboutPage()
    {
        console.log("About Us Page");
        injectHR();
        injectFooter();

        let MainContent = document.getElementsByTagName("main")[0];
        let MainParagraph = `
        <div class="float-container">
            <h1 class="title">About Us</h1><br/>
            <div class="float-child">
                <div class="green">
                <img class="about" src="./Images/jw.jpg"></img>
                <br/>
                Jordan Wriker<br/>
                100445715<br/><br/>
                I'm 29 years old. I graduated highschool almost 11 years ago and then spent a number of years
                in the work force. I have always had a apassion for computers and other forms of technology.
                I got my first taste of coding writing custom scripts when modding "The Elder Scrolls V: Skyrim".
                From there I started to teach myself python and C# before finally enrolling in this program.  I am
                currently teaching myself blockchain development as a hobby.<br/><br/>
                <a href="https://www.linkedin.com/in/jordan-wriker-21b882221/">Jordan's LinkedIn Profile</a><br/>
                <a href="../Files/jw-resume.pdf" download>Jordan's Resume</a><br/><br/><br/>
                </div>
            </div>  
            <div class="float-child">
                <div class="blue">
                <img class="about" src="./Images/dp.jpg"></img>
                <br/>
                Dakota Parrish<br/>
                100764512<br/><br/>
                I'm 21 years old. Back in high school I was in a class for computer science where I got to experience
                with Alice 3, VB.NET, C# and C++. I've always had a passion for technology as a kid and I had a strong liking
                towards Computer Programming so when I decided to go to Durham, I went for the Computer Programming program, now in CPA. 
                In my free time, you'll see me most likely gaming, coding, or even live streaming!<br/><br/>
                <a href="https://www.linkedin.com/in/dakotaparrish/">Daktoa's LinkedIn Profile</a><br/>
                <a href="../Files/dp-resume.pdf" download>Dakota's Resume</a><br/><br/><br/>
                </div>
            </div>
        </div>
        `;
        MainContent.innerHTML = MainParagraph;
    }

    /**
     * Function to display the project page content. Declares a variable and then defines somme html inside
     * then injects the variable into the main section of the document
     *
     */
    function DisplayProjectsPage()
    {
        console.log("Our Projects Page");
        injectHR();
        injectFooter();

        let MainContent = document.getElementsByTagName("main")[0];
        let MainParagraph = `
        <div class="float-container">
            <h1 class="title">Welcome to Our Projects</h1><br/>
            <div class="float-child-1">
                <div class="green">
                    <img class="project" src="./Images/project1.png"></img><br/><br/>
                </div>
            </div>  
            <div class="float-child-2">
                <div class="blue">
                <h3 class="title">Crypto Arbitrage Bot</h3><br/>
                This is Jordan's favourite project at the moment. It is a bot that connects to an ethereum node 
                operating on the Polygon network by using node.js. It then monitors the prices of a large database of pairs across multiple decentralized
                exchanges. It updates pair pricing every new block and then checks the database for potential
                arbitrage opportunities. Later versions of this program will implement soliditiy smart contracts
                to make use of flash loans. Allowing the bot to execute on any found arbitrage opportunities without
                funds up front.
                </div>
            </div><br/><br/>
            <div class="float-child-1">
                <div class="green">
                    <img class="project" src="./Images/Tetris.png"></img><br/><br/>
                </div>
            </div>  
            <div class="float-child-2">
                <div class="blue">
                <h3 class="title">Tetris Game</h3><br/>
                This is Dakota's favourite project he's ever made to this date. Back in Grade 12, he had to make for his
                final project for the semester a game of some sort. He and his friend created Tetris. The functions of the game were you had a
                start screen where you had the options to visit the "How to Play" area, "Leaderboards" area, "Exit" game, and the "Play" option.
                Once the player's game was ended, their score was added to the leaderboards.
                </div>
            </div><br/><br/>
            <div class="float-child-1">
                <div class="green">
                    <img class="project" src="./Images/project3.png"></img><br/><br/>
                </div>
            </div>  
            <div class="float-child-2">
                <div class="blue">
                <h3 class="title">Contact List Activity</h3><br/>
                Unfortunately both of us had to wipe our computers in between our last semester. Dakota no longer has access to many of the projects
                we have worked on. I have them saved still as I made back ups on my old hard drive. However, I purchased another solid state drive between 
                semesters and had to disconnect the old hard drive from my computer. I won't be connecting it again until the end of the semester when I put this semester's
                content on it. So for now we have put our last in class exercise from this class as the final project on this page.
                </div>
            </div><br/><br/>
            <div class="float-child-1">
                
            </div>  
            <div class="float-child-2">
            </div>
        </div>
        `;
        MainContent.innerHTML = MainParagraph;
    }

    /**
     * Function to display the services and inject all of the elements using Javascript. 
     * HTML elements are declared and then appended at the end once there is content in each element
     */
    function DisplayServicesPage()
    {
        console.log("Our Services Page");
        injectHR();
        injectFooter();
        
        let serviceHeading = document.createElement("h1");
        serviceHeading.setAttribute("id", "serviceHeading");
        serviceHeading.setAttribute("class", "title");
        serviceHeading.textContent = "What We Offer!";
        serviceHeading.style.textAlign = "center";
        let MainContent = document.getElementsByTagName("main")[0];
        MainContent.appendChild(serviceHeading);
        
        let serviceContainer = document.createElement("div");
        serviceContainer.setAttribute("id", "serviceContainer");
        MainContent.appendChild(serviceContainer);

        let serviceTable = document.createElement("table");
        serviceTable.setAttribute("id", "serviceTable");
        MainContent.appendChild(serviceTable);

        let serviceOne = document.createElement("tr");
        serviceOne.setAttribute("id", "serviceOne");
        serviceOne.innerHTML = `<td><img id = "webDService" src="./Images/Web-Development.jpg" alt="Web Development" width = "400px" length = "200px" padding = "50px"></td>
                                <h1 class="title">Web Development</h1>
                                <td><p class="info"> We have a strong skill set in web development and we will use what we've learned to build a web page application that fits
                                your needs!</p>
                                </td>`;
        MainContent.appendChild(serviceOne);

        let serviceTwo = document.createElement("tr");
        serviceTwo.setAttribute("id", "serviceTwo");
        serviceTwo.innerHTML = `<td><img id = "programmingService" src="./Images/ProgrammingService.jpg" alt="Programming" width = "400px" padding = "50px"></td>
                                <h1 class="title">Programming</h1>
                                <td><p class="info">We both have knowledge in multiple computer programming languages such as C#, C++, JavaScript, and more. We are also eager to learn
                                more programming languages!</p>
                                </td>`;
        MainContent.appendChild(serviceTwo);

        let serviceThree = document.createElement("tr");
        serviceThree.setAttribute("id", "serviceThree");
        serviceThree.innerHTML = `<td><img id = "databaseService" src="./Images/database.png" alt="Database" width = "400px" padding = "50px"></td>
                                <h1 class="title">Database Development</h1>
                                <td><p class="info">We both are proficient and have even built our own database using software and languages
                                such as SQL, Microsoft Access, and Excel.</p>
                                </td>`;
        MainContent.appendChild(serviceThree);
        
        let blankRow = document.createElement("tr");
        blankRow.setAttribute("id", "blankRow");
        blankRow.innerHTML = `<tr></tr>
                                <h1></h1>
                                <tr><p></p>
                                </tr>`;
        MainContent.appendChild(blankRow);

        let blankRow2 = document.createElement("tr");
        blankRow2.setAttribute("id", "blankRow2");
        blankRow2.innerHTML = `<tr></tr>
                                <h1></h1>
                                <tr><p></p>
                                </tr>`;
        MainContent.appendChild(blankRow2);


        let blankDiv = document.createElement("blankDiv");
        blankDiv.setAttribute("id", "blankDiv");
        MainContent.appendChild(blankDiv);

        
        let blankRow3 = document.createElement("tr");
        blankRow3.setAttribute("id", "blankRow3");
        blankRow3.innerHTML = `<tr></tr>
                                <h1></h1>
                                <tr><p></p>
                                </tr>`;
        MainContent.appendChild(blankRow3);

    }

    /**
     * Function to display the contact page. Once the user clicks the submit button, it displays the information
     * entered from the console log and then after 3 seconds, the user will be redirected to the index.html page
     */
    function DisplayContactPage()
    {
        console.log("Contact Us Page");
        injectHR();
        injectFooter();

        let sendButton = document.getElementById("sendButton");
        //let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        
        sendButton.addEventListener("click", function(event)
        {
            //Prevents default behaviour of resetting the form
            event.preventDefault();

            //Creates a contact object in memory
            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);

            //Displays contact information to the console
            console.log(contact.toString());

            setTimeout(() => {
                //starts a timer after the button has been clicked 
                window.location = "./index.html";
            
                
            }, 3000);
        });    
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");
        injectHR();
        injectFooter();

        if(localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");

            let data = ""; // data container -> add data deserialized from the localStorage

            let keys = Object.keys(localStorage); // returns a string array of keys

            let index = 1; // counts how many keys

            // for every key in the keys array (collection), loop
            for (const key of keys)
            {
                let contactData = localStorage.getItem(key); // get localStorage data value related to the key

                let contact = new Contact(); // create a new empty contact object
                contact.deserialize(contactData);

                // inject a repeateable row into the contactList
                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>
                `;

                index++;
            }

            contactList.innerHTML = data;
        }
    }

    // named function option
    function Start()
    {
        console.log("App Started!!");

        switch (document.title) {
          case "Home":
            DisplayHomePage();
            break;
          case "Our Projects":
            DisplayProjectsPage();
            break;
          case "Our Services":
            DisplayServicesPage();
            break;
          case "About Us":
            DisplayAboutPage();
            break;
          case "Contact-List":
            DisplayContactListPage();
            break;
          case "Contact Us":
            DisplayContactPage();
            break;
          
        }
    }
    window.addEventListener("load", Start);
})();