document.addEventListener('DOMContentLoaded', function () {

    document.getElementsByTagName('html')[0].setAttribute('lang','en');

    let metaUTF8 = document.createElement('meta');
    metaUTF8.setAttribute('charset','UTF-8');

    let title = document.createElement('title');
    title.innerHTML = 'JS_8 Layout';

    let div1 = document.createElement('div');
    div1.className = "article_title";
    document.body.appendChild(div1);

    let h1 = document.createElement('h1');
    h1.className = "article_h1";
    h1.innerHTML = 'Choose Your Option';
    div1.appendChild(h1);

    let p1 = document.createElement('p');
    p1.className = "article_p";
    p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing'
    div1.appendChild(p1);



    let div2 = document.createElement('div');
    div2.className = "title_container";
    document.body.appendChild(div2);

    let div3 = document.createElement('div');
    div3.className = "container_first";
    div2.appendChild(div3);

    let div4 = document.createElement('div');
    div4.className = "item_1";
    div4.innerHTML = 'Freelancer'
    div3.appendChild(div4);

    let div5 = document.createElement('div');
    div5.className = "item_2";
    div5.innerHTML = 'Initially designed to'
    div3.appendChild(div5);

    let div6 = document.createElement('div');
    div6.className = "item_3";
    div6.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing'
    div3.appendChild(div6);

    let a1 = document.createElement('a');
    a1.className = "item_4";
    a1.innerHTML = 'Start here'
    div3.appendChild(a1);



    let div7 = document.createElement('div');
    div7.className = "container_second";
    div2.appendChild(div7);

    let div8 = document.createElement('div');
    div8.className = "item_1";
    div8.innerHTML = 'Studio'
    div7.appendChild(div8);

    let div9 = document.createElement('div');
    div9.className = "item_2";
    div9.innerHTML = 'Initially designed to'
    div7.appendChild(div9);

    let div10 = document.createElement('div');
    div10.className = "item_3";
    div10.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing'
    div7.appendChild(div10);

    let a2 = document.createElement('a');
    a2.className = "item_4";
    a2.innerHTML = 'Start here'
    div7.appendChild(a2);


    let style = document.createElement('style');
    style.innerHTML = `
        * {
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Montserrat', sans-serif;
        }
    
        .article_title {
            padding: 50px 0 0 0;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .article_h1 {
            font-size: 36px;
            margin-bottom: 15px;
            display: inline-block;
        }

        .article_p {
            color: #9FA3A7;
            font-size: 14px;
            display: inline-block;
        }

        .title_container {
            display: flex;
            width: 800px;
            border: 1px solid #ededed;
            margin-top: 20px;
            margin-bottom: 30px;
            font-family: 'Open Sans', sans-serif;
            margin: 40px auto;
        }

        .title_container .container_first {
            padding: 90px 100px;
            text-align: center;
        }

        .title_container .container_first .item_1,
        .title_container .container_second .item_1 {
            color: #9FA3A7;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2.4px;
            text-transform: uppercase;
        }
        
        .title_container .container_first .item_2,
        .title_container .container_second .item_2 {
            font-size: 36px;
            margin: 20px 0;
            font-family: 'Merriweather', serif;
        }
        
        .title_container .container_first .item_3,
        .title_container .container_second .item_3 {
            color: #9FA3A7;
            font-size: 12px;
            text-align: center;
        }
        
        .title_container .container_first .item_4,
        .title_container .container_second .item_4 {
            color: #000;
            display: inline-block;
            text-decoration: none;
            border: 2px solid gold;
            border-radius: 40px;
            padding: 10px 20px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2.4px;
            margin-top: 100px;
            background-color: #fff;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
            transition: .8s cubic-bezier(.165, .84, .44, 1);
        }

                
        .title_container .container_second {
            padding: 90px 100px;
            text-align: center;
        }

        .title_container .container_first:hover,
        .title_container .container_second:hover {
            background-color: #8F75BE;
            transition: .8s cubic-bezier(.165, .84, .44, 1);
        }
        
        .title_container .container_first:hover .item_1,
        .title_container .container_second:hover .item_1 {
            color: gold;
        }
        
        .title_container .container_first:hover .item_2,
        .title_container .container_first:hover .item_3,
        .title_container .container_second:hover .item_2,
        .title_container .container_second:hover .item_3 {
            color: #fff;
        }
        
        .title_container .container_first:hover .item_4,
        .title_container .container_second:hover .item_4 {
            background-color: #8F75BE;
            color: #fff;
        }
              
    }   
    `;

    document.head.insertBefore(metaUTF8 , document.querySelector('script'));
    document.head.insertBefore(title, document.querySelector('script'));
    document.head.insertBefore(style, document.querySelector('script'));
});



