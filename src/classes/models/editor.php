<?php
/**
 * @author Technote
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
	 *
	 * @noinspection PhpUnusedPrivateMethodInspection
	 * @SuppressWarnings(PHPMD.UnusedPrivateMethod)
	 */
	private function enqueue_block_editor_assets() {
		$this->enqueue_dropdown1();
		$this->enqueue_dropdown2();
	}

	/**
	 * enqueue dropdown1
	 */
	private function enqueue_dropdown1() {
		$this->enqueue_script( 'gutenberg-dropdown1', 'dropdown1.min.js', $this->app->editor->filter_packages( [
			'wp-block-editor',
			'wp-components',
			'wp-editor',
			'wp-rich-text',
			'wp-element',
			'wp-format-library',
		] ), $this->app->get_plugin_version(), false );
		$this->enqueue_style( 'gutenberg-dropdown1', 'dropdown1.css' );
	}

	/**
	 * enqueue dropdown2
	 */
	private function enqueue_dropdown2() {
		$this->enqueue_script( 'gutenberg-dropdown2', 'dropdown2.min.js', $this->app->editor->filter_packages( [
			'wp-block-editor',
			'wp-components',
			'wp-core-data',
			'wp-data',
			'wp-editor',
			'wp-element',
			'wp-i18n',
			'wp-rich-text',
			'wp-url',
		], [ 'lodash' ] ), $this->app->get_plugin_version(), false );
		$this->enqueue_style( 'gutenberg-dropdown2', 'dropdown2.css' );
	}
}
