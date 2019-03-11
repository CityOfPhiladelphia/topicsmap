export default {
  key: 'pickup',
  icon: 'trash-alt',
  label: 'Pickup',
  components: [
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
