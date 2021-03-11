/// <reference types="next" />
/// <reference types="next/types/global" />

import { AriaAttributes, DOMAttributes } from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    attribution?: string
    page_id?: string
    app_id?: string
    theme_color?: string
  }
}
