class App
{
    runApplication()
    {
        console.log("hello world");
        let gamenewsE = document.getElementsByClassName("gamenews headline");
        console.log(gamenewsE);
        let TitleE = document.getElementById("newstitle");
        TitleE.style.color = "purple";
        console.log(TitleE.style);
        //hier komt een stukje rot code
    }
}
let app = new App();
app.runApplication();