export default {
  key: 'pickup',
  icon: 'trash-alt',
  label: 'Pickup',
  components: [
    {
      type: 'callout',
      slots: {
        text: 'Turn on and off layers about trash collection in Philadelphia',
      }
    },
    {
      type: 'checkbox-set',
      options: {
        topicLayers: [
          'No-thru-Trucks Streets',
          'Historic Streets'
        ]
      }
    }
  ]
}
