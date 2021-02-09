import React from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"

import gutenbergStyle from "./styles/gutenberg/style.css"
import gutenbergTheme from "./styles/gutenberg/theme.css"

import Header from "./header"

import Loading from "./loading"
import List from "./list"
import Post from "./post"
import Page from "./page"
import Error from "./error"

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Head>
        <title>Culver Lau</title>
        <meta
          name="description"
          content="Website Developer, Photographer, Videographer"
        />
      </Head>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
          img {
            max-width: 100%;
            height: auto;
          }
        `}
      />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Header />
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Page when={data.isDestinations} />
          <Error when={data.isError} />
        </Switch>
      </Main>
    </>
  )
}

export default connect(Root)

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`
