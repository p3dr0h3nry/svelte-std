<script>
    import { Route } from "svelte-routing";
    import Authguard from "../store/Authguard.svelte";

    export let path;
    console.log('chamou',path);
</script>


<Route >
    <Authguard>
      <slot />
    </Authguard>
  </Route>