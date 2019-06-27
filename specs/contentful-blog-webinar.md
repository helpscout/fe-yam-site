# 🙌 Contentful Integration: Blog and Webinar

👋 Hai!

We're setting up [Contentful](https://www.contentful.com/) to be the CMS for our Jekyll site. We've added some content and we're ready to integrate!

## Requirements

1. Hook up Contentful with Jekyll
2. Create the HTML landing page for Webinars

### Contentful + Jekyll

On Contentful, we've added **3 webinar dates** and **2 blog posts**. We need to somehow integrate our Jekyll site to pull in that data. Ideally, once that's set up, it'll just continuously hit Contentful for the latest stuff every time we fire up local development or deploy!

It looks like you can use the [`jekyll-contentful-data-import`](https://github.com/contentful/jekyll-contentful-data-import) plugin from [Contentful](https://github.com/contentful) to do this very thing!

I chatted with our content team. Here are the credentials you'll need for the API to work:

```
space: tq34x93fn0bx
access_token: tIOMyToBZuAPe5XBgOFgPyPAHugCarXw31fX6aynHhk
environment: test
```

#### Blog posts

We've manually added 1 blog post under `_posts/` for now. We still want to keep it around! Please make sure the Contentful integration doesn't remove it.

Once Contentful is hooked up, we expect the posts to be listed under the main home page. The content should look just like any other blog post (e.g. styled `h3`, paragraphs, etc...)

### Webinars

We've created a started `webinars.html` page. This is where we'd like the redesigned Webinars content to go.

When you fire up the Jekyll dev server, you should be able to see it at [http://localhost:4000/webinars](http://localhost:4000/webinars).

#### Designs

You can check out the update designs via this [InvisionApp link](https://projects.invisionapp.com/share/FXS41GW49U3#/screens/364881427_Classes_LP_V7).

We've also added the entire Sketch file under `/specs/sketch/`. It should have the images you need to code up the 3 lovely faces on the landing page :).

About 30% of our traffic comes from mobile, so we'll need the layout to render correctly for mobile devices as well.

#### CSS / JS

We've added the initial `.scss` and `.js` files to Jekyll. They should be under `/assets/css/webinar.scss` and `/assets/js/webinar.js`.

They've already been loaded into our special custom `page-webinars.html` layout.

**Top nav**

Feel free to code up the static nav (just logo/links/button) or leave blank altogether.

Please code up all the things underneath the top nav.

#### Data From Contentful

We're going to be using Contentful to manage the webinar dates. After setting up the integration, the build should take care of rendering the Webinar dates on the page.

#### Sign up Form

Don't worry about hooking up the sign up form yet. (We're working on an integration with Hubspot).

For now, please make sure that the form elements are styled and ready to go, making it easier to integrate when we're ready.

## Thanks!

Thank you so much!!!

## (Very) Nice to have

### Local dev experience

It looks like the [contentful plugin](https://github.com/contentful/jekyll-contentful-data-import) requires us to run `bundle exec jekyll contentful` everytime we want to sync the content.

It would be nice if we only had to run 1 command, and Jekyll would magically sync and build our local dev!

That way, we'll never have to worry (or forget) to sync with Contentful!
