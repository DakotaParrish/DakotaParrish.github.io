"use strict";
(function() 
    {
        // check if user is logged in
        if(!sessionStorage.getItem("user"))
        {
            document.getElementById('contactListBtn').style.visibility='hidden';
        }
    })();