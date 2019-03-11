export default {
  key: 'snow',
  icon: 'snowflake',
  label: 'Snow',
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
          'Snow Routes'
        ]
      }
    }
  ]
}
