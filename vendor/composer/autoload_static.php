<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb9ee963afb553d681815e839aacdc996
{
    public static $files = array (
        'cbd6bada88b6bca5d1b8b1b5733f514e' => __DIR__ . '/..' . '/wp-content-framework/core/autoload.php',
    );

    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'MatthiasMullie\\PathConverter\\' => 29,
            'MatthiasMullie\\Minify\\' => 22,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'MatthiasMullie\\PathConverter\\' => 
        array (
            0 => __DIR__ . '/..' . '/matthiasmullie/path-converter/src',
        ),
        'MatthiasMullie\\Minify\\' => 
        array (
            0 => __DIR__ . '/..' . '/matthiasmullie/minify/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitb9ee963afb553d681815e839aacdc996::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb9ee963afb553d681815e839aacdc996::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
