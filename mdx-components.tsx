import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import dynamic from 'next/dynamic'
import Callout from './components/Callout'

const ApiTester = dynamic(() => import('./components/ApiTester'), {
  ssr: false
})

const BackToTop = dynamic(() => import('./components/BackToTop'), {
  ssr: false
})

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components = {}) {
  return {
    ...docsComponents,
    ...components,
    ApiTester,
    Callout,
    BackToTop
  }
}
