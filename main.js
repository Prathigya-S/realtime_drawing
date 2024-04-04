nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;

function preload(){

}

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 550);

    canvas=createCanvas(550, 550);
    canvas.position(600, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",got_poses);
} 

function draw(){
    background("grey");
    document.getElementById("square_length").innerHTML="Width and height of the square = "+difference+"px";

    stroke("pink");
    fill("pink");
    square(nosex, nosey, difference);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function got_poses(results){
    if(results.length >0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex+" nosey="+nosey);

        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);

        console.log("leftwristx="+leftwristx+" rightwristx="+rightwristx+" difference="+difference);

    }
}


