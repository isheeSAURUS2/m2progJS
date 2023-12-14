class App
{
    runApplication()
    {
        console.log("hello world");
        let gamenewsE = document.getElementsByClassName("gamenews headline");
        console.log(gamenewsE);
        let TitleE = document.getElementById("newstitle");
        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            TitleE.style.backgroundColor = "#FF0456";
        }else if(random > 0.2 && random < 0.6){
            TitleE.style.backgroundColor = "#172282";
        }else if(random > 0.2 && random < 0.75){
            TitleE.style.backgroundColor = "#ff00ae";
        }else if(random > 0.75){
            TitleE.style.backgroundColor = "#68bd57";
        }
        TitleE.style.color = "purple";
        console.log(TitleE.style);
        //hier komt een stukje rot code
    }
}
let app = new App();
app.runApplication();