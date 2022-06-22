import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// https://github.com/unocss/unocss
export default defineConfig({
  details: true,
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'Inter',
      },
    }),
  ],
  shortcuts: [
    {
      'color-base': 'text-$color',
      'bg-base': 'bg-$bg',
      'bg-tint': 'bg-$tint',
      'theme-base': 'font-sans color-base bg-base',
      'theme-tint': 'font-sans color-base bg-tint',
      'h-stack': 'flex items-center justify-center',
      'v-stack': 'flex flex-col items-center justify-center',
    },
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
