const CubistHackathon = {
  id: 17,
  title: "Cubist Hackathon 2024: Optimizing NYC Subway Routes with Graph Algorithms",
  date: "2024-06-10",
  description: "Building an application for NYC tourists using graph algorithms to optimize subway routes for cost and time at the Cubist Hackathon 2024.",
  content: `
    <div class="blog-image-container">
      <img 
        src="/events/cubist hackathon.jpg" 
        alt="Shubham Singh NYU at Cubist Hackathon 2024" 
        class="blog-image"
      />
    </div>

    <h2>Cubist Hackathon 2024: Optimizing NYC Subway Routes with Graph Algorithms</h2>
    <p><em>Published on June 10, 2024</em></p>

    <p>At the Cubist Hackathon 2024, I built an application designed to help tourists visiting New York City navigate the subway system more efficiently. The project leveraged graph algorithms to optimize routes based on multiple factors: subway timing, optimal paths, time of day, and cost considerations.</p>

    <h3>The Problem</h3>
    <p>New York City's subway system is complex, with multiple lines, transfers, and varying schedules. For tourists unfamiliar with the system, finding the optimal route can be challenging. The problem becomes even more nuanced when considering:</p>
    <ul style="padding-left: 20px; list-style: disc;">
      <li>Peak vs. off-peak travel times</li>
      <li>Transfer costs and complexity</li>
      <li>Real-time subway delays and schedule variations</li>
      <li>Balancing time efficiency with cost optimization</li>
    </ul>

    <h3>The Solution</h3>
    <p>I modeled the NYC subway system as a weighted graph where:</p>
    <ul style="padding-left: 20px; list-style: disc;">
      <li>Nodes represent stations</li>
      <li>Edges represent subway connections</li>
      <li>Edge weights incorporate time, cost, and time-of-day factors</li>
    </ul>

    <p>Using graph algorithms—specifically adaptations of Dijkstra's algorithm and A* search—the application could find optimal paths that balanced multiple objectives. The system considered real-time subway timing data, optimal transfer points, and time-of-day variations in service frequency.</p>

    <h3>Technical Implementation</h3>
    <p>The application processed subway schedule data and constructed a dynamic graph representation. The routing algorithm accounted for:</p>
    <ul style="padding-left: 20px; list-style: disc;">
      <li><strong>Time-based weights:</strong> Different edge weights based on time of day and service frequency</li>
      <li><strong>Transfer penalties:</strong> Accounting for the time and complexity of transfers</li>
      <li><strong>Cost optimization:</strong> Minimizing fare costs while maintaining reasonable travel times</li>
      <li><strong>Real-time adjustments:</strong> Adapting to delays and service changes</li>
    </ul>

    <h3>Key Insights</h3>
    <p>This project highlighted the practical applications of graph algorithms beyond theoretical computer science. The NYC subway system is a perfect example of a real-world graph problem where optimal solutions require balancing multiple objectives and constraints.</p>

    <p>The hackathon format pushed me to build a working prototype quickly while maintaining code quality and algorithmic correctness. It was rewarding to see how graph algorithms could directly improve the experience of navigating a complex urban transit system.</p>

    <h3>Reflections</h3>
    <p>The Cubist Hackathon was an excellent opportunity to apply quantitative and algorithmic thinking to a practical problem. Building a tool that could genuinely help tourists navigate NYC more efficiently demonstrated the real-world impact of well-designed algorithms.</p>
  `
};

export default CubistHackathon;

