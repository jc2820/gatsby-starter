// import React from "react"
// import { Link, graphql } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = props => {
//   const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
//     console.log({data});
//   return (
//     <Layout>
//       <SEO title="Home" />
//       {/* <h1>{data.title}</h1>
//       <p>{data.intro}</p>
//       <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//         <img src={data.image} alt="photo of Ruby" />
//       </div> */}
//       <Link to="/">Go home</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//     </Layout>
//   )
// }
// export default IndexPage

// export const query = graphql`
//   query {
//     allFile(
//       filter: { sourceInstanceName: { eq: "content" }, name: { eq: "survey" } }
//     ) {
//       edges {
//         node {
//           childMarkdownRemark {
//             frontmatter {
//               leaders
//               teachers
//               pupils
//             }
//           }
//         }
//       }
//     }
//   }
`