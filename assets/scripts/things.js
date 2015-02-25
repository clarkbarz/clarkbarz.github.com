$(function() {
    var things = [
        {
            "link": "https://en.wikipedia.org/wiki/Richmond,_Virginia",
            "image": "/assets/images/richmond.jpg",
            "overlay": "As my hometown, Richmond, VA will always hold a prominent place in my heart as a city filled with art, culture, and history. Growing up here was joy and moving back was one of the best decisions I ever made."
        },
        {
            "link": "https://www.python.org/",
            "image": "/assets/images/python.png",
            "overlay": "As my first programming language, Python will always have a special place in my heart. From writing simple scripts for my college classes to building out full-featured web applications at my first job with Django to helping maintain a number of Python open-source libraries, Python signifies that there's no end to what I can learn and how much I can accomplish."
        },
        {
            "link": "https://en.wikipedia.org/wiki/Tron:_Legacy_%28soundtrack%29",
            "image": "/assets/images/tron.jpg",
            "overlay": "The musical legend of Daft Punk grew three sizes the day that this soundtrack was released. It combines my love for electronic music and film scores in a way that I didn't think was possible until I listened to it for the very first time. I haven't stopped listening since."
        },
        {
            "link": "https://en.wikipedia.org/wiki/Skiing",
            "image": "/assets/images/skiing.jpg",
            "overlay": "I can't say that I've learned many lessons from skiing throughout my life, but I've still loved every minute that I've spent barrelling down slopes and through tree runs. Living in Colorado for a full two seasons was more fun than I could've imagined."
        },
        {
            "link": "https://www.djangoproject.com/",
            "image": "/assets/images/django.png",
            "overlay": "Django represents the broader scope of web development in my life and has consistently made it easy for me to contruct beautiful, functional web apps as a hobby and a occupation."
        },
        {
            "link": "https://en.wikipedia.org/wiki/Hook_%28film%29",
            "image": "/assets/images/hook.jpg",
            "overlay": "Released the year that I was born, Hook's message to me has always stressed the importance of imagination, adventure, and remembering your childhood. That's not to mention stellar performances by Robin Williams and Dustin Hoffman."
        },
        {
            "link": "https://en.wikipedia.org/wiki/Lake_Winnipesaukee",
            "image": "/assets/images/lake.jpg",
            "overlay": "There are few things in this world that I love more than Lake Winnipesaukee, NH. It has been a vacation destination in my family for six generations and to me, represents the ultimate source of personal relaxation. The lake is my constant reminder that occasional breaks from the stresses of life can do wonders for the mind and spirit."
        },
        {
            "link": "http://opensource.org/",
            "image": "/assets/images/open-source.png",
            "overlay": "As the driving force behind modern web frameworks and technology, open source software has been and will continue to be an extremely important part of the tech industry. Unrestricted collaboration sparks innovation, distributes experience, and ultimately results in comprehensive solutions to complex problems."
        },
    ];

    for (var index in things) {
        var thingHTML = "<div class='thing-tile'><a href='" + things[index].link + "'><img src='" +
            things[index].image + "' class='column-img img-responsive img-thumbnail' />" +
            "<div class='img-overlay'><strong>" + things[index].overlay + "</strong></div></a></div>";
        var column = $("#column" + (index % 3));
        column.append(thingHTML);
    }

    $(".thing-tile").mouseover(function() {
        $(this).find(".column-img").attr('style', 'opacity: 0.2;');
        $(this).find(".img-overlay").attr('style', 'opacity: 1;');
    });

    $(".thing-tile").mouseout(function() {
        $(this).find(".column-img").attr('style', 'opacity: 1;');
        $(this).find(".img-overlay").attr('style', 'opacity: 0;');
    });
});
