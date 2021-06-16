import { Client } from "./client";

const client = new Client();
client.init();

const btn = document.querySelector("#send");
const input = (<HTMLInputElement>document.querySelector("#message"));

  btn.addEventListener("click", ()=> {
        client.sendMessage(input.value)
  });
