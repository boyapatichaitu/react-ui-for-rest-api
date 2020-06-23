export const loginLabels = {
    header: "Login",
    subText: {
        label: "Don't have an account?",
        href: {
            url: '/sign-up',
            label: 'Sign Up'
        }
    },
    fbText: "Login via facebook",
    passwordReminder: "(Hey, you forgot to enter the password)",
    submit: "Login to our community",
    disclaimerText: "logging in",
};

export const signupLabels = {
    header: "Sign-up",
    subText: {
        label: "Already have an account?",
        href: {
            url: '/login',
            label: 'Login'
        }
    },
    name: {
        first:{
            type: 'text',
            id: 'firstName',
            label: 'First Name',
            placeHolder: 'Enter first name'
        },
        last: {
            type: 'text',
            id: 'lastName',
            label: 'Last Name',
            placeHolder: 'Enter last name'
        }
    },
    fbText: "Join via facebook",
    passwordReminder: "(Hey, you forgot to create the password)",
    submit: "Join our community",
    disclaimerText: "signing up",
};

export const commonFields = [
    {
        type: "email",
        label: "Email address",
        placeHolder: "Enter email"
    },
    {
        type: "password",
        label: "Password",
        placeHolder: "Enter password"
    }
];