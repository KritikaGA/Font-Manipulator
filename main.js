var noseX = 0;
var noseY = 0;
var rightWristX = 0;
var leftWristX = 0;
var difference = "";

function setup() {
    canvas = createCanvas(800, 400);
    //canvas.center();
    canvas.position(430, 130);
    video = createCapture(VIDEO);
    video.size(400, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Model is loaded');
   
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;

        difference=floor(leftWristX - rightWristX);

        console.log("rightWristX = "+results[0].pose.rightWrist.x+"rightWristY="+results[0].pose.rightWrist.y);
        console.log("leftWristX = "+results[0].pose.leftWrist.x+"leftWristY="+results[0].pose.leftWrist.y);
    }
    
}
function draw() {
background('#dbfc03');
document.getElementById("fontSize").innerHTML = "The font size of the text will be " + difference + 'px';
fill("#E6E6FA");
textSize(difference);
text('Kritika',50,400);
stroke('black');

}