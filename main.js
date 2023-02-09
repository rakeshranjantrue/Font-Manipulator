leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.position(10, 150);

    canvas = createCanvas(500, 400);
    canvas.position(830, 150);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw() { 
  background('#6495ed'); 

  document.getElementById("size").innerHTML = "Size of the text is " + difference +" px"; 
  textSize(difference); 
  fill('#87CEEB'); 
  text('Abhinav', 40, 400); 
}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}