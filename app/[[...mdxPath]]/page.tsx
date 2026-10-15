import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: {
  params: Promise<{ mdxPath?: string[] }>
}) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  const path = `/${(params.mdxPath ?? []).join('/')}`
  // The home page's H1 already names the site, so skip the layout's title template there.
  const title = path === '/' ? { absolute: 'Taskip REST API Documentation' } : metadata.title
  return { ...metadata, title, alternates: { canonical: path } }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props: {
  params: Promise<{ mdxPath?: string[] }>
}) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata, ...rest } = result
  return (
    <Wrapper toc={toc} metadata={metadata} {...rest}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
