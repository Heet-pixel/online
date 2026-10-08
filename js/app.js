const PRODUCTS = [
{id:1,name:'Classic T-Shirt',category:'Fashion',price:499,image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',description:'Comfortable cotton t-shirt for everyday wear.'},
{id:2,name:'Running Shoes',category:'Fashion',price:1499,image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',description:'Lightweight shoes for walking and running.'},
{id:3,name:'Denim Jacket',category:'Fashion',price:1899,image:'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',description:'Classic denim jacket with a modern fit.'},
{id:4,name:'Casual Hoodie',category:'Fashion',price:1299,image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',description:'Warm and stylish hoodie for casual days.'},
{id:5,name:'Wireless Headphones',category:'Electronics',price:1999,image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',description:'Wireless headphones with comfortable ear cushions.'},
{id:6,name:'Smart Watch',category:'Electronics',price:2499,image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',description:'Stylish smart watch for everyday activities.'},
{id:7,name:'Smartphone',category:'Electronics',price:15999,image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',description:'Modern smartphone for work and entertainment.'},
{id:8,name:'Bluetooth Speaker',category:'Electronics',price:1799,image:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',description:'Portable speaker with clear sound.'},
{id:9,name:'Laptop Backpack',category:'Accessories',price:1099,image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',description:'Spacious backpack for college and work.'},
{id:10,name:'Classic Sunglasses',category:'Accessories',price:699,image:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',description:'Modern sunglasses with a classic design.'},
{id:11,name:'Leather Wallet',category:'Accessories',price:799,image:'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',description:'Slim wallet for everyday use.'},
{id:12,name:'Wrist Watch',category:'Accessories',price:1299,image:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',description:'Elegant analog watch for daily wear.'},
{id:13,name:'Table Lamp',category:'Home',price:799,image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',description:'Compact lamp for your study or work desk.'},
{id:14,name:'Coffee Mug',category:'Home',price:299,image:'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=800&q=80',description:'Ceramic mug for tea and coffee lovers.'},
{id:15,name:'Modern Chair',category:'Home',price:3499,image:'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',description:'Comfortable chair for home or office.'},
{id:16,name:'Decorative Plant',category:'Home',price:599,image:'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',description:'Easy-care decorative plant for your room.'},
{id:17,name:'Everyday Backpack',category:'Accessories',price:899,image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',description:'Everyday backpack with multiple compartments.'},
{id:18,name:'Sports Cap',category:'Fashion',price:399,image:'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80',description:'Comfortable cap for outdoor activities.'},
{id:19,name:'Sofa Cushion',category:'Home',price:449,image:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',description:'Soft cushion to brighten your living room.'},
{id:20,name:'Mechanical Keyboard',category:'Electronics',price:2299,image:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',description:'Responsive keyboard for work and gaming.'},
{id:21,name:'Wireless Mouse',category:'Electronics',price:699,image:'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80',description:'Comfortable wireless mouse for everyday use.'},
{id:22,name:'Travel Bottle',category:'Accessories',price:549,image:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',description:'Reusable bottle for travel and daily use.'},
{id:23,name:'Sneakers',category:'Fashion',price:1699,image:'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',description:'Trendy sneakers for everyday outfits.'},
{id:24,name:'Desk Organizer',category:'Home',price:499,image:'https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=800&q=80',description:'Keep your workspace neat and organized.'}
];
function imgFallback(img){img.onerror=null;const t=encodeURIComponent((img.alt||'ShopEase').slice(0,28));img.src="data:image/svg+xml;utf8,"+"%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='100%25' height='100%25' fill='%23eeeaff'/%3E%3Ctext x='50%25' y='45%25' font-size='90' text-anchor='middle'%3E%F0%9F%9B%8D%EF%B8%8F%3C/text%3E%3Ctext x='50%25' y='62%25' font-size='30' font-family='Arial' fill='%236c4df6' text-anchor='middle'%3E"+t+"%3C/text%3E%3C/svg%3E";}
function money(n){return '₹'+Number(n).toLocaleString('en-IN',{minimumFractionDigits:2});}
function cart(){return JSON.parse(localStorage.getItem('shopEaseCart')||'{}');}
function saveCart(c){localStorage.setItem('shopEaseCart',JSON.stringify(c));updateCount();}
function updateCount(){const c=cart(),n=Object.values(c).reduce((a,b)=>a+Number(b),0);document.querySelectorAll('#cartCount').forEach(e=>e.textContent=n);}
function card(p){return `<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="imgFallback(this)"></div><div class="product-info"><span class="tag">${p.category}</span><h3>${p.name}</h3><p>${p.description}</p><div class="price">${money(p.price)}</div><a class="btn small" href="product.html?id=${p.id}">View Product</a></div></article>`;}
function featured(){const e=document.getElementById('featuredProducts');if(e)e.innerHTML=PRODUCTS.slice(0,6).map(card).join('');}
function productsPage(){const grid=document.getElementById('productGrid');if(!grid)return;const q=new URLSearchParams(location.search);const s=document.getElementById('search'),c=document.getElementById('category');c.value=q.get('category')||'';function draw(){const term=s.value.toLowerCase();const arr=PRODUCTS.filter(p=>(!c.value||p.category===c.value)&&(!term||p.name.toLowerCase().includes(term)||p.description.toLowerCase().includes(term)));grid.innerHTML=arr.length?arr.map(card).join(''):'<div class="empty"><h2>No products found</h2></div>';}s.oninput=draw;c.onchange=draw;document.getElementById('searchForm').onsubmit=e=>e.preventDefault();draw();}
function productPage(){const e=document.getElementById('productDetail');if(!e)return;const p=PRODUCTS.find(x=>x.id===Number(new URLSearchParams(location.search).get('id')));if(!p){e.innerHTML='<div class="empty"><h2>Product not found</h2></div>';return;}e.innerHTML=`<div class="detail-image"><img src="${p.image}" alt="${p.name}" onerror="imgFallback(this)"></div><div><span class="tag">${p.category}</span><h1>${p.name}</h1><p class="detail-description">${p.description}</p><div class="price large">${money(p.price)}</div><form class="quantity-form" id="addForm"><div><label>Quantity</label><input id="quantity" type="number" min="1" value="1"></div><button class="btn">Add to Cart</button></form></div>`;document.getElementById('addForm').onsubmit=e=>{e.preventDefault();const c=cart();c[p.id]=(c[p.id]||0)+Math.max(1,Number(document.getElementById('quantity').value));saveCart(c);location.href='cart.html';};}
function cartPage(){const e=document.getElementById('cartPage');if(!e)return;const c=cart();let total=0,rows='';Object.entries(c).forEach(([id,q])=>{const p=PRODUCTS.find(x=>x.id===Number(id));if(!p)return;const sub=p.price*q;total+=sub;rows+=`<div class="cart-row"><div class="cart-product"><span class="mini-icon">🛍️</span><div><strong>${p.name}</strong><small>${p.category}</small></div></div><div>${money(p.price)}</div><input class="qty" type="number" min="0" value="${q}" data-id="${id}"><div>${money(sub)}</div><button class="link-button remove" data-id="${id}">Remove</button></div>`;});if(!rows){e.innerHTML='<div class="empty"><h2>Your cart is empty</h2><a class="btn" href="products.html">Browse Products</a></div>';return;}e.innerHTML=`<div class="cart-table">${rows}</div><div class="cart-summary"><button class="btn secondary" id="updateCart">Update Cart</button><div><span>Total</span><strong>${money(total)}</strong><a class="btn" href="checkout.html">Checkout</a></div></div>`;e.querySelectorAll('.remove').forEach(b=>b.onclick=()=>{const c=cart();delete c[b.dataset.id];saveCart(c);cartPage();});document.getElementById('updateCart').onclick=()=>{const n={};e.querySelectorAll('.qty').forEach(i=>{if(Number(i.value)>0)n[i.dataset.id]=Number(i.value);});saveCart(n);cartPage();};}
function currentUser(){return JSON.parse(localStorage.getItem('shopEaseUser')||'null');}
function esc(t){return String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function auth(){const e=document.getElementById('authLink');if(!e)return;const u=currentUser();const o=document.getElementById('ordersLink');if(u){e.textContent='Logout ('+u.name.split(' ')[0]+')';e.href='#';e.onclick=ev=>{ev.preventDefault();localStorage.removeItem('shopEaseUser');location.href='index.html';};if(o)o.style.display='';}}
function forms(){const r=document.getElementById('registerForm');if(r)r.onsubmit=e=>{e.preventDefault();const users=JSON.parse(localStorage.getItem('shopEaseUsers')||'[]'),u={name:regName.value,email:regEmail.value,password:regPassword.value};if(users.some(x=>x.email===u.email)){registerMessage.innerHTML='<div class="alert">Email already registered.</div>';return;}users.push(u);localStorage.setItem('shopEaseUsers',JSON.stringify(users));registerMessage.innerHTML='<div class="success">Account created! Redirecting...</div>';setTimeout(()=>location.href='login.html'+location.search,600);};const rl=document.getElementById('loginLink');if(rl)rl.href='login.html'+location.search;const gl=document.getElementById('registerLink');if(gl)gl.href='register.html'+location.search;const l=document.getElementById('loginForm');if(l)l.onsubmit=e=>{e.preventDefault();const users=JSON.parse(localStorage.getItem('shopEaseUsers')||'[]'),u=users.find(x=>x.email===loginEmail.value&&x.password===loginPassword.value);if(!u){loginMessage.innerHTML='<div class="alert">Invalid email or password.</div>';return;}localStorage.setItem('shopEaseUser',JSON.stringify(u));location.href=new URLSearchParams(location.search).get('next')||'index.html';};}

const SHIPPING_FREE_ABOVE=999,SHIPPING_FEE=49;
function cartItems(){const c=cart();return Object.entries(c).map(([id,q])=>({p:PRODUCTS.find(x=>x.id===Number(id)),q:Number(q)})).filter(i=>i.p&&i.q>0);}
function totals(items){const sub=items.reduce((a,i)=>a+i.p.price*i.q,0);const ship=sub===0||sub>=SHIPPING_FREE_ABOVE?0:SHIPPING_FEE;return{sub,ship,total:sub+ship};}
function orders(){return JSON.parse(localStorage.getItem('shopEaseOrders')||'[]');}
function checkoutPage(){
const e=document.getElementById('checkoutPage');if(!e)return;
const user=currentUser();
if(!user){location.replace('login.html?next=checkout.html');return;}
const items=cartItems();
if(!items.length){e.innerHTML='<div class="empty"><h2>Your cart is empty</h2><p>Add something to your cart before checking out.</p><a class="btn" href="products.html">Browse Products</a></div>';return;}
const t=totals(items);
const rows=items.map(i=>`<div class="sum-row"><span>${esc(i.p.name)} × ${i.q}</span><span>${money(i.p.price*i.q)}</span></div>`).join('');
e.innerHTML=`<div class="checkout-grid">
<form class="form-card" id="checkoutForm" novalidate>
<h2>Shipping Details</h2><div id="checkoutMessage"></div>
<label for="shipName">Full Name</label><input id="shipName" value="${esc(user.name)}" required>
<label for="shipPhone">Phone Number</label><input id="shipPhone" type="tel" inputmode="numeric" placeholder="10-digit mobile number" required>
<label for="shipAddress">Address</label><textarea id="shipAddress" rows="3" placeholder="House no., street, area" required></textarea>
<div class="two-col"><div><label for="shipCity">City</label><input id="shipCity" required></div><div><label for="shipState">State</label><input id="shipState" required></div></div>
<label for="shipPin">PIN Code</label><input id="shipPin" inputmode="numeric" maxlength="6" placeholder="6-digit PIN" required>
<h2>Payment Method</h2>
<label class="radio"><input type="radio" name="pay" value="Cash on Delivery" checked> Cash on Delivery</label>
<label class="radio"><input type="radio" name="pay" value="UPI"> UPI (demo)</label>
<label class="radio"><input type="radio" name="pay" value="Card"> Credit / Debit Card (demo)</label>
<p class="note">This is a demo store. No real payment is taken.</p>
<button class="btn" type="submit">Place Order</button>
</form>
<aside class="summary-card"><h2>Order Summary</h2>${rows}
<div class="sum-row"><span>Subtotal</span><span>${money(t.sub)}</span></div>
<div class="sum-row"><span>Shipping</span><span>${t.ship?money(t.ship):'Free'}</span></div>
<div class="sum-row total"><span>Total</span><span>${money(t.total)}</span></div>
<small class="note">Free shipping on orders of ₹${SHIPPING_FREE_ABOVE} and above.</small>
<a class="text-link" href="cart.html">← Edit cart</a></aside></div>`;
document.getElementById('checkoutForm').onsubmit=ev=>{
ev.preventDefault();
const v=id=>document.getElementById(id).value.trim();
const msg=document.getElementById('checkoutMessage');
const err=m=>{msg.innerHTML=`<div class="alert">${m}</div>`;msg.scrollIntoView({behavior:'smooth',block:'center'});};
if(!v('shipName')||!v('shipAddress')||!v('shipCity')||!v('shipState'))return err('Please fill in all shipping details.');
if(!/^[6-9]\d{9}$/.test(v('shipPhone')))return err('Enter a valid 10-digit Indian mobile number.');
if(!/^\d{6}$/.test(v('shipPin')))return err('Enter a valid 6-digit PIN code.');
const live=cartItems();if(!live.length)return err('Your cart is empty.');
const lt=totals(live);
const order={id:'SE'+Date.now().toString().slice(-8),date:new Date().toISOString(),email:user.email,
items:live.map(i=>({id:i.p.id,name:i.p.name,price:i.p.price,qty:i.q})),
subtotal:lt.sub,shipping:lt.ship,total:lt.total,payment:document.querySelector('input[name=pay]:checked').value,
address:{name:v('shipName'),phone:v('shipPhone'),line:v('shipAddress'),city:v('shipCity'),state:v('shipState'),pin:v('shipPin')}};
const all=orders();all.unshift(order);
localStorage.setItem('shopEaseOrders',JSON.stringify(all));
saveCart({});
location.href='order-success.html?id='+order.id;};}
function successPage(){
const e=document.getElementById('successPage');if(!e)return;
const id=new URLSearchParams(location.search).get('id');
const o=orders().find(x=>x.id===id);
if(!o){e.innerHTML='<div class="empty"><h2>Order not found</h2><a class="btn" href="products.html">Continue Shopping</a></div>';return;}
e.innerHTML=`<div class="form-card success-card"><div class="hero-icon">✅</div><h1>Thank you, ${esc(o.address.name)}!</h1><p>Your order <strong>${o.id}</strong> has been placed successfully.</p>
${orderDetail(o)}<a class="btn" href="orders.html">View My Orders</a> <a class="btn secondary" href="products.html">Continue Shopping</a></div>`;}
function orderDetail(o){
return `<div class="order-box">${o.items.map(i=>`<div class="sum-row"><span>${esc(i.name)} × ${i.qty}</span><span>${money(i.price*i.qty)}</span></div>`).join('')}
<div class="sum-row"><span>Shipping</span><span>${o.shipping?money(o.shipping):'Free'}</span></div>
<div class="sum-row total"><span>Total (${esc(o.payment)})</span><span>${money(o.total)}</span></div>
<p class="note">Delivering to: ${esc(o.address.line)}, ${esc(o.address.city)}, ${esc(o.address.state)} - ${esc(o.address.pin)} · ${esc(o.address.phone)}</p></div>`;}
function ordersPage(){
const e=document.getElementById('ordersPage');if(!e)return;
const user=currentUser();
if(!user){location.replace('login.html?next=orders.html');return;}
const mine=orders().filter(o=>o.email===user.email);
if(!mine.length){e.innerHTML='<div class="empty"><h2>No orders yet</h2><a class="btn" href="products.html">Start Shopping</a></div>';return;}
e.innerHTML=mine.map(o=>`<div class="form-card order-card"><h3>Order ${o.id} <small>${new Date(o.date).toLocaleString('en-IN')}</small></h3>${orderDetail(o)}</div>`).join('');}
document.addEventListener('DOMContentLoaded',()=>{updateCount();auth();featured();productsPage();productPage();cartPage();checkoutPage();successPage();ordersPage();forms();});
