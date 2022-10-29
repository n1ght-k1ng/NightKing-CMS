# NightKing-CMS 

A Content Management System Web Application built on MERN (MongoDB ExpressJs ReactJs NodeJS) Stack. The UI has been built using ANT Design.

![image](https://user-images.githubusercontent.com/77714082/184510047-9005bda6-8bbe-4bac-ad87-8091be58299b.png)




**It has now been deployed**
[NightKing-CMS](https://nightking-cms.netlify.app/)

## Details 


* The client side of this project is build on Next.js.
* NightKing-CMS uses Express for authentication and route handling.
* API - [NightKing-CMS API](https://nightking-cms.herokuapp.com/api)
* NightKing-CMS stores all the data in a MongoDB database,

### Running locally in development mode

To get started, clone the repository and run 

    git clone https://github.com/n1ght-k1ng/NightKing-CMS
    cd cms/client
    npm install
    npm run dev

To get the server started 
```
git clone https://github.com/n1ght-k1ng/NightKing-CMS
cd cms/server
npm install
npm run dev
```
**However just this wont make the application up and running, as you have to setup your own environment variables in an .env file.**  

## Login and Authentication 

NightKing-CMS has been featured to have three type of users:-

* Admin 
* Author 
* Subscriber 

Any new user can only Signup as **Subscriber** by default.
 
*forgot password* feature is also implemented.

Only an *Admin* can escalate the priviledges of an existing Author/Subscriber. 

Each type of user has their own set of allowed features which will be discussed below. 

**You can check out the user features by logging into NightKing-CMS using the following credentials.**

1. ***Admin***
>  email - admin@admin.com
>  password - nikhil
2. ***Author*** 
>  email - author@author.com
>  password - author
3. ***Subscriber***
>  email - subscriber@subscriber.com
>  password - subscriber

Obviosly you can't do any updates to these specific profiles in the Profile Update Section.

## Posts 

**All users can see the Posts published in NightKing-CMS.** 

Posts are be categorised into various categories. A user can also see all the posts under the same category.

Wheras

* An admin has access to *edit/delete* all the posts in NightKing-CMS, but an author can only *edit/delete* the posts made by them only.
* Admin/Author can build and add new posts to NightKing-CMS using the TinyMCE text editor.
* Only an admin can add/remove an category in the CMS.

## Media

**All the photos uploaded by any author/admin in the CMS will be featured in the Library Section**

* Admin can remove any media entered while the author can remove only the media uploaded by them.

## Comments 

**All users have view/edit/delete access to the comments they posted on various posts with an search option too**. 

Admin can view and delete all the comments in the CMS. 

## Users 

An Admins only tab, to search, edit , remove and add current users to NightKing-CMS

## Profile 

All users can update their profile using this profile tab

## Customize 

Admins can customise the Title , subtitle and the background cover image is the customise tab.

## Thankyou 

Hope you have fun using NightKing-CMS. Bugs and feature requests are welcome to be heard in the **Contact** page. 

Put a post before you leave and me smile :wink: 
