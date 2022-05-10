<template>
<button id="button" class="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span><i class="bi bi-bag-check-fill"></i></span>Cart<span id="span">{{cart.length}}</span></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">{{cart.length}} Items in your Cart</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <table class="table table-bordered-sm mt-5">
            <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cart" :key="index">
                    <th scope="row">{{item.number}}</th>
                    <td>{{item.name}}</td>
                    <td>Ksh {{item.price}}</td>
                    <td>{{item.quantity}}</td>
                    <!--<td></td>-->
                    <td>
                        <div @click="removeProduct(index)">
                            <span><i class="bi bi-trash"></i></span>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
        <div class="container">
            <div class="d-flex">

                <p v-if="total == 0">Your cart is empty</p>
                <h3 v-else id="h3">Total Ksh {{total}}</h3>
                <!--<input type="text" class="form-control">-->
                <button type="submit" id="btn" class="btn btn-warning rounded-1" @click="submitOrder">CheckOut</button>

            </div>
        </div>

    </div>

</div>
</template>

<script>
//import checkoutModel from './checkoutModel.vue';

export default {
    //emits: ['showDetails'],
    props: [

        'cart',
        'products',
        'number',
        'quantity',
        'foods'
    ],
    /* components: {
         checkoutModel
     },*/

    data() {
        return {
            //showModels: false

        }
    },
    computed: {

        total() {
            return this.cart.reduce((acc, item) => {
                return acc + (item.price * item.quantity)
            }, 0)
        }

    },

    methods: {

        submitOrder() {
            if (this.cart.length === 0) {
                return;

            } else {

                console.log('Order sent successfully');
            }

        },

        removeProduct(index) {
            this.cart.splice(index, 1)

        },

    }
}
</script>

<style scoped>
#btn {
    position: absolute;
    right: 4px;
}

#card {

    position: absolute;
    margin-left: 22rem;
    margin-top: 7rem;
    color: dodgerblue;
    background-color: lightgrey;
}

#span {
    background-color: tomato;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: -1rem;
    text-align: center;
}
</style>
