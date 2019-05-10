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
		$this->enqueue_script( 'gutenberg-samples', 'dropdown1.min.js', [
			'wp-hooks',
			'wp-blocks',
			'wp-compose',
			'wp-element',
			'wp-editor',
			'wp-components',
			'wp-edit-post',
			'wp-data',
			'wp-i18n',
			'lodash',
		], $this->app->get_plugin_version(), false );
		$this->localize_script( 'gutenberg-samples', 'gutenbergSampleParams', [
			'plugin_icon' => $this->get_img_url( 'icon-24x24.png' ),
		] );
		$this->enqueue_style( 'gutenberg-samples', 'gutenberg.css' );
	}
}