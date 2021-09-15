let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let loadimage = (src, callback) => {
    alert(1)
    let img = document.createElement("img");
    img.onload = () => callback(img);
    img.src = src;
};

 
let imagepath = (frameNumber) => {
return "/images/" + frameNumber + ".png";
};

let loadimages = (callback) => {
    let images = [];
    let imagestoload = 8;

    [1,2,3,4,5,6,7,8].forEach((frameNumber) => {
        let path = imagepath(frameNumber);

        loadimage(path, (image) => {
            images[frameNumber-1]=image;
            imagestoload=imagestoload-1;

            if(imagestoload===0) {
                callback(images);
            }
        });
    });
};

let animate = (context, images, callback) => {
    images.forEach((x, index) => {
        alert(1)
        setTimeout(() => {
            context.clearRect(0, 0, 500, 500);
            context.drawImage(x, 0, 0, 500, 500);
        }, index * 100);
    });
    setTimeout(callback, images.length * 100);
};

loadimages((images) => {
    animate(context, images, () => {
        console.log("Done");
    });
});
