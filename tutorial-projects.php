<?php
/**
 * Plugin Name:       Tutorial Projects
 * Description:       These blocks has made based on Ovi Plabon's Tutorial.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Robert Biswas
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       tutorial-projects
 *
 * @package           lwhh
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function lwhh_tutorial_projects_block_init() {
	register_block_type( __DIR__ . '/build/hello/' );
	register_block_type( __DIR__ . '/build/ovi-image/' );
	register_block_type( __DIR__ . '/build/ovi-card/' );
	register_block_type( __DIR__ . '/build/ovi-card-innerblocks/' );
}
add_action( 'init', 'lwhh_tutorial_projects_block_init' );

/**
 * Add support for Dashicons to WordPress frontend.
 */

add_action('enqueue_block_assets', function (): void {
    wp_enqueue_style('dashicons');
});