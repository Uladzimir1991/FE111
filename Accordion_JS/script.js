const Accord = function() {

    // this.array = [];

    this.init = function () {

        const div = document.createElement('div')
        div.className = 'container'

        const div2 = document.createElement('div')
        div2.className = 'wrapper'

        this.ul = document.createElement('ul')
        this.ul.className = 'list'

        this.li1 = document.createElement('li')
        this.li1.className = 'list__item1'

        this.li2 = document.createElement('li')
        this.li2.className = 'list__item2'

        this.li3 = document.createElement('li')
        this.li3.className = 'list__item3'

        this.li4 = document.createElement('li')
        this.li4.className = 'list__item4'

        this.span1 = document.createElement('span')
        this.span1.className = 'arrow__down1'

        this.span2 = document.createElement('span')
        this.span2.className = 'arrow__right2'

        this.span3 = document.createElement('span')
        this.span3.className = 'arrow__right3'

        this.span4 = document.createElement('span')
        this.span4.className = 'arrow__right4'

        this.section1 = document.createElement('h3')
        this.section1.className = 'item__section1'

        this.section2 = document.createElement('h3')
        this.section2.className = 'item__section2'

        this.section3 = document.createElement('h3')
        this.section3.className = 'item__section3'

        this.section4 = document.createElement('h3')
        this.section4.className = 'item__section4'

        this.p1 = document.createElement('p')
        this.p1.className = 'visibility'

        this.p2 = document.createElement('p')
        this.p2.className = 'item__text'

        this.p3 = document.createElement('p')
        this.p3.className = 'item__text'

        this.p4 = document.createElement('p')
        this.p4.className = 'item__text'

        div.appendChild(div2)
        div2.append(this.ul) 
        this.ul.append(this.li1, this.li2, this.li3, this.li4)
        this.li1.append(this.section1, this.p1)
        this.li2.append(this.section2, this.p2)
        this.li3.append(this.section3, this.p3)
        this.li4.append(this.section4, this.p4)
        this.li1.prepend(this.span1)
        this.li2.prepend(this.span2)
        this.li3.prepend(this.span3)
        this.li4.prepend(this.span4)

        document.body.appendChild(div)

        this.add()
    }

    this.add = _ => {
        
        this.section1.innerHTML = 'Section 1'

        this.p1.innerHTML = 'Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.'

        this.section2.innerHTML = 'Section 2'

        this.p2.innerHTML = 'Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.'

        this.section3.innerHTML = 'Section 3'

        this.p3.innerHTML = 'Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.'

        this.section4.innerHTML = 'Section 4'

        this.p4.innerHTML = 'Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.'

        this.out();
    }

    this.out = function() {
        
        this.section1.addEventListener('click', _ => {
            this.span1.className = 'arrow__down1'
            this.span2.className = 'arrow__right2'
            this.span3.className = 'arrow__right3'
            this.span4.className = 'arrow__right4'
            this.section1.className = 'item__section1'
            this.section2.className = 'item__section2'
            this.section3.className = 'item__section3'
            this.section4.className = 'item__section4'
            this.p1.className = 'visibility'
            this.p2.className = 'item__text';
            this.p3.className = 'item__text'
            this.p4.className = 'item__text'
        })

        this.section2.addEventListener('click', _ => {
            this.span2.className = 'arrow__down2'
            this.span1.className = 'arrow__right1'
            this.span3.className = 'arrow__right3'
            this.span4.className = 'arrow__right4'
            this.section1.className = 'h3'
            this.section2.className = 'theme'
            this.section3.className = 'item__section3'
            this.section4.className = 'item__section4'
            this.p1.className = 'item__text';
            this.p2.className = 'display';
            this.p3.className = 'item__text'
            this.p4.className = 'item__text'
        })

        this.section3.addEventListener('click', _ => {
            this.span3.className = 'arrow__down3'
            this.span1.className = 'arrow__right1'
            this.span2.className = 'arrow__right2'
            this.span4.className = 'arrow__right4'
            this.section1.className = 'h3'
            this.section2.className = 'item__section2'
            this.section3.className = 'theme'
            this.section4.className = 'item__section4'
            this.p1.className = 'item__text';
            this.p2.className = 'item__text';
            this.p3.className = 'display'
            this.p4.className = 'item__text'
        })

        this.section4.addEventListener('click', _ => {
            this.span4.className = 'arrow__down4'
            this.span1.className = 'arrow__right1'
            this.span2.className = 'arrow__right2'
            this.span3.className = 'arrow__right3'
            this.section1.className = 'h3'
            this.section2.className = 'item__section2'
            this.section3.className = 'item__section3'
            this.section4.className = 'theme'
            this.p1.className = 'item__text';
            this.p2className = 'item__text';
            this.p3.className = 'item__text'
            this.p4.className = 'display'
        })
        
    }

    this.init();

}

const accord = new Accord();