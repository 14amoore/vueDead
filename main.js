const vm = new Vue({
  el: '#steal',
  data: {
    tourStops: '',
    stops: [
      { date: 'June 20th', venue: 'BBandT Pavilion' },
      { date: 'June 22nd', venue: 'Gillette Stadium' },
      { date: 'June 23rd', venue: 'Citi Field' },
      { date: 'June 26th', venue: 'Jiffy Lube Live' },
      { date: 'June 29th', venue: 'Cellairis Ampitheater' },
      { date: 'July 2nd', venue: 'Dos Equis Pavilion' },
      { date: 'July 5th', venue: 'Folsom Field' },
      { date: 'July 6th', venue: 'Folsom Field' }
    ]
  },
  computed: {
    deadDate() {
      return moment().format('dddd MMMM Do');
    }
  }
});
