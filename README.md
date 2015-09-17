This is a little proof of concept project to verify if a **KeystoneJS application** can work as a SPA using **Backbone/Marionette**.

The key difference is that the Keystone routes are set up as **API routes**, directly returning the model data from the MongoDB, instead of using static Keystone views.
Backbone can then retrieve the data from those API endpoints and render the views.

The main advantage is that we still have a full admin application with user/permission management and still can create a fantastic, marvelous and blazingly fast SPA using Backbone/Marionette.

**JSPM/SystemJS** is used as a client-side module loader but could be exchanged for anything else.

The code was generated by the Keystone Yeoman generator and then adapted to show the **blog posts** configured by the admin app and stored in the MongoDB as Backbone application.

### How To
1. Install and start [MongoDB](https://www.mongodb.org)
2. `npm install jspm -g`
3. `npm install`
4. `jspm install`
5. `node keystone`
6. Now you can access the admin application and create some blog posts
  1. Go to `localhost:3000/keystone/signin` and sign in with `admin`/`admin`
  2. Create some posts
7. The blog posts should be shown on `localhost:3000/`