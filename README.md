## Use Netlify Serverless functions in React App.

## Site Deployed --> 🔗

<img src='./src/images/homepage.png' />

## Steps

- Signup on <a href='https://www.netlify.com/'>Netlify</a>
- npm i -g yarn
- npm i netlify-cli
- npx create-react-app app_name
- cd app_name
- create file (netlify.toml) on root
- add commands inside (as written in netlify.toml in my repo)
- Create functions
- - Open terminal
- - create template (run command "netlify functions:create functionName")
- - pick a template (hello-world in my case)
- - Go to /functions/functionName and make changes
- Use the Function (API)
- - Go to your component (App.js in my case)
- - fetch('/.netlify/functions/functionName?param=This is value passed')
- - Get it using promises
- - Save it in a variable and use it in the app
- Run command ("netlify dev") to see app output
- commit and push app to github
- go to netlify
- click "new site from git"
- authorize
- select your repository
- click "deploy site"
- Open Website Url, and woohoo !! Your website is deployed
- Now if you make some change in your code
- - just make a change
- - commit it
- - push it and that will reflect in your hosted app automatically !!
