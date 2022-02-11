// IIFE - Immediately Invoked Function Express
// AKA anonymous self-executing function

"use strict";
(function()
{
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
    }

    function DisplayRegisterPage()
    {
        console.log("Register Page");
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
          case "Edit":
            DisplayEditPage();
            break;
          case "Login":
            DisplayLoginPage();
            break
          case "Register":
            DisplayRegisterPage();
            break
        }   
    }
    window.addEventListener("load", Start);


})();