const fs = require("fs");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const photoPhostsUnit = 10;
var first = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/static", express.static("../public"));


function getPhotoPosts() {
	let posts = JSON.parse(fs.readFileSync("./data/posts.json"));

	posts.sort(compareByDate);
	posts = posts.slice(first, first + photoPhostsUnit);
	first += photoPhostsUnit;
	return posts;
}

function compareByDate(a, b) {
        return b.createdAt.getTime() - a.createdAt.getTime();
}
	
function getPhotoPost(idParam) {
	let jsonPosts = fs.readFileSync("./data/posts.json");
	let posts = JSON.parse(jsonPosts, function (key, value) {
		if (key === "createdAt") {
			return new Date(value);
		}
		return value;
	});
	return JSON.stringify(posts.find((post) => idParam === post.id));
}

function validatePhotoPost(photoPost, flag) {
	let posts = JSON.parse(fs.readFileSync("./data/posts.json"));

	if (!photoPost) {
		return false;
	}

	if (typeof (photoPost.description) === "undefined" || typeof (photoPost.description) !== "string" || photoPost.description.length > 200) {
		return false;
	}

	if (typeof (photoPost.photoLink) === "undefined" || typeof (photoPost.photoLink) !== "string" || photoPost.photoLink.length === 0) {
		return false;
	}

	if (!flag) {
		if (typeof (photoPost.id) === "undefined" || posts.findIndex(item => item.id === photoPost.id) !== -1 || typeof (photoPost.id) !== "string") {
			return false;
		}
	}

	if (typeof (photoPost.createdAt) === "undefined" || photoPost.createdAt == "Invalid Date") {
		return false;
	}

	if (typeof (photoPost.author) !== "string" || photoPost.author.length === 0) {
		return false;
	}

	return true;
}

function addPhotoPost(photoPost) {
	let posts = JSON.parse(fs.readFileSync("./data/posts.json"));

	if (!validatePhotoPost(photoPost)) {
		return false;
	}
	posts.push(photoPost);
	posts.sort(compareByDate);
	fs.writeFileSync("./data/posts.json", JSON.stringify(posts));
	return true;
}
	
function editPhotoPost(id, photoPost) {
	var clone = {};
	let posts = JSON.parse(fs.readFileSync("./data/posts.json"));

	var tmp = posts[posts.findIndex(item => item.id === id)];

	for (var key in tmp) {
		clone[key] = tmp[key];
	}

	if (typeof (clone) === "undefined") {
		return false;
	}

	if (photoPost.description && photoPost.description.length < 200) {
		clone.description = photoPost.description;
	}
	if (photoPost.photoLink && typeof photoPost.photoLink === "string") {
		clone.photoLink = photoPost.photoLink;
	}

	let flag = "change";

	if (!validatePhotoPost(clone, flag)) {
		return false;
	}

	posts[posts.findIndex(item => item.id === id)] = clone;
	fs.writeFileSync("./data/posts.json", JSON.stringify(posts));
	return true;
}
	
function removePhotoPost(id) {
	let posts = JSON.parse(fs.readFileSync("./data/posts.json"));
	let remIndex = posts.findIndex(item => item.id === id);
	
	if (remIndex !== -1) {
		posts.splice(remIndex, 1);
		fs.writeFileSync("./data/posts.json", JSON.stringify(posts));
		return true;
	}
	return false;
}

app.get("/getPhotoPost/:id", function (req, res) {
	let post = getPhotoPost(req.params.id);
	if (post !== undefined) {
		res.status(200).send(post);
	}
	else {
		res.send(404, `Photopost ${req.params.id} not found!!!`);
	}
});

app.get("/getPhotoPosts", function (req, res) {
	let answer = getPhotoPosts();
	if (answer !== undefined) {
		res.status(200).send(answer);
	}
	else {
		res.send(404, "Errqor!!!");
	}
});


app.post("/addPhotoPost", function (req, res) {
	if (addPhotoPost(req.body)) {
		res.send(200, "Photopost was added");
	}
	else {
		res.send(404, "Error!");
	}
});

app.put("/editPhotoPost/:id", function (req, res) {
	if (editPhotoPost(req.params.id, req.body)) {
		res.send(200, `Photopost with id = ${req.params.id} was edited`);
	}
	else {
		res.send(404, "Error!");
	}
});

app.delete("/removePhotoPost/:id", function (req, res) {
	if (removePhotoPost(req.params.id)) {
		res.send(200, `Post with id = ${req.params.id} was successfully deleted`);
	}
	else {
		res.send(404, `Post with id = ${req.params.id} was not found`);
	}
});

app.listen(3000, function () {
	console.log("App is listening to port 3000 (Server is running).");
});