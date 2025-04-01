const backendURL = "https://malex1234-github-io.onrender.com/steam-market";

async function fetchMarketData(itemName) {
  try {
      const response = await fetch(`${backendURL}?item=${encodeURIComponent(itemName)}`);
      if (!response.ok) {
          throw new Error("Failed to fetch data from backend");
      }
      const data = await response.json();
      console.log("✅ Received data:", data); // Debugging log

      // Ensure elements exist before updating them
      const priceElement = document.getElementById("market-price");
      const volumeElement = document.getElementById("market-volume");

      if (priceElement && volumeElement) {
          priceElement.innerText = `Median Price: ${data.median_price}`;
          volumeElement.innerText = `Volume: ${data.volume}`;
      } else {
          console.error("❌ Missing HTML elements for displaying data.");
      }
  } catch (error) {
      console.error("❌ Error fetching market data:", error);
  }
}

// Example usage
fetchMarketData("AK-47 | Redline (Field-Tested)");


