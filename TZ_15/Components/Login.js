class Page {
    constructor() {
        this.data = {
            username: 'Admin',
            password: '12345'
        }
    }


    create() {
        this.element = document.createElement('div');
        this.element.classList.add('page');

        this.container = document.createElement('div')
        this.container.className = ('container')

        this.mainContent = document.createElement('div')
        this.mainContent.className = 'main_content'

        this.header = document.querySelector('header')
        this.footer = document.querySelector('footer')

        this.header.style.display = 'block'
        this.footer.style.display = 'block'
    }

    validate() {
        let form = this.mainContent.querySelector('.form')
        let inputs = form.querySelectorAll('input')
        let fields = form.querySelectorAll('.form_field')

        let generateError = function(text) {
            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = `<img src="../images/Cross.png" alt="cross" /> ${text}`
            return error;
        }

        let signIn = form.querySelector('.signIn')
        signIn.addEventListener('click', event => {
            let inputName = this.element.querySelector('.auth_name')
            let inputPasswword = this.element.querySelector('.auth_password')

            if(inputName.value != this.data.username || inputPasswword.value != this.data.password) {
                event.preventDefault();
            }
            localStorage.setItem(`${this.data.username}`, true)

            let removeValidation = function() {
                let errors = form.querySelectorAll('.error')
                for(let i = 0; i <errors.length; i++) {
                    errors[i].remove()
                }
            }

            let checkFields = function() {
                for(let i = 0; i < inputs.length; i++) {
                    if(!inputs.value) {
                        if(inputs[i].name == 'name' && !inputs[i].value) {
                            inputs[i].style.border = '1px solid red';
                            let error = generateError('Enter name!')
                            fields[i].append(error)
                        }
                        if(inputs[i].name == 'password' && !inputs[i].value) {
                            inputs[i].style.border = '1px solid red';
                            let error = generateError('Enter password!')
                            fields[i].append(error)
                        }
                    }
                }
            }

            removeValidation()
            checkFields()
            
        })
    }

    render() {
        this.create();

        
        this.mainContent.innerHTML = `
            <div class="main__wrapper">

                <div class="business__analytics">
                    <h2 class="business_title">Welcome to Business Analytics Online</h2>
                    <p class="business_definition"><strong>Business Analytics</strong> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</p>

                    <div class="business_resp">
                        <div class="resp-1">
                            <img src="../images/Vector.png" alt="resp-1">
                            <div class="reps_title">
                                <h3>Interactive Reporting</h3>
                                <p>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.</p>
                            </div>
                        </div>
                        <div class="resp-1">
                            <img src="../images/Vector.png" alt="resp-2">
                            <div class="reps_title">
                                <h3>Automated data updates</h3>
                                <p>The application automatically updates and structures the data in just 60 seconds, saving you time and money.</p>
                            </div>
                        </div>
                        <div class="resp-1">
                            <img src="../images/Vector.png" alt="resp-3">
                            <div class="reps_title">
                                <h3>Data Security</h3>
                                <p>The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.</p>
                            </div>
                        </div>
                    </div>
                </div>
        


                <div class="form">
                    <div class="form_wrapper">
                        <div class="form_field">
                            <label class="name">Name</label>
                            <input class="auth_name field" type="text" name="name" />
                        </div>
                        <div class="form_field">   
                            <label class="password">Password</label>
                            <input class="auth_password field" type="text" name="password" />
                        </div>

                        <a class="signIn" href="#Todo">Sign In</a>
                        <a href="#" class="forgot_password">Forgot Password</a>
                    </div>
                    <div class="register_block">
                        <button class="register_now">Register now</button>
                    </div>
                </div>
            </div>
        `;

        let form = this.mainContent.querySelector('.form')

        let signIn = form.querySelector('.signIn')
        signIn.addEventListener('click', this.validate())

        let forgotPassword = this.mainContent.querySelector('.forgot_password')
        forgotPassword.addEventListener('click', event => {
            event.preventDefault()
        })

        this.container.append(this.mainContent.querySelector('.main__wrapper'))
        this.mainContent.append(this.container)
        this.element.append(this.mainContent)

        return this.element;
    }
}

const page = new Page().render();
export default page;