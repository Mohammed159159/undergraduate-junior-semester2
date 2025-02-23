import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Mohammed159159/undergraduate-junior-semester2.git",
      Discussion: "https://github.com/Mohammed159159/undergraduate-junior-semester2/discussions",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({
      filterFn: (page) => page.name !== "Meta",
    }),
  ],
  right: [
    Component.Graph({
      localGraph: { enableRadial: true, repelForce: 15, opacityScale: 4, fontSize: 1, drag: false, focusOnHover: true },
      globalGraph: {
        enableRadial: true,
        repelForce: 20,
        opacityScale: 4,
        fontSize: 1,
        drag: false,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({
      filterFn: (page) => page.name !== "Meta",
    }),
  ],
  right: [],
}
