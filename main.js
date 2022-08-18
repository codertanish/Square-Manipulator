noseX = 0;
noseY = 0;
side = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    canvas = createCanvas(700, 500);
    canvas.position(750, 150);
    video = createCapture(VIDEO);
    video.size(windowWidth/2, 500);
    video.position(10, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded");
}

function draw() {
    background("#90b5f0");
    fill("#e6e675");
    stroke("#e6e675");
    rectMode(CENTER);
    rect(noseX, noseY, side, side);
    document.getElementById("square_size").innerHTML = "Square Side Length Is " + side + "px";
    
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX: " + noseX);
        console.log("noseY: " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        side = floor(leftWristX - rightWristX);
        console.log("Difference Between leftWristX And rightWristX: " + side);

    }
}

