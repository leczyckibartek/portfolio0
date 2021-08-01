import { graphql } from 'gatsby'

export const acfContent = graphql`
	fragment acfContentOld on WordPressAcf_content {
		id
		anchor
		classes
		block {
			... on WordPressAcf_contentblock {
				id
				acf_fc_layout
				anchor
				classes
				bg_overlay
				parallax_from
				parallax_to
				wysiwyg
				img {
					localFile {
						...imgFull
					}
				}
				img_responsive {
					localFile {
						...imgFull
					}
				}
				video_source
				video_iframe
				video_file {
					localFile {
						publicURL
					}
				}
				asset {
					id
					acf_fc_layout
					asset_id
					asset_field
					asset_wysiwyg
					asset_img {
						localFile {
							...imgFull
						}
					}
					asset_img_responsive {
						localFile {
							...imgFull
						}
					}
					asset_file {
						localFile {
							publicURL
						}
					}
					asset_map {
						address
						lat
						lng
						zoom
						place_id
						name
						city
						state
						state_short
						post_code
						country
						country_short
					}
				}
			}
		}
	}
`