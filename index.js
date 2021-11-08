const xmpp = require("simple-xmpp");

xmpp.on("online", (data) => {
  console.log("Hey you are online! ");
  console.log(`Connected as ${data.jid.user}`);
  send();
});

function send() {
  setTimeout(send, 5000);
  xmpp.send("user@localhost", `hi! ${Date.now()}`);
}
xmpp.on("error", (error) => console.log(`something went wrong!${error} `));

xmpp.on("chat", (from, message) => {
  console.log(`Got a message! ${message} from ${from}`);
});

xmpp.connect({
  jid: "thinhhuynh@localhost",
  password: "Bigin2016",
  host: "localhost",
  port: 5222,
});
