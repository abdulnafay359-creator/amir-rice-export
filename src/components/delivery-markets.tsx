const markets = ["Middle East", "Africa", "Europe", "Asia", "USA", "Canada"];

export default function DeliveryMarkets() {
  return (
    <div className="mt-6">
      <h3 className="font-serif text-2xl text-forest-950">Where We Deliver</h3>
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {markets.map((market) => (
          <li key={market} className="rounded-xl border border-forest-950/10 bg-forest-50 px-4 py-3 font-semibold text-forest-900">
            {market}
          </li>
        ))}
      </ul>
    </div>
  );
}
