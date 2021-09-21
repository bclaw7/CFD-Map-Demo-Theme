<?php

// Theme Files

function theme_files() {
    wp_enqueue_style('main-style', get_template_directory_uri() . 'style.css');
    wp_enqueue_script('map-js', get_template_directory_uri() . '/js/map.js', array('jquery'), true, true);

    wp_enqueue_style( 'leaflet', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css' );	
	wp_enqueue_script( 'leaflet-js', 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js', array('jquery'), true, true );
}
add_action('wp_enqueue_scripts', 'theme_files');