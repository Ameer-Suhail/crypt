import React, {useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
import axios from "axios";
import "./dash.css";
import Coin from "./Coin"
import Header from './header'

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <>
    <Header/>
    <div className="coin-app">
      
    <div className="coin-search">
      <h1 className="coin-text">Cryptocurrency Prices</h1>
      <form>
        <input
          type="text"
          placeholder="Search a currency"
          className="coin-input"
          onChange={handleChange}
        />
      </form>
    </div>
    {filteredCoins.map((coin) => {
      return (
        <div>
        <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
        />
        </div>
      );
    })}
  </div>
  </>
  );
};

export default Dashboard;