import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Introduction: Cobweb 2023 ",
    url: "https://watchfullcobweb2023movieyourul.gatsbyjs.io",
    description:
      "Welcome to the thrilling world of Cobweb 2023 the highly anticipated movie of 2023 that promises to take audiences on a roller-coaster ride of emotions, suspense, and intrigue. In this article, we delve into the details of this cinematic masterpiece, exploring the plot, cast, behind-the-scenes insights, critical reception, and more. So buckle up, and let's dive into the enthralling universe of Cobweb 2023.",
  },
  {
    text: Cobweb 2023 2023: Plot Summary",
    url: "https://watchfullcobweb2023movieyourul.gatsbyjs.io",
    description:
      "Set in a quaint town nestled between the misty mountains, 2023 revolves around the mysterious disappearance of five teenagers on a seemingly ordinary summer night. As their families and friends embark on a desperate search for answers, they uncover a web of dark secrets lurking beneath the idyllic facade of their peaceful town. The movie artfully weaves together elements of mystery, horror, and drama, keeping the audience on the edge of their seats throughout. As the suspense builds, unexpected twists and turns emerge, revealing the hidden connections between the characters and the shocking truth behind the disappearances.",
  },
  {
    text: Cobweb 2023 2023: Cast and Characters",
    url: "https://watchfullcobweb2023movieyourul.gatsbyjs.io",
    description:
      Cobweb 2023 2023 boasts an ensemble cast of talented actors who bring the characters to life with their exceptional performances. At the heart of the story is Emma Watson, portraying the resilient and determined sister of one of the missing teenagers. Her emotional journey as she unravels the town's secrets is a captivating highlight of the film. Joining her is the charismatic John Krasinski, who plays the enigmatic town sheriff, carrying his own burden of guilt and remorse. The chemistry between Watson and Krasinski on screen adds an extra layer of depth to the narrative. The supporting cast, including seasoned actors like Angela Bassett and rising stars such as Noah Jupe and Isabela Moner, deliver powerful portrayals, making the fictional town's inhabitants feel real and relatable.",
  },
  {
    text: Cobweb 2023 2023: Behind the Scenes",
    url: "https://watchfullcobweb2023movieyourul.gatsbyjs.io",
    description:
      "Directed by the visionary filmmaker Christopher Nolan, Cobweb 2023 benefits from his signature style of storytelling. Nolan's ability to create immersive worlds, coupled with his mastery of non-linear narratives, elevates 2023 from a conventional mystery to an unforgettable cinematic experience. The screenplay, penned by the talented screenwriter Jennifer Lawrence, expertly navigates the complexities of the plot, leaving no loose ends and offering a satisfying conclusion. The hauntingly beautiful cinematography by Roger Deakins captures the essence of the small town, adding to the film's overall atmospheric allure.",
  },
]

const samplePageLinks = [
  {
    text: Cobweb 2023 2023 Movie",
    url: "https://aius.site/movie/709631/cobweb.html",
    description:
      "Cobweb 2023 the highly anticipated movie of 2023 that promises to take audiences on a roller-coaster ride of emotions, suspense, and intrigue. In this article, we delve into the details of this cinematic masterpiece, exploring the plot, cast, behind-the-scenes insights, critical reception, and more. So buckle up, and let's dive into the enthralling universe of 2023,
  },
  
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/cobweb2023.jpg"
        loading="eager"
        width={720}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Watch Full <b>Cobweb 2023 Movie</b> - Your Ultimate Guide to the Thrilling Sci-Fi Adventure
      </h1>
      <p className={styles.intro}>
        <b>Visit Link To Watch Full Movie: 👉</b> {" "}
       {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
