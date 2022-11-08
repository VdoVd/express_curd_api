# express

## This is a simple express framework to make a backend api

it can `create,post,delete,patch` user

## use dockerfile to make a image
`docker pull 1478914789\express_user:v1.0.0`\
`docker run -itd --name express_user -p 5000:5000 1478914789\express_user:1.0.0`

## you can see the interface in the controller.js
GET users `curl -X GET localhost:5000\users` you will see a empty array.
