export default {
  key: 'snow',
  icon: 'snowflake',
  label: 'Snow',
  components: [
    {
      type: 'checkbox-set',
      options: {
        topicLayers: [
          'Current Lane Closures',
          'Vending Prohibited Streets'
        ]
      }
    }
  ]
}
