<script lang="ts">
	import { start } from "./i18n";
	import GlobalStyle from "./GlobalStyle.svelte";
	import Header from "./Header.svelte";
	import Home from "./Home.svelte";

	start();
</script>

<GlobalStyle />

<Header />
<Home />
