const prompts = require('prompts');
const config = require('../config')
const { createAdminUser } = require('../services/admin.service')
const args = require('minimist')(process.argv.slice(2));

const username_regex = /^(?=.{4,}$)[a-z0-9_]+$/
const password_regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

const usernameFromArgs = args.username;
const passwordFromArgs = args.password;

const questions = [
  {
    type: usernameFromArgs ? null : 'text',
    name: 'username',
    message: 'App Username',
    initial: usernameFromArgs,
    validate: value => {
      value = value.trim();
      if (!value) {
        return 'App username is required';
      } else if (value.length < 4) {
        return 'App username must have at least 4 characters';
      } else if (!username_regex.test(value)) {
        return 'App username can only contain lowercase letters (a-z), numbers (0-9), and underscores (_)';
      }
      return true;
    }
  },
  {
    type: passwordFromArgs ? null : 'password',
    name: 'password',
    message: 'App Password',
    initial: passwordFromArgs,
    validate: value => {
      if (!value) {
        return 'App password is required';
      } else if (value.length < 8) {
        return 'App password must have at least 8 characters';
      } else if (!password_regex.test(value)) {
        return 'App password must contain at least a symbol, upper and lower case letters, and a number';
      }
      return true;
    }
  },
  {
    type: usernameFromArgs && passwordFromArgs ? null : 'confirm',
    name: 'agreed',
    message: 'Confirm to create/update admin user?',
    initial: true
  }
];

const onCancel = prompt => {
  console.log('Bye Bye!');
}

(async () => {
  const response = await prompts(questions, { onCancel });
  if (response.agreed || (usernameFromArgs && passwordFromArgs)) {
    const username = usernameFromArgs || response.username;
    const password = passwordFromArgs || response.password;
    createAdminUser(username, password);
  }
})();