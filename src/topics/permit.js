export default {
  key: 'permit',
  icon: 'scroll',
  label: 'PermitPHL',
  // parcels: 'pwd',
  components: [
    {
      type: 'callout',
      slots: {
        text: 'click <a target="blank" href="http://stsweb.phila.gov/permitPHL/FAQ.pdf">here</a>\
        to view the frequently asked questions (FAQ) doc',
      }
    },
    {
      type: 'checkbox-set',
      options: {
        topicLayers: [
          'Current Lane Closures',
          'Future Lane Closures',
        ],
        defaultTopicLayers: [
          'Current Lane Closures'
        ],
      }
    }
  ]
}
