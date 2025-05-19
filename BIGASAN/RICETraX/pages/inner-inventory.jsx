function Inventory () {
    return (
            <div class="container">
        <aside class="sidebar">
        <div class="logo">RiceTrack</div>
        <nav>
            <ul>
            <li><span class="icon">📊</span> Dashboard</li>
            <li class="active"><span class="icon">📋</span> Inventory</li>
            <li><span class="icon">💳</span> POS</li>
            <li><span class="icon">🔔</span> Notification</li>
            <li><span class="icon">⚙️</span> Settings</li>
            </ul>
        </nav>
        <div class="logout">↩️ Log out</div>
        </aside>

        <main class="main-content">
        <header>
            <h1>Sinandomeng</h1>
            <div class="timestamp">May 15, 2025 | 11:00 am <button class="filter-btn">🔍 Filter</button></div>
        </header>

        <section class="summary">
            <div class="summary-item">🧺<strong>246</strong><br/>Total Stocks (sacks)</div>
            <div class="summary-item">📦<strong>35</strong><br/>Sold Stocks (sacks)</div>
            <div class="summary-item">💰<strong>₱1,250.00</strong><br/>Price</div>
        </section>

        <section class="sales-record">
            <h2>SALES RECORD</h2>
            <table>
            <thead>
                <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Quantity Sold</th>
                <th>Unit Price</th>
                <th>Total Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>001</td>
                <td>03/10/2025</td>
                <td>25kg</td>
                <td>₱50</td>
                <td>₱1,250</td>
                </tr>
                <tr>
                <td>002</td>
                <td>04/01/2025</td>
                <td>10kg</td>
                <td>₱50</td>
                <td>₱500</td>
                </tr>
                <tr>
                <td>003</td>
                <td>04/05/2025</td>
                <td>15kg</td>
                <td>₱50</td>
                <td>₱750</td>
                </tr>
            </tbody>
            </table>
            <button class="print-btn">🖨️ Print</button>
         </section>

         <section class="sales-chart">
            <div class="chart-header">
            <h2>SALES</h2>
            <button class="filter-btn">🔍 Filter</button>
            </div>
            <canvas id="salesChart"></canvas>
        </section>
        </main>
    </div>
 )
}
export default Inventory