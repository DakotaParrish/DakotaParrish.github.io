// IIFE - Immediately Invoked Function Express
// AKA anonymous self-executing function
(function()
{
    function DisplayHomePage()
    {
        console.log("Home Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
           location.href = "about.html";
        });
    }

    function DisplayProjectsPage()
    {
        console.log("Projects Page");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }

    function DisplayAboutPage()
    {
        console.log("About Page");
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");
    }

    // named function option
    function Start()
    {
        console.log("App Started!!");

        switch(document.title)
        {
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
            case "Contact Us":
                DisplayContactPage();
            break;        
        }
    }
    window.addEventListener("load", Start);


})();