noseX="";
noseY="";

headphonesX="";
headphonesY="";

function preload() {
    goggles=loadImage('https://i.postimg.cc/BbVWHn69/R.png');
    headphones=loadImage('https://i.postimg.cc/nV3Q6KD3/OIP.png');
}

function setup() {
    canvas=createCanvas(500,400);
    video=createCapture(VIDEO);
    video.hide();
    canvas.position(400,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('poseNet is loaded successfuly');
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        noseX=result[0].pose.nose.x-157;
        noseY=result[0].pose.nose.y-116;

        headphonesX=result[0].pose.nose.x-150;
        headphonesY=result[0].pose.nose.y-138;
    }
}

function draw() {
    image(video,0,0,500,400);
    image(goggles,noseX,noseY,140,90);
    image(headphones,headphonesX,headphonesY,140,100)
}

function takeSnapshot() {
    save("Poapeo.png")
}