"use strict";
const module = (function() {
    const photoPosts = [
        {
            id: '1',
            description: 'Поздравляем с днём рождения звёздочку школы, Мороз Дашу!',
            createdAt: new Date('2018-03-20T11:00:00'),
            author: 'elissa_bellydance',
            hashtags: ['happybirthday', 'сднемрождения'],
            likes: ['sports.by', 'd_moroz', 'm_dudinskaya'],
            photoLink: 'http://elissadance.by/Content/img/Photos/photo-17-08-25-15-18-34-727-6920d85f-a344-4e51-92b1-c3b8f4f5fb5c-784706.jpg'
        },
        {
            id: '2',
            description: 'Поздравляем с днём рождения тренера школы, профессиональную исполнительницу восточного танца, Марину Дудинскую!',
            createdAt: new Date('2018-03-20T10:00:00'),
            author: 'elissa_bellydance',
            hashtags: ['happybirthday', 'сднемрождения'],
            likes: ['sports.by', 'd_moroz', 'm_dudinskaya'],
            photoLink: 'http://elissadance.by/Content/img/Photos/photo-17-08-25-15-09-36-743-efbcdcd0-08ba-4370-8c1c-98b7445e1a5b-3280555.jpg'
        },
        {
            id: '3',
            description: 'Белорусские паралимпийцы заняли 8 место в общем медальном зачёте.',
            createdAt: new Date('2018-03-18T18:02:05'),
            author: 'sports.by',
            hashtags: ['winners', 'win', 'paralympicgames'],
            likes: ['sports.by', 'aboutsport', 'paralympicgames'],
            photoLink: 'https://nn.by/img/w720d4/photos/z_2018_03/budilovich-golub-2018-444-df03e.jpg'
        },
        {
            id: '4',
            description: 'Happy birthday to my and partner in crime and father of our beautiful daughters. Love you XOXO',
            createdAt: new Date('2018-03-18T01:03:00'),
            author: 'beeprinsloolevine',
            hashtags: [],
            likes: ['adamlevine', 'maroon5'],
            photoLink: 'https://media.brides.com/photos/580e6817489b38a131c0b9a1/1:1/w_767/blogs-aisle-say-behati-prinsloo-adam-levine.jpg'
        },
        {
            id: '5',
            description: 'Happy birthday, Adam Levine!',
            createdAt: new Date('2018-03-18T00:00:00'),
            author: 'maroon5',
            hashtags: ['happybirthday', 'adamlevine', 'maroon5'],
            likes: ['beeprinsloolevine', 'adamlevine', 'maroon5'],
            photoLink: 'http://mfm.ua/wp-content/uploads/2017/02/Levine-1.jpg'
        },
        {
            id: '6',
            description: 'We\'ve all got both light and dark inside us. What matters is the part we choose to act on. That\'s who we really are.',
            createdAt: new Date('2018-02-26T11:42:43'),
            author: 'Olga.Giris',
            hashtags: ['harrypotter', 'potterhead'],
            likes: [],
            photoLink: 'http://region13.info/images/7956/harry-potter-quotes-for-19-years-later.jpg'
        },
        {
            id: '7',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'sports.by',
            hashtags: ['win', 'winner', 'olymoicgames'],
            likes: ['sports.by', 'Olga.Giris', 'elissa_bellydance'],
            photoLink: 'https://img.championat.com/news/big/a/w/vy-uhu-eli-lukashenko-menja-slushaet-eto-i-moja-pobeda-tozhe_15193136781183477106.jpg'
        },
        {
            id: '8',
            description: 'New apocalypse',
            createdAt: new Date('2017-12-27T20:25:25'),
            author: 'exiiisted',
            hashtags: ['makeup', 'makeupart', 'fire'],
            likes: ['Olga.Giris', 'd_moroz'],
            photoLink: 'https://sun1-15.userapi.com/c840736/v840736432/6ac62/40Klv5-L0I0.jpg'
        },
        {
            id: '9',
            description: 'It was raining the day we went which didn’t damper our spirits, it just made the island feel more mystic and alluring with low hanging clouds and a slight mist covering its hills.',
            createdAt: new Date('2017-05-29T08:07:08'),
            author: 'garypeppergirl',
            hashtags: ['NEWZEALAND'],
            likes: ['thatgirlakulina', 's_baker', 'nepravskayak_'],
            photoLink: 'http://garypeppergirl.com/wp-content/uploads/2017/04/Luke_Shadbolt-New_Zealand-07-950x634.jpg'
        },
        {
            id: '10',
            description: 'Take your broken heart, make it into art',
            createdAt: new Date('2017-01-10T10:09:48'),
            author: 'garypeppergirl',
            hashtags: ['SANTORINI'],
            likes: ['thatgirlakulina', 's_baker', 'nepravskayak_'],
            photoLink: 'http://garypeppergirl.com/wp-content/uploads/2016/12/Nicole_Warne-Gary_Pepper_Girl-Santorini-03-950x634.jpg'
        },
        {
            id: '11',
            description: 'Looking back, as much as I love the final edits, I truly love our film shots because I feel it captured the easy going, candid and fun moments we shared on set.',
            createdAt: new Date('2016-05-26T20:05:06'),
            author: 'thatgirlakulina',
            hashtags: ['SYDNEY'],
            likes: ['s_baker', 'nepravskayak_'],
            photoLink: 'http://garypeppergirl.com/wp-content/uploads/2016/05/Dolce-Gabbana-Nicole-Warne-BTS-9-009-950x764.jpg'
        },
        {
            id: '12',
            description: 'I found beauty hiding around every single corner and lived for those magical moments hiking along the Napali Coast or flying above it by helicopter.',
            createdAt: new Date('2015-06-25T09:00:00'),
            author: 's_baker',
            hashtags: ['KAUAI'],
            likes: ['marta1', 'nepravskayak_'],
            photoLink: 'http://garypeppergirl.com/wp-content/uploads/2015/06/Kauai-luke_shadbolt-travel-nicole_warne-1-950x634.jpg'
        },
        {
            id: '13',
            description: 'Один из лучших дней в моей жизни.',
            createdAt: new Date('2015-04-26T18:19:00'),
            author: 'nepravskayak_',
            hashtags: ['TOKYO'],
            likes: ['Olga.Giris', 'exiiisted', 'elissa_bellydance'],
            photoLink: 'http://garypeppergirl.com/wp-content/uploads/2015/04/nicole_warne-luke_shadbolt-engagement-1-950x634.jpg'
        },
        {
            id: '14',
            description: '\'You are never too young, too old, too poor, too uneducated or too busy to start living your dreams. A dream is a dream; it should not be contained by boundaries and cannot be defined by others\'.',
            createdAt: new Date('2014-10-22T18:19:38'),
            author: 'nepravskayak_',
            hashtags: ['NORWAY'],
            likes: ['Olga.Giris', 'exiiisted', 'elissa_bellydance'],
            photoLink: 'http://garypeppergirl.com/wp-content/uploads/2014/10/trolltunga-950x633.jpg'
        },
        {
            id: '15',
            description: 'It’s the simplest forms of beauty that really resonate with me, and in this case it was something as simple as a pocketful of shadows.',
            createdAt: new Date('2014-05-10T15:05:01'),
            author: 'marta1',
            hashtags: ['ZURICH'],
            likes: ['t27melton', 'thatgirlakulina'],
            photoLink: 'http://garypeppergirl.com/wp-content/uploads/2014/05/calvin-klein-bw-61.jpg'
        },
        {
            id: '16',
            description: 'We flew into Zurich for just a few days with Calvin Klein to make a special announcement during Baselworld.',
            createdAt: new Date('2014-05-09T19:05:11'),
            author: 't27melton',
            hashtags: ['ZURICH'],
            likes: ['marta1', 'thatgirlakulina'],
            photoLink: 'http://garypeppergirl.com/wp-content/uploads/2014/05/postcards-from-switzerland-gary-pepper-9.jpg'
        },
        {
            id: '17',
            description: 'A two piece suit has to be one of my favorite wardrobe staples.',
            createdAt: new Date('2013-09-28T18:18:18'),
            author: 'thatgirlakulina',
            hashtags: ['LONDON'],
            likes: ['marta1', 't27melton', 's_baker'],
            photoLink: 'http://garypeppergirl.com/wp-content/uploads/2013/09/NF8C01702.jpg'
        },
        {
            id: '18',
            description: 'A world in its own that people often overlook but once you see its natural beauty you’ll wonder why you didn’t come here sooner.',
            createdAt: new Date('2012-12-11T23:00:00'),
            author: 'marta1',
            hashtags: ['ICELAND'],
            likes: ['t27melton', 's_baker', 'thatgirlakulina'],
            photoLink: 'http://garypeppergirl.com/wp-content/uploads/2012/12/garypepper_iceland321-950x633.jpg'
        },
        {
            id: '19',
            description: 'Iceland is such a surreal place and every landscape we saw left me feeling incredibly inspired.',
            createdAt: new Date('2012-12-05T00:00:00'),
            author: 't27melton',
            hashtags: ['ICELAND'],
            likes: ['marta1', 's_baker', 'thatgirlakulina'],
            photoLink: 'http://garypeppergirl.com/wp-content/uploads/2012/12/garypepper_iceland7121-950x633.jpg'
        },
        {
            id: '20',
            description: 'There really is too much to see in Iceland and despite its temperature I absolutely fell in love with its surreal landscape and natural wonders.',
            createdAt: new Date('2012-11-30T10:20:10'),
            author: 's_baker',
            hashtags: ['ICELAND'],
            likes: ['t27melton', 's_baker', 'thatgirlakulina'],
            photoLink: 'http://garypeppergirl.com/wp-content/uploads/2012/11/garypepper_iceland31-950x633.jpg'
        }
    ];
    
    function getPhotoPosts(skip = 0, top = 10, filterConfig) {
        const array = [];
        photoPosts.sort(compareByDate);
        // 1. Забиваю в массив, только если ни один фильтр не установлен.
        if (!filterConfig) {
            for (let i = skip; i < top + skip; i++)
                array.push(photoPosts[i]);
            return array;
        }
        // 1. Проверка сразу по всем фильтрам.
        else {
            for (let i = 0; i < photoPosts.length; i++) {
                if (((filterConfig.author && photoPosts[i].author === filterConfig.author) || !filterConfig.author) &&
                    ((filterConfig.fromDate && filterConfig.toDate && datesEqual(photoPosts[i], filterConfig)) || !filterConfig.fromDate || !filterConfig.toDate) &&
                    ((filterConfig.hashtags && isContainHashTag(photoPosts[i], filterConfig)) || !filterConfig.hashtags))
                    array.push(photoPosts[i]);
            }
            return array.slice(skip, skip + top);
        }
    }
    
    function getPhotoPost(idParam) {
        for(let i = 0; i < photoPosts.length; i++){
            // 3. Убрала localeCompare
            if (photoPosts[i].id==idParam)
                return photoPosts[i];
        }
        return false;
    }

    function validatePhotoPost(photoPost) {
        for(let i = 0; i < photoPosts.length; i++) {
            // 3. Убрала localeCompare
            if (photoPosts[i].id==photoPost.id)
                return false;
        }
        if (!photoPost.description || !isString(photoPost.description) || photoPost.description.length > 200)
            return false;
        if (!photoPost.createdAt || !(photoPost.createdAt instanceof Date))
            return false;
        if (!photoPost.author || !isString(photoPost.author))
            return false;
        if (photoPost.hashtags && !photoPost.hashtags.some(isString))
            return false;
        if (photoPost.likes && !photoPost.likes.some(isString))
            return false;
        if (!photoPost.photoLink || !isString(photoPost.photoLink))
            return false;
        return true;
    }

    function addPhotoPost(photoPost) {
        if (!validatePhotoPost(photoPost))
            return false;
        photoPosts.push(photoPost);
        return true;
    }

    function editPhotoPost(id, photoPost) {
        if (isIdExist(id) && !photoPost.id && !photoPost.createdAt && !photoPost.author) {
            // 4. Объединила if-условия
            if (photoPost.description && photoPost.description.length < 200)
                getPhotoPost(id).description = photoPost.description;
            if (photoPost.photoLink && isString(photoPost.photoLink))
                getPhotoPost(id).photoLink = photoPost.photoLink;
            if (photoPost.hashTags && isString(photoPost.hashtags))
                getPhotoPost(id).hashtags = photoPost.hashtags;
            return true;
        }
        return false;
    }

    function removePhotoPost(id) {
        if (isIdExist(id)) {
            const remIndex =  photoPosts.indexOf(getPhotoPost(id));
            photoPosts.splice(remIndex, 1);
            return true;
        }
        return false;
    }

    function isString(s) {
        // 5. Убрала return-ы
        typeof s === "string"
    }

    function isIdExist(id){
        for(let i = 0; i < photoPosts.length; i++) {
            // 3. Убрала localeCompare
            if(photoPosts[i].id==id)
                return true;
        }
        return false;
    }

    function compareByDate(a, b) {
        return b.createdAt.getTime() - a.createdAt.getTime();
    }

    function isContainHashTag(obj1, obj2) {
        let counter = 0;
        // 6. Убрала метку continue
        for(let i = 0; i < obj1.hashtags.length; i++) {
            for (let j = 0; j < obj2.hashtags.length; j++) {
                if (obj1.hashtags[i] === obj2.hashtags[j])
                    counter++;
            }
        }
        if (counter === obj2.hashtags.length)
            return true;
        return false;
    }

    function datesEqual(obj1, obj2) {
        if (((obj1.createdAt.getTime() - obj2.fromDate.getTime()) >= 0) &&
            ((obj2.toDate.getTime() - obj1.createdAt.getTime()) >= 0))
            return true;
        return false;
    }

    return {
        getPhotoPosts,
        getPhotoPost,
        validatePhotoPost,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost
    }
}) ();
