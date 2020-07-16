import { createApp } from "vue";
import { router, routerHistory } from "./router";
import App from "./App.vue";
import "./index.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
