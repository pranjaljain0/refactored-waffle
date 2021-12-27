# Refactored Waffle

[Refactored Waffle](https://refactoredwaffles.pranjaljain.me)

### Overview

Hosted at [refactoredwaffles.pranjaljain.me](https://refactoredwaffles.pranjaljain.me)
For this project I used [Next.js](https://nextjs.org) & [MongoDB](https://www.mongodb.com), here both the tools I have used gives a preference to performance, And have made the web application super fast and powerful. In this project I have created Front end using HTML/CSS Components & Backend using JS which can be found in the `pages/api` directory in the GitHub repo of the application. All the keys were passed as environment variables and the application was deployed on [Vercel](https://vercel.com) using the same environment variables.

### Submission Category

- E-Commerce Creation

### Additional Resources / Info

Pages and links:

[Home](https://refactoredwaffles.pranjaljain.me)

[Waffle Listing](https://refactoredwaffles.pranjaljain.me/waffles)

[Individual waffle](https://refactoredwaffles.pranjaljain.me/waffles/Belgian_Waffle)

[Contact Us](https://refactoredwaffles.pranjaljain.me/contact)

The apis which I have created for this project you can check the code for them in the `public/api` folder. [Click here](https://github.com/pranjaljain0/refactored-waffle/tree/main/pages/api)

Also there are multiple components which are created and reused inside the application which you can checkout in the [Components folder](https://github.com/pranjaljain0/refactored-waffle/tree/main/components)

## Screens

#### Home page

![Home 1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vte3c8nxl5dm5se1fg7l.png)

To get the our suggestions from the database I used another search query which find out if theres `top_flag` variable existing in the document or not. If there is then only it is send from MongoDB.
The query is

```javascript
[
	{
		$search: {
			index: 'WaffleName',
			exists: {
				path: 'top_flag',
			},
		},
	},
];
```

![Home 2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/448gvf8racv0xd6giqpj.png)

#### Waffle listing

![Waffle listing](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ii0oefys2tbbe4jkj204.png)

#### Individual Waffle page

![Waffle page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/amycwz07hqma4nz3qizv.png)

#### Search

this search functionality is implemented using MongoDB Atlas search. Where mongoDB created an index to the items present in the collection. And then that helped implementing the search functionality.
For the search the query I have used acording to my data is...

```javascript
[
 {
  $search: {
   index: 'WaffleName',
   wildcard: {
    path: 'name',
    query: `${WaffleName}*`,
    allowAnalyzedField: true,
   },
  },
 },
 {
  $project: {
   name: 1,
   image_url: 1,s
   score: {
    $meta: 'searchScore',
   },
  },
 },
];
```

In this query I am passing `WaffleName` variable value in the query with the path name as a wildcard search. Which allows me to search the whole list without matching exact words.

![Search](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l0nu06ad3qqq22uokkr2.png)

#### Contact Us

![Contact page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/by2omeheerhueuq5pc8g.png)

## Fin

This was the first time when I used all the tools provided by MongoDB. Initially it took me a while to understand all the tools like Triggers, Functions etc. But as soon as i implemented the first one. It was a game changer, Then i realised that it can help in so much of database automation. For example, In this project I used a trigger which was looking for an insertion event on orders collection. As soon as there were insertions on the collection It would run a function which would reduce the quantity of the things which were purchased from the available quantity. And another was to email the receipt as soon as there is a new order. This would reduce a good amount of work on the middleware part. And can be handled more precisely as it has direct contact with the data on MongoDB Realm.
