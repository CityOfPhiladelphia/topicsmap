export default {
  key: 'pave',
  icon: 'road',
  label: 'Paving',
  // parcels: 'pwd',
  components: [
    {
      type: 'callout',
      slots: {
        text: 'Turn on and off layers about paving in Philadelphia',
      }
    },
    {
      type: 'checkbox-set',
      options: {
        topicLayers: [
          'Paving Plan 2015',
        ],
        defaultTopicLayers: [
          'Paving Plan 2015'
        ],
      }
    }
  ]
}
