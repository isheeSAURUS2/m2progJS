
class App
{
    runApplication()
    {
        let appName = "S.T.B.R";
        let versienummer = "0.01";
        let versiedatum = "21/11/2023";
        let autheur = "Juliën Oving";
        let copyright = "ishee inc.©";
        let distributeur = "ishee inc.";
        let darkmode = true; 
        console.log(appName + "\nversion number: " + versienummer + "\nversion date: " + versiedatum + "\nautheur: " + autheur +  "\n" + copyright + "\n" + distributeur + "\ndarkmode = " + darkmode.toString());
        //hier komt een stukje kut code
    }
}
let app = new App();
app.runApplication();