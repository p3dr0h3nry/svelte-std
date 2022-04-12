import * as SchemaOrder from '../../assets/protos/orders_pb';
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
    const { Products } = SchemaOrder.default;    
    let body = await request.arrayBuffer();
    const products =Products.deserializeBinary(body);
    const list = products.getProductList();
    list.map((v,index)=>{
        console.log(v.getDesc(),v.getId());
    })
    return {
        status:200,
        body:{
            message: "ok"
        }
    }
}