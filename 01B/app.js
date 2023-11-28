
class App
{
    runApplication()
    {
        let boolLocal = false;
        let kaasAantalLocal = 32;
        let schreeuwLocal = "ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";
        this.boolClass = true;
        this.kaasAantalClass = 38;
        this.schreeuwClass = "ahhhhhhhhhhhhhhhhhhhhhhahaahahaahahaahahahaah rezero is hype";
        this.appName = "S.T.B.R";
        this.versienummer = "0.01";
        this.versiedatum = "21/11/2023";
        this.autheur = "Juliën Oving";
        this.copyright = "ishee inc.©";
        this.distributeur = "ishee inc.";
        this.darkmode = true;
        console.log(boolLocal);
        console.log(kaasAantalLocal);
        console.log(schreeuwLocal);
    }
}
let app = new App();
app.runApplication();
console.log(app.appName + "\nversion number: " + app.versienummer + "\nversion date: " + app.versiedatum + "\nautheur: " + app.autheur +  "\n" + app.copyright + "\n" + app.distributeur + "\ndarkmode = " + app.darkmode);
console.log(app.boolClass);
console.log(app.kaasAantalClass);
console.log(app.schreeuwClass);