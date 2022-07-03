const path = require ("path")

const mainController = {
    home: function(req,res){ 
        console.log("un usuario entro al home");
        res.sendFile (path.join (__dirname, "../views/home.html"));
    },
    about: function(req,res){ 
        console.log("un usuario entro al about");
        res.sendFile (path.join (__dirname, "../views/about.html"));

    },
};



module.exports=mainController;