<?php
/**
 * Class EditorTest
 *
 * @package Tests
 */

use Gutenberg_Samples\Classes\Models\Editor;
use PHPUnit\Framework\TestCase;

/**
 * @noinspection PhpUndefinedClassInspection
 * Editor test case.
 *
 * @mixin TestCase
 */
class EditorTest extends WP_UnitTestCase {

	/**
	 * @var WP_Framework
	 */
	protected static $app;

	/**
	 * @var Editor $editor
	 */
	private static $editor;

	/**
	 * @var bool $is_ci
	 */
	private static $is_ci;

	/**
	 * @SuppressWarnings(StaticAccess)
	 */
	public static function setUpBeforeClass() {
		static::$app    = WP_Framework::get_instance( GUTENBERG_SAMPLES );
		static::$editor = Editor::get_instance( static::$app );
		static::$is_ci  = ! empty( getenv( 'CI' ) );
		static::reset();
	}

	public static function tearDownAfterClass() {
		static::reset();
		if ( static::$is_ci ) {
			static::$app->file->delete( static::$app->define->plugin_assets_dir . DS . 'js' . DS . 'dropdown1.min.js' );
			static::$app->file->delete( static::$app->define->plugin_assets_dir . DS . 'js' . DS . 'dropdown2.min.js' );
		}
	}

	private static function reset() {
		wp_dequeue_script( 'gutenberg-dropdown1' );
		wp_dequeue_script( 'gutenberg-dropdown2' );
		if ( static::$is_ci ) {
			static::$app->file->put_contents( static::$app->define->plugin_assets_dir . DS . 'js' . DS . 'dropdown1.min.js', '' );
			static::$app->file->put_contents( static::$app->define->plugin_assets_dir . DS . 'js' . DS . 'dropdown2.min.js', '' );
		}
	}

	public function test_enqueue_block_editor_assets() {
		static::reset();

		$this->assertFalse( wp_script_is( 'gutenberg-dropdown1' ) );
		$this->assertFalse( wp_script_is( 'gutenberg-dropdown2' ) );
		do_action( 'enqueue_block_editor_assets' );
		$this->assertTrue( wp_script_is( 'gutenberg-dropdown1' ) );
		$this->assertTrue( wp_script_is( 'gutenberg-dropdown2' ) );
	}
}
