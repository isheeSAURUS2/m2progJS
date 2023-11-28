class App{
    runApplication(){
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        console.log("helloworld");
        let g = canvas.getContext("2d")
        g.fillsStyle = "purple";
        g.fillRect(0,0,canvas.width,canvas.height);
        g.fillStyle = "white";
        g.fillRect(0,0,10,10);
        
    }
}

let app = new App();
app.runApplication();