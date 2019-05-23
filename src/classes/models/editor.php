<?php
/**
 * @version 0.0.1
 * @author Technote
 * @since 0.0.1
 * @copyright Technote All Rights Reserved
 * @license http://www.opensource.org/licenses/gpl-2.0.php GNU General Public License, version 2
 * @link https://technote.space/
 */

namespace Gutenberg_Samples\Classes\Models;

use WP_Framework_Common\Traits\Package;
use WP_Framework_Core\Traits\Hook;
use WP_Framework_Core\Traits\Singleton;
use WP_Framework_Presenter\Traits\Presenter;

if ( ! defined( 'GUTENBERG_SAMPLES' ) ) {
	exit;
}

/**
 * Class Editor
 * @package Gutenberg_Samples\Classes\Models
 */
class Editor implements \WP_Framework_Core\Interfaces\Singleton, \WP_Framework_Core\Interfaces\Hook, \WP_Framework_Presenter\Interfaces\Presenter {

	use Singleton, Hook, Presenter, Package;

	/**
	 * enqueue css for gutenberg
	 */
	/** @noinspection PhpUnusedPrivateMethodInspection */
	private function enqueue_block_editor_assets() {
		$this->enqueue_script( 'gutenberg-dropdown1', 'dropdown1.min.js', [
			'wp-components',
			'wp-rich-text',
			'wp-editor',
			'wp-element',
			'wp-format-library',
		], $this->app->get_plugin_version(), false );
		$this->enqueue_style( 'gutenberg-dropdown1', 'dropdown1.css' );

		$this->enqueue_script( 'gutenberg-dropdown2', 'dropdown2.min.js', [
			'wp-components',
			'wp-rich-text',
			'wp-editor',
			'wp-element',
			'wp-format-library',
			'wp-hooks',
		], $this->app->get_plugin_version(), false );
		$this->enqueue_style( 'gutenberg-dropdown2', 'dropdown2.css' );
	}
}