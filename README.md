Hướng dẫn sử dụng Api Free Forme!!!
Khuyến cáo Không được phá dưới mọi hinh thức !

Api chính chủ Tài Heo Dev 

+ Product 
get --> https://beerclup.herokuapp.com/api/products
post --> https://beerclup.herokuapp.com/api/products   ===(auth, authAdmin)===
delete,put--> https://beerclup.herokuapp.com/api/products/:id  ===(auth, authAdmin)===

+ Login , Register , Info , Refresh_token , addcart , history

+ Mỗi user một tài khoản riêng một token riêng 0 là user 1 là admin  ====(auth,authAdmin)===

post -->https://beerclup.herokuapp.com/user/register
post -->https://beerclup.herokuapp.com/user/login
get --> https://beerclup.herokuapp.com/user/logout
get --> https://beerclup.herokuapp.com/user/info    ====(auth)===
get --> https://beerclup.herokuapp.com/user/refresh_token     ====(auth)===
patch --> https://beerclup.herokuapp.com/user/addcart
get --> https://beerclup.herokuapp.com/user/history      ====(auth)===


+ Category
get,post --> https://beerclup.herokuapp.com/api/category  ===(auth, authAdmin)===
delete,put --> https://beerclup.herokuapp.com/api/category/:id  ===(auth, authAdmin)===

+Payment
get --> https://beerclup.herokuapp.com/api/payment    ===(auth, authAdmin)===
post --> https://beerclup.herokuapp.com/api/payment    ===(auth)===

upload image product Admin lên cloud của tui nên tiết kiệm giúp nhá :Đ

post -->https://beerclup.herokuapp.com/api/upload    ===(auth, authAdmin)===
post -->https://beerclup.herokuapp.com/api/destroy   ===(auth, authAdmin)===
