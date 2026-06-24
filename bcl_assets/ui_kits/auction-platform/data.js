// Shared sample data for the BCL auction-platform UI kit.
window.BCL_DATA = {
  teams: [
    { name: 'Mumbai Strikers', accent: 'gold', players: 12, spent: 84.5 },
    { name: 'Chennai Kings', accent: 'sky', players: 11, spent: 76.0 },
    { name: 'Delhi Dynamos', accent: 'pink', players: 13, spent: 91.5 },
    { name: 'Bengaluru Blasters', accent: 'green', players: 10, spent: 68.0 },
    { name: 'Kolkata Knights', accent: 'peach', players: 12, spent: 80.5 },
    { name: 'Punjab Panthers', accent: 'gold', players: 9, spent: 54.0 },
  ],
  featured: [
    { name: 'Rohit Sharma', role: 'Batter', variant: 'pink', status: 'live', basePrice: '₹ 2.00 CR',
      stats: [{label:'Matches',value:243},{label:'Runs',value:'10.7k'},{label:'Avg',value:48.9}] },
    { name: 'Jasprit Bumrah', role: 'Bowler', variant: 'green', status: 'sold', basePrice: '₹ 2.00 CR', soldPrice: '₹ 6.20 CR',
      stats: [{label:'Matches',value:189},{label:'Wkts',value:312},{label:'Econ',value:6.6}] },
    { name: 'Virat Kohli', role: 'Batter', variant: 'gold', status: 'upcoming', basePrice: '₹ 2.00 CR',
      stats: [{label:'Matches',value:296},{label:'Runs',value:'12.3k'},{label:'Avg',value:52.7}] },
    { name: 'Hardik Pandya', role: 'All-Rounder', variant: 'peach', status: 'upcoming', basePrice: '₹ 1.50 CR',
      stats: [{label:'Matches',value:174},{label:'Runs',value:'3.4k'},{label:'Wkts',value:142}] },
  ],
  squad: [
    { name: 'Suryakumar Yadav', role: 'Batter', price: '₹ 5.20 CR' },
    { name: 'Trent Boult', role: 'Bowler', price: '₹ 4.10 CR' },
    { name: 'Tim David', role: 'All-Rounder', price: '₹ 3.80 CR' },
    { name: 'Ishan Kishan', role: 'Wicketkeeper', price: '₹ 3.20 CR' },
    { name: 'Piyush Chawla', role: 'Bowler', price: '₹ 1.40 CR' },
    { name: 'Tilak Varma', role: 'Batter', price: '₹ 2.60 CR' },
  ],
  database: [
    { name: 'Rohit Sharma', role: 'Batter', status: 'live', base: '₹ 2.00 CR' },
    { name: 'Jasprit Bumrah', role: 'Bowler', status: 'sold', base: '₹ 6.20 CR' },
    { name: 'Virat Kohli', role: 'Batter', status: 'upcoming', base: '₹ 2.00 CR' },
    { name: 'Hardik Pandya', role: 'All-Rounder', status: 'upcoming', base: '₹ 1.50 CR' },
    { name: 'Ravindra Jadeja', role: 'All-Rounder', status: 'sold', base: '₹ 4.80 CR' },
    { name: 'KL Rahul', role: 'Wicketkeeper', status: 'upcoming', base: '₹ 2.00 CR' },
    { name: 'Mohammed Shami', role: 'Bowler', status: 'unsold', base: '₹ 1.50 CR' },
    { name: 'Shubman Gill', role: 'Batter', status: 'upcoming', base: '₹ 2.00 CR' },
  ],
};
