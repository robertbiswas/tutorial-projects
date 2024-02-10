<?php
$block_content = $content;
if ( isset( $attributes['src'] )){
	$block_content = '<figure ' . get_block_wrapper_attributes() . ' >';
	$block_content .= '<img src='. esc_url($attributes['src'])  . ' alt=' . $attributes['alt'] .' />';
	$block_content .= '</figure>';
}
echo wp_kses_post( $block_content );