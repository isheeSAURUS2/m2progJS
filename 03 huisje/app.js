class App{
    runApplication(){
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        console.log("helloworld");
        let g = canvas.getContext("2d");
        
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill();
        //ahhhhhhhh
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(600,400);
        g.lineTo(700,200);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill();
        //huus
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        //huus2
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill();
        //raam
        g.beginPath();
        let random = Math.random();
        if(random < 0.2){
            g.fillStyle = "#FF0456";
        }else if(random > 0.2&&random < 0.6){
            g.fillStyle = "#172282";
        }else if(random > 0.2&&random < 0.75){
            g.fillStyle = "#ff00ae";
        }else if(random > 0.75){
            g.fillStyle = "#68bd57";
        }
        g.moveTo(350, 350);
        g.lineTo(350, 450);
        g.lineTo(450, 480);
        g.lineTo(450, 380);
        g.closePath();
        g.stroke();
        g.fill();

    }
}

let app = new App();
app.runApplication();