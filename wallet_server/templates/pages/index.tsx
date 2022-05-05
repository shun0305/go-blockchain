import axios from "axios";
import type { NextPage } from "next";
import useSWR from "swr";

const Home: NextPage = () => {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // const { data, error } = useSWR("0.0.0.0:8080/wallet", fetcher);
  // axios.post("../../../", {}).then(function (response) {
  //   console.log(response.data);
  // });

  return (
    <div>
      <div>
        <h1>Wallet</h1>
        <div id="wallet_amount">0</div>
        <button id="reload_wallet">Reload Wallet</button>

        <p>Public Key</p>
        <textarea id="public_key" rows={2} cols={100}></textarea>

        <p>Private Key</p>
        <textarea id="private_key" rows={1} cols={100}></textarea>

        <p>Blockchain Address</p>
        <textarea id="blockchain_address" rows={1} cols={100}></textarea>
      </div>

      <div>
        <h1>Send Money</h1>
        <div>
          Address:
          <input id="recipient_blockchain_address" size={100} type="text" />
          <br />
          Amount: <input id="send_amount" type="text" />
          <br />
          <button id="send_money_button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
