import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Medication Reminder App</h1>
        <p>A Flutter mobile app to assist people in following their medication schedules and help caregivers track different medications, patients, and prescriptions.</p>
      </header>
      <main>
        <section>
          <h2>Problem Statement</h2>
          <p>Helping People Take Their Medicine with a Mobile App</p>
          <p>People, especially those with ongoing health issues, often don’t stick to their medication schedules, leading to poor health. Current tools like pill organizers and basic reminders often don’t solve all the reasons people miss their meds. Also, caregivers and healthcare providers need better tools to help patients manage their medications.</p>
        </section>
        <section>
          <h2>Stakeholders</h2>
          <ul>
            <li>Patients: People managing multiple medications, especially with ongoing illnesses.</li>
            <li>Caregivers: Family or professional caregivers helping patients with their meds.</li>
            <li>Healthcare Providers: Doctors, nurses, and pharmacists who monitor and support patients.</li>
            <li>Developers: The team building and maintaining the app.</li>
          </ul>
        </section>
        <section>
          <h2>Proposed Solution</h2>
          <p>We will create a mobile app that works on different devices using Flutter. It will have:</p>
          <ul>
            <li>User Profiles: Set up and manage profiles for multiple users.</li>
            <li>Medication Database: Store detailed info about each medication, including dosage and instructions.</li>
            <li>Reminders: Set and manage reminders with notifications for each medication, even when offline.</li>
            <li>Tracking: Log when medications are taken or missed and view the history.</li>
            <li>Reports: Create reports on medication adherence to share with healthcare providers.</li>
            <li>Security: Strong authentication and data encryption to protect user information.</li>
            <li>Optional Features: Connect with healthcare provider systems, provide medication refill reminders, and alert users to potential drug interactions.</li>
          </ul>
        </section>
        <section>
          <h2>Expected Benefits</h2>
          <ul>
            <li>Better Adherence: More people will take their medications on time, leading to better health.</li>
            <li>Improved Monitoring: Caregivers and healthcare providers will have better tools to support patients.</li>
            <li>Cost Savings: Lower healthcare costs due to fewer hospital visits and complications.</li>
          </ul>
        </section>
        <section>
          <h2>Team Members</h2>
          <ul>
            <li>Kato Kibirige Agathone - 2300725696</li>
            <li>Nanaozi Rachael - 2300715155</li>
            <li>Bainomugisha Derrick - 2300700350</li>
            <li>Kigongo Bazira Fred - 2300709771</li>
            <li>Ssozi Brandon - 2300717784</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>© 2024 Medication Reminder App Group 2</p>
      </footer>
    </div>
  );
}

export default App;
