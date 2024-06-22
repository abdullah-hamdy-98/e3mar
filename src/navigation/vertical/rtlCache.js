// rtlCache.js
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin]
});

export default cacheRtl;
