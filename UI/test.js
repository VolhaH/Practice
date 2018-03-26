console.log("all photoposts:");
console.log(module.getPhotoPosts(0, 20));

console.log("first 10 photoposts:");
console.log(module.getPhotoPosts(0, 10));

console.log("next 10 photoposts:");
console.log(module.getPhotoPosts(10, 10));

console.log("Filter(author): elissa_bellydance");
let filterConfig = {
    author: 'elissa_bellydance'
};
console.log(module.getPhotoPosts(0, 10, filterConfig));

console.log("Filter(hashtag): happybirthday");
filterConfig = {
    hashtags: ['happybirthday']
};
console.log(module.getPhotoPosts(0, 10, filterConfig));

console.log("Filter(hashtags): happybirthday & сднемрождения");
filterConfig = {
    hashtags: ['happybirthday', 'сднемрождения']
};
console.log(module.getPhotoPosts(0, 10, filterConfig));

console.log("Filter(date period): from 30.11.2012 to 18.03.2018");
filterConfig = {
    toDate: new Date('2018-03-18T23:59:59'),
    fromDate: new Date('2012-11-30T00:00:00')
};
console.log(module.getPhotoPosts(0, 10, filterConfig));

console.log("Filter(date period, author): from 30.11.2012 to 18.03.2018, beeprinsloolevine");
filterConfig = {
    toDate: new Date('2018-03-18T23:59:59'),
    fromDate: new Date('2012-11-30T00:00:00'),
    author: 'beeprinsloolevine'
};
console.log(module.getPhotoPosts(0, 10, filterConfig));

console.log("INCORRECT Filter(date period, author, hashtag): from 30.11.2012 to 18.03.2018, beeprinsloolevine, adamlevine");
filterConfig = {
    toDate: new Date('2018-03-18T23:59:59'),
    fromDate: new Date('2012-11-30T00:00:00'),
    author: 'beeprinsloolevine',
    hashtags: ['adamlevine']
};
console.log(module.getPhotoPosts(0, 10, filterConfig));

console.log("get 13th photopost:");
console.log(module.getPhotoPost(13));

console.log("INCORRECT get 21st photopost:");
console.log(module.getPhotoPost(21));

console.log("validation");
let photoPost = {
    id: '21',
    description: 'Happy birthday, Adam Levine!',
    createdAt: new Date('2018-03-18T00:00:00'),
    author: 'maroon5',
    photoLink: 'http://mfm.ua/wp-content/uploads/2017/02/Levine-1.jpg'
};
console.log(module.validatePhotoPost(photoPost));

console.log("INCORRECT validation (photoLink)");
photoPost = {
    id: '21',
    description: 'Happy birthday, Adam Levine!',
    createdAt: new Date('2018-03-18T00:00:00'),
    author: 'maroon5',
    photoLink: 5
};
console.log(module.validatePhotoPost(photoPost));

console.log("INCORRECT validation (likes)");
photoPost = {
    id: '21',
    description: 'Happy birthday, Adam Levine!',
    createdAt: new Date('2018-03-18T00:00:00'),
    author: 'maroon5',
    likes: [5],
    photoLink: 'http://mfm.ua/wp-content/uploads/2017/02/Levine-1.jpg'
};
console.log(module.validatePhotoPost(photoPost));

console.log("INCORRECT validation (hashtags)");
photoPost = {
    id: '21',
    description: 'Happy birthday, Adam Levine!',
    createdAt: new Date('2018-03-18T00:00:00'),
    author: 'maroon5',
    hashtags: [5],
    likes: ['beeprinsloolevine', 'adamlevine', 'maroon5'],
    photoLink: 'http://mfm.ua/wp-content/uploads/2017/02/Levine-1.jpg'
};
console.log(module.validatePhotoPost(photoPost));

console.log("INCORRECT validation (description's length)");
photoPost = {
    id: '21',
    description: 'Happy birthday, Adam Levine! Happy birthday, Adam Levine! Happy birthday, Adam Levine! Happy birthday, Adam Levine! Happy birthday, Adam Levine! Happy birthday, Adam Levine! Happy birthday, Adam Levine',
    createdAt: new Date('2018-03-18T00:00:00'),
    author: 'maroon5',
    hashtags: ['happybirthday', 'adamlevine', 'maroon5'],
    likes: ['beeprinsloolevine', 'adamlevine', 'maroon5'],
    photoLink: 'http://mfm.ua/wp-content/uploads/2017/02/Levine-1.jpg'
};
console.log(module.validatePhotoPost(photoPost));

console.log("INCORRECT validation (id)");
photoPost = {
    id: '5',
    description: 'Happy birthday, Adam Levine!',
    createdAt: new Date('2018-03-18T00:00:00'),
    author: 'maroon5',
    hashtags: ['happybirthday', 'adamlevine', 'maroon5'],
    likes: ['beeprinsloolevine', 'adamlevine', 'maroon5'],
    photoLink: 'http://mfm.ua/wp-content/uploads/2017/02/Levine-1.jpg'
};
console.log(module.validatePhotoPost(photoPost));

console.log("add photopost");
photoPost = {
    id: '21',
    description: 'Recently I had the incredible opportunity to explore three destinations I have always dreamed of exploring as part of an exciting new extension of Contiki called Contiki Chronicles.',
    createdAt: new Date('2013-09-22T05:04:03'),
    author: 'authorundefined',
    hashtags: ['istanbuldiary', 'ISTANBUL'],
    photoLink: 'http://garypeppergirl.com/wp-content/uploads/2013/09/nicole-warne-istanbul-31.jpg'
};
console.log(module.validatePhotoPost(photoPost));

console.log("change description and photolink of the 18th photopost:");
console.log("before: ");
console.log(module.getPhotoPost(18));
const permittedChanges = {
    description: 'This is the perfect way to spend your first afternoon in Iceland as you ease yourself into the sights and heritage here.',
    photoLink: 'http://garypeppergirl.com/wp-content/uploads/2012/12/garypepper_iceland641-950x633.jpg'
};
console.log("after:");
console.log(module.editPhotoPost(18, permittedChanges));
console.log(module.getPhotoPost(18));

console.log("INCORRECT change id of the 3rd photo");
console.log("before:");
console.log(module.getPhotoPost(3));
const prohibitedChanges = {
    id: 303
};
console.log("after:");
console.log(module.editPhotoPost(3, prohibitedChanges));
console.log(module.getPhotoPost(3));

console.log("remove photopost with id 6:");
console.log("before (getPhotoPost(6) is working):");
console.log(module.getPhotoPost(6));
console.log("removing the post:");
console.log(module.removePhotoPost(8));
console.log("after (getPhotoPost(6) is not working):");
console.log(module.getPhotoPost(8));

console.log("INCORRECT remove photopost with id 667: ");
console.log(module.removePhotoPost(667));
console.log("I hope I'm done with it.");



