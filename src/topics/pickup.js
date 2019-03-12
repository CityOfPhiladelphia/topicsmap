export default {
  key: 'pickup',
  icon: 'trash-alt',
  label: 'Pickup',
  // parcels: 'slate',
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
          'Pickup Segment Visits',
          'Rubbish and Recycling Collection Schedule',
          'Leaf Collection Areas',
          'Big Belly Wastebaskets',
        ],
        defaultTopicLayers: [
          'Pickup Segment Visits'
        ],
      }
    }
  ]
}
