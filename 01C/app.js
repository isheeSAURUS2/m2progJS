
class App
{
    runApplication()
    {
        this.appName = "S.T.B.R";
        this.versienummer = "0.01";
        this.versiedatum = "21/11/2023";
        this.autheur = "Juliën Oving";
        this.copyright = "ishee inc.©";
        this.distributeur = "ishee inc.";
        this.darkmode = true;
        
        //hier komt een stukje kut code
    }
}
let app = new App();
app.runApplication();
console.log(app.appName + "\nversion number: " + app.versienummer + "\nversion date: " + app.versiedatum + "\nautheur: " + app.autheur +  "\n" + app.copyright + "\n" + app.distributeur + "\ndarkmode = " + app.darkmode);