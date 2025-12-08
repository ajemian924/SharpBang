class SignUp {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateOnSubmit();
    }

    validateOnSubmit() {
        let self = this;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            let errors = 0;

            self.fields.forEach(field => {
                const input = document.querySelector(`#${field}`);
                if (!self.validateFields(input)) {
                    errors++;
                }
            });

            if (errors === 0) {
                self.saveUser();
            }
        });
    }

    validateFields(field) {
        if (field.value.trim() === "") {
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText} can't be blank`,
                "error"
            );
            return false;
        }

        if (field.type === "password" && field.value.length < 8) {
            this.setStatus(field, "Password must be at least 8 characters", "error");
            return false;
        }

        this.setStatus(field, null, "success");
        return true;
    }

    saveUser() {
        const username = document.querySelector("#username").value.trim();
        const password = document.querySelector("#password").value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // check if username exists
        const exists = users.find(u => u.username === username);

        if (exists) {
            alert("Username already exists. Choose another.");
            return;
        }

        // save new user
        users.push({
            username: username,
            password: password
        });

        localStorage.setItem("users", JSON.stringify(users));
        
        alert("Account created successfully!");
        window.location.replace("/login.html");
    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error-message");

        if (status === "success") {
            if (errorMessage) errorMessage.innerText = "";
            field.classList.remove("input-error");
        }

        if (status === "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
    }
}

const form = document.querySelector(".signupForm");
if (form) {
    const fields = ["username", "password"];
    const validator = new SignUp(form, fields);
}
