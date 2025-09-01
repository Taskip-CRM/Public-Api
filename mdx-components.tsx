import type { MDXComponents } from 'mdx/types'
import dynamic from 'next/dynamic'

const ApiTester = dynamic(() => import('./components/ApiTester'), {
  ssr: false,
})

const Callout = dynamic(() => import('./components/Callout'), {
  ssr: true,
})

const BackToTop = dynamic(() => import('./components/BackToTop'), {
  ssr: false,
})
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ApiTester,
    Callout,
    BackToTop,
  }
}