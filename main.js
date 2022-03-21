diffrence = 0 ; 
leftWristX = 0 ;
rightWristX = 0; 

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,550);
     canvas.position (560,150);

     poseNet = ml5.poseNet(video,modelLoaded);
     poseNet.on ('pose' , gotPoses); 

}

function draw(){
    background('#ffd11a');
    document.getElementById("font_size").innerHTML = "font size of the text will be = " + diffrence + "px" ;
    textSize(diffrence); 
    fill('#ff0000');
    text('Stuti',50,400) 
}

function modelLoaded(){
    console.log("model is initialized");
}

function gotPoses(results){
     if(results.length > 0){
         console.log(results);
         rightWristX= results[0].pose.rightWrist.x ;
         leftWristX= results[0].pose.leftWrist.x ; 
         diffrence = floor(leftWristX-rightWristX);
     }
}

