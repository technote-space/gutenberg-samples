<?php
/**
 * Plugin Name: Gutenberg Samples
 * Plugin URI:
 * Description: Gutenberg samples
 * Author: Technote
 * Version: v0.2.0
 * Author URI: https://technote.space
 * Text Domain: gutenberg-samples
 * Domain Path: /languages/
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( defined( 'GUTENBERG_SAMPLES' ) ) {
	return;
}

define( 'GUTENBERG_SAMPLES', 'Gutenberg_Samples' );

@require_once dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';

WP_Framework::get_instance( GUTENBERG_SAMPLES, __FILE__ );
