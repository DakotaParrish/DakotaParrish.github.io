// IIFE - Immediately Invoked Function Express
// AKA anonymous self-executing function

"use strict";
(function()
{

    /**
     * This function uses AJAX to open a connection to the server and returns
     * the data payload to the callback function
     * 
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */
    function AjaxRequest(method, url, callback)
    {
        // AJAX STEPS
        // Step 1. - instantiate an XHR Object
        let XHR = new XMLHttpRequest();

        // Step 2. - add an event listener for readystatechange
        XHR.addEventListener("readystatechange", () =>
        {
            if(XHR.readyState === 4 && XHR.status === 200)
            {
                if(typeof callback === "function")
                {
                    callback(XHR.responseText);
                }
                else
                {
                    console.error("ERROR: callback not a function");
                }
               
            }
        });

        // Step 3. - Open a connection to the server
        XHR.open(method, url);

        // Step 4. - Send the request to the server
        XHR.send();

    }


    /**
     * This function loads the header.html content into a page
     *
     * @param {string} html_data
     */
    function LoadHeader(html_data)
    {
        $("header").html(html_data);
        $(`li>a:contains(${document.title})`).addClass("active"); // update active link 
        CheckLogin();
    }

    function DisplayHomePage()
    {
        console.log("Home Page");

        // The jQuery way - returns an array (collection) of elements that match the query and attaches a click event
        $("#AboutUsButton").on("click", function() 
        {
            location.href = "about.html";
        });


        
        $("main").append(`<p id="MainParagraph" class="mt-3">This is the Main Paragraph</p>`);
        //Article.innerHTML = ArticleParagraph;
        $("body").append(`
        <article class="container">
        <p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>
        </article>`);  

    }

    function DisplayAboutPage()
    {
        console.log("About Us Page");
    }

    function DisplayProjectsPage()
    {
        console.log("Our Projects Page");
    }

    function DisplayServicesPage()
    {
        console.log("Our Services Page");
    }

    /**
     * Adds a Contact Object to localStorage
     *
     * @param {string} fullName
     * @param {string} contactNumber
     * @param {string} emailAddress
     */
    function AddContact(fullName, contactNumber, emailAddress)
    {
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.serialize())
        {
            let key = contact.FullName.substring(0, 1) + Date.now();

            localStorage.setItem(key, contact.serialize());
        }
    }

    /**
     * This method validates an input text field and displays an error if it is wrong
     *
     * @param {*} input_field_ID
     * @param {*} regular_expression
     * @param {*} error_message
     */
    function ValidateField(input_field_ID, regular_expression, error_message)
    {
        let messageArea = $("#messageArea").hide();
        

        $("#" + input_field_ID).on("blur", function()
        {
            let inputFieldText = $(this).val();
            if(!regular_expression.test(inputFieldText))
            {
                // does not pass RegEx test
                $(this).trigger("focus"); // go back to the FullName text box
                $(this).trigger("select"); // select all the Text in the FullName text box
                messageArea.addClass("alert alert-danger"); // add the alert to the div element(s)
                messageArea.text(error_message).show();
                
            }
            else
            {
                // does pass RegEx test
                messageArea.removeAttr("class").hide();
            }
        });

    }

    function ContactFormValidation()
    {

        ValidateField("fullName", /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]{1,})+(\s|,|-)([A-Z][a-z]{1,})+(\s|,|-)*$/, "Please enter a valid Full Name.");
        ValidateField("contactNumber", /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]\d{3}[\s-.]?\d{4}$/, "Please enter a valid Contact Number.");
        
        ValidateField("emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/, "Please enter a valid Email Address.");

    }


    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        ContactFormValidation();

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function()
        {
            if(subscribeCheckbox.checked)
            {
                AddContact(fullName.value, contactNumber.value, emailAddress.value);
            }

        });    
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");

        AuthGuard();

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

                let contact = new core.Contact(); // create a new empty contact object
                contact.deserialize(contactData);

                // inject a repeateable row into the contactList
                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"> Edit</i></button></td>
                <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"> Delete</i></button></td>
                </tr>
                `;

                index++;
            }

            contactList.innerHTML = data;

            $("#addButton").on("click",() =>
            {
                location.href = "edit.html#add";
            });

            $("button.delete").on("click", function()
            {
                if(confirm("Are you sure?"))
                {
                    localStorage.removeItem($(this).val());
                }
                

                //refresh after deleting
                location.href = "contact-list.html";

            });

            $("button.edit").on("click", function()
            {
               
                location.href = "edit.html#" + $(this).val();

            });
        }
    }

    function DisplayEditPage()
    {
        console.log("Edit Page");

        let page = location.hash.substring(1);

        ContactFormValidation();

        switch (page) 
        {
          
            case "add":
                {
                    $("main>h1").text("Add Contact");
                    //Changes button text on page to from edit to add
                    $("#editButton").html(`<i class= "fas fa-plus-circle fa-lg"><i/> Add`);

                    $("#editButton").on("click", (event)=>
                    {

                        event.preventDefault();
                        //Add Contact
                        
                        AddContact(fullName.value, contactNumber.value, emailAddress.value);

                        //refresh the contact list page
                        location.href = "contact-list.html";

                    });

                    $("#cancelButton").on("click", () =>
                    {

                        location.href = "contact-list.html";

                    });
                
                    // gather form info (name, contact number, email address)
                    AddContact(fullName.value, contactNumber.value, emailAddress.value);
                }
              break;
            default:
                {
                    //get the contact info from localStorage
                    let contact = new core.Contact();
                    contact.deserialize(localStorage.getItem(page));

                    //display the edit contact info in the edit form
                    $("#fullName").val(contact.FullName);
                    $("#contactNumber").val(contact.ContactNumber);
                    $("#emailAddress").val(contact.EmailAddress);


                    //when editButton is pressed - update the contact
                    $("#editButton").on("click", (event)=>
                    {

                        event.preventDefault();

                        // get any changes from the form
                        contact.FullName = $("#fullName").val();
                        contact.ContactNumber = $("#contactNumber").val();
                        contact.EmailAddress = $("#emailAddress").val();

                        //replace the item in localStorage
                        localStorage.setItem(page, contact.serialize());

                        //return to the contact-list
                        location.href = "contact-list.html";


                    });

                    $("#cancelButton").on("click", () =>
                    {

                        location.href = "contact-list.html";

                    });
                                        
                }
                break;
        }
    }

    function DisplayLoginPage()
    {
        console.log("Login Page");

        let messageArea = $("#messageArea");
        messageArea.hide();

        $("#loginButton").on("click", function()
        {
            let success = false;

            // create an empty user object
            let newUser = new core.User();

            // use jQuery shortcut to lod the users.json file
            $.get("./Data/users.json", function(data)
            {
                // for every user in the users.json file, loop
                for (const user of data.users) 
                {
                    // check if the username and password entered matches the user data
                    if(username.value == user.Username && password.value == user.Password)
                    {
                        console.log("conditional passed!");
                        // get the user data from the file and assign it to our empty user object
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }

                 // if username and password matches..success! -> perform the login sequence
                if(success)
                {
                    // add user to session storage
                    sessionStorage.setItem("user", newUser.serialize());

                    // hide any error message
                    messageArea.removeAttr("class").hide();

                    // redirect the user to the secure area of the site - contact-list.html
                    location.href = "contact-list.html";
                }
                else
                {
                    // display an error message
                    $("#username").trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger").text("Error: Invalid Login Credentials").show();
                }
            });
        });

        $("#cancelButton").on("click", function()
        {
            // clear the login form
            document.forms[0].reset();

            // return to the home page
            location.href = "index.html";
        });
    }

    function CheckLogin()
    {
        // if user is logged in, then...
        if(sessionStorage.getItem("user"))
        {
            // swap out the login link for logout
            $("#login").html(
                `<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
            );
            

            $("#logout").on("click", function()
            {
                // perform logout
                sessionStorage.clear();

                // redirect back to login page
                location.href = "login.html";
            });
        }
    }

    function AuthGuard()
    {
        // check if user is logged in
        if(!sessionStorage.getItem("user"))
        {
            // redirect to login page 
            location.href = "login.html";
        }
    }

    function DisplayRegisterPage()
    {
        console.log("Register Page");
    }


    // named function option
    function Start()
    {
        console.log("App Started!!");

        // Call AjaxRequest function to inject the header.html content into the page
        AjaxRequest("GET", "header.html", LoadHeader);

        CheckLogin();

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
          case "Edit":
            DisplayEditPage();
            break;
          case "Login":
            DisplayLoginPage();
            break;
          case "Register":
            DisplayRegisterPage();
            break;
        }   
    }
    window.addEventListener("load", Start);
})();