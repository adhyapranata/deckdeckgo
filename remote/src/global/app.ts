import '@ionic/core';

import '@deckdeckgo/core';
import '@deckdeckgo/slide-title';

import {setupConfig} from '../app/services/environment/environment-config';

setupConfig({
    signalingServerUrl: 'https://api.deckdeckgo.com'
});

// import { setupConfig } from '@ionic/core';

// setupConfig({
//   mode: 'ios'
// });
