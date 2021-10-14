var canvas = new fabric.Canvas('myCanvas');

BIW = 30;
BIH = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        BIO = Img;

        BIO.scaleToWidth(BIW);
        BIO.scaleToHeight(BIH);
        BIO.set({
            top: player_y,
            left: player_x
        });
        canvas.add(BIO);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift are pressed together")
        BIW = BIW + 10
        BIH = BIH + 10

        document.getElementById("current-width").innerHTML = BIW
        document.getElementById("current-height").innerHTML = BIH
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift are pressed together")
        BIW = BIW - 10
        BIH = BIH - 10

        document.getElementById("current-width").innerHTML = BIW
        document.getElementById("current-height").innerHTML = BIH
    }

    if (keyPressed == '37') {
        console.log("left")
        left();
    }
    if (keyPressed == '38') {
        console.log("up")
        up();
    }
    if (keyPressed == '39') {
        console.log("right")
        right();
    }

    if (keyPressed == '40') {
        console.log("down")
        down();
    }

    if (keyPressed == '67') {
        console.log("c is pressed")
        new_image("cloud.jpg")
    }

    if (keyPressed == '68') {
        console.log("d is pressed")
        new_image("dark_green.png")
    }

    if (keyPressed == '71') {
        console.log("g is pressed")
        new_image("ground.png")
    }

    if (keyPressed == '76') {
        console.log("l is pressed")
        new_image("light_green.png")
    }

    if (keyPressed == '66') {
        console.log("b is pressed")
        new_image("player.png")
    }

    if (keyPressed == '82') {
        console.log("r is pressed")
        new_image("roof.jpg")
    }

    if (keyPressed == '84') {
        console.log("t is pressed")
        new_image("trunk.jpg")
    }

    if (keyPressed == '85') {
        console.log("u is pressed")
        new_image("unique.png")
    }

    if (keyPressed == '87') {
        console.log("w is pressed")
        new_image("wall.jpg")
    }

    if (keyPressed == '89') {
        console.log("y is pressed")
        new_image("yellow_wall.png")
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - 10;
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 600) {
        player_y = player_y + 10;
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - 10;
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 1000) {
        player_x = player_x + 10;
        canvas.remove(player_object);
        player_update();
    }
}