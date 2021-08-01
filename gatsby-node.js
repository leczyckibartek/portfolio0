exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allWpPage {
        edges {
          node {
            id
            slug
            uri
            title
            databaseId
          }
        }
      }
    }
  `)

  data.allWpPage.edges.forEach(edge => {
    const path = edge.node.uri
    const id = edge.node.id
    let slug = edge.node.slug
    const wordpress_id = edge.node.databaseId
    // Create pages from slug, but in case of front page disregard slug. 
    path === "/" ? slug = path : null
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/page/index.js`),
      context: {
        id: id,
        slug: slug,
        wordpress_id: wordpress_id
      },
    })
  })
}

// No longer needed?
// // Schema allows for dumping all the annoying dummy content and placeholders that otherwise would break builds when left empty.
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type WpPage implements Node {
//       id: ID
//       title: String
//       slug: String
//       author: WpNodeWithAuthorToUserConnectionEdge
//     }
//     type WpNodeWithAuthorToUserConnectionEdge implements Node {
//       name: String
//       slug: String
//       uri: String
//     }
//     type wordpress__PAGEAcf implements Node {
//       sections_page: [WordPressAcf_content] @link(by: "id", from: "sections_page___NODE")
//     }
//     type WordPressAcf_content implements Node {
//       id: ID
//       anchor: String
//       classes: String
//       block: [WordPressAcf_contentblock] @link(by: "id", from: "block___NODE")
//     }
//     type WordPressAcf_contentblock implements Node {
//       id: ID
//       fieldGroupName: String
//       anchor: String
//       classes: String
//       bg_overlay: String
//       parallax_from: String
//       parallax_to: String
//       wysiwyg: String
//       img: wordpress__wp_media @link(by: "id", from: "img___NODE")
//       img_responsive: wordpress__wp_media @link(by: "id", from: "img_responsive___NODE")
//       video_source: String
//       video_iframe: String
//       video_file: wordpress__wp_media @link(by: "id", from: "video_file___NODE")
//       asset: [WordPressAcf_contentblockasset]
//     }
//     type WordPressAcf_contentblockasset implements Node {
//       id: ID
//       fieldGroupName: String
//       asset_id: String
//       asset_wysiwyg: String
//       asset_field: String
//       asset_map: WordPressAcf_contentblockassetAsset_map
//       asset_img: wordpress__wp_media
//       asset_img_responsive: wordpress__wp_media
//       asset_file: wordpress__wp_media
//     }
//     type WordPressAcf_contentblockassetAsset_map implements Node {
//       address: String
//       lat: Float
//       lng: Float
//       zoom: Int
//       place_id: String
//       name: String
//       city: String
//       state: String
//       state_short: String
//       post_code: String
//       country: String
//       country_short: String
//     }
//     type wordpress__wp_media implements Node {
//       localFile: File @link(by: "id", from: "localFile___NODE")
//     }
//   `
//   createTypes(typeDefs)
// }