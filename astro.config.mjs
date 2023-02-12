import { defineConfig } from 'astro/config'

// https://astro-imagetools-docs.vercel.app/en/introduction
import { astroImageTools } from 'astro-imagetools'

// https://astro.build/config
import sanity from 'astro-sanity'

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
    integrations: [
        astroImageTools,
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
        sanity({
            projectId: 'nk528ugs',
            dataset: 'production',
            apiVersion: '2021-03-25',
            useCdn: false,
        }),
    ],
    output: 'server',
    adapter: vercel(),
})
