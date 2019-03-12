export default {
  key: 'snow',
  icon: 'snowflake',
  label: 'Snow',
  // parcels: 'slate',
  components: [
    {
      type: 'callout',
      slots: {
        text: 'Turn on and off layers about snow plowing in Philadelphia',
      }
    },
    {
      type: 'checkbox-set',
      options: {
        topicLayers: [
          'Snow Segment Visits'
        ],
        defaultTopicLayers: [
          'Snow Segment Visits'
        ],
      }
    }
  ]
}
