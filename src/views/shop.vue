<template>
<div>
    <h1>Welcome to our shop</h1>
    <button class="btn btn-warning" id="button1">
        <cart :cart="cart" :products="products" :number="number" :quantity="quantity" />
    </button>
</div>
<br><br> 

<div class="row">
    <!--row-cols-1 row-cols-md-4 g-4-->
    <div class="col-3" v-for="(product, index) in products" :key="index">
        <div class="card p-2  border-0 my-4">

            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">
                    <img :src="product.image" alt="">
                    <br>
                    Price: Ksh {{product.price}}
                    <br>
                    <label for="">Quantity:</label>
                    <input type="number" v-model="product.quantity">
                </p>
                <button @click="addToCart(product)" class="btn btn-warning">Add to Cart</button>
            </div>

        </div>
    </div>

</div>
</template>

<script>
import cart from './cart.vue'

export default {
    components: {
        cart
    },
    data() {
        return {
            cart: [],

            number: 1,

            products: [{
                    name: 'carrots',
                    price: '40',
                    quantity: '',
                    image: 'https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg'

                },
                {
                    name: 'onions',
                    price: '30',
                    quantity: '',
                    image: 'https://4.imimg.com/data4/CW/MF/MY-35654338/fresh-red-onions-500x500.jpg'

                },
                {
                    name: 'tomatoes',
                    price: '20',
                    quantity: '',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg'

                },
                {
                    name: 'Cabbages',
                    price: '40',
                    quantity: '',
                    image: 'https://kasifarmersmarket.co.za/wp-content/uploads/2019/02/cabbage-fresh-produce-group-llc.jpg'
                },
                {
                    name: 'grapes',
                    price: '25',
                    quantity: '',
                    image: 'https://www.collinsdictionary.com/images/full/grape_229112122.jpg'

                },
                {
                    name: 'bananas',
                    price: '35',
                    quantity: '',
                    image: 'https://farmiken.com/wp-content/uploads/2020/09/bananas.jpg'

                },
                {
                    name: 'women tight-jeans',
                    price: '420',
                    quantity: '',
                    image: 'https://assets.ajio.com/medias/sys_master/root/h09/hcd/12085139111966/-1117Wx1400H-440794191-mediumblue-MODEL.jpg'
                },
                {
                    name: 'red heavy jacket',
                    price: '550',
                    quantity: '',
                    image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/429280/item/goods_16_429280.jpg?width=1600&impolicy=quality_75'
                },
                {
                    name: 'vision plus Tv',
                    price: '15000',
                    quantity: '',
                    image: 'https://marketplace.flexpay.co.ke/wp-content/uploads/2021/08/TV1.jpg'
                },
                {
                    name:'ken salt',
                    price:'35',
                    quantity:'',
                    image:'https://copia.co.ke/wp-content/uploads/2021/05/KF199_3424-3.jpg'
                },
                {
                    name:'mattress 3x4 ',
                    price:'4500',
                    quantity:'',
                    image:'https://m.media-amazon.com/images/I/81972NAsHsL._SX466_.jpg'
                },
                {
                    name:'glasses',
                    price:'5000',
                    quantity:'',
                    image:'https://m.media-amazon.com/images/I/51gwC3i-wNL._AC_SY355_.jpg'
                }
            ]

        }

    },
    methods: {
        addToCart(product) {

            if (product.quantity > 0) {
                product['number'] = this.number++
                this.cart.push(product)

            }

        },

    }

}
</script>

<style scoped>
#button1 {
    position: absolute;
    top: 5rem;
    right: 2rem;
}

img {
    height: 100px;
}
</style>
