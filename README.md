<h1 style="color: #4CAF50; font-size: 36px; text-align: center;">RealTimeCrickScorer ⚡🏏</h1>

<p style="font-size: 18px; text-align: center; color: #555;">A web application for live cricket scores, built with Angular, Spring Boot, MySQL, and web scraping from Cricbuzz.</p>

<hr>

<h2 style="color: #FF5722; font-size: 28px;">🚀 Tech Stack</h2>
<ul style="font-size: 18px; color: #333;">
    <li><strong>Frontend</strong>: <span style="color: #3b82f6;">Angular</span></li>
    <li><strong>Backend</strong>: <span style="color: #607d8b;">Spring Boot (Java)</span></li>
    <li><strong>Database</strong>: <span style="color: #FF9800;">MySQL</span></li>
    <li><strong>Web Scraping</strong>: <span style="color: #673ab7;">Cricbuzz API / JSoup</span></li>
</ul>

<h2 style="color: #FF5722; font-size: 28px;">✨ Features</h2>
<ul style="font-size: 18px; color: #333;">
    <li>⚡ Real-time cricket match scores</li>
    <li>🌐 Web scraping of live cricket match data from <span style="color: #0d47a1;"><strong>Cricbuzz</strong></span></li>
    <li>📊 View live stats like teams, overs, wickets, and more</li>
    <li>🎮 User-friendly interface to view cricket statistics</li>
</ul>

<h2 style="color: #FF5722; font-size: 28px;">🛠️ Prerequisites</h2>
<p style="font-size: 18px; color: #333;">
    Before running the application, ensure you have the following installed:
</p>
<ul style="font-size: 18px; color: #333;">
    <li>🔧 <strong>Node.js</strong> and <strong>npm</strong> (for Angular frontend)</li>
    <li>☕ <strong>Java 8+</strong> (for Spring Boot backend)</li>
    <li>💾 <strong>MySQL</strong> (for the database)</li>
    <li>⚙️ <strong>Maven</strong> (for building Spring Boot application)</li>
    <li>🧑‍💻 <strong>Git</strong> (optional, for cloning the repository)</li>
</ul>

<h2 style="color: #FF5722; font-size: 28px;">📥 Getting Started</h2>

<h3 style="color: #2196F3;">1. Clone the repository</h3>
<pre style="font-size: 16px; background-color: #f1f1f1; padding: 10px; color: #333;">
git clone https://github.com/yourusername/RealTimeCrickScorer.git
</pre>

<h3 style="color: #2196F3;">2. Backend Setup (Spring Boot)</h3>

<h4 style="color: #009688;">Step 1: Configure Database</h4>
<p style="font-size: 16px; color: #333;">
    - Create a new MySQL database for the project, e.g., <strong>crick_scorer_db</strong>.
</p>
<pre style="font-size: 16px; background-color: #f1f1f1; padding: 10px; color: #333;">
CREATE DATABASE crick_scorer_db;
</pre>
<p style="font-size: 16px; color: #333;">
    - Update <code>application.properties</code> in the Spring Boot project to configure your database connection.
</p>

<h4 style="color: #009688;">Step 2: Build and Run Spring Boot Application</h4>
<pre style="font-size: 16px; background-color: #f1f1f1; padding: 10px; color: #333;">
cd backend
mvn clean install
mvn spring-boot:run
</pre>
<p style="font-size: 16px; color: #333;">
    - Your backend should now be running at <strong>http://localhost:8080</strong>.
</p>

<h4 style="color: #009688;">Step 3: Implement Web Scraping (Optional)</h4>
<p style="font-size: 16px; color: #333;">
    - Use a library like <strong>JSoup</strong> to scrape live cricket scores from Cricbuzz. 
</p>
<pre style="font-size: 16px; background-color: #f1f1f1; padding: 10px; color: #333;">
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

public class CricbuzzScraper {
    public void scrapeLiveScores() {
        try {
            Document doc = Jsoup.connect("https://www.cricbuzz.com/live-cricket-scorecard").get();
            // Parse and store the data
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
</pre>

<h3 style="color: #2196F3;">3. Frontend Setup (Angular)</h3>

<h4 style="color: #009688;">Step 1: Install Node Modules</h4>
<pre style="font-size: 16px; background-color: #f1f1f1; padding: 10px; color: #333;">
cd frontend
npm install
</pre>

<h4 style="color: #009688;">Step 2: Run Angular Development Server</h4>
<pre style="font-size: 16px; background-color: #f1f1f1; padding: 10px; color: #333;">
ng serve
</pre>
<p style="font-size: 16px; color: #333;">
    - The frontend will be accessible at <strong>http://localhost:4200</strong>.
</p>

<h3 style="color: #2196F3;">4. API Integration</h3>
<p style="font-size: 16px; color: #333;">
    - Use Angular's HttpClient to fetch live scores from the Spring Boot backend.
</p>
<pre style="font-size: 16px; background-color: #f1f1f1; padding: 10px; color: #333;">
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CricketService {
  private apiUrl = 'http://localhost:8080/api/cricket';

  constructor(private http: HttpClient) {}

  getLiveScores() {
    return this.http.get(this.apiUrl + '/live-scores');
  }
}
</pre>

<h3 style="color: #2196F3;">5. Run the Application</h3>
<ol style="font-size: 18px; color: #333;">
    <li>Start the Spring Boot backend: <code>mvn spring-boot:run</code></li>
    <li>Start the Angular frontend: <code>ng serve</code></li>
    <li>Open <strong>http://localhost:4200</strong> in your browser to view the real-time cricket scores.</li>
</ol>

<h2 style="color: #FF5722; font-size: 28px;">📂 Folder Structure</h2>
<pre style="font-size: 16px; background-color: #f1f1f1; padding: 10px; color: #333;">
RealTimeCrickScorer/
│
├── backend/                   # Spring Boot backend
│   ├── src/
│   ├── pom.xml                # Maven build configuration
│   └── application.properties  # Database configuration
│
└── frontend/                   # Angular frontend
    ├── src/
    ├── angular.json            # Angular configuration
    └── package.json            # Node.js packages
</pre>

<h2 style="color: #FF5722; font-size: 28px;">📝 Database Schema</h2>

<p style="font-size: 18px; color: #333;">
    <strong>Match:</strong> Stores match details such as team names, match status, and live scores.
    <br>
    Columns: <code>id</code>, <code>team1</code>, <code>team2</code>, <code>status</code>, <code>team1_score</code>, <code>team2_score</code>, <code>current_over</code>, <code>current_wickets</code>
</p>
<p style="font-size: 18px; color: #333;">
    <strong>Player:</strong> Stores player statistics.
    <br>
    Columns: <code>id</code>, <code>name</code>, <code>team</code>, <code>runs_scored</code>, <code>wickets_taken</code>
</p>

<h2 style="color: #FF5722; font-size: 28px;">💡 Contributing</h2>
<p style="font-size: 18px; color: #333;">
    Feel free to fork this project and submit pull requests. If you find any bugs or have suggestions for improvements, please create an issue on GitHub.
</p>

<h2 style="color: #FF5722; font-size: 28px;">📄 License</h2>
<p style="font-size: 18px; color: #333;">
    This project is licensed under the MIT License - see the <strong><a href="LICENSE" style="color: #2196F3;">LICENSE</a></strong> file for details.
</p>

