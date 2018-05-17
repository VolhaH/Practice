"use strict";

var DOMmodule = (function () {
    let user = "Olga.Giris";

    const posts = document.querySelector('div[class="posts"]');
    const postTemplate = document.getElementById('postTemplate');
    const editButtonsTemplate = document.getElementById('editButtonsTemplate');
    const headerTemplate = document.getElementById('headerTemplate');

    return {
        addPhotoPostToHtml: function (photoPost, show) {
            if (document.getElementById(photoPost.id) != null)
                return;

            let post = document.importNode(postTemplate.content, true);

            post.querySelector('div[class="publication"]').id = photoPost.id;
            post.getElementById('strtext').textContent = photoPost.description;
            post.getElementById('photo').src = photoPost.photoLink;
            post.getElementById('strauthor').textContent = photoPost.author;
            post.getElementById('strhashtags').textContent = photoPost.hashtags;

            let options = {
                day: "numeric", month: "short", year: "numeric",
                hour: "2-digit", minute: "2-digit"
            };

            post.getElementById('strdate').textContent = photoPost.createdAt.toLocaleTimeString("en-us", options);


            let editButtons = post.querySelector('div[id="post"]');
            if (user === photoPost.author)
                editButtons.insertBefore(document.importNode(editButtonsTemplate.content, true), editButtons.lastChild);
            if (photoPost.likes && photoPost.likes.includes(user))
                editButtons.querySelector('input[class="like"]').src = "icons8-heart-outline-24.png";

            if (show)
                posts.insertBefore(post, posts.lastChild);
            else
                posts.insertBefore(post, posts.firstChild);
        },

        showPosts: function () {
            let displayedPosts = module.getPhotoPosts(0, 10);
            displayedPosts.forEach(photoPost => this.addPhotoPostToHtml(photoPost, 1));
        },

        addPhotoPost: function (photoPost) {
            if (module.addPhotoPost(photoPost))
                this.addPhotoPostToHtml(photoPost, 0);
        },

        removePhotoPost: function (id) {
            module.removePhotoPost(id);
            let post = document.getElementById(id);
            if (post != null)
                posts.removeChild(post);
        },

        editPhotoPost: function (id, photoPost) {
            if (!module.editPhotoPost(id, photoPost))
                return;
            let post = document.getElementById(id);
            if (post != null) {
                if (photoPost.description !== undefined)
                    post.querySelector('p[id="strtext"]').textContent = photoPost.description;
                if (photoPost.photoLink !== undefined)
                    post.querySelector('img[id="photo"]').src = photoPost.photoLink;
                if (photoPost.hashtags !== undefined)
                    post.querySelector('img[id="strhashtags"]').textContent = photoPost.hashtags;
            }
        },

        changeHeader: function () {
            if (user !== null) {
                let headerButtons = document.querySelector('header[id="header"]');
                headerButtons.insertBefore(document.importNode(headerTemplate.content, true),
                    headerButtons.querySelector('div[id="exit"]'));
                headerButtons.querySelector("h4").textContent = user;
            }
        },

        addAuthors: function () {
            let authorsList = module.getAuthors();
            let dl = document.createElement('datalist');
            document.querySelector('p[id="list"]').replaceChild(dl, document.querySelector('datalist[id="authors"]'));
            document.querySelector('datalist').id = "authors";
            authorsList.forEach(author => {
                let elem = document.createElement('option');
                elem.value = author;
                (document.querySelector('datalist[id="authors"]')).appendChild(elem);
            })
        }
    }
})();

DOMmodule.changeHeader();
DOMmodule.addAuthors();
DOMmodule.showPosts();