<?php

function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
   wp_enqueue_script(
       'custom-script',
        get_stylesheet_directory_uri(). '/js/custom.js',
       array( 'jquery' ), '1.1.0', true);
}
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

?>
