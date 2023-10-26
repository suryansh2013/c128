believer = "";
bones = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload() {
    believer = loadSound("Believer.mp3");
    bones = loadSound("Bones.mp3");
}
function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("PoseNet is Initialized !");
}
function draw(){
    image(video, 0, 0, 500, 400);
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("LeftWristX = " + leftWristX + " | LeftWristY = " + leftWristY + " | RightWristX = " + rightWristX + " | RightWristY = " + rightWristY);
    }
}
function play() {
    believer.play();
    document.getElementById("song").innerHTML = "Play";
}