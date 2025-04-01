async function fetchData() {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = "https://steamcommunity.com/market/priceoverview/?currency=1&appid=730&market_hash_name=AK-47%20%7C%20Redline%20(Field-Tested)";

  const response = await fetch(proxy + apiUrl);
  const data = await response.json();
  console.log(data);
}

fetchData();
