/*
___________           .__
\__    ___/___ ______ |__| ____   ______ _____ _____  ______
  |    | /  _ \\____ \|  |/ ___\ /  ___//     \\__  \ \____ \
  |    |(  <_> )  |_> >  \  \___ \___ \|  Y Y  \/ __ \|  |_> >
  |____| \____/|   __/|__|\___  >____  >__|_|  (____  /   __/
               |__|           \/     \/      \/     \/|__|
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons/faSnowflake';
import { faScroll } from '@fortawesome/free-solid-svg-icons/faScroll';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';
import { faRoad } from '@fortawesome/free-solid-svg-icons/faRoad';
library.add(faSnowflake, faScroll, faTrashAlt, faRoad);

import layerboard from '@philly/layerboard/src/main.js';

// Topics
import pave from './topics/pave';
import snow from './topics/snow';
import pickup from './topics/pickup';
import permit from './topics/permit';

// turn off console logging in production
const { hostname='' } = location;
if (hostname !== 'localhost' && !hostname.match(/(\d+\.){3}\d+/)) {
  console.log = console.info = console.debug = console.error = function () {};
}

window.openHelp = function(){
  var firstHash = window.location.hash;
  console.log('setHash is running, firstHash:', firstHash);
  var firstHashArr = firstHash.split('/').slice(2);
  console.log('firstHashArr:', firstHashArr);
  var finalHash = '#/help';
  for (var i=0; i < firstHashArr.length; i++) {
    finalHash = finalHash + '/' + firstHashArr[i];
  }
  window.location.hash = finalHash;
}

var BASE_CONFIG_URL = 'https://cdn.jsdelivr.net/gh/ajrothwell/openmaps-base-config@de93992fa42660d4df22e90df584c34ad480261e/config.js';
var GATEKEEPER_KEY = 'ec8681f792812d7e3ff15e9094bfd4ad';
var WEBMAP_ID = 'dc26248081404ffbb428b988b4dc940f';

layerboard({
  bundled: true,
  layerFilter: false,
  router: {
    enabled: true
  },
  geolocation: {
    enabled: true,
    icon: ['far', 'dot-circle']
  },
  addressInput: {
    width: 415,
    mapWidth: 300,
    position: 'right',
    autocompleteEnabled: false,
    autocompleteMax: 15,
    placeholder: 'Search the map',
  },
  map: {
    defaultBasemap: 'pwd',
    defaultIdentifyFeature: 'address-marker',
    imagery: {
      enabled: true
    },
    historicBasemaps: {
      enabled: true
    },
    center: [-75.16347348690034, 39.952562122622254],
    clickToIdentifyFeatures: true,
    containerClass: 'map-container-type2',
  },
  cyclomedia: {
    enabled: true,
    measurementAllowed: false,
    popoutAble: true,
  },
  pictometry: {
    enabled: true,
  },
  gatekeeperKey: GATEKEEPER_KEY,
  baseConfig: BASE_CONFIG_URL,
  webmapId: WEBMAP_ID,
  defaultPanel: 'topics',
  topics: [
    permit,
    pave,
    pickup,
    snow,
  ],
  defaultTopic: null,
  components: [
    {
      type: 'callout',
      slots: {
        text: 'Welcome to STREETsmartPHL.  Turn on and off map layers in the topics below'
      }
    },
    {
      type: 'topic-set',
      // options: {
      //   defaultTopic: null
      // }
    },
  ],
  modals: ['help'],
});
