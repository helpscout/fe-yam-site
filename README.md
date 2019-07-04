# Hello, Help Scout! 

Thank you for considering me for the Front End Engineer position at Help Scout! I had a blast building this project. 

To get up and running,  please `bundle install` in a terminal window and 

``` 
rake start 
```

This should pull the data from the contentful API and build the jekyll site.

### The changes I made 
- Integrated the contentful api 
- Created posts and a layout (post_contentful.html) for displaying blog posts from contentful
- Coded and styled the webinar page using Bootstrap
- Implemented a modal window using Bootstrap
- Wrote a small jQuery script to dynamically pull webinar info into the modal window 
- Wrote a rakefile to pull API data and start the project with one command

### I came very close to finishing, but did not complete the following: 
- Styling the modal form, including:
  * Finish styling the modal header, use image/background from mock
  * Fine tune the look/size of modal headers
  * Finish styling the select menu
  * Getting the form ready to integrate, such as passing correct webinar data to form 
  * Form accessibility, such as form focus
- Small styling details
  * Implement main page background image
  * Main image might be a little too big on mobile -- I would have consulted the designer about this

### If I had more time I would have: 
- Investigated a way to generate blog posts. Right now you must manually create a markdown file and enter the blog id as a front matter variable. 
- Set up environmental variables so we aren't pushing the contentful API access token onto github
- Measured pixels, if that's part of the process at Help Scout. To be efficient with time
I eyeballed the position of the elements
- Added client-side form validation (Jared and I discussed this during our interview and I'm 
sad I didn't get a chance to implement anything!)

Thanks again, and if you celebrate, hope you all have a wonderful July 4 holiday. 




# 🥔 Yam Site

> Front-end Engineer Hiring Project (Design Team)

## 💪 Challenge

Check out the [challenge notes](./challenge.md) for details on project requirements and submission.

## 🛠 Prerequisite

- [Ruby](https://github.com/rbenv/rbenv)
- [Bundler](https://bundler.io/)
- [Jekyll](https://jekyllrb.com/)

A working Ruby dev environment. Mac OS should come with Ruby by default, but it may not be reliable. We recommend going with a solution like [rbenv](https://github.com/rbenv/rbenv) to manage local Ruby dev environments.

## 🔧 Setup

Fork/clone/download this repo it to your computer.

Go into that directory and install dependencies by running:

```
bundle install
```

## 📂 File structure

Below are notable folders in this project:

```
/fe-yam-site
| _data/
| _sass/
| _posts/
\ _assets/
```

The blog posts live in the `_posts/` folder.

## 🕹 Development

This project is basically an out-of-the-box Jekyll site, that was generated via `jekyll new`.

Fire up the local development server by running:

```
bundle exec jekyll serve --watch
```

Visit the dev site at [http://localhost:4000/](http://localhost:4000/).

Check out the blog post at [http://localhost:4000/2019/06/21/test-post/](http://localhost:4000/2019/06/21/test-post/).
