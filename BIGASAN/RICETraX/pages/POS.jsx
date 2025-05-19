import React, { useState } from "react";
import '../pages/POS.css'

function POS() {
  const [products, setProducts] = useState([]);
  const [payment, setPayment] = useState(0);

  const addProduct = (name, pricePerKg) => {
    const qty = 25;
    const existingIndex = products.findIndex(p => p.name === name);
    const newProducts = [...products];

    if (existingIndex !== -1) {
      newProducts[existingIndex].qty += qty;
    } else {
      newProducts.push({ name, qty, pricePerKg });
    }

    setProducts(newProducts);
  };

  const totalAmount = products.reduce(
    (sum, p) => sum + p.qty * p.pricePerKg,
    0
  );

  const change = Math.max(payment - totalAmount, 0);

  const downloadReceipt = () => {
    let content = "RECEIPT:\n\n";
    products.forEach(p => {
      const total = p.qty * p.pricePerKg;
      content += `${p.name} - ${p.qty} kg x ₱${p.pricePerKg} = ₱${total.toFixed(2)}\n`;
    });
    content += `\nTotal Amount: ₱${totalAmount.toFixed(2)}\n`;
    content += `Payment: ₱${payment.toFixed(2)}\n`;
    content += `Change: ₱${change.toFixed(2)}\n`;

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "receipt.txt";
    link.click();
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo">🌾 RiceTrack</div>
        <nav>
        <button><i className="fas fa-tachometer-alt"></i> Dashboard</button>
        <button><i className="fas fa-boxes"></i> Inventory</button>
        <button className="active"><i className="fas fa-cash-register"></i> POS</button>
        <button><i className="fas fa-bell"></i> Notification</button>
        <button><i className="fas fa-cog"></i> Settings</button>
        </nav>
        <button className="logout">Log out</button>
      </div>

      <div className="main">
        <div className="header">
          <input type="text" placeholder="Search" />
          <div className="datetime">May 15, 2025 11:00 am</div>
        </div>

        <div className="content">
          <div className="products">
            <button onClick={() => addProduct("Maharlika", 58)}>Maharlika</button>
            <button onClick={() => addProduct("Dinorado", 60)}>Dinorado</button>
            <button onClick={() => addProduct("Jasmine", 100)}>Jasmine</button>
            <button onClick={() => addProduct("Top Rice", 60)}>Top Rice</button>
            <button onClick={() => addProduct("Sinandomeng", 60)}>Sinandomeng</button>
          </div>

          <div className="receipt">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Price/kg</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, index) => (
                  <tr key={index}>
                    <td>{p.name}</td>
                    <td>{p.qty} kg</td>
                    <td>₱{p.pricePerKg}</td>
                    <td>₱{(p.qty * p.pricePerKg).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="summary">
              <div>Total Amount: ₱<span>{totalAmount.toFixed(2)}</span></div>
              <div>
                Payment:{" "}
                <input
                  type="number"
                  value={payment}
                  onChange={(e) => setPayment(parseFloat(e.target.value) || 0)}
                />
              </div>
              <div>Change: ₱<span>{change.toFixed(2)}</span></div>
            </div>

            <button onClick={downloadReceipt}>⬇ Download</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default POS;
