# E-Commerce REST API
```
Additional Feature: 
1.Simulating Cost Of Delivery Based On User Origin/Cities/Province/address Rajaongkir API
```

server-side : `localhost:3000`

client-side : `localhost:8080`

In case to logged in as an admin just create user with `role: customer` when register as a user.

## Usage
Run `nodemon app.js or npm run dev` to start the server.

Run `npm run serve` to start the client

###### CRUD User
---
| Route | HTTP | Description | Output | Headers | Body
|:--:|:--:|:--:|:--:|:--:|:--:|
| ````/login```` | POST | Create new user via manual register | User Detail | none | email:string(**required**) password:string(**required**),first_name:string(**required**),last_name:string(**required**)
| ````/register```` | POST | Login user via manual login | User Detail | none | email:string(**required**) password:string(**required**)
---

###### CRUD Product
---
| Route | HTTP | Description | Output | Headers | Body
|:--:|:--:|:--:|:--:|:--:|:--:|
| ````/products```` | GET | Get List of All Products Available on perfectly store | Product Detail | token | none
| ````/products/:id```` | GET | Get a Spesific Product Available on perfectly store  | Product Detail | token | none
| ````/products```` | POST | Create New Product (Admin Only) to perfectly store | Product Detail | token | name:string(**required**) price:Number(**required**) stock:Number(**required**) image:String(**optional**) designer:string(**required**) description:String(**optional**)
| ````/products/:id```` | DELETE | Delete a spesific product from perfectly store (Admin Only) | Product Detail | token | none
| ````/products/:id```` | PUT | Update attributes of spesific product from perfectly store (Admin Only) | Product Detail | token | name:string(**required**) price:Number(**required**) stock:Number(**required**) image:String(**optional**) designer:string(**required**)description:String(**optional**)
---

###### CRUD Cart
---
| Route | HTTP | Description | Output | Headers | Body
|:--:|:--:|:--:|:--:|:--:|:--:|
| ````/carts```` | GET | Get A spesific Cart For A spesific User on perfectly | Cart Detail | token | none
| ````/carts/province```` | GET | Get List of All Provinces In Indonesia via Rajaongkir API | Cart Detail | token | none
| ````/carts/city```` | GET | Get List of All Cities In Indonesia via rajaongkir API | Cart Detail | token | none
| ````/carts/checkout```` | PUT | Checkout Spesific Cart From A user and Send To Transaction Database | Cart Detail | token | price:Number(**required**) Address:String(**required**)
| ````/carts/:cartId```` | DELETE | Delete Spesific ItemCart On Spesific User Cart | Cart Detail | token | none
| ````/carts/:cartId```` | POST | Add or Create ItemCart On Spesific User Cart | Cart Detail | token | stock:Number(**required**)
| ````/carts/cost```` | POST | Get A Delivery Price From Rajaongkir API Based On Address,city and Province Location | Cart Detail | token |origin:Number(**required**) destination:Number(**required**) weight:Number(**required**) courier:string(**required**)
---

###### CRUD Transaction
---
| Route | HTTP | Description | Output | Headers | Body
|:--:|:--:|:--:|:--:|:--:|:--:|
| ````/transactions```` | GET | Get A List of All Transaction Available on perfectly store | Transaction Detail | token | none
| ````/transactions/:id```` | PUT | Update Status of a Spesific Transaction (User Only) To 'Received' From 'On Delivery' | Transaction Detail | token | none
| ````/transactions/user```` | GET | Get A list Of All Transaction from A Spesific user | Transaction Detail | token | none
| ````/transactions/user/:id```` | GET | Get a Spesific Transaction Detail For a Spesific Authenticated User | Transaction Detail | token | none
---