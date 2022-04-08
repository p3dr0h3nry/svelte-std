<script>
    import * as j from 'jquery';
    export let name;

    function redirect(local) {
        window.location.replace(local);
    }


</script>
<nav class="navBar">
    <div class="menu">
        <button on:click|preventDefault={()=>window.location.replace('/home')} >Pedidos</button>
        <button on:click|preventDefault={()=>redirect('/insertProducts')} >Cadastrar Produtos</button>
    </div>
    
    <div class="navUser">
        Welcome, {name}
    </div>
</nav>