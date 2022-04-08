<script>
        import * as SchemaOrder from "../assets/protos/orders_pb";
        const { Product, Products, Order, Orders } = SchemaOrder.default;

        const products = new Products();
        let list = products.getProductList();
        console.log(list);
</script>
<h1>Pedidos</h1>
{list}